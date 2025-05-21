import React from 'react'
import Navbar from '../Components/Navbar'
import Award_card from '../Components/Award_card'
import Footer from '../Components/Footer'

const Awards = () => {

  const awardsData = [
    {
      title: "Apex India Green Leaf Awards 2022 for Environment Excellence",
      date: "April 2023",
      image: "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708329549ApexIndiaGreenLeafAwards2022forEnvironmentExcellence.jpg"
    },
    {
      title: "Great Place to Work by GPTW Institute",
      date: "June 2023",
      image: "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708329842GreatPlacetoWorkbyGPTWInstitute.jpg"
    },
    {
      title: "Apex India Occupational Health & Safety Award",
      date: "2023",
      image: "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708329915ApexIndiaOccupationalHealthSafetyAward.jpg"
    },
    {
      title: "Best ESG Initiative - Waste Management",
      date: "2023",
      image: "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708329954BestESGInitiative-WasteManagement.jpg"
    },
    {
      title: "10th FICCI Award for Excellence in Safety Systems",
      date: "2023",
      image: "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/170833006510thFICCIAwardforExcellenceinSafetySystems.jpg"
    },
    {
      title: "Best Energy Efficient Unit-IPP Coal 250-500 MW",
      date: "December 2023",
      image: "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708330135BestEnergyEfficientUnit-IPPCoal250-500MW.jpg"
    },
  ]

  return (
    <div className='w-full min-h-screen'>
      <Navbar />
      <div className='relative font-roboto'>
        <div className='w-full'>
          <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707995759awards-banner.jpg" className='w-[100%]' alt="" />
        </div>
        <div className='absolute bottom-10 left-40'>
          <h1 className='text-white font-bold text-[4vw] mb-4'>Awards</h1>
          <div className='text-white font-[500] px-2 py-2 flex items-center justify-center whitespace-nowrap bg-orange-500 text-[1.5vw]'>
            Harbouring Excellence, Setting Industry Standards
          </div>
        </div>
      </div>
      <div className='w-full flex items-center justify-center flex-wrap gap-10 px-[5vw] mt-20 mb-40'>
        {awardsData.map((item)=>{
          return(
            <Award_card image={item.image} date={item.date} title={item.title}/>
          )
        })}
      </div>
      <Footer/>
    </div>
  )
}

export default Awards
