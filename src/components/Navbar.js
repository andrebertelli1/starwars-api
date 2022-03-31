import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdModeNight, MdLightMode } from 'react-icons/md'

import '../styles/navbar.css'

export default function Navbar() {

    let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

    const [state, setState] = useState([{
        active: false
    }
    ]);

    if (localStorage) {
        theme = localStorage.getItem("theme");
    }

    if (theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme)
    } else {
        body.classList.add(lightTheme)
    }

    const switchTheme = (e) => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme)
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
            
        } else {
            body.classList.replace(lightTheme, darkTheme)
            e.target.classList.add(clickedClass);
            localStorage.setItem("theme", "dark")
            theme = darkTheme;
        }
    }

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
                       
                        <div className="switch-checkbox">
                        <label className="switch">
                            <input
                                type="checkbox"
                                className={theme === "dark" ? clickedClass : ""}
                                id="darkMode"
                                onChange={(e) => switchTheme(e)} 
                                onClick={() => setState({active: !state.active})} />
                            <span className="slider round"> </span>
                        </label>
                        <label 
                            className={state.active ? "hide" : "" }
                            id="icon"
                        >
                            <MdModeNight />
                        </label>
                        <label 
                            className={state.active ? "" : "hide"}
                            id="icon"
                        >
                            <MdLightMode />
                        </label>

                        </div>
                        
                    </ul>
                    
                </div>
            </div>
        </header>
    </div>
  )
}
