import React, { useEffect, useState } from 'react';
import logo from '../assets/HomeImg/icon.png'; // Update with your logo path

const PageLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [slideUp, setSlideUp] = useState(false);

  useEffect(() => {
    // After 3 seconds, start slide up animation
    const timer = setTimeout(() => {
      setSlideUp(true);
      // After animation completes (1 second), hide loader
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) {
    return <>{children}</>;
  }

  return (
    <>
      {/* Loader Overlay */}
      <div
        className={`outfit fixed inset-0 z-999 flex items-center justify-center bg-white transition-transform duration-1000 ease-in-out ${
          slideUp ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Gradient Circle with Logo */}
          <div className="relative">
            {/* Animated gradient circle */}
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-green-500 via-green-600 to-orange-500 animate-spin-slow flex items-center justify-center">
              {/* Inner white circle for logo */}
              <div className="w-46 h-46 rounded-full bg-white flex items-center justify-center shadow-lg animate-none">
                <img
                  src={logo}
                  alt="Earth Agri Impex Logo"
                  className="w-28 h-28 object-contain"
                />
              </div>
            </div>
            
            {/* Pulse effect */}
            {/* <div className="absolute inset-0 w-48 h-48 rounded-full bg-gradient-to-br from-green-400 to-orange-400 animate-ping opacity-20"></div> */}
          </div>

          {/* Company Name */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl tracking-wide">
              <span className="text-green-600">EARTH</span>{' '}
              <span className="text-[var(--orange)]">AGRI</span>{' '}
              <span className="text-[var(--orange)]">IMPEX</span>
            </h1>
            
            {/* Loading dots animation */}
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content (hidden until loader completes) */}
      <div className={slideUp ? 'opacity-100' : 'opacity-0'}>
        {children}
      </div>
    </>
  );
};

export default PageLoader;

// Add these custom animations to your tailwind.config.js:
/*
module.exports = {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-0.5rem)',
          },
        },
      },
    },
  },
}
*/