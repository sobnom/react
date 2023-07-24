import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
  <nav>
    <div className='container'>
        <div className='nav_wrapper'>
            <div className='logo'>
               <img src="src/assets/a.png" alt="" />
            </div>
            <div className='menu'>
            <ul>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="about">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="service">
                        Service
                    </NavLink>
                </li>
                <li>
                    <NavLink to="blog">
                        Blog
                    </NavLink>
                </li>
              
               
            </ul>
            </div>

        </div>
    </div>
  </nav>
  )
}

export default Navbar