import React from "react";
import { connect } from "react-redux";
import {
  addFeedback,
  getUserFeedbacks,
  deleteFeedback
} from "../../actions/feedbackActions";

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: null
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange = e => {
    this.setState({ feedback: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();
    if (this.state.feedback) {
      this.props.addFeedback(this.state.feedback, this.props.history);
    }
  };

  onClickEdit = feedback => {
    this.setState({ feedback: feedback.description });
  };
  onDelete = id => {
    this.props.deleteFeedback(id);
  };

  componentDidMount() {
    this.props.getUserFeedbacks();
  }

  render() {
    return (
      <div className="container mx-5 my-2">
        <form onSubmit={this.handleClick}>
          <label>Feedback: </label>
          <textarea
            className="form-control"
            name="feedback"
            placeholder="Enter your feedback here ...."
            onChange={this.onChange}
            value={this.state.description}
            rows="5"
          />
          <button className="btn btn-success mt-2">Submit</button>
        </form>

        <h3 className="mt-3">Previous Feedbacks:</h3>

        {this.props.feedbacks.map(feedback => {
          return (
            <div>
              {" "}
              <div className="row bg-light my-3 mx-1 p-3 border border-primary rounded-lg">
                <p className="col-lg-10 col-md-9">{feedback.description}</p>
                <div className=" col-lg-2 col-md-3">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.onClickEdit(feedback)}
                  >
                    <i className="fas fa-user-edit" />
                  </button>

                  <button
                    className="btn btn-outline-danger ml-3"
                    onClick={() => this.onDelete(feedback._id)}
                  >
                    {" "}
                    <i className="fas fa-trash-alt" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapPropsToState = state => {
  return {
    feedbacks: state.feedback_r.user_feedbacks
  };
};
export default connect(
  mapPropsToState,
  { addFeedback, getUserFeedbacks, deleteFeedback }
)(Feedback);
