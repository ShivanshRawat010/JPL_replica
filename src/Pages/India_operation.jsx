import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const India_operation = () => {
  return (
    <>
      <Navbar />
      <div className='relative font-roboto'>
        <div className='w-full'>
          <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708173704Business-India-Operation.jpg" className='w-[100%]' alt="" />
        </div>
        <div className='absolute bottom-10 left-40'>
          <h1 className='text-white font-bold text-[4vw] mb-4'>India Operation</h1>
          <div className='text-white font-[500] w-[250px] py-2 flex items-center justify-center whitespace-nowrap bg-orange-500 text-[1.5vw]'>
            Powerhouse of Progress
          </div>
        </div>
      </div>


      <div className='w-full flex flex-col items-center justify-center gap-10 pt-20'>
        <div className='w-[80%]'>
          <h3 className='font-roboto text-[1.7vw] font-[300]'>At Jindal Power Limited, we are at the forefront of the energy revolution, delivering cutting-edge power solutions to meet the dynamic needs of a rapidly evolving world. Our state-of-the-art power plants strategically located across India are a testament to our commitment to innovation, sustainability, and excellence.</h3>
        </div>


        <div className='w-[80%] flex items-center justify-between'>
          <div className='w-[48.5%] shadow-[-5px_-5px_10px_3px_rgba(0,0,0,0.2)]'>
            <div className='w-full relative'>
              <div className='w-full'>
                <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708149455Tamnar-IndiaOperations.jpg" className='w-[100%]' alt="" />
              </div>
              <div className='absolute bottom-0 left-0 w-full flex flex-col items-center justify-center'>
                <div className='w-full flex items-center justify-end'>
                  <h1 className='bg-orange-500 text-[1.7vw] uppercase text-white p-4 font-bold'>Tamnar</h1>
                </div>
                <div className='w-full bg-[#333333] text-[1.7vw] capitalize text-white p-4 font-bold'>
                  Thermal Power Plant, Raigarh
                </div>
              </div>
            </div>
            <div>
              <h3 className='text-[1.7vw] font-roboto font-[300] p-4'>
                Situated in Chhattisgarh, this monumental private-sector thermal powerhouse, launched in 2007-2008, stands as India's first of its kind. With an impressive capacity of 3,400 megawatts, it marks a ground-breaking achievement in the nation's power generation landscape.
              </h3>
            </div>
          </div>
          <div className='w-[48.5%] shadow-[-5px_-5px_10px_3px_rgba(0,0,0,0.2)]'>
            <div className='w-full relative'>
              <div className='w-full'>
                <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708171582SimhapuriThumb.jpg" className='w-[100%]' alt="" />
              </div>
              <div className='absolute bottom-0 left-0 w-full flex flex-col items-center justify-center'>
                <div className='w-full flex items-center justify-end'>
                  <h1 className='bg-orange-500 text-[1.7vw] uppercase text-white p-4 font-bold'>SIMHAPURI</h1>
                </div>
                <div className='w-full bg-[#333333] text-[1.7vw] capitalize text-white p-4 font-bold'>
                  Thermal Power Plant, Nellore
                </div>
              </div>
            </div>
            <div>
              <h3 className='text-[1.7vw] font-roboto font-[300] p-4'>
                A commanding presence on the energy front with its 600 MW thermal power facility in Nellore, Andhra Pradesh. This powerhouse significantly augments our diverse energy portfolio, addressing the substantial energy demands of the southern states with unwavering precision.
              </h3>
            </div>
          </div>
        </div>


        <div className='w-[80%] shadow-[-5px_-5px_10px_3px_rgba(0,0,0,0.2)]'>
          <div className='w-full relative'>
            <img
              src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708171357ShirpurThumb.jpg"
              className='w-full h-[500px] object-cover'
              alt=""
            />
            <div className='absolute bottom-0 left-0 w-full flex flex-col items-center justify-center'>
              <div className='w-full flex items-center justify-end'>
                <h1 className='bg-orange-500 text-[1.7vw] uppercase text-white p-4 font-bold'>Shirpur</h1>
              </div>
              <div className='w-full bg-[#333333] text-[1.7vw] capitalize text-white p-4 font-bold'>
                Thermal Power Plant, Dhule
              </div>
            </div>
          </div>
          <div>
            <h3 className='text-[1.7vw] font-roboto font-[300] p-4'>
              A 300 MW stronghold in Dhule, Maharashtra, stands as a testament to our unwavering dedication to regional energy autonomy. It radiates reliability, supplying power not just to Maharashtra but extending its reach beyond, reinforcing our commitment to powering the progress of the nation.
            </h3>
          </div>
        </div>

        <div className='w-full flex mt-16'>

          <div className='group w-[50%] h-[43vw] relative bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-0'
            style={{ backgroundImage: 'url("https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708343228Business-RenewableEnergy.jpg")' }}>

            {/* Darker overlay always visible to boost contrast */}
            <div className='absolute inset-0 bg-black/30 z-0'></div>

            {/* Blue overlay on hover */}
            <div className='absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-all duration-0 z-10'></div>

            {/* Text content */}
            <div className='absolute inset-0 z-20 flex justify-center px-[9vw] py-[4vw]'>
              <div className='flex flex-col text-white'>
                <h1 className='text-[3.3vw] font-bold font-roboto'>Renewable Energy</h1>
                <h3 className='font-roboto text-[1.7vw] font-[300]'>
                  <span className='font-[450]'>Solar Power Prowess:</span> Venturing into the renewable sector, we are actively implementing 150 MW Solar PV Power Projects at strategic locations, harnessing the power of the sun for a cleaner and greener energy future.
                </h3>
              </div>
            </div>
          </div>
          <div className='group w-[50%] h-[43vw] relative bg-center bg-cover grayscale hover:grayscale-0 transition-all duration-0'
            style={{ backgroundImage: 'url("https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1708172415CaptiveCoalMines.jpg")' }}>

            {/* Darker overlay always visible to boost contrast */}
            <div className='absolute inset-0 bg-black/30 z-0'></div>

            {/* Blue overlay on hover */}
            <div className='absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-20 transition-all duration-0 z-10'></div>

            {/* Text content */}
            <div className='absolute inset-0 z-20 flex justify-center px-[9vw] py-[4vw]'>
              <div className='flex flex-col text-white'>
                <h1 className='text-[3.3vw] font-bold font-roboto'>Captive Coal Mines</h1>
                <h3 className='font-roboto text-[1.7vw] font-[300]'>
                  <span className='font-[450]'>Strategic Resource Control:</span> JPL proudly owns and operates three captive coal mines - Gare Palma IV/1, Gare Palma IV/2&3, and Gare Palma Sector-1 - strategically positioned adjacent to the Tamnar Power Complex, ensuring a seamless and secure coal supply for our thermal power plants.
                </h3>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}

export default India_operation
