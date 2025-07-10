import React from 'react';
import { ArrowRight } from 'lucide-react';
import OurTeam from './OurTeam';
import AboutUs from './AboutUs';

import { programs } from '../../data/children';

const Home = () => {
  const handleNavigation = (route) => {
    // Replace with your routing logic
    window.location.href = `/${route}`;
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-teal-50">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-teal-700 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-6">
            Welcome to Kduah Ministry
          </h1>
          <p className="text-md md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The Gospel on Display - Transforming lives through the power of God's Word
          </p>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-100 to-blue-100 px-6 py-3 rounded-full border border-teal-200">
            <span className="text-teal-700 font-semibold">Building a community of believers</span>
            <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-700 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-4">
              Our Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our ministry programs designed to nurture spiritual growth and community connection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div 
                key={program.id}
                className={`bg-gradient-to-br ${program.bgGradient} backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group`}
                onClick={() => handleNavigation(program.id)}
              >
                <div className={`w-16 h-16 bg-gradient-to-br rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <img 
                    src={program.icon}
                    alt={program.title}
                    className="h-12 md:h-16 w-auto object-contain"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-teal-700 transition-colors duration-300">
                  {program.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {program.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigation(program.id);
                    }}
                    className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${program.gradient} text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-8 h-8 bg-gradient-to-br ${program.gradient} rounded-full flex items-center justify-center`}>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <AboutUs />

      {/* Our Team Section */}
      <OurTeam />

    </div>
  );
};

export default Home;