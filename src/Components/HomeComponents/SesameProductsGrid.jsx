import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import p1 from '../../assets/products/product (10).png';
import p2 from '../../assets/products/product (1).png';
import p3 from '../../assets/products/coriender.png';
import p4 from '../../assets/products/product (4).png';
import p5 from '../../assets/products/product (2).png';
import p6 from '../../assets/products/product (12).png';

const ProductCard = ({ image, category, title, onClick }) => {
    return (
        <div
            onClick={onClick}
            className="group cursor-pointer flex flex-col"
        >
            <div className="relative w-full h-[350px] md:h-[450px] overflow-hidden border border-[#0E6F3A]/20 bg-white mb-6">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover filter saturate-75 contrast-110 group-hover:scale-105 group-hover:saturate-100 transition-all duration-700 ease-out"
                    loading="lazy"
                />
                {/* Minimal Overlay */}
                <div className="absolute inset-0 bg-[#0E6F3A]/0 group-hover:bg-[#0E6F3A]/10 transition-colors duration-500"></div>
            </div>

            <div className="flex justify-between items-start">
                <div>
                    <h3 className="font-playfair text-3xl text-[#0E6F3A] mb-1 group-hover:text-[#C66D42] transition-colors duration-300">
                        {title}
                    </h3>
                    <p className="font-inter text-xs text-gray-500 uppercase tracking-[0.2em] font-medium">
                        {category}
                    </p>
                </div>
                <div className="w-10 h-10 rounded-full border border-[#0E6F3A]/20 flex items-center justify-center group-hover:border-[#C66D42] group-hover:bg-[#C66D42] transition-colors duration-300">
                    <ArrowRight className="w-4 h-4 text-[#0E6F3A] group-hover:text-white group-hover:-rotate-45 transition-all duration-300" />
                </div>
            </div>
        </div>
    );
};

const SesameProductsGrid = () => {
    const navigate = useNavigate();

    const products = [
        { id: 1, image: p1, category: 'SEEDS', title: 'White Sesame', slug: 'white-sesame' },
        { id: 2, image: p2, category: 'SEEDS', title: 'Black Sesame', slug: 'black-sesame' },
        { id: 3, image: p3, category: 'SPICE', title: 'Coriander', slug: 'coriander' },
        { id: 4, image: p4, category: 'SPICE', title: 'Cumin', slug: 'cumin' },
        { id: 5, image: p5, category: 'PULSE', title: 'Chickpeas', slug: 'chickpeas' },
        { id: 6, image: p6, category: 'PULSE', title: 'Moong', slug: 'moong' },
    ];

    return (
        <div className="bg-[#Ffffff] py-24 md:py-32 px-6 md:px-12 border-t border-[#0E6F3A]/10">
            <div className="max-w-[1400px] mx-auto">
                {/* Header Section */}
                <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
                    <div data-aos="fade-up" className="font-inter text-[#C66D42] text-sm tracking-[0.2em] uppercase font-semibold mb-6">
                        Catalog
                    </div>
                    <h2 data-aos="fade-up" className="font-playfair text-5xl md:text-7xl text-[#0E6F3A] leading-[1.1] tracking-tight mb-8">
                        Our Premium <span className="italic text-[#C66D42]">Products</span>
                    </h2>
                    <p data-aos="fade-up" className="font-inter text-gray-700 text-lg font-light leading-relaxed">
                        Discover our range of high-quality agricultural exports. Sourced directly from the finest organic farms for global markets.
                    </p>
                </div>

                {/* Editorial Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                    {products.map((product, idx) => (
                        <div key={product.id} data-aos="fade-up" data-aos-delay={idx * 100}>
                            <ProductCard
                                image={product.image}
                                category={product.category}
                                title={product.title}
                                onClick={() => navigate('/products')}
                            />
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div data-aos="fade-up" className="mt-24 border-t border-[#0E6F3A]/20 pt-16 flex justify-center">
                    <Link to='/products' className="group font-inter flex items-center justify-center gap-4 px-12 py-5 border border-[#0E6F3A] text-[#0E6F3A] text-sm uppercase tracking-[0.2em] hover:bg-[#0E6F3A] hover:text-[#F5F2EB] transition-colors duration-500">
                        View Complete Catalog <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SesameProductsGrid;