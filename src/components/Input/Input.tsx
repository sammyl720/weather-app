import React, { useState } from 'react'
import classes from './input.module.scss'
 
const Input = ({...rest}) => {
  const [focused, setFocused] = useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const handleOnFocus = () => {
    console.log('focusing')
    setFocused(true)
  }
  const handleOnBlur: () => void = () => {
    console.log('Blurring')
    setFocused(false)
  }

  return (
    <div className={`${classes.wrapper} ${rest.color ? classes[rest.color] : 'primary'}`} data-focused={focused}>
      <label className={classes.label} >{rest.name}</label>
      <input onFocus={handleOnFocus} onBlur={handleOnBlur} className={`${classes.input} `} {...rest}/>
    </div>
  )
}

export default Input
