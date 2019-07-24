import React from "react";
import { connect } from "react-redux";
import ViewFeedback from "../ViewFeedback";
import ViewOrder from "../ViewOrder";
import {
  getMonthlySales,
  getProductWiseSales,
  getUserCount,
  getProductCount
} from "../../../actions/salesAction";
import Chart from "chart.js";

class AdminDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
    this.monthchartRef = React.createRef();
  }

  buildChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");
    //if (typeof myLineChart !== "undefined") myLineChart.destroy();
    new Chart(myChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: this.props.product_sales.map((d) => d.productid),
        datasets: [
          {
            label: "Sales according to product id",
            data: this.props.product_sales.map((d) => d.qty),
            fill: false,
            borderColor: "#6610f2"
          }
        ]
      },
      options: {
        //Customize chart options
      }
    });

    const mymonthChartRef = this.monthchartRef.current.getContext("2d");

    //if (typeof myLineChart !== "undefined") myLineChart.destroy();
    new Chart(mymonthChartRef, {
      type: "line",
      data: {
        //Bring in data
        labels: [
          "Jan",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "july",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "Monthly Sales",
            data: this.props.monthly_sales,
            fill: false,
            borderColor: "#6610f2"
          }
        ]
      },
      options: {
        //Customize chart options
      }
    });
  };

  componentDidMount = () => {
    this.props.getUserCount();
    this.props.getProductCount();
    this.props.getMonthlySales();
    this.props.getProductWiseSales();
    this.buildChart();
  };

  componentDidUpdate() {
    this.buildChart();
  }
  componentWillReceiveProps() {
    this.buildChart();
  }

  render() {
    return (
      <div className="container-fluid admin_dashboard">
        <main className="main ">
          <h1 className="text-center">Admin Dashboard</h1>
          <div className="main-overview">
            <div className="overviewcard">
              <div className="overviewcard__icon">Users</div>
              <div className="overviewcard__info">{this.props.user_count}</div>
            </div>
            <div className="overviewcard">
              <div className="overviewcard__icon">Products</div>
              <div className="overviewcard__info">
                {this.props.product_count}
              </div>
            </div>
            <div className="overviewcard">
              <div className="overviewcard__icon">Sales</div>
              <div className="overviewcard__info">{this.props.sales_count}</div>
            </div>
            <div className="overviewcard">
              <div className="overviewcard__icon">Earnings</div>
              <div className="overviewcard__info">
                {this.props.earnings_count}
              </div>
            </div>
          </div>
          <div className="main-cards">
            <div className="card">
              <canvas ref={this.monthchartRef} />;
            </div>
            <div className="card">
              <canvas ref={this.chartRef} />;
            </div>
          </div>
          <ViewFeedback />
          <ViewOrder />
        </main>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sales_count: state.sales_r.sales_count,
    earnings_count: state.sales_r.earnings_count,
    user_count: state.sales_r.user_count,
    product_count: state.sales_r.product_count,
    monthly_sales: state.sales_r.monthly_sales,
    product_sales: state.sales_r.product_sales
  };
};
export default connect(
  mapStateToProps,
  {
    getMonthlySales,
    getProductWiseSales,
    getUserCount,
    getProductCount
  }
)(AdminDashboard);
