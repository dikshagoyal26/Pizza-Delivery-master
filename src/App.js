import React, { Component } from "react";
import "./App.css";
import PrivateRoute from "./PrivateRoute";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";

import UserLogin from "./components/user/Forms/UserLogin";
import UserRegister from "./components/user/Forms/UserRegister";
import AdminLogin from "./components/user/Forms/AdminLogin";
import UserForgetPwd from "./components/user/Forms/UserForgetPwd";

import NotFoundPage from "./components/NotFoundPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/user/layout/Navbar";
import Footer from "./components/user/layout/Footer";
import List from "./components/user/menu_list/List";
import Details from "./components/user/menu_list/Details";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Cart from "./components/user/cart/Cart";
import Profile from "./components/user/Dashboard/Profile";
import EditProfile from "./components/user/Dashboard/EditProfile";
import Dashboard from "./components/user/Dashboard/Dashboard";
import ChangePassword from "./components/user/ChangePassword";
import Track from "./components/user/Track";
import Feedback from "./components/user/Feedback";
import Order from "./components/user/Checkout/Order";
import Payment from "./components/user/Checkout/Payment";

import Add from "./components/admin/create-product/Add";
import Edit from "./components/admin/create-product/Edit";
import ViewFeedback from "./components/admin/feedback/ViewFeedback";
import ViewList from "./components/admin/ViewList";
import ViewSales from "./components/admin/ViewSales";
import Admins from "./components/admin/admins/Admins";
import ViewOrder from "./components/admin/Order/ViewOrder";
import AdminDashboard from "./components/admin/layout/AdminDashboard";
import AdminFirstTime from "./components/admin/AdminFirstTime";

if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  console.log("token" + token);
  const decoded = jwt_decode(token);
  console.log(decoded);
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch({
      type: "LOGOUT"
    });
    //Redirect to login
    //window.location.href = "/";
  }
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <div className="App">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={UserLogin} />
              <Route exact path="/register" component={UserRegister} />
              <Route exact path="/admin/login" component={AdminLogin} />
              <Route exact path="/forgetpwd" component={UserForgetPwd} />

              <PrivateRoute
                allowed="user"
                exact
                path="/menu"
                component={List}
              />
              <PrivateRoute
                allowed="user"
                exact
                path="/details/:id"
                component={Details}
              />
              <PrivateRoute
                allowed="user"
                exact
                path="/cart"
                component={Cart}
              />
              <PrivateRoute
                allowed="user"
                exact
                path="/dashboard"
                component={Dashboard}
              />
              <PrivateRoute
                allowed="user"
                exact
                path="/profile"
                component={Profile}
              />
              <PrivateRoute
                allowed="user"
                exact
                path="/editprofile"
                component={EditProfile}
              />
              <PrivateRoute
                allowed="user"
                exact
                path="/changepassword"
                component={ChangePassword}
              />

              <PrivateRoute
                allowed="user"
                exact
                path="/track"
                component={Track}
              />
              <PrivateRoute
                allowed="user"
                exact
                path="/feedback"
                component={Feedback}
              />
              <PrivateRoute
                allowed="user"
                exact
                path="/checkout/order"
                component={Order}
              />
              <PrivateRoute
                allowed="user"
                exact
                path="/checkout/payment"
                component={Payment}
              />

              <PrivateRoute
                allowed="admin"
                exact
                path="/admin/firsttime"
                component={AdminFirstTime}
              />
              <PrivateRoute
                exact
                allowed="admin"
                path="/admin/dashboard"
                component={AdminDashboard}
              />
              <PrivateRoute
                allowed="admin"
                exact
                path="/admin/admins"
                component={Admins}
              />
              <PrivateRoute
                allowed="admin"
                exact
                path="/admin/feedback"
                component={ViewFeedback}
              />
              <PrivateRoute
                allowed="admin"
                exact
                path="/admin/add"
                component={Add}
              />
              <PrivateRoute
                allowed="admin"
                exact
                path="/admin/edit/:id"
                component={Edit}
              />
              <PrivateRoute
                allowed="admin"
                exact
                path="/admin/list"
                component={ViewList}
              />
              <PrivateRoute
                allowed="admin"
                exact
                path="/admin/sales"
                component={ViewSales}
              />
              <PrivateRoute
                allowed="admin"
                exact
                path="/admin/order"
                component={ViewOrder}
              />
              <PrivateRoute
                allowed="admin"
                exact
                path="/admin/feedback"
                component={ViewFeedback}
              />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
