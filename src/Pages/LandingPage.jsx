import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Slider from '../Pages/Slider'
import Footer from '../Components/Footer'
import { motion } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const LandingPage = () => {

  const plantData = [
    {
      image1: "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707984067Tamnar-BG.jpg",
      location: "Tamnar, Chhattisgarh",
      capacity: "3400 MW",
      image2: "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707826670Tamnar-pop.jpg",
      link: "https://www.jindalpower.com/",
      text: "The Tamnar Thermal Power Plant, with an impressive 3,400 MW capacity, stands as a landmark achievement in India's power generation industry."
    },
    {
      image1: "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707984066Shirpur-BG.jpg",
      location: "Shirpur, Maharashtra",
      capacity: "300 MW",
      image2: "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707826670Shirpur-pop.jpg",
      link: "https://www.jindalpower.com/",
      text: "The 300 MW Shirpur Thermal Power Plant in Dhule, Maharashtra, reinforces our commitment to regional energy independence, providing reliable power to Maharashtra and beyond."
    },
    {
      image1: "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707984066Simhapuri-BG.jpg",
      location: "Simhapuri, Andhra Pradesh",
      capacity: "600 MW",
      image2: "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707826670Simhapuri-pop.jpg",
      link: "https://www.jindalpower.com/",
      text: "Our 600 MW Simhapuri Thermal Power Plant in Nellore, Andhra Pradesh, adds substantial capacity to our diverse energy portfolio, catering to the energy needs of the region."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering1, setIsHovering1] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % plantData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + plantData.length) % plantData.length);
  };


  useEffect(() => {
    const lenis = new Lenis();
    gsap.registerPlugin(ScrollTrigger)

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  })

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
        <motion.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.5, duration: 1, ease: 'easeOut' }} className='absolute bottom-[145px] left-[150px] text-[53px] font-bold text-white font-roboto z-[10]'>
          Shaping India's Energy Landscape
        </motion.div>
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
              <div className='w-[45%] h-[80%] flex flex-col items-center justify-between bg-white bg-opacity-80 py-5'>
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
      <div className='flex-col flex items-center justify-center pt-[16vw] w-full bg-cover bg-right bg-[url(https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707823718PioneeringInnovation.jpg)] z-[10] gap-y-12 pb-28'>
        <div className='flex items-start justify-start w-[80%]'>
          <h1 className=' text-[3.8vw] font-[500] text-black font-roboto z-[20]'>
            Energy Footprint
          </h1>
        </div>
        <div className='w-[80%] flex bg-white h-[60vh] shadow-[-5px_-5px_10px_3px_rgba(0,0,0,0.2)]'>
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
        <div className='flex items-start justify-start w-[80%]'>
          <h1 className=' text-[3.8vw] font-[500] text-black font-roboto z-[20]'>
            Pioneering Innovation
          </h1>
        </div>
        <div className='w-[80%] h-[16vw] flex bg-transparent justify-between'>
          <div className='w-[49%] h-full bg-[#343541] flex flex-col pb-2'>
            <div className='flex items-center justify-between h-[40%] px-3'>
              <h3 className='font-roboto font-[250] text-white uppercase text-[1.7vw]'>Phase - 1</h3>
              <div className='flex items-center justify-center text-white text-[1.7vw] font-roboto font-semibold w-[35%] h-[4vw] bg-orange-500'>
                <h1 className='whitespace-nowrap'>1st IPP in 2007</h1>
              </div>
            </div>
            <div className='flex flex-col h-[60%]'>
              <div className='h-[50%] flex items-center justify-between'>
                <div className='flex items-center justify-center gap-x-10'>
                  <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707827155ThermalPlantIcon.png" className='w-[13%] object-fit' alt="" />
                  <h3 className='font-roboto font-[250] text-white text-[1.7vw]'>1000 MW Capacity</h3>
                </div>
              </div>
              <div className='h-[50%] flex items-center justify-between pl-4'>
                <div className='flex items-center justify-center gap-x-10'>
                  <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707979037Location-Icon.png" className='w-[13%] object-fit' alt="" />
                  <h3 className='font-roboto font-[250] text-white text-[1.7vw]'>Tamnar, Chhattisgarh</h3>
                </div>
              </div>
            </div>
          </div>
          <div className='w-[49%] h-full bg-[#343541] flex flex-col pb-2'>
            <div className='flex items-center justify-between h-[40%] px-3'>
              <h3 className='font-roboto font-[250] text-white uppercase text-[1.7vw]'>Phase - 2</h3>
              <div className='flex items-center justify-center text-white text-[1.7vw] font-roboto font-semibold w-[35%] h-[4vw] bg-orange-500'>
                <h1 className='whitespace-nowrap'>Expansion
                </h1>
              </div>
            </div>
            <div className='flex flex-col h-[60%]'>
              <div className='h-[50%] flex items-center justify-between'>
                <div className='flex items-center justify-center gap-x-10 pt-12 px-12'>
                  <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707827155ThermalPlantIcon.png" className='w-[10%] object-fit' alt="" />
                  <h3 className='font-roboto font-[250] text-white text-[1.7vw]'>2400 MW (4x600 MW) Thermal Power Plant</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[80%] flex bg-white font-roboto font-[250] text-[1.7vw] p-12 shadow-[-5px_-5px_10px_3px_rgba(0,0,0,0.2)]'>
          In 2007, The OP Jindal Super Thermal Power Plant, an Independent Power Plant (IPP) with a 1000 MW (4x250 MW) unit was established at Tamnar in the Raigarh district of Chhattisgarh. The capacity was later expanded with a 2400 MW (4x600 MW) thermal power plant, bringing the total generation capacity to 3400 MW.
        </div>
      </div>





      <div className='bg-white h-screen w-full relative overflow-hidden'>
        <div className='absolute left-[10vw] top-[6vw] font-roboto z-[20]'>
          <h1 className='text-[4.3vw] font-bold'>Diverse Portfolio</h1>
          <div className='flex items-center justify-start gap-x-4 pt-2'>
            <h1 className='text-[1.5vw] uppercase'>
              Explore
            </h1>
            <div className='w-16 h-4'>
              <img src="https://d2lptvt2jijg6f.cloudfront.net/JPL/custom/1598939402_arrow-right-b3.png" className='object-cover' alt="" />
            </div>
          </div>
        </div>
        <Slider />
      </div>




      <div className='bg-white pt-36 pb-12 w-full flex items-center justify-center relative overflow-hidden'>
        <div className='absolute left-[10vw] top-[6vw] font-roboto'>
          <h1 className='text-[3.8vw] font-bold'>Vision for Sustainability</h1>
        </div>
        <div className='w-[80%] h-[60vh] flex justify-between items-center gap-x-6'>

          <div className='bg-[#343541] uppercase font-roboto flex flex-col items-center justify-center gap-y-4 py-4 w-[45%] h-[75%] px-4'>
            <div className='flex flex-col justify-center items-center text-[1.7vw] text-white'>
              <h3 className='font-[300]'>
                Commited to
              </h3>
              <h3 className='font-bold'>
                Renewable Energy
              </h3>
            </div>
            <div className='w-full flex items-center justify-center'>
              <div className=' bg-white flex items-center justify-center py-2 w-24 h-16'>
                <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707905654solar-icon.png" className='object-cover w-[70%]' alt="" />
              </div>
              <div className='w-full h-full bg-orange-500 flex items-center justify-center font-[300] capitalize text-white text-[1.7vw]'>
                <h3>Renewable Energy Usage</h3>
              </div>
            </div>
            <div className='w-full flex items-center justify-center'>
              <div className='bg-white flex items-center justify-center py-2 w-24 h-16'>
                <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707905653co2-reduction-icon.png" className='object-cover w-[60%]' alt="" />
              </div>
              <div className='w-full h-full bg-orange-500 flex items-center justify-center font-[300] capitalize text-white text-[1.7vw]'>
                <h3>Carbon Emissions Reduction</h3>
              </div>
            </div>
            <div className='w-full flex items-center justify-center'>
              <div className='bg-white flex items-center justify-center py-2 w-24 h-16'>
                <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707905654enviornment-protection-icon.png" className='object-cover w-[70%]' alt="" />
              </div>
              <div className='w-full h-full bg-orange-500 flex items-center justify-center font-[300] capitalize text-white text-[1.7vw]'>
                <h3>Environmental Protection</h3>
              </div>
            </div>
          </div>
          <div className='w-[55%] h-[75%] bg-[#F1F1F1] font-roboto font-[250] text-[1.7vw] p-8'>
            <h3>
              Committed to increasing the share of power generated through renewable sources. As the 5th largest integrated power producer, we aim to set benchmarks in renewable energy, carbon emissions, and environmental protection.
            </h3>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}

export default LandingPage
