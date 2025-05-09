import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Navbar = () => {

 const[url, setUrl] = useState('https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707979004PowerLogos-L.png')
  window.addEventListener("load", () => {
    ScrollTrigger.refresh();
  });

 useEffect(() => {
    let tl = gsap.timeline();
    const element = document.getElementById('navbar');
    const jplLogo = document.getElementById('jpl-logo');

    gsap.registerPlugin(ScrollTrigger)
    
    let h = element.offsetHeight

    tl
    .to(element, {
      height: 0.4 * h,
      backgroundColor: 'white',
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: "top -50px",
        scrub: true,
        onEnter: () => {
          setUrl("https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707979004PowerLogos.png");
          document.querySelectorAll('.links a').forEach((link) => {
            link.classList.remove('text-white');
            link.classList.add('text-black');
          })
          jplLogo.style.paddingTop = '60px';
        },
        onLeaveBack: () => {
          setUrl("https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707979004PowerLogos-L.png");
          document.querySelectorAll('.links a').forEach((link) => {
            link.classList.remove('text-black');
            link.classList.add('text-white');
          })
          jplLogo.style.paddingTop = '0px';
        }
      }
    }, "start")
    .to(jplLogo, {
      width: '150px',
      scrollTrigger: {
        trigger: element,
        start: "top top",
        end: "top -50px",
        scrub: true
      }
    }, "start");
 })
  
  return (
    <nav id='navbar' className='fixed flex items-center bg-transparent h-60 w-full font-roboto text-white z-[40]'>
      <div className='text-2xl font-bold'>
        <motion.img id='jpl-logo' initial={{ y: -200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.5, ease: 'easeOut' }} className='w-[190px] ml-40 -my-24' src={url} alt="" />
      </div>
      <div className='links ml-80 flex space-x-9 text-white uppercase text-[14px] tracking-tight'>
        <a href="/about" >About us</a>
        <a href="/business" >Business</a>
        <a href="/people" >people</a>
        <a href="/sustainability" >sustainability</a>
        <a href="/media" >Media</a>
        <a href="/contact" >Contact Us</a>
      </div>
      
    </nav>
  )
}

export default Navbar
