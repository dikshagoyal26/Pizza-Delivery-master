import { GET_ORDERS } from "./types";
import axios from "axios";

//Get all the admin list
export const getAllOrders = () => dispatch => {
  axios
    .get("http://localhost:5000/admin/order/search")
    .then(res => {
      console.log(res.data);
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
      console.log(err);
    });
};

// ///Post admin
// export const addAdmin = (adminData, history) => dispatch => {
//   axios
//     .post("http://localhost:5000/admin/admins/add", adminData)
//     .then(res => {
//       console.log("New Admin Added");
//       history.push("/admin/admins");
//       window.location.reload();
//     })
//     .catch(err => {
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       });
//     });
// };

// //Update admin
// //Put request
// export const updateAdmin = (adminData, history) => dispatch => {
//   console.log(adminData);
//   axios
//     .put("http://localhost:5000/admin/admins/update", adminData)
//     .then(res => {
//       console.log("Admin Updated");
//       window.location.reload();
//     })
//     .catch(err => {
//       console.log("Error" + err);
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       });
//     });
// };
