import React from 'react'
import * as bs from 'react-bootstrap'
import './App.scss'


function Home(props) {
    return (
        <bs.Container fluid className="p-0">
            <bs.Row noGutters style={{ padding: "6 rem 0" }}>
                <bs.Col>
                    <div className="text-center mt-5">
                        <img src="http://employees.oneonta.edu/viningwj/mm_lib_bv/assets/images/mmlib_main.png"></img>
                    </div>
                    <h1 className="text-center mt-5">Welcome to Northwest Labs</h1>
                </bs.Col>
            </bs.Row>
           
        </bs.Container>
    )
}

export default Home