import React, { useState } from 'react';
import { ArrowRight, Heart, Users, Phone } from 'lucide-react';
import ContactOverlay from './ContactOverlay';
import WonProjects from './WonProjects';
import AboutWon from './AboutWon';
import logo from '../../assets/won_logo.png';

const WonHome = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleTeamNavigation = () => {
    // Replace with your routing logic
    window.location.href = '/won/team';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-teal-50">
      {/* Hero Section */}
      <section className="pt-24 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-teal-600/10"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="text-6xl md:text-7xl mb-6 animate-bounce flex justify-center">
              <img 
                src={logo}
                alt="WON Foundation Logo"
                className="h-20 md:h-28 w-auto object-contain"
              />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-700 via-blue-700 to-teal-700 bg-clip-text text-transparent mb-6">
              WON Foundation
            </h1>
            <div className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">
              Widows • Orphans • Needy
            </div>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Transforming lives through compassionate care and sustainable support for those who need it most
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-100 to-teal-100 px-8 py-4 rounded-full border border-purple-200">
              <Heart className="w-5 h-5 text-purple-600" />
              <span className="text-purple-700 font-semibold">Building Hope Together</span>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleTeamNavigation}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Users className="w-5 h-5" />
              <span>Meet Our Team</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Contact Us</span>
            </button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-20 animate-pulse delay-500"></div>
      </section>

      {/* Projects Section */}
      <WonProjects />

      {/* About Section */}
      <AboutWon />

      {/* Contact Overlay */}
      <ContactOverlay isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};

export default WonHome;