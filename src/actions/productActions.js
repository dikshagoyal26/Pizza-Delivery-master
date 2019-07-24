import { GET_PRODUCTS, GET_PRODUCT_BY_ID, GET_ERRORS } from "./types";
import axios from "axios";

//Get all the product list
export const getAllProducts = () => (dispatch) => {
  axios
    .get("https://pizza-hub.herokuapp.com/product/menu")
    .then((res) => {
      if (res.data) {
        dispatch({
          type: GET_PRODUCTS,
          payload: res.data
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: GET_PRODUCTS,
        payload: null
      });
    });
};

//Get product by ID
export const getProductByID = (id, history) => (dispatch) => {
  axios
    .get(`https://pizza-hub.herokuapp.com/product/details/${id}`)
    .then((res) => {
      if (res.data.product) {
        dispatch({
          type: GET_PRODUCT_BY_ID,
          payload: res.data
        });
      }
    })
    .catch((err) => {
      if (err.response.status === 404) {
        //No Product Found
        history.push("/pagenotfound");
      }
      alert("Some Error occured! Please try again later.");
    });
};

//Post product
export const addProduct = (productData, history) => (dispatch) => {
  axios
    .post("https://pizza-hub.herokuapp.com/product/add", productData)
    .then((res) => {
      alert("Product Added");
      history.push("/admin/list");
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//Update product
//Put request
export const updateProduct = (productData, history) => (dispatch) => {
  axios
    .put("https://pizza-hub.herokuapp.com/product/update", productData)
    .then((res) => {
      alert("Product Updated");
      history.push("/admin/list");
    })
    .catch((err) => {
      alert("Error in updation");
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//Delete product
export const deleteProduct = (productData, history) => (dispatch) => {
  axios
    .post("https://pizza-hub.herokuapp.com/product/delete", productData)
    .then((res) => {
      dispatch(getAllProducts());
    })
    .catch((err) => {
      alert("Error in deletion");
    });
};
