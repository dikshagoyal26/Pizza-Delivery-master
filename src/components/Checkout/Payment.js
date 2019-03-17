import React from 'react';
import PriceDetails from '../cart/PriceDetails';

class Order extends React.Component{
	render(){
		return(
				<div className="mx-5">
					<h5 className="text-uppercase text-center font-weight-bold">Payment</h5>
					<div className="align-left my-5">
						<p>Payment mode</p>
						<ul className="navbar-nav mr-auto"> 
			                <li className="nav-item ">   
			                  <a className="nav-link" >CREDIT/DEBIT CARD</a>
			                </li>
			                <li className="nav-item">   
			                  <a className="nav-link">CASH/CARD ON DELIVERY</a>
			                </li>
			                <li className="nav-item">   
			                  <a className="nav-link">PHONEPAY</a>
			                </li>
			                <li className="nav-item">   
			                  <a className="nav-link">NET BANKING</a>
			                </li>
			              </ul>
					</div>
					<div className="align-right"><PriceDetails purpose="Order" /></div>
					
				</div>
			)
	}
}

export default Order;