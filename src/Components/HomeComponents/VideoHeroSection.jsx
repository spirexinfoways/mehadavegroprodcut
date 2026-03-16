import React from 'react';
import { Check } from 'lucide-react';

const VideoHeroSection = () => {
  return (
    <div className="relative w-full h-160 overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://pin.it/7H41K8Mcp"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content Box */}
      <div className="relative z-10 flex items-end justify-start h-full px-4 sm:px-6 lg:px-16">
        <div className="bg-[var(--darkgreen)] text-white p-10 lg:p-14 max-w-2xl shadow-2xl">

          {/* Main Heading */}
          <h1 className="text-2xl lg:text-3xl font-bold mb-6 leading-tight">
            Distributors of<br />
            Organic Produce
          </h1>

          {/* Description */}
          <p className="text-md mb-8 leading-relaxed font-medium opacity-95 w-md">
            Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously.
          </p>

          {/* Feature List */}
          <ul className="space-y-2">
            <li className="flex items-center">
              <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                <Check size={16} className="text-white" />
              </div>
              <span className="text-md font-medium">Modern Agriculture Equipment</span>
            </li>
            <li className="flex items-center">
              <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                <Check size={16} className="text-white" />
              </div>
              <span className="text-md font-medium">Awesome Harvest of Wheat</span>
            </li>
            <li className="flex items-center">
              <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3">
                <Check size={16} className="text-white" />
              </div>
              <span className="text-md font-medium">Fresh Fruits & Vegetables</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoHeroSection;