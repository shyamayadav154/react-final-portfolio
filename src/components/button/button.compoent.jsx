import React from 'react'
import './button.styles.scss'
const Button = ({children,buttonType,...props}) => {

  return (
    <button {...props} className={`btnc ${buttonType}`}>{children}</button>
  )
}

export default Button