import React from "react";
import { connect } from "react-redux";
import { getUserDetails } from "../../../actions/userActions";
class Profile extends React.Component {
  componentDidMount = () => {
    this.props.getUserDetails();
  };
  render() {
    return (
      <div className="bg-light border rounded-lg p-3">
        <h3 className="text-center">PROFILE</h3>
        <div>
          <h6 className="p-2">First name: {this.props.profile.firstname}</h6>
          <h6 className="p-2">Last name: {this.props.profile.lastname}</h6>
          <h6 className="p-2">Email: {this.props.profile.email}</h6>
          <h6 className="p-2">Phone: {this.props.profile.phone}</h6>
          <h6 className="p-2">Gender: {this.props.profile.gender}</h6>
          <h6 className="p-2">Birthday: {this.props.profile.birthday}</h6>
        </div>
        <div className="text-center">
          <a
            href="/editprofile"
            style={{ color: "white", textDecoration: "none" }}
          >
            <button className="btn btn-primary">
              Edit profile <i className="fas fa-user-edit" />
            </button>
          </a>
        </div>
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
