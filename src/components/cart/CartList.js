import React from 'react';
import CartItem from './CartItem';
import PriceDetails from './PriceDetails';
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
			{this.props.cartitems.length ? (
				<div>
					<p className="text-right mr-5 font-weight-bold">Sub Total: {this.props.total_price}</p> 
					<div className="col-md-6 m-auto">
						<PriceDetails />
					</div>	
				</div>) : null}

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
