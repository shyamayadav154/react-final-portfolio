import React,{useEffect} from 'react'

import './project.styes.scss'

import { projectData } from '../../data/data'
import SingleProject from './singleProject.component.jsx'


const Projects = () => {
   


  return (
    <section id='project' data-scroll-section className='projects'>
      <div data-scroll data-scroll-speed={-1} className='watermark'>
        projects
      </div>

      <div data-scroll data-scroll-speed={1} className='head'>
        <h2>projects</h2>

        <p>
          Here you will find some of the personal projects that I created with
          each project containing its own Source Code and Live Demo
        </p>
      </div>

      <div data-scroll data-scroll-speed={1.5} className='tail'>
        {projectData.map((project) => {
          return <SingleProject key={project.id} project={project} />
        })}
      </div>
    </section>
  )
}

export default Projects
