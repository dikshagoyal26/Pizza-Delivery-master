import React from 'react';
import Input from './Input/Input';
class ChangePassword extends React.Component{
	constructor(props){
		super();
		this.state = {
			oldpassword: '',
			newpassword: '',
			confirmpassword: '',
			formErrors: {oldpassword: '', newpassword: '',confirmpassword:''},
		   	oldpasswordValid: false,
		   	newpasswordValid: false,
		   	confirmpasswordValid: false,
		   	formValid: false
	
		};
		this.onChangePassword = this.onChangePassword.bind(this);
	}
	onChangePassword = (e) => {
			this.setState({ [e.target.name]: e.target.value });
			console.log(e.target.value)
	} 
	onSubmit = (e) =>{
		e.preventDefault();
	}
	render(){
		return(
				<div className="editform bg-light">
					<h2 className="text-center text-danger">CHANGE PASSWORD</h2>
					<form onSubmit={this.onSubmit} className="formGroup">
						<Input  name="oldpassword" 
								type="password" 
								placeholder="Old Password*"
								handleChange={this.onChangePassword}/>

						<Input  name="newpassword" 
								type="password" 
								placeholder="New Password*"
								handleChange={this.onChangePassword}/>

						<Input  name="confirmpassword" 
								type="password" 
								placeholder="Confirm Password*"
								handleChange={this.onChangePassword}/>

						<div className="text-center">
							<a href=" "><button className="btn btn-danger" type="submit">Submit</button></a>
						</div>
					</form>
					
				</div>
			)
	}
}
export default ChangePassword;