import React, { useEffect } from 'react'
import Aos from 'aos'
import './singleProject.styles.scss'
import {AiFillCaretRight} from 'react-icons/ai'

const SingleProject = ({ project }) => {
  const { img, title, desc, features, techStacks, url, repo } = project
  // useEffect(() => {
  //   Aos.init({ duration: 1000 })
  // }, [])

  return (
    <article  className='single-project'>
      <div className='left'>
        <img src={img} alt='project' />
      </div>
      <div className='right'>
        <h3>{title}</h3>
        <p>{desc}</p>
        <ul>
          {features.map((feature) => {
            const { id, name } = feature
            return <li key={id}><AiFillCaretRight/> {name}</li>
          })}
        </ul>
        <div className='tech'>
          {techStacks.map((techStack) => {
            const { id, name } = techStack
            return (
              <div key={id} className='u'>
                {name}
              </div>
            )
          })}
        </div>
        <div className='links'>
          <a target='_blank' href={url}>Live Demo &#62; </a>
          <a target='_blank' href={repo}>GitHub &#62;</a>
        </div>
      </div>
    </article>
  )
}

export default SingleProject
