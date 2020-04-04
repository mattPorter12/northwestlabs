import React from "react";
import * as bs from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import AppContext from './context'

export default function Details(props) {
  const state = React.useContext(AppContext)
  let { id } = useParams();
  let product = {}
  const [ImgIdx, setImgIdx] = React.useState(1);
  

  state.products.forEach((p, index) => {
    if (p.id === parseInt(id))
    {
      product = p
      product.key = {index}
    }


  })
  function ChangeColor(idx) {
    setImgIdx(idx);
  }

  if (product === null || typeof product.id == 'undefined') {
    return (
      <div>
        <h1 style={{ color: "red" }}>Product Not Found</h1>
      </div>
    );
  }

  return (
    <div>
      <bs.Row>
        <bs.Col md="8">
          <h1 style={{ color: "black" }}>{product.name}</h1>
          <h3>{"$" + product.price}</h3>
          <p style={{ float: "left" }}>{product.description}</p>
        </bs.Col>
        
        <bs.Col md="4">
          <img
            src={"/products/" + product.filename + "-" + ImgIdx + ".png"}
            alt="big "
            style={{ float: "right", position: "inherit" }}
          ></img>
          <bs.Col md="-3">
            <img
              src={"/products/" + product.filename + "-1.png"}
              alt="small "
              onMouseOver={() => ChangeColor(1)}
              style={{ width: "30px" }}
            ></img>
            <img
              src={"/products/" + product.filename + "-2.png"}
              alt="small "
              onMouseOver={() => ChangeColor(2)}
              style={{ width: "30px" }}
            ></img>
            <img
              src={"/products/" + product.filename + "-3.png"}
              alt="small "
              onMouseOver={() => ChangeColor(3)}
              style={{ width: "30px" }}
            ></img>
            <img
              src={"/products/" + product.filename + "-4.png"}
              alt="small "
              onMouseOver={() => ChangeColor(4)}
              style={{ width: "30px" }}
            ></img>
          </bs.Col>
          
        </bs.Col>
        <Link to='/cart'>
          <bs.Button
            variant = "warning"
            onClick= {e => {
              state.addToCart(product.id)
            }}>
              Add To Cart
          </bs.Button>
        </Link>
      </bs.Row>
    </div>
  );
}
