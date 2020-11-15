import React, {useState, useContext, useRef } from 'react'
import LocationContext from '../../context/locationContext/LocationContext'
import classes from './AddCity.module.scss'
const AddCity = () => {
  const {  addZipcode } = useContext(LocationContext)
  const [zip, setZip] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const onSubmit = e => {
    const zipReg = /^\d{5}$/
    e.preventDefault()
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
  return (
    <form onSubmit={onSubmit} className={classes.addCity}>
      <input type="number"
        className={classes.input}
        pattern='^\d{5}$'
        value={zip}
        placeholder='Zipcode'
        inputMode='numeric'
        name='zipcode'
        ref={inputRef}
        autoComplete='false'
        onChange={e => setZip(e.target.value)} 
      />
      <button type='submit' className={classes.btn}>
        <i className='fas fa-search'></i>
      </button>
    </form>
  )
}

export default AddCity
