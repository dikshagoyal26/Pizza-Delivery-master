import React from 'react';
import {Link} from 'react-router-dom';
//import Details from './Details';
class Item extends React.Component{
	render(){
		return(
				<div>
					<div className="item-card">
						<img alt="" src={this.props.imgUrl} />
						<h4 className="name">{this.props.name}</h4>
						<p className="price">Rs.{this.props.price}</p>
						<p className="ingredients">Ingredients: {this.props.ingredients}</p>
						<Link to={/details/+this.props.id}><button className="btn btn-info" >Details</button></Link>
						<button className="btn btn-danger">Buy Now</button>
					</div>	
				</div>
			)
	}
}
export default Item;