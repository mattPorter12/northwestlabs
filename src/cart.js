import React, { useContext } from "react";
import AppContext from "./context";
import * as bs  from 'react-bootstrap' 
import {Link} from 'react-router-dom'


export default function Cart(props) {
    const state = useContext(AppContext)
    let total = 0;
 
    if (parseInt(state.cartCount) === 0)
    {
        return (
            <div>
                <h3 style= {{textAlign: 'center', marginTop:60}}>Your cart is empty</h3>
            </div>
        )
    }
    return (
        <div>
            <h1>Shopping Cart</h1>
            <bs.Table responsive striped hover style ={{marginTop:60}}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(state.cart).map(([prod, value]) => {
                        let product = {}
                        state.products.forEach((p, index) => {
                            if (p.id === parseInt(prod))
                            {
                              product = p
                              product.key = {index}
                            }
                          })
                        const quantity = value
                        const subtotal = product.price * value;
                        total += subtotal;
                        return (
                            <tr key={prod}>
                                <td>
                                    <bs.Image src={"/products/" + product.filename + "-1.png"} style={{height:"50px", width:"50px"}}/>
                                </td>
                                <td>{product.name}</td>
                                <td>${product.price}</td>
                                <td>{quantity}</td>
                                <td>${subtotal.toFixed(2)}</td>
                                <td>
                                    <bs.Button variant="danger" onClick={e=>{state.removeFromCart(product.id, value)}}>
                                        Remove from cart
                                    </bs.Button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="4"></th>
                        <td><b>Total: ${total.toFixed(2)}</b></td>
                    </tr>
                    <tr>
                        <td> 
                            < Link 
                                to= './checkout'
                                className = 'btn btn-success' 
                            >
                            Checkout
                            </ Link></td>
                    </tr> 
                </tfoot>
        </bs.Table>
    </div>
    )
}