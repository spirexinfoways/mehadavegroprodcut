// import React from 'react';
// import { Leaf, Award, Apple, Shield } from 'lucide-react';
// import i1 from '../../assets/AboutImg/icon (4).png'
// import i2 from '../../assets/AboutImg/icon (2).png'
// import i3 from '../../assets/AboutImg/icon (5).png'
// import i4 from '../../assets/AboutImg/icon (1).png'
// import i5 from '../../assets/AboutImg/icon (3).png'
// import aboutimg from '../../assets/AboutImg/shipp.png'

// const AboutSection = () => {
//   return (
//     <div className="bg-white py-16 px-4 md:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">

//           {/* Left Side Content */}
//           <div className="space-y-10">
//             {/* First Feature */}
//             <div data-aos="fade-right" className="text-left lg:pe-20">
//               <div className="flex items-start gap-4">
//                 <div className="flex-shrink-0 w-12 lg:w-16 h-12 lg:h-16 rounded-full flex items-center justify-center">
//                   <img src={i1} alt="" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold text-black mb-2">100% Organic</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     Continued at up to zealouslys surrounded sir motionless she end literature derived.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Divider Line */}
//             <div data-aos="fade-right" className="w-50 lg:w-80 h-px bg-gray-300"></div>

//             {/* Second Feature */}
//             <div data-aos="fade-right" className="text-left lg:pe-20">
//               <div className="flex items-start gap-4">
//                 <div className="shrink-0 w-12 lg:w-16 h-12 lg:h-16 rounded-full flex items-center justify-center">
//                   <img src={i2} alt="" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold text-black mb-2">Award winning quality</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     Mentions at up to zealouslys surrounded sir motionless she end literature derived.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Center Circle with Image */}
//           <div data-aos="fade-up" className="flex justify-center items-center">
//             <div className="relative">
//               {/* Large Circle Background */}
//               <div className="relative w-80 h-80 lg:w-130 lg:h-130 rounded-full bg-[#F7C35F] flex items-center justify-center">
//                 {/* Inner White Circle */}
//                 <div className="w-60 h-60 lg:w-90 lg:h-90 flex items-center justify-center  bg-white rounded-full  ">
//                   {/* Sesame Seeds Image Placeholder */}

//                   <img src={aboutimg} alt="" className='absolute w-110' />

//                 </div>
//               </div>

//               {/* Badge */}
//               <div className="absolute -bottom-14 md:-bottom-20 left-1/4 -translate-x-1/2 px-8 py-6 rounded-full">
//                 <img src={i5} alt="" className='w-35 lg:w-55' />
//                 <div className="text-center absolute inset-0 mt-16 lg:mt-25 text-white">
//                   <div className="text-4xl md:text-5xl font-bold">30+</div>
//                   <div className="text-sm mt-1">Products</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right Side Content */}
//           <div className="space-y-10">
//             {/* Third Feature */}
//             <div data-aos="fade-left" className="text-right lg:ps-20">
//               <div className="flex items-start gap-4 flex-row-reverse">
//                 <div className="flex-shrink-0 w-12 lg:w-16 h-12 lg:h-16 rounded-ful flex items-center justify-center">
//                   <img src={i3} alt="" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold text-black mb-2">Healthy & Nutritious</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     Trysonic at up to zealouslys surrounded sir motionless she end literature derived.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Divider Line */}
//             <div data-aos="fade-left" className="w-50 lg:w-80 mx-20 h-px bg-gray-300"></div>

//             {/* Fourth Feature */}
//             <div data-aos="fade-left"  className="text-right lg:ps-20">
//               <div className="flex items-start gap-4 flex-row-reverse">
//                 <div className="flex-shrink-0 w-12 lg:w-16 h-12 lg:h-16 rounded-full flex items-center justify-center">
//                   <img src={i4} alt="" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-bold text-black mb-2">Safe Environment</h3>
//                   <p className="text-gray-600 text-sm leading-relaxed">
//                     Continued at up to zealouslys surrounded sir motionless she end literature derived.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutSection;

import React from 'react';
import plant from '../../assets/AboutImg/plant (3).jpeg'

const AboutUs = () => {
  return (
    <div className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - 2 Lines */}
       <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="forum text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-[var(--orange)] block">Premium Quality from</span>
            <span className="text-[var(--darkgreen)] block text-5xl md:text-7xl">Earth Agri Impex</span>
          </h2>
        </div>

        {/* Main Content with Hover Animated Images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side - Staggered Images Grid with Hover Effects */}
          <div data-aos="fade-right" className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="group relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://i.pinimg.com/1200x/fd/83/42/fd8342b1fa0d619a204473796ad1b0a6.jpg"
                  alt="Premium Z Black Sesame Seeds"
                  className="w-full h-40 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://images.indianexpress.com/2022/05/farmers100.jpg?w=1200"
                  alt="Dedicated farmers in Saurashtra fields"
                  className="w-full h-40 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="group relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={plant}
                  alt="Advanced seed processing plant"
                  className="w-full h-40 md:h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://img.freepik.com/premium-photo/top-view-closeup-black-sesame_92534-211.jpg"
                  alt="High-quality black sesame close-up"
                  className="w-full h-40 md:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div data-aos="fade-left" className="space-y-6 text-gray-600 text-base lg:text-lg leading-relaxed">
            <p>
              <strong className="text-[var(--darkgreen)]">Earth Agri Impex</strong>, established in <strong>2024</strong>, is an ISO 22000:2018 certified company, committed to delivering high-quality agricultural commodities that meet international food safety standards. Based in the agriculturally rich Saurashtra region of Gujarat, India, we specialize in sourcing, cleaning, processing, and exporting premium-quality seeds and grains to global markets.
            </p>
            <p>
              Our roots go back to <strong>2002</strong>, when we began our journey as <strong>Vijay Trading Co.</strong>, trading agriculture commodities. With over two decades of experience in the agricultural market, we have expanded from trading to manufacturing and customized packaging.
            </p>
            <p>
              This region is known for its strong agricultural heritage, providing us access to some of the finest seeds, grains and spices grown by dedicated farmers. We work directly with farmers to procure high-quality produce, which is then processed through advanced cleaning, grading and sortex machinery.
            </p>
            <p>
              Our products are carefully packaged as per buyer specifications, ensuring purity, consistency and international-grade standards. With strong expertise – especially in <strong>Z Black Sesame Seeds</strong> – we are committed to delivering trusted quality, reliable supply and long-lasting business relationships.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;