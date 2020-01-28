import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from "react-router-dom"
import SiteIcon from './SiteIcon.ico'
import './App.scss'
function HeaderContainer(props) {
    return (
        <bs.Navbar expand="lg">
            <Link to="/">
                <bs.Navbar.Brand>
                    <img alt="site icon" src={SiteIcon} />
                   <h1>Northwest Labs </h1> 
                </bs.Navbar.Brand>
            </Link>
            <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
            <bs.Navbar.Collapse id="basic-navbar-nav">
                <bs.Nav className="navbar navbar-expand-sm bg-light">
                    <Link to = "/">Home</Link>
                    <br></br>
                    <Link to = "/about">About</Link>
                    <Link to = "/Help"> Help</Link>
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

export default HeaderContainer 