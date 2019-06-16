import React from "react";
import { connect } from "react-redux";
import { getAllOrders } from "../../../actions/orderActions";

class ViewOrder extends React.Component {
  componentDidMount() {
    this.props.getAllOrders();
  }
  render() {
    return (
      <div className="container-fluid text-center">
        <h1>ViewOrder</h1>
        {JSON.stringify(this.props.orders)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order_r.orders
  };
};

export default connect(
  mapStateToProps,
  { getAllOrders }
)(ViewOrder);
