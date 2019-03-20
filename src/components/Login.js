import React from 'react';
import Item from './Item';
import { connect } from 'react-redux';

class List extends React.Component {
  render(){
    return(
      <div className="col-12 p-0 login_page">    
        <header className="App-header">
          <nav className="navbar navbar-dark mx-5">
            <a className="navbar-brand" href="/"> Logo </a>
           <a >  <button data-toggle="modal" data-target="#modalLRForm" className="btn btn-danger">Login</button></a>
          </nav>
        </header>
        <img src="https://images6.alphacoders.com/412/412086.jpg"></img>
        <div className="modal fade" id="modalLRForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div className="modal-dialog cascading-modal" role="document">
                    <div className="modal-content">
        
                      <div className="modal-c-tabs">
        
                        <ul className="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#panel7" role="tab"><i className="fas fa-user mr-1"></i>
                              Login</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#panel8" role="tab"><i className="fas fa-user-plus mr-1"></i>
                              Register</a>
                          </li>
                        </ul>
        
                        <div className="tab-content">
                          <div className="tab-pane fade in show active" id="panel7" role="tabpanel">
        
                            <div className="modal-body mb-1">
                              <div className="md-form form-sm mb-5">
                                <i className="fas fa-envelope prefix"></i>
                                <input type="email" id="modalLRInput10" className="form-control form-control-sm validate" />
                              </div>
        
                              <div className="md-form form-sm mb-4">
                                <i className="fas fa-lock prefix"></i>
                                <input type="password" id="modalLRInput11" className="form-control form-control-sm validate" />
                              </div>
                              <div className="text-center mt-2">

                                <button className="btn btn-danger"  onClick={() =>this.props.dispatch({type:'LOGIN'})}  >Log in <i className="fas fa-sign-in ml-1"></i></button>
                              </div>
                            </div>
                            <div className="modal-footer">
                              <div className="options text-center text-md-right mt-1">
                                <p>Not a member? <a href="#" className="blue-text">Sign Up</a></p>
                                <p>Forgot <a href="#" className="blue-text">Password?</a></p>
                              </div>
                              <button type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                            </div>
        
                          </div>
        
                          <div className="tab-pane fade" id="panel8" role="tabpanel">
        
                            <div className="modal-body">
                              <div className="md-form form-sm mb-5">
                                <i className="fas fa-envelope prefix"></i>
                                <input type="email" id="modalLRInput12" className="form-control form-control-sm validate" />
                              </div>
        
                              <div className="md-form form-sm mb-5">
                                <i className="fas fa-lock prefix"></i>
                                <input type="password" id="modalLRInput13" className="form-control form-control-sm validate" />
                              </div>
        
                              <div className="md-form form-sm mb-4">
                                <i className="fas fa-lock prefix"></i>
                                <input type="password" id="modalLRInput14" className="form-control form-control-sm validate" />
                              </div>
        
                              <div className="text-center form-sm mt-2">
                                <button className="btn btn-info">Sign up <i className="fas fa-sign-in ml-1"></i></button>
                              </div>
        
                            </div>
                            <div className="modal-footer">
                              <div className="options text-right">
                                <p className="pt-1">Already have an account? <a href="#" className="blue-text">Log In</a></p>
                              </div>
                              <button type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                            </div>
                          </div>
                        </div>
        
                      </div>
                    </div>
                  </div>
                </div>
      </div>
      )
  }
}

export default connect()(List);