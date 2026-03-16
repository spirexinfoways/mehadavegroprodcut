// import React from 'react';
// import img1 from '../../assets/HomeImg/sesame.png'

// const CircularProgress = ({ percentage, color = 'green', label }) => {
//   const circumference = 2 * Math.PI * 45; // radius = 45
//   const strokeDashoffset = circumference - (percentage / 100) * circumference;

//   return (
//     <div className="flex flex-col items-center">
//       <div className="relative w-32 h-32">
//         {/* Background circle */}
//         <svg className="transform -rotate-90 w-32 h-32">
//           <circle
//             cx="64"
//             cy="64"
//             r="45"
//             stroke="#e5e7eb"
//             strokeWidth="3"
//             fill="none"
//           />
//           {/* Progress circle */}
//           <circle
//             cx="64"
//             cy="64"
//             r="45"
//             stroke={color === 'green' ? '#10b981' : '#fbbf24'}
//             strokeWidth="3"
//             fill="none"
//             strokeDasharray={circumference}
//             strokeDashoffset={strokeDashoffset}
//             strokeLinecap="round"
//             className="transition-all duration-1000 ease-out"
//           />
//         </svg>
//         {/* Percentage text */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <span className="text-3xl font-bold text-amber-500">{percentage}%</span>
//         </div>
//       </div>
//       {/* Label */}
//       <h4 className="mt-2 text-lg font-bold text-gray-900 text-center">{label}</h4>
//     </div>
//   );
// };

// const FeatureItem = ({ title, description }) => {
//   return (
//     <div className="mb-10 last:mb-0">
//       <h3 className="text-2xl font-bold text-[var(--green)] mb-3">{title}</h3>
//       <p className="text-gray-600 leading-relaxed">{description}</p>
//     </div>
//   );
// };

// const SesameFeatures = () => {
//   return (
//     <div className="bg-white relative py-20 px-4 sm:px-6 lg:px-8">
//       <h1 data-aos="fade-right" className="hidden absolute md:flex flex-col items-center">
//         <span className="transform -rotate-90 whitespace-nowrap tracking-wide text-(--darkgreen)">EARTH <span className='text-[var(--orange)]'>AGRI IMPEX</span></span>
//         <span className="border h-12 mt-18"></span>
//       </h1>
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-16 md:gap-0 gap-10 items-center">

//           {/* Left Side - Image with Border Frame */}
//           <div data-aos="fade-right" className="relative">
//             {/* Thick yellow/gold border frame */}
//             <div className="absolute w-70 lg:w-90 h-90 lg:h-110 mx-auto my-auto inset-0 border-14 border-[var(--darkgreen)] z-0"></div>

//             {/* Image container */}
//             <div className="relative lg:p-8 z-10">
//               <img
//                 src={img1}
//                 alt="Sesame Seeds and Grains"
//                 className="w-120 lg:w-140 mx-auto object-cover"
//               />
//             </div>
//           </div>

//           {/* Right Side - Content */}
//           <div className='flex md:flex-row flex-col items-center'>
//             {/* Features Description */}
//             <div  data-aos="fade-left" className="md:w-sm p-4">
//               <FeatureItem
//                 title="Pure & Organic"
//                 description="Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her."
//               />

//               <FeatureItem
//                 title="Always Fresh"
//                 description="Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her."
//               />
//             </div>

//             {/* Circular Progress Indicators */}
//             <div  data-aos="fade-left" className="grid gap-8 mx-8">
//               <CircularProgress
//                 percentage={93}
//                 color="green"
//                 label="Organic Solutions"
//               />

//               <CircularProgress  data-aos="fade-right" 
//                 percentage={74}
//                 color="amber"
//                 label="Quality Agriculture"
//               />
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default SesameFeatures;

import React from 'react';
import img1 from '../../assets/HomeImg/sesame.png'

const CircularProgress = ({ percentage, color = 'green', label }) => {
  const circumference = 2 * Math.PI * 45; // radius = 45
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-32 h-32">
        {/* Background circle */}
        <svg className="transform -rotate-90 w-32 h-32">
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="#e5e7eb"
            strokeWidth="3"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke={color === 'green' ? '#10b981' : '#fbbf24'}
            strokeWidth="3"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-amber-500">{percentage}%</span>
        </div>
      </div>
      {/* Label */}
      <h4 className="mt-2 text-lg font-bold text-gray-900 text-center">{label}</h4>
    </div>
  );
};

const FeatureItem = ({ title, description }) => {
  return (
    <div className="mb-10 last:mb-0">
      <h3 className="text-2xl font-bold text-[var(--green)] mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const SesameFeatures = () => {
  return (
    <div className="bg-white relative py-20 px-4 sm:px-6 lg:px-8">
      <h1 data-aos="fade-right" className="hidden absolute md:flex flex-col items-center">
        <span className="transform -rotate-90 whitespace-nowrap tracking-wide text-(--darkgreen)">EARTH <span className='text-[var(--orange)]'>AGRI IMPEX</span></span>
        <span className="border h-12 mt-18"></span>
      </h1>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-16 md:gap-0 gap-10 items-center">

          {/* Left Side - Image with Border Frame */}
          <div data-aos="fade-right" className="relative">
            {/* Thick yellow/gold border frame */}
            <div className="absolute w-70 lg:w-90 h-90 lg:h-110 mx-auto my-auto inset-0 border-14 border-[var(--darkgreen)] z-0"></div>

            {/* Image container */}
            <div className="relative lg:p-8 z-10">
              <img
                src={img1}
                alt="Sesame Seeds and Grains"
                className="w-120 lg:w-140 mx-auto object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className='flex md:flex-row flex-col items-center'>
            {/* Features Description */}
            <div  data-aos="fade-left" className="md:w-sm p-4">
              <FeatureItem
                title="Pure & Organic"
                description="Our oil seeds, including white and black sesame, moong (mung beans), and chickpeas, are sourced from organic farms Free from pesticides and chemicals, they retain maximum nutritional value with rich antioxidants, healthy fats, protein, and essential minerals for optimal health."
              />

              <FeatureItem
                title="Always Fresh"
                description="Harvested at peak maturity and carefully processed, our white sesame offers high oil content and nutty flavor, black sesame provides superior antioxidants, moong delivers easily digestible protein and chickpeas supply fiber-rich nutrition—ensuring freshness and quality in every batch."
              />
            </div>

            {/* Circular Progress Indicators */}
            <div  data-aos="fade-left" className="grid gap-8 mx-8">
              <CircularProgress
                percentage={93}
                color="green"
                label="Organic Solutions"
              />

              <CircularProgress  data-aos="fade-right" 
                percentage={74}
                color="amber"
                label="Quality Agriculture"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SesameFeatures;