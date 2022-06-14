import { useEffect, useContext } from 'react'
import mapboxgl from 'mapbox-gl'
import { UberContext } from '../context/uberContext'

const style = {
  wrapper: `flex-1 h-full w-full`,
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

const Map = () => {
  const {pickupCoordinates, dropoffCoordinates} = useContext(UberContext)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [79.163, 23.085],
      zoom: 3,
    })

    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates)
    }
  
    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates)
    }
  
    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([dropoffCoordinates, pickupCoordinates], {
        padding: 100,
      })
    }
  

  }, [pickupCoordinates, dropoffCoordinates])

  // console.log(pickupCoordinates, dropoffCoordinates)
  const addToMap = (map, coordinates) => {
    // console.log(coordinates)
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
  }
  

  return <div id='map' className={style.wrapper} />
}

export default Map