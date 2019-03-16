import React from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux'

class CartList extends React.Component{
	render(){
		 let CartComponents = this.props.items.length ?
				(
					this.props.items.map((item) => {
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

const mapStateToProps = (state)=>{
    return{
    	items:state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(CartList);
