import React from 'react';
import {Link} from 'react-router-dom';
import {Redirect} from 'react-router';
class Item extends React.Component{
	getDetails = () =>{
			return <Redirect to='/details' />
		}
	render(){
		return(
				<div>
					<div className="item-card">
						<img alt="" src={this.props.imgUrl} />
						<h4 className="name">{this.props.name}</h4>
						<p className="price">Rs.{this.props.price}</p>
						<p className="ingredients">Ingredients: {this.props.ingredients}</p>
						<button className="btn btn-info"><Link to={/details/+this.props.id}>Details</Link></button>
						<button className="btn btn-danger">Buy Now</button>
					</div>	
				</div>
			)
	}
}
export default Item;