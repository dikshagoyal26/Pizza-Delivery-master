import React from "react";
import Input from "../Input/Input";
import Select from "../Input/Select";
import { connect } from "react-redux";
import { editUserDetails } from "../../../actions/userActions";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: " ",
      lastname: " ",
      email: " ",
      phone: " ",
      gender: " ",
      birthday: " ",
      formErrors: { firstname: "", lastname: "", email: "", phone: "" }
    };
  }

  componentDidMount = () => {
    this.setState({
      firstname: this.props.profile.firstname,
      lastname: this.props.profile.lastname,
      email: this.props.profile.email,
      phone: this.props.profile.phone,
      gender: this.props.profile.gender,
      birthday: this.props.profile.birthday,
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

      if (this.state.phone.length !== 10) {
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
    }
    return true;
  };

  onEditProfile = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  onSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      const userData = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        phone: this.state.phone,
        gender: this.state.gender,
        birthday: this.state.birthday
      };
      this.props.editUserDetails(userData, this.props.history);
    } else {
      console.log("Not validated");
      console.log(this.state);
    }
  };

  render() {
    return (
      <div className="col-md-6 my-3 mx-auto p-3 bg-light border rounded-lg">
        <div>
          <h2 className="text-center text-danger">EDIT PROFILE</h2>
          <form onSubmit={this.onSubmit} className="formGroup">
            <Input
              name="firstname"
              type="text"
              placeholder="First Name*"
              l
              abel="First Name:"
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

            <Select
              name="gender"
              handleChange={this.onEditProfile}
              placeholder="Gender"
              label="Gender:"
              value={this.state.gender}
              options={["Male", "Female", "Other"]}
            />

            <Input
              name="birthday"
              type="date"
              placeholder="Birthda*"
              label="Birthday(Optional):"
              value={this.state.birthday}
              handleChange={this.onEditProfile}
            />

            <div className="text-center mt-3">
              <button type="submit" className="btn btn-danger">
                Save
              </button>
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
