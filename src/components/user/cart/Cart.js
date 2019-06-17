import React from "react";
import CartColumn from "./CartColumn";
import CartItem from "./CartItem";
import PriceDetails from "./PriceDetails";
import { connect } from "react-redux";
import { getCart } from "../../../actions/cartActions";

class Cart extends React.Component {
  componentDidMount() {
    this.props.getCart();
  }
  render() {
    let Cart = null;
    if (this.props.cart_items == null) {
      Cart = <p> YOUR CART IS EMPTY </p>;
    } else {
      let CartComponents = this.props.cart_items.map(item => {
        return (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            imgUrl={item.imgUrl}
            ingredients={item.ingredients}
          />
        );
      });
      Cart = (
        <div>
          <CartColumn />
          {CartComponents}
          <div>
            <p className="text-right mr-5 font-weight-bold">
              Sub Total: {this.props.total_price}
            </p>
            <div className="col-md-6 m-auto">
              <PriceDetails />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="container-fluid text-center">
        <h1>Your Cart</h1>
        {Cart}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart_items: state.cr.cart_items,
    total_price: state.cr.total_price
  };
};

export default connect(
  mapStateToProps,
  { getCart }
)(Cart);
