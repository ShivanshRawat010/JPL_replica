import React from 'react'
import Navbar from '../Components/Navbar'

const Contact = () => {
  return (
    <>
      <Navbar />
      

      <div className='relative font-roboto'>
        <div className='w-full'>
          <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708342199ContactUs.jpg" className='w-[100%]' alt="" />
        </div>
        <div className='absolute bottom-10 left-40'>
          <h1 className='text-white font-bold text-[4vw] mb-4'>Contact Us</h1>
        </div>
      </div>
    </>
  )
}

export default Contact
