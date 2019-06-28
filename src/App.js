import React, { Component } from "react";
import "./App.css";
import NotFoundPage from "./components/NotFoundPage";
import HomePage from "./components/HomePage";

import Navbar from "./components/user/layout/Navbar";
import Footer from "./components/user/layout/Footer";
import List from "./components/user/menu_list/List";
import Details from "./components/user/menu_list/Details";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import Cart from "./components/user/cart/Cart";
import Profile from "./components/user/Dashboard/Profile";
import EditProfile from "./components/user/Dashboard/EditProfile";
import Dashboard from "./components/user/Dashboard/Dashboard";
import ChangePassword from "./components/user/ChangePassword";
import Track from "./components/user/Track";
import Feedback from "./components/user/Feedback";
import Order from "./components/user/Checkout/Order";
import Payment from "./components/user/Checkout/Payment";

import { connect } from "react-redux";

import Add from "./components/admin/create-product/Add";
import Edit from "./components/admin/create-product/Edit";
import ViewFeedback from "./components/admin/feedback/ViewFeedback";
import ViewList from "./components/admin/ViewList";
import ViewSales from "./components/admin/ViewSales";
import Admins from "./components/admin/admins/Admins";
import ViewOrder from "./components/admin/Order/ViewOrder";
import UpdateOrder from "./components/admin/Order/UpdateOrder";
import AdminDashboard from "./components/admin/layout/AdminDashboard";
import axios from "axios";
// You can use any cookie library or whatever
// library to access your client storage.

// axios.interceptors.request.use(
//   function(config) {
//     const token = localStorage.getItem("jwtToken");
//     if (token != null) {
//       config.headers["auth-token"] = token;
//     }
//     return config;
//   },
//   function(err) {
//     return Promise.reject(err);
//   }
// );

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/menu" component={List} />
            <Route exact path="/details/:id" component={Details} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/editprofile" component={EditProfile} />
            <Route exact path="/changepassword" component={ChangePassword} />
            <Route exact path="/track" component={Track} />
            <Route exact path="/feedback" component={Feedback} />
            <Route exact path="/checkout/order" component={Order} />
            <Route exact path="/checkout/payment" component={Payment} />

            <Route exact path="/admin/dashboard" component={AdminDashboard} />
            <Route exact path="/admin/admins" component={Admins} />
            <Route exact path="/admin/feedback" component={ViewFeedback} />
            <Route exact path="/admin/add" component={Add} />
            <Route exact path="/admin/edit/:id" component={Edit} />
            <Route exact path="/admin/list" component={ViewList} />
            <Route exact path="/admin/sales" component={ViewSales} />
            <Route exact path="/admin/order" component={ViewOrder} />
            <Route exact path="/admin/order/update" component={UpdateOrder} />
            <Route exact path="/admin/feedback" component={ViewFeedback} />
            <Route exact path="/admin/updateorder" component={UpdateOrder} />
            <Route component={NotFoundPage} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.cr.login
  };
};

export default connect(mapStateToProps)(App);
