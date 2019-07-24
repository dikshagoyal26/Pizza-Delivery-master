import React from "react";
import Input from "./Input/Input";
import { updatePwd } from "../../actions/userActions";
import { connect } from "react-redux";

class ChangePassword extends React.Component {
  constructor(props) {
    super();
    this.state = {
      oldpassword: "",
      newpassword: "",
      confirmpassword: "",
      formErrors: { oldpassword: "", newpassword: "", confirmpassword: "" },
      // oldpasswordValid: false,
      // newpasswordValid: false,
      // confirmpasswordValid: false,
      formValid: false
    };
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  clearState = () => {
    this.setState({
      oldpassword: "",
      newpassword: "",
      confirmpassword: "",
      formErrors: { oldpassword: "", newpassword: "", confirmpassword: "" },
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
      const userData = {
        oldpassword: this.state.oldpassword,
        password: this.state.newpassword
      };
      this.props.updatePwd(userData, this.props.history);
      this.clearState();
    }
  };

  validate = () => {
    let pwderror = "";
    let newpwderror = "";
    let confirmerror = "";

    if (!this.state.oldpassword) {
      pwderror = "Enter the password";
    } else {
      if (this.state.oldpassword.length < 6) {
        pwderror = "Invalid password";
      }
    }

    if (!this.state.newpassword) {
      newpwderror = "Enter the new password";
    } else {
      if (this.state.newpassword.length < 6) {
        newpwderror = "Invalid password";
      }
    }
    if (
      this.state.newpassword !== this.state.confirmpassword ||
      !this.state.confirmpassword
    ) {
      confirmerror = "Password does not match";
    }

    if (pwderror || newpwderror || confirmerror) {
      this.setState({
        formErrors: {
          oldpassword: pwderror,
          newpassword: newpwderror,
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
        <form onSubmit={this.onSubmit}>
          <Input
            name="oldpassword"
            type="password"
            placeholder="Old Password*"
            handleChange={this.onChangePassword}
            value={this.state.oldpassword}
            error={this.state.formErrors.oldpassword}
          />

          <Input
            name="newpassword"
            type="password"
            placeholder="New Password*"
            handleChange={this.onChangePassword}
            value={this.state.newpassword}
            error={this.state.formErrors.newpassword}
          />

          <Input
            name="confirmpassword"
            type="password"
            placeholder="Confirm Password*"
            handleChange={this.onChangePassword}
            value={this.state.confirmpassword}
            error={this.state.formErrors.confirmpassword}
          />

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
  { updatePwd }
)(ChangePassword);
