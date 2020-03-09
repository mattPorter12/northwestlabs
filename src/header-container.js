import React from "react";
import * as bs from "react-bootstrap";
import { Link } from "react-router-dom";
import SiteIcon from "./SiteIcon.ico";
import "./App.scss";
function HeaderContainer(props) {
  return (
    <bs.Navbar expand="lg">
      <Link to="/">
        <bs.Navbar.Brand>
          <img alt="Site Icon" src={SiteIcon} />
          <strong> Arctic Key</strong>
        </bs.Navbar.Brand>
      </Link>
      <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
      <bs.Navbar.Collapse id="basic-navbar-nav">
        <bs.Nav>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="help" className="nav-link">
            Help
          </Link>
        </bs.Nav>
        <bs.Nav>
          <bs.NavDropdown
            title="Welcome, Matt"
            id="basic-nav-dropdown"
            alignRight
          >
            <bs.NavDropdown.Item href="#action/3.3">
              My Account
            </bs.NavDropdown.Item>
            <bs.NavDropdown.Divider />
            <bs.NavDropdown.Item href="#action/3.4">Logout</bs.NavDropdown.Item>
          </bs.NavDropdown>
        </bs.Nav>
      </bs.Navbar.Collapse>
    </bs.Navbar>
  );
}
export default HeaderContainer;
