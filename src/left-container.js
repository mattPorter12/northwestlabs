
import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from "react-router-dom"
import './App.scss'

function LeftContainer(props) {
    return (
        <bs.Navbar expand="lg">
            <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <bs.Nav className="basic-navbar-nav">
                    <Link to = "/">Home</Link> <br></br>
                    <Link to = "/about">About</Link> <br></br>
                    <Link to = "/help">Help</Link> <br></br>
                </bs.Nav>
        </bs.Navbar>
    )
}

export default LeftContainer