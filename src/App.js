import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    function ActionLink() {
    function handleClick(e) {
      e.preventDefault();
      console.log('The link was clicked.');
    }
  }
    return (
      <div className="App">
        <header className="App-header">
          {/*<button className="btn">LogIn</button>*/}
          <h1> Logo </h1>
        </header>
        <div className="topnav" id="myTopnav">
          <a className="nav-link">Menu</a>
          <a className="nav-link">Track</a>
          <a className="nav-link">Feedback</a>
          <a className="nav-link">Change Password</a> 
          <a className="icon" onClick={this.handleClick}><i className="fa fa-bars"></i></a>
        </div>  
      </div>
    );
  }
}

export default App;
