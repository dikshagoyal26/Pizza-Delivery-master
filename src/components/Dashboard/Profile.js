import React from 'react';
import { connect } from 'react-redux';
class Profile extends React.Component{
	render(){
		return(
				<div className="bg-light mx-5 p-3 border rounded-lg">
					<h3 className="text-center">PROFILE</h3>
					<div>
					<h6 className="p-2">First name: {this.props.profile.firstname}</h6>
					<h6 className="p-2">Last name: {this.props.profile.lastname}</h6>
					<h6 className="p-2">Email: {this.props.profile.email}</h6>
					<h6 className="p-2">Phone: {this.props.profile.phone}</h6>
					<h6 className="p-2">Gender: {this.props.profile.gender}</h6>
					<h6 className="p-2">Birthday: {this.props.profile.birthday}</h6>
					</div>
					<a href="/editprofile" style={{color:'white', textDecoration:'none'}}>
						<button className="btn btn-primary">Edit profile <i className="fas fa-user-edit"></i></button>
					</a>
				</div>
			)
	}
}
const mapStateToProps = (state) =>{
	return{
		profile : state.pr.profile
		}
}
export default connect(mapStateToProps)(Profile);