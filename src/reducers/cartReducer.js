import { GET_CART, GET_PRICE } from "../actions/types";

const initialState = {
  total_price: 0, //cart item sub total
  cart: null,
  discount: 0.2,
  tax: 0.12,
  delivery_charges: 100,
  order_price: 0 //Price after tax, discount, etc
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART: {
      return {
        ...state,
        cart: action.payload
      };
    }

    case GET_PRICE: {
      let total = 0;
      for (var i = 0; i < state.cart.products.length; i++) {
        total += state.cart.products[i].price * state.cart.products[i].qty;
      }
      const order_price = parseFloat(
        state.total_price -
          state.total_price * state.discount +
          state.total_price * state.tax +
          state.delivery_charges
      ).toFixed(2);
      return {
        ...state,
        total_price: total,
        order_price: order_price
      };
    }

    default:
      return state;
  }
};
export default cartReducer;
