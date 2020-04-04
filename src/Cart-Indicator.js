import { Link } from 'react-router-dom'
import React from 'react'
import '@fortawesome/fontawesome-free/css/all.css'
import * as bs from 'react-bootstrap'
import AppContext from "./context";


export default function CartIndicator(props)  {
    const state = React.useContext(AppContext);
    const count = state.cartCount;
    return (
        <bs.Nav className="shopping-containter mt-2 mr-3">
            <Link to="/cart">
                <i className="fas fa-shopping-cart shopping-cart"></i>
            </Link>
        <bs.Nav.Item className="counter ml-2"> {count}</bs.Nav.Item>
        </bs.Nav>
    );
}
