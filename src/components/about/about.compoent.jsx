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
    <section className='about'>
      <div
       
        
        className='watermark'
      >
        about
      </div>

      <div
       
        
        className='head'
      >
        <h2>about</h2>
        <p>{info}</p>
      </div>

      <div
        
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
