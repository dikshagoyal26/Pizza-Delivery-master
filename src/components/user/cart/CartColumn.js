import React from "react";

class CartColumn extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <h6 className="text-uppercase">Name</h6>
        </td>
        <td>
          <h6 className="text-uppercase">Price</h6>
        </td>
        <td>
          <h6 className="text-uppercase">Topppings</h6>
        </td>
        <td>
          <h6 className="text-uppercase">Quantity</h6>
        </td>

        <td>
          <h6 className="text-uppercase">Total</h6>
        </td>
        <td>
          <h6 className="text-uppercase">Remove</h6>
        </td>
      </tr>
    );
  }
}
export default CartColumn;
