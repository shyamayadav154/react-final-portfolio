import React, { useEffect, useRef } from 'react'
import './navbar.styles.scss'
import { motion } from 'framer-motion'
import { useLocomotiveScroll } from 'react-locomotive-scroll'

const links = [
  { id: 1, name: 'about' },
  { id: 2, name: 'projects' },
  { id: 3, name: 'contact' },
]

const listVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
     type:'spring',
     mass:0.4,
     damping:5,
     when:'beforeChildren',
      staggerChildren: 0.3,
    },
  },
}

const itemVariant = {
  hidden: {
    opacity: 0,
    y: -50,
  },
  show: {
    opacity: 1,
    y: 0,
  },
}

const Navbar = () => {
  const { scroll } = useLocomotiveScroll()

  return (
    <nav data-scroll-sticky>
      <div id='navb' className='nav-container'>
        <div>
          <a href='./' className='brand'>
            SNY
          </a>
        </div>

        <div className='links'>
          <motion.ul variants={listVariant} initial='hidden' animate='show'>
            {links.map((link, i) => (
              <motion.li
                variants={itemVariant}
                // transition={{ duration: 0.4, delay: i * 0.2 }}
                key={link.id}
                onClick={() => scroll.scrollTo(`#${link.name}`)}
              >
                <a href='#'>{link.name}</a>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
