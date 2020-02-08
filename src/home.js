import React from 'react'
import * as bs from 'react-bootstrap'
import './App.scss'
import './products'
import {Link} from 'react-router-dom'
import ProductCard from './ProductCard'
import PRODUCTS from './products'

export default function Home(props) {
  const Product_Values  = Object.values(PRODUCTS);
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
