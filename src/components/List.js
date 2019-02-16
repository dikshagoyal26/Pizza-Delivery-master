import React, { Component } from 'react';
import Item from './Item';

class List extends React.Component {
  render(){
  		let table = ['Harshita', 'Agarwal', 'Manju'];
    return(
      <div className="menuList">
        <h2>Menu</h2>
        <Item price = "100"
        	  ingredients="Lorem, ipsum, dolor, sit, amet,"
        	  imgUrl="https://api-content.prod.pizzahutaustralia.com.au//umbraco/api/Image/Get2?path=assets/products/menu/Meat-Super-Supreme-Pizza-3250-menu.jpg"
        	 />
        <Item price = "200"
            ingredients="Lorem, ipsum, dolor, sit, amet,"
            imgUrl="https://api-content.prod.pizzahutaustralia.com.au//umbraco/api/Image/Get2?path=assets/products/menu/Meat-Super-Supreme-Pizza-3250-menu.jpg"
           />
        <Item price = "300"
            ingredients="Lorem, ipsum, dolor, sit, amet,"
            imgUrl="https://api-content.prod.pizzahutaustralia.com.au//umbraco/api/Image/Get2?path=assets/products/menu/Meat-Super-Supreme-Pizza-3250-menu.jpg"
           />
        <Item price = "400"
            ingredients="Lorem, ipsum, dolor, sit, amet,"
            imgUrl="https://api-content.prod.pizzahutaustralia.com.au//umbraco/api/Image/Get2?path=assets/products/menu/Meat-Super-Supreme-Pizza-3250-menu.jpg"
           />
      </div>
      )
  }
}
export default List;