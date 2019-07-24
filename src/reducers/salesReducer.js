import {
  GET_MONTHLY_SALES,
  GET_PRODUCT_WISE_SALES,
  GET_SALES_COUNT,
  GET_EARNINGS_COUNT,
  GET_USER_COUNT,
  GET_PRODUCT_COUNT
} from "../actions/types";

const initialState = {
  monthly_sales: [],
  product_sales: [],
  sales_count: null,
  earnings_count: null,
  user_count: null,
  product_count: null
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MONTHLY_SALES: {
      return { ...state, monthly_sales: action.payload };
    }

    case GET_PRODUCT_WISE_SALES: {
      return { ...state, product_sales: action.payload };
    }
    case GET_SALES_COUNT: {
      return { ...state, sales_count: action.payload };
    }
    case GET_EARNINGS_COUNT: {
      return { ...state, earnings_count: action.payload };
    }
    case GET_USER_COUNT: {
      return { ...state, user_count: action.payload };
    }
    case GET_PRODUCT_COUNT:
      return {
        ...state,
        product_count: action.payload
      };
    default:
      return state;
  }
};

export default UserReducer;
