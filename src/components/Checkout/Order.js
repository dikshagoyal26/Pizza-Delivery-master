import React from 'react';
import Address from './Address';
import Profile from '../Dashboard/Profile'
import PriceDetails from '../cart/PriceDetails';
import {connect} from 'react-redux';
class Order extends React.Component{
	render(){
		return(
				<div className="mx-5">
					<h5 className="text-uppercase text-center font-weight-bold">Order</h5>
						<span className="align-left mr-5"><Address /></span>
						<span className="align-right"><PriceDetails purpose="Order" />
							<div className="text-center">
						 	<a href="/checkout/payment">
						 		<button className="btn btn-primary">Continue Order</button>
						 	</a>
						 </div></span>
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