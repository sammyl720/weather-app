const locationCallPromise:Promise<Coordinates> = new Promise((resolve, reject) => {
  const onSuccess = (position) => {
    console.log(position)
    resolve(position.coords)
  }

  const onError = (error) => {
    reject(error)
  }
  window.navigator.geolocation.getCurrentPosition(onSuccess, onError, { enableHighAccuracy: true, maximumAge: 60000 * 60 })
})


export default locationCallPromise