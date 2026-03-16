import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowBigRight } from 'lucide-react';
import s1 from '../../assets/HomeImg/1.jpg'
import s2 from '../../assets/HomeImg/slider1.jpg'
import s3 from '../../assets/HomeImg/mung-beans-plateon-black-cement-floor.jpg'
import leaves from '../../assets/HomeImg/2.png'

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: s1, // Suggested: Close-up of premium white sesame seeds
            title: "Premium Quality Sesame Seeds",
            description: "Sourcing and exporting the finest white and black sesame seeds with unmatched purity and quality for global markets.",
            badge: "99.99% PURE"
        },
        {
            image: s2, // Suggested: Close-up of premium black sesame seeds
            title: "White & Black Sesame Excellence",
            description: "Superior grade white and black sesame seeds, carefully selected and processed to meet the highest international standards.",
            badge: "TOP GRADE"
        },
        {
            image: s3, // Suggested: Bulk export packaging of sesame seeds
            title: "Global Export Specialists",
            description: "Reliable supply of export-ready white and black sesame seeds, building strong partnerships worldwide.",
            badge: "EXPORT QUALITY"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full h-120 md:h-screen overflow-hidden">
            <img src={leaves} alt="" className='hidden md:block absolute z-10 w-40 md:w-60 lg:w-90 top-11 md:-top-2 opacity-90' />
            {/* Background Images with Smooth Transition */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={slide.image}
                        alt="Hero background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
            ))}

            {/* Content Container */}
            <div className="relative h-full flex items-center">
                <div className="container mx-auto px-8 md:px-0 lg:px-16">
                    <div className="flex items-center justify-between">
                        {/* Left Section - Badge and Content in Flex */}
                        <div className="flex-1 max-w-4xl md:mx-38">
                            <div className="flex md:flex-row flex-col gap-8">
                                {/* Circular Rotating Badge with Glass Effect */}
                                <div className="hidden md:block mb-8 me-8 z-20">
                                    <div className="bedge heading relative md:w-[150px] lg:w-[200px] md:h-[150px] lg:h-[200px] rounded-full p-3">
                                        {/* Rotating Text Circle */}
                                        <svg className="w-full h-full animate-spin-slow" viewBox="0 0 160 160">
                                            <defs>
                                                <path
                                                    id="circlePath"
                                                    d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                                                />
                                            </defs>
                                            <text className="text-md fill-white font-bold tracking-widest uppercase">
                                                <textPath href="#circlePath" startOffset="0">
                                                    {slides[currentSlide].badge} • IMPORT EXPORT
                                                </textPath>
                                            </text>
                                        </svg>

                                        {/* Center Arrow */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transform -rotate-45">
                                                <ArrowBigRight size={74} strokeWidth={2} absoluteStrokeWidth className='text-white' />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="lg:flex-1 lg:w-xl pe-10 md:pe-0">
                                    {/* Main Heading with Smooth Transition */}
                                    <div className="overflow-hidden">
                                        <h1
                                            key={currentSlide}
                                            className="heading text-4xl md:text-3xl lg:text-5xl xl:text-[90px] font-bold text-white mb-6 leading-tight animate-slideIn tracking-wider"
                                        >
                                            {slides[currentSlide].title}
                                        </h1>
                                    </div>

                                    {/* Description with Smooth Transition */}
                                    <div className="overflow-hidden">
                                        <p
                                            key={`desc-${currentSlide}`}
                                            className="outfit text-sm md:text-lg font-medium -z-1 md:z-0 lg:text-md tracking-wide text-gray-200 mb-8 max-w-2xl leading-relaxed animate-slideIn animation-delay-100"
                                        >
                                            {slides[currentSlide].description}
                                        </p>
                                    </div>

                                    {/* CTA Button with Center Fill Effect */}
                                    <button className="outfit cursor-pointer cta-button relative px-8 py-4 bg-[var(--orange)] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 ">
                                        <span className="relative z-10">Discover More</span>
                                        <span className="button-fill"></span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Section - Navigation Arrows */}
                        <div className="hidden lg:flex flex-col gap-4 ml-8">
                            <button
                                onClick={prevSlide}
                                className="nav-arrow cursor-pointer relative w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-700 hover:scale-110 shadow-lg overflow-hidden"
                            >
                                <ChevronLeft className="w-6 h-6 text-white relative z-10" />
                                <span className="arrow-fill"></span>
                            </button>

                            <button
                                onClick={nextSlide}
                                className="nav-arrow cursor-pointer relative w-14 h-14 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-700 hover:scale-110 shadow-lg overflow-hidden"
                            >
                                <ChevronRight className="w-6 h-6 text-white relative z-10" />
                                <span className="arrow-fill"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Arrows */}
            <div className="hidden">
                <button
                    onClick={prevSlide}
                    className="nav-arrow absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 overflow-hidden"
                >
                    <ChevronLeft className="w-5 h-5 text-white relative z-10" />
                    <span className="arrow-fill"></span>
                </button>

                <button
                    onClick={nextSlide}
                    className="nav-arrow absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300 border border-white/20 overflow-hidden"
                >
                    <ChevronRight className="w-5 h-5 text-white relative z-10" />
                    <span className="arrow-fill"></span>
                </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[var(--orange)]' : 'bg-white/50 hover:bg-white/70'}`}
                    ></button>
                ))}
            </div>

            <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fillFromCenter {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 1;
          }
        }

        @keyframes emptyFromCenter {
          0% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-slideIn {
          animation: slideIn 0.8s ease-out forwards;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .bedge {
          background-color: rgb(0, 0, 0, 0.6);
        }

        /* CTA Button Left-Right Fill Effect */
        .cta-button .button-fill {
          position: absolute;
          top: 0;
          left: 50%;
          width: 0;
          height: 100%;
          background-color: var(--dark);
          transform: translateX(-50%);
          transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 0.5);
          z-index: 0;
        }

        .cta-button:hover .button-fill {
          width: 100%;
        }

        .cta-button:not(:hover) .button-fill {
          width: 0;
          transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 0.5);
        }

        /* Navigation Arrow Center Fill Effect - Fill In and Out */
        .nav-arrow .arrow-fill {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          background-color: var(--dark);
          opacity : 1px;
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(0);
          transition: transform 0.9s cubic-bezier(0.4, 0, 0.2, 0.5);
          z-index: 0;
        }

        .nav-arrow:hover .arrow-fill {
          transform: translate(-50%, -50%) scale(2);
        }

        .nav-arrow:not(:hover) .arrow-fill {
          transform: translate(-50%, -50%) scale(0);
          transition: transform 0.9s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
        </div>
    );
};

export default HeroSlider;