const getDuration = async (req, res) => {
  let pick =  req.body.pickupCoordinates
  pick = pick.replace(",","%2C")
  let drop = req.body.dropoffCoordinates
  drop = drop.replace(",","%2C")
  const mapboxUrl = `${process.env.MAPBOX_DIRECTIONS_API_URL}${pick}%3B${drop}?alternatives=true&geometries=geojson&overview=full&steps=true&access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
  // console.log(mapboxUrl)
  try {
    const response = await fetch(mapboxUrl)
    const data = await response.json()

    // console.log(data.routes[0].geometry.coordinates)

    res.status(200).send({ message: 'success', data: data.routes[0].duration / 1000})
  } catch (error) {
    res.status(500).send({ message: 'error', data: error.message })
  }
}

    export default getDuration