import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  render(){
    function handleClick() {
      var x = document.getElementById("Topnav");
      if (x.className === "topnav") {
          x.className += " responsive";
        } 
      else {
            x.className = "topnav";
          }
      }
    return(
        <div>
        <header className="App-header">
          <h1> Logo </h1>
        </header>

        <div className = "topnav" id = "Topnav">
          <a href="/list">Menu</a>
          <a href="">Cart</a>
          <a href="">Track</a>
          <a href="">Feedback</a>
          <a href="">Change Password</a> 
          <a className ="icon" onClick = {handleClick}><i className="fa fa-bars"></i></a>
        </div>  
        </div>
      )
  }
}
export default Header;