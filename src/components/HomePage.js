import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, withRouter } from "react-router-dom";

class HomePage extends Component {
  render() {
    if (this.props.is_login) {
      if (!this.props.is_admin) {
        return <Redirect to="/menu" />;
      } else {
        return <Redirect to="/admin/dashboard" />;
      }
    } else {
      return (
        <div>
          <img
            width="100%"
            src="https://images6.alphacoders.com/412/412086.jpg"
            alt="CoverPage"
          />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    is_login: state.auth_r.login,
    is_admin: state.auth_r.is_admin
  };
};

export default withRouter(connect(mapStateToProps)(HomePage));
