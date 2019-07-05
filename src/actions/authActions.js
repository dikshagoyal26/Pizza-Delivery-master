import axios from "axios";
import {
  ADMINLOGIN,
  GET_ADMIN,
  GET_ERRORS,
  USERLOGIN,
  GET_USER
} from "./types";

export const regUser = userData => dispatch => {
  console.log(userData);
  axios
    .post("http://localhost:5000/user/register", userData)
    .then(res => {
      console.log(res.data.message);
    })
    .catch(err => {
      console.log("Error " + err);
    });
};

export const loginUser = userData => dispatch => {
  console.log(userData);
  axios
    .post("http://localhost:5000/user/login", userData)
    .then(res => {
      console.log(res.data.message);

      dispatch({
        type: USERLOGIN,
        payload: res.data.record
      });
      dispatch({
        type: GET_USER,
        payload: res.data.record
      });
    })
    .catch(err => {
      console.log("Error " + err);
    });
};

export const resetPwd = email => dispatch => {
  let userData = {
    userid: email
  };
  axios
    .post("http://localhost:5000/user/findbyid", userData)
    .then(res => {
      console.log("Email sent to user" + JSON.stringify(res.data));
    })
    .catch(err => {
      console.log("Error " + err);
    });
};

export const loginAdmin = (adminData, history) => dispatch => {
  console.log(adminData);
  axios
    .post("http://localhost:5000/admin/login", adminData)
    .then(res => {
      console.log(res.data.message);
      dispatch({
        type: ADMINLOGIN,
        payload: res.data.record
      });
      dispatch({
        type: GET_ADMIN,
        payload: res.data.record
      });
    })
    .catch(err => {
      console.log("errrrr" + err);
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: err.response.data
      // });
    });
};

//   localStorage.setItem("jwtToken", res.data.token);
//   history.push("/admin/dashboard");
// })
//

//   localStorage.setItem("jwtToken", res.data.token);
// })
// .catch(err => {
//   console.log("errrrr" + err);
//   dispatch({
//     type: GET_ERRORS,
//     payload: err.response.data
//   });
// });
