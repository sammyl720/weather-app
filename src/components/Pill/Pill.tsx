import React, { useRef } from 'react'
import { color } from '../../types'
import classes from './Pill.module.scss';
type PillProps = {
  color: color;
}
const Pill:React.FC<PillProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null)
  return (
    <div ref={ref} className={`${classes.pill} ${classes[props.color]}`}>
      {props.children} <span className={classes.exit} onClick={e => {
        ref.current?.classList.add(classes.slideAway)
        setTimeout(() => {
          ref.current?.remove()

        }, 501)

      }}>X</span>
    </div>
  )
}

export default Pill
