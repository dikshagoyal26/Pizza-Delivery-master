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
   			if(item.id == this.props.match.params.id){
   				return item }
   			})
		return(	
			<div>
				<h1 className="name">{Item.name} {Item.id}</h1>
				<div className="details-container">
					<img alt="" src={Item.imgUrl} />
						<p className="price">Price: Rs.{Item.price}</p>
						<p>Category: {Item.ingredients}</p>
						<p>Ingredients: {Item.ingredients}</p>
						<p>Toppings: {Item.ingredients}</p>
						<p>description: {Item.description}</p>
						<button className="btn btn-info" onClick = {() => this.handleClick(Item.id)}>
							Add to Cart
						</button>
						
						<a href="/order" style={{color:'white'}}><button className="btn btn-danger">Order Now</button></a>
				</div>
			</div>
			)
	}
}

export default connect()(Details);