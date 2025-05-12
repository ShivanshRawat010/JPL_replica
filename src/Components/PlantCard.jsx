import { li } from 'framer-motion/client'
import React from 'react'
import Button_slider from './Button_slider'

const PlantCard = (props) => {
  const { location, capacity, image1, image2, link, text } = props
  return (
    <div className='h-[80vh] w-full flex items-end justify-center'>
      <div className='w-full h-[90%] flex' style={{ backgroundImage: `url(${image1})` }}>
        <div className='w-[50%] h-full flex items-center justify-end tracking-wider font-roboto'>
          <div className='w-[80%] h-full flex flex-col pt-12 gap-y-8'>
            <h1 className='text-[3.3vw] font-gotham font-semibold text-white'>
              {location}
            </h1>
            <div className='flex items-center justify-center text-white text-[1.7vw] font-roboto font-semibold w-[35%] h-[4vw] bg-orange-500'> 
              <h1 className='whitespace-nowrap text-[2.7vw] '>{capacity}
              </h1>
            </div>
            <h3 className='font-roboto text-[1.7vw] text-white font-[250]'>
              {text}
            </h3>
            <Button_slider link={link} />
          </div>
        </div>
        <div className='w-[50%] h-full flex items-center justify-center '>
          <div style={{ backgroundImage: `url(${image2})` }} className='h-[90%] w-[65%] bg-cover -translate-y-[15%] shadow-[-5px_-5px_10px_3px_rgba(0,0,0,0.2)]'> 

          </div>
        </div>
        
      </div>
    </div>
  )
}

export default PlantCard