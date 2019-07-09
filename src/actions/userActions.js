import axios from "axios";
import store from "../store";
import { GET_USER } from "./types";

//Get all the admin list
export const getUserDetails = () => dispatch => {
  axios
    .post("http://localhost:5000/user/findbyid", {
      userid: store.getState().user_r.user.userid
    })
    .then(res => {
      console.log(JSON.stringify(res));
      dispatch({
        type: GET_USER,
        payload: res.data.record
      });
    })
    .catch(err => {
      console.log(err);
    });
};

//Update admin
//Put request
export const editUserDetails = (userData, history) => dispatch => {
  console.log(userData);
  axios
    .put("http://localhost:5000/user/update", userData)
    .then(res => {
      console.log("USER details Updated");
      history.push("/dashboard");
    })
    .catch(err => {
      console.log("Error" + err.respose);
      history.push("/dashboard");
    });
};

export const updatePwd = (userData, history) => dispatch => {
  const uData = {
    oldpassword: userData.oldpassword,
    password: userData.newpassword,
    userid: store.getState().user_r.user.userid
  };
  axios
    .post("http://localhost:5000/user/changepwd", uData)
    .then(res => {
      console.log(JSON.stringify(res.data));
    })
    .catch(err => {
      console.log("Error " + err);
    });
};

//Delete user
export const deleteUser = () => dispatch => {
  axios
    .post("http://localhost:5000/user/deleteone", {
      userid: store.getState().user_r.user.userid
    })
    .then(res => {})
    .catch(err => {
      console.log("Error " + err);
    });
};
