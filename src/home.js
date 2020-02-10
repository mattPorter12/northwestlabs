import React from 'react'
import * as bs from 'react-bootstrap'
import './App.scss'
import './products'
import {  useParams } from "react-router-dom";
import ProductCard from './ProductCard'
import PRODUCTS from './products'


export default function Home(props) {
  let Product_Values  = Object.values(PRODUCTS);

  let {category} = useParams()
  function filter(p)
  {
    return p.category === category || category == null;
  }

  Product_Values = Product_Values.filter(filter);

  function processOneValue(p, i)
  {
      return (
          
          <bs.Col md ="3" key={p.id}>
            <ProductCard product= {p}  />
          </bs.Col>
          
      )
  }
  let cards = Product_Values.map(processOneValue);

  return ( 
    <bs.Container >
      <bs.Row> 
        {cards}
      </bs.Row> 
    </bs.Container>
  )
}
