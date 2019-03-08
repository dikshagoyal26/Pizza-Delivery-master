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
			dob:''
		};
		this.onEditProfile = this.onEditProfile.bind(this);
	}
	onEditProfile = (e) =>{
		this.setState({ [e.target.name]: e.target.value })
		console.log(e.target.name + e.target.value);
	}
	onSubmit = (e) =>{
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

							<Input name="lastname" 
								   type="text" 
								   placeholder="Last Name*"
								   title="Last Name:"  
								   handleChange={this.onEditProfile} />	   

							<Input name="email" 
								   type="email" 
								   placeholder="Email*"
								   title="Email:"  
								   handleChange={this.onEditProfile} />

							<Input name="phone" 
								   type="number" 
								   placeholder="Phone*"
								   title="Phone:" 
								   handleChange={this.onEditProfile}  />
						    
						    <Select name="gender"
						    		handleChange={this.onEditProfile}
						    		placeholder="Gender"
						    		options={['Male','Female','Other']}
						    		/>

			     		    <Input name="dob" 
								   type="date" 
								   placeholder="Date of birth*"
								   title="Date of birth:"  
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
export default EditProfile;