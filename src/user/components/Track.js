import React from 'react';
import { connect } from 'react-redux';
class Track extends React.Component{
	handleClick = () =>{
		console.log(this.props.order_history)
		
	}
	render(){
		return(
				<div className="text-center">
					<h5>Your order id is {this.props.order_id}</h5>
					<button onClick={this.handleClick} className="btn btn-primary">Order History</button>
				</div>
			)
	}
}
const mapStateToProps = (state) =>{
	return({
		order_id: state.cr.order_id,
		order_history: state.cr.order_history
	})
}

export default connect(mapStateToProps)(Track);