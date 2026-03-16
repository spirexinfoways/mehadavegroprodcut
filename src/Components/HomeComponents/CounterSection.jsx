import React, { useState, useEffect, useRef } from 'react';

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
    <div ref={sectionRef} className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h1 data-aos="fade-up" className="forum text-4xl md:text-5xl font-bold leading-tight overflow-hidden text-[var(--orange)]">
            Our Achivements <span className='text-[var(--dark)]'>In Number</span>
          </h1>
          <p data-aos="fade-up" className="text-md md:text-lg text-gray-600 md:w-lg font-medium mx-auto leading-relaxed mt-4">
            Driving global logistics with unmatched reliability.
            Our proven track record ensures seamless delivery
            and exceptional service worldwide.
          </p>
        </div>

        {/* Counter Stats - Single Row */}
        <div data-aos="fade-up" className="font-sans flex flex-col md:flex-row flex-wrap justify-center items-stretch">
          {counters.map((counter, index) => (
            <React.Fragment key={index}>
              <div 
                className="flex flex-col items-center justify-center py-8 md:py-12 px-6 md:px-10 group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Stroke Number with Fill Animation */}
                <div className="relative mb-4 cursor-pointer">
                  <div className="relative inline-block overflow-hidden">
                    {/* Background stroke text */}
                    <span
                      className="text-6xl md:text-5xl lg:text-8xl font-bold relative inline-block"
                      style={{
                        WebkitTextStroke: '2px #1A7D41',
                        WebkitTextFillColor: 'transparent',
                        color: 'transparent'
                      }}
                    >
                      {counter.value}{counter.suffix}
                    </span>

                    {/* Filled text overlay with slide animation */}
                    <span
                      className="absolute top-0 left-0 text-6xl md:text-7xl lg:text-8xl font-bold overflow-hidden transition-all duration-700 ease-out"
                      style={{
                        WebkitTextStroke: '2px #1A7D41',
                        WebkitTextFillColor: '#1A7D41',
                        color: '#1A7D41',
                        clipPath: hoveredIndex === index ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
                        width: '100%'
                      }}
                    >
                      {counter.value}{counter.suffix}
                    </span>
                  </div>
                </div>

                {/* Label */}
                <p className="outfit text-base md:text-lg font-semibold text-gray-700 text-center whitespace-nowrap">
                  {counter.label}
                </p>
              </div>

              {/* Vertical Divider - Only show between items, not after last one */}
              {index < counters.length - 1 && (
                <div className="hidden md:block flex items-center justify-center py-8">
                  <div className="h-24 md:h-32 w-px bg-gradient-to-b from-transparent via-[var(--orange)] to-transparent"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div data-aos="fade-up" className="max-w-7xl mx-auto mt-5 text-center">
          <button className="outfit cursor-pointer cta-button relative px-12 tracking-wider py-4 bg-[var(--orange)] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 ">
            <span className="relative z-10">Contact Us</span>
            <span className="button-fill"></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;