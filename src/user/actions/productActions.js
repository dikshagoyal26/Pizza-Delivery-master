import { GET_PRODUCTS, GET_PRODUCT_BY_ID } from "./types";
import axios from "axios";

//Get all the product list
export const getAllProducts = () => dispatch => {
  axios
    .get("http://localhost:5000/product/menu")
    .then(res => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_PRODUCTS,
        payload: null
      });
    });
};

//Get product by ID
export const getProductByID = id => dispatch => {
  axios
    .get(`http://localhost:5000/product/details/${id}`)
    .then(res => {
      dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: res.data
      });
      console.log(res.data);
    })
    .catch(err => {
      dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: null
      });
      console.log(err);
    });
};
