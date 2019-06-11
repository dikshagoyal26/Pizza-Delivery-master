import React from 'react';
import Navbar from './Navbar';
import Login from './Login';
import { connect } from 'react-redux';

class User extends React.Component{

	render(){
		return(
				<div >
        {this.props.login === true? (<Navbar/>):(<Login/>)}

				</div>
			)
	}
}
const mapStateToProps = (state) =>{
  return({
    login: state.cr.login
  })
}

export default connect(mapStateToProps)(User);