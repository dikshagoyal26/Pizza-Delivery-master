import axios from "axios";

// //Get all the admin list
// export const getAllAdmins = () => dispatch => {
//   axios
//     .get("http://localhost:5000/admin/admins/adminlist")
//     .then(res => {
//       console.log(res.data);
//       dispatch({
//         type: GET_ADMINS,
//         payload: res.data //adminlist
//       });
//     })
//     .catch(err => {
//       dispatch({
//         type: GET_ADMINS,
//         payload: null
//       });
//       console.log(err);
//     });
// };

// ///Post admin
// export const addAdmin = (adminData, history) => dispatch => {
//   axios
//     .post("http://localhost:5000/admin/admins/add", adminData)
//     .then(res => {
//       console.log("New Admin Added");
//       dispatch(getAllAdmins());
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
//       dispatch(getAllAdmins());
//     })
//     .catch(err => {
//       console.log("Error" + err);
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data
//       });
//     });
// };

// //Delete admin
// export const deleteAdmin = adminData => dispatch => {
//   console.log(adminData);
//   axios
//     .post("http://localhost:5000/admin/admins/delete", adminData)
//     .then(res => {
//       dispatch(getAllAdmins());
//     })
//     .catch(err => {
//       console.log("Error " + err);
//     });
// };
