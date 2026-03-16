// import React from 'react';
// import { Check, Truck, Clock, DollarSign, Package, Shield, Droplet, Wrench } from 'lucide-react';

// const WhyChooseUs = () => {
//   const columns = [
//     // First Column (no offset)
//     [
//       {
//         title: "Experienced Logistics",
//         description: "Our specialists bring decades of experience.",
//         points: [
//           "Expertise in freight forwarding",
//           "Seamless customs clearance",
//           "Global supply chain optimization"
//         ],
//         icon: Truck // Logistics-related icon
//       },
//       {
//         title: "Reliable Cargo Handling",
//         description: "Every shipment is managed with precision and care.",
//         points: [
//           "Secure packing and loading",
//           "Risk-free transportation",
//           "Guaranteed safe delivery"
//         ],
//         icon: Package // Cargo-related icon
//       }
//     ],
//     // Second Column (offset top-10)
//     [
//       {
//         title: "Fast Delivery Commitment",
//         description: "We ensure timely deliveries with advanced technology.",
//         points: [
//           "Optimized delivery routes",
//           "Real-time tracking",
//           "Minimized delays"
//         ],
//         icon: Clock // Time-related icon
//       },
//       {
//         title: "Comprehensive Solutions",
//         description: "We cover all logistics needs efficiently.",
//         points: [
//           "Warehousing and storage",
//           "Distribution services",
//           "Freight management"
//         ],
//         icon: Wrench // Tools/services-related icon
//       }
//     ],
//     // Third Column (offset top-20)
//     [
//       {
//         title: "Transparent Pricing Policy",
//         description: "Clear and competitive pricing for all clients.",
//         points: [
//           "No hidden charges",
//           "Easy-to-understand rates",
//           "Full financial transparency"
//         ],
//         icon: DollarSign // Money-related icon
//       },
//       {
//         title: "Satisfaction Guarantee",
//         description: "Your trust is our priority with top support.",
//         points: [
//           "Responsive customer service",
//           "Quality assurance",
//           "100% satisfaction commitment"
//         ],
//         icon: Shield // Protection/trust-related icon
//       }
//     ]
//   ];

//   const columnOffsets = ['', 'md:mt-10', 'md:mt-20'];

//   return (
//     <div className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 lg:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <p data-aos="fade-up" className="text-(--green) px-4 py-2 inline-block rounded-full text-sm font-semibold uppercase tracking-wider mb-3">
//             Why Choose Us
//           </p>
//           <h2 data-aos="fade-up" className="forum text-3xl md:text-5xl font-bold leading-tight overflow-hidden text-(--orange)">
//             Trusted Logistics Partner for <span className=' text-(--dark) block'>Worldwide Shipping</span></h2>
//         </div>

//         {/* Features Grid with Staggered Columns */}
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-8 mt-16">
//           {columns.map((column, colIndex) => (
//             <div key={colIndex} className={`space-y-8 ${columnOffsets[colIndex]}`}>
//               {column.map((feature, featureIndex) => (
//                 <div data-aos="fade-up"
//                   key={featureIndex}
//                   className="flex gap-4 p-6 bg-white border border-(--orange)/40 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
//                 >
//                   {/* Icon */}
//                   <div className="flex-shrink-0 w-10 lg:w-16 h-10 lg:h-16 bg-(--darkgreen) rounded-xl flex items-center justify-center text-white">
//                     <feature.icon className="w-4 lg:w-8 h-4 lg:h-8" />
//                   </div>
                  
//                   {/* Content */}
//                   <div className="flex-1">
//                     <h3 className="text-md lg:text-xl font-bold text-gray-900 mb-2">
//                       {feature.title}
//                     </h3>
//                     <p className="text-gray-600 text-xs lg:text-sm mb-3">{feature.description}</p>
//                     <ul className="text-gray-700 text-xs lg:text-sm space-y-2">
//                       {feature.points.map((point, i) => (
//                         <li key={i} className="flex items-center">
//                           <span className="w-1 lg:w-2 h-1 lg:h-2 bg-(--green) rounded-full mr-2"></span>
//                           {point}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUs;

import React from 'react';
import { Check, Truck, Clock, DollarSign, Package, Shield, Users, Leaf } from 'lucide-react';

const WhyChooseUs = () => {
  const columns = [
    // First Column (no offset)
    [
      {
        title: "Trusted Sourcing Network",
        description: "Direct connections with farmers across India for premium quality.",
        points: [
          "Strong relationships with verified farmers",
          "Direct farm-to-export sourcing",
          "Consistent supply of high-grade oil seeds & spices"
        ],
        icon: Users
      },
      {
        title: "Consistent Quality and Competitive Pricing",
        description: "Premium products at the best market rates without compromise.",
        points: [
          "Rigorous quality testing & sorting",
          "Bulk sourcing for cost advantages",
          "Fair and market-competitive pricing"
        ],
        icon: Leaf
      }
    ],
    // Second Column (offset top-10)
    [
      {
        title: "Transparent Trade Practices",
        description: "Complete honesty in every transaction and process.",
        points: [
          "Clear documentation & certifications",
          "No hidden charges or surprises",
          "Full visibility from order to delivery"
        ],
        icon: Shield
      },
      {
        title: "Timely Execution of Orders",
        description: "Reliable schedules ensuring your goods arrive when promised.",
        points: [
          "Efficient processing & packing",
          "On-time container stuffing",
          "Prompt shipment booking & sailing"
        ],
        icon: Clock
      }
    ],
    // Third Column (offset top-20)
    [
      {
        title: "Long-term Partnership Approach",
        description: "We build lasting relationships for mutual growth.",
        points: [
          "Dedicated account managers",
          "Flexible terms for repeat buyers",
          "Support for growing your business"
        ],
        icon: Package
      },
      {
        title: "Customer-centric Service",
        description: "Your success and satisfaction are our top priorities.",
        points: [
          "24/7 responsive support",
          "Customized solutions & packaging",
          "End-to-end assistance from inquiry to delivery"
        ],
        icon: Check
      }
    ]
  ];

  const columnOffsets = ['', 'md:mt-10', 'md:mt-20'];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 lg:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p data-aos="fade-up" className="text-[var(--green)] px-4 py-2 inline-block rounded-full text-sm font-semibold uppercase tracking-wider mb-3">
            Why Choose Us
          </p>
          <h2 data-aos="fade-up" className="forum text-3xl md:text-5xl font-bold leading-tight overflow-hidden text-[var(--orange)]">
            Why Choose <span className='text-[var(--dark)] block'>Earth Agri Impex?</span>
          </h2>
        </div>

        {/* Features Grid with Staggered Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-8 mt-16">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className={`space-y-8 ${columnOffsets[colIndex]}`}>
              {column.map((feature, featureIndex) => (
                <div data-aos="fade-up"
                  key={featureIndex}
                  className="flex gap-4 p-6 bg-white border border-[var(--orange)]/40 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-10 lg:w-16 h-10 lg:h-16 bg-[var(--darkgreen)] rounded-xl flex items-center justify-center text-white">
                    <feature.icon className="w-4 lg:w-8 h-4 lg:h-8" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-md lg:text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-xs lg:text-sm mb-3">{feature.description}</p>
                    <ul className="text-gray-700 text-xs lg:text-sm space-y-2">
                      {feature.points.map((point, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-1 lg:w-2 h-1 lg:h-2 bg-[var(--green)] rounded-full mr-2"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;