import React from 'react'
import './contact.styles.scss'
import ContactInfoItem from './contactInfoItem.component'
import { MdEmail, MdLocalPhone } from 'react-icons/md'
import ContactForm from './contactForm.componet'

const Contacts = () => {
  return (
    <section id='contact' data-scroll-section className='contacts'>
      <div data-Scroll data-scroll-speed={-1} className='watermark'>
        contact
      </div>
      <div className='head'>
        <h2>contact</h2>
        <p>get in touch</p>
      </div>

      <div className='tail'>
      <div className="left">
          <ContactInfoItem icon={<MdEmail/>} text='shyamayadav154@gmail.com' />
          <ContactInfoItem icon={<MdLocalPhone/>} text='+91 76781 03411' />
          <ContactInfoItem  text='Delhi, India' />
      </div>
          <div className="right">
                <ContactForm/>
          </div>
      </div>
    </section>
  )
}

export default Contacts