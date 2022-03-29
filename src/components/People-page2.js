import React from 'react'
import { Card, Grid } from 'semantic-ui-react'

import '../styles/style.scss'

export default function PeopleP2({data}) {
  return (
    <>
      <h1>People 2</h1>
      {/* <Grid>
        {data.map((people, i) => {
          return(
            <div className="grid" key={i}>
              <div className="card">
                <div className="content">
                  <h3>{people.name}</h3>
                  <div className="description">
                    <strong>Height</strong>
                    <p>{people.height}</p>
                    <strong>Mass</strong>
                    <p>{people.mass}</p>
                    <strong>Hair Color</strong>
                    <p>{people.hair_color}</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </Grid> */}
    </>
  )
}
