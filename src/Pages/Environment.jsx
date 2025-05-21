import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Environment = () => {

  const data = [
    {
      image: "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708679018management-practices.jpg",
      head  : "Environment Management Practices",
      points : ["High-efficiency Pollution Control equipment,zero-discharge concept, sewage treatment plants.", "Utilisation of fly ash for sustainable practices, biogas plants, and online monitoring systems."]
    },
    {
      image: "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708345331EnvironmentalConservationEfforts.jpg",
      head  : "Environmental Conservation Efforts",
      points : ["Extensive plantation drives, awareness programs, and adherence to global reporting standards."]
    },
    {
      image: "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708345331FlyAshStock.jpg",
      head  : "Fly Ash Stock",
      points : ["Total Fly ash stock for 3400 MW TPP (4X250 MW TPP and 4X600 MW TPP) -16.77 Million metric tons (as on March 31,2025)", "Capacity of Ash Silos: Availability of dry ash."]
    }
  ]


  return (
    <>
      <Navbar />


      <div className='relative font-roboto'>
        <div className='w-full'>
          <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708342199Enviornment-Enviornment.jpg" className='w-[100%]' alt="" />
        </div>
        <div className='absolute bottom-10 left-40'>
          <h1 className='text-white font-bold text-[4vw] mb-4'>Environment</h1>
          <div className='text-white font-[500] px-2 py-2 flex items-center justify-center whitespace-nowrap bg-orange-500 text-[1.5vw]'>
            Sustainable Energy, Sustainable Future
          </div>
        </div>
      </div>

      <div className='w-full flex justify-center items-center py-20 px-[10vw] font-roboto text-[1.7vw] font-[300]'>
        Jindal Power Limited is unwavering in its commitment to environmental stewardship. Our Corporate Environmental Policy, endorsed by our management, prioritises robust environmental management practices and continual improvement. We rigorously adhere to regulatory standards, embrace cutting-edge technologies, and pledge to create a pollution-free environment in and around our projects.
      </div>

      <div className='grid grid-cols-3 px-[10vw] gap-10 font-roboto pb-20'>
        {data.map((item)=>{
          return (
            <div>
              <img src={item.image} className='w-[24vw] h-[16vw] object-cover' alt="" />
              <h1 className='text-left font-bold text-[2vw] py-4 h-[9vw]'>{item.head}</h1>
              <ul className='text-left font-[250] text-[1.7vw] list-disc'>
                {item.points.map((point) => {
                  return (
                    <li className='py-2'>{point}</li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>


      <Footer />
    </>
  )
}

export default Environment
