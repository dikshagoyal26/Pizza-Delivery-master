import React from "react";
import Input from "../../user/Input/Input";
import Select from "../../user/Input/Select";
import { connect } from "react-redux";
import { updateProduct, getProductByID } from "../../../actions/productActions";

class Edit extends React.Component {
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
        price: " ",
        ingredients: "",
        category: "",
        toppings: "",
        description: ""
      }
    };
  }
  componentDidMount() {
    this.props.getProductByID(this.props.match.params.id);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }

    if (nextProps.product) {
      this.setState({
        productid: nextProps.product[0].productid,
        name: nextProps.product[0].name,
        price: nextProps.product[0].price,
        ingredients: nextProps.product[0].ingredients,
        category: nextProps.product[0].category,
        toppings: nextProps.product[0].toppings,
        description: nextProps.product[0].description,
        errors: {
          productid: "",
          name: "",
          price: " ",
          ingredients: "",
          category: "",
          toppings: "",
          description: ""
        }
      });
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

      this.props.updateProduct(
        productData,
        this.props.history,
        this.props.match.params.id
      );
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="container-fluid text-center">
        <h1>Edit Pizza</h1>
        <p>Enter the pizza information</p>
        <div className="product_form">
          <form onSubmit={this.onSubmit}>
            <Input
              type="text"
              name="productid"
              label="Product ID: "
              required="required"
              handleChange={this.onChange}
              value={this.state.productid}
              placeholder="Enter Product ID"
              error={this.state.errors.productid}
            />

            <Input
              type="text"
              className="form-control ml-2"
              name="name"
              required="required"
              label="Name: "
              handleChange={this.onChange}
              value={this.state.name}
              placeholder="Enter Product name"
              error={this.state.errors.name}
            />

            <Input
              type="number"
              className="form-control ml-2"
              name="price"
              label="Price: "
              required="required"
              handleChange={this.onChange}
              value={this.state.price}
              placeholder="Enter Product Price"
              error={this.state.errors.price}
            />

            <Input
              type="text"
              className="form-control ml-2"
              name="ingredients"
              required="required"
              label="Ingredients: "
              value={this.state.ingredients}
              handleChange={this.onChange}
              placeholder="Enter Product Ingredients"
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
              required="required"
              label="Toppings: "
              handleChange={this.onChange}
              value={this.state.toppings}
              placeholder="Enter Product toppings"
              error={this.state.errors.toppings}
            />
            <Input
              type="text"
              className="form-control ml-2"
              name="description"
              required="required"
              label="Description: "
              value={this.state.description}
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
const mapStateToProps = state => {
  return {
    product: state.prod_r.product
  };
};
export default connect(
  mapStateToProps,
  { updateProduct, getProductByID }
)(Edit);
