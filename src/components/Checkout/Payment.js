import React from 'react';
import PriceDetails from '../cart/PriceDetails';

class Order extends React.Component{
	render(){
		return(
				<div className="mx-5">
					<h5 className="text-uppercase text-center font-weight-bold">Payment</h5>
					{/*<p>Payment mode</p>*/}
					<span className="align-right"><PriceDetails purpose="Order" /></span>
					
				</div>
			)
	}
}

export default Order;