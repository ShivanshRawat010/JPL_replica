import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { FaChevronUp } from "react-icons/fa";
import Footer from '../Components/Footer';

const Jobs = () => {
  const [open, setOpen] = useState(true);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (open) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [open]);

  return (
    <>
      <Navbar />

      <div className='relative font-roboto'>
        <div className='w-full'>
          <img
            src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708509723job-openings-banner.jpg"
            className='w-full'
            alt=""
          />
        </div>
        <div className='absolute bottom-10 left-40'>
          <h1 className='text-white font-bold text-[4vw] mb-4'>Job Opening</h1>
          <div className='text-white font-[500] w-[370px] py-2 flex items-center justify-center whitespace-nowrap bg-orange-500 text-[1.5vw]'>
            Fueling Ambitions, Igniting Passion
          </div>
        </div>
      </div>

      <div className='w-full px-[10vw]'>
        <button onClick={() => setOpen(!open)} className='border-b-[1px] w-full border-black my-10 flex items-center justify-between'>
          <h1 className='text-[3vw] font-semibold font-roboto'>
            Disclaimer (Fraudulent/ Unsolicited) Job Offers
          </h1>
            <FaChevronUp
              size={24}
              className={`transition-transform duration-1000 ${open ? 'rotate-180' : 'rotate-0'}`}
            />
        </button>

        <div
          ref={contentRef}
          style={{ maxHeight, transition: 'max-height 1s ease' }}
          className="overflow-hidden mb-20"
        >
          <div className='flex flex-col gap-8 text-[1.3vw] font-roboto font-[250]'>
            <p>
              We, Jindal Power Limited (JPL), hereby bring to the notice of the public at large as well as all concerned that some unscrupulous and fraudulent persons are offering false and fake job offers in our name and are soliciting job applications asking the job seekers/applicants to pay processing fees and/or deposit amounts in bank accounts by sending false e-mails or by making fraudulent telephone calls.
            </p>
            <p>
              If someone receives any such communication offering a job or interview calls in our name against payment of any monies or otherwise, we strongly advise not to respond to the same. Though we are taking appropriate legal recourse and steps against such fraudulent and unscrupulous persons, however, please be informed that we, Jindal Power Limited (JPL), shall not in any way whatsoever, be responsible or liable for any loss that may be occasioned to any member of the public on account of their dealings with such fraudulent persons.
            </p>
            <p>
              It is further for the information of all that we, Jindal Power Limited (JPL), deploy and have in place an extremely professional, comprehensive, and merit-based employee selection process and that we do not charge / accept any amount or deposit from the job seekers at any stage of the selection process, be it while interviewing candidates or while making job offers.
            </p>
            <p>
              Upon receipt of an interview call for any job with us, it is advised that you may visit our official website (www.jindalpower.com) and / or contact our HR department about the veracity of such interview calls or job offers.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Jobs;
