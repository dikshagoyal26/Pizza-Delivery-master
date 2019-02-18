import React from 'react';
import sampledata from '../sampledata';

class Details extends React.Component {
	render(){
   		let Item = sampledata.find((item) =>{
   			if(item.id == this.props.match.params.id){
   				return item }
   			})
		return(	
			<div>
				<h1 className="name">{Item.name} {Item.id}</h1>
				<div className="details-container">
					<img alt="" src={Item.imgUrl} />
					<div className="para">
						<p className="ingredients">Ingredients: {Item.ingredients}</p>
						<p>{Item.description}</p>
						<p className="price">Price: Rs.{Item.price}</p>
						<button className="btn btn-info">Order Now</button>
					</div>
					</div>
			</div>
			)
	}
}
export default Details;