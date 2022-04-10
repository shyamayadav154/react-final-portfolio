import React, { useEffect, useState } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'
import Fade from 'react-reveal/Fade'

import { aboutData } from '../../data/data'
import './about.styles.scss'

import * as Scroll from 'react-scroll'
import SectionTitle from '../section-title/sectionTitle.component'


const About = () => {
  

  const { info, desc, skills } = aboutData[0]

  return (
    <section id='about' className='about'>
     

      <SectionTitle title='about' >{info}</SectionTitle>

      <div className='tail'>
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
