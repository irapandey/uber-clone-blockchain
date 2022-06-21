import { useEffect, useContext } from 'react'
import mapboxgl from 'mapbox-gl'
import { UberContext } from '../context/uberContext'


const style = {
  wrapper: `flex-1 h-full w-full`,
}

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN

const Map = () => {
  const {pickupCoordinates, dropoffCoordinates,routeUber} = useContext(UberContext)
  // console.log(pickupCoordinates, dropoffCoordinates)
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/irapandey/cl4o4pc6c004w14onapi79a41',
      center: [79.163, 23.085],
      zoom: 3,
    });
    
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
      map.on('load', () => {
        map.addSource('route', {
        'type': 'geojson',
        'data': {
        'type': 'Feature',
        'properties': {},
        'geometry': {
        'type': 'LineString',
        'coordinates': routeUber,      }
        }
        });
        map.addLayer({
        'id': 'route',
        'type': 'line',
        'source': 'route',
        
        'layout': {
        'line-join': 'round',
        'line-cap': 'round',
        },
        'paint': {
        'line-color': '#ffa500',
        'line-width': 5,
        }
        });
        });
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