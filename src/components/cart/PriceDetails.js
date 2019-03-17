import React from 'react';
import { connect } from 'react-redux'

class PriceDetails extends React.Component{
	handleClick=()=>{
		this.props.dispatch({
			type:'ORDER_TOTAL_PRICE',
			price: parseFloat( this.props.total_price
							   - this.props.total_price*0.2
							   + this.props.total_price*0.12
							   + 100  ).toFixed(2)
		})
	}
	render(){
		return(<div className="cart_price_details bg-light rounded-lg">
					<h6 className="text-center">PRICE DETAILS</h6>
					<p>Total MRP:  <span className="align-right"> {parseFloat(this.props.total_price).toFixed(2)}</span> </p>
					<p>Discount(20%): <span className="align-right"> -{parseFloat(this.props.total_price*0.2).toFixed(2)}</span> </p>	
					<p>Tax(12%):<span className="align-right"> +{parseFloat(this.props.total_price*0.12).toFixed(2)}</span></p>	
					<p>Delivery Charges: <span className="align-right"> +{parseFloat(100).toFixed(2)}</span></p>	
					<p>Total: <span className="align-right">
						<i className="fas fa-rupee-sign"></i>
						{ parseFloat(  this.props.total_price
								   	 - this.props.total_price*0.2
								   	 + this.props.total_price*0.12
								   	 + 100  ).toFixed(2)} </span></p>	
					
					{ this.props.purpose ? 

						(<div className="text-center">
						 	<a href="/payment">
						 		<button className="btn btn-primary">Continue Order</button>
						 	</a>
						 </div>) : 

						(<div className="text-center">
						 	<a href="/order">
						 		<button className="btn btn-primary">Order</button>
						 	</a>
						 </div>)
					}	 
					

		   		</div>
		  )
	}			
}

const mapStateToProps = (state) =>{
    return{
    	total_price:state.cr.total_price
    }
}

export default  connect(mapStateToProps)(PriceDetails);