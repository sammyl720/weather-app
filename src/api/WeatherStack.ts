import axios from 'axios'
import { RootObject } from './WeatherStackTypes'
import fetchZip from '../utils/CoordsToZip'
const BASE_URL = 'http://api.weatherstack.com/forecast?'

let query = '11230'

let units = 'f'

const access_key = process.env.REACT_APP_WEATHERSTACK_ACCESS_KEY
const retrieveWeatherData = async (q = query, u = units) => {
  try {
    const zipReg = /^\d{5}$/
    if(!zipReg.test(q)){
      // query is not a zipcode
      const coordsArray = q.split(',')
      q = await fetchZip(coordsArray[0], coordsArray[1])
    }
    const reqUrl = `${BASE_URL}access_key=${access_key}&query=${q}&units=${u}`
    console.log(reqUrl)
    const data: RootObject = await axios.get(reqUrl)
    return data
  } catch (error) {
    return error
  }
}

export default retrieveWeatherData