// import React, { useState } from 'react';
// import { ChevronDown } from 'lucide-react';

// const FAQComponent = () => {
//   const [activeTab, setActiveTab] = useState('shipping');
//   const [openFaq, setOpenFaq] = useState(0);

//   const tabs = [
//     { id: 'shipping', label: 'Shipping & Delivery' },
//     { id: 'tracking', label: 'Tracking & Support' },
//     { id: 'billing', label: 'Billing & Documentation' }
//   ];

//   const faqData = {
//     shipping: [
//       {
//         question: 'What services do you offer?',
//         answer: 'We offer comprehensive logistics solutions including ocean freight, air cargo, ground transportation, warehousing, customs clearance, and supply chain management. Our services cover domestic and international shipping with real-time tracking capabilities.'
//       },
//       {
//         question: 'How do I get started to get service?',
//         answer: 'Getting started is simple! Contact our sales team through our website, email, or phone. We\'ll discuss your shipping needs, provide a customized quote, and guide you through our onboarding process. Once approved, you can start shipping immediately.'
//       },
//       {
//         question: 'Do you handle international shipments?',
//         answer: 'Yes, we specialize in international logistics with partnerships across 150+ countries. We handle all customs documentation, duties, and compliance requirements to ensure smooth cross-border transportation of your goods.'
//       },
//       {
//         question: 'What is included in the shipping process?',
//         answer: 'Our shipping process includes pickup coordination, packaging assistance, documentation preparation, customs clearance, real-time tracking, insurance options, and final delivery confirmation. We handle every step from origin to destination.'
//       },
//       {
//         question: 'How long does shipping usually take?',
//         answer: 'Delivery times vary by service type and destination. Express air freight: 1-3 days, standard air freight: 5-7 days, ocean freight: 15-45 days, and ground transportation: 2-10 days domestically. We provide estimated delivery dates for every shipment.'
//       }
//     ],
//     tracking: [
//       {
//         question: 'How can I track my shipment?',
//         answer: 'Track your shipment 24/7 through our online portal using your tracking number. You\'ll receive real-time updates via email and SMS at each milestone. Our customer service team is also available to provide detailed tracking information.'
//       },
//       {
//         question: 'What if my shipment is delayed?',
//         answer: 'If delays occur, we proactively notify you and provide updated delivery estimates. Our team works to resolve issues quickly and keeps you informed throughout the process. We also offer compensation for delays on premium services.'
//       },
//       {
//         question: 'Can I change delivery address after shipping?',
//         answer: 'Address changes are possible before the shipment reaches the destination country. Contact our support team immediately with your tracking number and new address. Additional fees may apply based on the shipment stage.'
//       },
//       {
//         question: 'What support channels are available?',
//         answer: 'We offer 24/7 customer support through phone, email, live chat, and our mobile app. Our dedicated account managers are available for enterprise clients, and we provide multilingual support for international customers.'
//       },
//       {
//         question: 'How do I file a claim for damaged goods?',
//         answer: 'Report damage within 48 hours of delivery. Submit photos, documentation, and your tracking number through our claims portal. Our team will review and process your claim within 5-10 business days, with compensation based on your insurance coverage.'
//       }
//     ],
//     billing: [
//       {
//         question: 'What payment methods do you accept?',
//         answer: 'We accept all major credit cards, bank transfers, PayPal, and corporate accounts with net payment terms. International payments can be made via wire transfer or our global payment partners in local currencies.'
//       },
//       {
//         question: 'How is shipping cost calculated?',
//         answer: 'Shipping costs are based on weight, dimensions, distance, service speed, and additional services like insurance or special handling. Use our online calculator for instant quotes, or contact us for volume discounts and corporate rates.'
//       },
//       {
//         question: 'What documents do I need for shipping?',
//         answer: 'Required documents include commercial invoice, packing list, and shipping labels. For international shipments, you may need certificates of origin, customs declarations, and specific permits. We assist with all documentation preparation.'
//       },
//       {
//         question: 'Do you offer invoicing for businesses?',
//         answer: 'Yes, we provide detailed invoicing with net-30, net-60, or net-90 payment terms for qualified businesses. Invoices include itemized charges, tracking numbers, and can be customized to match your accounting requirements.'
//       },
//       {
//         question: 'Are there any hidden fees?',
//         answer: 'We maintain transparent pricing with no hidden fees. All costs including base shipping, fuel surcharges, customs duties, and optional services are clearly stated in your quote. Any additional charges require your approval before processing.'
//       }
//     ]
//   };

//   const toggleFaq = (index) => {
//     setOpenFaq(openFaq === index ? -1 : index);
//   };

//   return (
//     <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-16 items-start">
//           {/* Left Side - Heading */}
//           <div className="lg:sticky lg:top-24">
//             <div className="mb-6">
//               <span  data-aos="fade-right" className="text-[var(--green)] text-lg font-semibold tracking-wide uppercase">
//                 FAQ
//               </span>
//             </div>
//             <h1  data-aos="fade-right" className="forum text-4xl lg:text-5xl font-bold leading-tight overflow-hidden text-[var(--orange)] mb-4">
//               Everything You Should Know About <span className=' text-[var(--dark)]'>Cargo Logistics</span> 
//             </h1>
//             <img  data-aos="fade-right" src="https://i.pinimg.com/1200x/ca/55/1b/ca551bde8bd261b9d07adfb0acef1771.jpg" alt="" />
//           </div>

//           {/* Right Side - Tabs and FAQs */}
//           <div className="w-full">
//             {/* Tabs */}
//             <div  data-aos="fade-left"  className="flex flex-wrap gap-3 mb-8">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => {
//                     setActiveTab(tab.id);
//                     setOpenFaq(0);
//                   }}
//                   className={`px-6 py-3 cursor-pointer rounded-lg font-semibold transition-all duration-300 ${
//                     activeTab === tab.id
//                       ? 'bg-[var(--darkgreen)] text-white shadow-lg'
//                       : 'bg-white text-gray-700 font-medium border-2 border-gray-200 hover:border-[var(--orange)] hover:text-[var(--orange)]'
//                   }`}
//                 >
//                   {tab.label}
//                 </button>
//               ))}
//             </div>

//             {/* FAQ Accordion */}
//             <div className="space-y-4">
//               {faqData[activeTab].map((faq, index) => (
//                 <div  data-aos="fade-left" 
//                   key={index}
//                   className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-orange-200 hover:shadow-md"
//                 >
//                   <button
//                     onClick={() => toggleFaq(index)}
//                     className="w-full cursor-pointer px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors duration-200"
//                   >
//                     <span className="text-md font-semibold text-gray-900 pr-4">
//                       {faq.question}
//                     </span>
//                     <ChevronDown
//                       className={`w-6 h-6 text-orange-500 flex-shrink-0 transition-transform duration-300 ${
//                         openFaq === index ? 'transform rotate-180' : ''
//                       }`}
//                     />
//                   </button>
                  
//                   <div
//                     className={`overflow-hidden transition-all duration-300 ease-in-out ${
//                       openFaq === index ? 'max-h-96' : 'max-h-0'
//                     }`}
//                   >
//                     <div className="text-sm px-6 pb-6">
//                       <p className="text-gray-700 leading-relaxed font-medium">
//                         {faq.answer}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQComponent;

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQComponent = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: 'What agricultural products do you export?',
      answer: 'We specialize in premium quality oil seeds and spices including white sesame seeds, black sesame seeds, hulled sesame, natural sesame, groundnuts (peanuts), coriander seeds, cumin seeds, fennel seeds, fenugreek seeds, mustard seeds, moong (mung beans), chickpeas (kabuli & desi), turmeric fingers, red chillies and other Indian agro commodities sourced directly from trusted farmers.'
    },
    {
      question: 'How do I place an order for oil seeds or spices?',
      answer: 'Contact us via email, phone, WhatsApp or our website inquiry form. Provide details like product type, grade, quantity, destination country and packaging preferences. We will respond quickly with current pricing, available stock, samples (if requested) and a customized proforma invoice.'
    },
    {
      question: 'Do you export worldwide?',
      answer: 'Yes, we export to over 50 countries including the Middle East (UAE, Saudi Arabia, Oman), Europe, USA, UK, Southeast Asia (Malaysia, Indonesia, Singapore), Africa and Australia. We handle all export compliance and documentation for smooth delivery to your port.'
    },
    {
      question: 'What is the minimum order quantity (MOQ)?',
      answer: 'MOQ typically starts from 1 metric ton for most oil seeds and spices in bulk packaging. We can ship full container load (FCL) 20ft/40ft or less than container load (LCL) as per your requirement.'
    },
    {
      question: 'How long does delivery take?',
      answer: 'Sea freight delivery times: Middle East (15-25 days), Europe/USA (30-45 days), Southeast Asia (10-20 days). Air freight is available for urgent/sample shipments (3-7 days). Exact ETA is confirmed at the time of booking.'
    },
    {
      question: 'Do you provide quality certifications?',
      answer: 'Yes, every shipment includes Phytosanitary Certificate, Certificate of Origin, Fumigation Certificate (Methyl Bromide/Aluminum Phosphide), Health Certificate and third-party inspection reports (SGS, Bureau Veritas, GeoChem) for purity, aflatoxin, moisture and pesticide residues.'
    },
    
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <div className="min-h-screen bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-16 items-center">
          {/* Left Side - Heading */}
          <div className="lg:sticky lg:top-24">
            <div className="mb-6">
              <span data-aos="fade-right" className="text-[var(--green)] text-lg font-semibold tracking-wide uppercase">
                FAQ
              </span>
            </div>
            <h1 data-aos="fade-right" className="forum text-4xl lg:text-5xl font-bold leading-tight overflow-hidden text-[var(--orange)] mb-4">
              Everything You Should Know About <span className='text-[var(--dark)]'>Oil Seeds & Spices Export</span>
            </h1>
            <img data-aos="fade-right" src="https://i.pinimg.com/1200x/ca/55/1b/ca551bde8bd261b9d07adfb0acef1771.jpg" alt="Oil seeds and spices export products"  />
          </div>

          {/* Right Side - Single FAQ Accordion (No Tabs) */}
          <div className="w-full">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  data-aos="fade-left"
                  key={index}
                  className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden transition-all duration-300 hover:border-orange-200 hover:shadow-md"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full cursor-pointer px-6 py-5 flex justify-between items-center text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <span className="text-md font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-6 h-6 text-orange-500 flex-shrink-0 transition-transform duration-300 ${
                        openFaq === index ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openFaq === index ? 'max-h-96' : 'max-h-0'
                    }`}
                  >
                    <div className="text-sm px-6 pb-6">
                      <p className="text-gray-700 leading-relaxed font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQComponent;