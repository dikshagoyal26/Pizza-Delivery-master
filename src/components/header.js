import React from 'react';
import {Link} from 'react-router-dom';

class Header extends React.Component {
  constructor(){
      super();
      this.handleClick = this.handleClick.bind(this);
    }
  handleClick() {
      var x = document.getElementById("Topnav");
      if (x.className === "topnav") {
          x.className += " responsive";
        } 
      else {
            x.className = "topnav";
          }
    }
  render(){
    return(
        <div>
        <header className="App-header">
          <h1> Logo </h1>
        </header>

        <div className = "topnav" id = "Topnav">
          <a href="/">Menu</a>
          <a href=" ">Track</a>
          <a href=" ">Feedback</a>
          <a href=" ">Change Password</a> 
          <a className ="icon" onClick = {this.handleClick}><i className="fa fa-bars"></i></a>
          <a href="/cart" className="cart-link"><i className="fas fa-shopping-cart"></i> Cart</a>
          
        </div>  
        </div>
      )
  }
}
export default Header;