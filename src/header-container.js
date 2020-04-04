import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from "react-router-dom"
import CartIndicator from './Cart-Indicator'


function HeaderContainer(props) {
    

    return (
        <bs.Navbar expand="lg">
            <Link to="/">
                <bs.Navbar.Brand>
                    <img style = {{width: "3rem"}}alt="Arctic.com" src="https://img.favpng.com/14/1/23/logo-ice-png-favpng-5WnrwhD7jTkbdWzWVxuKqKW0q.jpg" />
                    <span> Arctic</span>
                </bs.Navbar.Brand>
            </Link>
            <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <bs.Navbar.Collapse id="basic-navbar-nav">
                <bs.Nav className="mr-auto">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/help" className="nav-link">Help</Link>
                </bs.Nav>
                <bs.Nav>
                    <bs.Nav className="mr-auto pr-4">
                        <CartIndicator/>
                    </bs.Nav>
                    <bs.NavDropdown title="Welcome, Matt" alignRight>
                        <bs.NavDropdown.Item>My Account</bs.NavDropdown.Item>
                        <bs.NavDropdown.Divider />
                        <bs.NavDropdown.Item href="#action/3.4">Logout</bs.NavDropdown.Item>
                    </bs.NavDropdown>
                </bs.Nav>
            </bs.Navbar.Collapse>
        </bs.Navbar>
    )
}
export default HeaderContainer
