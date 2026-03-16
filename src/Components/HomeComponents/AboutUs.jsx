import React, { useEffect, useRef, useState } from 'react';
import { Wheat, Shield, Award, Globe } from 'lucide-react';
import about from '../../assets/HomeImg/about1.jpg'
import leaf from '../../assets/HomeImg/1.png'

const AboutUs = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [leafOffset, setLeafOffset] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const sectionHeight = rect.height;

        // Calculate scroll progress when section is in view
        if (rect.top < windowHeight && rect.bottom > 0) {
          const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
          const progress = Math.min((visibleHeight / sectionHeight) * 1.5, 1);
          setScrollProgress(progress);
        }

        // Calculate leaf offset based on scroll position
        // Negative value moves leaf up when scrolling down
        const scrollY = window.scrollY;
        setLeafOffset(scrollY * 0.3); // Adjust 0.3 to control speed
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <img
          src={leaf}
          alt=""
          className='hidden md:block absolute z-20 w-30 lg:w-50 left-0 md:left-4 top-100  md:-bottom-30 transition-transform duration-100 ease-out'
          style={{ transform: `translateY(-${leafOffset}px)` }}
        />
        <div data-aos="fade-right" className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Vertical Image */}
          <div className="relative w-90 lg:w-140 h-[400px] md:h-[600px] lg:h-[750px] mx-auto">
            <img
              src={about}
              alt="Agriculture Professional"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div className="outfit space-y-4 lg:px-10">
            {/* Animated Heading */}
            {/* <h1 data-aos="fade-left" className="forum text-3xl lg:text-5xl font-bold leading-tight overflow-hidden text-[var(--orange)]">
              Supplying The World With
              <span className=' text-[var(--dark)] block'> Nature's Finest Sesame</span>
            </h1> */}
            <h1 data-aos="fade-left" className="forum text-3xl lg:text-4xl font-bold leading-tight overflow-hidden text-[var(--orange)]">
              Premium Sesame  
              <span className='text-[var(--dark)] block'>From Earth Agri to Worldwide</span>
            </h1>

            <p data-aos="fade-left" className="outfit text-gray-600 text-md lg:text-lg leading-relaxed">
              {/* Earth Agri Impex is a leading global trader specializing in premium quality sesame seeds, including white and black varieties. With years of expertise in international trade, we bridge the gap between quality producers and discerning buyers worldwide. */}
              {/* We are Dedicated Suppliers of Premium Quality Sesame Seeds, Sourced
              Directly from Trusted Farmers and Processed With the Highest Standards
              of Purity. Our Commitment i s to Deliver Freshness, Flavor, and Nutrition
              i n Every Grain — Ensuring the Best for Your Business and Your Customers. */}
              At Earth Agri Impex, we are dedicated suppliers of premium-quality sesame seeds, sourced directly from trusted farmers and processed with the highest standards of purity. With our promise of Connecting Agri Needs, we ensure freshness, flavor and nutrition in every grain — delivering the very best for your business and your customers.
            </p>

            {/* <p className="text-gray-600 leading-relaxed">
              Our commitment to excellence ensures that every shipment meets the highest standards of purity, quality, and authenticity. We maintain rigorous quality control measures throughout our supply chain, from sourcing to delivery.
            </p> */}

            {/* Stats Section */}
            <div className="flex items-center gap-6 lg:py-4">
              <div data-aos="fade-left" className="flex items-center gap-4">
                <h2 className="text-4xl lg:text-6xl font-semibold text-[var(--darkgreen)]">25M</h2>
                <div className="h-16 w-px bg-gray-300"></div>
              </div>
              <div>
                <p data-aos="fade-left" className="text-lg lg:text-xl font-semibold text-gray-900">Growth Tonnes</p>
                <p data-aos="fade-left" className="text-gray-600">of Harvest</p>
              </div>
            </div>

            {/* Two Cards Below Content */}
            <div className="flex flex-col md:flex-row w-200 md:-translate-x-40 gap-6">
              {/* Yellow Card - Quality Guarantee */}
              <div data-aos="fade-left" className="bg-[#F7C35F] w-[360px] md:w-[250px] lg:w-[350px] h-60 lg:h-70 p-6 shadow-lg">
                <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4">
                  <Wheat className="w-7 h-7 text-yellow-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  100% Premium Quality Guaranteed
                </h3>
                <p className="text-gray-700 text-sm">
                  We source and supply only the finest white and black sesame seeds, rigorously tested for purity, freshness and nutritional excellence.
                </p>
              </div>

              {/* Green Card - Sustainable/Healthy Production */}
              <div data-aos="fade-left" className="bg-green-600 w-[360px] md:w-[250px] lg:w-[350px] h-60 lg:h-70 p-6 shadow-lg">
                <div className="flex items-center justify-center w-14 h-14 bg-white rounded-full mb-4">
                  <Globe className="w-7 h-7 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Sustainable & Nutrient-Rich Sesame Production
                </h3>
                <p className="text-green-50 text-sm">
                  From farm to you: High-quality white and black sesame seeds grown sustainably, packed with natural antioxidants, minerals and healthy oils.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
