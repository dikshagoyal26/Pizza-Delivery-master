import React from "react";
import { Link } from "react-router-dom";

class Admin extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid text-center">
          <h1>Admin Pizza</h1>
          <Link to="/admin/add">
            <button className="btn btn-primary m-3">Add Product</button>
          </Link>
          <Link to="/admin/viewlist">
            <button className="btn btn-primary m-3">Edit Product</button>
          </Link>

          <button className="btn btn-primary m-3">Delete Product</button>

          <button className="btn btn-primary m-3">Update Product</button>
        </div>
      </div>
    );
  }
}
export default Admin;
