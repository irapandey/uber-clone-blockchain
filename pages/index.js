import Head from 'next/head'
import Image from 'next/image'
import Confirm from '../components/Confirm'
import LocationSelector from '../components/LocationSelector'
import Map from '../components/Map'
import { Navbar } from '../components/Navbar'

const style = {
  wrapper: `h-screen w-screen flex flex-col`,
  main: ` overflow-x-auto whitespace-nowrap scrollbar-none h-full w-screen flex-1 z-10`,
  mapContainer: `flex-1 w-full h-full`,
  rideRequestContainer: `h-full w-[400px] ml-[1rem] pb-0 py-[8rem] absolute top-0 left-0 flex flex-col justify-end z-20`,
  rideRequest: `scrollbar-none h-full max-h-[700px] bg-white rounded-lg flex flex-col overflow-scroll`,
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      <Navbar />
      <div className={style.main}>
        <Map />
      </div>
      <div className={style.rideRequestContainer}>
        <div className={style.rideRequest}>
          <LocationSelector />
          <Confirm />
        </div>
      </div>
    </div>
  )
}
