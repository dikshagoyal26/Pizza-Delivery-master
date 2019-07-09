import React from "react";
import Input from "../user/Input/Input";
import { updateAdmin } from "../../actions/adminActions";
import { connect } from "react-redux";

class AdminFirstTime extends React.Component {
  constructor(props) {
    super();
    this.state = {
      password: "",
      confirmpassword: "",
      formErrors: { password: "", confirmpassword: "" },
      formValid: false
    };
  }

  clearState = () => {
    this.setState({
      password: "",
      confirmpassword: "",
      formErrors: { password: "", confirmpassword: "" },
      formValid: false
    });
  };

  onChangePassword = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    let isvalid = this.validate();
    this.setState({ formValid: isvalid });
    if (isvalid) {
      let adminData = {
        password: this.state.password
      };

      this.props.updateAdmin(adminData, this.props.history);
      this.clearState();
    }
  };

  validate = () => {
    console.log("Validate func");
    let pwderror = "";
    let confirmerror = "";

    if (!this.state.password) {
      pwderror = "Enter the new password";
    } else {
      if (this.state.password.length < 6) {
        pwderror = "Invalid password";
      }
    }
    if (
      this.state.password != this.state.confirmpassword ||
      !this.state.confirmpassword
    ) {
      confirmerror = "Password does not match";
    }

    if (pwderror || confirmerror) {
      this.setState({
        formErrors: {
          password: pwderror,
          confirmpassword: confirmerror
        }
      });
      return false;
    }
    return true;
  };

  render() {
    return (
      <div className="bg-light  border rounded-lg col-md-6 my-3 mx-auto p-3">
        <h2 className="text-center text-danger">CHANGE PASSWORD</h2>
        <form onSubmit={this.onSubmit} className="formGroup">
          <Input
            name="password"
            type="password"
            placeholder="Password*"
            handleChange={this.onChangePassword}
            value={this.state.password}
          />
          {this.state.formErrors.password ? (
            <p className="text-danger">
              <i className="fas fa-exclamation-triangle"> </i>
              {this.state.formErrors.password}
            </p>
          ) : null}

          <Input
            name="confirmpassword"
            type="password"
            placeholder="Confirm Password*"
            handleChange={this.onChangePassword}
            value={this.state.confirmpassword}
          />
          {this.state.formErrors.confirmpassword ? (
            <p className="text-danger">
              <i className="fas fa-exclamation-triangle"> </i>
              {this.state.formErrors.confirmpassword}
            </p>
          ) : null}

          <div className="text-center">
            <a href=" ">
              <button className="btn btn-danger mt-3" type="submit">
                Submit
              </button>
            </a>
          </div>
        </form>
      </div>
    );
  }
}
export default connect(
  null,
  { updateAdmin }
)(AdminFirstTime);
