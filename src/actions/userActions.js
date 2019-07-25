import axios from "axios";
import store from "../store";
import { GET_USER } from "./types";

//Get all the admin list
export const getUserDetails = () => dispatch => {
  axios
    .post("https://pizza-hub.herokuapp.com/user/findbyid", {
      userid: store.getState().user_r.user.userid
    })
    .then(res => {
      dispatch({
        type: GET_USER,
        payload: res.data.record
      });
    })
    .catch(err => {
      alert("Error occured!!");
    });
};

//Update admin
//Put request
export const editUserDetails = (userData, history) => dispatch => {
  const Data = {
    userid: store.getState().user_r.userid,
    firstname: userData.firstname,
    lastname: userData.lastname,
    phone: userData.phone,
    dob: userData.birthday,
    address: userData.address
  };
  axios
    .put("https://pizza-hub.herokuapp.com/user/update", Data)
    .then(res => {
      history.push("/dashboard");
      alert("User details Updated");
    })
    .catch(err => {
      history.push("/dashboard");
      alert("Error occured");
    });
};

export const updatePwd = (userData, history) => dispatch => {
  const uData = {
    oldpassword: userData.oldpassword,
    password: userData.password,
    userid: store.getState().user_r.user.userid
  };
  axios
    .put("https://pizza-hub.herokuapp.com/user/changepwd", uData)
    .then(res => {
      alert("Password Updated");
    })
    .catch(err => {
      //Old Password wrong
      if (err.response) {
        if (err.response.status === 404) {
          alert("Wrong password!! Retry!!");
        } else {
          alert("Error has occured. Please try again later");
        }
      } else {
        alert("Error has occured. Please try again later");
      }
    });
};

//Delete user
export const deleteUser = () => dispatch => {
  axios
    .post("https://pizza-hub.herokuapp.com/user/deleteone", {
      userid: store.getState().user_r.user.userid
    })
    .then(res => {})
    .catch(err => {
      alert("Error in deletion");
    });
};
