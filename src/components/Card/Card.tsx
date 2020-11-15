import React from 'react'
import { color } from '../../types'
import classes from './card.module.scss'

type CardProps = {
  color?: color;
  bgImageUrl?: string;
  addClasses?: string;
}
const Card:React.FC<CardProps> = (props) => {
  return (
    <div style={{
      backgroundImage: props.bgImageUrl ? `url(${props.bgImageUrl})` : ''
    }} className={`${classes.card} ${props.color || ''} ${props.addClasses || ''}`}>
      {props.children}
    </div>
  )
}

export default Card
