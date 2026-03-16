// import React, { useState, useEffect } from 'react';
// import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// const Gallery = () => {
//     const [selectedImage, setSelectedImage] = useState(null);
//     const [currentIndex, setCurrentIndex] = useState(0);

//     // Gallery images data
//     const galleryImages = [
//         {
//             id: 1,
//             src: 'https://i.pinimg.com/1200x/25/7e/d4/257ed4d087c018fc518516fe4ee90fd0.jpg',
//             alt: 'Sesame Harvesting Event',
//             category: 'Harvest Season'
//         },
//         {
//             id: 2,
//             src: 'https://i.pinimg.com/736x/fb/23/fc/fb23fccef6d2445b36783f82c20ad00f.jpg',
//             alt: 'Quality Inspection',
//             category: 'Quality Control'
//         },
//         {
//             id: 3,
//             src: 'https://i.pinimg.com/736x/bf/97/6f/bf976f09029463b1a10b138cad2f9e32.jpg',
//             alt: 'Sesame Processing',
//             category: 'Processing Unit'
//         },
//         {
//             id: 4,
//             src: 'https://i.pinimg.com/736x/0c/62/7b/0c627b243f85a55a4b7b16d8b4a6cf96.jpg',
//             alt: 'Farmer Partnership',
//             category: 'Community'
//         },
//         {
//             id: 5,
//             src: 'https://i.pinimg.com/1200x/7d/8f/8a/7d8f8a4d702649b184f8968d5d20ceb8.jpg',
//             alt: 'Export Packaging',
//             category: 'Export Ready'
//         },
//         {
//             id: 6,
//             src: 'https://i.pinimg.com/1200x/c4/b1/82/c4b182381b57d3dedc8da3000564d8f3.jpg',
//             alt: 'Trade Exhibition',
//             category: 'Events'
//         },
//         {
//             id: 7,
//             src: 'https://i.pinimg.com/1200x/c0/8d/e4/c08de47b1f6bc44706a21b93e3a59f65.jpg',
//             alt: 'Product Launch',
//             category: 'Events'
//         },
//         {
//             id: 8,
//             src: 'https://i.pinimg.com/1200x/26/ab/9a/26ab9a9fa1ad6a99616023077a2dfd1a.jpg',
//             alt: 'Quality Testing',
//             category: 'Laboratory'
//         },
//         {
//             id: 9,
//             src: 'https://i.pinimg.com/1200x/96/34/7b/96347bf3bcb8f60ab91117343c0581c3.jpg',
//             alt: 'Warehouse Operations',
//             category: 'Logistics'
//         }
//     ];

//     // Lock/unlock body scroll
//     useEffect(() => {
//         if (selectedImage !== null) {
//             document.body.style.overflow = 'hidden';
//         } else {
//             document.body.style.overflow = 'unset';
//         }
        
//         return () => {
//             document.body.style.overflow = 'unset';
//         };
//     }, [selectedImage]);

//     // Handle image click
//     const handleImageClick = (image, index) => {
//         setSelectedImage(image);
//         setCurrentIndex(index);
//     };

//     // Close modal
//     const handleClose = () => {
//         setSelectedImage(null);
//     };

//     // Navigate to previous image
//     const handlePrevious = () => {
//         const newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
//         setCurrentIndex(newIndex);
//         setSelectedImage(galleryImages[newIndex]);
//     };

//     // Navigate to next image
//     const handleNext = () => {
//         const newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
//         setCurrentIndex(newIndex);
//         setSelectedImage(galleryImages[newIndex]);
//     };

//     // Keyboard navigation
//     useEffect(() => {
//         const handleKeyPress = (e) => {
//             if (selectedImage === null) return;
            
//             if (e.key === 'Escape') handleClose();
//             if (e.key === 'ArrowLeft') handlePrevious();
//             if (e.key === 'ArrowRight') handleNext();
//         };

//         window.addEventListener('keydown', handleKeyPress);
//         return () => window.removeEventListener('keydown', handleKeyPress);
//     }, [selectedImage, currentIndex]);

//     return (
//         <div className="bg-white py-16 px-4 md:px-8 lg:px-16">
//             <div className="max-w-7xl mx-auto">
//                 {/* Header */}
//                 <div className="text-center mb-12">
//                     <h2 data-aos="fade-up" className="forum text-4xl md:text-5xl font-bold text-(--orange) mb-4">
//                         Our <span className="text-(--darkgreen)">Gallery</span>
//                     </h2>
//                     <p data-aos="fade-up" className="text-lg text-gray-600 max-w-3xl mx-auto">
//                         Explore our journey through events, exhibitions, and quality operations
//                     </p>
//                 </div>

//                 {/* Masonry Gallery Grid */}
//                 <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                     {galleryImages.map((image, index) => (
//                         <div data-aos="fade-up"
//                             key={image.id}
//                             className={`relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl
//                                 ${index === 0 ? 'row-span-2' : ''}
//                                 ${index === 4 ? 'row-span-2' : ''}
//                                 ${index === 1 ? 'col-span-1 row-span-2' : ''}
//                                 ${index === 7 ? 'col-span-1 row-span-2' : ''}
//                             `}
//                             onClick={() => handleImageClick(image, index)}
//                         >
//                             {/* Image */}
//                             <img
//                                 src={image.src}
//                                 alt={image.alt}
//                                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                             />
                            
//                             {/* Overlay - Always visible */}
//                             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                        

//                             {/* Hover Effect - View Icon */}
//                             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                                 <div className="bg-white rounded-full p-3">
//                                     <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
//                                     </svg>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Modal/Lightbox */}
//                 {selectedImage && (
//                     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 bg-opacity-95">
//                         {/* Close Button */}
//                         <button
//                             onClick={handleClose}
//                             className="absolute top-4 right-4 z-50 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
//                             aria-label="Close"
//                         >
//                             <X className="w-6 h-6 text-gray-800" />
//                         </button>

//                         {/* Previous Button */}
//                         <button
//                             onClick={handlePrevious}
//                             className="absolute left-4 z-50 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
//                             aria-label="Previous"
//                         >
//                             <ChevronLeft className="w-6 h-6 text-gray-800" />
//                         </button>

//                         {/* Next Button */}
//                         <button
//                             onClick={handleNext}
//                             className="absolute right-4 z-50 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
//                             aria-label="Next"
//                         >
//                             <ChevronRight className="w-6 h-6 text-gray-800" />
//                         </button>

//                         {/* Image Container */}
//                         <div className="relative max-w-5xl max-h-[90vh] mx-4">
//                             <img
//                                 src={selectedImage.src}
//                                 alt={selectedImage.alt}
//                                 className="max-w-full max-h-[90vh] object-contain rounded-lg"
//                             />
                        
//                         </div>

//                         {/* Click outside to close */}
//                         <div
//                             className="absolute inset-0 -z-10"
//                             onClick={handleClose}
//                         ></div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Gallery;

import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Gallery images data
    const galleryImages = [
        {
            id: 1,
            src: 'https://i.pinimg.com/1200x/25/7e/d4/257ed4d087c018fc518516fe4ee90fd0.jpg',
            alt: 'Sesame Harvesting Event',
            category: 'Harvest Season'
        },
        {
            id: 2,
            src: 'https://i.pinimg.com/736x/fb/23/fc/fb23fccef6d2445b36783f82c20ad00f.jpg',
            alt: 'Quality Inspection',
            category: 'Quality Control'
        },
        {
            id: 3,
            src: 'https://i.pinimg.com/736x/bf/97/6f/bf976f09029463b1a10b138cad2f9e32.jpg',
            alt: 'Sesame Processing',
            category: 'Processing Unit'
        },
        {
            id: 4,
            src: 'https://i.pinimg.com/736x/0c/62/7b/0c627b243f85a55a4b7b16d8b4a6cf96.jpg',
            alt: 'Farmer Partnership',
            category: 'Community'
        },
        {
            id: 5,
            src: 'https://i.pinimg.com/1200x/7d/8f/8a/7d8f8a4d702649b184f8968d5d20ceb8.jpg',
            alt: 'Export Packaging',
            category: 'Export Ready'
        },
        {
            id: 6,
            src: 'https://i.pinimg.com/1200x/c4/b1/82/c4b182381b57d3dedc8da3000564d8f3.jpg',
            alt: 'Trade Exhibition',
            category: 'Events'
        },
        {
            id: 7,
            src: 'https://i.pinimg.com/1200x/c0/8d/e4/c08de47b1f6bc44706a21b93e3a59f65.jpg',
            alt: 'Product Launch',
            category: 'Events'
        },
        // {
        //     id: 8,
        //     src: 'https://i.pinimg.com/1200x/26/ab/9a/26ab9a9fa1ad6a99616023077a2dfd1a.jpg',
        //     alt: 'Quality Testing',
        //     category: 'Laboratory'
        // },
        // {
        //     id: 9,
        //     src: 'https://i.pinimg.com/1200x/96/34/7b/96347bf3bcb8f60ab91117343c0581c3.jpg',
        //     alt: 'Warehouse Operations',
        //     category: 'Logistics'
        // }
    ];

    // Lock/unlock body scroll
    useEffect(() => {
        if (selectedImage !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    // Handle image click
    const handleImageClick = (image, index) => {
        setSelectedImage(image);
        setCurrentIndex(index);
    };

    // Close modal
    const handleClose = () => {
        setSelectedImage(null);
    };

    // Navigate to previous image
    const handlePrevious = () => {
        const newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
        setCurrentIndex(newIndex);
        setSelectedImage(galleryImages[newIndex]);
    };

    // Navigate to next image
    const handleNext = () => {
        const newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
        setCurrentIndex(newIndex);
        setSelectedImage(galleryImages[newIndex]);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e) => {
            if (selectedImage === null) return;
            
            if (e.key === 'Escape') handleClose();
            if (e.key === 'ArrowLeft') handlePrevious();
            if (e.key === 'ArrowRight') handleNext();
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [selectedImage, currentIndex]);

    return (
        <div className="bg-white py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="forum text-4xl md:text-5xl font-bold leading-tight overflow-hidden text-[var(--orange)]">
                        Our <span className="text-green-700">Gallery</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Explore our journey through events, exhibitions, and quality operations
                    </p>
                </div>

                {/* Masonry Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                    {galleryImages.map((image, index) => (
                        <div
                            key={image.id}
                            className={`relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl
                                ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}
                                ${index === 4 ? 'md:row-span-2' : ''}
                                ${index === 6 ? 'md:col-span-2' : ''}
                                ${index === 8 ? 'md:col-span-2' : ''}
                            `}
                            onClick={() => handleImageClick(image, index)}
                        >
                            {/* Image */}
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                            

                            {/* Hover Effect - View Icon */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="bg-white rounded-full p-3 shadow-lg">
                                    <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal/Lightbox */}
                {selectedImage && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95">
                        {/* Close Button */}
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 z-50 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
                            aria-label="Close"
                        >
                            <X className="w-6 h-6 text-gray-800" />
                        </button>

                        {/* Previous Button */}
                        <button
                            onClick={handlePrevious}
                            className="absolute left-4 z-50 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-800" />
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={handleNext}
                            className="absolute right-4 z-50 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
                            aria-label="Next"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-800" />
                        </button>

                        {/* Image Container */}
                        <div className="relative max-w-5xl max-h-[90vh] mx-4">
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                            />
                            
                        </div>

                        {/* Click outside to close */}
                        <div
                            className="absolute inset-0 -z-10"
                            onClick={handleClose}
                        ></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Gallery;