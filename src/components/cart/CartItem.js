import React from 'react';
class CartItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			counter:1,
			total:this.props.price
		}
	}
	render(){
		return(<div className="container-fluid"> 
					<div className="row">
						<div className="col-10 mx-auto col-lg-2">
							<p className="text-uppercase">{this.props.name}</p>
						</div>		
						<div className="col-10 mx-auto col-lg-2">
							<p className="text-uppercase">{this.props.price}</p>
						</div>	
						<div className="col-10 mx-auto col-lg-2">
							<p>Toppings</p>
						</div>	

						<div className="col-10 mx-auto col-lg-2">
							<div className="row ">
								<div className="col">
									<button onClick = {()=> this.setState({
											counter : this.state.counter-1,
											total: (this.state.counter-1)*this.props.price
										})}>
										<i className="fas fa-minus"></i>
									</button>
								</div>	
								<div className="col">
									<p> {this.state.counter} </p>
								</div>	
								<div className="col">
									<button onClick = {()=> this.setState({
										counter : this.state.counter+1,
										total: (this.state.counter+1)*this.props.price
									})}>
										<i className="fas fa-plus"></i>
									</button>
								</div>	
							</div>
						</div>	
						
						<div className="col-10 mx-auto col-lg-2">
							<p className="text-uppercase"><i className="fas fa-trash-alt"></i></p>
						</div>	
						<div className="col-10 mx-auto col-lg-2">
							<p className="text-uppercase">{this.state.total}</p>
						</div>	
					</div>
			</div>		
			)
	}
}
export default CartItem;