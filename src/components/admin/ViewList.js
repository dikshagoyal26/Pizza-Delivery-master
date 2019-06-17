import React from "react";
import ListItem from "./ListItem";
import { connect } from "react-redux";
import { getAllProducts } from "../../actions/productActions";
import { Link } from "react-router-dom";

class ViewList extends React.Component {
  componentDidMount() {
    this.props.getAllProducts();
  }
  render() {
    let ItemComponents;
    if (this.props.products == null) {
      ItemComponents = <p>Loading...</p>;
    } else {
      if (this.props.products.length > 0) {
        ItemComponents = this.props.products.map(item => {
          return (
            <ListItem
              key={item._id}
              id={item.productid}
              name={item.name}
              ingredients={item.ingredients}
              price={item.price}
              imgUrl="https://api-content.prod.pizzahutaustralia.com.au//umbraco/api/Image/Get2?path=assets/products/menu/Meat-Super-Supreme-Pizza-3250-menu.jpg"
              category={item.category}
              toppings={item.toppings}
              description={item.description}
            />
          );
        });
      } else {
        ItemComponents = <h4>No Products Found</h4>;
      }
    }

    return (
      <div className="menuList py-3">
        <h4>Admin Portal </h4>
        <h2>Menu</h2>
        <Link to="/admin/add">
          <button className="btn btn-primary m-3">Add Product</button>
        </Link>

        <button className="btn btn-primary m-3">Delete All Product</button>

        <div className="row">{ItemComponents}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    products: state.prod_r.products,
    loading: state.prod_r.loading
  };
};
export default connect(
  mapStateToProps,
  { getAllProducts }
)(ViewList);
