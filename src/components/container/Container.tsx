import React from 'react'
import classes from './container.module.scss'

type ContainerProps = {
  addClasses?: string;
  fluid?: boolean
}
const Container:React.FC<ContainerProps> = ({ children, fluid=false, addClasses }) => {
  return (
    <div className={(fluid ? classes.fluid : classes.container) + ' ' + addClasses}>
      {children}
    </div>
  )
}

export default Container
