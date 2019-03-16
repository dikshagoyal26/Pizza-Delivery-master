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
		 			     	                price = {item.price}
		 			     	                imgUrl = {item.imgUrl}
		 			     	                ingredients = {item.ingredients}/>
		 			     	      )})
				) : ( <p> YOUR CART IS EMPTY </p> )	
		return(<div>
			{CartComponents}
		   </div>
		  )
	}			
}

const mapStateToProps = (state) =>{
    return{
    	cartitems: state.cr.addedItems
    }
}

export default  connect(mapStateToProps)(CartList);
