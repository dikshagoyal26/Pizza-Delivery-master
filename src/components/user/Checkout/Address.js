import React from "react";
import Input from "../Input/Input";
import Select from "../Input/Select";
class Address extends React.Component {
  render() {
    return (
      <div className="editform p-3 rounded-lg bg-light">
        <form>
          <h6 className="text-uppercase text-center">Your delivery address</h6>
          <p className="text-center">
            (Please complete your delivery address to place the order)
          </p>
          <Select
            name="type"
            placeholder="Type of Address*"
            options={["Home", "Office/Commercial"]}
            handleChange={this.props.handleChange}
          />
          <Input
            name="houseNo"
            type="text"
            handleChange={this.props.handleChange}
            placeholder="Flat/House No.*"
          />{" "}
          <Input
            name="society"
            type="text"
            handleChange={this.props.handleChange}
            placeholder="Societ Name*"
          />
          <Input
            name="street"
            type="text"
            handleChange={this.props.handleChange}
            placeholder="Street*"
          />
          <Input
            name="town"
            type="text"
            handleChange={this.props.handleChange}
            placeholder="Locality / Town*"
          />
          <Input
            name="state"
            type="text"
            handleChange={this.props.handleChange}
            placeholder="State*"
          />
          <Input
            name="pin"
            type="text"
            handleChange={this.props.handleChange}
            placeholder="Pin*"
          />
        </form>
      </div>
    );
  }
}

export default Address;
