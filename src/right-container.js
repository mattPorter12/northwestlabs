import React from 'react'
import * as bs from 'react-bootstrap'
import './App.scss'



function RightContainer(props) {
    return (
        <bs.Container>
            <bs.Row>
                <h2>Recent:</h2>
                <ul>
                    <li>
                        Melamine
                    </li>
                    <img src="https://www.chemservice.com/media/product/structures/n-12368.jpg"></img>
                    <li>
                        Neburon
                    </li>
                    <img src="https://www.chemservice.com/media/product/structures/n-12647.jpg"></img>
                    <li>
                        Nephthalene
                    </li>
                    <img src="https://www.chemservice.com/media/product/structures/n-12645.jpg"></img>
                </ul>
            </bs.Row>
        </bs.Container>
    )
}

export default RightContainer