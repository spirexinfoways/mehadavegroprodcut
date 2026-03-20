import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import FAQImage from "../../assets/HomeImg/23.png"

const FAQComponent = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: 'What agricultural products do you export?',
      answer: 'We specialize in premium quality oil seeds and spices including white sesame seeds, black sesame seeds, groundnuts, coriander seeds, cumin seeds, fennel seeds, fenugreek seeds, mustard seeds, moong, chickpeas, turmeric fingers, red chillies and other Indian agro commodities sourced directly from trusted farmers.'
    },
    {
      question: 'How do I place an order for oil seeds or spices?',
      answer: 'Contact us via email, phone, WhatsApp or our website inquiry form. Provide details like product type, grade, quantity, destination country and packaging preferences. We will respond quickly with current pricing, available stock, and a customized proforma invoice.'
    },
    {
      question: 'Do you export worldwide?',
      answer: 'Yes, we export to over 50 countries including the Middle East, Europe, USA, UK, Southeast Asia, Africa and Australia. We handle all export compliance and documentation for smooth delivery to your port.'
    },
    {
      question: 'What is the minimum order quantity (MOQ)?',
      answer: 'MOQ typically starts from 1 metric ton for most oil seeds and spices in bulk packaging. We can ship full container load (FCL) 20ft/40ft or less than container load (LCL) as per your requirement.'
    },
    {
      question: 'How long does delivery take?',
      answer: 'Sea freight delivery times: Middle East (15-25 days), Europe/USA (30-45 days), Southeast Asia (10-20 days). Air freight is available for urgent shipments (3-7 days). Exact ETA is confirmed at booking.'
    },
    {
      question: 'Do you provide quality certifications?',
      answer: 'Yes, every shipment includes standard Phytosanitary Certificates, Certificates of Origin, Fumigation Certificates, Health Certificates and third-party inspection reports (e.g., SGS) for purity.'
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <div className="bg-[#ffffff] py-24 md:py-32 px-6 md:px-12 border-t border-[#0E6F3A]/10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Side - Heading */}
          <div className="lg:col-span-5 lg:sticky top-[120px]">
            <div className="font-inter text-[#C66D42] text-sm tracking-[0.2em] uppercase font-semibold mb-6" data-aos="fade-right">
               Information
            </div>
            <h1 data-aos="fade-right" className="font-playfair text-5xl md:text-7xl text-[#0E6F3A] leading-[1.1] tracking-tight mb-8">
              Frequently <br className="hidden md:block"/><span className="italic text-[#C66D42]">Asked Questions</span>
            </h1>
            <p data-aos="fade-right" className="font-inter text-gray-700 text-lg font-light leading-relaxed mb-12">
               Everything you need to know about our global export logistics, product purity, and supply chain operations.
            </p>
            <div data-aos="fade-right" className="hidden md:block relative w-full h-[500px] bg-white p-2">
                <img src={FAQImage} alt="Agricultural logistics export" className="w-full h-full object-cover filter contrast-125 saturate-50" />
            </div>
          </div>

          {/* Right Side - Accordion */}
          <div className="lg:col-span-7 w-full pt-4">
            <div className="border-t border-[#0E6F3A]/20">
              {faqs.map((faq, index) => (
                <div
                  data-aos="fade-left"
                  data-aos-delay={index * 50}
                  key={index}
                  className="border-b border-[#0E6F3A]/20 overflow-hidden group"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full cursor-pointer py-8 flex justify-between items-center text-left"
                  >
                    <span className={`font-playfair text-2xl md:text-3xl transition-colors duration-500 pr-8 ${openFaq === index ? 'text-[#C66D42]' : 'text-[#0E6F3A] group-hover:text-[#C66D42]'}`}>
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 text-[#0E6F3A]">
                      {openFaq === index ? (
                        <Minus strokeWidth={1} className="w-8 h-8" />
                      ) : (
                        <Plus strokeWidth={1} className="w-8 h-8 text-[#0E6F3A]/50 group-hover:text-[#0E6F3A] transition-colors" />
                      )}
                    </span>
                  </button>

                  <div
                    className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${openFaq === index ? 'max-h-96' : 'max-h-0'}`}
                  >
                    <div className="pb-10 pt-2 lg:pr-16">
                      <p className="font-inter text-gray-600 leading-relaxed font-light text-lg">
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