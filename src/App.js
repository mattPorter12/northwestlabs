import React from 'react'
import { BrowserRouter as Router, Route, Switch  } from "react-router-dom"
import * as bs from 'react-bootstrap' /*this should be rare */
import HeaderContainer from './header-container'
import LeftContainer from './left-container'
import FooterContainer from './footer-container'
import Home from './home'
import Help from './help'
import About from './about'
import RightContainer from './right-container'
import Details from './details'

function App(props) {
  return (
    <Router>
      <bs.Container fluid className="p-0 min-vh-100 d-flex flex-column ">
        <bs.Row noGutters className="flex-grow-0 flex-shrink-0 shadow-sm">
          <bs.Col className="px-3 py-2 border-bottom border-info" style={{ backgroundColor: "white" }} >
            <HeaderContainer />
          </bs.Col>
        </bs.Row>
        <bs.Row noGutters className="flex-grow-1">
          <bs.Col md='2' className="border-right border-info px-3 py-4 shadow" style={{ backgroundColor: "white" }}>
            <LeftContainer /> 
          </bs.Col>
          <bs.Col md ='8' className="px-3 py-2" style={{ backgroundColor: "white" }} >
           <Switch>
              <Route exact path='/about'>
                <About /> 
              </Route>
              <Route  path='/help'>
                <Help />
              </Route>
              <Route exact path='/'>
                <Home /> 
              </Route>
              <Route path='/category/:category'>
                <Home /> 
              </Route>
              <Route path='/product/:id'>
                <Details />
              </Route>
            </Switch>
          </bs.Col>
          <bs.Col md='2' className="border-left border-info px-3 py-2" style={{ backgroundColor: "white" }} >
            <RightContainer />
          </bs.Col>
        </bs.Row>
        <bs.Row noGutters className="flex-grow-0 flex-shrink-0 shadow-sm">
          <bs.Col className="border-top border-info px-3 py-2" style={{ backgroundColor: "white" }} >
            <FooterContainer />
          </bs.Col>
        </bs.Row> 
      </bs.Container>
    </Router>
  )
}

export default App;
