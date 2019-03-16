import React from 'react';
import Input from '../Input/Input';
import Select from '../Input/Select';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class EditProfile extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			firstname:this.props.profile.firstname,
			lastname:this.props.profile.lastname,
			email:this.props.profile.email,
			phone:this.props.profile.phone,
			gender:this.props.profile.gender,
			birthday:this.props.profile.birthday,

			formErrors: {firstname:'',
						lastname:'',
						email:'',
						phone:''}

		};
		this.onEditProfile = this.onEditProfile.bind(this);
	}


	validate = () => {
		let emailError='';
		let firstnameError='';
		let lastnameError='';
		let phoneError='';

		if(!this.state.firstname){
			firstnameError='Required firstname';
		}

		if(!this.state.lastname){
			lastnameError='Required lastname';
		}

		if(!this.state.email.includes("@")){
			if(!this.state.email) emailError='Required Email'
			else emailError='Invalid Email';
		}

		if(this.state.phone.length!=10){
			if(!this.state.phone){
				phoneError='Required Phone';
			}
			else phoneError='Invalid Phone';
		}
		
		this.setState({formErrors:{ firstname:firstnameError,
									lastname:lastnameError,
									email:emailError,
									phone:phoneError
										}})
		
		if(emailError||phoneError||firstnameError||lastnameError)	return false;
			
		return true;	
	}

	onEditProfile = (e) =>{
		this.setState({ [e.target.name]: e.target.value })
	}

	onSubmit = (e) =>{
		e.preventDefault();
		const isValid= this.validate();
		if(isValid){				
					this.props.dispatch({
						type:'SAVE_PROFILE',
						data:{
							firstname:this.state.firstname,
							lastname:this.state.lastname,
							email:this.state.email,
							phone:this.state.phone,
							gender:this.state.gender,
							birthday:this.state.birthday
						}
					})}
		 this.props.history.push("/dashboard");			
	}

	render(){
		return(
				<div>
					<div className="editform p-3 bg-light">
						<h2 className="text-center text-danger">EDIT PROFILE</h2>
						<form onSubmit={this.onSubmit} className="formGroup">
							
							<Input name="firstname" 
								   type="text" 
								   placeholder="First Name*"
								   title="First Name:"
								   value={this.state.firstname}  
								   handleChange={this.onEditProfile}
								   />

							{this.state.formErrors.firstname ? (<p className="text-danger"> 
								   								<i className="fas fa-exclamation-triangle"> </i>
								   								{this.state.formErrors.firstname}
								   							</p>) : null}	   

							<Input name="lastname" 
								   type="text" 
								   placeholder="Last Name*"
								   title="Last Name:"  
								   value={this.state.lastname}  
								   handleChange={this.onEditProfile} />	   

							{this.state.formErrors.lastname ? (<p className="text-danger"> 
								   								<i className="fas fa-exclamation-triangle"> </i>
								   								{this.state.formErrors.lastname}
								   							</p>) : null}	   

							<Input name="email" 
								   type="email" 
								   placeholder="Email*"
								   title="Email:"  
								   value={this.state.email}  
								   handleChange={this.onEditProfile} />

							{this.state.formErrors.email ? (<p className="text-danger"> 
								   								<i className="fas fa-exclamation-triangle"> </i>
								   								{this.state.formErrors.email}
								   							</p>) : null}	   

							<Input name="phone" 
															   type="number" 
															   placeholder="Phone*"
															   title="Phone:" 
															   value={this.state.phone}  
															   handleChange={this.onEditProfile}  />
							
														{this.state.formErrors.phone ? (<p className="text-danger"> 
															   								<i className="fas fa-exclamation-triangle"> </i>
															   								{this.state.formErrors.phone}
															   							</p>) : null}	   
						    
						    <Select name="gender"
						    		handleChange={this.onEditProfile}
						    		placeholder="Gender"
						    		title="Gender:"
								   	value={this.state.gender}  
						    		options={['Male','Female','Other']}
						    		/>

			     		    <Input name="birthday" 
								   type="date" 
								   placeholder="Birthda*"
								   title="Birthday(Optional):"  
								   value={this.state.birthday}
								   handleChange={this.onEditProfile} />

			     		    <div className="text-center">		     		    		
			     		    	<button type="submit" className="btn btn-danger">Save</button>
							</div>
						</form>
					</div>
				</div>
			)
	}
}
const mapStateToProps = (state) =>{
	return{
		profile : state.pr.profile
		}
}
export default connect(mapStateToProps)(EditProfile);