import React from 'react';
class Profile extends React.Component{
	render(){
		return(
				<div>
					
					<button className="btn btn-primary"><a href="/editprofile" style={{color:'white', textDecoration:'none'}}>Edit Profile</a></button>
				</div>
			)
	}
}
export default Profile;