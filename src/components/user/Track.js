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
    if (
      this.props.orders === null ||
      !this.props.orders ||
      this.props.orders === undefined
    ) {
      OrderItems = (
        <div className="text-center m-5">
          <div
            className="spinner-border"
            style={{ width: 30, height: 30 }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    } else if (
      this.props.orders &&
      this.props.orders !== undefined &&
      this.props.orders !== null
    ) {
      OrderItems = this.props.orders.map(order => {
        return (
          <div key={order.orderid}>
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="_3xMk0">
                  <div className="g28rk">
                    <div className="_2XWVq">
                      <div className="_3h4gz">{order.name}</div>

                      <div className="_2uT6l">ORDERID: {order.orderid}</div>
                      <div className="_2uT6l">Amount Paid :{order.total}</div>
                      <div
                        className="_1ziWV"
                        data-toggle="modal"
                        data-target="#ordermodal"
                      >
                        VIEW DETAILS
                      </div>
                      <div className="_2fkm7">
                        <span>
                          <span className="h-Ntp icon-tickSharp">
                            {" "}
                            Ordered on {order.date}
                          </span>
                          <br />
                          <span>
                            <b>Status:</b> {order.status}
                          </span>
                          <br />
                          {order.status === "Pending" ? (
                            <button
                              className="btn btn-danger"
                              onClick={() => this.onClickCancel(order)}
                            >
                              Cancel <i className="fas fa-check" />
                            </button>
                          ) : null}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade"
              id="ordermodal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel4"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-dialog-slideout modal-md"
                role="document"
              >
                <div className="modal-content">
                  <div>
                    <div className="_3btQx">
                      sticky_sentinel sticky_sentinel--top
                    </div>
                    <div
                      className="_3RbEL"
                      style={{
                        paddingLeft: "40px",
                        paddingRight: "40px"
                      }}
                    >
                      <div className="_1L8WG">
                        <div className="_2Joay">OrderID: {order.orderid}</div>
                      </div>

                      <div className="_2d5vz">
                        <div className="_3AnQo">
                          <br />
                          <div className="_2d1Bv">
                            <div className="_3SB3Y">
                              {order.address[0].addtype}
                            </div>
                            <span>
                              {order.address[0].houseNo +
                                " " +
                                order.address[0].street +
                                " " +
                                order.address[0].town +
                                " " +
                                order.address[0].society +
                                " " +
                                order.address[0].state +
                                " " +
                                order.address[0].pin}{" "}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="_1QB2L">
                        <div className="i5V29">
                          <span className="h-Ntp icon-tickSharp">
                            {" "}
                            Ordered on {order.date}
                          </span>
                          <br />
                          <span>
                            <b>Status:</b> {order.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        paddingLeft: "40px",
                        paddingRight: "40px"
                      }}
                    >
                      <div className="_9xEZF">
                        <div className="_1_7YY">ITEMS</div>{" "}
                        {order.products.map(product => {
                          return (
                            <div className="LunMQ">
                              <div className="_3ix93">
                                <span className="icon-foodSymbol _3NEcG _1zonf" />
                                {product.product_id.name} X {product.qty}
                              </div>
                              <div className="_1k5de">
                                {product.product_id.price}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="_15Yxr">
                        <div>
                          <div className="_3l9s2">
                            <div className="_3l_-K UCNHQ">Item Total</div>
                            <div>
                              <span className="_3IQOi">{order.total}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="_3Za6N"
                      style={{
                        paddingLeft: "40px",
                        paddingRight: "40px"
                      }}
                    >
                      <div className="fgu5X">
                        <div className="_1r2M3">
                          <div className="_1uENN">
                            <b>Payment Mode:</b>
                            {"  "}
                            {order.paymentmode}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="_2MUP_">
                      sticky_sentinel sticky_sentinel--bottom
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
