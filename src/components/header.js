import React from 'react';

class Header extends React.Component {
  constructor(){
      super()
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
          <a href="/list">Menu</a>
          <a href=" ">Cart</a>
          <a href=" ">Track</a>
          <a href=" ">Feedback</a>
          <a href=" ">Change Password</a> 
          <a className ="icon" onClick = {this.handleClick}><i className="fa fa-bars"></i></a>
        </div>  
        </div>
      )
  }
}
export default Header;