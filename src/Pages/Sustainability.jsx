import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Sustainability = () => {
  return (
    <>
      <Navbar/>



      <div className='relative font-roboto'>
        <div className='w-full'>
          <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708602907people-banner-new.jpg" className='w-[100%]' alt="" />
        </div>
        <div className='absolute bottom-10 left-40'>
          <h1 className='text-white font-bold text-[4vw] mb-4'>Sustainability</h1>
          <div className='text-white font-[500] w-[400px] py-2 flex items-center justify-center whitespace-nowrap bg-orange-500 text-[1.5vw]'>
            Sustainable Energy, Sustainable Future
          </div>
        </div>
      </div>

      <div className='w-full px-[10vw] py-[5vw] text-[2vw] font-segoe font-[300]'>
        <h3 className='font-[500]'> 
          Corporate Social Responsibility (CSR) Initiatives
        </h3>
        <p className='text-[1.7vw] font-roboto font-[250] mt-2'>
          JPL is committed to sustainable community development, focusing on socio-economic, educational, and health initiatives.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-10 px-[10vw] ">
        <div className='w-[37vw]'>
          <div className='w-full h-[25vw] relative overflow-hidden bg-[url("https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708604793CommunityHealthinitiatives.jpg")] bg-cover bg-center'>
            <h3 className='absolute right-0 bottom-0 bg-orange-500 text-[1.7vw] text-white p-4 font-semibold'>
              Community Health initiatives
            </h3>
          </div>
          <div className='w-full text-[1.7vw] font-roboto font-[300] py-2 space-y-6 px-6'>
            <ul className='list-disc space-y-6'>
              <li>
                <span className='font-normal'>Vatsalya Project:</span> Mother & Child healthcare in 50 villages.
              </li>
              <li>
              <span className='font-normal'>Chiranjivi Project:</span> Combatting malnutrition in 55 villages.
              </li>
              <li>
                <span className='font-normal'>Project Shubhangi:</span> Menstrual health promotion for 9000 girls.
              </li>
              <li>
                <span className='font-normal'>Mobile Medical Services & Telemedicine Center:</span> 2.5 lakh beneficiaries since 2011.
              </li>
              <li>
                <span className='font-normal'>Support to PM TB Mukt Bharat Programme:</span> Nutritional support to TB patients.
              </li>
            </ul>
          </div>
        </div>


        <div className='w-[37vw]'>
          <div className='w-full h-[25vw] relative overflow-hidden bg-[url("https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708608318organisationimg.jpg")] bg-cover bg-center'>
            <h3 className='absolute right-0 bottom-0 bg-orange-500 text-[1.7vw] text-white p-4 font-semibold'>
              Sustainable Livelihood & Women Empowerment
            </h3>
          </div>
          <div className='w-full text-[1.7vw] font-roboto font-[300] py-2 space-y-6 px-6'>
            <ul className='list-disc space-y-6'>
              <li>
                <span className='font-normal'>Project Mushroom:</span> 800 women trained in mushroom cultivation.
              </li>
              <li>
                <span className='font-normal'>Project Akriti:</span> Tailoring skills for 700 women with a monthly income of Rs. 7000-8000.
              </li>
              <li>
                <span className='font-normal'>Project Terracotta:</span> Training 72 artisans with monthly incomes of Rs. 7000-8000.
              </li>
              <li>
                <span className='font-normal'>Project Swashakti & Swalamban:</span> 205 SHGs formed, Rs. 105 lakh cumulative savings.
              </li>
              
            </ul>
          </div>
        </div>


        <div className='w-[37vw]'>
          <div className='w-full h-[25vw] relative overflow-hidden bg-[url("https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708604793EducationSkillDevelopment.jpg")] bg-cover bg-center'>
            <h3 className='absolute right-0 bottom-0 bg-orange-500 text-[1.7vw] text-white p-4 font-semibold'>
              Education & Skill Development
            </h3>
          </div>
          <div className='w-full text-[1.7vw] font-roboto font-[300] py-2 space-y-6 px-6'>
            <ul className='list-disc space-y-6'>
              <li>
                <span className='font-normal'>Little Angel Center:</span> Promoting preprimary education for 900 children.
              </li>
              <li>
              <span className='font-normal'>Knowledge Park:</span> Child Learning & Community Information Center.
              </li>
              <li>
                <span className='font-normal'>Affordable Formal Education:</span> OP Jindal Schools benefiting 1250 children 
              </li>
              <li>
                <span className='font-normal'>Project Yashasvi:</span> Skill development for 558 girls with 390 placed in jobs.
              </li>
              
            </ul>
          </div>
        </div>



        <div className='w-[37vw]'>
          <div className='w-full h-[25vw] relative overflow-hidden bg-[url("https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708609191natural-img.jpg")] bg-cover bg-center'>
            <h3 className='absolute right-0 bottom-0 bg-orange-500 text-[1.7vw] text-white p-4 font-semibold'>
              Natural Resource Management & Agriculture Development
            </h3>
          </div>
          <div className='w-full text-[1.7vw] font-roboto font-[300] py-2 space-y-6 px-6'>
            <ul className='list-disc space-y-6'>
              <li>
                <span className='font-normal'>Wadi Project:</span> 500 acres benefiting 500 tribal farmers.
              </li>
              <li>
              <span className='font-normal'>Pond deepening, Plantation, Solar-based Irrigation:</span> Enhancing biodiversity and water table.
              </li>
              <li>
                <span className='font-normal'>Paddy and Vegetable Cultivation:</span> Supporting farmers for sustainable agriculture.
              </li>
            </ul>
          </div>
        </div>



        <div className='w-[37vw]'>
          <div className='w-full h-[25vw] relative overflow-hidden bg-[url("https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708604793DrinkingWaterSanitation.jpg")] bg-cover bg-center'>
            <h3 className='absolute right-0 bottom-0 bg-orange-500 text-[1.7vw] text-white p-4 font-semibold'>
              Drinking Water & Sanitation
            </h3>
          </div>
          <div className='w-full text-[1.7vw] font-roboto font-[300] py-2 space-y-6 px-6'>
            <ul className='list-disc space-y-6'>
              <li>
                <span className='font-normal'>Safe drinking:</span> water access for all 50 villages.
              </li>
              <li>
              <span className='font-normal'>Sanitation:</span> Tamnar Block declared Open Defecation Free.
              </li>
            </ul>
          </div>
        </div>



        <div className='w-[37vw]'>
          <div className='w-full h-[25vw] relative overflow-hidden bg-[url("https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708604793SocialInclusion.jpg")] bg-cover bg-center'>
            <h3 className='absolute right-0 bottom-0 bg-orange-500 text-[1.7vw] text-white p-4 font-semibold'>
              Social Inclusion
            </h3>
          </div>
          <div className='w-full text-[1.7vw] font-roboto font-[300] py-2 space-y-6 px-6'>
            <ul className='list-disc space-y-6'>
              <li>
                <span className='font-normal'>Jindal Children Home:</span> Providing shelter, education, and extracurricular activities for parentless/single-parent children.
              </li>
              <li>
              <span className='font-normal'>Project Ashiyana:</span> Assisting 145 homeless people in building homes.
              </li>
            </ul>
          </div>
        </div>


        <div className='w-[37vw]'>
          <div className='w-full h-[25vw] relative overflow-hidden bg-[url("https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708604794SportsPromotion.jpg")] bg-cover bg-center'>
            <h3 className='absolute right-0 bottom-0 bg-orange-500 text-[1.7vw] text-white p-4 font-semibold'>
              Sports Promotion
            </h3>
          </div>
          <div className='w-full text-[1.7vw] font-roboto font-[300] py-2 space-y-6 px-6'>
            <ul className='list-disc space-y-6'>
              <li>
                <span className='font-normal'>Sports Promotion:</span> Empowering rural youths with free coaching and facilities.
              </li>
            </ul>
          </div>
        </div>



        <div className='w-[37vw]'>
          <div className='w-full h-[25vw] relative overflow-hidden bg-[url("https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708608474bridges-img.jpg")] bg-cover bg-center'>
            <h3 className='absolute right-0 bottom-0 bg-orange-500 text-[1.7vw] text-white p-4 font-semibold'>
              Rural Infrastructure
            </h3>
          </div>
          <div className='w-full text-[1.7vw] font-roboto font-[300] py-2 space-y-6 px-6'>
            <ul className='list-disc space-y-6'>
              <li>
                <span className='font-normal'>Infrastructure:</span> Construction, renovation, and maintenance of community buildings, bridges, roads, and public facilities.
              </li>
            </ul>
          </div>
        </div>
      </div>


      <Footer/>
    </>
  )
}

export default Sustainability
