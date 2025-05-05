import React from 'react'

const Navbar = () => {
  return (
    <div className='relative flex justify-between items-center p-4 bg-transparent text-white font-roboto text-white z-[20]'>
      <div className='text-2xl font-bold'>
        <a href="/">Logo</a>
      </div>
      <div className='flex space-x-4 text-white uppercase'>
        <a href="/" className='hover:text-gray-400'>Home</a>
        <a href="/about" className='hover:text-gray-400'>About</a>
        <a href="/services" className='hover:text-gray-400'>Services</a>
        <a href="/contact" className='hover:text-gray-400'>Contact</a>
      </div>
      
    </div>
  )
}

export default Navbar
