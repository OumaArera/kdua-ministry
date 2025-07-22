import React from 'react';
import { ArrowRight } from 'lucide-react';
import { programs } from '../../data/children';

const ProgramsSection = ({ handleNavigation }) => {
  return (
    <section className="py-16 md:py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-white via-teal-200 to-blue-200 bg-clip-text text-transparent">
              Our Subsidiaries
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our ministry programs designed to nurture spiritual growth and community connection
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program, index) => (
            <div 
              key={program.id}
              className={`group relative bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden`}
              onClick={() => handleNavigation(program.id)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="text-5xl mb-4 md:mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={program.icon}
                    alt={program.title}
                    className="h-10 md:h-12 lg:h-16 w-auto object-contain"
                  />
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 group-hover:text-teal-300 transition-colors duration-300">
                  {program.title}
                </h3>
                
                <p className="text-gray-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                  {program.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNavigation(program.id);
                    }}
                    className={`inline-flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r ${program.gradient} text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm md:text-base`}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                  
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${program.gradient} rounded-full flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300`}>
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
            </div>
        </div>
    </section>
  );
};

export default ProgramsSection;