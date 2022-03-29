import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Container, Dimmer, Loader } from 'semantic-ui-react'

import './styles/global.scss'

import Navbar from './components/Navbar'
import Home from './components/Home'
import People from './components/People'
import Planets from './components/Planets'

const App = () => {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people')
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    async function fetchPlanets() {
      let res = await fetch('https://swapi.dev/api/planets')
      let data = await res.json();
      setPlanets(data.results);
      setLoading(false);
    }

    fetchPeople();
    fetchPlanets();
  }, [])
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Container>
          {loading ? (
            <Dimmer active>
              <Loader inverted>Loading</Loader>
            </Dimmer>
          ) : (
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/people" exact element={<People data={people} />}/>
              <Route path="/planets" exact element={<Planets data={planets} />} />
            </Routes>
          )}
        </Container>
      </Router>
    </div>
  )
}

export default App;