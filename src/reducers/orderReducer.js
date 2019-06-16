import { GET_ORDERS } from "../actions/types";

const initialState = {
  orders: null
};

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS: {
      if (action.payload) {
        return {
          ...state,
          orders: action.payload.record,
          message: action.payload.msg
        };
      } else {
        return { ...state };
      }
    }
    default:
      return state;
  }
};

export default OrderReducer;
