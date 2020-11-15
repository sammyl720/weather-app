import { createContext } from 'react'
import { RootObject } from '../../api/WeatherAPI'

const LocationContext = createContext<{ removeZipcode: (zip:string) => void, greet: string, locations: string[], loading: boolean
  , getLocationsWeather: (locations: string[]) => RootObject[], addZipcode: (zip: string) => void 
}>({ greet: 'test', locations: ['33109'], loading: false, getLocationsWeather: (locations: string[]) => [],  addZipcode: (zip: string) => {}, removeZipcode: (zip:string) => {}  })

export default LocationContext