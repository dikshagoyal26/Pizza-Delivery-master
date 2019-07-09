import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { deleteUser } from "../../../actions/userActions";

class Dashboard extends React.Component {
  render() {
    return (
      <div className="text-center">
        <h1 className="text-center text-dark">My Dashboard</h1>
        <div className="col-md-6 m-auto">
          <Profile />
        </div>
        <button onClick={this.props.deleteUser} className="btn btn-danger m-3">
          Delete Account
        </button>
      </div>
    );
  }
}
export default connect(
  null,
  { deleteUser }
)(Dashboard);
