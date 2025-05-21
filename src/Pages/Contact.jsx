import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { gsap } from 'gsap'

const Contact = () => {

  gsap.to('.inquiry', {
    
  })

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


      <div className="max-w-6xl mx-auto p-6 font-roboto text-[1.7vw] font-[250]">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">


          <div className="overflow-hidden">
            <div className="bg-orange-500 text-white p-3 font-bold text-xl">
              CORPORATE OFFICE :
            </div>
            <div className="p-4 space-y-2">
              <p className="font-semibold text-1.7vw">Jindal Power Limited</p>
              <p>Jindal Centre,</p>
              <p>12, Bhikaiji Cama Place,</p>
              <p>New Delhi 110 066, India</p>
              
              <div className="pt-4">
                <p className="font-semibold text-1.7vw">PHONE :</p>
                <p>Tel: +91 11 2618 8340-50</p>
                <p>Fax: +91 11 2616 1271</p>
                <p>Email: <a className='text-blue-600 font-[300]' href="mailto:info@jindalpower.com">info[at]jindalpower[dot]com</a></p>
              </div>
            </div>
          </div>
          

          <div className="overflow-hidden">
            <div className="bg-orange-500 text-white p-3 font-bold text-xl">
              CORPORATE OFFICE :
            </div>
            <div className="p-4 space-y-2">
              <p className="font-semibold text-[1.7vw]">Jindal Power Limited</p>
              <p>Jindal Centre</p>
              <p>Plot No. 2, Sector 32</p>
              <p>Gurgaon 122001</p>
              <p>Haryana, India</p>
              
              <div className="pt-4">
                <p className="font-semibold text-1.7vw">PHONE :</p>
                <p>Tel: +91 124 6612000</p>
                <p>Fax: +91 124 6612125</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="overflow-hidden">
          <div className="bg-orange-500 text-white p-3 font-bold text-xl">
            REGISTERED OFFICE ADDRESS :
          </div>
          <div className="p-4 space-y-2">
            <p className="font-semibold text-1.7vw">Jindal Power Limited</p>
            <p>Tamnar 496 107,</p>
            <p>District - Raigarh,</p>
            <p>Chhattisgarh, India</p>
            
            <div className="pt-4">
              <p className="font-semibold text-1.7vw">PHONE :</p>
              <p>Tel: +91 7767 352 000</p>
              <p>Fax: +91 7767 281 995</p>
            </div>
          </div>
        </div>
      </div>


      <div className='w-full bg-[#2E2935] flex px-[10vw] py-20'>
        <div className='w-[50%] h-full flex justify-start inquiry'>
          <h1 className='text-[2.7vw] text-white font-semibold font-gotham'>Inquiry Form</h1>
        </div>

        <div className='w-[50%] h-full holder'>
          <form action="" className='flex flex-col gap-6 font-segoe font-[300] text-white w-full items-start'>
            <input type="text" placeholder='Name' className=' outline-none bg-transparent border-b-[1px] text-[1.3vw] pb-1 w-full'/>
            <input type="text" placeholder='Company' className=' outline-none bg-transparent border-b-[1px] text-[1.3vw] pb-1 w-full'/>
            <input type="text" placeholder='Email Id' className=' outline-none bg-transparent border-b-[1px] text-[1.3vw] pb-1 w-full'/>
            <input type="text" placeholder='Ph. No.' className=' outline-none bg-transparent border-b-[1px] text-[1.3vw] pb-1 w-full'/>
            <input type="text" placeholder='Message' className=' outline-none bg-transparent border-b-[1px] text-[1.3vw] pb-1 w-full'/>
            <input type="submit" value="Submit" className='w-[250px] h-[60px] mt-8 bg-white text-black uppercase text-[15px] font-semibold tracking-[8px]' />
          </form>
        </div>
      </div>

      <Footer/>

    </>
  )
}

export default Contact
