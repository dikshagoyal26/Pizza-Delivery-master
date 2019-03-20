import React from 'react';
import Item from './Item';
import { connect } from 'react-redux';

class List extends React.Component {
  render(){
   let ItemComponents = this.props.items.map((item) => {
      return <Item  key = { item.id }
                    id = { item.id } 
                    name= {item.name} 
                    ingredients={item.ingredients} 
                    price = {item.price}
                    imgUrl = {item.imgUrl}/>
    })
    return(
      <div className="menuList">
        <h2>Menu</h2>
        <div className="row">
          {ItemComponents}
        </div>  
      </div>
      )
  }
}
const mapStateToProps = (state) =>{
  return{
    items : state.cr.items
  }
}
export default connect(mapStateToProps)(List);