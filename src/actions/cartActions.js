import {
  ADD_TO_CART,
  DELETE_ITEM,
  DEC_QUANTITY,
  INC_QUANTITY,
  ORDER_TOTAL_PRICE,
  ORDER_ID,
  GET_CART
} from "../actions/types";
import store from "../store";
import axios from "axios";

export const addToCart = (cartData, history) => dispatch => {
  const cart = {
    productid: cartData.productid,
    userid: store.getState().user_r.user.userid,
    name: store.getState().user_r.user.name,
    price: cartData.price,
    toppings: cartData.toppings,
    qty: cartData.qty
  };

  console.log(cart);

  axios
    .post("http://localhost:5000/cart/add", cart)
    .then(res => {
      console.log(JSON.stringify(res.data));
    })
    .catch(err => {
      console.log(err.response.message);
    });
};

export const getCart = cartData => dispatch => {
  const userid = store.getState().user_r.user.userid;
  axios
    .get("http://localhost:5000/cart/search", {
      params: {
        userid: userid
      }
    })
    .then(res => {
      dispatch({
        type: GET_CART,
        payload: res.data //cartList
      });
    })
    .catch(err => {
      dispatch({
        type: GET_CART,
        payload: null
      });
    });
};
