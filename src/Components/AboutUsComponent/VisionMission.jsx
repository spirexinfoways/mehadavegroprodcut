import React from 'react';
import v1 from '../../assets/AboutImg/v (1).jpg'
import v2 from '../../assets/AboutImg/v (2).jpg'

const VisionMission = () => {
    return (
        <div className="bg-gray-50 py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto space-y-24">

                {/* Vision Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-0 items-center">
                    {/* Left Side - Image with Title Overlay */}
                    <div className="relative">
                        <div data-aos="fade-right" className="relative overflow-hidden">
                            <img
                                src={v1}
                                alt="Sesame Fields"
                                className="w-110 h-90 lg:h-[500px] object-cover mx-auto"
                            />
                            {/* Overlay gradient */}
                            {/* <div className="absolute inset- bg-gradient-to-t from-black/50 to-transparent"></div> */}
                        </div>

                        {/* Title with special effect - V solid, ision outlined */}
                        <div data-aos="fade-right" className="font-sans absolute bottom-8 left-8 right-8">
                            <h2 className="text-7xl lg:text-9xl font-bold flex items-center translate-x-0">
                                <span className="text-(--green)">V</span>
                                <span
                                    className="text-transparent"
                                    style={{
                                        WebkitTextStroke: '2px white',
                                        textStroke: '2px white'
                                    }}
                                >
                                    ision
                                </span>
                            </h2>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="space-y-6 lg:w-lg">
                        <h2 data-aos="fade-left" className="forum text-3xl lg:text-5xl font-bold leading-tight overflow-hidden text-[var(--orange)]">
                            Leading the Global<span className='text-[var(--dark)] block'>Agro Export Trade</span>
                        </h2>
                        <div data-aos="fade-left" className="text-gray-600 text-sm lg:text-base leading-relaxed space-y-4">
                            <p className="flex items-start">
                                <span className="text-[var(--green)] mr-3 mt-1">•</span>
                                To become a globally recognized and trusted supplier of seeds, grains and spices from India.
                            </p>
                            <p className="flex items-start">
                                <span className="text-[var(--green)] mr-3 mt-1">•</span>
                               To lead the market in Z Black Sesame and other premium agricultural products through innovation and quality excellence.
                            </p>
                            <p className="flex items-start">
                                <span className="text-[var(--green)] mr-3 mt-1">•</span>
                                To expand sustainable farming practices in the Saurashtra region by strengthening farmer relationships.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Mission Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-0 items-center">
                    {/* Left Side - Content */}
                    <div className="space-y-6 lg:w-lg md:order-1 order-2 mx-auto">
                        <h2 data-aos="fade-right" className="forum text-3xl lg:text-5xl font-bold leading-tight overflow-hidden text-[var(--orange)]">
                            Delivering Excellence<span className='text-[var(--dark)] block'>in Every Shipment</span>
                        </h2>
                        <div data-aos="fade-right" className="text-gray-600 text-sm lg:text-base leading-relaxed space-y-4">
                            <p className="flex items-start">
                                <span className="text-[var(--orange)] mr-3 mt-1">•</span>
                               To deliver premium-quality agricultural products through ethical sourcing, advanced processing and customer-focused service.
                            </p>
                            <p className="flex items-start">
                                <span className="text-[var(--orange)] mr-3 mt-1">•</span>
                               To empower farmers by offering fair pricing and long-term partnerships.
                            </p>
                            <p className="flex items-start">
                                <span className="text-[var(--orange)] mr-3 mt-1">•</span>
                               To ensure purity, consistency and reliability in every batch through advanced cleaning and sortex technology.
                            </p>
                            <p className="flex items-start">
                                <span className="text-[var(--orange)] mr-3 mt-1">•</span>
                                To meet global market needs with timely delivery, transparency and trust.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Image with Title Overlay */}
                    <div className="relative lg:order-2 order-1">
                        <div data-aos="fade-left" className="relative overflow-hidden">
                            <img
                                src={v2}
                                alt="Quality Control"
                                className="w-110 h-90 lg:h-[500px] object-cover mx-auto"
                            />
                            {/* Overlay gradient */}
                            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> */}
                        </div>

                        {/* Title with special effect - M solid, ission outlined */}
                        <div data-aos="fade-left" className="font-sans absolute bottom-8 left-8 right-8">
                            <h2 className="text-7xl lg:text-9xl font-bold flex items-center -translate-x-4">
                                <span className="text-(--orange)">M</span>
                                <span
                                    className="text-transparent"
                                    style={{
                                        WebkitTextStroke: '2px white',
                                        textStroke: '2px #f97316'
                                    }}
                                >
                                    ission
                                </span>
                            </h2>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default VisionMission;