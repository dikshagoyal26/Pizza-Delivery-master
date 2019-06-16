import React from "react";
import { connect } from "react-redux";
import { getAllFeedbacks } from "../../../actions/feedbackActions";

class ViewFeedback extends React.Component {
  componentDidMount() {
    this.props.getAllFeedbacks();
  }
  render() {
    return (
      <div className="container-fluid text-center">
        <h1>ViewFeedback</h1>
        {JSON.stringify(this.props.feedbacks)}
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
