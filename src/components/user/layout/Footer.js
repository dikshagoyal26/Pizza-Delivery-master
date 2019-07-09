import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer mt-5 p-4 text-center">
          Copyright &copy; {new Date().getFullYear()} Pizza Delivery
        </footer>
      </div>
    );
  }
}
export default Footer;
