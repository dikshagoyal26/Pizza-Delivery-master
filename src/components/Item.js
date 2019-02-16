import React, { Component } from 'react';
class Item extends React.Component{
	render(){
		return(
				<div>
					<div className="item-card">
						<img src={this.props.imgUrl} />
						<p>Price : {this.props.price}</p>
						<p>Ingredients: {this.props.ingredients}</p>
						<button className="btn btn-info">Details</button>
						<button className="btn btn-danger">Buy Now</button>
					</div>	
				</div>
			)
	}
}
export default Item;