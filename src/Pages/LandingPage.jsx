import React from 'react'
import Navbar from '../Components/Navbar'

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <div className='z-[-40] fixed w-full h-screen bg-[url(https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707821242thermal-power-capacity-bg.jpg)] bg-cover'></div>
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
        <div className='absolute bottom-[145px] left-[150px] text-[53px] font-bold text-white font-roboto z-[20]'>
          Shaping India's Energy Landscape
        </div>
      </div>
      <div className='text-[25px] font-[Roboto] bg-white tracking-tight leading-[36px] font-[250] px-[150px] py-24'>
        <span className='font-[360]'>Jindal Power Limited</span> is a leading energy company dedicated to sustainable and dependable power generation. Our cutting-edge technology and strategic power plant locations enable us to provide a consistent and efficient electricity supply. We are committed to operational excellence, safety, and social responsibility. Join us in shaping  the energy landscape and creating a brighter, sustainable future.
      </div>
      <div className='relative flex items-center justify-center pt-[300px] w-full pb-12 bg-black bg-opacity-50 z-[10]'>
        <h1 className='absolute top-[120px] tracking-tight left-[150px] text-[3.8vw] font-semibold text-white font-roboto z-[20]'>
          Current Thermal Power Capacity
        </h1>
        <div className='w-full flex h-[40vw]'>
          <div className='w-[50%] h-full flex items-start justify-end pl-4'>
            <div className='relative w-[80%] h-[90%]'>
                <div className='absolute flex items-center justify-center text-white text-[30px] font-roboto font-semibold -translate-y-1/2 top-0 left-0 w-40 h-20 bg-orange-500 z-[10]'> 
                  <h1>4300 MW</h1>
                </div>  
              <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707821629thermal-power-capacity2.jpg" alt="" className='w-full h-full object-center' />
            </div>
          </div>
          <div className='w-[50%] h-full flex flex-col justify-start pl-12 pr-32 items-start'>
            <h1 className='text-[1.6vw] tracking-wide font-roboto font-light text-white leading-[3.5vw]'>Jindal Power Limited (JPL), a prominent leader in India's energy sector, commands a robust portfolio of 4,300 MW. As a steadfast force at the forefront, we relentlessly strive to meet the nation's growing power demands.</h1>
            <div className='w-full h-[50%] flex gap-x-6 items-center'>
              <div className='w-[45%] h-[80%] flex flex-col items-center justify-between bg-white bg-opacity-70 py-5'>
                <div className='w-[80%]'>
                  <h1 className='text-[1.6vw] tracking-wide text-center font-roboto font-semibold text-gray-500 leading-[2vw]'>
                    Leading Force in India's Power Sector
                  </h1>
                </div>
                <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708074698Vector.png" className='w-[45%]' alt="" />
              </div>
              <div className='w-[45%] h-[80%] flex flex-col items-center justify-between bg-white bg-opacity-80 py-5'>
                <div className='w-[80%]'>
                  <h1 className='text-[1.6vw] tracking-wide text-center font-roboto font-semibold text-gray-500 leading-[2vw]'>
                  Robust Energy Portfolio
                  </h1>
                </div>
                <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708074698RobustEnergy.png" className='w-[35%]' alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='relative flex items-center justify-center pt-[16vw] w-full bg-[url(https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707823718PioneeringInnovation.jpg)] z-[10]'>
        <h1 className='absolute top-[7.5vw] tracking-tight left-[11vw] text-[3.8vw] font-[450] text-black font-roboto z-[20]'>
          Energy Footprint
        </h1>
        <div className='w-[80%] flex bg-white h-[60vh] shadow-[-5px_-5px_10px_3px_rgba(0,0,0,0.2)] mb-40'>
          <div className='h-full flex items-center justify-center py-8'>
            <video className='w-[80%] h-full object-contain' 
            autoPlay
            loop
            muted
            playsInline src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708594444JPLMap1.mp4"></video>
          </div>
          <div className='w-[50%] h-full pl-20 pt-12 font-roboto font-light text-[1.65vw] tracking-wide leading-9'>
            <h3>
              <span className='font-[360]'>Jindal Power Limited</span>, a powerhouse across India with thermal power stations in Tamnar, Chhattisgarh; Shirpur, Maharashtra; and Simhapuri, Andhra Pradesh, is setting its sights beyond borders. The company is poised to electrify Botswana with a soon-to-be-built, 600 MW base-load thermal power station. Having secured the coveted position as the preferred bidder for a 300 MW power plant, Jindal Power is ready to fuel Botswana's growth and illuminate its future.
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage
