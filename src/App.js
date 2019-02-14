import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
      function handleClick(e) {
        e.preventDefault();
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
          } else {
            x.className = "topnav";
          }
      }
    return (
      <div className="App">
        <header className="App-header">
          {/*<button className="btn">LogIn</button>*/}
          <h1> Logo </h1>
        </header>
        <div className="topnav" id="myTopnav">
          <a >Menu</a>
          <a >Track</a>
          <a >Feedback</a>
          <a >Change Password</a> 
          <a className="icon" onClick={handleClick}><i className="fa fa-bars"></i></a>
        </div>  
      </div>
    );
  }
}

export default App;
