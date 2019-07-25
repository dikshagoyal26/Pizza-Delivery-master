import { GET_FEEDBACKS, GET_USER_FEEDBACKS } from "./types";
import axios from "axios";
import store from "../store";

//Get all the admin list
export const getAllFeedbacks = () => dispatch => {
  axios
    .get("https://pizza-hub.herokuapp.com/admin/feedback/search")
    .then(res => {
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
    });
};

//Get all the admin list
export const getUserFeedbacks = () => dispatch => {
  axios
    .get("https://pizza-hub.herokuapp.com/feedback/search", {
      params: {
        userid: store.getState().user_r.user.userid
      }
    })
    .then(res => {
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
    });
};

///Post feedback
export const addFeedback = feedback => dispatch => {
  const feedbackData = {
    description: feedback.description,
    userid: store.getState().user_r.user.userid
  };

  axios
    .post("https://pizza-hub.herokuapp.com/feedback/add", feedbackData)
    .then(res => {
      dispatch(getUserFeedbacks());
    })
    .catch(err => {
      alert("Some error occured");
    });
};

//Update Feedback
//Put request
export const updateFeedback = feedbackData => dispatch => {
  axios
    .put("https://pizza-hub.herokuapp.com/feedback/update", feedbackData)
    .then(res => {
      alert("Feedback updated");
      dispatch(getUserFeedbacks());
    })
    .catch(err => {
      alert("Error in updating feedback! Please try again later.");
    });
};

//Delete feedback
export const deleteFeedback = feedbackid => dispatch => {
  axios
    .post("https://pizza-hub.herokuapp.com/feedback/delete", {
      feedbackid: feedbackid
    })
    .then(res => {
      alert("Feedback Deleted");
      dispatch(getUserFeedbacks());
    })
    .catch(err => {
      alert("Error in Feedback Deletion! Try again later.");
    });
};
