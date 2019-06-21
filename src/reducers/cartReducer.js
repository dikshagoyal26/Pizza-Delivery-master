import {
  ADMINLOGIN,
  ADD_TO_CART,
  DELETE_ITEM,
  DEC_QUANTITY,
  INC_QUANTITY,
  ORDER_TOTAL_PRICE,
  ORDER_ID,
  GET_CART
} from "../actions/types";

const initialState = {
  total_price: 0, //cart item sub total
  cart: null,
  order_price: 0, //Price after tax, discount, etc
  order_id: 0,
  order_history: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART: {
      return {
        ...state,
        cart: action.payload
      };
    }

    default:
      return state;
  }
};
export default cartReducer;
