import React from 'react'
import './contact.styles.scss'
import ContactInfoItem from './contactInfoItem.component.jsx'
import { MdEmail, MdLocalPhone } from 'react-icons/md'
import ContactForm from './contactForm.componet.jsx'

const Contacts = () => {
  return (
    <section id='contact'  className='contacts'>
      <div className='watermark'>
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