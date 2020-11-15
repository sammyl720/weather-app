import React from 'react'
import classes from './FlexBox.module.scss';

type FlexProps = {
  direction: 'column' | 'row';
  alignItems: 'alignCenter' | 'alignStart' | 'alignEnd';
  justifyContent: 'justifyCenter' | 'justifyStart' | 'justifyEnd' | 'justifyEvenly' | 'justifyBetween' | 'justifyAround';
  addClasses?: string;
}
const FlexBox:React.FC<FlexProps> = (props) => {
  return (
    <div className={`${classes.flexBox} ${classes[props.direction]} ${classes[props.alignItems]} ${classes[props.justifyContent]} ${props.addClasses || ''}`}>
      {props.children}
    </div>
  )
}

export default FlexBox
