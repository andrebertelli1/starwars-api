import React, { useEffect, useState } from 'react'
import { Grid } from 'semantic-ui-react'
import axios from 'axios'

import '../styles/style.css'

export default function Planets() {
  let offset = 1;
  const [ planets, setPlanets ] = useState([]);

  const loadTenPeople = () => {
    const tenPlanets = [];
      axios
      .get(`https://swapi.dev/api/planets/?page=${offset}`)
      .then(({ data }) => {
        data.results.forEach((p) => tenPlanets.push(p));
        setPlanets(oldPlanets => [...oldPlanets, ...tenPlanets])
      });
      offset += 1;
};

  const handleScroll = (e) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );
    if (currentHeight + 1 >= scrollHeight && offset <= 9) {
      loadTenPeople();
    }
  }

  useEffect(() => {
    loadTenPeople();
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <h1>Planets</h1>
      <Grid>
        {planets.map((p, i) => {
          return(
            <div className="grid" key={i}>
                <div className="card">
                  <div className="content">
                    <h3>{p.name}</h3>
                    <div className="description">
                      <strong>Diameter</strong>
                      <p>{p.diameter}</p>
                      <strong>Climate</strong>
                      <p>{p.climate}</p>
                      <strong>Gravity</strong>
                      <p>{p.gravity}</p>
                      <strong>Terrain</strong>
                      <p>{p.terrain}</p>
                      <strong>Population</strong>
                      <p>{p.population}</p>
                    </div>
                  </div>
                </div>
              </div>
          )
        })}
      </Grid>
      
    </>
  )
}
