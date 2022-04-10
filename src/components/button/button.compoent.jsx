import React from 'react'
import './button.styles.scss'
const Button = ({children,buttonType,...prop}) => {

  return (
    <button {...prop} className={`btnc ${buttonType}`}>{children}</button>
  )
}

export default Button