import React from 'react'
import './footer.styles.scss'

import { useLocomotiveScroll } from 'react-locomotive-scroll'

const Footer = () => {
  const { scroll } = useLocomotiveScroll()

  return (
    <footer data-scroll-section>
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
        <span
          onClick={() => {
            scroll.start()
            scroll.scrollTo(-100, -100)
          }}
        >
          <a href='#'>top</a>
        </span>
      </div>
    </footer>
  )
}

export default Footer
