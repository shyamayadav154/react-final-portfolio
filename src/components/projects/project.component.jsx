import React,{useEffect} from 'react'
import { useLocomotiveScroll } from 'react-locomotive-scroll'
import './project.styes.scss'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { projectData } from '../../data/data'
import SingleProject from './singleProject.component.jsx'


const Projects = () => {
   
  // useEffect(() => {
    
  //   Aos.init({duration:1000})
  
  // }, [])
  

  return (
    <section id='project' data-scroll-section className='projects'>
      <div data-scroll data-scroll-speed={-2} className='watermark'>
        projects
      </div>

      <div data-scroll data-scroll-speed={1} className='head'>
        <h2>projects</h2>

        <p>
          Here you will find some of the personal projects that I created with
          each project containing its own Source Code and Live Demo
        </p>
      </div>

      <div data-scroll data-scroll-speed={1} className='tail'>
        {projectData.map((project) => {
          return <SingleProject key={project.id} project={project} />
        })}
      </div>
    </section>
  )
}

export default Projects
