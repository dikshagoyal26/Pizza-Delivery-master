import React from 'react';
class Profile extends React.Component{
	render(){
		return(
				<div className="bg-light mx-5 p-3 border rounded-lg">
					<h3 className="text-center">PROFILE</h3>
					<div>
					<h6 className="p-2">First name:</h6>
					<h6 className="p-2">Last name:</h6>
					<h6 className="p-2">Email:</h6>
					<h6 className="p-2">Phone:</h6>
					<h6 className="p-2">Gender:</h6>
					<h6 className="p-2">Birthday:</h6>

					</div>
					<a href="/editprofile" style={{color:'white', textDecoration:'none'}}>
						<button className="btn btn-primary">Edit profile <i class="fas fa-user-edit"></i></button>
					</a>
				</div>
			)
	}
}
export default Profile;