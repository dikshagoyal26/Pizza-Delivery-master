import React from "react";
import Item from "./Item";
import { connect } from "react-redux";
import { getAllProducts } from "../../actions/productActions";
import Spinner from "../Input/Spinner";

class List extends React.Component {
  componentDidMount() {
    this.props.getAllProducts();
  }
  render() {
    let ItemComponents;
    if (this.props.products == null || this.props.loading) {
      ItemComponents = <Spinner />;
    } else {
      if (this.props.products.length > 0) {
        ItemComponents = this.props.products.map(item => {
          return (
            <Item
              key={item._id}
              id={item.productid}
              name={item.name}
              ingredients={item.ingredients}
              price={item.price}
              imgUrl="https://api-content.prod.pizzahutaustralia.com.au//umbraco/api/Image/Get2?path=assets/products/menu/Meat-Super-Supreme-Pizza-3250-menu.jpg"
              category={item.category}
              toppings={item.toppings}
            />
          );
        });
      } else {
        ItemComponents = <h4>No Products Found</h4>;
      }
    }

    return (
      <div className="menuList">
        <h2>Menu</h2>
        <div className="row">{ItemComponents}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.cr.items,
    products: state.prod_r.products,
    loading: state.prod_r.loading
  };
};
export default connect(
  mapStateToProps,
  { getAllProducts }
)(List);
