import React from 'react';

const LoadingAnimatPulse = () => {
  return (
    <div className="animate-pulse flex flex-col justify-center items-center mx-2 sm:mx-4">
      <div className="flex flex-col items-center">
        {/* Image Placeholder */}
        <div className="w-32 h-24 sm:w-40 sm:h-28 md:w-48 md:h-36 bg-slate-700 my-2 rounded-md"></div>

        {/* Title Placeholder */}
        <div className="w-24 h-6 sm:w-32 sm:h-8 md:w-36 md:h-9 bg-slate-700 my-2 rounded-md"></div>

        {/* Small Text Placeholder */}
        <div className="w-16 h-3 sm:w-20 sm:h-4 md:w-24 md:h-4 bg-slate-700 mb-4 rounded-md"></div>

        {/* Description Placeholder */}
        <div className="w-28 h-3 sm:w-40 sm:h-4 md:w-56 md:h-4 bg-slate-700 my-1 rounded-md"></div>
        <div className="w-28 h-3 sm:w-40 sm:h-4 md:w-56 md:h-4 bg-slate-700 my-1 rounded-md"></div>
        <div className="w-16 h-3 sm:w-20 sm:h-4 md:w-24 md:h-4 bg-slate-700 my-2 rounded-md"></div>

        {/* Rating Stars Placeholder */}
        <div className="flex items-center space-x-2">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-3 h-3 sm:w-4 sm:h-4 bg-slate-700 rounded-full"></div>
          ))}
        </div>

        {/* Buttons Placeholder */}
        <div className="w-24 h-6 sm:w-28 sm:h-8 md:w-32 md:h-9 bg-slate-700 my-3 rounded-md"></div>
      </div>
    </div>
  );
};

export default LoadingAnimatPulse;
