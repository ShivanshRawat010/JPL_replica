import React from 'react'
import Navbar from '../Components/Navbar'
import Button_slider from '../Components/Button_slider'
import Footer from '../Components/Footer'

const JIPT = () => {
  return (
    <>
      <Navbar />



      <div className='relative font-roboto'>
        <div className='w-full'>
          <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708422242people-banner.jpg" className='w-[100%]' alt="" />
        </div>
        <div className='absolute bottom-10 left-40'>
          <h1 className='text-white font-bold text-[4vw] mb-4'>JIPT</h1>
          <div className='text-white font-[500] w-[370px] py-2 flex items-center justify-center whitespace-nowrap bg-orange-500 text-[1.5vw]'>
            Fueling Ambitions, Igniting Passion
          </div>
        </div>
      </div>



      <div className='w-full flex flex-col items-center justify-between px-[10vw] py-[5vw] text-[1.7vw] font-roboto font-[300]'>
        <div className="font-segoe bg-white text-gray-800">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Jindal Institute of Power Technology, JPL Tamnar</h2>
          <ul className="text-[1.6vw] list-disc pl-6 space-y-4 text-justify leading-[30px] font-roboto">
            <li>
              Jindal Institute of Power Technology (JIPT), located at JPL Tamnar, serves as the Learning and Development Center for Jindal Power Ltd., striving to become a Center of Excellence for JPL and the broader power sector by enhancing the technical and managerial skills of power professionals.
            </li>
            <li>
              Established in 2010, JIPT is affiliated with the Central Electricity Authority (CEA), Ministry of Power, Government of India, and is approved as a Trainer and Assessor Academy by the Power Sector Skill Council, Government of India. JIPT focuses on developing future-ready power professionals through its Post Graduate Diploma Program in Power Technology, as well as technical, leadership, and management courses for executives and technicians in the energy sector, using advanced training tools.
            </li>
            <li>
              Additionally, JIPT provides technical support to address critical industry challenges, collaborating with research and academic institutions and industry professionals to help organisation build resilience against future challenges.
            </li>
          </ul>
        </div>
      </div>
      <div className='ml-[10vw] mb-10'>
        <a href="https://jipt.org" className="inline-block">
          <div className="relative group overflow-hidden shadow-lg cursor-pointer bg-white h-[56px] px-20 flex items-center justify-center whitespace-nowrap">
            <div className="absolute inset-0 bg-black transform scale-x-0 origin-left transition-transform duration-200 ease-in-out group-hover:scale-x-100" />
            <div className="relative z-10 text-black font-roboto font-[400] uppercase text-[17px] transition duration-200 transform group-hover:scale-110 group-hover:text-white">
            Know more about Jindal Institute of Power Technology
            </div>
          </div>
        </a>
      </div>

      <Footer/>
    </>
  )
}

export default JIPT
