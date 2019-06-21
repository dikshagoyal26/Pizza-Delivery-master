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
  const cart_items = store.getState().cr.cart;
  if (cart_items != null) {
    cart_items.products.forEach(product => {
      if (product.productid == cartData.productid) {
        if (cartData.operation == "+1") {
          cartData.qty = product.qty + 1;
        } else if (cartData.operation == "-1") {
          cartData.qty = product.qty - 1;
          if (cartData.qty <= 0) {
            dispatch(deleteCartProduct(product.productid));
          }
        }
      }
    });
  }

  const cart = {
    userid: store.getState().user_r.user.userid,
    name: store.getState().user_r.user.name,
    products: [
      {
        productid: cartData.productid,
        name: cartData.name,
        price: cartData.price,
        toppings: cartData.toppings,
        qty: cartData.qty,
        total: cartData.qty * cartData.price
      }
    ]
  };

  axios
    .post("http://localhost:5000/cart/add", cart)
    .then(res => {
      console.log(JSON.stringify(res.data));
      dispatch(getCart());
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
        payload: res.data.record[0] //cartList
      });
    })
    .catch(err => {
      dispatch({
        type: GET_CART,
        payload: null
      });
    });
};

//Delete product
export const deleteCartProduct = productid => dispatch => {
  const deleteData = {
    userid: store.getState().user_r.user.userid,
    productid: productid
  };
  axios
    .post("http://localhost:5000/cart/deleteOne", deleteData)
    .then(res => {
      console.log("Product deleted from Cart");
    })
    .catch(err => {
      console.log("errrrrror " + err);
    });
};

//Delete product
export const deleteAllCart = productid => dispatch => {
  const deleteData = {
    userid: store.getState().user_r.user.userid
  };
  axios
    .post("http://localhost:5000/cart/deleteAll", deleteData)
    .then(res => {
      console.log(res.data.message);
      window.location.reload();
    })
    .catch(err => {
      console.log("errrrrror " + err);
    });
};
