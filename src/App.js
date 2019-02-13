import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button className="btn">LogIn</button>
          <h1> LOGO </h1>
        </header>
        <nav className="navbar navbar-expand-sm ">
            <ul className="navbar-nav">
              <li className="nav-item"><a className="nav-link">Home</a></li>
              <li className="nav-item"><a className="nav-link">Track Order</a></li>
              <li className="nav-item"><a className="nav-link">Write Feedback</a></li>
              <li className="nav-item"><a className="nav-link">Change Password</a></li>
            </ul>
            
        </nav>
      </div>
    );
  }
}

export default App;
