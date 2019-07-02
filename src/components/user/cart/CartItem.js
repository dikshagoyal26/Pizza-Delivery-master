import React from "react";
import { connect } from "react-redux";
import { addToCart, deleteCartProduct } from "../../../actions/cartActions";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: this.props.qty,
      total: this.props.price * this.props.qty
    };
  }
  onMinus = () => {
    const cartData = {
      productid: this.props.id,
      name: this.props.name,
      price: this.props.price,
      toppings: this.props.toppings,
      qty: 1,
      operation: "-1"
    };
    this.props.addToCart(cartData);
  };

  onPlus = () => {
    const cartData = {
      productid: this.props.id,
      name: this.props.name,
      price: this.props.price,
      toppings: this.props.toppings,
      qty: 1,
      operation: "+1"
    };
    this.props.addToCart(cartData);
  };

  onDelete = () => {
    const cartData = {
      productid: this.props.id,
      name: this.props.name,
      price: this.props.price,
      toppings: this.props.toppings,
      qty: 1,
      operation: "+1"
    };
    this.props.deleteCartProduct(cartData);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">{this.props.name}</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">{this.props.price}</p>
          </div>
          <div className="col-10 mx-auto col-lg-2">
            <p>Toppings</p>
          </div>

          <div className="col-10 mx-auto col-lg-2">
            <div className="row ">
              <div className="col">
                <button className="btn-primary btn" onClick={this.onMinus}>
                  <i className="fas fa-minus" />
                </button>
              </div>
              <div className="col">
                <p> {this.props.qty} </p>
              </div>
              <div className="col">
                <button className="btn-primary btn" onClick={this.onPlus}>
                  <i className="fas fa-plus" />
                </button>
              </div>
            </div>
          </div>

          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase" onClick={this.onDelete}>
              <i className="fas fa-trash-alt" />
            </p>
          </div>

          <div className="col-10 mx-auto col-lg-2">
            <p className="text-uppercase">{this.props.total}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addToCart, deleteCartProduct }
)(CartItem);
