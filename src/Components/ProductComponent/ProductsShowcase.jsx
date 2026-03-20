import React, { useState } from 'react';
import { ArrowLeft, Phone, Mail, Package, Sprout, Globe, MessageCircle } from 'lucide-react';
import bgImg from '../../assets/HomeImg/Vector.png';
import p1 from '../../assets/products/product (1).png'
import p2 from '../../assets/products/product (10).png'
import p3 from '../../assets/products/product (19).jpeg'
import p4 from '../../assets/products/product (15).jpeg'
import p5 from '../../assets/products/coriender.png'
import p6 from '../../assets/products/product (4).png'
import p7 from '../../assets/products/product (6).jpeg'
import p8 from '../../assets/products/product (7).jpeg'
import p9 from '../../assets/products/product (13).jpeg'
import p10 from '../../assets/products/checkpeas.jpg'
import p11 from '../../assets/products/product (9).jpeg'
import p12 from '../../assets/products/product (8).jpeg'
import p13 from '../../assets/products/product (5).jpeg'
import p14 from '../../assets/products/product (12).png'
import p15 from '../../assets/products/product (11).jpeg'
import p16 from '../../assets/products/product (14).jpeg'
import p17 from '../../assets/products/product (2).png'
import p18 from '../../assets/products/product (16).jpeg'

const ProductsShowcase = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    // WhatsApp number (replace with your actual number)
    const whatsappNumber = "919876543210"; // Format: country code + number (no + or spaces)

    const products = [
        {
            id: 1,
            image: p2,
            category: 'SEEDS',
            title: 'White Sesame',
            description: 'Premium White Sesame Seeds - delicately flavored, aromatic and rich in natural oils. Sourced from trusted farms and cleaned with advanced technology, their smooth ivory texture makes them ideal for bakery, confectionery and traditional dishes worldwide.',
            specifications: [
                'Purity: 99.95%-99.99%',
                'Moisture: Max 6%',
                'FFA:1.5% Max.',
                'Packaging: 5-50 kg bags (PP/Paper/Customized)',
                // 'Color: Whitish',
                // 'Oil Content: 48-52%',
                // 'Origin: India',
                // 'Labeling: As per buyer’s requirement',
                // 'Admixture:	00.02 % Max.',
                // 'Quality: Premium Color Sortex (Mech. Dried)'
            ],
            // packaging: ['25kg bags', '50kg bags', 'Bulk containers'],
            applications: ['Bakery products', 'Tahini production', 'Cooking oil', 'Confectionery']
        },
        {
            id: 2,
            image: p1,
            category: 'SEEDS',
            title: 'Black Sesame',
            description: 'Premium Z Black Sesame Seeds naturally cultivated, nutrient-rich and full of antioxidants. Their deep color and nutty aroma enhance sweets, bakery items, gourmet dishes and health foods with pure flavor and unmatched quality.',
            specifications: [
                'Purity: 99.95%-99.99%',
                'Moisture: Max 6%',
                'FFA:1.5% Max.',
                'Packaging: 5-50 kg bags (PP/Paper/Customized)'
            ],
            packaging: ['25kg bags', '50kg bags', 'Custom packaging'],
            applications: ['Health supplements', 'Asian cuisine', 'Desserts', 'Nutritional bars']
        },
        {
            id: 3,
            image: p3,
            category: 'SEEDS',
            title: 'Yellow Sesame',
            description: 'Premium Yellow Sesame Seeds golden, nutty and rich in oil. Carefully sourced and graded for purity, they are ideal for globel food, bakery, confectionery and oil-extraction industries',
            specifications: [
                'Purity: 99.95%-99.99%',
                'Moisture: Max 6%',
                'FFA:1.5% Max.',
                'Packaging: 5-50 kg bags (PP/Paper/Customized)'
            ],
            packaging: ['25kg bags', '50kg bags', 'Custom packaging'],
            applications: ['Health supplements', 'Asian cuisine', 'Desserts', 'Nutritional bars']
        },
        {
            id: 4,
            image: p4,
            category: 'OIL',
            title: 'Hulled Sesame',
            description: 'Premium Hulled Sesame Seeds-smooth, white and mildly nutty. Expertly halled and cleaned for high oil content, uniforın size and long-lasting freshness. Perfect for bekeries, confectioneries and global food industries with assured quality and international standards',
            specifications: [
                'Purity: 99.95%-99.99%',
                'Moisture: Max 6%',
                'FFA:1.5% Max.',
                'Packaging: 5-50 kg bags (PP/Paper/Customized)'
            ],
            packaging: ['1L bottles', '5L containers', '200L drums'],
            applications: ['Cooking', 'Massage oil', 'Cosmetics', 'Ayurvedic medicine']
        },
        {
            id: 5,
            image: p5,
            category: 'Spices',
            title: 'Coriander',
            description: 'Premium Coriander Seeds - sun-dried, aromatic and naturally flavorful. With a warm, citrusy, nutty taste, they are rich in antioxidants and essential oils. Carefully cleaned and graded to ensure purity, freshness and long-lasting fragrance for global culinary use.',
            specifications: [
                'Types: Whole, Ground, Split',
                'Purity: 99.5% minimum',
                'Moisture: Max 6%',
                'Moisture: ≤8%',
                'Packaging: 25 kg, 50 kg PP / Jute bags / Customized',
                'Storage: Store in a cool, dry place'
            ],
            packaging: ['300g jars', '1kg jars', '5kg buckets'],
            applications: ['Hummus', 'Dressings', 'Baking', 'Spreads']
        },
        {
            id: 6,
            image: p6,
            category: 'Spices',
            title: 'Cumin',
            description: 'Premium Coriander Seeds - sun-dried, aromatic and naturally flavorful. With a warm, citrusy, nutty taste, they are rich in antioxidants and essential oils. Carefully cleaned and graded to ensure purity, freshness, and long-lasting fragrance for global culinary use.',
            specifications: [
                'Types: Whole, Ground',
                'Purity: 99% / 99.5%/99.8% (as per requirement)',
                'Moisture: 8% Max (10% Max. During Monsoon Seasons)',
                'Packaging: 5kg, 10kg, 25kg, 50kg bags (customized)',
                'Storage: Store in a cool, dry place',
                'Flavour: Warm, earthy, slightly bitter'
            ],
            packaging: ['25kg bags', 'Custom bulk orders'],
            applications: ['Organic bakery', 'Health foods', 'Supplements', 'Export']
        },
        {
            id: 7,
            image: p7,
            category: 'Spices',
            title: 'Fennel',
            description: 'Premium Fennel Seeds - vibrant green, naturally sweet and aromatic. Sourced from top farms and processed for purity and freshness, they are ideal for global food, beverage, pharmaceutical and spice industries.',
            specifications: [
                'Purity: 99% / 99.5% / as Per Buyer Requirement',
                'Moisture: Max 10%',
                'Foreign Matter: Max 0.5%',
                'Mold & Insect Damage: Max 1%',
                'Color: Yellowish Green / Green',
                'Packaging: 5kg, 10kg, 25kg, 50kg bags (customized)'
            ],
            packaging: ['10kg bags', '25kg bags', 'Retail packs'],
            applications: ['Toppings', 'Snacks', 'Asian dishes', 'Salads']
        },
        {
            id: 8,
            image: p8,
            category: 'Spices',
            title: 'Fenugreek',
            description: 'Premium Fenugreek Seeds - golden-yellow, aromatic and highly nutritious. Sourced from top farms and processed to international standards, they offer distinct flavor and strong medicinal value, making them ideal for food, spice, health and pharmaceutical industries worldwide.',
            specifications: [
                'Types (Counts per Ounce): 41/51, 51/61, 61/71, 71/81, 81/91, 91/101, 101/111, 141/161, (Whole)',
                'Purity: 99.95%',
                'Moisture: Max 6%',
                'Oil Content: 48-52%',
                'Origin: Gujarat, India',
                'Color: Caramel to light Yellowish brown',
                'Packaging: 5kg, 10kg, 25kg, 50kg bags (customized)',
            ],
            packaging: ['10kg bags', '25kg bags', 'Retail packs'],
            applications: ['Toppings', 'Snacks', 'Asian dishes', 'Salads']
        },
        {
            id: 9,
            image: p9,
            category: 'Spices',
            title: 'Kalonji',
            description: 'Premium Black Cumin Seeds (Kalonji) -jet-black, earthy and nutrient-rich. Packed with antioxidants and essential oils, they add authentic flavor and wellness. Hygienically cleaned and naturally processed for lasting freshness.',
            specifications: [
                'Purity: 99% / 99.5% / 99.8% (as per requirement)',
                'Types: Whole, Ground',
                'Moisture: Max 10%',
                'Packaging: 5kg, 10kg, 25kg, 50kg bags (customized)',
                'Storage: Store in a cool, dry, and well-ventilated place',
                'Flavour: Warm, earthy, slightly bitter, with a peppery aroma',
            ],
            packaging: ['10kg bags', '25kg bags', 'Retail packs'],
            applications: ['Toppings', 'Snacks', 'Asian dishes', 'Salads']
        },
        {
            id: 10,
            image: p10,
            category: 'Pulses & Dal',
            title: 'Chickpeas (B2)',
            description: 'Our B2 Grade Chickpeas are carefully sourced and processed to meet the needs of international buyers who require cost-effective, versatile and consistent-quality chickpeas for large-scale food manufacturing and commercial applications. These chickpeas are known for their medium grain size, rich brownish-golden color and excellent cooking characteristics.',
            specifications: [
                'Color: Light beige to creamy yellow',
                'Appearance: Round, smooth surface, larger grain than desi variety',
                'Moisture: ≤12%',
                'Packaging: 5-50 kg PP/Jute bags / Customized',
            ],
            packaging: ['10kg bags', '25kg bags', 'Retail packs'],
            applications: ['Toppings', 'Snacks', 'Asian dishes', 'Salads']
        },
        {
            id: 11,
            image: p11,
            category: 'Pulses & Dal',
            title: 'Chickpeas (Kabuli)',
            description: 'Premium Chickpeas - large, uniform and nutrient-rich. With a creamy-white color and smooth texture, they deliver superior taste and are widely used in global food processing, culinary and nutrition industries.',
            specifications: [
                'Size: 7-13mm',
                'Purity: 99.95%',
                'Moisture: ≤12%',
                'Foreign Matter: ≤0.2%',
                'Packaging: 5-50 kg PP / Jute bags / Customized',
            ],
            packaging: ['10kg bags', '25kg bags', 'Retail packs'],
            applications: ['Toppings', 'Snacks', 'Asian dishes', 'Salads']
        },
        {
            id: 12,
            image: p12,
            category: 'Pulses & Dal',
            title: 'Chickpeas (Desi)',
            description: 'Our Desi Chickpeas are sourced from premium farms known for cultivating high-quality, nutrient-dense pulses. With their dark brown color, small to medium grain size and rich earthy flavor, Desi chickpeas are widely used in the food, flour milling, snack and health nutrition industries across international markets.',
            specifications: [
                'Color: Dark brown to black',
                'Appearance: Small, angular, rough texture.',
                'Moisture: ≤12%',
                'Packaging: 5-50 kg PP / Jute bags / Customized',
            ],
            packaging: ['10kg bags', '25kg bags', 'Retail packs'],
            applications: ['Toppings', 'Snacks', 'Asian dishes', 'Salads']
        },
        {
            id: 13,
            image: p13,
            category: 'Pulses & Dal',
            title: 'Chana Dal (Split Chickpeas)',
            description: 'Premium Split Chickpeas (Chana Dal) golden, flavorful and protein-rich. Processed from high-quality Desi chickpeas for superior texture and cooking performance, making them ideal for diverse culinary applications worldwide.',
            specifications: [
                'Appearance: Split kernel, flat and round edges',
                'Color: Bright yellow, uniform',
                'Moisture: ≤12%',
                'Packaging: 5-50 kg PP bags / Customized',
            ],
            packaging: ['10kg bags', '25kg bags', 'Retail packs'],
            applications: ['Toppings', 'Snacks', 'Asian dishes', 'Salads']
        },
        {
            id: 14,
            image: p14,
            category: 'Pulses & Dal',
            title: 'Moong',
            description: 'Premium Green Moong Beans protein-rich and easy to digest. Their mild, earthy flavor makes them ideal for soups, curries, sprouts and health foods. Triple-cleaned and hygienically processed to ensure purity, consistent Quality and long shelf life.',
            specifications: [
                'Types Available: Whole',
                'Origin: Gujarat, India',
                'Purity: 99% minimum',
                'Moisture: Max 12%',
                'Packaging: 5-50 kg PP bags / Customized',
            ],
            packaging: ['10kg bags', '25kg bags', 'Retail packs'],
            applications: ['Toppings', 'Snacks', 'Asian dishes', 'Salads']
        },
        {
            id: 15,
            image: p15,
            category: 'Pulses & Dal',
            title: 'Moong Dal (Split Green Gram)',
            description: 'Premium Split Moong (Moong Dal) - bright, uniform and protein-rich. Processed with advanced technology for superior quality and easy digestibility, making it a preferred choice for versatile culinary applications worldwide.',
            specifications: [
                'Appearance: Split, flat lentils with smooth surface',
                'Color: Bright yellow with greenish tinge (depending on processing)',
                'Moisture: ≤12%',
                'Packaging: 5-50 kg PP bags / Customized',
            ],
            packaging: ['10kg bags', '25kg bags', 'Retail packs'],
            applications: ['Toppings', 'Snacks', 'Asian dishes', 'Salads']
        },
        {
            id: 16,
            image: p16,
            category: 'Pulses & Dal',
            title: 'Toor Dal (Split Pigeon Pea)',
            description: 'Premium Split Toor Dal - bright golden-yellow, uniform and nutrient-rich. Sourced from trusted farms and meeting international standards, it offers excellent cooking performance and is widely demanded across global markets.',
            specifications: [
                'Color: Bright yellow, uniform',
                'Appearance: Split, oval-shaped lentils with smooth texture',
                'Moisture: ≤12%',
                'Packaging: 5-50 kg PP bags / Customized',
            ],
            packaging: ['10kg bags', '25kg bags', 'Retail packs'],
            applications: ['Toppings', 'Snacks', 'Asian dishes', 'Salads']
        },
        {
            id: 17,
            image: p17,
            category: 'Other Commodity',
            title: 'Bajra',
            description: 'Premium Bajra (Pearl Millet) - nutrient-rich, highly digestible and long-lasting. Carefully cultivated and processed to global standards, its round grey grains are valued as a versatile superfood in international health and food markets.',
            specifications: [
                'Appearance: Small, round grains with a hard outer layer',
                'Color: Greyish-green to light brown (varies by variety)',
                'Purity: 99% (as per requirement)',
                'Moisture: ≤12%',
                'Admixture: 1%',
                'Packaging: 25-50 kg PP/Jute bags / Customized',
            ],
            packaging: ['10kg bags', '25kg bags', 'Retail packs'],
            applications: ['Toppings', 'Snacks', 'Asian dishes', 'Salads']
        },
        {
            id: 18,
            image: p18,
            category: 'Other Commodity',
            title: 'Soybean',
            description: 'Premium Soybean Seeds - high in protein, nutrients and oil yield. Carefully selected for purity and uniform size, they support food, feed and industrial applications while meeting strict global quality standards.',
            specifications: [
                'Color: Light yellow to pale cream (variety dependent)',
                'Purity: 98%-99% (as per requirement)',
                'Moisture: ≤10%',
                'Oil Content: 17%-20% (varies by origin)',
                'Packaging: 25-50 kg PP/Jute bags / Customized',
            ],
            packaging: ['10kg bags', '25kg bags', 'Retail packs'],
            applications: ['Toppings', 'Snacks', 'Asian dishes', 'Salads']
        },
    ];

    const handleWhatsAppInquiry = (product) => {
        const message = `Hi, I'm interested in ${product.title}. Please provide more details about pricing and availability.`;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const ProductCard = ({ product }) => {
        return (
            <div onClick={() => setSelectedProduct(product)} className="relative group overflow-hidden shadow-lg h-[400px] md:h-[500px] cursor-pointer">
                {/* Background Image */}
                <img
                    src={product.image}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>


                {/* Text Content with Brush Stroke Background */}
                <div className="absolute bottom-12 left-12 z-10">
                    <div className='absolute -bottom-6 w-60 md:w-65 h-50 -left-8'>
                        <img src={bgImg} alt="" className='rotate-40 opacity-80' />
                    </div>

                    {/* Title with brush stroke background */}
                    <div className="relative px-5">
                        {/* Title text */}
                        <h3 className="relative text-white text-2xl md:text-3xl w-40 md:w-50 font-bold" style={{
                            fontFamily: 'Brush Script MT, cursive'
                        }}>
                            {product.title}
                        </h3>
                        {/* View Details Button */}
                        <button
                            onClick={() => setSelectedProduct(product)}
                            className="relative text-(--green) px-1 cursor-pointer rounded-md text-sm font-semibold group-hover:text-white transition-all duration-300"
                        >
                            View Details
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const ProductDetails = ({ product }) => {
        return (
            <div className="min-h-screen outfit bg-white py-16">
                {/* Header Section */}
                <div className="max-w-7xl mx-auto mb-12 text-center">
                    <h1 data-aos="fade-up" className="forum text-4xl md:text-5xl font-bold leading-tight overflow-hidden text-[var(--orange)]">
                        Our Premium <span className='text-[var(--dark)]'>Products</span>
                    </h1>
                    <p data-aos="fade-up" className="text-md md:text-lg text-gray-600 md:w-lg font-medium mx-auto leading-relaxed mt-4">
                        Discover our range of high-quality sesame products, sourced from the finest farms
                    </p>
                </div>
                {/* Back Button */}
                <div className="py-4 px-4 md:px-8 lg:px-16">
                    <div className="max-w-7xl mx-auto">
                        <button
                            onClick={() => setSelectedProduct(null)}
                            className="flex items-center gap-2 cursor-pointer text-gray-600 hover:text-(--orange) transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span className="font-semibold">Back to Products</span>
                        </button>
                    </div>
                </div>

                {/* Product Details */}
                <div className="px-4 md:px-8 lg:px-16">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                            {/* Left - Image */}
                            <div className="space-y-4">
                                <div className="relative overflow-hidden h-100 md:h-[740px]">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-140 mx-auto h-full object-cover rounded-lg shadow-lg"
                                    />
                                </div>
                            </div>

                            {/* Right - Details */}
                            <div className="space-y-6">
                                <div>
                                    <h1 className="forum text-4xl md:text-5xl text-(--orange) mb-4">
                                        {product.title}
                                    </h1>
                                    <hr />
                                </div>

                                {/* Specifications Table */}
                                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm mt-6">
                                    <div className="bg-[var(--darkgreen)] px-6 py-4 border-b border-gray-200">
                                        <h3 className="text-xl font-semibold text-white">Product Specifications</h3>
                                    </div>
                                    <div className="divide-y divide-gray-200">
                                        {product.specifications.map((spec, index) => {
                                            const [label, value] = spec.split(':');
                                            return (
                                                <div key={index} className="grid grid-cols-2 gap-4">
                                                    <div className="px-6 py-4 text-sm md:text-base bg-gray-50 font-semibold text-gray-700">
                                                        {label}
                                                    </div>
                                                    <div className="px-6 py-4 text-sm md:text-base text-gray-600">
                                                        {value}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* WhatsApp Inquiry Button */}
                                <div className="pt-4">
                                    <button
                                        onClick={() => handleWhatsAppInquiry(product)}
                                        className="w-full bg-green-500 hover:bg-green-600 cursor-pointer text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-3 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                    >
                                        <MessageCircle className="w-6 h-6" />
                                        Send Inquiry via WhatsApp
                                    </button>
                                    <p className="text-center text-gray-500 text-sm mt-3">
                                        Get instant response to your queries
                                    </p>
                                </div>

                                {/* Contact Info */}
                                <div className="border-t pt-6 space-y-3">
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Phone className="w-5 h-5 text-orange-500" />
                                        <span>+91 1234567890</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-600">
                                        <Mail className="w-5 h-5 text-orange-500" />
                                        <span>info@sesameexports.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Full Width Description Section */}
                        <div className="mt-16 p-8 md:p-12 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <Package className="w-8 h-8 text-orange-500" />
                                <h2 className="text-lg md:text-3xl font-semibold text-gray-900">Product Description</h2>
                            </div>
                            <p className="text-gray-700 text-sm md:text-lg leading-relaxed">
                                {product.description}
                            </p>

                            {/* Additional Information Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
                                {/* Packaging Options */}
                                {/* <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Sprout className="w-6 h-6 text-orange-500" />
                                        <h3 className="text-xl font-bold text-gray-900">Packaging Options</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {product.packaging.map((pack, index) => (
                                            <span key={index} className="bg-orange-50 border border-orange-200 px-4 py-2 rounded-lg text-gray-700 text-sm font-medium">
                                                {pack}
                                            </span>
                                        ))}
                                    </div>
                                </div> */}

                                {/* Applications */}
                                {/* <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Globe className="w-6 h-6 text-orange-500" />
                                        <h3 className="text-xl font-bold text-gray-900">Applications</h3>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {product.applications.map((app, index) => (
                                            <span key={index} className="bg-orange-100 text-orange-700 px-4 py-2 rounded-lg text-sm font-medium">
                                                {app}
                                            </span>
                                        ))}
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    // If product is selected, show details
    if (selectedProduct) {
        return <ProductDetails product={selectedProduct} />;
    }

    // Otherwise show product grid
    return (
        <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto mb-12 text-center">
                <h1 data-aos="fade-up" className="forum text-4xl md:text-5xl font-bold leading-tight overflow-hidden text-[var(--orange)]">
                    Our Premium <span className='text-[var(--dark)]'>Products</span>
                </h1>
                <p data-aos="fade-up" className="text-md md:text-lg text-gray-600 md:w-lg font-medium mx-auto leading-relaxed mt-4">
                    Discover our range of high-quality sesame products, sourced from the finest farms
                </p>
            </div>

            {/* Products Grid */}
            <div className="max-w-7xl mx-auto">
                <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsShowcase;