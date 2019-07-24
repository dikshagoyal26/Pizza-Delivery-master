import React from "react";
import { connect } from "react-redux";
import { getAllFeedbacks } from "../../actions/feedbackActions";

class ViewFeedback extends React.Component {
  componentDidMount() {
    this.props.getAllFeedbacks();
  }

  render() {
    let FeedbackList;

    if (this.props.feedbacks == null) {
      FeedbackList = <p>No feedbacks present.</p>;
    } else {
      FeedbackList = this.props.feedbacks.map(feedback => {
        return (
          <tr key={feedback.feedbackid}>
            <td>{feedback.userid}</td>
            <td>{feedback.description}</td>
            <td>{feedback.date.substring(0, 10)}</td>
            <td>{feedback.date.substring(11, 15)}</td>
          </tr>
        );
      });
    }
    return (
      <div className="text-center">
        <h5>Feedbacks</h5>
        <table id="feedback">
          <thead>
            <tr>
              {/* <th>Name</th> */}
              <th>Email Address</th>
              <th>Comment</th>
              <th>Reported Date</th>
              <th>Reported Time</th>
            </tr>
          </thead>
          <tbody>{FeedbackList}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    feedbacks: state.feedback_r.feedbacks
  };
};

export default connect(
  mapStateToProps,
  { getAllFeedbacks }
)(ViewFeedback);
