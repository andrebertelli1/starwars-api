import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container, Dimmer, Loader } from 'semantic-ui-react'

import './styles/global.css'

import Navbar from './components/Navbar'
import Home from './components/Home'
import People from './components/People'
import Planets from './components/Planets'

const App = () => {
  const [planets, setPlanets] = useState([]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Container>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/people" exact element={<People />} />
              <Route path="/planets" exact element={<Planets data={planets} />} />
            </Routes>
        </Container>
      </Router>
    </div>
  )
}

export default App;