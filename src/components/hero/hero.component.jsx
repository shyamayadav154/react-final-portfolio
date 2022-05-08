import React, { useState, useEffect } from 'react'
import './hero.styles.scss'
import webDevIcon from '../../assets/ALL NIGHTER.png'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import Button from '../button/button.compoent'
import Trails from '../../animation/trails'
import { motion } from 'framer-motion'

const listVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      type: 'spring',
      mass: 0.4,
      damping: 5,
      when: 'beforeChildren',
      staggerChildren: 0.4,
    },
  },
}

const itemVariant = {
  hidden: {
    opacity: 0,
    y: -50,
    scaleY: 0,
  },
  show: {
    opacity: 1,
    y: 0,
    scaleY: 1,
  },
}

const Hero = () => {
  const { scroll } = useLocomotiveScroll()

  const [show, setShow] = useState(true)

  const controlNavbar = () => {
    if (window.scrollY > 100) {
      setShow(false)
    } else {
      setShow(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)

    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])

  return (
    <section data-scroll-section id='home' className='hero '>
      <motion.div
        variants={listVariant}
        initial='hidden'
        animate='show'
        data-scroll
        data-scroll-speed={-1.75}
        className='left'
      >
        <motion.h1 variants={itemVariant}>Hi, my name is Shyamanand.</motion.h1>
        <motion.h1 variants={itemVariant}>
          I am a <span className='fd'>Frontend Developer</span>
        </motion.h1>

        <motion.p variants={itemVariant}>
          I enjoy solving complex problems. I provide an effective & efficient
          solution. Nothing brings me more excitement and motivation than
          building something out of nothing.
        </motion.p>
        <motion.div variants={itemVariant} className='btn-container'>
          <Button
            buttonType='inverted'
            onClick={() => scroll.scrollTo('#contact')}
          >
            <a href='#'>get in touch</a>
          </Button>
          <Button>
            <a
              target='_blank'
              href='https://drive.google.com/file/d/13MDBhldojjGgQUTLFp0vsBMle7wwjIuh/view?usp=sharing'
            >
              Resume
            </a>
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
        className='right'
      >
        <img src={webDevIcon} alt='web dev' className='icon' />
      </motion.div>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
        className='scroll'
        style={{ display: show ? 'block' : 'none' }}
      >
        SCROLL DOWN &#8595;
      </motion.div>
    </section>
  );
}

export default Hero
