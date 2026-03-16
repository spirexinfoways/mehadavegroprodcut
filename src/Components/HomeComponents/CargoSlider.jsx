// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import s1 from '../../assets/HomeImg/l1.webp';
// import s2 from '../../assets/HomeImg/l2.webp';

// const CargoSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const slides = [
//     {
//       id: 1,
//       title: 'Sea Freight Services',
//       subtitle: 'Read More',
//       image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop',
//     },
//     {
//       id: 2,
//       title: 'Global Cargo Tracking',
//       subtitle: 'Read More',
//       image: s1,
//     },
//     {
//       id: 3,
//       title: 'Efficient Freight Solutions',
//       subtitle: 'Read More',
//       image: s2,
//     },
//     {
//       id: 4,
//       title: 'Air Cargo Services',
//       subtitle: 'Read More',
//       image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&h=600&fit=crop',
//     },
//     {
//       id: 5,
//       title: 'Warehouse Solutions',
//       subtitle: 'Read More',
//       image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
//     }
//   ];

//   const nextSlide = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentIndex((prev) => (prev + 1) % slides.length);
//       setTimeout(() => setIsAnimating(false), 700);
//     }
//   };

//   const prevSlide = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
//       setTimeout(() => setIsAnimating(false), 700);
//     }
//   };

//   const goToSlide = (index) => {
//     if (!isAnimating && index !== currentIndex) {
//       setIsAnimating(true);
//       setCurrentIndex(index);
//       setTimeout(() => setIsAnimating(false), 700);
//     }
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 5000);
//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   const getSlidePosition = (index) => {
//     const diff = index - currentIndex;
//     const total = slides.length;

//     if (diff === 0) return 0; // center
//     if (diff === 1 || diff === -(total - 1)) return 1; // right
//     if (diff === -1 || diff === (total - 1)) return -1; // left
//     return diff > 0 ? 2 : -2; // far right or far left
//   };

//   return (
//     <div className="relative w-full bg-white py-16 overflow-hidden">
//       <div className="mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h2 className="text-5xl font-bold text-gray-900 mb-6">Explore Our Logistics Solutions</h2>
//           <p className="text-gray-600 text-md max-w-2xl mx-auto">
//             Discover our comprehensive range of freight and logistics services designed to streamline your supply chain. 
//             From sea and air transport to global tracking and warehousing, we ensure efficient and reliable solutions tailored to your needs.
//           </p>
//         </div>

//         {/* Slider Container */}
//         <div className="relative h-[550px] flex items-center justify-center mb-12">
//           <div className="absolute inset-0 flex items-center justify-center">
//             {slides.map((slide, index) => {
//               const position = getSlidePosition(index);

//               return (
//                 <div
//                   key={slide.id}
//                   onClick={() => position !== 0 && goToSlide(index)}
//                   className={`absolute transition-all duration-700 ease-in-out ${
//                     position === 0
//                       ? 'z-30 opacity-100'
//                       : position === 1
//                       ? 'z-20 opacity-90'
//                       : position === -1
//                       ? 'z-20 opacity-90'
//                       : 'z-10 opacity-0 pointer-events-none'
//                   }`}
//                   style={{
//                     transform: `translateX(${
//                       position === 0 ? '0px' : position === 1 ? '660px' : position === -1 ? '-660px' : '0px'
//                     }) scale(${position === 0 ? '1' : '0.85'})`,
//                     transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
//                   }}
//                 >
//                   <div className={`relative w-[700px] h-[480px] rounded-2xl overflow-hidden shadow-2xl ${
//                     position !== 0 ? 'cursor-pointer' : ''
//                   }`}>
//                     {/* Image */}
//                     <img
//                       src={slide.image}
//                       alt={slide.title}
//                       className="w-full h-full object-cover"
//                     />

//                     {/* Gradient Overlay - only visible on center card */}
//                     {position === 0 && (
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
//                     )}

//                     {/* Dark overlay on side cards */}
//                     {position !== 0 && (
//                       <div className="absolute inset-0 bg-black/30"></div>
//                     )}

//                     {/* Content - only visible on center card */}
//                     {position === 0 && (
//                       <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
//                         <h3 className="text-4xl font-bold mb-4">
//                           {slide.title}
//                         </h3>
//                         <button className="px-6 py-2.5 bg-white/90 text-gray-900 rounded-md text-base font-semibold hover:bg-white transition-all duration-300 shadow-lg">
//                           {slide.subtitle}
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Dots Indicator */}
//         <div className="flex justify-center gap-3">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               disabled={isAnimating}
//               className={`transition-all cursor-pointer duration-300 rounded-full disabled:cursor-not-allowed ${
//                 index === currentIndex
//                   ? 'w-10 h-3 bg-orange-500'
//                   : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CargoSlider;

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import s1 from '../../assets/HomeImg/l1.webp';
import s2 from '../../assets/HomeImg/l2.webp';

const CargoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      title: 'Global Cargo Tracking',
      description: 'Real-time visibility for your shipments worldwide. Track and manage with ease.',
      image: s1,
    },
    {
      id: 2,
      title: 'Efficient Freight Solutions',
      description: 'Streamlined logistics for faster delivery. Customized services for your business.',
      image: s2,
    },
    {
      id: 3,
      title: 'Sea Freight Services',
      description: 'Reliable ocean transport for global shipping needs. Cost-effective solutions for bulk cargo.',
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop',
    },
    {
      id: 4,
      title: 'Air Cargo Services',
      description: 'Swift and secure air transport solutions. Ideal for time-sensitive shipments.',
      image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?w=800&h=600&fit=crop',
    },
    {
      id: 5,
      title: 'Warehouse Solutions',
      description: 'Advanced storage and inventory management. Optimize your supply chain.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
    }
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating && index !== currentIndex) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 700);
    }
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const getSlidePosition = (index) => {
    const diff = index - currentIndex;
    const total = slides.length;

    if (diff === 0) return 0; // center
    if (diff === 1 || diff === -(total - 1)) return 1; // right
    if (diff === -1 || diff === (total - 1)) return -1; // left
    return diff > 0 ? 2 : -2; // far right or far left
  };

  return (
    <div className="relative w-full bg-white py-10 md:py-16 overflow-hidden">
      <div className="mx-auto px-4">
        {/* Header */}
        <div className="text-center md:mb-8">
          <h1  data-aos="fade-up" className="forum text-4xl md:text-5xl font-bold leading-tight overflow-hidden text-[var(--orange)]">
            Explore Our  <span className='text-[var(--dark)]'>Logistics Solutions</span>
          </h1>
          <p  data-aos="fade-up" className="text-md md:text-lg text-gray-600 md:w-lg font-medium mx-auto leading-relaxed mt-4">
              Discover our comprehensive range of freight and logistics services designed to streamline your supply chain.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative h-[550px] flex items-center justify-center md:mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            {slides.map((slide, index) => {
              const position = getSlidePosition(index);

              return (
                <div
                  key={slide.id}
                  onClick={() => position !== 0 && goToSlide(index)}
                  className={`absolute transition-all duration-700 ease-in-out ${position === 0
                      ? 'z-30 opacity-100'
                      : position === 1
                        ? 'z-20 opacity-90'
                        : position === -1
                          ? 'z-20 opacity-90'
                          : 'z-10 opacity-0 pointer-events-none'
                    }`}
                  style={{
                    transform: `translateX(${position === 0 ? '0px' : position === 1 ? '660px' : position === -1 ? '-660px' : '0px'
                      }) scale(${position === 0 ? '1' : '0.85'})`,
                    transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                >
                  <div className={`relative md:w-[700px] h-[380px] md:h-[480px] rounded-2xl overflow-hidden shadow-xl ${position !== 0 ? 'cursor-pointer' : ''
                    }`}>
                    {/* Image */}
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <h3 className="text-2xl font-medium mb-2">
                        {slide.title}
                      </h3>
                      {position === 0 && (
                        <p className="text-base font-light leading-relaxed md:w-lg">
                          {slide.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isAnimating}
              className={`transition-all cursor-pointer duration-300 rounded-full disabled:cursor-not-allowed ${index === currentIndex
                  ? 'w-10 h-3 bg-[var(--orange)]'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CargoSlider;