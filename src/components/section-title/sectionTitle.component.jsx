import React from 'react'
import './sectionTitle.styles.scss'
const SectionTitle = ({title,children}) => {
  return (
    <>
      <div className='watermark'>{title}</div>

      <div className='head'>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </>
  )
}

export default SectionTitle