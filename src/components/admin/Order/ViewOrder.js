import React from "react";
import { connect } from "react-redux";
import { getAllOrders, updateadminOrder } from "../../../actions/orderActions";

class ViewOrder extends React.Component {
  componentDidMount() {
    this.props.getAllOrders();
  }
  onClickDelivered = order => {
    this.props.updateadminOrder(order);
  };

  render() {
    let OrderItems = <p>No previous Orders</p>;
    if (this.props.orders) {
      OrderItems = this.props.orders.map(order => {
        return (
          <div className="OrderItem">
            <p>
              <b>User:</b> {order.userid}
            </p>
            <p>
              <b>Name:</b> {order.name}
            </p>
            <p>
              <b>Address:</b> {JSON.stringify(order.address)}
            </p>
            <p>
              <b>Products: </b>{" "}
              {order.products.map(product => {
                return (
                  <div>
                    <p>
                      Productid: {product.productid} {"   "} Quantity:{" "}
                      {product.qty}
                    </p>
                  </div>
                );
              })}
            </p>
            <p>
              <b>Date: </b> {order.date}
            </p>
            <p>
              <b>Status:</b> {order.status}
            </p>
            {order.status != "Delivered" ? (
              <button
                className="btn btn-success"
                onClick={() => this.onClickDelivered(order)}
              >
                Delivered <i class="fas fa-check" />
              </button>
            ) : null}
          </div>
        );
      });
    }
    return (
      <div className="container-fluid px-5">
        <h1 className="text-center">ViewOrder</h1>
        {OrderItems}{" "}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order_r.orders
  };
};

export default connect(
  mapStateToProps,
  { getAllOrders, updateadminOrder }
)(ViewOrder);
