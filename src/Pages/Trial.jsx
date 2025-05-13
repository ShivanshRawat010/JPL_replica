import { useEffect } from 'react';

export default function Trial() {
  // Your background images
  const backgrounds = [
    'https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707984067Tamnar-BG.jpg',
    'https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707984066Shirpur-BG.jpg',
    'https://d2lptvt2jijg6f.cloudfront.net/jpl/custom/1707984066Simhapuri-BG.jpg'
  ];

  return (
    <div>
      {/* First Section */}
      <div 
        className="h-screen w-full relative" 
        style={{
          backgroundImage: `url(${backgrounds[0]})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute bottom-16 left-16 text-white">
          <div className="text-orange-500 text-4xl font-bold mb-2">03</div>
          <h2 className="text-5xl font-bold">Respect for<br />People</h2>
        </div>
      </div>

      {/* Second Section */}
      <div 
        className="h-screen w-full relative" 
        style={{
          backgroundImage: `url(${backgrounds[1]})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute bottom-16 left-16 text-white">
          <div className="text-orange-500 text-4xl font-bold mb-2">04</div>
          <h2 className="text-5xl font-bold">Sustainability</h2>
        </div>
      </div>

      {/* Third Section */}
      <div 
        className="h-screen w-full relative" 
        style={{
          backgroundImage: `url(${backgrounds[2]})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute bottom-16 left-16 text-white">
          <div className="text-orange-500 text-4xl font-bold mb-2">05</div>
          <h2 className="text-5xl font-bold">Innovation</h2>
        </div>
      </div>
    </div>
  );
}