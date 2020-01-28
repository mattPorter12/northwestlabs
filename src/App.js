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
          <bs.Col className="px-3 py-2" style={{ backgroundColor: "#282828" }} >
            <HeaderContainer />
          </bs.Col>
        </bs.Row>
        <bs.Row noGutters className="flex-grow-1">
          <bs.Col md='2' className="px-3 py-4 shadow" style={{ backgroundColor: "#99CCCC" }}>
            <LeftContainer />
          </bs.Col>
          <bs.Col md='8'>
            <Switch>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/help'>
                <Help />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </bs.Col>
        </bs.Row> 
        
        <bs.Row noGutters className="flex-grow-0 flex-shrink-0 shadow-sm">
          <bs.Col className="px-3 py-2" style={{ backgroundColor: "#121C1C" }} >
            <Home />
          </bs.Col>
        </bs.Row>
        
        <bs.Row noGutters className="flex-grow-0 flex-shrink-0 shadow-sm">
          <bs.Col className="px-3 py-2" style={{ backgroundColor: "#121C1C" }} >
            <RightContainer />
          </bs.Col>
        </bs.Row>
        <bs.Row noGutters className="flex-grow-0 flex-shrink-0 shadow-sm">
          <bs.Col className="px-3 py-2" style={{ backgroundColor: "#121C1C" }} >
            <FooterContainer />
          </bs.Col>
        </bs.Row> 
          
      </bs.Container>
    </Router>
  )
}

export default App;
