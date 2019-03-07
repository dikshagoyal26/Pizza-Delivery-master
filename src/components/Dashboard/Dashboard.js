import React from 'react';
import Profile from './Profile';
class Dashboard extends React.Component{
	render(){
		return(
				<div>
					<p>Dashboard</p>
					<Profile />
				</div>
			)
	}
}
export default Dashboard;