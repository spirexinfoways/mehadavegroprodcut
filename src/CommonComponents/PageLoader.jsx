import React, { useEffect, useState, useRef } from 'react';
import logo from '../assets/HomeImg/logo1.png';

const TOTAL_DURATION = 3000; // 3 seconds total

const PageLoader = ({ children }) => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  const [slideUp, setSlideUp] = useState(false);
  const startTimeRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    startTimeRef.current = performance.now();

    const animate = (now) => {
      const elapsed = now - startTimeRef.current;
      const pct = Math.min(Math.floor((elapsed / TOTAL_DURATION) * 100), 100);
      setProgress(pct);

      if (pct < 100) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        // Start slide-up exit after reaching 100%
        setTimeout(() => {
          setSlideUp(true);
          setTimeout(() => setLoading(false), 900);
        }, 100);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  if (!loading) return <>{children}</>;

  // Circumference for the SVG circle (r=54)
  const circumference = 2 * Math.PI * 54;
  const strokeOffset = circumference - (progress / 100) * circumference;

  return (
    <>
      {/* Loader Overlay */}
      <div
        className={`fixed inset-0 z-[9999] bg-[#F5F2EB] overflow-hidden transition-transform duration-900 ease-in-out ${
          slideUp ? '-translate-y-full' : 'translate-y-0'
        }`}
      >
        {/* Background giant text watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span
            className="font-playfair text-[20vw] font-bold text-[#0E6F3A] leading-none tracking-tighter"
            style={{ opacity: 0.04 }}
          >
            LOADING
          </span>
        </div>

        {/* Thin horizontal progress line at top */}
        <div className="absolute top-0 left-0 h-[2px] bg-[#0E6F3A]/10 w-full">
          <div
            className="h-full bg-[#0E6F3A] transition-none"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Main centered content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-10">
          {/* Logo with thin ring */}
          <div className="relative flex items-center justify-center">
            {/* <svg
              width="140" height="140"
              viewBox="0 0 140 140"
              className="absolute"
              style={{ transform: 'rotate(-90deg)' }}
            >
              <circle cx="70" cy="70" r="54" stroke="#0E6F3A" strokeWidth="1" strokeOpacity="0.12" fill="none" />
              <circle
                cx="70" cy="70" r="54"
                stroke="#C66D42"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={strokeOffset}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 0.1s linear' }}
              />
            </svg> */}
            <img src={logo} alt="Mahadev Agro Product" className="w-50 h-50 object-contain" />
          </div>

          {/* Brand name – editorial style */}
          <div className="text-center">
            <h1 className="font-playfair text-3xl md:text-4xl text-[#0E6F3A] leading-snug">
              mahadev agro <span className="italic text-[#C66D42]">product</span>
            </h1>
            <p className="font-inter text-xs uppercase tracking-[0.3em] text-[#0E6F3A]/50 font-medium">
              Premium Agricultural Exports
            </p>
          </div>

          {/* Animated dots */}
          <div className="flex gap-2 items-center">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-[#0E6F3A]"
                style={{
                  animation: `loaderDot 1.4s ease-in-out ${i * 0.2}s infinite`,
                  opacity: 0.3
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom-right countdown */}
        <div className="absolute bottom-8 right-8 flex flex-col items-end gap-1">
          <div className="font-playfair text-[clamp(3rem,8vw,6rem)] leading-none text-[#0E6F3A] font-bold tracking-tighter">
            {String(progress).padStart(2, '0')}
            <span className="font-inter text-2xl md:text-3xl font-light text-[#C66D42]">%</span>
          </div>
          <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-[#0E6F3A]/40">
            Loading assets
          </p>
        </div>

        {/* Bottom-left edition tag */}
        <div className="absolute bottom-8 left-8">
          <p className="font-inter text-[10px] uppercase tracking-[0.25em] text-[#0E6F3A]/30">
            Est. 2024 &nbsp;•&nbsp; Worldwide Export
          </p>
        </div>
      </div>

      {/* Main content – fades in after loader exits */}
      <div className={`transition-opacity duration-700 ${slideUp ? 'opacity-100' : 'opacity-0'}`}>
        {children}
      </div>

      <style>{`
        @keyframes loaderDot {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.3; }
          40%            { transform: translateY(-6px); opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default PageLoader;