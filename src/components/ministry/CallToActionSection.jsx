import React from 'react';

const CallToActionSection = ({ handleNavigation, onContactClick }) => {
  return (
    <section className="py-16 md:py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
            Join Our Mission
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed">
            Be part of a community dedicated to spreading the Gospel and building stronger churches
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={onContactClick}
              className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
            >
              Get Involved
            </button>
            <button 
              onClick={() => handleNavigation('kduah-ministry/about')}
              className="bg-white/10 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20 text-sm md:text-base"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;