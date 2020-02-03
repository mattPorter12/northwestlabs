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
            <bs.Row noGutters style={{backgroundColor: "#d3d3d3", padding: "6 rem 0"}}>
            <p>Et commodo aliqua proident cillum est Lorem eu fugiat. Est sint reprehenderit nostrud proident cupidatat. Aliquip eiusmod excepteur Lorem sit anim deserunt minim. Officia voluptate ex adipisicing veniam velit pariatur occaecat elit exercitation non consequat velit enim anim. Enim reprehenderit et tempor culpa labore irure exercitation ut ullamco culpa sit quis aliquip.

Aute proident sunt elit culpa quis veniam reprehenderit culpa proident occaecat minim. Eu deserunt sit quis exercitation proident enim officia irure. Quis et exercitation id do magna fugiat est. Nulla exercitation magna nostrud proident ea veniam ea. Nisi dolore est cupidatat nostrud amet culpa cillum est nisi. Ad laboris elit est ea.

Id ex esse deserunt ea. Labore voluptate velit ipsum et. Tempor dolor laboris fugiat labore reprehenderit. Labore pariatur velit laborum amet occaecat culpa ad minim Lorem sint.

Id minim id Lorem consequat dolore et in ut exercitation amet eiusmod in amet. Pariatur minim cillum laboris dolor. Adipisicing irure Lorem exercitation eiusmod deserunt est ea eiusmod incididunt cupidatat non.</p>
            </bs.Row>
        </bs.Container>
    )
}

export default Home