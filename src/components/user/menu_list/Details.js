import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getProductByID } from "../../../actions/productActions";
import { addToCart } from "../../../actions/cartActions";

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    };
  }

  componentDidMount() {
    this.props.getProductByID(this.props.match.params.id, this.props.history);
  }

  handleClick = () => {
    const cartData = {
      productid: this.props.product[0].productid,
      name: this.props.product[0].name,
      price: this.props.product[0].price,
      toppings: this.props.product[0].toppings,
      qty: this.state.quantity,
      operation: "+1"
    };

    this.props.addToCart(cartData, this.props.history);
  };

  setQuantity = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (!this.props.product[0]) {
      return <p>Error occured . Please try again.</p>;
    } else {
      let Item = this.props.product[0];
      return (
        <div className="container pt-3">
          <button
            className="btn btn-info"
            onClick={() => this.props.history.go(-1)}
          >
            <i className="fas fa-arrow-left" /> Back
          </button>
          {/* //New code */}
          <div className="row details-container mt-3 p-3 ">
            <div className="col-lg-4 col-md-6 col-sm-12 details-image">
              <img
                alt=""
                src={
                  "https://api-content.prod.pizzahutaustralia.com.au//umbraco/api/Image/Get2?path=assets/products/menu/Meat-Super-Supreme-Pizza-3250-menu.jpg"
                }
              />
            </div>
            <div className="col-lg-4 col-md-6  col-sm-12 details-info px-5">
              <h1 className="text-center">
                {Item.name} {/*Item.id*/}
              </h1>
              <hr />
              <div className="py-3">
                <p>
                  <span className="details_info_label" />
                  Category:
                  {Item.category === "veg" ? (
                    <span className="text-success">
                      <i className="fas fa-circle" /> veg
                    </span>
                  ) : (
                    <span className="text-danger">
                      <i className="fas fa-circle" /> non veg
                    </span>
                  )}
                </p>
                <p>Ingredients: {Item.ingredients}</p>
                <p>Toppings: {Item.toppings}</p>
                <p>Description: {Item.description}</p>
                <div className="text-center">
                  <p className="price">Price: Rs.{Item.price}</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 details_buttons text-center p-3">
              <div className="p-lg-5 p-md-3 p-sm-3">
                {" "}
                <label>Quantity: {"  "}</label>
                <select name="quantity" onChange={this.setQuantity} length="2">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                </select>
                {"  "}
                <button
                  className="btn btn-info"
                  onClick={() => this.handleClick(Item.id)}
                >
                  <i className="fas fa-cart-plus" /> Add to Cart
                </button>
              </div>
            </div>
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
  { getProductByID, addToCart }
)(Details);
