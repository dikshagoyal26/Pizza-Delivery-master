import React from "react";
import { connect } from "react-redux";
import { getUserOrders, updateOrder } from "../../actions/orderActions";

class Track extends React.Component {
  componentDidMount = () => {
    this.props.getUserOrders();
  };

  onClickCancel = order => {
    this.props.updateOrder(order);
  };

  render() {
    let OrderItems = <p>No previous Orders</p>;
    if (this.props.orders) {
      OrderItems = this.props.orders.map(order => {
        return (
          <div className="OrderItem my-3 col p-3" key={order.orderid}>
            <p>
              <b>Name:</b> {order.name}
            </p>
            <p>
              <b>Order ID:</b> {order.orderid}
            </p>
            <p>
              <b>Status:</b>
              {order.status === "Pendiing" ? (
                <span className="text-primary font-weight-bold">
                  {order.status}
                </span>
              ) : null}
              {order.status === "Delivered" ? (
                <span className="text-success font-weight-bold">
                  {order.status}
                </span>
              ) : null}
              {order.status === "Cancelled" ? (
                <span className="text-danger font-weight-bold">
                  {order.status}
                </span>
              ) : null}
            </p>
            {order.status == "Pending" ? (
              <button
                className="btn btn-danger"
                onClick={() => this.onClickCancel(order)}
              >
                Cancel Order <i className="fa fa-times" />
              </button>
            ) : null}
            <p>
              <b>Address:</b>
              {order.address[0].houseNo}
              {"  "}
              {order.address[0].street}
              {"  "}
              {order.address[0].town}
              {"  "}
              {order.address[0].society}
              {"  "}
              {order.address[0].state}
              {"  "}
              {order.address[0].pin}
            </p>
            <b>Products Ordered: </b>{" "}
            <table className="table">
              <thead>
                <tr>
                  <th>Productid:</th>
                  <th>Quantity:</th>
                </tr>
              </thead>
              <tbody>
                {order.products.map(product => {
                  return (
                    <tr key={product.productid}>
                      <td> {product.productid} </td>
                      <td>{product.qty}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <p>
              <b>
                <i className="far fa-calendar-alt" />
              </b>
              {"  "}
              {order.date.substring(0, 10)}
              {"  "}
              <b>
                {" "}
                <i className="far fa-clock" />
              </b>
              {order.date.substring(11, 16)}
            </p>
          </div>
        );
      });
    }
    return (
      <div className=" container-fluid px-5 py-3">
        <h1 className="text-center">Your Orders</h1>
        {OrderItems}
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
  { getUserOrders, updateOrder }
)(Track);
