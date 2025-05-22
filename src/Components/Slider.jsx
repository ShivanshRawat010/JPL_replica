import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import PlantCard from './PlantCard';

const plantData = [
  {
    image1: "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707984067Tamnar-BG.jpg",
    location: "Tamnar, Chhattisgarh",
    capacity: "3400 MW",
    image2: "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707826670Tamnar-pop.jpg",
    link: "/india-operations",
    text: "The Tamnar Thermal Power Plant, with an impressive 3,400 MW capacity, stands as a landmark achievement in India's power generation industry."
  },
  {
    image1: "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707984066Shirpur-BG.jpg",
    location: "Shirpur, Maharashtra",
    capacity: "300 MW",
    image2: "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707826670Shirpur-pop.jpg",
    link: "/india-operations",
    text: "The 300 MW Shirpur Thermal Power Plant in Dhule, Maharashtra, reinforces our commitment to regional energy independence, providing reliable power to Maharashtra and beyond."
  },
  {
    image1: "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707984066Simhapuri-BG.jpg",
    location: "Simhapuri, Andhra Pradesh",
    capacity: "600 MW",
    image2: "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707826670Simhapuri-pop.jpg",
    link: "/india-operations",
    text: "Our 600 MW Simhapuri Thermal Power Plant in Nellore, Andhra Pradesh, adds substantial capacity to our diverse energy portfolio, catering to the energy needs of the region."
  }
];

const Slider = () => {
  const swiperContainerRef = useRef(null);

  useEffect(() => {
    Swiper.use([Navigation, Pagination]);
    
    if (!swiperContainerRef.current) return;
    
    const swiper = new Swiper(swiperContainerRef.current, {
      loop: true,
      slidesPerView: 1,
      spaceBetween:0,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.custom-swiper-button-next',
        prevEl: '.custom-swiper-button-prev',
      },
      speed: 2000,
    });
    
    return () => {
      if (swiper && !swiper.destroyed) {
        swiper.destroy();
      }
    };
  }, []);

  return (
    <div className="bg-white w-full pt-48 relative overflow-hidden">
      <div className="swiper-container" ref={swiperContainerRef}>
        <div className="swiper-wrapper">
          {plantData.map((plant, index) => (
            <div className="swiper-slide" key={index}>
              <PlantCard 
                image1={plant.image1}
                location={plant.location}
                capacity={plant.capacity}
                image2={plant.image2}
                link={plant.link}
                text={plant.text}
              />
            </div>
          ))}
        </div>
        
        <div className="swiper-pagination"></div>
      </div>
      
      <div className="absolute w-[14vw] flex items-center gap-x-[2px] justify-center h-[10vh] left-[50%] bottom-0 -translate-x-1/2 z-10">
        <div className="custom-swiper-button-prev w-[40%] h-full bg-white flex items-center justify-center cursor-pointer">
          <img className="w-[80%]" src="https://cdn-icons-png.flaticon.com/128/5111/5111424.png" alt="Previous" />
        </div>
        <div className="custom-swiper-button-next w-[40%] h-full bg-white flex items-center justify-center cursor-pointer">
          <img className="w-[80%]" src="https://cdn-icons-png.flaticon.com/128/5111/5111412.png" alt="Next" />
        </div>
      </div>
      
      <style>
        {`
          .swiper-button-next, .swiper-button-prev {
            display: none;
          }
        `}
      </style>

    </div>
  );
};

export default Slider;