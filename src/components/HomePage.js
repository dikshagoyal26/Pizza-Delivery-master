import React, { Component } from "react";
import { connect } from "react-redux";

class HomePage extends Component {
  render() {
    let Img = null;
    if (!this.props.is_login) {
      Img = (
        <img
          width="100%"
          src="https://images6.alphacoders.com/412/412086.jpg"
          alt="CoverPage"
        />
      );
    } else {
      if (!this.props.is_admin) {
        this.props.history.push("/menu");
      } else {
        this.props.history.push("/admin/dashboard");
      }
    }
    return <div>{Img}</div>;
  }
}

const mapStateToProps = state => {
  return {
    is_login: state.auth_r.login,
    is_admin: state.auth_r.is_admin
  };
};

export default connect(mapStateToProps)(HomePage);
