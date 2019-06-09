import React from "react";
import sampleData from "../../sampledata";
import { connect } from "react-redux";
import { getProductByID } from "../../actions/productActions";

class Details extends React.Component {
  componentDidMount() {
    this.props.getProductByID(this.props.match.params.id);
  }

  handleClick = id => {
    this.props.dispatch({ type: "ADD_TO_CART", id: id });
    this.props.history.push("/cart");
  };
  render() {
    if (!this.props.product) {
      return <p>Error occured . Please try again.</p>;
    } else {
      let Item = this.props.product[0];
      return (
        <div className="mx-5 my-2">
          <button
            className="btn btn-info mx-3"
            onClick={() => this.props.history.go(-1)}
          >
            <i className="fas fa-arrow-left" /> Back
          </button>
          <div className="details-container text-center px-5 pt-0">
            <h1 className="text-center col">
              {Item.name} {/*Item.id*/}
            </h1>
            <img
              alt=""
              src={
                "https://api-content.prod.pizzahutaustralia.com.au//umbraco/api/Image/Get2?path=assets/products/menu/Meat-Super-Supreme-Pizza-3250-menu.jpg"
              }
            />
            <p className="price">Price: Rs.{Item.price}</p>
            <p>
              Category:{" "}
              {Item.category == "veg" ? (
                <span className="text-success">
                  <i class="fas fa-circle" /> veg
                </span>
              ) : (
                <span className="text-danger">
                  <i class="fas fa-circle" /> non veg
                </span>
              )}
            </p>
            <p>Ingredients: {Item.ingredients}</p>
            <p>Toppings: {Item.toppings}</p>
            <p>description: {Item.description}</p>
            <button
              className="btn btn-info"
              onClick={() => this.handleClick(Item.id)}
            >
              <i className="fas fa-cart-plus" /> Add to Cart
            </button>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    product: state.prod_r.product,
    loading: state.prod_r.loading
  };
};
export default connect(
  mapStateToProps,
  { getProductByID }
)(Details);
