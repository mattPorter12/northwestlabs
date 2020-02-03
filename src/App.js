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

function App(props) {
  return (
    <Router>
      <bs.Container fluid className="p-0 min-vh-100 d-flex flex-column">
        <bs.Row noGutters className="flex-grow-0 flex-shrink-0 shadow-sm">
          <bs.Col className="px-3 py-2" style={{ backgroundColor: "#d3d3d3" }} >
            <HeaderContainer />
          </bs.Col>
        </bs.Row>
        <bs.Row noGutters className="flex-grow-1">
          <bs.Col md='2' className="px-3 py-4 shadow" style={{ backgroundColor: "#99CCfC" }}>
            <LeftContainer /> 
          </bs.Col>
          <bs.Col md ='8' className="px-3 py-2" style={{ backgroundColor: "#121C1C" }} >
           <Switch>
              <Route exact path='/about'>
                <About /> 
              </Route>
              <Route exact path='/help'>
                <Help />
              </Route>
              <Route exact path='/'>
                <Home /> 
              </Route>
            </Switch>
          </bs.Col>
          <bs.Col md='2' className="px-3 py-2" style={{ backgroundColor: "#99CCCC" }} >
            <RightContainer />
          </bs.Col>
        </bs.Row>
        <bs.Row noGutters className="flex-grow-0 flex-shrink-0 shadow-sm">
          <bs.Col className="px-3 py-2" style={{ backgroundColor: "pink" }} >
            <FooterContainer />
          </bs.Col>
        </bs.Row> 
      </bs.Container>
    </Router>
  )
}

export default App;
