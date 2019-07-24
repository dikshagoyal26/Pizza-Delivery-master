import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUserDetails } from "../../../actions/userActions";
class Profile extends React.Component {
  componentDidMount = () => {
    this.props.getUserDetails();
  };
  render() {
    let Profile = <p>Loading...</p>;
    if (this.props.profile) {
      Profile = (
        <div>
          <h6 className="p-2">First name: {this.props.profile.firstname}</h6>
          <h6 className="p-2">Last name: {this.props.profile.lastname}</h6>
          <h6 className="p-2">Phone: {this.props.profile.phone}</h6>
          <h6 className="p-2">
            Birthday: {this.props.profile.dob.substring(0, 10)}
          </h6>
          <h6 className="p-2">
            Address: {JSON.stringify(this.props.profile.address)}
          </h6>
          <div className="text-center">
            <Link
              to="/editprofile"
              style={{ color: "white", textDecoration: "none" }}
            >
              <button className="btn btn-primary">
                Edit profile <i className="fas fa-user-edit" />
              </button>
            </Link>
          </div>
        </div>
      );
    }
    return (
      <div className="bg-light border rounded-lg p-2">
        <h3 className="text-center">PROFILE</h3>
        {Profile}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    profile: state.user_r.user
  };
};
export default connect(
  mapStateToProps,
  { getUserDetails }
)(Profile);
