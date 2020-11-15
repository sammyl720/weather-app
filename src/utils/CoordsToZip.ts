import reverseGeocode from 'latlng-to-zip'

const key = process.env.REACT_APP_GEOCODE_KEY
const fetchZip = async (lat, lng) => {
  try {
    const zip = await reverseGeocode({latitude:lat, longitude: lng}, key)
    return zip;
  } catch (error) {
    console.log(error)
    return error
  }
}

export default fetchZip