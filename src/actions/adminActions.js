import { GET_ADMINS, GET_ERRORS, SET_FIRST_TYM } from "./types";
import axios from "axios";
import store from "../store";

//Get all the admin list
export const getAllAdmins = () => dispatch => {
  axios
    .get("http://localhost:5000/admin/admins/adminlist")
    .then(res => {
      dispatch({
        type: GET_ADMINS,
        payload: res.data //adminlist
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ADMINS,
        payload: null
      });
      alert("Some error have occured. Please try again later");
    });
};

///Post admin
export const addAdmin = (adminData, history) => dispatch => {
  axios
    .post("http://localhost:5000/admin/admins/add", adminData)
    .then(res => {
      alert("New Admin Added");
      dispatch(getAllAdmins());
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//Update admin
//Put request
export const updateAdmin = (adminData, history) => dispatch => {
  if (adminData.password) {
    adminData = {
      adminid: store.getState().ar.admin.adminid,
      password: adminData.password
    };
  }
  axios
    .put("http://localhost:5000/admin/admins/update", adminData)
    .then(res => {
      if (adminData.password) {
        dispatch({
          type: SET_FIRST_TYM
        });
        history.push("/admin/dashboard");
      }
      dispatch(getAllAdmins());
    })
    .catch(err => {
      alert("Error in updation. Please try again later!!");
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//Change admin password
//Put request

export const changeAdminPwd = (adminData, history) => dispatch => {
  if (adminData.password) {
    adminData = {
      adminid: store.getState().ar.admin.adminid,
      password: adminData.password,
      oldpassword: adminData.oldpassword
    };
  }

  axios
    .put("http://localhost:5000/admin/admins/update", adminData)
    .then(res => {
      history.push("/admin/dashboard");
    })
    .catch(err => {
      alert("You have entered a wrong password!!");
    });
};

//Delete admin
export const deleteAdmin = adminData => dispatch => {
  axios
    .post("http://localhost:5000/admin/admins/delete", adminData)
    .then(res => {
      dispatch(getAllAdmins());
    })
    .catch(err => {
      alert("Error in deletion of admin. Please try again later!!");
    });
};
