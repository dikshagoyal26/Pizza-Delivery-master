import { GET_ADMINS, GET_ERRORS, SET_FIRST_TYM } from "./types";
import axios from "axios";
import store from "../store";

//Get all the admin list
export const getAllAdmins = () => (dispatch) => {
  axios
    .get("http://localhost:5000/admin/admins/adminlist")
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: GET_ADMINS,
        payload: res.data //adminlist
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ADMINS,
        payload: null
      });
      console.log(err);
    });
};

///Post admin
export const addAdmin = (adminData, history) => (dispatch) => {
  axios
    .post("http://localhost:5000/admin/admins/add", adminData)
    .then((res) => {
      console.log("New Admin Added");
      dispatch(getAllAdmins());
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//Update admin
//Put request
export const updateAdmin = (adminData, history) => (dispatch) => {
  if (adminData.password) {
    adminData = {
      adminid: store.getState().ar.admin.adminid,
      password: adminData.password
    };
  }
  console.log(adminData);
  axios
    .put("http://localhost:5000/admin/admins/update", adminData)
    .then((res) => {
      if (adminData.password) {
        dispatch({
          type: SET_FIRST_TYM
        });
        history.push("/admin/dashboard");
      }
      dispatch(getAllAdmins());
    })
    .catch((err) => {
      console.log("Error" + err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//Change admin password
//Put request

export const changeAdminPwd = (adminData, history) => (dispatch) => {
  if (adminData.password) {
    adminData = {
      adminid: store.getState().ar.admin.adminid,
      password: adminData.password,
      oldpassword: adminData.oldpassword
    };
  }

  console.log(adminData);

  axios
    .put("http://localhost:5000/admin/admins/update", adminData)
    .then((res) => {
      history.push("/admin/dashboard");
    })
    .catch((err) => {
      console.log("Error" + err);
    });
};

//Delete admin
export const deleteAdmin = (adminData) => (dispatch) => {
  console.log(adminData);
  axios
    .post("http://localhost:5000/admin/admins/delete", adminData)
    .then((res) => {
      dispatch(getAllAdmins());
    })
    .catch((err) => {
      console.log("Error " + err);
    });
};
