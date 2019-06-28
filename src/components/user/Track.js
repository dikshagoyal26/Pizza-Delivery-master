import React from "react";
import { connect } from "react-redux";
import { getUserOrders, updateOrder } from "../../actions/orderActions";

class Track extends React.Component {
  componentDidMount = () => {
    this.props.getUserOrders();
  };

  handleClick = () => {
    console.log(this.props.order_history);
  };
  onClickCancel = order => {
    this.props.updateOrder(order);
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
            {order.status == "Pending" ? (
              <button
                className="btn btn-danger"
                onClick={() => this.onClickCancel(order)}
              >
                Cancel Order <i className="fa fa-times" />
              </button>
            ) : null}
          </div>
        );
      });
    }
    return (
      <div className="text-center">
        <h5>Your order id is {this.props.order_id}</h5>
        <button onClick={this.handleClick} className="btn btn-primary">
          Order History
        </button>
        {OrderItems}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    order_id: state.cr.order_id,
    order_history: state.cr.order_history,
    orders: state.order_r.orders
  };
};

export default connect(
  mapStateToProps,
  { getUserOrders, updateOrder }
)(Track);
