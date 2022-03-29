import React from 'react'
import { Link } from 'react-router-dom'

import '../styles/navbar.scss'

export default function Navbar() {
  return (
    <div className="Navbar">
    <header>
        <div className="menu-section">
            <div className="container">
                <ul>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="people">
                            People
                        </Link>
                    </li>
                    <li>
                        <Link to="planets">
                            Planets
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</div>
  )
}
