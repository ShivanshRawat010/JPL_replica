import React from 'react'
import Navbar from '../Components/Navbar'
import Member_card from '../Components/Member_card'
import Footer from '../Components/Footer'

const Leadership = () => {

  let board_members = [
    {
      name: "Mr. Anil Kumar Pandey", 
      role: "Managing Director",
      image: "https://d2lptvt2jijg6f.cloudfront.net/jpl/post/1708501006ak-pandey.jpg",
      link: "/board-anil-pandey"
    },
    {
      name: "Mr. Om Prakash",
      role: "Whole-Time Director",
      image: "https://ppel.s3.ap-south-1.amazonaws.com/jpl/post/1743492428MrOmPrakash.jpg",
      link: "/board-om-prakash"
    },
    {
      name: "Mrs. Shipra Jha",
      role: "Non-executive Director",
      image: "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707982644ShipraJha.jpg",
      link: "/board-shipra-jha"
    }
  ]

  return (
    <>
      <Navbar />
      <div className='relative font-roboto'>
        <div className='w-full'>
          <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708520010board-of-directors-banner.jpg" className='w-[100%]' alt="" />
        </div>
        <div className='absolute bottom-10 left-40'>
          <h1 className='text-white font-bold text-[4vw] mb-4'>Leadership</h1>
          <div className='text-white font-[500] w-[470px] py-2 flex items-center justify-center whitespace-nowrap bg-orange-500 text-[1.5vw]'>
            Leading the Charge in Clean Energy Innovation
          </div>
        </div>
      </div>

      <div className='w-full flex items-start px-4 justify-between gap-10 pt-20'>
        <div className='h-[45vw] w-[31vw]'>
          <div className="w-full h-[90%] bg-[url('https://www.jindalsteel.com/_next/image?url=https%3A%2F%2Fd2lptvt2jijg6f.cloudfront.net%2Fjspsteelpower20%2Fpost%2F1704709320Mr-Naveen-Jindal.jpg&w=1920&q=75')] bg-cover bg-center">
            
          </div>
          <div className='bottom-0 left-0 w-full flex flex-col items-center justify-center'>
            <div className='w-full bg-[#1A1A1A] text-[1.3vw] capitalize text-white p-7 font-[900]'>
              Mr. Naveen Jindal
            </div>
          </div>
        </div>
        <div className='w-[65%] font-roboto text-[1.4vw] font-[300] text-[#333333] flex flex-col gap-4'>
          <p>
            A well-known Indian industrialist and philanthropist, Mr. Naveen Jindal is the Chairman of Jindal Group, one of India’s leading industrial conglomerates in the steel, mining and infrastructure sectors. He has led the company with visionary leadership and a strong focus on innovation and sustainability. Under his guidance, the Group has expanded its global footprint and embraced cutting-edge technologies, particularly in renewable energy and green steel. Mr. Jindal has set ambitious goals for the Group, including achieving carbon neutrality by 2047 and increasing steel-making capacity to 15.6 MTPA by 2025.
          </p>

          <p>
            He is a Member of Parliament serving his 3rd term and is committed to championing societal causes, effecting transformative changes in countless lives. A true patriot, Mr. Jindal is the President of the Flag Foundation of India. He started a campaign to democratise the Tricolour when he was 22 years old and his decade-long legal struggle resulted in a historic Supreme Court judgment allowing every Indian to display the Indian Flag with pride on all days of the year.
          </p>

          <p>
            He is the founding Chancellor of O. P. Jindal Global University, ranked as the number one private university in India as per the QS World University Rankings 2023. He also serves as the president of the Indian Steel Association (ISA), the apex body of the domestic steel industry that works collectively to grow the sector.
          </p>

          <p>
            In recognition of his accomplishments in industry, politics and education, he was conferred with the lifetime achievement award by the University of Texas at Dallas in 2023. His strategic acumen also earned him recognition as one of India’s Most Powerful CEOs by The Economic Times-Corporate Dossier (2011), the prestigious Ernst & Young Entrepreneur of the Year Award (2010) and one of Fortune India’s Best CEO (2024).
          </p>

          <p>
            An avid sportsperson, he is an active polo player and a national record holder in skeet shooting. He is married to accomplished Indian classical Kuchipudi dancer and chairperson of Jindal Foundation, Ms. Shallu Jindal. The couple is blessed with two children Venkatesh and Yashasvini, who are both Yale Graduates. Venkatesh also has an MBA from Harvard University.
          </p>
        </div>
      </div>

      <div className='flex pt-32 pb-40 items-center justify-center gap-10 flex-wrap'>
        {board_members.map((prop)=>{
          return <Member_card name={prop.name} image={prop.image} role={prop.role} link={prop.link}/>
        })}
      </div>

      <Footer/>
    </>
  )
}

export default Leadership
