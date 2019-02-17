import React from 'react';
import Item from './Item';
import sampledata from '../sampledata';

class List extends React.Component {
  render(){
   let ItemComponents = sampledata.map((item) => {
      return <Item  key = { item.id } 
                    name= {item.name} 
                    ingredients={item.ingredients} 
                    price = {item.price}
                    imgUrl = {item.imgUrl}/>
    })
    return(
      <div className="menuList">
        <h2>Menu</h2>
        {ItemComponents}
      </div>
      )
  }
}
export default List;