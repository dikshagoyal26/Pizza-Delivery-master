import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";

class HomePage extends Component {
  componentWillReceiveProps = nextProps => {
    console.log("Home component received Props" + nextProps.is_login);
  };

  componentWillUnmount() {
    console.log("Component Unmounted");
  }

  render() {
    let HomeDisplay = (
      <img
        width="100%"
        src="https://images6.alphacoders.com/412/412086.jpg"
        alt="CoverPage"
      />
    );
    if (this.props.is_login) {
      if (!this.props.is_admin) {
        HomeDisplay = <Redirect to="/menu" />;
      } else {
        HomeDisplay = <Redirect to="/admin/dashboard" />;
      }
    }
    return <div>{HomeDisplay};</div>;
  }
}

const mapStateToProps = state => {
  return {
    is_login: state.auth_r.login,
    is_admin: state.auth_r.is_admin
  };
};

export default withRouter(connect(mapStateToProps)(HomePage));
