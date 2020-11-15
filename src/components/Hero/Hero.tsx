import React from 'react'
import classes from './Hero.module.scss'
type heroProps = {
  /**
   * imageUrl: Path to hero image
   */
  imageUrl: string;
  /**
   * title: Leading text
   */
  title: string;
  /**
   * subText: Sub Text
   */
  subText: string;
}
const Hero:React.FC<heroProps> = (props) => {

  return (
    <div style={{ backgroundImage: `url(${props.imageUrl})`}} className={classes.hero}>
      <div  className={classes.backdrop}>
        <div className={classes.textContainer}>
          <div className={classes.textbox}>
            <h1 className={classes.title}>
              {props.title}
            </h1>
            <p className={classes.subtext}>
            {props.subText}
            </p>
          
          {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
