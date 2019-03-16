import React from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux'

class CartList extends React.Component{
	render(){
		 let CartComponents = this.props.cartitems.length ?
				(
					this.props.cartitems.map((item) => {
		 			     return (< CartItem key = { item.id }
		 			   		                id = { item.id } 
		 			     	                name= {item.name}
		 			     	                quantity={item.quantity}
		 			     	                price = {item.price}
		 			     	                imgUrl = {item.imgUrl}
		 			     	                ingredients = {item.ingredients}/>
		 			     	      )})
				) : ( <p> YOUR CART IS EMPTY </p> )	
		return(<div>
			{CartComponents}
			<p className="text-right mr-5 font-weight-bold">Total Price: {this.props.total_price}</p>
		   </div>
		  )
	}			
}

const mapStateToProps = (state) =>{
    return{
    	cartitems: state.cr.addedItems,
    	total_price:state.cr.total_price
    }
}

export default  connect(mapStateToProps)(CartList);
