import { GET_ORDERS, SAVE_ORDER_ADDRESS } from "./types";
import axios from "axios";
import { deleteAllCart } from "./cartActions";
import store from "../store";

//Get all the admin list
export const getAllOrders = () => dispatch => {
  axios
    .get("http://localhost:5000/admin/order/search")
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_ORDERS,
        payload: res.data //adminlist
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ORDERS,
        payload: null
      });
      console.log(err);
    });
};

//Get all the admin list
export const getUserOrders = () => dispatch => {
  const userid = store.getState().user_r.user.userid;

  axios
    .get("http://localhost:5000/orders/search", {
      params: {
        userid: userid
      }
    })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_ORDERS,
        payload: res.data //adminlist
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ORDERS,
        payload: null
      });
      console.log(err);
    });
};

//Post order
export const addOrder = (paymentmode, history) => dispatch => {
  const orderData = {
    products: store.getState().cr.cart.products,
    userid: store.getState().cr.cart.userid,
    name: store.getState().cr.cart.name,
    paymentmode: paymentmode,
    address: store.getState().order_r.order_address,
    total: store.getState().cr.total_price,
    status: "Pending" //cancel or Delievered
  };

  axios
    .post("http://localhost:5000/orders/add", orderData)
    .then(res => {
      console.log(res);
      history.push("/track");
      dispatch(deleteAllCart());
    })
    .catch(err => {
      console.log(err);
    });
};

export const saveOrderAddress = address => dispatch => {
  dispatch({
    type: SAVE_ORDER_ADDRESS,
    payload: address
  });
};

//Update admin
//Put request
export const updateOrder = orderData => dispatch => {
  orderData.status = "Cancelled";
  console.log(orderData);
  axios
    .put("http://localhost:5000/orders/update", orderData)
    .then(res => {
      console.log("Order Updated" + res.data);
      dispatch(getUserOrders());
    })
    .catch(err => {
      console.log("Error" + JSON.stringify(err.response));
    });
};

//Update admin
//Put request
export const updateadminOrder = (orderData, history) => dispatch => {
  orderData.status = "Delivered";

  axios
    .put("http://localhost:5000/admin/order/update", orderData)
    .then(res => {
      console.log("Order Updated" + res.data);
      dispatch(getAllOrders());
    })
    .catch(err => {
      console.log("Error" + err);
    });
};
