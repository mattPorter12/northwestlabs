
import React from 'react'
import { Link } from "react-router-dom"
import PRODUCTS from './products'
import './App.scss'

export default function LeftContainer(props) {
    
   let categories = {}
    
    Object.values(PRODUCTS).map((product) => {
        let curr_category = product.category
        
        if (categories[curr_category] == null)
            categories[curr_category] = 1;
        else
            categories[curr_category] = categories[curr_category]+1;
        return true
    })
    
    
    let myLinks = [<Link to="/"  key="all" className="nav-link">{"All products" } ({Object.values(PRODUCTS).length})</Link>]
    for (let [category, count] of Object.entries(categories))
    {
        let key = 'left' + myLinks.length;
        let curr_link = <Link to={"/category/" +category} key={key} className="nav-link">{category } ({count})</Link>
        myLinks.push(curr_link)
    
    }
    return ( 
    <span> {myLinks}</span>
    )
}

