import { GET_FEEDBACKS, GET_USER_FEEDBACKS } from "./types";
import axios from "axios";
import store from "../store";

//Get all the admin list
export const getAllFeedbacks = () => dispatch => {
  axios
    .get("http://localhost:5000/admin/feedback/search")
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_FEEDBACKS,
        payload: res.data.record
      });
    })
    .catch(err => {
      dispatch({
        type: GET_FEEDBACKS,
        payload: null
      });
      console.log(err);
    });
};

//Get all the admin list
export const getUserFeedbacks = () => dispatch => {
  axios
    .get("http://localhost:5000/feedback/search", {
      params: {
        userid: store.getState().user_r.user.userid
      }
    })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: GET_USER_FEEDBACKS,
        payload: res.data //adminlist
      });
    })
    .catch(err => {
      dispatch({
        type: GET_USER_FEEDBACKS,
        payload: null
      });
      console.log(err);
    });
};

///Post feedback
export const addFeedback = (feedback, history) => dispatch => {
  console.log(feedback);
  const feedbackData = {
    description: feedback.description,
    userid: store.getState().user_r.user.userid
  };

  axios
    .post("http://localhost:5000/feedback/add", feedbackData)
    .then(res => {
      dispatch(getUserFeedbacks());
    })
    .catch(err => {
      console.log(err.response.message);
    });
};

//Update Feedback
//Put request
export const updateFeedback = (feedbackData, history) => dispatch => {
  console.log(feedbackData);
  axios
    .put("http://localhost:5000/feedback/update", feedbackData)
    .then(res => {
      console.log(res.data.message);
      dispatch(getUserFeedbacks());
    })
    .catch(err => {
      console.log("Error" + err.response.message);
    });
};

//Delete feedback
export const deleteFeedback = id => dispatch => {
  axios
    .post("http://localhost:5000/feedback/delete", {
      _id: id,
      userid: store.getState().user_r.user.userid
    })
    .then(res => {
      console.log(res.data.message);
      dispatch(getUserFeedbacks());
    })
    .catch(err => {
      console.log("Error " + err.response.message);
    });
};
