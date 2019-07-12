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
            error={this.props.error.houseNo}
          />{" "}
          <Input
            name="society"
            type="text"
            handleChange={this.props.handleChange}
            placeholder="Societ Name*"
            error={this.props.error.society}
          />
          <Input
            name="street"
            type="text"
            handleChange={this.props.handleChange}
            placeholder="Street*"
            error={this.props.error.street}
          />
          <Input
            name="town"
            type="text"
            handleChange={this.props.handleChange}
            placeholder="Locality / Town*"
            error={this.props.error.town}
          />
          <Input
            name="state"
            type="text"
            handleChange={this.props.handleChange}
            placeholder="State*"
            error={this.props.error.state}
          />
          <Input
            name="pin"
            type="text"
            handleChange={this.props.handleChange}
            placeholder="Pin*"
            error={this.props.error.pin}
          />
        </form>
      </div>
    );
  }
}

export default Address;
