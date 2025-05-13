import React, {useEffect, useState} from 'react'
import Navbar from '../Components/Navbar'
import Button_slider from '../Components/Button_slider'
import Footer from '../Components/Footer'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const About_us_overview = () => {

  const [activeTab, setActiveTab] = useState('vision');

  const content = {
    vision: {
      text: 'An ever-flourishing company focussed on nation building, value creation and sustainable development.',
      image: 'https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708073692Vision.jpg',
    },
    mission: {
      text: 'Building Nations, Empowering Communities.',
      image: 'https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708073692Mission.jpg',
    },
  };

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)

    gsap.to('.phil-div', {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.phil',
        start: 'top bottom',
      },
    })

    gsap.to('.inspi-div', {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: '.inspi',
        start: 'top bottom',
      },
    })
  },[])


  return (
    <div>



      <Navbar/>



      <div className='relative font-roboto'>
        <div className='w-full'>
          <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708520247about-banner.jpg" className='w-[100%]' alt="" />
        </div>
        <div className='absolute bottom-10 left-40'>
          <h1 className='text-white font-bold text-[4vw] mb-4'>About Us</h1>
          <div className='text-white font-[500] w-[430px] py-2 flex items-center justify-center whitespace-nowrap bg-orange-500 text-[1.5vw]'>
            Energising Progress, Empowering Futures
          </div>
        </div>
      </div>


      <div className='w-full flex flex-col items-center justify-center'>



        <div className='w-[80%] pt-20 pb-16'>
          <h3 className='font-roboto text-[1.7vw] font-[300]'>At Jindal Power Limited, we are at the forefront of the energy revolution, delivering cutting-edge power solutions to meet the dynamic needs of a rapidly evolving world. Our state-of-the-art power plants strategically located across India are a testament to our commitment to innovation, sustainability, and excellence.</h3>
        </div>

        <div className='w-full h-[58vh] bg-[url("https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708073692OurPhilosophy-bg1.jpg")] phil bg-cover bg-center bg-fixed flex pl-[10vw] relative'>
          <div className='phil-div absolute opacity-0 -translate-y-40 top-10 right-20 flex gap-2 z-10'>
            <button
              className={`px-4 py-2 font-semibold ${
                activeTab === 'vision' ? 'bg-white text-black' : 'bg-transparent text-white'
              }`}
              onClick={() => setActiveTab('vision')}
            >
              VISION
            </button>
            <button
              className={`px-4 py-2 font-semibold ${
                activeTab === 'mission' ? 'bg-white text-black' : 'bg-transparent text-white'
              }`}
              onClick={() => setActiveTab('mission')}
            >
              MISSION
            </button>
          </div>

          <div className='flex phil-div flex-col py-16 -translate-y-40 relative opacity-0'>
            <h2 className='text-[2.5vw] text-white font-gotham font-semibold'>Our Philosophy</h2>

            <div className='w-[22vw] h-[27vw] absolute bottom-0 translate-y-[20%]'>
              <img src={content[activeTab].image} className='w-full h-full object-cover border-solid border-[1px] border-black' alt="" />
            </div>
          </div>

          <h3 className='text-[2.4vw] phil-div opacity-0 -translate-y-40 text-white leading-[65px] font-thin w-[50vw] pt-40 ml-24'>
            {content[activeTab].text}
          </h3>
        </div>


        <div className='w-full h-[63vh] bg-[url("https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708076194OurPhilosophy-bg2.jpg")] bg-cover bg-center bg-fixed'>
          <div className='flex flex-col items-start px-[10vw] justify-center bg-opacity-35'>
            <h1 className='text-black font-bold text-[2.5vw] mb-4 pt-52'>Our Values</h1>
            <div className="w-full bg-transparent py-8 flex justify-between items-start">
              {[
                { number: '01', title: 'Extreme', subtitle: 'Ownership' },
                { number: '02', title: 'Better than', subtitle: 'Before' },
                { number: '03', title: 'Respect for', subtitle: 'People' },
                { number: '04', title: 'Sustainability', subtitle: '' },
              ].map((item, idx) => (
                <div key={idx} className="text-left">
                  <div className="flex items-center space-x-2">
                    <span className="text-orange-500 font-[500] text-[2.5vw]">{item.number}</span>
                    <div className="h-px bg-orange-500 w-28"></div>
                  </div>
                  <h3 className="text-black text-[2.5vw] font-normal mt-2 leading-tight">
                    {item.title}<br />{item.subtitle}
                  </h3>
                </div>
              ))}
            </div>

          </div>
        </div>



        <div className='w-full h-[78vh] bg-[url("https://ppel.s3.ap-south-1.amazonaws.com/jpl/custom/173063862917056678651607077656leader-bg1.jpg")] bg-cover bg-center bg-fixed flex items-center justify-center'>
            <div className='w-[25%]'>
              <div>
                <img src="https://d2lptvt2jijg6f.cloudfront.net/jindalsteelpower/custom/1604144901_nj_about.jpg" className='w-full h-full object-cover object-center' alt="" />
              </div>
              <h2 className='font-[900] font-roboto text-white text-[3vw]'>Mr. Naveen Jindal</h2>
            </div>
            <div className='w-[50%] flex flex-col items-start justify-center pl-32'>
              <h2 className='text-[2.7vw] font-bold text-white'>Our Leader</h2>
              <h3 className='text-[1.8vw] text-white font-[300] pt-4 mb-8'>
                A well-known Indian industrialist and philanthropist, Mr. Naveen Jindal is the Chairman of Jindal Group, one of India’s leading industrial conglomerates in the steel, mining and infrastructure sectors. He has led the company with visionary leadership and a strong focus on innovation and sustainability.
              </h3>
              <Button_slider text="OUR LEADERSHIP" link=""/>
            </div>
        </div>



        <div className='w-full h-[90vh] inspi bg-white bg-cover bg-center bg-fixed flex pl-[10vw] py-[10vw]'>
          <div className='w-[50%] flex flex-col inspi-div -translate-y-40 opacity-0'>
            <h2 className='text-[2.7vw] font-[650] text-black'>Our Inspiration</h2>
            <h3 className='text-[1.8vw] text-black font-[300] pt-4 mb-8'>
              Shri O. P. Jindal lived his life with the belief that meaningful change in society requires working upwards,    from the bottom. By uplifting the weaker section of society, he believed that our society and country could achieve the impossible. Almost half a century ago, he dreamt of a self-reliant India.
            </h3>
          </div>
          <div className='w-[25%] ml-10 -mt-10 inspi-div -translate-y-40 opacity-0'>
            <div>
              <img src="https://d2lptvt2jijg6f.cloudfront.net/jindal%20steel%20power/custom/1598632989_portrait-4.png" className='w-full h-full object-cover object-center' alt="" />
            </div>
            <h2 className='font-[900] font-roboto text-black text-[2.7vw] whitespace-nowrap mt-4'>Shri. Om Prakash Jindal</h2>
            <h4 className='text-[1.7vw] font-medium'>
              Founder Chairman
            </h4>
            <h4 className='text-[1.7vw] font-medium'>
              O.P. JINDAL GROUP
            </h4>
          </div>
        </div>

      </div>

      <Footer />



    </div>
  )
}

export default About_us_overview