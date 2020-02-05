
import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from "react-router-dom"
import './App.scss'

function LeftContainer(props) {
    return ( 
        <bs.Nav defaultActiveKey="/home" className="flex-column">
           
            <Link to ="/">Home</Link> <br></br>
            <Link to ="/about">About</Link> <br></br>
            <Link to ="/help">Help</Link>
        </bs.Nav>
    )
}

export default LeftContainer