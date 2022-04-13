import React, { useEffect, useRef } from 'react'
import './navbar.styles.scss'

import { useLocomotiveScroll } from 'react-locomotive-scroll'

const Navbar = () => {
  const { scroll } = useLocomotiveScroll()

  return (
    <nav data-scroll-sticky >
      <div id='navb' className='nav-container'>
        <div>
          <a href='./' className='brand'>
            SNY
          </a>
        </div>

        <div className='links'>
          <ul>
            <li>
              <a
                onClick={() => {
                  scroll.scrollTo('#about')
                }}
                href='#'
              >
                about
              </a>
            </li>
            <li>
              <a onClick={() => scroll.scrollTo('#project')} href='#'>
                projects
              </a>
            </li>
            <li>
              <a onClick={() => scroll.scrollTo('#contact')} href='#'>
                contact
              </a>{' '}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
