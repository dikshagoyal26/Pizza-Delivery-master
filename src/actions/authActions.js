import axios from "axios";
import {
  ADMINLOGIN,
  GET_ADMIN,
  GET_ERRORS,
  USERLOGIN,
  GET_USER
} from "./types";

export const loginAdmin = (adminData, history) => dispatch => {
  console.log(adminData);
  // axios
  //   .post("http://localhost:5000/admin/login", adminData)
  //   .then(res => {
  dispatch({
    type: ADMINLOGIN
    //payload: res.data
  });
  // dispatch({
  //   type: GET_ADMIN
  //   payload: res.data
  // });

  //   localStorage.setItem("jwtToken", res.data.token);
  //   history.push("/admin/dashboard");
  // })
  // .catch(err => {
  //   console.log("errrrr" + err);
  //   dispatch({
  //     type: GET_ERRORS,
  //     payload: err.response.data
  //   });
  // });
};

export const loginUser = (userData, history) => dispatch => {
  console.log(userData);
  // axios
  //   .post("http://localhost:5000/admin/login", adminData)
  //   .then(res => {
  dispatch({
    type: USERLOGIN
    //payload: res.data
  });
  dispatch({
    type: GET_USER,
    payload: { userid: userData.userid, name: "Harshita Agarwal" }
  });

  //   localStorage.setItem("jwtToken", res.data.token);
  // })
  // .catch(err => {
  //   console.log("errrrr" + err);
  //   dispatch({
  //     type: GET_ERRORS,
  //     payload: err.response.data
  //   });
  // });
};
