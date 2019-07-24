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
      console.log(res.data.record);
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
  const Data = {
    userid: store.getState().user_r.userid,
    firstname: userData.firstname,
    lastname: userData.lastname,
    phone: userData.phone,
    dob: userData.birthday,
    address: userData.address
  };
  console.log(Data);
  axios
    .put("http://localhost:5000/user/update", Data)
    .then(res => {
      history.push("/dashboard");
      alert("User details Updated");
    })
    .catch(err => {
      console.log("Error" + JSON.stringify(err.response));
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
    .put("http://localhost:5000/user/changepwd", uData)
    .then(res => {
      console.log(JSON.stringify(res.data));
    })
    .catch(err => {
      console.log("Error " + err);
      //Old Password wrong
      if (err.response.status === 404) {
        alert("Wrong password!! Retry!!");
      }
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
