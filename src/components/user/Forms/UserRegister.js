import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import { registerUser } from "../../../actions/authActions";

class UserRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display_form: "login",
      email: "",
      password: "",
      confirmpassword: "",
      firstname: "",
      lastname: "",
      formErrors: {
        email: "",
        password: "",
        confirmpassword: "",
        firstname: "",
        lastname: ""
      },
      isValid: false
    };
  }

  initState = () => {
    this.setState({
      email: "",
      password: "",
      confirmpassword: "",
      firstname: "",
      lastname: "",
      formErrors: {
        email: "",
        password: "",
        confirmpassword: "",
        firstname: "",
        lastname: ""
      }
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  logInWIthGoogle = () => {
    this.props.logInWIthGoogle();
  };

  onSubmitForm = e => {
    e.preventDefault();

    let isValid = this.validate();
    this.setState({ isValid: isValid });

    if (isValid) {
      const userData = {
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        userid: this.state.email,
        password: this.state.password
      };
      this.props.registerUser(userData, this.props.history);

      this.setState({
        formErrors: {
          email: "",
          password: "",
          confirmpassword: "",
          firstname: "",
          lastname: ""
        }
      });
    }
  };

  validate = () => {
    let emailError = "";
    let passwordError = "";
    let confirmPwdError = "";
    let firstnameError = "";
    let lastnameError = "";

    //Validations
    if (!this.state.firstname) {
      firstnameError = "Required Firstname!";
    }

    if (!this.state.lastname) {
      lastnameError = "Required Lastname!";
    }

    if (!this.state.email) {
      emailError = "Required email";
    }

    if (this.state.password.length < 6) {
      if (!this.state.password) passwordError = "Required Password";
      else passwordError = "Min length of password should be 6";
    }

    if (
      this.state.password != this.state.confirmpassword ||
      !this.state.confirmpassword
    ) {
      if (!this.state.confirmpassword)
        confirmPwdError = "Please confirm the password";
      else confirmPwdError = "Password dont match!";
    }

    if (
      emailError ||
      passwordError ||
      confirmPwdError ||
      lastnameError ||
      firstnameError
    ) {
      this.setState({
        formErrors: {
          email: emailError,
          password: passwordError,
          confirmpassword: confirmPwdError,
          firstname: firstnameError,
          lastname: lastnameError
        }
      });
      return false;
    } else {
      return true;
    }
  };

  render() {
    return (
      <div className="login_form">
        <div className="home_background">
          <img
            width="100%"
            src="https://www.dominos.co.in/assets/header_bg.png"
            alt="CoverPage"
          />
        </div>
        <div className="">
          <div className="form ">
            <h4 className="text-center">Register</h4>

            <form onSubmit={this.onSubmitForm}>
              <Input
                type="text"
                name="firstname"
                placeholder="Enter your firstname"
                title={<i className="fas fa-envelope" />}
                handleChange={this.handleChange}
                value={this.state.firstname}
                error={this.state.formErrors.firstname}
              />
              <Input
                type="text"
                name="lastname"
                placeholder="Enter your lastname"
                title={<i className="fas fa-envelope" />}
                handleChange={this.handleChange}
                value={this.state.lastname}
                error={this.state.formErrors.lastname}
              />

              <Input
                type="email"
                name="email"
                placeholder="Enter a valid Email"
                title={<i className="fas fa-envelope" />}
                handleChange={this.handleChange}
                value={this.state.email}
                error={this.state.formErrors.email}
              />

              <Input
                type="password"
                name="password"
                placeholder="Enter Password"
                title={<i className="fas fa-lock prefix" />}
                handleChange={this.handleChange}
                value={this.state.password}
                error={this.state.formErrors.password}
              />

              <Input
                type="password"
                name="confirmpassword"
                placeholder="Confirm Password"
                title={<i className="fas fa-lock prefix" />}
                handleChange={this.handleChange}
                error={this.state.formErrors.confirmpassword}
              />

              <div className="text-center form-sm mt-2">
                <button className="btn btn-info">
                  Sign up <i className="fas fa-sign-in ml-1" />
                </button>
              </div>
            </form>
            <div className="text-center p-2">
              <button className="btn btn-danger" onClick={this.logInWIthGoogle}>
                Signup with Google
                <i className="fas fa-sign-in ml-1" />
              </button>
            </div>

            <div className="form_footer">
              <div>
                Already have an account?{" "}
                <Link to="/login" className="blue-text">
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  { registerUser }
)(UserRegister);
