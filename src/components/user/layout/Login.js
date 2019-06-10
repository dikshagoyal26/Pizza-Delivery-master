import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Input from "../Input/Input";
import { LOGIN, ADMINLOGIN, SIGNUP } from "../../../actions/types";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display_form: "login",
      email: "",
      password: "",
      confirmpassword: "",
      formErrors: {
        email: "",
        password: "",
        confirmpassword: ""
      }
    };
  }

  onClick_Login = () => {
    this.setState({
      display_form: "login",
      email: "",
      password: "",
      confirmpassword: "",
      formErrors: { email: "", password: "", confirmpassword: "" }
    });
  };

  onClick_SignUp = () => {
    this.setState({
      display_form: "signup",
      email: "",
      password: "",
      confirmpassword: "",
      formErrors: { email: "", password: "", confirmpassword: "" }
    });
  };

  onClick_Admin = () => {
    this.setState({
      display_form: "admin",
      email: "",
      password: "",
      confirmpassword: "",
      formErrors: { email: "", password: "", confirmpassword: "" }
    });
  };

  onClick_ForgotPwd = () => {};

  handleChange = e => {
    console.log(e.target.name + "=" + e.target.value);
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitForm = e => {
    e.preventDefault();
    let isValid = this.validate();
    console.log(" status: Valid form + state: " + JSON.stringify(this.state));
    if (isValid) {
      if (this.state.display_form == "login") {
        this.props.dispatch({ type: LOGIN });
      } else if (this.state.display_form == "signup") {
        this.props.dispatch({ type: SIGNUP });
      } else if (this.state.display_form == "admin") {
        this.props.dispatch({ type: ADMINLOGIN });
      }

      window.location.reload();
      console.log(this.props);
    }
  };

  validate = () => {
    // let emailError = "";
    // let passwordError = "";
    // let confirm_password_Error = "";
    // if (!this.state.email) {
    //   emailError = "Required email";
    // }
    // if (this.state.password.length < 6) {
    //   if (!this.state.password) passwordError = "Required Password";
    //   else passwordError = "Min length of password should be 6";
    // }
    // if (this.state.password != this.state.confirmpassword) {
    //   if (!this.state.confirmpassword)
    //     confirm_password_Error = "Please confirm the password";
    //   else confirm_password_Error = "Password dont match!";
    // }
    // this.setState({
    //   formErrors: {
    //     email: emailError,
    //     password: passwordError,
    //     confirmpassword: confirm_password_Error
    //   }
    // });
    // if (this.state.display_form == "login" && (emailError || passwordError))
    //   return false;
    // else if (
    //   this.state.display_form == "signup" &&
    //   (emailError || passwordError || confirm_password_Error)
    // )
    //   return false;
    // else
    return true;
  };

  render() {
    let Form = null;

    if (this.state.display_form == "login") {
      Form = (
        <div>
          <div className="login">
            <div className="modal-body">
              <div className="tab-pane " id="login">
                <h4 className="text-center">Log in</h4>
                <form onSubmit={this.onSubmitForm}>
                  <div className="form-group">
                    <div className="md-form form-sm mb-3">
                      <Input
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        title=<i className="fas fa-envelope" />
                        handleChange={this.handleChange}
                        value={this.state.email}
                      />
                      {this.state.formErrors.email ? (
                        <p className="text-danger">
                          <i className="fas fa-exclamation-triangle"> </i>\
                          {this.state.formErrors.email}
                        </p>
                      ) : null}
                    </div>
                    <div className="md-form form-sm mb-3">
                      <Input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        title=<i className="fas fa-lock prefix" />
                        handleChange={this.handleChange}
                      />
                      {this.state.formErrors.password ? (
                        <p className="text-danger">
                          <i className="fas fa-exclamation-triangle"> </i>
                          {this.state.formErrors.password}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-danger" type="submit">
                      Log in
                      <i className="fas fa-sign-in ml-1" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <div>
                  <p>
                    Not a member?
                    <a
                      href="#signup"
                      className="blue-text"
                      onClick={this.onClick_SignUp}
                    >
                      Sign Up
                    </a>
                  </p>
                  <p>
                    Login as{"  "}
                    <a
                      href="#adminlogin"
                      className="blue-text"
                      onClick={this.onClick_Admin}
                    >
                      Admin
                    </a>
                  </p>
                  <p>
                    Forgot
                    <a
                      href="#"
                      className="blue-text"
                      onClick={this.onClick_ForgotPwd}
                    >
                      Password?
                    </a>
                  </p>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-info waves-effect ml-auto"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>{" "}
          </div>
        </div>
      );
    } else if (this.state.display_form == "signup") {
      Form = (
        <div>
          <div className="signup">
            <div className="modal-body">
              <div className="tab-pane" id="signup">
                <h4 className="text-center">Sign up</h4>
                <form onSubmit={this.onSubmitForm}>
                  <div className="md-form form-sm mb-3">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Enter a valid Email"
                      title=<i className="fas fa-envelope" />
                      handleChange={this.handleChange}
                    />
                    {this.state.formErrors.email ? (
                      <p className="text-danger">
                        <i className="fas fa-exclamation-triangle"> </i>
                        {this.state.formErrors.email}
                      </p>
                    ) : null}
                  </div>
                  <div className="md-form form-sm mb-3">
                    <Input
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      title=<i className="fas fa-lock prefix" />
                      handleChange={this.handleChange}
                    />
                    {this.state.formErrors.password ? (
                      <p className="text-danger">
                        <i className="fas fa-exclamation-triangle"> </i>
                        {this.state.formErrors.password}
                      </p>
                    ) : null}
                  </div>
                  <div className="md-form form-sm mb-3">
                    <Input
                      type="password"
                      name="confirmpassword"
                      placeholder="Confirm Password"
                      title=<i className="fas fa-lock prefix" />
                      handleChange={this.handleChange}
                    />
                    {this.state.formErrors.confirmpassword ? (
                      <p className="text-danger">
                        <i className="fas fa-exclamation-triangle"> </i>
                        {this.state.formErrors.confirmpassword}
                      </p>
                    ) : null}
                  </div>
                  <div className="text-center form-sm mt-2">
                    <button className="btn btn-info">
                      Sign up <i className="fas fa-sign-in ml-1" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <div className="options text-right">
                  <p className="pt-1">
                    Already have an account?{" "}
                    <a
                      onClick={this.onClick_Login}
                      href="#login"
                      className="blue-text"
                    >
                      Log In
                    </a>
                  </p>
                  <p>
                    Login as{"  "}
                    <a
                      href="#adminlogin"
                      className="blue-text"
                      onClick={this.onClick_Admin}
                    >
                      Admin
                    </a>
                  </p>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-info waves-effect ml-auto"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.display_form == "admin") {
      Form = (
        <div>
          <div className="adminlogin">
            <div className="modal-body">
              <div className="tab-pane " id="adminlogin">
                <h4 className="text-center">Log in as Admin</h4>
                <form onSubmit={this.onSubmitForm}>
                  <div className="form-group">
                    <div className="md-form form-sm mb-3">
                      <Input
                        type="email"
                        name="email"
                        placeholder="Enter your Email"
                        title=<i className="fas fa-envelope" />
                        handleChange={this.handleChange}
                        value={this.state.email}
                      />
                      {this.state.formErrors.email ? (
                        <p className="text-danger">
                          <i className="fas fa-exclamation-triangle"> </i>\
                          {this.state.formErrors.email}
                        </p>
                      ) : null}
                    </div>
                    <div className="md-form form-sm mb-3">
                      <Input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        title=<i className="fas fa-lock prefix" />
                        handleChange={this.handleChange}
                      />
                      {this.state.formErrors.password ? (
                        <p className="text-danger">
                          <i className="fas fa-exclamation-triangle"> </i>
                          {this.state.formErrors.password}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-danger" type="submit">
                      Log in as Admin
                      <i className="fas fa-sign-in ml-1" />
                    </button>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <div>
                  <p>
                    Login as{"  "}
                    <a
                      href="#login"
                      className="blue-text"
                      onClick={this.onClick_Login}
                    >
                      User
                    </a>
                  </p>
                  <p>
                    Forgot
                    <a
                      href="#"
                      className="blue-text"
                      onClick={this.onClick_ForgotPwd}
                    >
                      Password?
                    </a>
                  </p>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-info waves-effect ml-auto"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>{" "}
          </div>
        </div>
      );
    }

    return (
      <div className="col-12 p-0 login_page">
        {/* Navbar when user is not logged in */}
        <header className="App-header">
          <nav className="navbar navbar-dark mx-5">
            <a className="navbar-brand" href="/">
              {" "}
              Logo{" "}
            </a>
            <a>
              {" "}
              <button
                data-toggle="modal"
                data-target="#LoginForm"
                className="btn btn-danger"
              >
                Login
              </button>
            </a>
          </nav>
        </header>
        {/* Navbar ends */}

        <div
          className="modal fade"
          id="LoginForm"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog " role="document">
            <div className="modal-content">{Form}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    is_admin: state.cr.is_admin
  };
};

export default withRouter(connect(mapStateToProps)(List));
