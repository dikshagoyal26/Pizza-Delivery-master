import React from 'react';
import Profile from './Dashboard/Profile'
import {connect} from 'react-redux';
class Order extends React.Component{
	render(){
		return(
				<div>
					<h5 className="text-uppercase text-center font-weight-bold">Order</h5>
					<p>Order amount <i className="fas fa-rupee-sign"></i>{parseFloat(this.props.order_price)}</p>
					
				</div>
			)
	}
}
const mapStateToProps = (state) =>{
	return{
		order_price:state.cr.order_price
	}
}
export default connect(mapStateToProps)(Order);