import React, { Component } from "react";
import { connect } from "react-redux";
import header_bg from "../img/header_bg.png";

import { Redirect, withRouter, Link } from "react-router-dom";
import "./HomePage.css";

class HomePage extends Component {
  componentWillReceiveProps = (nextProps) => {
    console.log("Home component received Props" + nextProps.is_login);
  };

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    let HomeDisplay = (
      <div className="home_background">
        <img width="100%" src={header_bg} alt="CoverPage" />
        <div className="home_bacground_over ">
          <p className="text-center">
            Pizza Hub's online ordering Yummy <br />
            pizza delivered fast & fresh
          </p>
          <Link to="/login">
            {" "}
            <button className="btn btn-danger">Order Now</button>
          </Link>
        </div>
      </div>
    );
    if (this.props.is_login) {
      if (!this.props.is_admin) {
        HomeDisplay = <Redirect to="/menu" />;
      } else {
        if (this.props.isFirstTym) {
          HomeDisplay = <Redirect to="/admin/firsttime" />;
        } else {
          HomeDisplay = <Redirect to="/admin/dashboard" />;
        }
      }
    }
    return <div>{HomeDisplay}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    is_login: state.auth_r.login,
    is_admin: state.auth_r.is_admin,
    isFirstTym: state.ar.admin.isFirstTym
  };
};

export default withRouter(connect(mapStateToProps)(HomePage));
