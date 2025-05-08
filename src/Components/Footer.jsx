import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#414042] text-white px-40 py-12 text-sm">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        <div className="mb-2 flex flex-col gap-y-2">
          <img src="https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707979004PowerLogos-L.png" alt="Jindal Power" className="w-44 mb-4" />
          <p className="font-semibold mb-2">Corporate office</p>
          <p>Jindal Centre,</p>
          <p>Plot No.- 2, Sector 32,</p>
          <p>Gurugram - 122001, Haryana, India</p>
          <div className="flex space-x-4 mt-4">
            <a target="_blank" href='https://www.facebook.com/JindalPowerLtd/' className="w-10">
              <img src="https://jpl.jspl.demodevelopment.com/static/jpl/dist/images/g/facebook.svg" alt="Facebook" className="object-cover" />
            </a>
            <a target="_blank" href='https://www.facebook.com/JindalPowerLtd/' className="w-10">
              <img src="https://jpl.jspl.demodevelopment.com/static/jpl/dist/images/g/twitter.svg" alt="Facebook" className="object-cover" />
            </a>
            <a target="_blank" href='https://www.facebook.com/JindalPowerLtd/' className="w-10">
              <img src="https://jpl.jspl.demodevelopment.com/static/jpl/dist/images/g/linkedin.svg" alt="Facebook" className="object-cover" />
            </a>
          </div>
        </div>

        <div className="space-y-6">
          <p>About Us</p>
          <p>Our Businesses</p>
          <p>People</p>
        </div>

        <div className="space-y-6">
          <p>Media</p>
          <p>Sustainability</p>
          <p>Contact Us</p>
        </div>

        <div className="space-y-2">
          <p className="font-semibold">Contact us</p>
          <p>Tel: +91 124 6612000</p>
          <p>Fax: +91 124 6612125</p>
          <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=info@jindalpower.com">info[at]jindalpower[dot]com</a>
        </div>
      </div>

      <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-gray-400">
        <p>© Jindal power All Rights Reserved 2024</p>
        <p>Disclaimer</p>
      </div>
    </footer>
  );
};

export default Footer;
