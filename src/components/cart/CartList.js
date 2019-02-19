import React from 'react';
import CartItem from './CartItem';
class CartList extends React.Component{
	render(){
		return(
				<div>
					<p>List of Cart</p>
					<CartItem/>
				</div>
			)
	}

}
export default CartList;