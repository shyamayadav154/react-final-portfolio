import React from 'react'
import './contact.styles.scss'
import ContactInfoItem from './contactInfoItem.component.jsx'
import { MdEmail, MdLocalPhone } from 'react-icons/md'
import ContactForm from './contactForm.componet.jsx'
import SectionTitle from '../section-title/sectionTitle.component'

const Contacts = () => {
  return (
    <section id='contact'  className='contacts'>
    
    <SectionTitle title='contact' >get in touch</SectionTitle>

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