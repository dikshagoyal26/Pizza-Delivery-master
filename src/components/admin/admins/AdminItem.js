import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteAdmin, updateAdmin } from "../../../actions/adminActions";
import Input from "../../user/Input/Input";

class AdminItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      adminid: this.props.adminid,
      is_edit_mode: false,
      is_changed: false,
      oldadminid: this.props.adminid
    };
    this.deleteAdmin = this.deleteAdmin.bind(this);
    this.onClickEdit = this.onClickEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps = nextProps => {
    this.setState({
      name: nextProps.name,
      adminid: nextProps.adminid,
      oldadminid: nextProps.adminid
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, is_changed: true });
  };

  deleteAdmin = () => {
    const adminData = {
      name: this.state.name,
      adminid: this.state.adminid
    };
    this.props.deleteAdmin(adminData);
  };

  onClickEdit = () => {
    if (this.state.is_edit_mode && this.state.is_changed) {
      const adminData = {
        name: this.state.name,
        newadminid: this.state.adminid,
        adminid: this.state.oldadminid
      };
      this.props.updateAdmin(adminData, this.props.history);
    }
    this.setState({
      is_edit_mode: !this.state.is_edit_mode,
      is_changed: false
    });
  };

  render() {
    let Item = null;
    if (this.state.is_edit_mode) {
      Item = (
        <div className="row">
          <div className="col-lg-10 col-md-9">
            <h6>Enter Admin Details</h6>
            <form>
              <Input
                type="text"
                name="name"
                placeholder="Enter Admin Name"
                label="Name: "
                value={this.state.name}
                handleChange={this.handleChange}
              />
              <Input
                type="text"
                name="adminid"
                placeholder="Enter Admin ID (Email)"
                label="Admin ID: "
                value={this.state.adminid}
                handleChange={this.handleChange}
              />
            </form>
          </div>
          <div className=" col-lg-2 col-md-3  mt-5">
            <button className="btn btn-success" onClick={this.onClickEdit}>
              <i className="fas fa-user-check" />
            </button>

            <button className="btn btn-danger ml-3" onClick={this.deleteAdmin}>
              {" "}
              <i className="fas fa-user-minus" />
            </button>
          </div>
        </div>
      );
    } else {
      Item = (
        <div>
          {" "}
          <h4 className="font-weight-bold ">{this.props.name}</h4>
          <div className="row">
            <p className="col-lg-10 col-md-9">{this.props.adminid}</p>
            <div className=" col-lg-2 col-md-3">
              <button className="btn btn-secondary" onClick={this.onClickEdit}>
                <i className="fas fa-user-edit" />
              </button>

              <button
                className="btn btn-danger ml-3"
                onClick={this.deleteAdmin}
              >
                {" "}
                <i className="fas fa-user-minus" />
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="col-12 text-sm-center">
        <div className="admin-item m-1 py-2 px-4">{Item}</div>
      </div>
    );
  }
}
export default connect(
  null,
  { deleteAdmin, updateAdmin }
)(AdminItem);
