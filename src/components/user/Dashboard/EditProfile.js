import React from "react";
import Input from "../Input/Input";
import { connect } from "react-redux";
import { editUserDetails } from "../../../actions/userActions";
import { Link } from "react-router-dom";
import Address from "../Checkout/Address";

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: " ",
      lastname: " ",
      phone: 0,
      birthday: " ",
      houseNo: "",
      street: "",
      town: "",
      society: "",
      state: "",
      pin: "",
      formErrors: {
        firstname: "",
        lastname: "",
        email: "",
        phone: ""
      }
    };
  }

  componentDidMount = () => {
    this.setState({
      firstname: this.props.profile.firstname,
      lastname: this.props.profile.lastname,
      phone: this.props.profile.phone,
      birthday: this.props.profile.dob,
      houseNo: this.props.profile.address[0].houseNo,
      street: this.props.profile.address[0].street,
      town: this.props.profile.address[0].town,
      society: this.props.profile.address[0].society,
      state: this.props.profile.address[0].state,
      pin: this.props.profile.address[0].pin,
      formErrors: {
        firstname: "",
        lastname: "",
        phone: "",
        houseNo: "",
        street: "",
        town: "",
        society: "",
        state: "",
        pin: ""
      }
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
      if (this.state.phone.toString().length !== 10) {
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
        birthday: this.state.birthday,
        address: [
          {
            houseNo: this.state.houseNo,
            street: this.state.street,
            town: this.state.town,
            society: this.state.society,
            state: this.state.state,
            pin: this.state.pin
          }
        ]
      };
      this.props.editUserDetails(userData, this.props.history);
    }
  };

  render() {
    console.log(this.state);
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
              error={this.state.formErrors.firstname}
            />

            <Input
              name="lastname"
              type="text"
              placeholder="Last Name*"
              label="Last Name:"
              value={this.state.lastname}
              handleChange={this.onEditProfile}
              error={this.state.formErrors.lastname}
            />

            <Input
              name="phone"
              type="number"
              placeholder="Phone*"
              label="Phone:"
              value={this.state.phone}
              handleChange={this.onEditProfile}
              error={this.state.formErrors.phone}
            />

            <Input
              name="birthday"
              type="date"
              placeholder="Birthday*"
              label="Birthday(Optional):"
              value={this.state.birthday}
              handleChange={this.onEditProfile}
            />

            <Address
              handleChange={this.onEditProfile}
              value={{
                houseNo: this.state.houseNo,
                street: this.state.street,
                town: this.state.town,
                society: this.state.society,
                state: this.state.state,
                pin: this.state.pin
              }}
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
