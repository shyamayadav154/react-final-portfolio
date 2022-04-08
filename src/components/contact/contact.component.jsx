import React from 'react'
import './contact.styles.scss'
import { MdEmail, MdLocalPhone } from 'react-icons/md'
import SectionTitle from './sectionTitle.component'
import ContactInfoItem from './contactInfoItem.component'
import ContactForm from './contactForm.component'

function Contact() {
  return (
    <section data-scroll-section className='contact'>
      <div className='container'>
      
        <div className='contactSection__wrapper'>
          <div className='left'>
            <ContactInfoItem icon={<MdLocalPhone />} text='+91 76781 03411' />
            <ContactInfoItem icon={<MdEmail />} text='shyamayadav154@gmail.com' />
            <ContactInfoItem text='Delhi, India' />
          </div>
          <div className='right'>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact