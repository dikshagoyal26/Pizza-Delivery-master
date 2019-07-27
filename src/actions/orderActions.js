import { GET_ORDERS, SAVE_ORDER_ADDRESS } from "./types";
import axios from "axios";
import { deleteAllCart } from "./cartActions";
import store from "../store";

//Get all the admin list
export const getAllOrders = () => dispatch => {
  axios
    .get("https://pizza-hub.herokuapp.com/admin/order/search")
    .then(res => {
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
    });
};

//Get all the admin list
export const getUserOrders = () => dispatch => {
  const userid = store.getState().user_r.user.userid;

  axios
    .get("https://pizza-hub.herokuapp.com/orders/search", {
      params: {
        userid: userid
      }
    })
    .then(res => {
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
    });
};

//Post order
export const addOrder = (paymentmode, history) => dispatch => {
  const orderData = {
    products: store.getState().cr.cart.products,
    userid: store.getState().cr.cart.userid,
    name:
      store.getState().user_r.firstname +
      " " +
      store.getState().user_r.lastname,
    paymentmode: paymentmode,
    address: store.getState().order_r.order_address,
    total: store.getState().cr.total_price,
    status: "Pending" //cancel or Delievered
  };

  axios
    .post("https://pizza-hub.herokuapp.com/orders/add", orderData)
    .then(res => {
      history.push("/track");
      dispatch(deleteAllCart());
      alert("Order placed");
    })
    .catch(err => {
      alert("Some error has occured please try again later" + err);
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
  axios
    .put("https://pizza-hub.herokuapp.com/orders/update", orderData)
    .then(res => {
      alert("Order Updated");
      dispatch(getUserOrders());
    })
    .catch(err => {
      alert("Some error has occured. Please try again later!!");
    });
};

//Update admin
//Put request
export const updateadminOrder = (orderData, history) => dispatch => {
  orderData.status = "Delivered";

  axios
    .put("https://pizza-hub.herokuapp.com/admin/order/update", orderData)
    .then(res => {
      alert("Order Updated");
      dispatch(getAllOrders());
    })
    .catch(err => {
      alert("Some error has occured. Please try again later");
    });
};
