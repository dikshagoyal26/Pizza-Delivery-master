import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { deleteUser } from "../../../actions/userActions";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="container-fluid p-5">
        <Profile />
        <div className="text-center">
          <button
            onClick={this.props.deleteUser}
            className="btn btn-danger m-3 text-center"
          >
            Delete Account
          </button>
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  { deleteUser }
)(Dashboard);
