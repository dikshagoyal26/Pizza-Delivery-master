import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
const PrivateRoute = ({ component: Component, auth, allowed, ...rest }) => (
  <Route
    {...rest}
    render={
      props => {
        if (auth.login === true) {
          if (allowed === "user" && auth.is_admin === false) {
            return <Component {...props} />;
          } else if (allowed === "admin" && auth.is_admin === true) {
            return <Component {...props} />;
          } else {
            return <Redirect to="/" />;
          }
        } else {
          return <Redirect to="/" />;
        }
      }
      //auth.login === true ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const mapStateToProps = state => ({
  auth: state.auth_r
});
export default connect(mapStateToProps)(PrivateRoute);
