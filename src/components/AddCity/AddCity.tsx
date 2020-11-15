import React, {useState, useContext, useRef } from 'react'
import LocationContext from '../../context/locationContext/LocationContext'
import classes from './AddCity.module.scss'
const AddCity = () => {
  const {  addZipcode } = useContext(LocationContext)
  const [zip, setZip] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const submitData = () => {
    const zipReg = /^\d{5}$/
    if(zipReg.test(zip)){
      console.log(`${zip} add`)
      addZipcode(zip)
      setZip('')
      if(null !== inputRef.current){
        inputRef.current.blur()
      }
    } else {
      alert('Please enter a valid zipcode')
    }
  }
  const onSubmit = e => {
    e.preventDefault()
    submitData()
  }
  return (
    <form onSubmit={onSubmit} className={classes.addCity}>
      <div className={classes.wrapper}>
      <input type="number"
        className={classes.input}
        pattern='^\d{5}$'
        value={zip}
        placeholder='Zipcode'
        inputMode='numeric'
        name='zipcode'
        ref={inputRef}
        autoComplete='false'
        onKeyDown={e => {
          if(e.key === 'Enter'){
            submitData()
          }
        }}
        onChange={e => setZip(e.target.value)} 
      />
      </div>
      <button type='submit' className={classes.btn}>
        <i className='fas fa-search'></i>
      </button>
    </form>
  )
}

export default AddCity
