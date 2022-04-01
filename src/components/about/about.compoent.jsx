import React,{useEffect} from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'
import Fade from 'react-reveal/Fade'

import { aboutData } from '../../data/data'
import './about.styles.scss'


const About = () => {
  
//   useEffect(()=>{
//   Aos.init({duration:1000})
// },[])

  const { info, desc, skills } = aboutData[0]

  return (
    <section id='about' data-scroll-section className='about'>
      <div data-scroll data-scroll-speed={-2} className='watermark'>
        about
      </div>

      <div data-scroll data-scroll-speed={1} className='head'>
        <h2>about</h2>
        <p>{info}</p>
      </div>

      <div data-scroll data-scroll-speed={3} className='tail'>
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
