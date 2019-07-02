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
      errors: {}
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit = e => {
    e.preventDefault();

    const productData = {
      productid: this.state.productid,
      name: this.state.name,
      price: this.state.price,
      ingredients: this.state.ingredients,
      category: this.state.category,
      toppings: this.state.toppings,
      description: this.state.description
    };

    console.log(productData);
    this.props.addProduct(productData, this.props.history);
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
            />
            {this.state.errors.productid ? (
              <p className="text-danger">
                <i className="fas fa-exclamation-triangle" />
                {"  "}
                {this.state.errors.productid}
              </p>
            ) : null}
            <Input
              type="text"
              className="form-control ml-2"
              name="name"
              label="Name: "
              handleChange={this.onChange}
              placeholder="Enter Product name"
            />
            {this.state.errors.name ? (
              <p className="text-danger">
                <i className="fas fa-exclamation-triangle" />
                {"  "}
                {this.state.errors.name}
              </p>
            ) : null}
            <Input
              type="number"
              className="form-control ml-2"
              name="price"
              label="Price: "
              handleChange={this.onChange}
              placeholder="Enter Product Price"
            />{" "}
            {this.state.errors.price ? (
              <p className="text-danger">
                <i className="fas fa-exclamation-triangle" />
                {"  "}
                {this.state.errors.price}
              </p>
            ) : null}
            <Input
              type="text"
              className="form-control ml-2"
              name="ingredients"
              placeholder="Enter Product Ingerdients"
              label="Ingredients: "
              handleChange={this.onChange}
            />
            {this.state.errors.ingredients ? (
              <p className="text-danger">
                <i className="fas fa-exclamation-triangle" />
                {"  "}
                {this.state.errors.ingredients}
              </p>
            ) : null}
            <Select
              options={["veg", "non veg"]}
              name="category"
              placeholder="Category"
              label="Category: "
              value={this.state.category}
              handleChange={this.onChange}
            />
            {this.state.errors.category ? (
              <p className="text-danger">
                <i className="fas fa-exclamation-triangle" />
                {"  "}
                {this.state.errors.category}
              </p>
            ) : null}
            <Input
              type="text"
              className="form-control ml-2"
              name="toppings"
              label="Toppings: "
              handleChange={this.onChange}
              placeholder="Enter Product toppings"
            />
            {this.state.errors.toppings ? (
              <p className="text-danger">
                <i className="fas fa-exclamation-triangle" />
                {"  "}
                {this.state.errors.toppings}
              </p>
            ) : null}
            <Input
              type="text"
              className="form-control ml-2"
              name="description"
              label="Description: "
              handleChange={this.onChange}
              placeholder="Enter Product description"
            />
            {this.state.errors.description ? (
              <p className="text-danger">
                <i className="fas fa-exclamation-triangle" />
                {"  "}
                {this.state.errors.description}
              </p>
            ) : null}
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
