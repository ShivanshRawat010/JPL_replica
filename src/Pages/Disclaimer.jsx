import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Disclaimer = () => {
  return (
    <>
      <Navbar/>


      <div className='relative font-roboto'>
        <div className='w-full'>
          <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707897288about-banner-jpl.jpg" className='w-[100%]' alt="" />
        </div>
        <div className='absolute bottom-10 left-40'>
          <h1 className='text-white font-bold text-[4vw] mb-4'>Disclaimer</h1>
        </div>
      </div>


      <div className='w-full flex flex-col gap-10 tracking-wider items-center justify-between px-[10vw] py-[5vw] text-[1.7vw] font-[200]'>
        <p>
          We, Jindal Power Limited (JPL) and its Group Companies, hereby bring to the notice of the public at large as well as all concerned that some unscrupulous and fraudulent persons are making in our name false and fake job offers and are soliciting job applications requiring the job seekers / applicants to pay processing fees and/or deposit amounts in bank accounts by sending false e-mails or by making fraudulent telephone calls. If any person receives any such communication offering a job or interview calls in our name against payment of any monies or otherwise, we strongly advise not to respond to the same.
        </p>
        <p>
          Though we are taking appropriate legal recourse and steps against such fraudulent and unscrupulous persons, however, please be informed that we, Jindal Power Limited (JPL) and its group companies, shall not in any way whatsoever be responsible or liable for any loss that may be occasioned to any member of the public on account of their dealings with such fraudulent persons.
        </p>
        <p>
          It is further for the information of all that we, Jindal Power Limited (JPL) and its group companies, deploy and have in place an extremely professional, comprehensive and merit-based employee selection process and that we do not charge / accept any amount or deposit from the job seekers at any stage of the selection process, be it while interviewing candidates or while making job offers. On receipt of an interview call for any job with us, it is advised that you may visit our official web site (www.jindalpower.com) and contact our HR department about the veracity of such interview calls or job offers.
        </p>
      </div>



      <Footer/>
    </>
  )
}

export default Disclaimer
