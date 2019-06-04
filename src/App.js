import React, {Component} from 'react';
import './App.css';
import Navbar from './user/components/Navbar';
import List from './user/components/List';
import Details from './user/components/Details';
import {BrowserRouter,Route,Switch, withRouter,Redirect} from 'react-router-dom';
import Cart from './user/components/cart/Cart';
import Profile from './user/components/Dashboard/Profile';
import EditProfile from './user/components/Dashboard/EditProfile';
import Dashboard from './user/components/Dashboard/Dashboard';
import ChangePassword from './user/components/ChangePassword';
import Track from './user/components/Track';
import Feedback from './user/components/Feedback';
import Order from './user/components/Checkout/Order';
import Payment from './user/components/Checkout/Payment';
import Login from './user/components/Login';
import { connect } from 'react-redux';
import Add from './admin/components/Add';
import Edit from './admin/components/Edit';
import ViewFeedback from './admin/components/ViewFeedback';
import ViewList from './admin/components/ViewList';
import ViewSales from './admin/components/ViewSales';
import ViewOrder from './admin/components/Order/ViewOrder';
import UpdateOrder from './admin/components/Order/UpdateOrder';
import Admin from './admin/components/Admin';

class App extends Component {
  render() { 
    return (
     <BrowserRouter>
      <div className="App">
        {this.props.login === true ? (<Navbar/>):(<Login/>)}
        <Switch> 
                                      <Route exact path="/menu" component={withRouter(List)}/>
                                      <Route exact path="/details/:id" component={Details}/>
                                      <Route exact path="/cart" component={Cart}/>
                                      <Route exact path="/dashboard" component={Dashboard}/>
                                      <Route exact path="/profile" component={Profile}/>
                                      <Route exact path="/editprofile" component={EditProfile}/>
                                      <Route exact path="/changepassword" component={ChangePassword}/>
                                      <Route exact path="/track" component={Track}/>
                                      <Route exact path="/checkout/order" component={Order}/>
                                      <Route exact path="/checkout/payment" component={Payment}/>

                                      <Route exact path="/admin" component={Admin}/>
                                      <Route exact path="/admin/feedback" component={ViewFeedback}/>
                                      <Route exact path="/admin/add" component={Add}/>
                                      <Route exact path="/admin/edit" component={Edit}/>
                                      <Route exact path="/admin/view" component={ViewList}/>
                                      <Route exact path="/admin/sales" component={ViewSales}/>
                                      <Route exact path="/admin/order" component={ViewOrder}/>
                                      <Route exact path="/admin/updateorder" component={UpdateOrder}/>

                             </Switch>

      </div>
    </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) =>{
  return({
    login: state.cr.login
  })
}

export default connect(mapStateToProps)(App);