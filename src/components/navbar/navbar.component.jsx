import React, { useEffect } from 'react'
import './navbar.styles.scss'
import Fade from 'react-reveal/Slide'
import Scroll from 'react-scroll'
let ScrollLink = Scroll.Link

const Navbar = () => {
 
  return (
    <nav >
      <div className='nav-container'>
        <div>
          <a href='./' className='brand'>
            SNY
          </a>
        </div>

        <div className='links'>
         
            <ul>
              <li>
                <a
                  href='./#about'
                 
                  
                >
                  about
                </a>
              </li>
              <li>
                <a  href='./#project'>
                  projects
                </a>
              </li>
              <li onClick={()=>window.scroll(0,1000)}>
                <a href='./#contact'>contact</a>{' '}
              </li>
            </ul>
      
        </div>
      </div>
    </nav>
  )
}

export default Navbar
