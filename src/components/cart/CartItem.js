import React from 'react';
import {connect} from 'react-redux';
class CartItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			counter:this.props.quantity,
			total:this.props.price*this.props.quantity
		}
	}
	onMinus = () =>{
		this.props.dispatch({
			type:'DEC_QUANTITY',
			id:this.props.id
		})
		this.setState({
			counter : this.state.counter-1,
			total: (this.state.counter-1)*this.props.price
		})
		if(this.state.counter<=1){
			this.onDelete()
		}
	}

	onPlus = () =>{
		this.props.dispatch({
			type:'INC_QUANTITY',
			id:this.props.id
		})
		this.setState({
			counter : this.state.counter+1,
			total: (this.state.counter+1)*this.props.price
		})
	}
			
	onDelete = () =>{
		this.props.dispatch({
			type:'DELETE_ITEM',
			id: this.props.id
		})
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
									<button className="btn-primary" onClick = {this.onMinus}>
										<i className="fas fa-minus"></i>
									</button>
								</div>	
								<div className="col">
									<p> {this.state.counter} </p>
								</div>	
								<div className="col">
									<button  className="btn-primary" onClick = {this.onPlus}>
										<i className="fas fa-plus"></i>
									</button>
								</div>	
							</div>
						</div>	
						
						<div className="col-10 mx-auto col-lg-2">
							<p className="text-uppercase" onClick={this.onDelete}><i className="fas fa-trash-alt"></i></p>
						</div>	

						<div className="col-10 mx-auto col-lg-2">
							<p className="text-uppercase">{this.state.total}</p>
						</div>	
					</div>
			</div>		
			)
	}
}

export default connect()(CartItem);