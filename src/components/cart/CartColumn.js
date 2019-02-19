import React from 'react';

class CartColumn extends React.Component{

	render(){
		return(
				<div className="container-fluid d-none text-center d-lg-block">
					<div className="row">
					{/*<img src="">*/}
						
						<div className="col-10 mx-auto col-lg-2">
							<h6 className="text-uppercase">Name</h6>
						</div>	
						
						<div className="col-10 mx-auto col-lg-2">
							<h6 className="text-uppercase">Price</h6>
						</div>	
						<div className="col-10 mx-auto col-lg-2">
							<h6 className="text-uppercase">Quantity</h6>
						</div>	
						<div className="col-10 mx-auto col-lg-2">
							<h6 className="text-uppercase">Remove</h6>
						</div>	
						<div className="col-10 mx-auto col-lg-2">
							<h6 className="text-uppercase">Total</h6>
						</div>	
					</div>	
				</div>
			)
	}

}
export default CartColumn;