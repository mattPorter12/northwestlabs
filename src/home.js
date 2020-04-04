import React from "react";
import * as bs from "react-bootstrap";
import "./App.scss";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import AppContext from "./context";



export default function Home(props) {
  const state = React.useContext(AppContext);
  let Product_Values = Object.values(state.products);


  function getCategoryNameFromId(id) {
    /* eslint-disable-next-line */
    return state.categories.filter((c) => c.id == id)[0].title;
  }

  let { category } = useParams();


  Product_Values = Product_Values.filter(
    p => { 
      return getCategoryNameFromId(p.category) === category || category == null}
  );


  return (
    <bs.Container>
      <bs.Row>
        {Product_Values.map(p => (
          <bs.Col md="3" key={p.id}>
            <ProductCard product={p} />
          </bs.Col>
        ))}
      </bs.Row>
    </bs.Container>
  );
}
