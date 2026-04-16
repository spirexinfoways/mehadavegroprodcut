import React, { useEffect, useRef, useState } from 'react';
import { Wheat, Globe } from 'lucide-react';
import about from '../../assets/HomeImg/about1.jpg';

const AboutUs = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const scrollY = window.scrollY;
        // Subtle parallax effect for the giant watermark stat
        setScrollProgress(scrollY * 0.15);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 px-6 md:px-12 overflow-hidden selection:bg-[var(--green)] selection:text-[#F5F2EB]">
      {/* Giant Watermark Stat */}
      <div 
        className="absolute top-10 left-30 sm:top-20 -left-10 sm:-left-20 text-[8rem] sm:text-[12rem] md:text-[25rem] lg:text-[35rem] font-bold text-[var(--green)] opacity-[0.10] leading-none whitespace-nowrap z-0 outfit tracking-tighter transition-transform duration-300 ease-out"
        style={{ transform: `translateY(-${scrollProgress}px)` }}
      >
        25M
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-12 lg:gap-16">
          
          {/* Editorial Heading spanning multiple columns */}
          <div data-aos="fade-up" className="md:col-span-12 lg:col-span-10 lg:col-start-2 z-20 md:mb-8">
            <h2 className="text-[var(--green)] text-4xl sm:text-5xl md:text-7xl lg:text-[100px] outfit leading-[1.05] tracking-tight">
              Premium Sesame<span className="hidden md:inline">,</span> <br className="hidden md:block"/> 
              <span className="italic font-light text-[var(--orange)] mr-4">From Mahadev Agro Product</span> 
              <span className="block md:inline mt-2 md:mt-0">to Worldwide.</span>
            </h2>
          </div>

          {/* Main Cinematic Image - Overlapping */}
          <div data-aos="fade-up" data-aos-delay="100" className="md:col-span-6 lg:col-span-5 lg:col-start-2 relative z-10">
             <div className="relative w-full h-[350px] sm:h-[450px] md:h-[600px] lg:h-[750px] border border-[var(--green)]/20 p-2 md:p-3 bg-[#F5F2EB]">
                <img src={about} alt="Premium Sesame Seeds" className="w-full h-full object-cover filter contrast-[1.1] saturate-[0.85]" />
             </div>
             {/* Small floating editorial tag */}
             <div className="absolute -bottom-4 right-0 sm:-bottom-6 sm:-right-6 lg:-right-12 bg-[var(--green)] text-[#F5F2EB] p-4 sm:p-6 lg:p-8 outfit text-[10px] sm:text-xs md:text-sm tracking-[0.2em] uppercase shadow-2xl">
                Harvesting Excellence
             </div>
          </div>

          {/* Content & Features */}
          <div data-aos="fade-up" data-aos-delay="200" className="md:col-span-6 lg:col-span-4 lg:col-start-8 flex flex-col justify-center pt-8 md:pt-16 lg:pt-32">
             <p className="outfit text-[#2d4a36] text-lg lg:text-xl leading-relaxed font-light mb-16 px-4 md:px-0 border-l border-[var(--green)]/30 ml-2 md:ml-0 pl-6 md:pl-0 md:border-none">
                At Mahadev Agro Product, we are dedicated suppliers of premium-quality sesame seeds, sourced directly from trusted farmers and processed with the highest standards of purity. We ensure freshness, flavor, and nutrition in every grain.
             </p>

             <div className="space-y-0">
                 {/* Minimalist Feature 1 */}
                 <div className="border-t border-[var(--green)]/20 pt-8 pb-8 group cursor-default">
                    <div className="flex items-start gap-6">
                       <Wheat className="w-7 h-7 text-[var(--orange)] stroke-[1.5] mt-1 shrink-0 group-hover:scale-110 transition-transform duration-500" />
                       <div>
                          <h3 className="outfit text-2xl md:text-3xl text-[var(--green)] mb-3 group-hover:text-[var(--orange)] transition-colors duration-300">100% Premium Quality</h3>
                          <p className="outfit text-[15px] text-gray-700 leading-relaxed font-light">We source and supply only the finest white and black sesame seeds, rigorously tested for purity and nutritional excellence.</p>
                       </div>
                    </div>
                 </div>

                 {/* Minimalist Feature 2 */}
                 <div className="border-t border-[var(--green)]/20 pt-8 pb-8 group cursor-default">
                    <div className="flex items-start gap-6">
                       <Globe className="w-7 h-7 text-[var(--orange)] stroke-[1.5] mt-1 shrink-0 group-hover:scale-110 transition-transform duration-500" />
                       <div>
                          <h3 className="outfit text-2xl md:text-3xl text-[var(--green)] mb-3 group-hover:text-[var(--orange)] transition-colors duration-300">Sustainable Production</h3>
                          <p className="outfit text-[15px] text-gray-700 leading-relaxed font-light">From farm to you: High-quality sesame grown sustainably, packed with natural antioxidants, minerals and healthy oils.</p>
                       </div>
                    </div>
                 </div>
                 
                 {/* Bottom cap border */}
                 <div className="border-t border-[var(--green)]/20 w-full" />
             </div>
          </div>

          {/* Huge Typographic Stat integrated in grid bottom */}
          {/* <div data-aos="fade-up" className="md:col-span-12 lg:col-span-10 lg:col-start-2 border-t border-[var(--green)]/20 mt-12 md:mt-24 pt-12 flex flex-col md:flex-row items-start md:items-end justify-between gap-8 pb-8">
             <div className="outfit text-4xl lg:text-5xl text-[var(--green)] leading-[1.15] max-w-xl">
                 Cultivating <span className="italic text-[var(--orange)]">25 Million</span> Tonnes of Growth and Harvest.
             </div>
             <div className="outfit text-xs md:text-sm uppercase tracking-[0.3em] text-[var(--green)]/60 font-semibold mb-2">
                 Global Reach • Mahadev Agro Product
             </div>
          </div> */}
          
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
