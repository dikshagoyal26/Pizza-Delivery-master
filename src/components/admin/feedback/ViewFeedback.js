import React from "react";
import { connect } from "react-redux";
import { getAllFeedbacks } from "../../../actions/feedbackActions";
import Feedback from "../../user/Feedback";

class ViewFeedback extends React.Component {
  componentDidMount() {
    this.props.getAllFeedbacks();
  }

  render() {
    let FeedbackList;

    if (this.props.feedbacks == null) {
      FeedbackList = <p>No feedbacks present.</p>;
    } else {
      FeedbackList = this.props.feedbacks.map((feedback) => {
        return (
          <tr>
            {/* <td>{feedback.firstname}</td> */}
            <td>{feedback.userid}</td>
            <td>{feedback.description}</td>
            <td>{feedback.date.substring(0, 10)}</td>
            <td>{feedback.date.substring(11, 15)}</td>
          </tr>
          // <div className="FeedbackItem">
          //   <p>
          //     <b>User:</b> {feedback.userid}
          //   </p>
          //   <p>
          //     <b>Feedback: </b>
          //     {feedback.description}
          //   </p>
          //   <p>
          //     <b>Date: </b>
          //     {feedback.date}
          //   </p>
          // </div>
        );
      });
    }
    return (
      <div className="container py-5">
        <h1 className="text-center">Feedbacks</h1>
        <table id="feedback" className="p-5">
          <tr>
            {/* <th>Name</th> */}
            <th>Email Address</th>
            <th>Comment</th>
            <th>Reported Date</th>
            <th>Reported Time</th>
          </tr>
          {FeedbackList}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    feedbacks: state.feedback_r.feedbacks
  };
};

export default connect(
  mapStateToProps,
  { getAllFeedbacks }
)(ViewFeedback);
