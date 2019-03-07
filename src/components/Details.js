import React from 'react';
import sampledata from '../sampledata';
import { connect } from 'react-redux';

class Details extends React.Component {
	render(){
   		let Item = sampledata.find((item) =>{
   			if(item.id == this.props.match.params.id){
   				return item }
   			})
		return(	
			<div>
				<h1 className="name">{Item.name} {Item.id}{/* {this.props.count}*/}</h1>
				<div className="details-container">
					<img alt="" src={Item.imgUrl} />
						<p className="price">Price: Rs.{Item.price}</p>
						<p>Category: {Item.ingredients}</p>
						<p>Ingredients: {Item.ingredients}</p>
						<p>Toppings: {Item.ingredients}</p>
						<p>description: {Item.description}</p>
						<button className="btn btn-info" onClick={(e) => this.props.addToCart(Item.id,e)}><a href="/cart" style={{color:'white', textDecoration:'none'}}>Add to Cart</a></button>
						<button className="btn btn-danger"><a href="/order" style={{color:'white'}}>Order Now</a></button>
				</div>
			</div>
			)
	}
}

const mapStateToProps = ( state ) =>{
	return {
		count : state.count
	}
}

const mapDispatchToProps= (dispatch)=>{
    return{
        addToCart: (id) => dispatch({
								        type: 'ADD_TO_CART',
								        id
								    })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);