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
      _id: this.props._id,
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
      _id: this.props._id,
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
      <tr>
        <td>
          <p className="text-uppercase">{this.props.name}</p>
        </td>
        <td>
          <p className="text-uppercase">{this.props.price}</p>
        </td>
        <td>
          <p>Toppings</p>
        </td>

        <td>
          <button className="btn-secondary btn btn-sm" onClick={this.onMinus}>
            <i className="fas fa-minus" />
          </button>
          <span>
            {"  "} {this.props.qty}
            {"  "}
          </span>
          <button className="btn-secondary btn btn-sm" onClick={this.onPlus}>
            <i className="fas fa-plus" />
          </button>
        </td>

        <td>
          <p className="text-uppercase">{this.props.total}</p>
        </td>
        <td>
          <p className="text-uppercase" onClick={this.onDelete}>
            <i className="fas fa-trash-alt" />
          </p>
        </td>
      </tr>
    );
  }
}

export default connect(
  null,
  { addToCart, deleteCartProduct }
)(CartItem);
