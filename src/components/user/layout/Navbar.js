import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Login from "./Login";

class Navbar extends React.Component {
  handleClick = () => this.props.dispatch({ type: "LOGOUT" });
  render() {
    let Navbar = <p>Some error occured. Please try again later</p>;
    if (!this.props.is_login) {
      Navbar = <Login />;
    } else {
      if (!this.props.is_admin) {
        Navbar = (
          <div>
            <header className="App-header text-center">
              <nav className="navbar navbar-expand-md navbar-dark mx-5">
                <a className="navbar-brand" href="/menu">
                  {" "}
                  Logo{" "}
                </a>

                <button
                  className="navbar-toggler "
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                  aria-controls="navbarCollapse"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                      <Link to="/menu" className="nav-link">
                        Menu
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/feedback" className="nav-link">
                        Write Feedback
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/track" className="nav-link">
                        Track Order
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link to="/cart" className="nav-link">
                        <i className="fas fa-shopping-cart" /> Cart
                      </Link>
                    </li>
                  </ul>

                  <div className="dropdown">
                    <a
                      className="dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fas fa-user-circle fa-2x" />
                    </a>

                    <div
                      style={{ width: "100%" }}
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbarDropdown"
                    >
                      <a href="/dashboard" className="dropdown-item">
                        My Dashboard
                      </a>
                      <a href="/changepassword" className="dropdown-item">
                        Change Password
                      </a>
                      <div className="dropdown-divider" />
                      <a
                        href="/"
                        className="dropdown-item"
                        onClick={this.handleClick}
                      >
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </header>
          </div>
        );
      } else {
        Navbar = (
          <div>
            <header className="App-header text-center">
              <nav className="navbar navbar-expand-md navbar-dark mx-5">
                <a className="navbar-brand" href="/admin/dashboard">
                  {" "}
                  Logo{" "}
                </a>

                <button
                  className="navbar-toggler "
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarCollapse"
                  aria-controls="navbarCollapse"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                      <Link to="/admin/dashboard" className="nav-link">
                        Dashboard
                      </Link>
                    </li>
                    <li className="nav-item ">
                      <Link to="/admin/list" className="nav-link">
                        Product List
                      </Link>
                    </li>
                    <li className="nav-item ">
                      <Link to="/admin/admins" className="nav-link">
                        Admins
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/admin/feedback" className="nav-link">
                        View Feedback
                      </Link>
                    </li>
                  </ul>

                  <div className="dropdown">
                    <a
                      className="dropdown-toggle"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fas fa-user-circle fa-2x" />
                    </a>

                    <div
                      style={{ width: "100%" }}
                      className="dropdown-menu dropdown-menu-right"
                      aria-labelledby="navbarDropdown"
                    >
                      <a href="/changepassword" className="dropdown-item">
                        Change Password
                      </a>
                      <div className="dropdown-divider" />
                      <a
                        href="/"
                        className="dropdown-item"
                        onClick={this.handleClick}
                      >
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
            </header>
          </div>
        );
      }
    }
    return <div>{Navbar}</div>;
  }
}

const mapStateToProps = state => {
  return {
    is_login: state.auth_r.login,
    is_admin: state.auth_r.is_admin
  };
};

export default connect(mapStateToProps)(Navbar);
