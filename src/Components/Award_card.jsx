import React from 'react'

const Award_card = (props) => {
  return (
    <div className='group w-[360px] h-[550px] font-roboto bg-white rounded-sm shadow-[1px_1px_10px_1px_rgba(10,10,10,0.4)] overflow-hidden'>
      <div className='w-[100%] h-[70%] rounded-sm overflow-hidden'>
        <img src={props.image} alt="" className='w-full h-full object-center object-fill transition-transform duration-500 group-hover:scale-150' />
      </div>
      <div className='flex flex-col items-start justify-start w-full h-[40%] px-5 py-3'>
        <p className='text-[#F58220] font-bold uppercase text-[1.5vw] mb-5'>{props.date}</p>
        <h1 className='text-[1.5vw] text-black'>{props.title}</h1>
      </div>      
    </div>
  )
}

export default Award_card
