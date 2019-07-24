import { GET_ORDERS, SAVE_ORDER_ADDRESS } from "../actions/types";

const initialState = {
  orders: null,
  order_id: 0,
  order_history: [],
  order_address: {}
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
    case SAVE_ORDER_ADDRESS: {
      return { ...state, order_address: action.payload };
    }

    default:
      return state;
  }
};

export default OrderReducer;
