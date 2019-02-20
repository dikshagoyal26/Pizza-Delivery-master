import React from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux'

class CartList extends React.Component{
	render(){
		return (
			   <div>
				   console.log("abcd"+this.props.items)
				</div>
			)
	}			
}

const mapStateToProps = (state)=>{
    return{
    	items: state.addedItems
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(CartList);