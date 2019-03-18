import React from 'react';
import PriceDetails from '../cart/PriceDetails';
import Input from '../Input/Input';

class Order extends React.Component{
	constructor(){
		super();
		this.state={
			paymentmode:'card'
		}
	}
	handleClick = (e) =>{
		this.setState({
				paymentmode: e.target.name
			})
		console.log(this.state.paymentmode)
	}
	render(){
		return(
			<div className="payment container-fluid px-5">
				<h5 className="text-uppercase text-center font-weight-bold">Payment</h5>				
				<div className="row">	
					<div className="col-3">
						<ul className="nav flex-column mr-auto text-center"> 
			                <li className="nav-item">   
			                  <a className="nav-link " href="#" name='card' onClick={this.handleClick}>CREDIT/DEBIT CARD </a>
			                </li>
			                <li className="nav-item active">   
			                  <a className="nav-link " href="#" name='ondelivey' onClick={this.handleClick}>CASH/CARD ON DELIVERY</a>
			                </li>
			                <li className="nav-item">   
			                  <a className="nav-link" href="#" name='phonepay' onClick={this.handleClick}>PHONEPAY</a>
			                </li>
			                <li className="nav-item">   
			                  <a className="nav-link" href="#" name='paytm' onClick={this.handleClick}>PAYTM</a>
			                </li>
			                <li className="nav-item">   
			                  <a className="nav-link" href="#" name='netbanking' onClick={this.handleClick}>NET BANKING</a>
			                </li>
			              </ul>
			          
					</div>
					<div className="col-9">
						{(() =>
							{ switch(this.state.paymentmode){
								case 'card': return(<div className="paymentmode"><p>Card</p>
					</div>)
								case 'ondelivey': return(<div className="paymentmode"><p>Ondelivery</p></div>)
								case 'phonepay': return(<div className="paymentmode"><p>phonepay</p></div>)
								case 'paytm': return(<div className="paymentmode"><p>Paytm</p></div>)
								case 'netbanking': return(<div className="paymentmode"><p>netbanking</p></div>)}

							})()
						}
						<div className="text-center">
							<a href="/track">
								<button className="btn btn-primary">Confirm Payment</button>
							</a>
						</div>	
					</div>

					
				</div>		
			</div>
			)
	}
}

export default Order;