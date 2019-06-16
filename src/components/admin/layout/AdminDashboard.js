import React from "react";
import { Link } from "react-router-dom";

class AdminDashboard extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid text-center">
          <h1>Admin Dashboard</h1>
          <Link to="/admin/add">
            <button className="btn btn-primary m-3">Add Product</button>
          </Link>
          <Link to="/admin/order">
            <button className="btn btn-primary m-3">View Orders</button>
          </Link>
          <Link to="/admin/sales">
            <button className="btn btn-primary m-3">View Sales</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default AdminDashboard;
