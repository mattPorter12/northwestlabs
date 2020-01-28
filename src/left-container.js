
import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from "react-router-dom"
import SiteIcon from './SiteIcon.ico'

function LeftContainer(props) {
    return (
        <bs.Navbar expand="lg">
            <Link to="/">
                <bs.Navbar.Brand>
                    <img alt="site icon" src={SiteIcon} />
                    Northwest Labs
                </bs.Navbar.Brand>
            </Link>
            <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <bs.Navbar.Collapse id="basic-navbar-nav">
                <bs.Nav className="mr-auto">
                    <Link to = "/">Home</Link>
                    <Link to = "/about">About</Link>
                    <Link to = "/">help</Link>
                    <bs.NavDropdown title="Welcome, Matt" alignRight>
                        <bs.NavDropdown.Item >My account</bs.NavDropdown.Item>
                        <bs.NavDropdown.Divider />
                        <bs.NavDropdown.Item href="#action/3.4">Logout</bs.NavDropdown.Item>
                    </bs.NavDropdown>
                </bs.Nav>
            </bs.Navbar.Collapse>
        </bs.Navbar>
    )
}

export default LeftContainer