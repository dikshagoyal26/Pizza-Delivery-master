import { GET_PRODUCTS, GET_PRODUCT_BY_ID, GET_ERRORS } from "./types";
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

//Post product
export const addProduct = (productData, history) => dispatch => {
  axios
    .post("http://localhost:5000/product/add", productData)
    .then(res => {
      alert("Product Added");
      history.push("/admin/list");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//Update product
//Put request
export const updateProduct = (productData, history) => dispatch => {
  console.log(productData);
  axios
    .put("http://localhost:5000/product/update", productData)
    .then(res => {
      alert("Product Updated");
      history.push("/admin/list");
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//Delete product
export const deleteProduct = (productData, history) => dispatch => {
  console.log({ productid: productData.productid });
  axios
    .post("http://localhost:5000/product/delete", productData)
    .then(res => {
      console.log(res.data.message);
      dispatch(getAllProducts());
    })
    .catch(err => {
      console.log("ERROR" + err);
    });
};
