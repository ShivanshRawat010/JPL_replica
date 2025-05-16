import { useState } from 'react';

export default function Trial() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full max-w-6xl mx-auto border border-gray-300 rounded shadow-sm bg-white">
      <div 
        className="flex items-center justify-between p-4 cursor-pointer"
        onClick={toggleOpen}
      >
        <h2 className="text-2xl font-bold text-gray-800">Disclaimer (Fraudulent/ Unsolicited) Job Offers</h2>
        <div className="text-2xl">
          {isOpen ? '▼' : '▲'}
        </div>
      </div>
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen scale-100 opacity-100' : 'max-h-0 scale-95 opacity-0'}`}>
        <hr className="border-gray-300" />
        <div className="p-5 space-y-4 text-gray-700">
          <p>
            We, Jindal Power Limited (JPL), hereby bring to the notice of the public at large as well as all concerned that some unscrupulous and fraudulent
            persons are offering false and fake job offers in our name and are soliciting job applications asking the job seekers/applicants to pay
            processing fees and/or deposit amounts in bank accounts by sending false e-mails or by making fraudulent telephone calls.
          </p>
          
          <p>
            If someone receives any such communication offering a job or interview calls in our name against payment of any monies or otherwise, we
            strongly advise not to respond to the same. Though we are taking appropriate legal recourse and steps against such fraudulent and
            unscrupulous persons, however, please be informed that we, Jindal Power Limited (JPL), shall not in any way whatsoever, be responsible or
            liable for any loss that may be occasioned to any member of the public on account of their dealings with such fraudulent persons.
          </p>
          
          <p>
            It is further for the information of all that we, Jindal Power Limited (JPL), deploy and have in place an extremely professional, comprehensive,
            and merit-based employee selection process and that we do not charge / accept any amount or deposit from the job seekers at any stage of
            the selection process, be it while interviewing candidates or while making job offers.
          </p>
          
          <p>
            Upon receipt of an interview call for any job with us, it is advised that you may visit our official website (www.jindalpower.com) and / or contact
            our HR department about the veracity of such interview calls or job offers.
          </p>
        </div>
      </div>
    </div>
  );
}