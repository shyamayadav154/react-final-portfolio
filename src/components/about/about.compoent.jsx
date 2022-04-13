import React, { useEffect, useState } from 'react'

import { aboutData } from '../../data/data'
import './about.styles.scss'

import SectionTitle from '../section-title/sectionTitle.component'



const About = () => {
  

  const { info, desc, skills } = aboutData[0]



  return (
    <section data-scroll-section  id='about' className='about'>
      <SectionTitle title='about'>{info}</SectionTitle>

      <div data-scroll data-scroll-speed={1} className='tail'>
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
