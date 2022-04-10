import React,{useEffect} from 'react'

import './project.styes.scss'

import { projectData } from '../../data/data'
import SingleProject from './singleProject.component.jsx'
import SectionTitle from '../section-title/sectionTitle.component'


const Projects = () => {
   


  return (
    <section id='project' className='projects'>
     
      <SectionTitle title='projects'>
       
        Here you will find some of the personal projects that I created with
        each project containing its own Source Code and Live Demo
      </SectionTitle>

      <div className='tail'>
        {projectData.map((project) => {
          return <SingleProject key={project.id} project={project} />
        })}
      </div>
    </section>
  )
}

export default Projects
