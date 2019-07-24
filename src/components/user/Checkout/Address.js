import React from "react";
import Input from "../Input/Input";
import Select from "../Input/Select";
class Address extends React.Component {
  render() {
    return (
      <div className="editform p-3 rounded-lg bg-light">
        <form>
          <h6 className="text-uppercase text-center">Your address</h6>
          <Select
            name="addtype"
            placeholder="Type of Address*"
            label="Type:"
            options={["Home", "Office/Commercial"]}
            handleChange={this.props.handleChange}
          />
          <Input
            name="houseNo"
            type="text"
            value={this.props.value ? this.props.value.houseNo : ""}
            handleChange={this.props.handleChange}
            placeholder="Flat/House No.*"
            error={this.props.error ? this.props.error.houseNo : null}
          />{" "}
          <Input
            name="society"
            type="text"
            handleChange={this.props.handleChange}
            placeholder="Societ Name*"
            value={this.props.value ? this.props.value.society : ""}
            error={this.props.error ? this.props.error.society : null}
          />
          <Input
            name="street"
            type="text"
            handleChange={this.props.handleChange}
            placeholder="Street*"
            value={this.props.value ? this.props.value.street : ""}
            error={this.props.error ? this.props.error.street : null}
          />
          <Input
            name="town"
            type="text"
            handleChange={this.props.handleChange}
            placeholder="Locality / Town*"
            value={this.props.value ? this.props.value.town : ""}
            error={this.props.error ? this.props.error.town : null}
          />
          <Input
            name="state"
            type="text"
            handleChange={this.props.handleChange}
            placeholder="State*"
            value={this.props.value ? this.props.value.state : ""}
            error={this.props.error ? this.props.error.state : null}
          />
          <Input
            name="pin"
            type="text"
            handleChange={this.props.handleChange}
            placeholder="Pin*"
            value={this.props.value ? this.props.value.pin : ""}
            error={this.props.error ? this.props.error.pin : null}
          />
        </form>
      </div>
    );
  }
}

export default Address;
