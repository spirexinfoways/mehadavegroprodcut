import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonial = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const sectionRef = useRef(null);
    const autoPlayRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Auto-play functionality
    const startAutoPlay = () => {
        stopAutoPlay();
        autoPlayRef.current = setInterval(() => {
            nextTestimonial();
        }, 5000); // 5 seconds interval
    };

    const stopAutoPlay = () => {
        if (autoPlayRef.current) {
            clearInterval(autoPlayRef.current);
        }
    };

    useEffect(() => {
        startAutoPlay();
        return () => stopAutoPlay();
    }, [currentIndex]); // Restart timer when index changes manually

    const testimonials = [
        {
            id: 1,
            quote: "The precision and quality have helped us maintain our competitive edge. Their experience shows in every product.",
            name: "Amit Kumar",
            position: "Technical Director",
            company: "Industrial Solutions",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
        },
        {
            id: 2,
            quote: "A rebrand is not typically done in a chaotic, archaic industry like ours, so their work has really set us apart, 10/10 for Hub's team.",
            name: "B. Gordon",
            position: "CEO Founder",
            company: "Archin Studio",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
        },
        {
            id: 3,
            quote: "Working with this agency has been a game-changer for our production. Their expertise is truly remarkable.",
            name: "Priya Sharma",
            position: "Production Manager",
            company: "Steel Dynamics Ltd",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
        },
        {
            id: 4,
            quote: "The attention to detail in their machinery is unparalleled. Our efficiency has increased by 40%.",
            name: "Rajesh Malhotra",
            position: "Operations Head",
            company: "Global Motors",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80"
        },
    ];

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const getCardPosition = (index) => {
        const diff = (index - currentIndex + testimonials.length) % testimonials.length;
        if (diff === 0) {
            return 'translate-x-0 translate-y-0 z-20 scale-100 opacity-100 rotate-0';
        } else if (diff === 1) {
            return 'translate-x-12 -translate-y-6 z-10 scale-95 opacity-80 rotate-2';
        } else if (diff === 2) {
            return 'translate-x-24 -translate-y-12 z-5 scale-90 opacity-60 rotate-4';
        } else if (diff === 3) {
            return 'translate-x-36 -translate-y-18 z-0 scale-85 opacity-40 rotate-6';
        }
        return 'translate-x-0 translate-y-0 opacity-0';
    };

    const getCardBackgroundColor = (index) => {
        const colors = ['#295544', '#000000', '#595959', '#f47526'];
        return colors[index % colors.length];
    };

    const getTextColor = (backgroundColor) => {
        const hexToRgb = (hex) => {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ? {
                r: parseInt(result[1], 16),
                g: parseInt(result[2], 16),
                b: parseInt(result[3], 16)
            } : null;
        };

        const rgb = hexToRgb(backgroundColor.replace('#', ''));
        if (!rgb) return '#FFFFFF';

        const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
        return luminance > 0.5 ? '#000000' : '#FFFFFF';
    };

    return (
        <div className="relative text-gray-900 overflow-hidden py-20 border-t border-[var(--green)]/10">

            <div ref={sectionRef} className="relative z-10 flex items-center justify-center min-h-[600px]">
                <div className="container mx-auto px-6 w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-30 md:gap-16 items-center">
                        {/* Left Side - Content */}
                        <div className="flex flex-col justify-between h-auto text-start transition-all duration-1000">
                            <div>
                                <span data-aos="zoom-in-right" className="text-[var(--green)] mb-4 text-md font-bold tracking-wide outfit inline-block">
                                    Testimonial
                                </span>
                                <h2 data-aos="zoom-in-right" className="forum text-4xl md:text-6xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-8">
                                    What Our valuable
                                    <span className="bg-gradient-to-r from-[#f47526] to-[#f47526]/80 bg-clip-text text-transparent"> Clients Say?</span>
                                </h2>
                                <p data-aos="zoom-in-right" className='max-w-md mb-8 text-gray-500 forum text-lg tracking-wide'>
                                    Working with this agency has been a game-changer for our production. Their expertise is truly remarkable.
                                </p>
                                <div data-aos="zoom-in-right" className="flex space-x-4 mb-12">
                                    <button
                                        onClick={() => { prevTestimonial(); startAutoPlay(); }}
                                        className="w-12 h-12 cursor-pointer flex items-center justify-center bg-white rounded-full border border-gray-200 hover:bg-[#f47526] hover:border-[#f47526] transition-all duration-300 group shadow-sm"
                                    >
                                        <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-white group-hover:scale-110" />
                                    </button>
                                    <button
                                        onClick={() => { nextTestimonial(); startAutoPlay(); }}
                                        className="w-12 h-12 cursor-pointer flex items-center justify-center bg-white rounded-full border border-gray-200 hover:bg-[#f47526] hover:border-[#f47526] transition-all duration-300 group shadow-sm"
                                    >
                                        <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-white group-hover:scale-110" />
                                    </button>
                                </div>
                            </div>
                            <div data-aos="zoom-in-up" className="forum">
                                <span className="text-6xl font-bold text-gray-900">4.8</span>
                                <span className="text-gray-400 text-md tracking-wider font-semibold ml-3">Total Reviews</span>
                            </div>
                        </div>

                        {/* Right Side - Testimonial Cards Stack */}
                        <div data-aos="zoom-in-left" className="relative transition-all duration-1000 " onMouseEnter={stopAutoPlay} onMouseLeave={startAutoPlay}>
                            <div className="relative h-[450px] w-full max-w-sm mx-auto perspective-1000">
                                {testimonials.map((testimonial, index) => {
                                    const backgroundColor = getCardBackgroundColor(index);
                                    const textColor = getTextColor(backgroundColor);
                                    const quoteIconColor = backgroundColor === '#f47526' ? 'white' : '#f47526';

                                    return (
                                        <div
                                            key={`${testimonial.id}-${index}`}
                                            className={`forum absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${getCardPosition(index)} origin-top-left`}
                                        >
                                            <div className="relative w-full h-full">
                                                <div className="absolute inset-0 bg-black/10 rounded-2xl blur-sm -z-10 translate-y-2"></div>
                                                <div
                                                    className="rounded-2xl p-8 shadow-sm h-full relative overflow-hidden flex flex-col justify-between border border-white/5"
                                                    style={{ backgroundColor }}
                                                >
                                                    <div>
                                                        <div className="flex justify-between items-start mb-6">
                                                            <Quote
                                                                className="w-12 h-12"
                                                                style={{
                                                                    color: quoteIconColor,
                                                                    opacity: backgroundColor === '#f47526' ? 0.8 : 0.4,
                                                                    fill: quoteIconColor,
                                                                    fillOpacity: 0.1
                                                                }}
                                                            />
                                                        </div>
                                                        <p style={{ color: textColor }} className="text-lg md:text-xl leading-relaxed mb-6 italic opacity-90">
                                                            "{testimonial.quote}"
                                                        </p>
                                                    </div>

                                                    <div className="flex items-center mt-auto">
                                                        <img
                                                            src={testimonial.avatar}
                                                            alt={testimonial.name}
                                                            className="w-14 h-14 rounded-full object-cover border-2 border-white/20 mr-4"
                                                        />
                                                        <div>
                                                            <h4 style={{ color: textColor }} className="font-bold text-lg leading-tight">{testimonial.name}</h4>
                                                            <p style={{ color: textColor }} className="text-sm opacity-70 leading-tight mt-1">
                                                                {testimonial.position}, {testimonial.company}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .perspective-1000 {
                    perspective: 1000px;
                }
                .origin-top-left {
                    transform-origin: top left;
                }
                .text-stroke {
                    -webkit-text-stroke: 1px #295544;
                }
            `}} />
        </div>
    );
};

export default Testimonial;
