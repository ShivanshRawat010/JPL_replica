import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const [initialHeight, setInitialHeight] = useState(null);
  
  const logoLarge = "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707979004PowerLogos-L.png";
  const logoSmall = "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707979004PowerLogos.png";
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    if (navbarRef.current && !initialHeight) {
      setInitialHeight(navbarRef.current.offsetHeight);
    }
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [initialHeight]);
  
  useEffect(() => {
    if (!navbarRef.current || !logoRef.current || !initialHeight) return;
    
    const navbar = navbarRef.current;
    const links = document.querySelectorAll('.nav-link');
    
    if (isScrolled) {
      navbar.style.height = `${initialHeight * 0.4}px`;
      navbar.style.backgroundColor = 'white';
      links.forEach(link => {
        link.classList.remove('text-white');
        link.classList.add('text-black');
      });
    } else {
      navbar.style.height = `${initialHeight}px`;
      navbar.style.backgroundColor = 'transparent';
      links.forEach(link => {
        link.classList.remove('text-black');
        link.classList.add('text-white');
      });
    }
  }, [isScrolled, initialHeight]);

  const logoVariants = {
    hidden: { y: -200, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        y: { duration: 1.5}
      }
    }
  };
  
  return (
    <nav 
      ref={navbarRef} 
      className="fixed flex items-center bg-transparent h-60 w-full font-roboto text-white z-40 transition-all duration-300"
    >
      <div className="text-2xl font-bold">
        <motion.div
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={logoVariants}
        >
          <a href="/" className="ml-40 block" onClick={() => window.scrollTo(0, 0)}>
            <img 
              ref={logoRef}
              className={`-my-24 transition-all duration-300 ${isScrolled ? 'w-36 pt-16' : 'w-48 pt-0'}`}
              src={isScrolled ? logoSmall : logoLarge}
              alt="JPL Logo"
            />
          </a>
        </motion.div>
      </div>
      <div className="ml-80 flex space-x-9 text-sm tracking-tight">
        <button className="nav-link transition-colors uppercase duration-300">About us</button>
        <button className="nav-link transition-colors uppercase duration-300">Business</button>
        <button className="nav-link transition-colors uppercase duration-300">people</button>
        <button className="nav-link transition-colors uppercase duration-300">sustainability</button>
        <button className="nav-link transition-colors uppercase duration-300">Media</button>
        <button className="nav-link transition-colors uppercase duration-300">Contact Us</button>
      </div>
    </nav>
  );
}; 

export default Navbar;