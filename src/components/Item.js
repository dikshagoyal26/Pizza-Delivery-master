import React, { Component } from 'react';
class Item extends React.Component{
	render(){
		return(
				<div>
					<div className="item-card">
						<img src={this.props.imgUrl} />
						<h4 className="name">{this.props.name}</h4>
						<p className="price">Rs.{this.props.price}</p>
						<p className="ingredients">Ingredients: {this.props.ingredients}</p>
						<button className="btn btn-info">Details</button>
						<button className="btn btn-danger">Buy Now</button>
					</div>	
				</div>
			)
	}
}
export default Item;