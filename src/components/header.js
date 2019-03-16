import React from 'react';
class Header extends React.Component {
  render(){
    return(
        <div>
        <header className="App-header">
          <nav className="navbar navbar-expand-md navbar-dark navbar-default">
            <a className="navbar-brand" href="/"> Logo </a>
            
            <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"> 
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarCollapse" >
              <ul className="navbar-nav mr-auto"> 
                <li className="nav-item active">   
                  <a href="/" className="nav-link" >Menu</a>
                </li>
                <li className="nav-item">   
                  <a href="/track" className="nav-link">Track Order</a>
                </li>
                <li className="nav-item">   
                  <a href="/feedback" className="nav-link">Write Feedback</a>
                </li>
                <li className="nav-item">   
                  <a href="/cart" className="nav-link"><i className="fas fa-shopping-cart"></i> Cart</a>
                </li>
              </ul>
             
              <div className="dropdown">
                
                <a className="dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false" >
                <i className="fas fa-user-circle fa-2x"></i></a>
              
                <div style={{width:'100%'}} className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  <a href="/dashboard" className="dropdown-item">My Dashboard</a>
                  <a href="/changepassword" className="dropdown-item">Change Password</a>
                  <div className="dropdown-divider"></div>
                  <a href="/" className="dropdown-item">Logout</a>
                </div> 

              </div>
          </div>
        </nav>
        </header>
        </div>
      )
  }
}
export default Header;