import React from 'react';
import { Phone, Users, Award, Target } from 'lucide-react';
import leadership from '../../assets/ctcl/leadership.jpg';
import logo from '../../assets/ctcl_logo.png';

const HeroSection = ({ onContactClick, onTeamClick, onMilestonesClick }) => {
  
  return (
    <section className="pt-24 pb-20 px-4 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={leadership} 
          alt="Leadership Development" 
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/20 to-indigo-600/30"></div>
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="text-6xl md:text-7xl mb-6 animate-bounce flex justify-center">
            <div className="w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm shadow-lg">
               <img 
                  src={logo}
                  alt="CTCL Logo"
                  className="h-16 md:h-24 w-auto object-contain"
                />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Center for Transformation & Creative Leadership
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Developing Leaders Who Rightly Handle God's Work
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-100 to-purple-100 px-8 py-4 rounded-full border border-blue-200 backdrop-blur-sm">
            <Target className="w-5 h-5 text-blue-600" />
            <span className="text-blue-700 font-semibold">Transforming Leaders for Church Development</span>
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={onContactClick}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Phone className="w-5 h-5" />
            <span>Contact Us</span>
          </button>
          
          <button 
            onClick={onTeamClick}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Users className="w-5 h-5" />
            <span>Our Team</span>
          </button>
          
          <button 
            onClick={onMilestonesClick}
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Award className="w-5 h-5" />
            <span>Milestones</span>
          </button>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full opacity-20 animate-pulse delay-500"></div>
    </section>
  );
};

export default HeroSection;