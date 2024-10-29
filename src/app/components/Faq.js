'use client'
import { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is the cost of a TV repair visit?',
      answer: 'Our visiting charge is ₹199, which covers the technician’s diagnosis and consultation.',
    },
    {
      question: 'Do you repair all brands of LED and LCD TVs?',
      answer: 'Yes, we repair all major brands, including Samsung, LG, Mi, Sony, VU, and more.',
    },
    {
      question: 'How quickly can I expect a technician?',
      answer: 'Our technicians arrive within 60 minutes of booking, providing prompt and reliable service.',
    },
    {
      question: 'Is a pickup and drop service available?',
      answer: 'Yes, we offer a convenient pickup and drop service for all TV repairs.',
    },
    {
      question: 'Do you cover all areas in Pune?',
      answer: 'Yes, we serve all areas in Pune, including Shivajinagar, Wakad, Kothrud, Baner, Hadapsar, and more.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-16 lg:items-center">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <img
              src="https://res.cloudinary.com/dug30iszj/image/upload/v1730222831/Untitled_design_1_lmz19h.png"
              alt="FAQ section"
              className="w-full h-auto rounded-xl object-cover"
            />
          </div>
          {/* FAQ Section */}
          <div className="w-full lg:w-1/2">
            <div className="text-center lg:text-left mb-8">
              <h6 className="text-lg font-semibold text-indigo-600 uppercase mb-2">FAQs</h6>
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Looking for answers?</h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200">
                  <button
                    className="flex justify-between items-center w-full text-left text-xl font-medium text-white py-4 hover:text-indigo-600 transition-colors"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`w-6 h-6 transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`text-white text-base transition-all overflow-hidden ${
                      openIndex === index ? 'max-h-screen' : 'max-h-0'
                    }`}
                    style={{ transition: 'max-height 0.3s ease' }}
                  >
                    <p className="p-4">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
