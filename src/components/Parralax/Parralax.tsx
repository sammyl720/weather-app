import React, { useRef, useEffect } from 'react'
import classes from './Parallax.module.scss'

type ParaProps = {
  imageUrl: string;
  addClasses?: string;
  width: string | number;
  height: string | number;
}
const Parralax:React.FC<ParaProps> = ({ imageUrl, addClasses, width, height, children }) => {
  const divRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    divRef.current!.style.backgroundImage = `url('${imageUrl}')`
  }, [imageUrl])
  return (
    <div ref={divRef} className={`${classes.parralax} ${addClasses || ''}`} style={{ width, height}}>
      {children}
    </div>
  )
}

export default Parralax
