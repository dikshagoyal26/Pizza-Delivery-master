import React from "react";
import Address from "./Address";
import PriceDetails from "../cart/PriceDetails";
import { connect } from "react-redux";
import { saveOrderAddress } from "../../../actions/orderActions";

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addtype: "Home",
      houseNo: "",
      street: "",
      town: "",
      society: "",
      state: "",
      pin: "",
      error: {
        houseNo: "",
        street: "",
        town: "",
        society: "",
        state: "",
        pin: ""
      }
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = () => {
    let houseNoerror = "";
    let streeterror = "";
    let townerror = "";
    let societyerror = "";
    let stateerror = "";
    let pinerror = "";

    if (!this.state.houseNo) {
      houseNoerror = "Enter house no.";
    }
    if (!this.state.street) {
      streeterror = "Enter Street Name";
    }
    if (!this.state.town) {
      townerror = "Enter Town";
    }
    if (!this.state.society) {
      societyerror = "Enter Society Name";
    }
    if (!this.state.street) {
      streeterror = "Enter Street Name";
    }
    if (!this.state.state) {
      stateerror = "Enter State";
    }
    if (!this.state.pin) {
      pinerror = "Enter Pin";
    }

    if (
      houseNoerror ||
      streeterror ||
      townerror ||
      societyerror ||
      stateerror ||
      pinerror
    ) {
      this.setState({
        error: {
          houseNo: houseNoerror,
          street: streeterror,
          town: townerror,
          society: societyerror,
          state: stateerror,
          pin: pinerror
        }
      });
      return false;
    } else {
      return true;
    }
  };

  onSaveAddress = () => {
    let isvalid = this.validate();
    if (isvalid) {
      let addressData = {
        addtype: this.state.addtype,
        houseNo: this.state.houseNo,
        street: this.state.street,
        town: this.state.town,
        society: this.state.society,
        state: this.state.state,
        pin: this.state.pin
      };
      this.props.saveOrderAddress(addressData);
      this.setState({
        addtype: "Home",
        houseNo: "",
        street: "",
        town: "",
        society: "",
        state: "",
        pin: "",
        error: {
          houseNo: "",
          street: "",
          town: "",
          society: "",
          state: "",
          pin: ""
        }
      });
      this.props.history.push("/checkout/payment");
    }
  };

  render() {
    return (
      <div className="container-fluid p-5">
        <h5 className="text-uppercase text-center font-weight-bold">Order</h5>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <Address
              handleChange={this.handleChange}
              error={this.state.error}
              value={{
                addtype: this.state.addtype,
                houseNo: this.state.houseNo,
                street: this.state.street,
                town: this.state.town,
                society: this.state.society,
                state: this.state.state,
                pin: this.state.pin
              }}
            />
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
