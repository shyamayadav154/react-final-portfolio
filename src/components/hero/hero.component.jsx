import React,{useState,useEffect} from 'react'
import './hero.styles.scss'
import webDevIcon from '../../assets/ALL NIGHTER.png';
import Jump from 'react-reveal/Jump'
import Fade from 'react-reveal/Slide'
const Hero = () => {

  const [show, setShow] = useState(true)
  const controlNavbar = () => {
    if(window.scrollY>100){
      setShow(false)
      console.log(show);
    }
  }

useEffect(() => {
  window.addEventListener('scroll', controlNavbar)

  return () => {
    window.removeEventListener('scroll',controlNavbar)
  }
}, [])

  return (
    <section data-scroll-section  id='home' className='hero'>
      <div className='left'>
       
          <h1>Hi, my name is Shyamanand.</h1>
          <h1>
            I am a <span className='fd'>Frontend Developer</span>
          </h1>
       
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
          cumque, rem iste doloremque numquam quam adipisci sint veritatis modi.
          Voluptatem.
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
      <div className='right'>
        <img src={webDevIcon} alt='web dev' className='icon' />
      </div>
      <div className='scroll' >SCROLL DOWN &#8595;</div>
    </section>
  )
}

export default Hero