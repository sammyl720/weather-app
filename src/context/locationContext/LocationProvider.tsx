import React, { useReducer } from 'react'
import retrieveWeatherData from '../../api/WeatherStack'
import { RootObject } from '../../api/WeatherAPI'
import LocationContext from './LocationContext'
import LocationReducer from './LocationReducer'
const LocationProvider = ({ children }) => {
  const initialState = {
    greet: 'Welcome to Weather App',
    locations: [],
    loading: false
  }
  const [state, dispatch] = useReducer(LocationReducer, initialState)

  const addZipcode = zip => {
    dispatch({ type: 'ADD_ZIPCODE', payload: zip })
  }
  const removeZipcode = zip => {
    dispatch({ type: 'REMOVE_ZIPCODE', payload: zip })
  }


  const getLocationsWeather = async (locations) => {
    let weatherDataList: RootObject[] = []
    try {
      weatherDataList = await Promise.all(locations.map(async (zip): Promise<RootObject> => {
        try {
          const result = await retrieveWeatherData(zip)
          return result
        } catch (error) {
          const result = await retrieveWeatherData('90209')
          return result
        }
      }))
      return weatherDataList
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <LocationContext.Provider value={{
      ...state,
      getLocationsWeather,
      addZipcode,
      removeZipcode
    }}>
      { children }
    </LocationContext.Provider>
  )
}

export default LocationProvider
