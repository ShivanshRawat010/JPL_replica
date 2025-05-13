import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Member_card = (props) => {
  return (
    <div className='h-[30vw] w-[22vw] relative'>
      <div 
        className='w-full h-[90%] bg-cover bg-center'
        style={{ backgroundImage: `url(${props.image})` }}
      >
      </div>
      
      <a 
        href={props.link} 
        className='bottom-0 bg-[#1A1A1A] font-roboto left-0 w-full block pl-10 py-8 cursor-pointer'
      >
        <div className='w-full bg-[#1A1A1A] text-[1.3vw] capitalize text-white font-[900] flex items-center'>
          {props.name} <span className='ml-4'><FaArrowRightLong/></span>
        </div>
        <h3 className='text-white text-[10px] tracking-widest font-semibold'>
          {props.role}
        </h3>
      </a>
    </div>
  )
}

export default Member_card