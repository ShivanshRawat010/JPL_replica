import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed flex items-center bg-transparent font-roboto text-white z-[20]'>
      <div className='text-2xl font-bold'>
        <img className='w-[190px] ml-40 -my-16' src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707979004PowerLogos-L.png" alt="" />
      </div>
      <div className='ml-80 flex py-20 space-x-9 text-white uppercase text-[14px] tracking-tight'>
        <a href="/about" className='hover:text-gray-400'>About us</a>
        <a href="/business" className='hover:text-gray-400'>Business</a>
        <a href="/people" className='hover:text-gray-400'>people</a>
        <a href="/sustainability" className='hover:text-gray-400'>sustainability</a>
        <a href="/media" className='hover:text-gray-400'>Media</a>
        <a href="/contact" className='hover:text-gray-400'>Contact Us</a>
      </div>
      
    </nav>
  )
}

export default Navbar
