import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const CounterSection = () => {
  const [counters, setCounters] = useState([
    { value: 0, target: 50, suffix: '+', label: 'Global Partners' },
    { value: 0, target: 150, suffix: '+', label: 'Shipments Delivered' },
    { value: 0, target: 98, suffix: '%', label: 'On-Time Delivery' },
    { value: 0, target: 10, suffix: '+', label: 'Countries Served' }
  ]);

  const [hasAnimated, setHasAnimated] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    counters.forEach((counter, index) => {
      const increment = counter.target / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current = Math.min(step * increment, counter.target);

        setCounters(prev => {
          const newCounters = [...prev];
          newCounters[index] = { ...newCounters[index], value: Math.floor(current) };
          return newCounters;
        });

        if (step >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  };

  return (
    <div ref={sectionRef} className="bg-white py-24 md:py-32 px-6 md:px-12 border-t border-[#0E6F3A]/10">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-7">
            <div data-aos="fade-up" className="font-inter text-[#C66D42] text-sm tracking-[0.2em] uppercase font-semibold mb-4">
              Performance Metrics
            </div>
            <h2 data-aos="fade-up" className="font-playfair text-4xl md:text-6xl text-[#0E6F3A] leading-[1.1] tracking-tight">
              Our Achievements <br className="hidden md:block"/><span className="italic text-[#C66D42]">In Numbers</span>
            </h2>
          </div>
          <div className="lg:col-span-5 pb-2">
            <p data-aos="fade-up" data-aos-delay="100" className="font-inter text-gray-600 text-lg leading-relaxed font-light">
              Driving global logistics with unmatched reliability. Our proven track record ensures seamless delivery and exceptional service worldwide.
            </p>
          </div>
        </div>

        {/* Counter Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {counters.map((counter, index) => (
            <div 
              key={index}
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className="flex flex-col items-center justify-center py-16 px-8 group cursor-default"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative mb-6 py-2">
                <div className="relative inline-block">
                  {/* Full Counter Number */}
                  <span
                    className="font-playfair text-7xl md:text-8xl lg:text-[110px] tracking-tighter leading-none block transition-all duration-500"
                    style={{
                      WebkitTextStroke: '2px #0E6F3A',
                      WebkitTextFillColor: hoveredIndex === index ? '#0E6F3A' : 'transparent',
                      color: hoveredIndex === index ? '#0E6F3A' : 'transparent',
                      lineHeight: '1.15'
                    }}
                  >
                    {counter.value}{counter.suffix}
                  </span>
                </div>
              </div>

              {/* Label */}
              <p className="font-playfair text-2xl md:text-3xl text-[#0E6F3A] text-center mb-3 group-hover:text-[#C66D42] transition-colors duration-500">
                {counter.label}
              </p>
              <p className="font-inter text-xs uppercase tracking-[0.2em] text-[#0E6F3A]/50 font-medium text-center">
                Earth Agri Impex
              </p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div data-aos="fade-up" className="mt-16 flex justify-center">
            <button className="font-inter flex items-center justify-center gap-3 px-10 py-5 bg-[#0E6F3A] text-[#F5F2EB] text-sm uppercase tracking-widest hover:bg-[#C66D42] hover:text-white transition-colors duration-500 w-full sm:w-auto group">
              Contact Us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;