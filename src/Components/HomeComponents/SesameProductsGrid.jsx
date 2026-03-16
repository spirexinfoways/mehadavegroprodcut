import React from 'react';
import { useNavigate } from 'react-router-dom'; // <-- add this if you use React Router
import bgImg from '../../assets/HomeImg/Vector.png';

import p1 from '../../assets/products/product (10).jpeg';
import p2 from '../../assets/products/product (1).jpeg';
import p3 from '../../assets/products/coriender.jpg';
import p4 from '../../assets/products/product (7).jpeg';
import p5 from '../../assets/products/checkpeas.jpg';
import p6 from '../../assets/products/product (12).jpeg';
import { Link } from 'react-router-dom';

const ProductCard = ({ image, category, title, bgPosition = 'center', onClick }) => {
    return (
        <div
            onClick={onClick}
            className="relative group overflow-hidden shadow-lg h-[400px] md:h-[500px] cursor-pointer"
        >
            {/* Product Image */}
            <img
                src={image}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ objectPosition: bgPosition }}
                loading="lazy"
            />

            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />

            {/* Text Content with Brush Stroke Background */}
            <div className="absolute bottom-12 left-12 z-10">
                {/* Brush stroke behind the text */}
                <div className="absolute -bottom-18 -left-8 w-55">
                    <img src={bgImg} alt="" className="rotate-40 opacity-80 w-full" />
                </div>

                <div className="relative px-5">
                    {/* <p className="text-amber-500 uppercase tracking-wider text-sm font-semibold">
                        {category}
                    </p> */}
                    <h3
                        className="text-white text-3xl font-bold mb-5"
                        style={{ fontFamily: 'Brush Script MT, cursive' }}
                    >
                        {title}
                    </h3>
                </div>
            </div>
        </div>
    );
};

const SesameProductsGrid = () => {
    // If you use React Router
    const navigate = useNavigate();

    const products = [
        { id: 1, image: p1, category: 'SEEDS', title: 'White Sesame', slug: 'white-sesame' },
        { id: 2, image: p2, category: 'SEEDS', title: 'Black Sesame', slug: 'black-sesame' },
        { id: 3, image: p3, category: 'OIL', title: 'Coriander', slug: 'coriander-oil' },
        { id: 4, image: p4, category: 'Coriander', title: 'Fenugreek', slug: 'fenugreek' },
        { id: 5, image: p5, category: 'ORGANIC', title: 'Chickpeas (B2)', slug: 'chickpeas-b2' },
        { id: 6, image: p6, category: 'ROASTED', title: 'Moong', slug: 'roasted-moong' },
    ];

    const handleCardClick = (slug) => {
        // With React Router (recommended)
        navigate(`/products`);

        // If you don't use React Router, uncomment the line below:
        // window.location.href = `/products/${slug}`;
    };

    return (
        <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto mb-12 text-center">
                <h1
                    data-aos="fade-up"
                    className="forum text-4xl md:text-5xl font-bold leading-tight overflow-hidden text-[var(--orange)]"
                >
                    Our Premium <span className="text-[var(--dark)]">Products</span>
                </h1>
                <p
                    data-aos="fade-up"
                    className="text-md md:text-lg text-gray-600 md:w-lg font-medium mx-auto leading-relaxed mt-4"
                >
                    Discover our range of high-quality sesame products, sourced from the finest farms
                </p>
            </div>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto">
                <div
                    data-aos="fade-up"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            image={product.image}
                            category={product.category}
                            title={product.title}
                            bgPosition={product.bgPosition || 'center'}
                            onClick={() => handleCardClick(product.slug)}
                        />
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div data-aos="fade-up" className="max-w-7xl mx-auto mt-16 text-center">
                <Link to='/products'>
                    <button className="outfit cursor-pointer cta-button relative px-12 tracking-wider py-4 bg-[var(--orange)] text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 transform hover:scale-105">
                        <span className="relative z-10">Discover More</span>
                        <span className="button-fill"></span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default SesameProductsGrid;