import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowBigRight } from 'lucide-react';
import s1 from '../../assets/HomeImg/1.png'
import s2 from '../../assets/HomeImg/slider1.png'
import s3 from '../../assets/HomeImg/mung-beans-plateon-black-cement-floor.png'
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
        <div className="relative w-full h-[100dvh] min-h-[600px] md:h-screen overflow-hidden group/slider border-b-2 border-transparent">
            {/* <img src={leaves} alt="" className='hidden md:block absolute z-20 w-40 md:w-60 lg:w-90 top-11 md:-top-2 opacity-90 ' /> */}

            {/* Background Images with Smooth Transition */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 z-[-1]'
                        }`}
                >
                    <img
                        src={slide.image}
                        alt="Hero background"
                        className="w-full h-full object-cover"
                    />
                    {/* Modern Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/30 md:to-transparent"></div>
                </div>
            ))}

            {/* Ultra-Premium Decorative SVGs */}
            {/* <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden"> */}
                {/* Organic Abstract Glow Blobs */}
                {/* <div className="absolute top-[-10%] right-[-5%] w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-[var(--orange)] rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] mix-blend-screen filter blur-[100px] md:blur-[140px] opacity-20 animate-pulse-glow animate-float"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] md:w-[700px] h-[500px] md:h-[700px] bg-[#226707] rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] mix-blend-screen filter blur-[100px] md:blur-[150px] opacity-20 animate-pulse-glow" style={{ animationDelay: '2s' }}></div> */}

                {/* Highly Detailed Custom Vector Leaf - Top Left */}
                {/* <div className="absolute top-[8%] left-[2%] w-48 md:w-80 h-48 md:h-80 opacity-[0.15] animate-float drop-shadow-[0_15px_30px_rgba(227,116,37,0.5)] z-20">
                    <svg viewBox="0 0 512 512" fill="var(--orange)" preserveAspectRatio="xMidYMid meet">
                        <path d="M504.6 156.9c-8.9-8.9-24.3-13.8-38.3-13.8-49 0-120.4 35.8-185.1 86 18-24 38.3-51.5 56.5-80.6 8-12.8 8.1-15.5 8.1-18.7 0-14.7-9.5-29.3-24-34.9-10.3-4-23.7-2-32.9 5.8-32.5 27.2-66.3 64.9-97.4 104.1-1.7 2.2-3.4 4.3-5.1 6.5C148.9 146.1 118 73.8 116.3 69.3c-4.4-11.7-15-18.3-27.4-18.3-13.5 0-25 8.5-29.2 21.3-46.7 141-59.5 258.4-59.5 259 0 7.8 2.6 15.4 7.5 21.4 5.9 7.2 14.5 11.2 23.6 11.2h.5c62.6-3 147.2-22.9 220-64.4.1 0 .2-.1.3-.1 55.4 32.7 114.7 54.3 158.4 54.3h.5c16.3-.6 30.6-11.2 35-27.1 5.3-19.1 5-41.5-.7-66.5-12.4-55.2-35-115.3-64.2-167.3-11.2-18.9-38.6-25.1-57.5-13.9s-25.1 38.6-13.9 57.5c22.1 39.3 39.2 84.6 48.6 126.9-32.1-4.7-72.2-21.7-111.4-46.8l12.7-16.1c52.2-66 111.5-110.1 143.1-125.8 4.2-2.1 7.1-5.1 9-8.6 1.7-3.1 2.3-6.5 1.7-9.8z"/>
                    </svg>
                </div> */}

                {/* Elegant Geometric Leaf - Bottom Right */}
                {/* <div className="absolute bottom-[25%] right-[5%] w-32 md:w-56 h-32 md:h-56 text-white opacity-[0.25] animate-float-delayed drop-shadow-2xl transform rotate-[20deg] z-20">
                    <svg viewBox="0 0 512 512" fill="currentColor">
                        <path d="M504,443.2L361.6,300.8c20.3-69.3-5-149.6-67.6-200.7c-78.2-63.7-195-65.7-195-65.7s-8,6.4-15.5,19.2 C31.6,131-31,348.8,17.4,402.7c17.6,19.6,44,25.8,70.5,18.8c42.5-11.2,118.5-72.9,157.8-135.5L401.5,441c8.4,8.4,22,8.4,30.4,0 L504,368.8C512.4,360.4,512.4,346.8,504,338.4z"/>
                    </svg>
                </div> */}

                {/* Refined Flowing Lines - Top Right */}
                {/* <div className="absolute right-[5%] top-[15%] w-[250px] md:w-[350px] opacity-[0.2] text-[var(--orange)] animate-float-delayed z-10 drop-shadow-lg">
                    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M 50,250 C 150,250 200,150 300,50" stroke="currentColor" strokeWidth="3" strokeDasharray="12 12"/>
                         <path d="M 100,300 C 200,300 250,200 350,100" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" opacity="0.6"/>
                         <circle cx="300" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="4"/>
                         <circle cx="350" cy="100" r="8" fill="currentColor"/>
                    </svg>
                </div> */}

                {/* Elegant Minimal Leaf - Bottom Left */}
                {/* <div className="absolute bottom-[20%] left-[8%] w-24 md:w-36 h-24 md:h-36 text-[#84cc16] opacity-[0.25] animate-float transform -rotate-[15deg] z-20 drop-shadow-2xl">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                       <path d="M22,3C22,3 15,3 10,8C5,13 5,19 5,19L3,22L4,23L7,21C7,21 13,21 18,16C23,11 23,4 23,4L22,3Z" />
                       <path d="M17,9C8,11 5.9,17.1 5.1,21.2C5,21.6 5.4,22 5.8,21.9C9.9,20.9 16,18.8 18,9.8C18.2,9 17.5,8.4 16.8,8.6L17,9Z" fill="white" opacity="0.5"/>
                    </svg>
                </div> */}

                {/* Micro Particles */}
                {/* <div className="absolute top-[20%] left-[40%] w-2 md:w-3 h-2 md:h-3 bg-white rounded-full opacity-60 animate-float-delayed shadow-[0_0_15px_white] z-20"></div>
                <div className="absolute top-[60%] left-[25%] w-3 md:w-5 h-3 md:h-5 bg-[var(--orange)] rounded-full opacity-50 animate-float shadow-[0_0_15px_var(--orange)] z-20"></div>
                <div className="absolute top-[30%] right-[35%] w-2 md:w-4 h-2 md:h-4 bg-white rounded-full opacity-40 animate-float-delayed shadow-[0_0_15px_white] z-20"></div>
                <div className="absolute bottom-[35%] left-[45%] w-1.5 md:w-2.5 h-1.5 md:h-2.5 bg-[#84cc16] rounded-full opacity-70 animate-float shadow-[0_0_10px_#84cc16] z-20"></div>
            </div> */}

            {/* Content Container */}
            <div className="relative h-full flex items-center z-20 pointer-events-none">
                <div className="container mx-auto px-6 md:px-12 lg:px-24 pointer-events-auto">
                    <div className="max-w-3xl pt-16 md:pt-0">
                        {/* Small Top Badge */}
                        <div className="inline-flex items-center gap-3 px-4 py-2 md:px-5 md:py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 md:mb-8 overflow-hidden animate-slideIn">
                            <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--orange)] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-[var(--orange)]"></span>
                            </span>
                            <span className="outfit text-white text-[10px] sm:text-xs md:text-sm font-semibold tracking-widest uppercase">
                                {slides[currentSlide].badge}
                            </span>
                        </div>

                        {/* Main Heading */}
                        <div className="overflow-hidden">
                            <h1
                                key={currentSlide}
                                className="outfit text-4xl sm:text-5xl md:text-7xl lg:text-[85px] font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-[1.1] animate-slideIn tracking-tight drop-shadow-xl"
                            >
                                {slides[currentSlide].title}
                            </h1>
                        </div>

                        {/* Description */}
                        <div className="overflow-hidden">
                            <p
                                key={`desc-${currentSlide}`}
                                className="outfit text-sm sm:text-base md:text-xl lg:text-2xl font-light text-gray-200 mb-6 sm:mb-8 md:mb-10 max-w-2xl leading-relaxed animate-slideIn animation-delay-100 drop-shadow-lg"
                            >
                                {slides[currentSlide].description}
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-3 md:gap-6 animate-slideIn animation-delay-200">
                            <button className="outfit cursor-pointer flex items-center gap-2 px-5 py-2.5 md:px-8 md:py-4 text-sm md:text-base bg-[var(--orange)] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(227,116,37,0.5)] group">
                                Discover More
                                <ArrowBigRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="outfit cursor-pointer px-5 py-2.5 md:px-8 md:py-4 text-sm md:text-base rounded-full border border-white/30 text-white font-semibold flex items-center gap-2 hover:bg-white/10 hover:border-white/50 backdrop-blur-sm transition-all duration-300">
                                Our Products
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rotating Badge on the right */}
            <div className="hidden lg:block absolute right-16 lg:right-24 bottom-24 z-20 animate-slideIn animation-delay-300 bottom-55 pointer-events-auto">
                <div className="relative w-[180px] h-[180px] rounded-full p-2 bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl flex items-center justify-center transition-transform duration-500 hover:scale-105 cursor-pointer group">
                    {/* Rotating Text Square/Circle */}
                    <svg className="w-full h-full animate-spin-slow" viewBox="0 0 160 160">
                        <defs>
                            <path
                                id="circlePath"
                                d="M 80, 80 m -60, 0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
                            />
                        </defs>
                        <text className="text-[14px] fill-white font-bold tracking-[0.2em] uppercase outfit opacity-90">
                            <textPath href="#circlePath" startOffset="0">
                                IMPORT • EXPORT • GLOBAL •
                            </textPath>
                        </text>
                    </svg>

                    {/* Center Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-[var(--orange)] rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(227,116,37,0.4)] group-hover:scale-110 transition-transform">
                            <ArrowBigRight size={32} className="transform -rotate-45" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows at Bottom Right */}
            <div className="absolute bottom-20 md:bottom-12 right-6 md:right-12 z-20 flex gap-3 md:gap-4 opacity-100 md:opacity-0 group-hover/slider:opacity-100 transition-opacity duration-500 pointer-events-auto">
                <button
                    onClick={prevSlide}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[var(--orange)] hover:border-[var(--orange)] transition-all duration-300 group cursor-pointer"
                >
                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-1 transition-transform" />
                </button>
                <button
                    onClick={nextSlide}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-[var(--orange)] hover:border-[var(--orange)] transition-all duration-300 group cursor-pointer"
                >
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Indicators Bottom Center */}
            <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-30 pointer-events-auto">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`transition-all duration-300 rounded-full cursor-pointer ${index === currentSlide ? 'w-6 h-2 md:w-8 md:h-2.5 bg-[var(--orange)]' : 'w-2 h-2 md:w-2.5 md:h-2.5 bg-white/50 hover:bg-white/80'}`}
                    ></button>
                ))}
            </div>

            {/* Premium Multi-Layer Wave Divider */}
            {/* <div className="absolute bottom-0 left-0 w-full leading-[0] z-20 pointer-events-none drop-shadow-lg">
                <svg className="relative block w-full h-[60px] md:h-[140px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="#ffffff"></path>
                    <path d="M0,0V15.81C13.47,23.32,28.89,29.93,46.12,35.4c48.81,15.54,100.93,22.75,152.41,21.57,67.33-1.54,131.78-22,198.54-28.7,69.65-7,137.95,6.58,205.86,21.9,64.21,14.5,129.21,26.54,195.42,23.36,54.89-2.61,108-16.14,159.26-34.91C1014.24,18.86,1085.39,2,1157.17,2.2c14.51,0,29.13,1.35,42.83,4.03V0Z" opacity=".5" fill="#ffffff"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" opacity=".75" fill="#ffffff"></path>
                    <path d="M1200,120H0V60.91c78.89-26.69,158.74-45.69,243.62-41.9,76.5,3.4,147.28,32.32,221.73,50.75,70.52,17.48,143.95,20.48,216.92,11.23C770.21,70,845.82,43.25,925.32,32.43,1014,20.67,1099.34,31.7,1179.84,60.2c6.8,2.43,13.56,5,20.16,7.74Z" fill="#ffffff"></path>
                </svg>
            </div> */}

            <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-slideIn {
          animation: slideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animation-delay-100 {
          animation-delay: 0.15s;
        }

        .animation-delay-200 {
          animation-delay: 0.30s;
        }
        
        .animation-delay-300 {
          animation-delay: 0.45s;
        }
      `}</style>
        </div>
    );
};

export default HeroSlider;