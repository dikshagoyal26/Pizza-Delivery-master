import React from "react";
import { connect } from "react-redux";
import {
  addFeedback,
  getUserFeedbacks,
  deleteFeedback,
  updateFeedback
} from "../../actions/feedbackActions";

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: "",
      _id: null,
      edit_mode: false
    };
    this.onChange = this.onChange.bind(this);
  }

  onClickEdit = feedback => {
    this.setState({
      feedback: feedback.description,
      edit_mode: true,
      _id: feedback._id
    });
  };
  onDelete = id => {
    this.props.deleteFeedback(id);
  };

  onChange = e => {
    this.setState({ feedback: e.target.value });
  };

  handleClick = e => {
    e.preventDefault();
    const feedbackData = {
      _id: this.state._id,
      description: this.state.feedback
    };
    if (this.state.feedback && this.state.edit_mode == false) {
      this.props.addFeedback(feedbackData, this.props.history);
    } else {
      this.props.updateFeedback(feedbackData, this.props.history);
      this.setState({ edit_mode: false });
    }
  };

  componentWillMount() {
    this.props.getUserFeedbacks();
  }

  render() {
    let Feedbacks = <p>No Previous Feedbacks</p>;
    if (this.props.feedbacks) {
      Feedbacks = this.props.feedbacks.map(feedback => {
        return (
          <div key={feedback._id}>
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
      });
    }
    return (
      <div className="container mx-5 my-2">
        <form onSubmit={this.handleClick}>
          <label>Feedback: </label>
          <textarea
            className="form-control"
            name="feedback"
            placeholder="Enter your feedback here ...."
            onChange={this.onChange}
            value={this.state.feedback}
            rows="5"
          />
          <button className="btn btn-success mt-2">Submit</button>
        </form>
        <div className="text-center">
          <h3 className="mt-3">Previous Feedbacks:</h3>
          {Feedbacks}
        </div>
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
  { addFeedback, getUserFeedbacks, deleteFeedback, updateFeedback }
)(Feedback);
