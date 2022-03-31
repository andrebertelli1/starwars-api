import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/style.scss'

export default function Home() {
  return (
    <div className="Home">
      <div className="content">
        <h2>Veja os todos os nomes dos personagens e planetas de Star Wars com algumas características!</h2>
        
        <Link to="people">Peoples</Link>
        <Link to="planets">Planets</Link>
      </div>
    </div>
  )
}
