import React from "react";
import CartColumn from "./CartColumn";
import CartItem from "./CartItem";
import PriceDetails from "./PriceDetails";
import { connect } from "react-redux";
import { getCart, deleteAllCart } from "../../../actions/cartActions";
import { addOrder } from "../../../actions/orderActions";
import { Link } from "react-router-dom";

class Cart extends React.Component {
  componentDidMount() {
    this.props.getCart();
  }

  emptyCart = () => {
    this.props.deleteAllCart();
  };

  render() {
    let Cart = null;
    if (
      this.props.cart_items == null ||
      this.props.cart_items.products.length <= 0 ||
      this.props.cart_items.products == null
    ) {
      Cart = <p> YOUR CART IS EMPTY </p>;
    } else {
      let CartComponents = this.props.cart_items.products.map(item => {
        return (
          <CartItem
            key={item.productid}
            id={item.productid}
            name={item.name}
            qty={item.qty}
            price={item.price}
            imgUrl={item.imgUrl}
            total={item.total}
            ingredients={item.ingredients}
          />
        );
      });
      Cart = (
        <div>
          <button className="btn btn-danger mb-3" onClick={this.emptyCart}>
            Empty Cart
          </button>
          <table className="cart_table table table-striped table-bordered">
            <thead>
              <CartColumn />
            </thead>
            <tbody>{CartComponents}</tbody>
          </table>
          <div>
            <p className="text-right mr-5 font-weight-bold">
              Sub Total: {this.props.total_price}
            </p>
            <div className="col-md-6 m-auto">
              <PriceDetails />
            </div>
            <Link to="/checkout/order">
              {" "}
              <button className="btn btn-primary">Order</button>
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="container-fluid text-center p-3">
        <h1>Your Cart</h1>
        {Cart}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart_items: state.cr.cart,
    total_price: state.cr.total_price
  };
};

export default connect(
  mapStateToProps,
  { getCart, deleteAllCart, addOrder }
)(Cart);
