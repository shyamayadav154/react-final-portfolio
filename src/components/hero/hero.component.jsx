import React, { useState, useEffect } from 'react'
import './hero.styles.scss'
import webDevIcon from '../../assets/ALL NIGHTER.png'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import Button from '../button/button.compoent'
import Trails from '../../animation/trails'

const Hero = () => {
  const { scroll } = useLocomotiveScroll()
 const [open, set] = useState(true)
  const [show, setShow] = useState(true)

  const controlNavbar = () => {
    console.log('working')
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
      <div data-scroll data-scroll-speed={-1.75} onClick={() => set(state => !state) }className='left'>
        
          <h1>Hi, my name is Shyamanand.</h1>
          <h1>
            I am a <span className='fd'>Frontend Developer</span>
          </h1>

          <p>
            I enjoy solving complex problems. I provide an effective & efficient
            solution. Nothing brings me more excitement and motivation than
            building something out of nothing.
          </p>
          <div className='btn-container'>
            <Button buttonType='inverted'>
              <a
                target='_blank'
                href='https://drive.google.com/file/d/1m3lRAU-xKP0fb3Fx0HO8lbgbEJJPtwMr/view?usp=sharing'
              >
                Resume
              </a>
            </Button>

            <Button onClick={() => scroll.scrollTo('#contact')}>
              <a href='#'>get in touch</a>
            </Button>
          </div>
     
      </div>
      <div className='right'>
        <img src={webDevIcon} alt='web dev' className='icon' />
      </div>
      <div
        data-scroll
        data-scroll-class='op'
        data-scroll-offset='top'
        className='scroll'
        style={{ display: show ? 'block' : 'none' }}
      >
        SCROLL DOWN &#8595;
      </div>
    </section>
  )
}

export default Hero
