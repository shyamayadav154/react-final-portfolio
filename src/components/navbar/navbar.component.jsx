import React, { useEffect } from 'react'
import './navbar.styles.scss'

import {animateScroll as scroll} from 'react-scroll'


const Navbar = () => {
  // useEffect(() => {
  //   Aos.init({ duration: 1000 })
  // }, [])
  return (
    <nav>
      <div className='nav-container'>
        <div>
          <a className='brand'>SNY</a>
        </div>

        <div className='links'>
          <ul>
            <li>
              <a href='#about'>about</a>
            </li>
            <li>
              <a href='#project'>projects</a>
            </li>
            <li>
              {' '}
              <a href='#contact'>contact</a>{' '}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
