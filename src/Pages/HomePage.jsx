import React, { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import HeroSlider from '../Components/HomeComponents/HeroSlider'
import AboutUs from '../Components/HomeComponents/AboutUs'
import SesameProductsGrid from './../Components/HomeComponents/SesameProductsGrid';
import SesameFeatures from './../Components/HomeComponents/SesameFeatures';
import FAQComponent from './../Components/HomeComponents/FAQComponent';
import CounterSection from './../Components/HomeComponents/CounterSection';
import OurCoreValues from '../Components/HomeComponents/OurCoreValues';
import Testimonial from '../Components/HomeComponents/Testimonial';
import WhyChooseUs from '../Components/AboutUsComponent/WhyChooseUs';

const HomePage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling more than the viewport height (past hero)
      setShowScrollTop(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='outfit overflow-x-hidden bg-[var(--bg-color)]'>
      <HeroSlider />
      <AboutUs />
      <CounterSection />
      <SesameProductsGrid />
      <SesameFeatures />
      <OurCoreValues />
      <FAQComponent />
      <Testimonial />

      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 left-8 z-50 w-14 h-14 bg-[var(--green)] text-white flex items-center justify-center shadow-2xl transition-all duration-500 cursor-pointer group hover:bg-[var(--orange)] ${
          showScrollTop 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" strokeWidth={1.5} />
      </button>
    </div>
  )
}

export default HomePage
