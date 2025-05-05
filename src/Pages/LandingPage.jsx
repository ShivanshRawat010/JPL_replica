import React from 'react'
import Navbar from '../Components/Navbar'

const LandingPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-[10]" />
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708589268JPLBannerRevised.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <Navbar />
    </div>
  )
}

export default LandingPage
