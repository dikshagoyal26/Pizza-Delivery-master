import React from 'react';
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import Input from './Input/Input';

class List extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      display_form:"login",
      email:'',
      password: '',
      confirmpassword: '',
      formErrors: {
          email:'',
          password:'',
          confirmpassword:'',
      }
    }
  }
  handleClick = () =>{
    this.state.display_form == 'login' ? this.setState({display_form:'signup',email:'',password:'',confirmpassword:'',formErrors:{email:'',password:'',confirmpassword:''}}) : this.setState({display_form:'login',email:'',password:'',confirmpassword:'',formErrors:{email:'',password:'',confirmpassword:''}})
  }
  handleChange =(e) =>{
    console.log(e.target.name +"="+e.target.value)
    this.setState({[e.target.name]:e.target.value})
  }
  
  onSubmitForm = (e) =>{
    e.preventDefault();
    let isValid=true;
    //let isValid = this.validate();
    console.log(JSON.stringify(this.state))
    if(isValid){
      console.log("valid form");
      this.state.display_form == 'login' ? this.props.dispatch({type:'LOGIN'}) : this.props.dispatch({type:'SIGNUP'})
      this.props.history.push("/menu");
      window.location.reload(); 
      console.log(this.props);

    }
  }

  validate = () =>{ 
    let emailError='';
    let passwordError='';
    let confirm_password_Error='';
    if(!this.state.email){
      emailError='Required email';
    }
    if(this.state.password.length<6){
      if(!this.state.password) passwordError="Required Password";
      else passwordError="Min length of password should be 6"
    }
    if(this.state.password!=this.state.confirmpassword){
      if(!this.state.confirmpassword) confirm_password_Error= "Please confirm the password";
      else confirm_password_Error="Password dont match!";
    }
    this.setState({formErrors:{
      email:emailError,
      password:passwordError,
      confirmpassword:confirm_password_Error
    }})
   if(this.state.display_form == 'login' && (emailError || passwordError)) return false  
   else if(this.state.display_form == 'signup' && (emailError || passwordError || confirm_password_Error)) return false;
   else return true;  
  }
  render(){
    return(
      <div className="col-12 p-0 login_page">    
        <header className="App-header">
          <nav className="navbar navbar-dark mx-5">
            <a className="navbar-brand" href="/"> Logo </a>
           <a>  <button data-toggle="modal" data-target="#LoginForm" className="btn btn-danger">Login</button></a>
          </nav>
        </header>
        <img src="https://images6.alphacoders.com/412/412086.jpg"></img>
        <div className="modal fade" id="LoginForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                  <div className="modal-dialog " role="document">
                    <div className="modal-content"> 
                        { this.state.display_form == "login" ? ( 
                        <div className="login">
                          <div className="modal-body">
                                                                      <h4 className="text-center">Log in</h4>
                                                                    <form  onSubmit={this.onSubmitForm}>  
                                                                      <div className="form-group">   
                                                                        <div className="md-form form-sm mb-3">
                                                                          <Input 
                                                                            type="email"
                                                                            name="email"
                                                                            placeholder="Enter your Email"
                                                                            title=<i className="fas fa-envelope"></i>
                                                                            handleChange={this.handleChange}
                                                                            value={this.state.email}
                                                                          />
                                                                          {this.state.formErrors.email ? (<p className="text-danger"> 
                                                                                                                <i className="fas fa-exclamation-triangle"> </i>
                                                                                                                {this.state.formErrors.email}
                                                                                                                </p>) : null}    

                                                                        </div>
                                                                        <div className="md-form form-sm mb-3">
                                                                           <Input 
                                                                            type="password"
                                                                            name="password"
                                                                            placeholder="Enter your password"
                                                                            title=<i className="fas fa-lock prefix"></i>
                                                                            handleChange={this.handleChange}
                                                                          />
                                                                          {this.state.formErrors.password ? (<p className="text-danger"> 
                                                                                                                <i className="fas fa-exclamation-triangle"> </i>
                                                                                                                {this.state.formErrors.password}
                                                                                                                </p>) : null}
                                                                        </div>
                                                                      </div>
                                                                      <div className="text-center">
                                                                         <button className="btn btn-danger" type="submit" >Log in <i className="fas fa-sign-in ml-1"></i></button>
                                                                      </div>
                                                                    </form>
                                                                    </div>
                                                                    
                                                                    <div className="modal-footer">
                                                                      <div >
                                                                        <p>Not a member? <a href="#signup" className="blue-text" onClick={this.handleClick}>Sign Up</a></p>
                                                                        <p>Forgot <a href="#" className="blue-text">Password?</a></p>
                                                                      </div>
                                                                      <button type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                                                                    </div>
                                                                  </div> ) :
                                                                    ( <div className="signup">
                                                                        <div className="modal-body">
                                                                          <h4 className="text-center">Sign up</h4>
                                                                        <form  onSubmit={this.onSubmitForm}>  
                                                                          <div className="md-form form-sm mb-3">
                                                                            <Input 
                                                                                type="email"
                                                                                name="email"
                                                                                placeholder="Enter a valid Email"
                                                                                title=<i className="fas fa-envelope"></i>
                                                                                handleChange={this.handleChange}
                                                                            />
                                                                            {this.state.formErrors.email ? (<p className="text-danger"> 
                                                                                                                <i className="fas fa-exclamation-triangle"> </i>
                                                                                                                {this.state.formErrors.email}
                                                                                                                </p>) : null}
                                                                          </div>
                                                                          <div className="md-form form-sm mb-3">
                                                                            <Input 
                                                                                type="password"
                                                                                name="password"
                                                                                placeholder="Enter Password"
                                                                                title=<i className="fas fa-lock prefix"></i>
                                                                                handleChange={this.handleChange}
                                                                              />
                                                                            {this.state.formErrors.password ? (<p className="text-danger"> 
                                                                                                                <i className="fas fa-exclamation-triangle"> </i>
                                                                                                                {this.state.formErrors.password}
                                                                                                                </p>) : null}  
                                                                          </div>
                                                                          <div className="md-form form-sm mb-3">
                                                                            <Input 
                                                                                type="password"
                                                                                name="confirmpassword"
                                                                                placeholder="Confirm Password"
                                                                                title=<i className="fas fa-lock prefix"></i>
                                                                                handleChange={this.handleChange}
                                                                            />
                                                                            {this.state.formErrors.confirmpassword ? (<p className="text-danger"> 
                                                                                                                <i className="fas fa-exclamation-triangle"> </i>
                                                                                                                {this.state.formErrors.confirmpassword}
                                                                                                                </p>) : null}
                                                                          </div>
                                                                          <div className="text-center form-sm mt-2">
                                                                            <button className="btn btn-info">Sign up <i className="fas fa-sign-in ml-1"></i></button>
                                                                          </div>
                                                                        </form>  
                                                                        </div>
                                                                        <div className="modal-footer">
                                                                          <div className="options text-right">
                                                                            <p className="pt-1">Already have an account? <a onClick={this.handleClick} href="#login" className="blue-text">Log In</a></p>
                                                                          </div>
                                                                          <button type="button" className="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
                                                                        </div>
                                                                      </div>) } 
                    </div>
                  </div>
                </div>
      </div>
      )
  }
}

export default withRouter(connect()(List));