import React,{useEffect,useState} from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'
import Fade from 'react-reveal/Fade'

import { aboutData } from '../../data/data'
import './about.styles.scss'

import * as Scroll from 'react-scroll'
let Element = Scroll.Element


const About = () => {

  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = ()=>{
 
    let position = window.pageYOffset
    setOffsetY(position)}
    console.log(offsetY);
  
useEffect(() => {
  
window.addEventListener("scroll",handleScroll)


  return () => window.removeEventListener("scroll",handleScroll)
}, [])


  const { info, desc, skills } = aboutData[0]

  return (
    <section data-scroll-section className='about'>
      <div
        //  style={{ transform: `translateX(${offsetY * 0.2}px)` }}
        data-Scroll
        data-scroll-speed={-1}
        className='watermark'
      >
        about
      </div>

      <div
        // style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
        data-scroll
        data-scroll-speed={1}
        className='head'
      >
        <h2>about</h2>
        <p>{info}</p>
      </div>

      <div
        // style={{ transform: `translateY(-${offsetY * 0.4 - 220}px)` }}
        data-scroll
        data-scroll-speed={1.5}
        className='tail'
      >
        <div className='left'>
          <h3>Get to know me!</h3>
          {desc?.map((item) => (
            <p key={item.id}>{item.paragraph}</p>
          ))}
        </div>

        <div className='right'>
          <h3>Skills</h3>
          <div className='skills'>
            {skills.map((skill) => (
              <div key={skill.id} className='skills-skill'>
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
