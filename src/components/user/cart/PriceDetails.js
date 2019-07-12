import React from "react";
import { connect } from "react-redux";
import { getPriceDetails } from "../../../actions/cartActions";

class PriceDetails extends React.Component {
  handleClick = () => {
    this.props.dispatch({
      type: "ORDER_TOTAL_PRICE",
      price: parseFloat(
        this.props.total_price -
          this.props.total_price * 0.2 +
          this.props.total_price * 0.12 +
          100
      ).toFixed(2)
    });
  };
  componentDidMount = () => {
    this.props.getPriceDetails();
  };

  render() {
    return (
      <div className="cart_price_details bg-light rounded-lg">
        <h6 className="text-center">PRICE DETAILS</h6>
        <p>
          Total MRP:{" "}
          <span className="align-right">
            {" "}
            {parseFloat(this.props.total_price).toFixed(2)}
          </span>{" "}
        </p>
        <p>
          Discount(20%):{" "}
          <span className="align-right">
            {" "}
            -
            {parseFloat(this.props.total_price * this.props.discount).toFixed(
              2
            )}
          </span>{" "}
        </p>
        <p>
          Tax(12%):
          <span className="align-right">
            {" "}
            +{parseFloat(this.props.total_price * this.props.tax).toFixed(2)}
          </span>
        </p>
        <p>
          Delivery Charges:{" "}
          <span className="align-right">
            {" "}
            +{parseFloat(this.props.delivery_charges).toFixed(2)}
          </span>
        </p>
        <p>
          Total:{" "}
          <span className="align-right">
            <i className="fas fa-rupee-sign" />
            {this.props.order_price}{" "}
          </span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    total_price: state.cr.total_price,
    discount: state.cr.discount,
    tax: state.cr.tax,
    delivery_charges: state.cr.delivery_charges,
    order_price: state.cr.order_price
  };
};

export default connect(
  mapStateToProps,
  { getPriceDetails }
)(PriceDetails);
