import React from 'react'
import './hero.styles.scss'
import webDevIcon from '../../assets/ALL NIGHTER.png';

import Fade from 'react-reveal/Slide'
const Hero = () => {

  return (
    <section id='home' data-scroll-section className='hero'>
      <Fade top cascade>
        <div className='left'>
          <h1>Hi, my name is Shyamanand.</h1>
          <h1>
            I am a <span className='fd'>Frontend Developer</span>
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            cumque, rem iste doloremque numquam quam adipisci sint veritatis
            modi. Voluptatem.
          </p>
          <div className='btn-container'>
            <button className='btn ' id='resume'>
              <a
                target='_blank'
                href='https://drive.google.com/file/d/1YQ_tmMLgy_w75-C5gdxS91iesjdL6fjV/view?usp=sharing'
              >
                Resume
              </a>
            </button>
            <button className='btn'>
              <a href=''>get in touch</a>
            </button>
          </div>
        </div>
      </Fade>
      <div className='right'>
        <img src={webDevIcon} alt='web dev' className='icon' />
      </div>
      <div className='scroll'>SCROLL DOWN &#8595;</div>
    </section>
  )
}

export default Hero