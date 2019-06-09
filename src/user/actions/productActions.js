import { GET_PRODUCTS } from "./types";
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
