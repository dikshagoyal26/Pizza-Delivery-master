import React from "react";
import Input from "../Input/Input";
import Select from "../Input/Select";
import { connect } from "react-redux";
import { editUserDetails } from "../../../actions/userActions";
import { Link } from "react-router-dom";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: " ",
      lastname: " ",
      phone: 0,
      birthday: " ",
      formErrors: { firstname: "", lastname: "", email: "", phone: "" }
    };
  }

  componentDidMount = () => {
    this.setState({
      firstname: this.props.profile.firstname,
      lastname: this.props.profile.lastname,
      phone: this.props.profile.phone,
      birthday: this.props.profile.dob,
      formErrors: { firstname: "", lastname: "", phone: "" }
    });
  };

  validate = () => {
    let firstnameError = "";
    let lastnameError = "";
    let phoneError = "";

    if (!this.state.firstname) {
      firstnameError = "Required firstname";
    }

    if (!this.state.lastname) {
      lastnameError = "Required lastname";
    }

    if (!this.state.phone) {
      phoneError = "Required Phone";
    } else {
      if (this.state.phone.toString().length != 10) {
        phoneError = "Invalid Phone";
      }
    }

    if (phoneError || firstnameError || lastnameError) {
      this.setState({
        formErrors: {
          firstname: firstnameError,
          lastname: lastnameError,
          phone: phoneError
        }
      });
      return false;
    } else {
      return true;
    }
  };

  onEditProfile = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    console.log(this.state);
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      const userData = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        phone: this.state.phone,
        birthday: this.state.birthday
      };
      this.props.editUserDetails(userData, this.props.history);
    }
  };

  render() {
    return (
      <div className="container-fluid p-5">
        <div className="bg-light border rounded-lg p-3">
          <h2 className="text-center text-danger">EDIT PROFILE</h2>
          <form onSubmit={this.onSubmit} className="formGroup">
            <Input
              name="firstname"
              type="text"
              placeholder="First Name*"
              label="First Name:"
              value={this.state.firstname}
              handleChange={this.onEditProfile}
            />

            {this.state.formErrors.firstname ? (
              <p className="text-danger">
                <i className="fas fa-exclamation-triangle"> </i>
                {this.state.formErrors.firstname}
              </p>
            ) : null}

            <Input
              name="lastname"
              type="text"
              placeholder="Last Name*"
              label="Last Name:"
              value={this.state.lastname}
              handleChange={this.onEditProfile}
            />

            {this.state.formErrors.lastname ? (
              <p className="text-danger">
                <i className="fas fa-exclamation-triangle"> </i>
                {this.state.formErrors.lastname}
              </p>
            ) : null}

            <Input
              name="phone"
              type="number"
              placeholder="Phone*"
              label="Phone:"
              value={this.state.phone}
              handleChange={this.onEditProfile}
            />

            {this.state.formErrors.phone ? (
              <p className="text-danger">
                <i className="fas fa-exclamation-triangle"> </i>
                {this.state.formErrors.phone}
              </p>
            ) : null}

            <Input
              name="birthday"
              type="date"
              placeholder="Birthday*"
              label="Birthday(Optional):"
              value={this.state.birthday}
              handleChange={this.onEditProfile}
            />

            <div className="text-center mt-3">
              <button type="submit" className="btn btn-primary m-3">
                Save
              </button>
              <Link to="/dashboard">
                <button type="submit" className="btn btn-primary m-3 ">
                  Cancel
                </button>
              </Link>
            </div>
          </form>
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
  { editUserDetails }
)(EditProfile);
