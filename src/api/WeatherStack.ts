import axios from 'axios'
import { RootObject } from './WeatherAPI'
import fetchZip from '../utils/CoordsToZip'
import Sample from './Sample'
const BASE_URL = 'https://api.weatherapi.com/v1/current.json?'

let query = '11230'

let units = 'f'

const access_key = process.env.REACT_APP_WEATHERAPI_ACCESS_KEY
const retrieveWeatherData = async (q = query, u = units) => {
  try {
    const zipReg = /^\d{5}$/
    if(!zipReg.test(q)){
      // query is not a zipcode
      const coordsArray = q.split(',')
      q = await fetchZip(coordsArray[0], coordsArray[1])
    }
    const reqUrl = `${BASE_URL}key=${access_key}&query=${q}`
    // console.log(reqUrl)
    type Response = {
      data: RootObject;
    }
    const data: Response = await axios.get(reqUrl)
    console.log(data)
    return data.data
  } catch (error) {
    return Sample
  }
}

export default retrieveWeatherData