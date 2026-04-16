import React from 'react';
import img1 from '../../assets/HomeImg/sesame.png';

const CircularProgress = ({ percentage, colorClass, label }) => {
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center group cursor-default">
      <div className="relative w-20 h-20 sm:w-32 sm:h-32 mb-4 sm:mb-6">
        <svg className="transform -rotate-90 w-20 h-20 sm:w-32 sm:h-32" viewBox="0 0 128 128">
          {/* Background circle */}
          <circle cx="64" cy="64" r="45" stroke="var(--green)" strokeWidth="4" strokeOpacity="0.2" fill="#ffffff" />
          {/* Progress circle */}
          <circle
            cx="64" cy="64" r="45"
            stroke="currentColor" strokeWidth="4" fill="none"
            strokeDasharray={circumference} strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className={`transition-all duration-1000 ease-out ${colorClass}`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="outfit text-xl sm:text-3xl text-[var(--green)]">{percentage}<span className="outfit text-sm sm:text-xl font-light">%</span></span>
        </div>
      </div>
      <h4 className="outfit text-xs tracking-[0.2em] uppercase text-gray-500 font-semibold group-hover:text-[var(--green)] transition-colors text-center">{label}</h4>
    </div>
  );
};

const FeatureItem = ({ title, description }) => {
  return (
    <div className="border-l border-[var(--green)]/20 pl-6 py-2 mb-12 hover:border-[var(--green)] transition-colors duration-500">
      <h3 className="outfit text-2xl md:text-3xl text-[var(--green)] mb-2 sm:mb-4">{title}</h3>
      <p className="outfit text-gray-600 font-light leading-relaxed">{description}</p>
    </div>
  );
};

const SesameFeatures = () => {
  return (
    <div className="py-24 md:py-32 px-6 md:px-12 border-t border-[var(--green)]/10">
      <div className="max-w-[1400px] mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">

          {/* Left Side - Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div data-aos="fade-up" className="outfit text-[var(--orange)] text-sm tracking-[0.2em] uppercase font-semibold mb-6">
               Why Choose Us
            </div>
            <h2 data-aos="fade-up" className="outfit text-4xl sm:text-5xl md:text-6xl text-[var(--green)] leading-[1.1] tracking-tight mb-8 sm:mb-12">
               Mahadev Agro Product <br/> <span className="italic text-[var(--orange)]">The Gold Standard</span>
            </h2>

            <div data-aos="fade-up" data-aos-delay="100">
              <FeatureItem
                title="Pure & Organic"
                description="Our oil seeds and spices are sourced from organic farms. Free from heavy pesticides, they retain natural antioxidants, healthy fats, and essential minerals."
              />
              <FeatureItem
                title="Always Fresh"
                description="Harvested at peak maturity and precisely processed, our products deliver high oil content, superior flavor, and highly digestible organic nutrition."
              />
            </div>
          </div>

          {/* Right Side - Image & Progress */}
          <div className="lg:col-span-6 relative mt-12 lg:mt-0">
            <div data-aos="fade-up" className="relative p-4 md:p-8 bg-[#Fffff]/50 ">
              <img
                src={img1}
                alt="Sesame Seeds"
                className="w-full h-auto object-cover filter contrast-125 saturate-50 mix-blend-multiply"
              />
              
              {/* Circular Progress Overlay */}
              <div className="absolute -bottom-8 -left-2 sm:-bottom-10 sm:-left-2 md:-bottom-12 md:-left-12 flex gap-4 md:gap-8 p-4 sm:p-6 md:p-8 bg-white/50 backdrop-blur-sm sm:bg-transparent sm:backdrop-blur-none rounded-tr-3xl sm:rounded-none">
                <CircularProgress percentage={98} colorClass="text-[var(--green)]" label="Purity" />
                <CircularProgress percentage={100} colorClass="text-[var(--orange)]" label="Organic" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SesameFeatures;