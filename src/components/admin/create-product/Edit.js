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
      price: "",
      ingredients: "",
      category: "",
      toppings: "",
      description: "",
      errors: {}
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
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
        description: nextProps.product[0].description
      });
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

    this.props.updateProduct(
      productData,
      this.props.history,
      this.props.match.params.id
    );
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
            />

            <Input
              type="text"
              className="form-control ml-2"
              name="price"
              label="Price: "
              required="required"
              handleChange={this.onChange}
              value={this.state.price}
              placeholder="Enter Product Price"
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
            />
            <Select
              options={["veg", "non veg"]}
              name="category"
              placeholder="Category"
              label="Category: "
              value={this.state.category}
              handleChange={this.onChange}
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
