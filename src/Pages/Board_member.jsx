import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Board_member = (props) => {

  let data =  {
    ap: {
      name: "Mr. Anil Kumar Pandey",
      role: "Managing Director",
      image: "https://d2lptvt2jijg6f.cloudfront.net/jpl/post/1708501006ak-pandey.jpg",
      about: "Mr. Anil Kumar Pandey is an astute power sector professional with a rich experience spanning over 38 years. Mr. Pandey is a highly experienced power sector professional with proficiency in diverse areas including Project Execution, Erection and Commissioning of thermal, Solar as well as wind Power Plants.\n\nA Bachelor of Mechanical Engineering from Gobind Ballabh Pant University, Pantnagar, Mr. Pandey joined leading public sector unit National Thermal Power Corporation Limited (“NTPC”) in 1984. At NTPC, he worked in various capacities in Engineering and Project Management functions. Lastly he was heading Western Region–II comprising of five large size Coal Based Power Plants of 10,100 MW and two standalone Solar PV Plants of 300MW and responsible for safe and reliable commercial operation of stations as Regional Executive Director."
    },
    op: {
      name: "Mr. Om Prakash",
      role: "Whole-Time Director",
      image: "https://ppel.s3.ap-south-1.amazonaws.com/jpl/post/1743492428MrOmPrakash.jpg",
      about: "Mr. Om Prakash aged around 52 years, is an Engineering Graduate in Mining Engineering from BIT Sindri and holds a Master's Degree in Mine Planning from Indian Institute of Technology (IIT-BHU). He also holds a Master’s Degree in Business Administration (Finance) from Sikkim Manipal University.\n\nMr. Om Prakash brings with him an extensive experience of over 24 years in the mining industry. Throughout his distinguished career, he worked in organizations such as Singareni Collieries Company Ltd (SCCL), Hindalco Industries Limited (HIL) and Bhubaneswari Coal Mining Ltd (BCML), a joint venture of Essel Mining and Grasim Industries under the Aditya Birla Group.\n\nAt BCML, as Chief Operating Officer, he notably headed the 28 MTPA first Mine Developer and Operator (MDO) project for Mahanadi Coalfields Limited (MCL). At Hindalco, he pioneered the adoption of blast-free mining technology at the Talabira-I coal mine. At SCCL, he was associated with mechanized underground mining operations with longwall technology at GDK 10A Incline, Shaft Sinking & First Punch Entry in India at Adriyala Longwall Project. He was also a Part of Project Planning Department for enhancement of production from old underground mines.\n\nMr. Om Prakash joined Jindal Power Limited in June 2021, and currently oversees the operations of three coal mines, namely Gare Palma IV/1, Gare Palma IV/2&3 and Gare Palma Sector-I with a cumulative capacity of 29.65 MT. He also oversees the operations of three coal washeries totalling 11.55 MTPA."
    },
    sj: {
      name: "Mrs. Shipra Jha",
      role: "Non-executive Director",
      image: "https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707982644ShipraJha.jpg",
      about: "Mrs. Shipra Jha is an accomplished businesswoman and entrepreneur with over 28 years of experience in the industry. She has held prominent positions in various prestigious organizations such as Binary Semantics, JUSCO (a subsidiary of Tata Steel), Tata Business Support Systems, and TCS, before starting her own ventures in Logistics and Metal Fabrication. Currently, she serves as the Managing Partner of Avirex Logistics and Promoter Director of Kross Innovations Pvt Ltd.\n\nMrs. Shipra Jha has handled a variety of functions in Operations, Customer Relations, Corporate Quality, and Human Resource Management. Her expertise extends across a broad range of sectors, having worked in diverse fields such as IT, Energy & Utility Sector, and BPOs.\n\nShe is also a certified Six Sigma Black Belt, which reflects her exceptional skills in process improvement and optimization. She is a certified assessor of the Malcom Baldridge-based Tata Business Excellence Model, and JJ Irani Excellence in Education that demonstrates her proficiency in organizational excellence and management.\n\nBesides her professional qualifications, Mrs. Shipra Jha is a pragmatic philanthropist, and a role model for young leaders. She is a firm believer in Corporate Social Responsibility and has established the Jagriti Trust in Jamshedpur, which is dedicated to the empowerment of women. The trust has become economically independent by training and securing work in the factories for the Trust and utilizing the funds generated for social activities such as education, women's empowerment, and medical support for the underprivileged.\n\nAt Tata Business Support Systems, where Mrs. Shipra Jha generated more than 3000 job opportunities, she also initiated the Sambhavna program, to help blind and differently-abled youngsters to find respectable jobs at call centers and data centers managed by the company.\n\nThrough her business acumen and philanthropic endeavors, Mrs. Shipra Jha continues to create economic engagement opportunities for the underprivileged. Mrs. Shipra Jha also serves as a trustee of Mechi foundation trust, which is engaged in providing education and support to communities."
    }
  }

  gsap.registerPlugin(ScrollTrigger);

  useEffect(()=>{
    gsap.to(".member", {
      y:0,
      opacity:1,
      duration: 1,
    },[])

    gsap.to(".name-div", {
      y:0,
      opacity:1,
      duration: 1,
    },[])

    gsap.to(".about-div", {
      y:0,
      opacity:1,
      duration: 1,
      scrollTrigger: {
        trigger: ".about-parent",
        start: "top bottom",
      }
    },[])
  })


  return (
    <div className='w-full min-h-screen font-roboto'>
      <Navbar />


      <div className="w-full h-[75vh] relative">
        <img src="https://storage.googleapis.com/ppel-infra-static-buckets/jpl/dist/images/b_elem/2/leader-detail-bg.png" className='w-[100%] h-full' alt="" />

        <div className='w-full h-[70%] flex items-center justify-between absolute bottom-0 pl-[10vw]'>
          <img src={data[props.id].image} className='w-[23vw] h-full member translate-y-20 opacity-0'>

          </img>
          <div className='w-[67%] name-div -translate-y-20 opacity-0'>
            <h3 className='text-white font-bold text-[3vw]'>
              {data[props.id].name}
            </h3>
            <h4 className='text-white font-[500] text-[1.5vw] mb-4'>
              {data[props.id].role}
            </h4>
          </div>
        </div>

      </div>

      <div className='w-full flex px-[9%] py-[5vw] about-parent'>
        <div className='font-roboto text-[1.7vw] font-[250] tracking-wide leading-[3.2vw] about-div -translate-y-20 opacity-0'>
          {data[props.id].about.split('\n\n').map((para, index) => (
            <p key={index} className="mb-6">
              {para}
            </p>
          ))}
        </div>

      </div>

      <Footer/>
    </div>
  )
}

export default Board_member
