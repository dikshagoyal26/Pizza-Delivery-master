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
      return {
        ...state,
        products: action.payload.list,
        loading: false,
        message: action.payload.msg
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        product: action.payload.product,
        loading: false,
        message: action.payload.msg
      };
    default:
      return state;
  }
};

export default ProductReducer;
