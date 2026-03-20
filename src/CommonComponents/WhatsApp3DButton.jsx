import React, { useState, useEffect } from 'react';

const WhatsApp3DButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+911234567890";
    const message = "Hello! I'd like to get more information about your products.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-700 ease-out ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      {/* Tooltip label - shows on hover */}
      <div
        className={`transition-all duration-300 ${
          showTooltip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1 pointer-events-none'
        }`}
      >
        <div className="bg-[#111] text-white text-xs font-inter px-4 py-2 tracking-wide whitespace-nowrap shadow-2xl">
          Chat on WhatsApp
          <div className="absolute bottom-[-6px] right-5 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-[#111]" />
        </div>
      </div>

      {/* Main Button */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => { setIsHovered(true); setShowTooltip(true); }}
        onMouseLeave={() => { setIsHovered(false); setShowTooltip(false); }}
        className="relative cursor-pointer group"
        aria-label="Chat on WhatsApp"
      >
        {/* Outer pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 animate-ping" />

        {/* Main circle */}
        <div
          className={`relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl ${
            isHovered ? 'scale-110 shadow-[0_8px_32px_rgba(37,211,102,0.5)]' : 'scale-100 shadow-[0_4px_20px_rgba(37,211,102,0.3)]'
          }`}
          style={{
            background: isHovered
              ? 'linear-gradient(135deg, #2ecc71 0%, #25D366 60%, #128C7E 100%)'
              : 'linear-gradient(135deg, #25D366 0%, #20c35a 100%)'
          }}
        >
          {/* WhatsApp official SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className={`w-7 h-7 fill-white transition-transform duration-300 drop-shadow-md ${isHovered ? 'scale-110' : 'scale-100'}`}
          >
            <path d="M16.003 2.667C8.637 2.667 2.667 8.637 2.667 16c0 2.347.64 4.64 1.853 6.64L2.667 29.333l6.88-1.8A13.253 13.253 0 0016.003 29.333C23.37 29.333 29.333 23.363 29.333 16c0-7.37-5.963-13.333-13.33-13.333zm0 24.373a11.02 11.02 0 01-5.613-1.537l-.4-.24-4.08 1.067 1.093-3.96-.267-.413A11.013 11.013 0 014.987 16C4.987 9.92 9.92 4.987 16.003 4.987 22.08 4.987 27.013 9.92 27.013 16c0 6.08-4.933 11.04-11.01 11.04zm6.04-8.267c-.333-.16-1.96-.96-2.267-1.067-.307-.107-.52-.16-.747.16-.213.32-.853 1.067-1.04 1.28-.187.213-.387.24-.72.08-.333-.16-1.4-.52-2.667-1.653-.987-.88-1.653-1.96-1.84-2.293-.187-.333-.02-.507.147-.667.147-.147.333-.387.5-.573.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.747-1.8-1.02-2.46-.267-.64-.547-.56-.747-.573h-.64c-.213 0-.56.08-.853.387-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.147 3.093 1.307 3.307.16.213 2.24 3.44 5.44 4.827.76.327 1.36.52 1.827.667.773.24 1.473.207 2.027.127.613-.093 1.893-.773 2.16-1.52.267-.747.267-1.387.187-1.52-.08-.147-.293-.227-.627-.387z"/>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default WhatsApp3DButton;