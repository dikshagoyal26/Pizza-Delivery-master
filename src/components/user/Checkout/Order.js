import React from "react";
import Address from "./Address";
import PriceDetails from "../cart/PriceDetails";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { saveOrderAddress } from "../../../actions/orderActions";

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "Home",
      houseNo: "",
      street: "",
      town: "",
      society: "",
      state: "",
      pin: "",
      error: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    if (
      !this.state.houseNo ||
      !!this.state.street ||
      !this.state.town ||
      !this.state.society ||
      !this.state.state ||
      !this.state.pin
    ) {
      this.setState({ error: "Enter full address" });
      return false;
    } else {
      return true;
    }
  };

  onSaveAddress = () => {
    let isvalid = this.validate();
    if (isvalid) {
      this.props.saveOrderAddress(this.state);
      this.setState({
        type: "Home",
        houseNo: "",
        street: "",
        town: "",
        society: "",
        state: "",
        pin: "",
        error: ""
      });
      this.props.history("/checkout/payment");
    }
  };

  render() {
    return (
      <div className="container-fluid p-5">
        <h5 className="text-uppercase text-center font-weight-bold">Order</h5>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <Address handleChange={this.handleChange} />
            {this.state.error ? (
              <p className="text-danger text-center">{this.state.error}</p>
            ) : null}
          </div>

          <div className=" col-md-6 col-sm-12 text-center">
            <PriceDetails purpose="Order" />
            <button className="btn btn-primary" onClick={this.onSaveAddress}>
              Continue Order
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    order_price: state.cr.order_price
  };
};
export default connect(
  mapStateToProps,
  { saveOrderAddress }
)(Order);
