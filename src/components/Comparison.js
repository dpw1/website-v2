import React from 'react';
import { FREE_SAMPLE_FORM_URL } from '../utils/constants';
import './Comparison.css';

// Checkmark Icon Component
const CheckIcon = ({ className = "w-5 h-5 shrink-0 mt-0.5 transition-all duration-200 text-green-400 hover:text-green-300" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}>
    <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
  </svg>
);

// X Icon Component
const XIcon = ({ className = "w-5 h-5 shrink-0 mt-0.5 transition-all duration-200 text-red-400 hover:text-red-300" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className}>
    <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
  </svg>
);

const Comparison = () => {
  // Image paths
  const getDatesImage = '/images/comparison/PawBoatSittingDrink_00004_.avif';
  const otherAIToolsImage = '/images/comparison/CGPT-carousel.avif';
  const photographerImage = '/images/comparison/paw-headshot7.avif';

  const getDatesFeatures = [
    "Looks exactly like you",
    "Tailored to your personality and hobbies",
    "Can generate smartphone looking photos as well as professional ones",
    "Skin and hands look real",
    "Guarantees more matches"
  ];

  const otherAIToolsFeatures = [
    "Doesn't look fully like you",
    "Looks cartoony",
    "Not geared towards dating apps",
    "Many AI tells like smooth skin, clothes and artifacts",
    "No guarantees"
  ];

  const photographerFeatures = [
    "Expensive and time-consuming",
    "Lots of trial and error",
    "You need to model, change outfits, change locations, etc.",
    "No guarantees"
  ];

  return (
    <section className="bg-section-gradient">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-20 xl:py-32">
        <h2 className="text-center font-extrabold text-2xl lg:text-3xl xl:text-5xl tracking-tight mb-8 lg:mb-12 xl:mb-20 text-white">
          Photos that actually look like you
        </h2>
        
        <div className="flex justify-center">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10 pb-4 w-full lg:w-auto">
            {/* GetDatesWithAi.com Card */}
            <div className="bg-card-gradient border-green-400/60 shadow-green-400/20 border-2 p-6 lg:p-8 xl:p-10 rounded-xl w-full lg:w-[320px] xl:w-[380px] flex flex-col max-w-sm mx-auto lg:mx-0 shadow-premium card-hover-effect hover:shadow-premium-lg">
              <div className="mb-6 flex justify-center">
                <img 
                  alt="GetDatesWithAi.com example" 
                  loading="lazy" 
                  width="240" 
                  height="240" 
                  decoding="async"
                  className="rounded-xl object-cover w-full aspect-square max-w-[240px] mx-auto" 
                  style={{ color: 'transparent', maxWidth: '100%', height: 'auto' }}
                  src={getDatesImage}
                />
              </div>
              <h3 className="font-bold text-xl mb-6 text-white text-center">GetDatesWithAi.com</h3>
              <ul className="space-y-3 flex-1">
                {getDatesFeatures.map((feature, index) => (
                  <li key={index} className="flex gap-3 items-start text-gray-200">
                    <CheckIcon />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other AI Tools Card */}
            <div className="bg-card-gradient border-red-400/60 shadow-red-400/20 border-2 p-6 lg:p-8 xl:p-10 rounded-xl w-full lg:w-[320px] xl:w-[380px] flex flex-col max-w-sm mx-auto lg:mx-0 shadow-premium card-hover-effect hover:shadow-premium-lg">
              <div className="mb-6 flex justify-center">
                <img 
                  alt="Other AI Tools example" 
                  loading="lazy" 
                  width="240" 
                  height="240" 
                  decoding="async"
                  className="rounded-xl object-cover w-full aspect-square max-w-[240px] mx-auto" 
                  style={{ color: 'transparent', maxWidth: '100%', height: 'auto' }}
                  src={otherAIToolsImage}
                />
              </div>
              <h3 className="font-bold text-xl mb-6 text-white text-center">Other AI Tools</h3>
              <ul className="space-y-3 flex-1">
                {otherAIToolsFeatures.map((feature, index) => (
                  <li key={index} className="flex gap-3 items-start text-gray-200">
                    <XIcon />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dating Photographer Card */}
            <div className="bg-card-gradient border-red-400/60 shadow-red-400/20 border-2 p-6 lg:p-8 xl:p-10 rounded-xl w-full lg:w-[320px] xl:w-[380px] flex flex-col max-w-sm mx-auto lg:mx-0 shadow-premium card-hover-effect hover:shadow-premium-lg">
              <div className="mb-6 flex justify-center">
                <img 
                  alt="Dating Photographer example" 
                  loading="lazy" 
                  width="240" 
                  height="240" 
                  decoding="async"
                  className="rounded-xl object-cover w-full aspect-square max-w-[240px] mx-auto" 
                  style={{ color: 'transparent', maxWidth: '100%', height: 'auto' }}
                  src={photographerImage}
                />
              </div>
              <h3 className="font-bold text-xl mb-6 text-white text-center">Dating Photographer</h3>
              <ul className="space-y-3 flex-1">
                {photographerFeatures.map((feature, index) => (
                  <li key={index} className="flex gap-3 items-start text-gray-200">
                    <XIcon />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <a 
            href={FREE_SAMPLE_FORM_URL}
            className="btn-premium btn-md lg:btn-lg px-8 lg:px-10 py-4 lg:py-5 text-base lg:text-lg rounded-lg font-semibold shadow-premium hover:shadow-premium-lg transition-all duration-300 flex items-center justify-center"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Comparison;

