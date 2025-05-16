import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Overseas_operation = () => {
  return (
    <>
      <Navbar/>



      <div className='relative font-roboto'>
        <div className='w-full'>
          <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708420611overseas-banner.jpg" className='w-[100%]' alt="" />
        </div>
        <div className='absolute bottom-10 left-40'>
          <h1 className='text-white font-bold text-[4vw] mb-4'>Overseas Operation</h1>
          <div className='text-white font-[500] w-[250px] py-2 flex items-center justify-center whitespace-nowrap bg-orange-500 text-[1.5vw]'>
            Powerhouse of Progress
          </div>
        </div>
      </div>



      <div className='w-full flex flex-col items-center justify-center gap-10 py-20 px-[10vw] font-roboto text-[1.7vw] font-[300]'>
        <p>
          Jindal Energy, a dynamic subsidiary of Jindal Power Limited (JPL), is leading a transformative initiative in Botswana, driven by an ambitious vision to establish a robust Base Load Thermal Power Plant. This project will introduce an initial 300 MW capacity, followed by an additional 300 MW in the second phase. Designed to ensure an unwavering supply of electricity, this venture aims to meet Botswana's growing energy demands and serve as a power beacon for neighboring African nations. This groundbreaking project is set to reshape the regional energy landscape, playing a pivotal role in transforming countless lives.
        </p>
        <p>
          With Jindal Energy at the helm, this endeavor is not just about generating power—it's about fueling progress and prosperity across borders.
        </p>
      </div>



      <div className='w-full h-[78vh] bg-[url("https://ppel.s3.ap-south-1.amazonaws.com/jpl/custom/17307083071707823718PioneeringInnovation.jpg")] bg-cover bg-center bg-fixed flex items-center justify-center'>
        <div className='w-[35%]'>
          <div>
            <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708415740Overseas-Overview.jpg" className='w-full h-full object-cover object-center' alt="" />
          </div>
        </div>
        <div className='w-[50%] flex flex-col items-start justify-center text-black pl-32'>
          <h2 className='text-[4vw] font-roboto font-bold '>Overview</h2>
          <h3 className='text-[1.8vw] font-[300] pt-4 mb-8'>
            The primary objective of the project is to provide Botswana with sufficient power to meet its current and future requirements, with the potential to extend support to neighbouring countries facing power deficits. The envisioned impact is to illuminate and transform millions of lives in the region, marking a significant milestone in sustainable energy development.
          </h3>
        </div>
      </div>
      


      <div className='w-full py-20'>
        <div className='w-[80%] mx-auto flex items-stretch justify-between gap-8'>
          <div className='w-[48%] shadow-[-5px_-5px_10px_1px_rgba(0,0,0,0.3)]'>
            <div className='w-full relative'>
              <div className='w-full'>
                <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708347342Overseas-FirstPhase.jpg" className='w-full' alt="First Phase" />
              </div>
              <div className='absolute bottom-0 left-0 w-full'>
                <div className='w-full bg-[#333333] text-[1.7vw] capitalize text-white p-4 font-bold'>
                  First Phase
                </div>
              </div>
            </div>
            <div>
              <h3 className='text-[1.7vw] font-roboto font-[250] p-4'>
                Base Load 300 MW Power Plant: In collaboration with JPL, Jindal Energy Botswana Pty Ltd. is actively developing the first phase of the project - the 300 MW Jindal Mmamabula Energy Project (JMEP) in Botswana, Africa. This phase is specifically aimed at supplying power to the Botswana Power Corporation (BPC). The project is strategically scheduled for planned commissioning in 2026-27, reflecting a commitment to delivering reliable and efficient energy solutions.
              </h3>
            </div>
          </div>
          <div className='w-[48%] shadow-[-5px_-5px_10px_1px_rgba(0,0,0,0.3)]'>
            <div className='w-full relative'>
              <div className='w-full'>
                <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708347343Overseas-SecondPhase.jpg" className='w-full' alt="Second Phase" />
              </div>
              <div className='absolute bottom-0 left-0 w-full'>
                <div className='w-full bg-[#333333] text-[1.7vw] capitalize text-white p-4 font-bold'>
                  Second Phase
                </div>
              </div>
            </div>
            <div>
              <h3 className='text-[1.7vw] font-roboto font-[250] p-4 tracking-tight'>
                Base Load 300 MW Power Plant: Building on the success of the first phase, the project's second phase involves the development of an additional 300 MW Base Load Power Plant. This expansion demonstrates our dedication to meeting the energy demands of Botswana and contributing to the broader energy needs of the African continent. The seamless integration of both phases underscores our commitment to sustainable development and regional energy security.
              </h3>
            </div>
          </div>
        </div>
      </div>


      
      <Footer/>
    </>
  )
}

export default Overseas_operation