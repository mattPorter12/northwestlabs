
import React from 'react'
import * as bs from 'react-bootstrap'
import { Link } from "react-router-dom"
import PRODUCTS from './products'
import './App.scss'

export default function LeftContainer(props) {
    
   let categories = {}
    
    const process_categories = Object.values(PRODUCTS).map((product) => {
        let curr_category = product.category
        
        if (categories[curr_category] == null)
            categories[curr_category] = 1;
        else
            categories[curr_category] = categories[curr_category]+1;
            
            

    })
    
    let myLinks = []
    for (let [category, count] of Object.entries(categories))
    {
        
        let curr_link = <Link className="nav-link">{category } ({count})</Link>
        myLinks.push(curr_link)
    
    }
    return ( 
    <span> {myLinks}</span>
    )
}

