import React, { useEffect, useRef } from 'react'
import './navbar.styles.scss'
import { motion } from 'framer-motion'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
const github = 'https://github.com/shyamayadav154';
const linkedin = 'https://www.linkedin.com/in/shyamanand-yadav-52a8a012a/'

const links = [
  { id: 1, name: 'about', href: '#' },
  { id: 2, name: 'projects', href: '#' },
  { id: 3, name: 'contact', href: '#' },
  { id: 4, name: 'github', href: github },
  { id: 5, name: 'linkedin', href:linkedin },
];

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
        <div className='logo'>
          <div className='logo-c'>
            <img
              height='100%'
              width='100%'
              src='https://media-exp1.licdn.com/dms/image/C4D03AQEU8pGlezVH6A/profile-displayphoto-shrink_800_800/0/1650465477658?e=1657756800&v=beta&t=U0yHNhY5qi8gG6oUb96uSMGATD1GMV2501jsnNzgQAo'
              alt=''
            />
          </div>
          <a href='./' className='brand'>
            Shyamanand Yadav
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
  );
}

export default Navbar
