import React, { useState } from 'react';
import { Truck, Plane, Ship, Train } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex flex-col items-center text-center group"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Icon with Glitch Effect */}
      <div 
        className="relative mb-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Icon */}
        <div className="relative z-10 text-orange-500 transition-transform duration-300 group-hover:scale-110">
          <Icon size={80} strokeWidth={1.5} />
        </div>
        
        {/* Glitch Effect Layers */}
        {isHovered && (
          <>
            <div 
              className="absolute inset-0 text-orange-500 opacity-70 animate-glitch-1"
              style={{ 
                left: '-3px',
                animation: 'glitch1 0.3s infinite'
              }}
            >
              <Icon size={80} strokeWidth={1.5} />
            </div>
            <div 
              className="absolute inset-0 text-orange-600 opacity-70 animate-glitch-2"
              style={{ 
                left: '3px',
                animation: 'glitch2 0.3s infinite'
              }}
            >
              <Icon size={80} strokeWidth={1.5} />
            </div>
          </>
        )}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed max-w-xs">
        {description}
      </p>
    </div>
  );
};

const OurServices = () => {
  const services = [
    {
      icon: Truck,
      title: "Trucking",
      description: "Reliable ground transportation for shipments across the United States with flexible fleet options."
    },
    {
      icon: Plane,
      title: "Air Freight",
      description: "Fast delivery of time-sensitive cargo using global air routes with real-time tracking."
    },
    {
      icon: Ship,
      title: "Ship Freight",
      description: "Cost-effective shipping solution for bulk cargo with dependable international sea freight services."
    },
    {
      icon: Train,
      title: "Rail Freight",
      description: "Efficient and eco-friendly rail transport option ideal for long-distance heavy shipments."
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-gray-50">
      <style jsx>{`
        @keyframes glitch1 {
          0%, 100% {
            transform: translate(0);
            opacity: 0.7;
          }
          25% {
            transform: translate(-5px, 2px);
            opacity: 0.5;
          }
          50% {
            transform: translate(3px, -3px);
            opacity: 0.8;
          }
          75% {
            transform: translate(-2px, 3px);
            opacity: 0.6;
          }
        }

        @keyframes glitch2 {
          0%, 100% {
            transform: translate(0);
            opacity: 0.7;
          }
          25% {
            transform: translate(4px, -2px);
            opacity: 0.6;
          }
          50% {
            transform: translate(-3px, 4px);
            opacity: 0.8;
          }
          75% {
            transform: translate(2px, -4px);
            opacity: 0.5;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-semibold text-lg mb-3">
            Our Services
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Trusted Logistics Partner for<br />
            Worldwide Shipping
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;