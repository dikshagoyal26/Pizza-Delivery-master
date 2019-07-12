import React from "react";
import Input from "../../user/Input/Input";
import Select from "../../user/Input/Select";
import { connect } from "react-redux";

import { addProduct } from "../../../actions/productActions";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productid: "",
      name: "",
      price: 0,
      ingredients: "",
      category: "",
      toppings: "",
      description: "",
      errors: {
        productid: "",
        name: "",
        price: "",
        ingredients: "",
        category: "",
        toppings: "",
        description: ""
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  validate = () => {
    let productidError = "";
    let nameError = "";
    let priceError = "";
    let ingredientsError = "";
    let categoryError = "";
    let toppingsError = "";
    let descriptionError = "";

    if (!this.state.productid) {
      productidError = "Enter the product id";
    }

    if (!this.state.name) {
      nameError = "Enter the name";
    }

    if (!this.state.price) {
      priceError = "Enter the price";
    }

    if (!this.state.ingredients) {
      ingredientsError = "Enter the ingredients";
    }

    if (!this.state.category) {
      categoryError = "Enter the category";
    }

    if (!this.state.toppings) {
      toppingsError = "Enter the Toppings";
    }

    if (!this.state.description) {
      descriptionError = "Enter the Description";
    }

    if (
      productidError ||
      nameError ||
      priceError ||
      ingredientsError ||
      categoryError ||
      toppingsError ||
      descriptionError
    ) {
      this.setState({
        errors: {
          productid: productidError,
          name: nameError,
          price: priceError,
          ingredients: ingredientsError,
          category: categoryError,
          toppings: toppingsError,
          description: descriptionError
        }
      });
      return false;
    } else {
      return true;
    }
  };

  onSubmit = e => {
    e.preventDefault();
    let isvalid = this.validate();
    if (isvalid) {
      const productData = {
        productid: this.state.productid,
        name: this.state.name,
        price: this.state.price,
        ingredients: this.state.ingredients,
        category: this.state.category,
        toppings: this.state.toppings,
        description: this.state.description
      };
      this.props.addProduct(productData, this.props.history);
    }
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container-fluid text-center">
        <h1>Add Pizza</h1>
        <p>Enter the pizza information</p>
        <div className="product_form">
          <form onSubmit={this.onSubmit}>
            <Input
              type="text"
              name="productid"
              label="Product ID: "
              handleChange={this.onChange}
              placeholder="Enter Product ID"
              error={this.state.errors.productid}
            />
            <Input
              type="text"
              className="form-control ml-2"
              name="name"
              label="Name: "
              handleChange={this.onChange}
              placeholder="Enter Product name"
              error={this.state.errors.name}
            />
            <Input
              type="number"
              className="form-control ml-2"
              name="price"
              label="Price: "
              handleChange={this.onChange}
              placeholder="Enter Product Price"
              error={this.state.errors.price}
            />
            <Input
              type="text"
              className="form-control ml-2"
              name="ingredients"
              placeholder="Enter Product Ingerdients"
              label="Ingredients: "
              handleChange={this.onChange}
              error={this.state.errors.ingredients}
            />

            <Select
              options={["veg", "non veg"]}
              name="category"
              placeholder="Category"
              label="Category: "
              value={this.state.category}
              handleChange={this.onChange}
              error={this.state.errors.category}
            />

            <Input
              type="text"
              className="form-control ml-2"
              name="toppings"
              label="Toppings: "
              handleChange={this.onChange}
              placeholder="Enter Product toppings"
              error={this.state.errors.toppings}
            />

            <Input
              type="text"
              className="form-control ml-2"
              name="description"
              label="Description: "
              handleChange={this.onChange}
              placeholder="Enter Product description"
              error={this.state.errors.description}
            />

            <button className="btn btn-primary btn-block" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  errors: state.er.errors,
  msg: state.er.msg
});

export default connect(
  mapStateToProps,
  { addProduct }
)(Add);
