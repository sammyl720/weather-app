import React, { useContext } from 'react'
import LocationContext from '../../context/locationContext/LocationContext'
import Avatar from '../Avatar/Avatar'
import Card from '../Card/Card'
import classes from './WeatherData.module.scss'

const WeatherDataCard = ({ weatherData, zipcode }) => {
  const { removeZipcode } = useContext(LocationContext)
  const removeCity = async () => {
    // const { lat, lon } = weatherData.data.location
    // const zipcode = await fetchZip(lat, lon)
    removeZipcode(zipcode)
  }
  return (
      <div className={classes.wrapper}>
        <Card addClasses='p-1 bordered centered m-1 fill classic'>
        <span className={classes.delete} onClick={() => {
          removeCity()
        }}>X</span>
        <h3 style={{ fontSize: '2rem'}}>{weatherData.location.name}</h3>
        <h5>{weatherData.location.region}</h5>
        <h2>{weatherData.current.temp_f}&deg;</h2>
        <p>{weatherData.current?.condition.text}</p>
        <Avatar imgUrl={weatherData.current?.condition.icon} size='lg' addClasses='m-2'></Avatar>
      </Card>
      </div>
  )
}

export default WeatherDataCard
