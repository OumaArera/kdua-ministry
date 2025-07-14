import React, { useState, useEffect } from 'react';
import { ArrowRight, Heart, Users, Phone } from 'lucide-react';
import ContactOverlay from './ContactOverlay';
import WonProjects from './WonProjects';
import AboutWon from './AboutWon';
import logo from '../../assets/won_logo.png';

// WON project images
import widow from '../../assets/won/wd5.jpg';
import orphans from '../../assets/won/or9.jpg';
import community from '../../assets/won/cm3.jpg';
import education from '../../assets/won/edu3.jpg';

const WonHome = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for interactive background elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleTeamNavigation = () => {
    // Replace with your routing logic
    window.location.href = '/won/team';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-teal-50 relative overflow-hidden">
      {/* Interactive Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.02}px`,
            top: `${mousePosition.y * 0.02}px`,
          }}
        />
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            right: `${mousePosition.x * 0.01}px`,
            bottom: `${mousePosition.y * 0.01}px`,
          }}
        />
      </div>

      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-teal-600/10"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="text-6xl md:text-7xl mb-6 flex justify-center group">
              <img 
                src={logo}
                alt="WON Foundation Logo"
                className="h-20 md:h-28 w-auto object-contain transform group-hover:scale-110 transition-transform duration-500 hover:rotate-3"
              />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-purple-700 via-blue-700 to-teal-700 bg-clip-text text-transparent mb-6 hover:animate-pulse transition-all duration-300">
              WON Foundation
            </h1>
            <div className="text-xl md:text-2xl font-semibold text-gray-700 mb-2 transform hover:scale-105 transition-transform duration-300">
              Widows • Orphans • Needy
            </div>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-4xl mx-auto hover:text-gray-800 transition-colors duration-300">
              Transforming lives through compassionate care and sustainable support for those who need it most
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-100 to-teal-100 px-8 py-4 rounded-full border border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <Heart className="w-5 h-5 text-purple-600 animate-pulse" />
              <span className="text-purple-700 font-semibold">Building Hope Together</span>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full animate-bounce"></div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleTeamNavigation}
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:rotate-1"
            >
              <Users className="w-5 h-5 group-hover:animate-bounce" />
              <span>Meet Our Team</span>
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
            </button>
            
            <button 
              onClick={() => setIsContactOpen(true)}
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
            >
              <Phone className="w-5 h-5 group-hover:animate-pulse" />
              <span>Contact Us</span>
            </button>
          </div>
        </div>
        
        {/* Enhanced floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse hover:opacity-40 transition-opacity duration-300"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full opacity-20 animate-pulse delay-1000 hover:opacity-40 transition-opacity duration-300"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full opacity-20 animate-pulse delay-500 hover:opacity-40 transition-opacity duration-300"></div>
      </section>

      {/* Projects Section - Pass images as props */}
      <WonProjects images={{ widow, orphans, community, education }} />

      {/* About Section */}
      <AboutWon />

      {/* Contact Overlay */}
      <ContactOverlay isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};

export default WonHome;