import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid } from 'semantic-ui-react'

import '../styles/style.css'

export default function People() { 
  let offset = 1;
  const [ people, setPeople ] = useState([]);

  const loadTenPeople = () => {
    const tenPeople = [];
      axios
      .get(`https://swapi.dev/api/people/?page=${offset}`)
      .then(({ data }) => {
        data.results.forEach((p) => tenPeople.push(p));
        setPeople(oldPeople => [...oldPeople, ...tenPeople])
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
      <h1>Peoples</h1>
        <Grid>
          {people.map((p, i) => {
            return(
              <div className="grid" key={i}>
                  <div className="card">
                    <div className="content">
                      <h3>{p.name}</h3>
                      <div className="description">
                        <strong>Height</strong>
                        <p>{p.height}</p>
                        <strong>Mass</strong>
                        <p>{p.mass}</p>
                        <strong>Hair Color</strong>
                        <p>{p.hair_color}</p>
                        <strong>Birthday Year</strong>
                        <p>{p.birth_year}</p>
                        <strong>Gender</strong>
                        <p>{p.gender}</p>
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
