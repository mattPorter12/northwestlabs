import React from 'react'
import PRODUCTS from './products'
import * as bs from 'react-bootstrap' 
import { useParams } from "react-router-dom";

export default function Details(props){

  let {id} = useParams()
  let product = PRODUCTS[id]
  const[ImgIdx, setImgIdx] = React.useState(1)
  
  function ChangeColor(idx) {
    setImgIdx(idx)

}
  
  if (product==null)
  {
    return (
      <div>
        <h1 style={{color: "red"}}>Product Not Found</h1>
      </div>
    )
  }

  return (
    <div>
      <bs.Row >
        <bs.Col md = "8">
          <h1  style={{color: "black"}}>
            {product.name}
          </h1>
          <h3>
            {"$" +product.price}
          </h3>
          <p > 
            {product.description} 
          </p>
        </bs.Col>
        <bs.Col md="4">
        <img  src={"/products/" + product.filename + "-" +ImgIdx+ ".png" } alt = "big " style={{float: "right", position:"relative", }}></img>
          <bs.Col md='-3'>
            <img src={"/products/" + product.filename + "-1.png"} alt = "small "onMouseOver={() => ChangeColor(1)}style={{width: "30px"}}></img>
            <img src={"/products/" + product.filename + "-2.png"} alt = "small "onMouseOver={() => ChangeColor(2)} style={{width: "30px"}} ></img>
            <img src={"/products/" + product.filename + "-3.png"} alt = "small "onMouseOver={() => ChangeColor(3)}style={{width: "30px"}}></img>
            <img src={"/products/" + product.filename + "-4.png"} alt = "small "onMouseOver={() => ChangeColor(4)}style={{width: "30px"}}></img>

          </bs.Col>
        
        </bs.Col>
        
      </bs.Row>
     
    </div>) 

   
}
