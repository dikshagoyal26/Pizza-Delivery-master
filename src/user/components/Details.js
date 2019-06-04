import React from 'react';
import sampleData from '../sampledata';
import { connect } from 'react-redux';

class Details extends React.Component {
	
	handleClick = (id) => {
		 this.props.dispatch({	type:'ADD_TO_CART',
								id:id
							})
		 this.props.history.push('/cart');
	}
	render(){
   		let Item = sampleData.find((item) =>{
   			if(item.id === this.props.match.params.id){
   				return item  }
   			})
		return(	
			<div className="mx-5 my-2">
				<button className="btn btn-info mx-3" onClick = {() => this.props.history.go(-1)}><i className="fas fa-arrow-left"></i> Back</button>
				<div className="details-container text-center px-5 pt-0">
					<h1 className="text-center col">{Item.name} {/*Item.id*/}</h1>

					<img alt="" src={Item.imgUrl} />
					<p className="price">Price: Rs.{Item.price}</p>
					<p>Category: {Item.ingredients}</p>
					<p>Ingredients: {Item.ingredients}</p>
					<p>Toppings: {Item.ingredients}</p>
					<p>description: {Item.description}</p>
					<button className="btn btn-info" onClick = {() => this.handleClick(Item.id)}>
						<i className="fas fa-cart-plus"></i> Add to Cart
					</button>
						
				</div>
			</div>
			)
	}
}

export default connect()(Details);