import React from 'react'
import './contactInforItem.styles.scss'

import { MdPlace } from 'react-icons/md'

const ContactInfoItem = ({icon =<MdPlace/>, text ='I need text'}) => {
  return (
    <div className='contact-info-item'>
        <div className='item-icon'>{icon}</div>
        <div className='text'>{text} </div>
    </div>
  )
}

export default ContactInfoItem