import React from 'react';
import CartColumn from './CartColumn';
import CartList from './CartList';


class Cart extends React.Component{

	render(){
		return(
				<div className="container-fluid text-center">
					<h1>Your Cart</h1>
					{/*<h4>Your Cart is Empty</h4>*/}
					<CartColumn />
					<CartList />
				</div>
			)
	}
}
export default Cart;