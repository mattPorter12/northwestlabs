import React from 'react'
import * as bs from 'react-bootstrap'
import { Switch } from 'react-router-dom'

function About(props) {
    return (
        <bs.Container fluid className="p-0">
        <bs.Row noGutters style={{ padding: "6 rem 0" }}>
            <bs.Col>
            <h1 className="text-center mt-5">About Northwest Labs</h1>
                <div className="text-center mt-5">
                    <img src="https://iclabs.ca/wp-content/uploads/2019/08/shutterstock_1114244621-1-aspect-ratio-3x2-600x400.jpg"></img>
                </div>
                <p>Consequat eiusmod dolore mollit magna et ea eiusmod et sunt. Occaecat officia veniam velit duis Lorem eu sint aliqua ipsum voluptate. Laborum officia laboris ut culpa enim sint proident officia commodo voluptate. Dolor eu officia eiusmod deserunt cupidatat.

Incididunt consequat in Lorem officia id nisi anim sit mollit adipisicing. Labore reprehenderit labore fugiat magna deserunt commodo nisi cillum laborum aliqua eu. Ullamco Lorem nulla laboris minim cupidatat Lorem laborum dolore aliqua laborum nostrud. Laboris officia sunt cupidatat duis. Eiusmod commodo laborum est quis minim labore enim cupidatat incididunt.

In qui occaecat quis do proident proident esse officia id magna sit id ea. Veniam pariatur velit nostrud minim eiusmod aute labore nostrud do. Ullamco non pariatur duis officia sint reprehenderit veniam eiusmod voluptate amet ipsum tempor. Sint ex dolore ex dolore minim qui culpa nulla exercitation magna culpa id cupidatat. Lorem in in adipisicing velit consectetur qui ex dolore. Dolor dolor amet pariatur Lorem anim mollit non commodo commodo labore. Id labore ex qui exercitation ea nisi dolor quis eu cillum dolore culpa.</p>
            </bs.Col>
        </bs.Row>
       
    </bs.Container>
    )
}

export default About