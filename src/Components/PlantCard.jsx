import React from 'react'

const PlantCard = (props) => {
  const { location, capacity, image1, image2, link, text } = props
  return (
    <>
    <div className='h-[80vh] w-full flex items-end justify-center'>
      <div className='w-full h-[90%] flex' style={{ backgroundImage: `url(${image1})` }}>
        <div className='w-[50%] h-full flex items-center justify-end tracking-wider font-roboto'>
          <div className='w-[80%] h-full flex flex-col pt-12 gap-y-8'>
            <h1 className='text-[3.3vw] font-gotham font-semibold text-white'>
              Tamnar, Chhattisgarh
            </h1>
            <div className='flex items-center justify-center text-white text-[1.7vw] font-roboto font-semibold w-[35%] h-[4vw] bg-orange-500'> 
              <h1 className='whitespace-nowrap text-[2.7vw] '>3400 MW
              </h1>
            </div>
            <h3 className='font-roboto text-[1.7vw] text-white font-[250]'>
              The Tamnar Thermal Power Plant, with an impressive 3,400 MW capacity, stands as a landmark achievement in India's power generation industry.
            </h3>
            <button className='uppercase tracking-widest w-60 h-16 bg-white'>
              L e a r n <div className='w-3 inline-block h-2 bg-white'></div>M o r e
            </button>
          </div>
        </div>
        <div className='w-[50%] h-full flex items-center justify-center '>
          <div className='h-[90%] w-[65%] bg-cover bg-[url(https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707826670Tamnar-pop.jpg)] -translate-y-[15%] shadow-[-5px_-5px_10px_3px_rgba(0,0,0,0.2)]'> 

          </div>
        </div>
        
      </div>
    </div>
    </>
  )
}

export default PlantCard