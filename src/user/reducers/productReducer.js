import { PRODUCT_LOADING, GET_PRODUCTS } from "../actions/types";
const initialState = {
  products: null,
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
    default:
      return state;
  }
};

export default ProductReducer;
