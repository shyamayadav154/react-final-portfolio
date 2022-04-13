import React from 'react'
import './sectionTitle.styles.scss'
const SectionTitle = ({title,children}) => {
  return (
    <>
      <div data-scroll  data-scroll-speed={-2} className='watermark'>{title}</div>

      <div data-scroll data-scroll-speed={-1} className='head'>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </>
  )
}

export default SectionTitle