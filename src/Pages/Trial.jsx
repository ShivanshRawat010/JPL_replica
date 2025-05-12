import React from 'react';

const Trial = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative group w-64 h-32 overflow-hidden rounded-lg shadow-lg cursor-pointer">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
        
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center h-full text-white font-semibold text-xl">
          Hover Me
        </div>
      </div>
    </div>
  );
};

export default Trial;
