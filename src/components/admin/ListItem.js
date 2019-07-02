import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct } from "../../actions/productActions";

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteProduct = this.deleteProduct.bind(this);
  }
  deleteProduct = () => {
    const productData = {
      productid: this.props.productid,
      name: this.props.name
    };
    this.props.deleteProduct(productData, this.props.history);
  };

  render() {
    return (
      <div className="col-lg-4 col-sm-6 col-md-4 ">
        <div className="product-item">
          <div className="product-item-image ">
            <img alt="" src={this.props.imgUrl} />
          </div>
          <div className="product-item-info">
            <h4 className="font-weight-bold text-center">{this.props.name}</h4>
            <p className="text-center font-weight-bold">
              Rs.{this.props.price}
            </p>
            <p>
              <b>Ingredients:</b> {this.props.ingredients}
            </p>
            <p>
              <b>Category:</b> {this.props.category}
            </p>
            <p>
              <b>Toppings:</b> {this.props.toppings}
            </p>
            <p>
              <b>Description:</b> {this.props.description}
            </p>
            <div className="text-center">
              <Link to={"/admin/edit/" + this.props.productid}>
                <button className="btn btn-info">
                  <i className="fas fa-edit" />
                  Edit
                </button>
              </Link>
              <div className="btn-group m-2">
                <button
                  onClick={this.deleteProduct}
                  className="btn btn-info mr-2"
                  data-toggle="modal"
                  data-target="#added_popup"
                >
                  <i className="fas fa-trash-alt" /> Delete
                </button>

                <div className="modal fade" id="added_popup" role="dialog">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body">
                        <p> {this.props.name} Deleted</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  { deleteProduct }
)(ListItem);
