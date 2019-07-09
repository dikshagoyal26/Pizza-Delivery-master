import {
  PRODUCT_LOADING,
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID
} from "../actions/types";
const initialState = {
  products: null,
  product: null,
  loading: false,
  message: null
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case PRODUCT_LOADING:
      return {
        ...state,
        loading: true
      };

    case GET_PRODUCTS:
      if (action.payload) {
        return {
          ...state,
          products: action.payload.list,
          loading: false,
          message: action.payload.msg
        };
      }
      break;
    case GET_PRODUCT_BY_ID:
      if (action.payload) {
        return {
          ...state,
          product: action.payload.product,
          loading: false,
          message: action.payload.msg
        };
      }
      break;
    default:
      return state;
  }
};

export default ProductReducer;
