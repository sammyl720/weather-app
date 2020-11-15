import React from 'react'
import ButtonType from './Button.interface'
import classes from './Button.module.scss'
const Button:React.FC<ButtonType> = ({ children, ...rest}) => {
  return (
    <button className={`${classes.btn} ${rest.color ? classes[rest.color] : classes.primary} ${rest.size ? classes[rest.size] : classes['md']}`} >
      {children}
    </button>
  )
}

export default Button
