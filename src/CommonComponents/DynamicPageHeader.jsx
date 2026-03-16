import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

const DynamicPageHeader = ({
    title = "Our Services",
    breadcrumbs = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Web Development" }
    ],
    bgImage = "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=400&fit=crop"
}) => {
    return (
        <div className="relative h-120 overflow-hidden">
            {/* Background Image */}
            <img
                src={bgImage}
                alt="Header background"
                className="absolute inset-0 w-full h-full object-cover animate-[zoomIn_20s_ease-in-out_infinite_alternate]"
            />

            {/* Black Overlay - 75% opacity */}
            <div className="absolute inset-0 bg-black/75"></div>

            {/* Optional subtle animated gradient on top of black */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 via-orange-900/20 to-green-900/30 animate-[gradientShift_8s_ease-in-out_infinite]"></div>

            {/* Animated Pattern Overlay */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:30px_30px] animate-[patternMove_20s_linear_infinite]"></div>
            </div >

            {/* Content Container - CENTERED */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center">
                {/* Breadcrumbs */}
                <nav className="mb-6 animate-[slideDown_0.6s_ease-out]">
                    <ol className="flex items-center space-x-2 text-sm">
                        {breadcrumbs.map((crumb, index) => (
                            <li key={index} className="flex items-center group relative z-50">
                                {index === 0 && (
                                    
                                    <Home className="w-4 cursor-pointer h-4 mr-2 text-orange-300 group-hover:text-orange-200 transition-colors" />
                                )}
                                
                                {crumb.href ? (
                                    <a
                                        href={crumb.href}
                                        className="text-white/90 hover:text-orange-300 transition-all duration-300 hover:scale-105 inline-block font-medium"
                                    >
                                        {crumb.label}
                                    </a>
                                ) : (
                                    <span className="text-orange-300 font-semibold">{crumb.label}</span>
                                )}
                                {index < breadcrumbs.length - 1 && (
                                    <ChevronRight className="w-4 h-4 mx-2 text-white/60" />
                                )}
                            </li>
                        ))}
                    </ol>
                </nav>

                {/* Page Title */}
                <h1 className="outfit text-5xl md:text-6xl font-bold text-white mb-6 animate-[slideUp_0.8s_ease-out]">
                    <span className="inline-block hover:scale-105 transition-transform duration-300">
                        {title.split(' ').map((word, index) => (
                            <span
                                key={index}
                                className="inline-block mr-3 animate-[fadeInWord_0.5s_ease-out]"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {word}
                            </span>
                        ))}
                    </span>
                </h1>

                {/* Decorative Line - centered */}
                <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full animate-[expandWidth_1s_ease-out] mx-auto"></div>
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-orange-400/30 rounded-full animate-[float_6s_ease-in-out_infinite]"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.5}s`
                        }}
                    ></div>
                ))}
            </div>

            <style>{`
                @keyframes slideDown {
                  from { opacity: 0; transform: translateY(-20px); }
                  to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideUp {
                  from { opacity: 0; transform: translateY(30px); }
                  to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes fadeInWord {
                  from { opacity: 0; transform: translateY(20px); }
                  to   { opacity: 1; transform: translateY(0); }
                }
                @keyframes expandWidth {
                  from { width: 0; }
                  to   { width: 8rem; }
                }
                @keyframes gradientShift {
                  0%, 100% { background-position: 0% 50%; background-size: 200% 200%; }
                  50%      { background-position: 100% 50%; background-size: 200% 200%; }
                }
                @keyframes float {
                  0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
                  50%      { transform: translateY(-30px) translateX(20px); opacity: 0.6; }
                }
                @keyframes zoomIn {
                  from { transform: scale(1); }
                  to   { transform: scale(1.1); }
                }
                @keyframes patternMove {
                  from { transform: translateY(0); }
                  to   { transform: translateY(30px); }
                }
            `}</style>
        </div>
    );
};

export default DynamicPageHeader;