import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import List from './components/List';
import Details from './components/Details';
import {BrowserRouter,Route,Switch } from 'react-router-dom';
import Cart from './components/cart/Cart';
import Profile from './components/Profile/Profile';
import EditProfile from './components/Profile/EditProfile';
import ChangePassword from './components/ChangePassword';
import Track from './components/Track';
import Feedback from './components/Feedback';

class App extends Component {
  render() { 
    return (
     <BrowserRouter>
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path="/" component={List}/>
          <Route exact path="/details/:id" component={Details}/>
          <Route exact path="/cart" component={Cart}/>
          <Route exact path="/profile" component={Profile}/>
          <Route exact path="/editprofile" component={EditProfile}/>
          <Route exact path="/changepassword" component={ChangePassword}/>
          <Route exact path="/track" component={Track}/>
          <Route exact path="/feedback" component={Feedback}/>

        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;