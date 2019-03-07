import React from 'react';
class EditProfile extends React.Component{
	render(){
		return(
				<div>
					<p>EditProfile</p>
					<button className="btn btn-success"><a href="/dashboard" style={{color:'white', textDecoration:'none'}}>Save</a></button>

				</div>
			)
	}
}
export default EditProfile;