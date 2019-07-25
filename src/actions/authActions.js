import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { ADMINLOGIN, GET_ADMIN, USERLOGIN, GET_USER } from "./types";

export const registerUser = (userData, history) => dispatch => {
  axios
    .post("https://pizza-hub.herokuapp.com/user/register", userData)
    .then(res => {
      history.push("/login");
    })
    .catch(err => {
      if (err.response) {
        if (err.response.status === 500 || err.response.status === 404) {
          // Email already exists
          alert("Email already exists");
        } else {
          alert("Some error has occured. Please try again later");
        }
      } else {
        alert("Some error has occured. Please try again later");
      }
    });
};

export const loginWithGoogle = (userData, history) => dispatch => {
  axios
    .get("https://pizza-hub.herokuapp.com/auth/google")
    .then(res => {
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
      if (err.response) {
        if (err.response.status === 500) {
          // Email already exists
          alert("Email already exists");
        } else {
          alert("Some error has occured. Please try again later");
        }
      } else {
        alert("Some error has occured. Please try again later");
      }
    });
};

export const loginUser = (userData, history) => dispatch => {
  axios
    .post("https://pizza-hub.herokuapp.com/user/login", userData)
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
      if (err.response) {
        if (err.response.status === 500 || err.response.status === 404) {
          // Email already exists
          alert("Either email or password is wrong");
        } else {
          alert("Some error has occured. Please try again later");
        }
      } else {
        alert("Some error has occured. Please try again later");
      }
    });
};

export const resetPwd = email => dispatch => {
  let userData = {
    userid: email
  };
  axios
    .post("https://pizza-hub.herokuapp.com/user/findbyid", userData)
    .then(res => {})
    .catch(err => {
      if (err.response) {
        if (err.response.status === 500) {
          // Email already exists
          alert("Email wrong");
        } else if (err.response.status === 404) {
          alert("Please enter a valid email");
        } else {
          alert("Some error has occured. Please try again later");
        }
      } else {
        alert("Some error has occured. Please try again later");
      }
    });
};

export const loginAdmin = (adminData, history) => dispatch => {
  axios
    .post("https://pizza-hub.herokuapp.com/admin/login", adminData)
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
      if (err.response) {
        if (err.response.status === 500 || err.response.status === 404) {
          // Email already exists
          alert("Either email or password is wrong");
        } else {
          alert("Some error has occured. Please try again later");
        }
      } else {
        alert("Some error has occured. Please try again later");
      }
    });
};
