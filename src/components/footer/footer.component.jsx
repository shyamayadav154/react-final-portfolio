import React from 'react'
import './footer.styles.scss'
import * as Scroll from 'react-scroll'
let scroll = Scroll.animateScroll

const Footer = () => {
  return (
    <footer >
      <div className='copyright'>
        <p>Copyright &#169; Shyamanand Yadav </p>
      </div>
      <div className='links'>
        <a target='_blank' href='https://github.com/shyamayadav154'>
          github
        </a>
        <a
          target='_blank'
          href='https://www.linkedin.com/in/shyamanand-yadav-52a8a012a/'
        >
          linkedin
        </a>
        <a href='mailto:shyamayadav154@gmail.com'>email</a>
        <span >
          <a  href='#home'>top</a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
