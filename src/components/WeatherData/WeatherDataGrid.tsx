import React, { useContext, useState, useEffect } from 'react'
import { RootObject } from '../../api/WeatherAPI'
import LocationContext from '../../context/locationContext/LocationContext'
import fetchZip from '../../utils/CoordsToZip'
import locationCallPromise from '../../utils/GeoLocation'
import Grid from '../Grid/Grid'
import WeatherDataCard from './WeatherDataCard'

const WeatherDataGrid = () => {
  const { getLocationsWeather, locations, addZipcode } = useContext(LocationContext)
  const [weatherData, setWeatherData] = useState<RootObject[]>([])
  const fetchWeather = async () => {
    const list = await getLocationsWeather(locations)
    setWeatherData(list)

  }

  const getUserZipcode = async () => {
    const { latitude, longitude } = await locationCallPromise
    const zipcode = await fetchZip(latitude, longitude)
    addZipcode(zipcode)
  }
  useEffect(() => {
    getUserZipcode()
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    fetchWeather()
    // eslint-disable-next-line
  }, [locations])
  const weatherCards = weatherData.map((weatherData, index) => {
    return (
      <WeatherDataCard key={weatherData.location.lat} weatherData={weatherData} zipcode={locations[index]} />
    )
  })
  return (
    <Grid cols='1'>
      {weatherCards}
    </Grid>
  )
}

export default WeatherDataGrid
