import React, { useRef, useState } from 'react'
import { color } from '../../types'
import classes from './AppBar.module.scss'

type AppBarProps = {
  color?: color;
  Logo: string;
  Links?: React.FC;
}
const AppBar:React.FC<AppBarProps> = (props) => {
  const { Links } = props
  const burgerRef = useRef<HTMLElement | null>(null)
  const [toggle, setToggle] = useState(false)
  return (
    <div className={`${classes.appbar} ${ props.color ? props.color : 'primary' }`}>
      <div className={classes.bigScreen}>
        
        <div className={classes.Logo}>
          {props.Logo.match(/(.png|.gif|jpe?g|.svg)/i) ? (
            <img className={classes.logoImage} src={props.Logo} alt="LOGO"/>
          ) : (
          <h3 className={classes.logoText}>{props.Logo}</h3>
          )}
        </div>
        <nav className={classes.nav}>
          {Links && <Links />}
        </nav>
      </div>
      <div className={classes.smallScreen} >
        {Links && (<i className={`${classes.burger} fas ${toggle ? 'fa-times' : 'fa-bars'} fa-2x`} onClick={() => {
          setToggle(!toggle)
          }} ref={burgerRef} />
        )}
        {props.Logo && (
        <div className={classes.Logo}>
          {props.Logo.match(/(.png|.gif|jpe?g|.svg)/i) ? (
            <img className={classes.logoImage} src={props.Logo} alt="LOGO"/>
          ) : (
          <h3 className={classes.logoText}>{props.Logo}</h3>
          )}
        </div>
      )}
        <nav className={classes.smallNav} data-toggle={toggle}>
          {Links && <Links />}
        </nav>

      </div>
      {Links && (<div className={classes.backdrop} data-toggle={toggle} onClick={() => {
        setToggle(!toggle)
      }} />)}
    </div>
  )
}

export default AppBar
