import React from 'react';
import Profile from './Profile';
class Dashboard extends React.Component{
	render(){
		return(
				<div>
					<h1 className="text-center text-dark p-1">My Dashboard</h1>
					<Profile />
				</div>
			)
	}
}
export default Dashboard;