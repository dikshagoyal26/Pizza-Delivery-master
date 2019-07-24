import {
  GET_MONTHLY_SALES,
  GET_PRODUCT_WISE_SALES,
  GET_USER_COUNT,
  GET_PRODUCT_COUNT,
  GET_SALES_COUNT,
  GET_EARNINGS_COUNT
} from "./types";
import axios from "axios";

export const getMonthlySales = () => (dispatch) => {
  axios
    .get("https://pizza-hub.herokuapp.com/admin/sales/month")
    .then((res) => {
      if (res.data) {
        dispatch({
          type: GET_MONTHLY_SALES,
          payload: res.data.arr
        });
      }
    })
    .catch((err) => {});
};

//Get all the product list
export const getProductWiseSales = () => (dispatch) => {
  axios
    .get("https://pizza-hub.herokuapp.com/admin/sales/product")
    .then((res) => {
      if (res.data) {
        dispatch({
          type: GET_PRODUCT_WISE_SALES,
          payload: res.data.record
        });

        dispatch({
          type: GET_SALES_COUNT,
          payload: res.data.sales
        });

        dispatch({
          type: GET_EARNINGS_COUNT,
          payload: res.data.income
        });
      }
    })
    .catch((err) => {});
};

export const getUserCount = () => (dispatch) => {
  axios
    .get("https://pizza-hub.herokuapp.com/admin/sales/countusers")
    .then((res) => {
      if (res.data) {
        dispatch({
          type: GET_USER_COUNT,
          payload: res.data.users
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: GET_USER_COUNT,
        payload: 0
      });
    });
};

export const getProductCount = () => (dispatch) => {
  axios
    .get("https://pizza-hub.herokuapp.com/admin/sales/countproducts")
    .then((res) => {
      if (res.data) {
        dispatch({
          type: GET_PRODUCT_COUNT,
          payload: res.data.products
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: GET_PRODUCT_COUNT,
        payload: 0
      });
    });
};
