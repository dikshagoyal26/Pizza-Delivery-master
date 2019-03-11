import React from 'react';
import Input from '../Input/Input';
import Select from '../Input/Select'

class EditProfile extends React.Component{
	constructor(props){
		super();
		this.state = {
			firstname:'',
			lastname:'',
			email:'',
			phone:'',
			gender:'',
			birthday:'',
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
		const isValid= this.validate();
		if(isValid){
			console.log("Valid")
			//Do the work ie.Submit
		}
		e.preventDefault();
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
								   handleChange={this.onEditProfile} />	   

							{this.state.formErrors.lastname ? (<p className="text-danger"> 
								   								<i className="fas fa-exclamation-triangle"> </i>
								   								{this.state.formErrors.lastname}
								   							</p>) : null}	   

							<Input name="email" 
								   type="email" 
								   placeholder="Email*"
								   title="Email:"  
								   handleChange={this.onEditProfile} />

							{this.state.formErrors.email ? (<p className="text-danger"> 
								   								<i className="fas fa-exclamation-triangle"> </i>
								   								{this.state.formErrors.email}
								   							</p>) : null}	   

							<Input name="phone" 
								   type="number" 
								   placeholder="Phone*"
								   title="Phone:" 
								   handleChange={this.onEditProfile}  />

							{this.state.formErrors.phone ? (<p className="text-danger"> 
								   								<i className="fas fa-exclamation-triangle"> </i>
								   								{this.state.formErrors.phone}
								   							</p>) : null}	   
						    
						    <Select name="gender"
						    		handleChange={this.onEditProfile}
						    		placeholder="Gender"
						    		title="Gender:"
						    		options={['Male','Female','Other']}
						    		/>

			     		    <Input name="birth" 
								   type="date" 
								   placeholder="Birthda*"
								   title="Birthday(Optional):"  
								   handleChange={this.onEditProfile} />

			     		    <div className="text-center">		     		    		
			     		    	<a href="/dashboard"><button type="submit" className="btn btn-danger">Save</button>
								</a>
							</div>
						</form>
					</div>
				</div>
			)
	}
}
export default EditProfile;