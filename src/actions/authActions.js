import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  ADMINLOGIN,
  GET_ADMIN,
  GET_ERRORS,
  USERLOGIN,
  GET_USER
} from "./types";

export const registerUser = (userData, history) => dispatch => {
  console.log(userData);
  axios
    .post("http://localhost:5000/user/register", userData)
    .then(res => {
      console.log(res.data.message);
      history.push("/login");
    })
    .catch(err => {
      console.log("Error " + err);
      if (err.response.status == 500) {
        // Email already exists
      }
    });
};

export const loginWithGoogle = (userData, history) => dispatch => {
  //console.log(userData);
  console.log("Login with GOOGLE::::");
  axios
    .get("http://localhost:5000/auth/google")
    .then(res => {
      console.log(res.data);
      // const token = res.data.token;
      // localStorage.setItem("jwtToken", token);
      // // Set token to Auth header
      // setAuthToken(token);
      // // Set current user
      // dispatch({
      //   type: USERLOGIN,
      //   payload: res.data.record
      // });
      // dispatch({
      //   type: GET_USER,
      //   payload: res.data.record
      // });
      // history.push("/menu");
    })
    .catch(err => {
      console.log("Error " + err);
    });
};

export const loginUser = (userData, history) => dispatch => {
  //console.log(userData);

  axios
    .post("http://localhost:5000/user/login", userData)
    .then(res => {
      const token = res.data.token;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);

      // Set current user
      dispatch({
        type: USERLOGIN,
        payload: res.data.record
      });
      dispatch({
        type: GET_USER,
        payload: res.data.record
      });
      history.push("/menu");
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
      const token = res.data.token;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);

      dispatch({
        type: ADMINLOGIN,
        payload: res.data.record
      });
      dispatch({
        type: GET_ADMIN,
        payload: res.data.record
      });
      if (res.data.record.isFirstTym) {
        history.push("/admin/firsttime");
      } else {
        history.push("/admin/dashboard");
      }
    })
    .catch(err => {
      console.log("Error: " + JSON.stringify(err));
      // if (err.response.status === 404) {
      //   dispatch({
      //     type: GET_ERRORS,
      //     payload: "Either email id or password is wrong"
      //   });
      // } else {
      //   dispatch({
      //     type: GET_ERRORS,
      //     payload: null
      //   });
      // }
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
