import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import { resetPwd } from "../../../actions/authActions";

class UserForgetPwd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",

      formErrors: {
        email: ""
      },
      isValid: false
    };
  }

  initState = () => {
    this.setState({
      email: "",
      formErrors: {
        email: ""
      }
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitForm = e => {
    e.preventDefault();

    let isValid = this.validate();
    this.setState({ isValid: isValid });

    if (isValid) {
      this.props.resetPwd(this.state.email, this.props.history);

      this.setState({
        formErrors: {
          email: ""
        }
      });
    }
  };

  validate = () => {
    //Validation error message variables
    let emailError = "";

    //Validations
    if (!this.state.email) {
      emailError = "Required email";
    }
    if (emailError) {
      this.setState({
        formErrors: {
          email: emailError
        }
      });
      return false;
    } else return true;
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
            <h4 className="text-center">Log in</h4>

            {/* {this.props.errors ? (
                  <p className="text-danger text-center">
                    <i className="fas fa-exclamation-triangle" />
                    {this.props.errors}
                  </p>
                ) : null} */}

            <p className="text-center">A mail will be sent to your userid</p>
            <form onSubmit={this.onSubmitForm}>
              <Input
                type="email"
                name="email"
                placeholder="Enter your Email"
                title={<i className="fas fa-envelope" />}
                handleChange={this.handleChange}
                value={this.state.email}
                error={this.state.formErrors.email}
              />

              <div className="text-center">
                <button
                  className="btn btn-danger"
                  type="submit"
                  onClick={this.onClickSendpwd}
                >
                  Send email
                  <i className="fas fa-sign-in ml-1" />
                </button>
              </div>
            </form>

            <div className="form_footer">
              <div>
                Not a member?
                <Link to="/register" className="blue-text">
                  Sign up
                </Link>
              </div>
              <div>
                Login as{"  "}
                <Link to="/login" className="blue-text">
                  User
                </Link>
              </div>
              <div>
                Login as{"  "}
                <Link to="/admin/login" className="blue-text">
                  Admin
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
  { resetPwd }
)(UserForgetPwd);
