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
      category: "veg",
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

  onSubmit = (e) => {
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
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div id="addProduct">
        <div className="container text-center">
          <h1>Add Pizza</h1>
          <p>Enter the pizza information</p>
          <form onSubmit={this.onSubmit}>
            <Input
              type="text"
              placeholder="XXX"
              name="productid"
              handleChange={this.onChange}
              error={this.state.errors.productid}
              label={" Product Id :"}
            />

            <Input
              className="form-control"
              name="name"
              type="text"
              placeholder="Pizza Mania"
              handleChange={this.onChange}
              error={this.state.errors.name}
              label={"Product Name :"}
            />

            <Input
              name="price"
              handleChange={this.onChange}
              error={this.state.errors.price}
              className="form-control"
              type="number"
              placeholder="Ex: 99"
              label={"Price :"}
            />

            <Input
              name="ingredients"
              handleChange={this.onChange}
              error={this.state.errors.ingredients}
              className="form-control"
              type="text"
              placeholder="Ex: Pan Sauce"
              label={"Ingredients :"}
            />

            <Select
              options={["veg", "non veg"]}
              name="category"
              value={this.state.category}
              handleChange={this.onChange}
              className="form-control"
              label={"Category :"}
            />

            <Input
              name="toppings"
              handleChange={this.onChange}
              error={this.state.errors.toppings}
              className="form-control"
              type="text"
              placeholder="Ex: Tomato, Onion."
              label={" Toppings :"}
            />

            <Input
              name="description"
              handleChange={this.onChange}
              error={this.state.errors.description}
              className="form-control"
              type="text"
              placeholder="A delectable combination of cheese and juicy tomato
"
              label={"   Description :"}
            />

            <button className="btn btn-primary my-2" type="submit">
              Submit
            </button>
            <button className="btn btn-danger my-2">Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  errors: state.er.errors,
  msg: state.er.msg
});

export default connect(
  mapStateToProps,
  { addProduct }
)(Add);
