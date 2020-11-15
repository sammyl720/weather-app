import React from 'react'
import classes from './Modal.module.scss'

const Modal = (props, ref) => {
  const dismissModal = () => {
    ref.current.classList.add(classes.slideAway)
    setTimeout(() => {
      ref.current.style.display = 'none'
      ref.current.classList.remove(classes.slideAway)
    }, 450)
  }
  return (
    <div ref={ref} className={classes.wrapper}>
      <div className={classes.backdrop} onClick={() => {
        console.log('Backdrop clicked')
        dismissModal()
      }} />
      <div className={classes.modal}>
        {props.children}
        <span className={classes.dismiss} onClick={dismissModal}>
          X
        </span>
      </div>
      
    </div>
  )
}

export default React.forwardRef(Modal)
