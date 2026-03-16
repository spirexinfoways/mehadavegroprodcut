import React, { useState } from 'react';
import { Download, X } from 'lucide-react';
import paper from '../../assets/BrochureImg/paper.png';
import pdf from '../../assets/BrochureImg/PDF.pdf'

export default function BrochureComponent() {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.phone || !formData.email) {
            alert('Please fill in all fields');
            return;
        }

        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setShowForm(false);
            setFormData({ name: '', phone: '', email: '' });

            // Open download in new tab
            window.open(pdf, '_blank');

            alert('Thank you! Your brochure is downloading.');
        }, 1500);
    };

    return (
        <div className="min-h-screen relative bg-gray-50 py-12 px-2 md:px-4">
            <div className="max-w-7xl mx-auto">
                {/* Center Heading */}
                <div className="text-center mb-12">
                    <h1 data-aos="fade-up" className="forum text-4xl md:text-5xl font-bold leading-tight overflow-hidden text-[var(--orange)]">
                        Explore Our <span className='text-[var(--dark)]'>E-Brochure</span>
                    </h1>
                    <p data-aos="fade-up" className="text-md md:text-lg text-gray-600 md:w-lg font-medium mx-auto leading-relaxed mt-4">
                        Download our comprehensive import-export solutions guide
                    </p>
                </div>

                {/* Main Content */}
                <div className="">
                    <div className="grid md:grid-cols-2 gap-28 lg:gap-0 items-center">
                        {/* Left Side - Content */}
                        <img data-aos="fade-right" src={paper} alt="" className='hidden lg:block absolute h-140 object-cover md:h-auto md:w-180 z-0 top-30 md:top-32 md:left-40' />
                        <div className='z-50 md:w-md px-3 md:px-8 md:py-10 md:translate-x-40'>
                            <h2 data-aos="fade-up" className="text-lg md:text-3xl font-bold text-(--darkgreen) mb-4">
                                Global Trade Solutions
                            </h2>

                            <p data-aos="fade-up" className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">
                                Discover how our comprehensive import-export services can help your business expand globally. We provide end-to-end solutions for international trade.
                            </p>

                            <div className="space-y-4 mb-4 md:mb-8">
                                <div data-aos="fade-up" className="flex items-start">
                                    <div className="w-1 h-1 bg-(--orange) rounded-full mt-2 mr-1"></div>
                                    <p className="text-gray-700 text-sm md:text-base">Seamless customs clearance and documentation</p>
                                </div>
                                <div data-aos="fade-up" className="flex items-start">
                                    <div className="w-1 h-1 bg-(--orange) rounded-full mt-2 mr-1"></div>
                                    <p className="text-gray-700 text-sm md:text-base">Worldwide shipping and logistics management</p>
                                </div>
                                <div data-aos="fade-up" className="flex items-start">
                                    <div className="w-1 h-1 bg-(--orange) rounded-full mt-2 mr-1"></div>
                                    <p className="text-gray-700 text-sm md:text-base">Quality assurance and product inspection</p>
                                </div>
                                <div data-aos="fade-up" className="flex items-start">
                                    <div className="w-1 h-1 bg-(--orange) rounded-full mt-2 mr-1"></div>
                                    <p className="text-gray-700 text-sm md:text-base">Expert consultation on international trade regulations</p>
                                </div>
                                <div data-aos="fade-up" className="flex items-start">
                                    <div className="w-1 h-1 bg-(--orange) rounded-full mt-2 mr-1"></div>
                                    <p className="text-gray-700 text-sm md:text-base">Competitive pricing and transparent processes</p>
                                </div>
                            </div>

                            <button data-aos="fade-up"
                                onClick={() => setShowForm(true)}
                                className="outfit cursor-pointer cta-button relative px-4 py-3 text-sm md:text-base md:px-8 md:py-3 bg-[var(--darkgreen)] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    <Download size={20} />
                                    Download Brochure
                                </span>
                                <span className="button-fill"></span>
                            </button>
                        </div>

                        {/* Right Side - Brochure Image */}
                        <div className="flex justify-center md:mx-20">
                            <div className="relative z-20">
                                <div data-aos="fade-left" className="border-5 translate-x-5 -top-4 border-(--darkgreen) absolute w-80 md:w-100 h-100 md:h-140 flex items-center justify-center transform transition-transform"></div>
                                <div data-aos="fade-left" className="w-80 md:w-100 h-100 md:h-140 relative z-999 flex items-center justify-center transform transition-transform">
                                    <img src='https://i.pinimg.com/736x/2a/70/82/2a7082dcee57e91c74367542c6167f9d.jpg' alt="" className='w-full h-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Form */}
            {showForm && (
                <div className="fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 relative">
                        <button
                            onClick={() => setShowForm(false)}
                            className="absolute cursor-pointer top-4 right-4 text-gray-400 hover:text-gray-600"
                        >
                            <X size={24} />
                        </button>

                        <h3 className="text-2xl font-bold text-gray-800 mb-2">
                            Download Brochure
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Please fill in your details to receive the brochure
                        </p>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div>
                                <button onClick={handleSubmit} disabled={isSubmitting} className="w-full outfit cursor-pointer cta-button relative px-12 tracking-wider py-3 bg-[var(--orange)] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105 "> 
                                    <span className="relative z-10">{isSubmitting ? 'Submitting...' : 'Submit & Download'}</span>
                                    <span className="button-fill"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}