import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const [initialHeight, setInitialHeight] = useState(null);

  const logoLarge = "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707979004PowerLogos-L.png";
  const logoSmall = "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707979004PowerLogos.png";

  const menuItems = {
    "ABOUT US": [
      { name: "OVERVIEW", href: "/about-us-overview" },
      { name: "LEADERSHIP", href: "about-us-leadership" },
      { name: "AWARDS", href: "/about/awards" },
      { name: "STATUTORY INFORMATION", href: "/about/statutory-information" }
    ],
    "BUSINESS": [
      { name: "POWER", href: "/business/power" },
      { name: "CEMENT", href: "/business/cement" },
      { name: "ALUMINUM", href: "/business/aluminum" },
      { name: "REAL ESTATE", href: "/business/real-estate" }
    ],
    "PEOPLE": [
      { name: "CAREERS", href: "/people/careers" },
      { name: "CULTURE", href: "/people/culture" },
      { name: "DIVERSITY", href: "/people/diversity" }
    ],
    "SUSTAINABILITY": [
      { name: "INITIATIVES", href: "/sustainability/initiatives" },
      { name: "REPORTS", href: "/sustainability/reports" },
      { name: "GOALS", href: "/sustainability/goals" }
    ],
    "MEDIA": [
      { name: "NEWS", href: "/media/news" },
      { name: "PRESS RELEASES", href: "/media/press-releases" },
      { name: "GALLERY", href: "/media/gallery" }
    ],
    "CONTACT US": [
      { name: "LOCATIONS", href: "/contact/locations" },
      { name: "SUPPORT", href: "/contact/support" },
      { name: "FEEDBACK", href: "/contact/feedback" }
    ]
  };

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
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown && !event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeDropdown]);

  const logoVariants = {
    hidden: { y: -200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { duration: 1.5 }
      }
    }
  };

  const handleMenuClick = (menuName, e) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20, scaleY: 0 },
    visible: {
      transformOrigin: 'top',
      opacity: 1,
      y: 0,
      scaleY: 1,
      transition: { duration: 0.3 }
    },
    exit: {
      transformOrigin: 'top',
      scaleY: 0,
      opacity: 0,
      transition: { duration: 0.2 }
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
        {Object.keys(menuItems).map((item) => (
          <div key={item} className="dropdown-container relative">
            <a
              href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="nav-link transition-colors uppercase duration-300"
              onClick={(e) => handleMenuClick(item, e)}
            >
              {item.toLowerCase()}
            </a>
            <AnimatePresence>
              {activeDropdown === item && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  className="absolute left-0 mt-3 w-64 rounded-lg bg-[#1f1f1f] bg-opacity-95 shadow-xl py-1 z-50 
                    before:content-[''] before:absolute before:top-[-6px] before:left-8 
                    before:border-l-8 before:border-r-8 before:border-b-8 
                    before:border-l-transparent before:border-r-transparent before:border-b-[#1f1f1f]"
                >
                  {menuItems[item].map((subItem, index) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className={`block w-full text-left px-6 py-4 text-sm transition-colors
                        ${index === 0 ? 'text-white font-bold' : 'text-gray-400 font-normal'}
                        hover:bg-gray-800 hover:text-white border-b border-gray-800 last:border-b-0`}
                    >
                      {subItem.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;