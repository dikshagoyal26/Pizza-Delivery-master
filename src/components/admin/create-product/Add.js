import React from "react";
class Add extends React.Component {
  render() {
    return (
      <div className="container-fluid text-center">
        <h1>Add Pizza</h1>
        <p>Enter the pizza information</p>
        <div className="product_form">
          <form>
            <div className="input-group">
              <label>Product ID:</label>
              <input
                type="number"
                className="form-control ml-2"
                name="productid"
                required
                placeholder="Enter Product ID"
              />
            </div>

            <div className="input-group">
              <label>Name:</label>
              <input
                type="text"
                className="form-control ml-2"
                name="name"
                required
                placeholder="Enter Product name"
              />
            </div>

            <div className="input-group">
              <label>Price:</label>
              <input
                type="text"
                className="form-control ml-2"
                name="price"
                required
                placeholder="Enter Product Price"
              />
            </div>
            <div className="input-group">
              <label>Ingredients:</label>
              <input
                type="text"
                className="form-control ml-2"
                name="ingredients"
                required
                placeholder="Enter Product ingredients"
              />
            </div>
            <div className="input-group">
              <label>Category (veg/non veg):</label>
              <input
                type="text"
                className="form-control ml-2"
                name="category"
                required
                placeholder="Enter Product category"
              />
            </div>
            <div className="input-group">
              <label>Toppings :</label>
              <input
                type="text"
                className="form-control ml-2"
                name="toppings"
                required
                placeholder="Enter Product toppings"
              />
            </div>
            <div className="input-group">
              <label>Description :</label>
              <input
                type="text"
                className="form-control ml-2"
                name="description"
                required
                placeholder="Enter Product description"
              />
            </div>

            <button className="btn btn-primary btn-block" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Add;
