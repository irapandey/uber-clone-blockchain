const getDuration = async (req, res) => {
  const mapboxUrl = `${process.env.MAPBOX_DIRECTIONS_API_URL}/${req.body.pickupCoordinates};${req.body.dropoffCoordinates}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}`
  try {
    const response = await fetch(mapboxUrl)
    const data = await response.json()

    res.status(200).send({ message: 'success', data: data.durations[0][1] - data.durations[1][0] })
  } catch (error) {
    res.status(500).send({ message: 'error', data: error.message })
  }
}

    // console.log(data.durations[0][1], data.durations[1][0])
    export default getDuration