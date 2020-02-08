import React from 'react'
import * as bs from 'react-bootstrap'

import { Link } from 'react-router-dom'

export default function ProductCard(props) {

    let p = props.product
    return (
        
        <bs.Card  className = "text-center p-3" >
             <Link to={"/product/" + p.id}> 
                <bs.Button style={{float: "right", position: "absolute"}} variant="primary">
                    <span>Details</span>
                </bs.Button>
            </Link>
            <bs.Card.Img variant="top" src={"/products/" + p.filename + "-1.png" }/>
            
            <bs.Card.Header >
                <bs.Card.Title>
                    {p.name} 
                </bs.Card.Title>
                <bs.Card.Text>
                ${p.price}
                </bs.Card.Text>
                
            </bs.Card.Header>

            
           
        </bs.Card>
    )
        
}

{/* <Card>
<Card.Img variant="top" src="holder.js/100px160" />
<Card.Body>
  <Card.Title>Card title</Card.Title>
  <Card.Text>
    This card has supporting text below as a natural lead-in to additional
    content.{' '}
  </Card.Text>
</Card.Body>
<Card.Footer>
  <small className="text-muted">Last updated 3 mins ago</small>
</Card.Footer>
</Card> */}
