import React from 'react'
import * as bs from 'react-bootstrap'
import SECTION from './sec1'


function About(props) {
    return (
        <bs.Container fluid className="p-0">
        <bs.Row noGutters style={{ padding: "6 rem 0" }}>
            <bs.Col>
                < SECTION />
            </bs.Col>
        </bs.Row>
       
    </bs.Container>
    )
}

export default About