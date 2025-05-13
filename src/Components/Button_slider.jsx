import React from 'react'

const Button_slider = (props) => {
  return (
    <a href={props.link} className="uppercase tracking-widest w-[250px] h-[56px] bg-white flex items-center justify-center">
      <div className="relative group w-full h-full overflow-hidden shadow-lg cursor-pointer">
        <div className="absolute inset-0 bg-black transform scale-x-0 origin-left transition-transform duration-200 ease-in-out group-hover:scale-x-100" />

        <div className="relative z-10 flex items-center justify-center h-full text-black font-roboto font-[400] text-[15px] transition duration-200 transform group-hover:scale-110 group-hover:text-white">
          {props.text}
        </div>
      </div>
    </a>
  )
}

export default Button_slider
