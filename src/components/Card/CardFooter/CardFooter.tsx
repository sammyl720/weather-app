import React from 'react'
import classes from './CardFooter.module.scss'

type FooterType = {
  bottom?: boolean;
}
const CardFooter:React.FC<FooterType> = ({ children, bottom = true }) => {
  const style:{ bottom?: number, top?: number} = {}
  if (bottom) {
    style.bottom = 0;
  } else {
    style.top = 0;
  }
  return (
    <div className={classes.footer} style={style }>
      {children}
    </div>
  )
}

export default CardFooter
