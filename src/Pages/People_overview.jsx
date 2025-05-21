import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const People_overview = () => {
  return (
    <>
      <Navbar />


      <div className='relative font-roboto'>
        <div className='w-full'>
          <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708602907people-banner-new.jpg" className='w-[100%]' alt="" />
        </div>
        <div className='absolute bottom-10 left-40'>
          <h1 className='text-white font-bold text-[4vw] mb-4'>People</h1>
          <div className='text-white font-[500] px-2 py-2 flex items-center justify-center whitespace-nowrap bg-orange-500 text-[1.5vw]'>
            Fueling Ambitions, Igniting Passion
          </div>
        </div>
      </div>


      <div className='w-full flex items-center justify-between px-[10vw] py-[5vw] text-[1.7vw] font-roboto font-[300]'>
        <p>
          Our core belief at JPL is to invest in our people, empowering them to grow and innovate, thus enabling them to contribute towards creating a cleaner and better future. We are committed to providing our employees with the necessary resources, tools, and environment to reach their full potential. We believe that our people are our greatest asset, and their development is crucial to our success.
        </p>

      </div>


      <div className='w-full flex items-center justify-between font-roboto font-[300] pl-[10vw] bg-[#E5E5E6] py-10'>
        <div className='w-[60%] flex flex-col items-start justify-center gap-6'>
          <h1 className='text-[3.5vw] font-bold text-orange-500'>
            JPL is a Great Place to Work
          </h1>
          <p className='text-[1.7vw] font-roboto font-[300]'>
            JPL has been awarded the Great Place to Work® recognition in India for the year 2023-24. This certification, granted by the Great Place to Work® Institute India, is a significant achievement in JPL journey, which began in September 2021, to become a leading employer of choice in India.
          </p>
        </div>
        <div className='w-[40%] pl-10'>
          <img src="https://ppel.s3.ap-south-1.amazonaws.com/jpl/custom/1725016810image8.png" className='w-[60%] h-[60%]' alt="" />
        </div>
      </div>


      <div className='w-full  flex items-start justify-center gap-8 mt-28'>
        <div className='w-[38%] flex flex-col group'>
          <div className='w-full h-[30vw] relative overflow-hidden'>
            <div className='w-full h-full absolute top-0 left-0 bg-[#333333] opacity-40 flex items-center justify-center z-[10]'>

            </div>
            <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708423371training-for-excellence.jpg" className='w-full h-full object-cover object-center duration-[600ms] group-hover:scale-110' alt="" />
            <h3 className='absolute left-7 bottom-7 font-roboto text-[1.7vw] font-semibold text-white z-[20]'>
              Training for Excellence
            </h3>
          </div>
          <div className='w-full text-[1.7vw] font-roboto font-[300] py-2 space-y-6'>
            <p>
              Our leadership development initiatives, including the JLMG Scheme, focus on sharpening skills and fostering effective leadership.
            </p>
            <p>
              Mentorship Sessions encourage experienced individuals to guide and support the professional growth of their mentees.
            </p>
          </div>
        </div>
        <div className='w-[38%] flex flex-col group '>
          <div className='w-full h-[30vw] relative overflow-hidden'>
            <div className='w-full h-full absolute top-0 left-0 bg-[#333333] opacity-40 flex items-center justify-center z-[10]'>

            </div>
            <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708602435explore-career-opportunities.jpg" className='w-full h-full object-cover object-center group-hover:scale-110 duration-[600ms]' alt="" />
            <h3 className='absolute left-7 bottom-7 font-roboto text-[1.7vw] font-semibold text-white z-[20]'>
              Talent Development Programs
            </h3>
          </div>
          <div className='w-full text-[1.7vw] font-roboto font-[300] py-2 space-y-6'>
            <p>
              Explore our ongoing schemes designed to reward talent, promote development, and recognise excellence.
            </p>
            <p>
              <span className='font-normal font-roboto'>GET Scheme:</span> Join as a young and talented engineer or management student, adapt to our culture, and undergo safety awareness training.
            </p>
            <p>
              <span className='font-normal font-roboto'>OPJEMS Scheme:</span> The O.P. Jindal Engineering & Management Scholarship invites participation from institutes nationwide, offering timeless support and recognition.
            </p>
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col items-center justify-center mt-28 bg-[#E5E5E6] font-roboto py-10'>
        <h1 className='text-[3.5vw] font-bold text-orange-400 mb-6'>
          Explore Jobs
        </h1>
        <h3 className='text-[1.7vw] font-roboto font-[300] pb-8'>
          Discover exciting career opportunities with us.
        </h3>
        <h3 className='text-[1.7vw] font-roboto font-normal py-2'>
          Join Jindal Power Limited –
        </h3>
        <h3 className='text-[1.7vw] font-roboto font-[300] py-2'>
          where your career meets purpose, and together, we shape a brighter tomorrow.
        </h3>
        <a href="/job-openings" className='border-[1px] border-emerald-400 text-black text-[1.7vw] font-roboto font-normal px-20 py-2 mt-6 rounded-md hover:bg-emerald-500 hover:text-white transition-all duration-100'>
          Join Us
        </a>
      </div>

      <Footer/>
    </>
  )
}

export default People_overview
