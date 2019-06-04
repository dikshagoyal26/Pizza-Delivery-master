import React from 'react';
import Profile from './Profile';
class Dashboard extends React.Component{
	render(){
		return(
				<div>
					<h1 className="text-center text-dark p-1">My Dashboard</h1>
					<div className="col-md-6 m-auto">
						<Profile />
					</div>	
				</div>
			)
	}
}
export default Dashboard;