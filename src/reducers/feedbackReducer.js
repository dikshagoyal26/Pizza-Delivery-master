import { GET_FEEDBACKS, GET_USER_FEEDBACKS } from "../actions/types";

const initialState = {
  feedbacks: null,
  user_feebacks: null
};

const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FEEDBACKS: {
      return {
        ...state,
        feedbacks: action.payload
      };
    }
    case GET_USER_FEEDBACKS: {
      if (action.payload) {
        return {
          ...state,
          user_feedbacks: action.payload.record,
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
