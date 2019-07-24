import React from 'react';
import PriceDetails from '../cart/PriceDetails';
import Input from '../Input/Input';
import Select from '../Input/Select';
import { connect } from 'react-redux'; 
import { addOrder } from "../../../actions/orderActions";
import {Link } from 'react-router-dom';

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
	}

	onPayment = (e) =>	{
		this.props.addOrder(this.state.paymentmode,this.props.history);
	}

	render(){
		return(
			<div className="payment container-fluid p-5">
				<h5 className="text-uppercase text-center font-weight-bold">Payment</h5>				
				<div className="row">	
					<div className="col-3">
						<ul className="nav flex-column mr-auto text-center"> 
			                <li className="nav-item">   
			                  <span className="nav-link " href="#" name='card' onClick={this.handleClick}>CREDIT/DEBIT CARD </span>
			                </li>
			                <li className="nav-item active">   
			                  <span className="nav-link " href="#" name='ondelivey' onClick={this.handleClick}>CASH/CARD ON DELIVERY</span>
			                </li>
			                <li className="nav-item">   
			                  <span className="nav-link" href="#" name='phonepay' onClick={this.handleClick}>PHONEPAY</span>
			                </li>
			                <li className="nav-item">   
			                  <span className="nav-link" href="#" name='paytm' onClick={this.handleClick}>PAYTM</span>
			                </li>
			                <li className="nav-item">   
			                  <span className="nav-link" href="#" name='netbanking' onClick={this.handleClick}>NET BANKING</span>
			                </li>
			              </ul>
			          
					</div>
					<div className="col-6">
						{(() =>
							{ switch(this.state.paymentmode){
								case 'card': return(
												<div className="paymentmode">
													<h5 className="text-center mt-1">CREDIT/DEBIT CARD</h5>
													<div className="col">
												        <form >
											                <div className="row">
													            <div className="col-12">	
													            	<Input 
													            		title="CARD NUMBER"
													                	type="text"
													                    placeholder="Valid Card Number"
													                />
													            </div>    
												            </div>
												             <div className="row">
													            <div className="col-12">	
													            	<Input 
													            		title="NAME ON CARD"
													                	type="text"
													                    placeholder="Name on Card"
													                />
													            </div>    
												            </div>     
											                	<div className="row">
													            <div className ="col">
													            	<Select name="exp_month"
													            			title="EXPIRY DATE"
													            			placeholder="Month"
																    		options={['01','02','03','04','05','06','07','08','09','10','11','12']}
																    		/>
													            </div>    
													            <div className ="col">
																    <Select name="exp_year"
																    		placeholder="Year"
																    		options={['2019','2020','2021','2022','2023','2024','2025','2026','2027','2028','2029','2030','2031','2032','2033','2034','2035','2036','2037','2038','2039','2040']}
																    		/>
															    </div>     
															</div>
															<div className="row"> 
																<div className="col-6">
																    <Input 	
																    	title="CVV"
																        type="password"
																        name="CVV"
																        placeholder="CVV"
																        maxlength="3"
																        minlength="3" 
																        pattern="[0-9]"
																    />
																</div>
																<div className="col-6 mt-3">
																    <span style={{fontSize:'12px'}}>Last three digits printed on the back of the card</span>
																</div>
															</div>	     
														</form>
														<div className="text-center my-3">
																<button onClick={this.onPayment} className="btn btn-primary btn-block btn-lg">Confirm Payment</button>
														</div>	
													</div>
												</div>)
								case 'ondelivey': return(<div className="paymentmode">
															<h5 className="text-center mt-1">CARD/CASH ON DELIVERY</h5>
															<div className="text-center my-3">
																	<button onClick={this.onPayment} className="btn btn-primary btn-block btn-lg">Confirm Order</button>
															</div>	
														</div>)
								case 'phonepay': return(<div className="paymentmode">
																<h5 className="text-center mt-1">PHONEPAY</h5>
																<div className="text-center my-3">
																		<button onClick={this.onPayment} className="btn btn-primary btn-block btn-lg">Confirm Order</button>
																</div>
															</div>)
								case 'paytm': return(<div className="paymentmode">
																<h5 className="text-center mt-1">PAYTM</h5>
																<div className="text-center my-3">
																		<button onClick={this.onPayment} className="btn btn-primary btn-block btn-lg">Confirm Order</button>
																</div>
															</div>)
								case 'netbanking': return(<div className="paymentmode">
																<h5 className="text-center mt-1">NET BANKING</h5>
																<div className="text-center my-3">
																	<Link to= "/track">
																		<button onClick={this.onPayment} className="btn btn-primary btn-block btn-lg">Confirm Order</button>
																		</Link>
																		
																</div>
															</div>)
															
														default:
														
														}

							})
							
							()
						}
						
					</div>

					<div className="col-3">
						<PriceDetails 
							purpose="payment"
						/>
					</div>
				</div>	
			</div>
			)
	}
}

export default connect(null, {addOrder})(Order);