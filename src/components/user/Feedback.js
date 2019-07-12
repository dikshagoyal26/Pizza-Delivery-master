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
      feedbackid: null,
      edit_mode: false
    };
    this.onChange = this.onChange.bind(this);
  }

  onClickEdit = feedback => {
    //set state to feedback to be edited
    this.setState({
      feedback: feedback.description,
      edit_mode: true,
      feedbackid: feedback.feedbackid,
      feedbackerror: ""
    });
    //SET SCROLL to the top,
    window.scrollTo(0, 0);
    //Focus textarea
    this.textInput.focus();
  };

  onDelete = feedbackid => {
    this.props.deleteFeedback(feedbackid);
  };

  onChange = e => {
    this.setState({ feedback: e.target.value, feedbackerror: "" });
  };

  validate = () => {
    let feedbackerror = "";
    if (!this.state.feedback) {
      feedbackerror = "Feedback cant be empty!!";
    }
    if (feedbackerror) {
      this.setState({
        feedbackerror: feedbackerror
      });
      return false;
    } else {
      return true;
    }
  };

  componentDidMount() {
    this.props.getUserFeedbacks();
  }

  //Function called on submit / Cancel / Save on edit

  onClickSubmit = e => {
    e.preventDefault();
    let isvalid = this.validate();
    //Send req only if form data is valid
    if (isvalid) {
      //ADDING new feedback
      if (this.state.edit_mode === false) {
        const feedbackData = {
          description: this.state.feedback
        };
        this.props.addFeedback(feedbackData);
      }
      //EDITING particular feedback
      else {
        const feedbackData = {
          description: this.state.feedback,
          feedbackid: this.state.feedbackid
        };
        this.props.updateFeedback(feedbackData);
      }
      this.setState({
        feedback: "",
        feedbackid: null,
        edit_mode: false,
        feedbackerror: ""
      });
    }
  };

  handleClickCancel = () => {
    this.setState({
      feedback: "",
      feedbackid: null,
      edit_mode: false,
      feedbackerror: ""
    });
  };

  render() {
    let Feedbacks = <p>No Previous Feedbacks</p>;
    if (this.props.feedbacks) {
      // FEEDBACK List
      Feedbacks = this.props.feedbacks.map(feedback => {
        if (this.state.feedbackid !== feedback.feedbackid) {
          /** return FEEDBACK ITEM if feedback is not on edit mode*/
          return (
            <div key={feedback._id}>
              <div className="row bg-light my-3 mx-1 p-3 border border-primary rounded-lg">
                <p className="col">{feedback.description}</p>

                <div className="col">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => this.onClickEdit(feedback)}
                  >
                    <i className="fas fa-user-edit" />
                  </button>

                  <button
                    className="btn btn-outline-danger ml-3"
                    onClick={() => this.onDelete(feedback.feedbackid)}
                  >
                    {" "}
                    <i className="fas fa-trash-alt" />
                  </button>
                </div>
              </div>
            </div>
          );
        } else {
          return;
        }
      });
    }
    return (
      <div className="container py-3">
        <div className="row">
          {/** FEEDBACK TEXTBOX */}
          <div className="col-md-6 col-sm-12">
            <div className="feedback_form ">
              <h4>Feedback: </h4>
              <textarea
                className="form-control"
                name="feedback"
                placeholder="Enter your feedback here ...."
                onChange={this.onChange}
                value={this.state.feedback}
                rows={5}
                ref={input => {
                  this.textInput = input;
                }}
              />{" "}
              {/** ERROR message */}
              {this.state.feedbackerror ? (
                <small className="text-danger">
                  {" "}
                  <i className="fas fa-exclamation-triangle"> </i>
                  {this.state.feedbackerror}
                </small>
              ) : null}
              <div className="text-center">
                <button
                  className="btn btn-primary m-2"
                  onClick={this.onClickSubmit}
                >
                  Submit
                </button>

                {/** CANCEL button available if user dont want to edit anymore */}

                {this.state.edit_mode ? (
                  <button
                    className="btn btn-primary m-2"
                    onClick={this.handleClickCancel}
                  >
                    Cancel
                  </button>
                ) : null}
              </div>
            </div>
          </div>

          {/** PREVIOUS FEEDBACK SECTION */}
          <div className="previous_feedback  col-md-6 col-sm-12">
            <h4>Previous Feedbacks:</h4>
            {Feedbacks}
          </div>
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
