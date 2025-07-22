import React, { useState, useEffect } from 'react';
import { Users, Calendar, ChevronRight, Star, Globe, Church } from 'lucide-react';

import prayer from '../../assets/ministry/prayer.jpeg';
import bible from '../../assets/ministry/bible.jpg';
import atTheCross from '../../assets/ministry/at_the_cross.jpeg';
import lastSupper from '../../assets/ministry/last_supper.jpg';
// Subsidiaries
import aseda_logo from '../../assets/aseda_logo11.png';
import won_logo from '../../assets/won_logo.jpeg';
import ctcl_logo from '../../assets/CTCL.png';


const HeroSection = ({ handleNavigation }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const heroImages = [prayer, bible, atTheCross, lastSupper, aseda_logo, won_logo, ctcl_logo];
  const logoIndices = [4, 5, 6]; // Indices for the logos in the heroImages array

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Check if current image is a logo
  const isCurrentImageLogo = logoIndices.includes(currentImageIndex);

  return (
    <section className="relative pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Hero Content */}
          <div className={`text-left transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 px-4 py-2 rounded-full border border-teal-400/30 backdrop-blur-sm mb-6">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-teal-200 font-medium text-sm md:text-base">The Gospel on Display</span>
              <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full animate-pulse"></div>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-teal-200 to-blue-200 bg-clip-text text-transparent">
                Welcome to
              </span>
              <br />
              <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                KDuah Ministry
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              Transforming lives through the power of God's Word and building a community of believers committed to the Great Commission.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={() => handleNavigation('kduah-ministry/about')}
                className="group bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold flex items-center justify-center hover:from-teal-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
              >
                <span>Learn About Us</span>
                <Users className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => handleNavigation('/kduah-ministry/events')}
                className="group bg-white/10 backdrop-blur-sm text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20 text-sm md:text-base"
              >
                <Calendar className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                <span>Upcoming Events</span>
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-6 space-y-2 sm:space-y-0 text-gray-400 text-sm md:text-base">
              <div className="flex items-center space-x-2">
                <Church className="w-4 h-4 md:w-5 md:h-5" />
                <span>Churches of Christ</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 md:w-5 md:h-5" />
                <span>Ghana</span>
              </div>
            </div>
          </div>

          {/* Hero Images Carousel */}
          <div className="relative order-first lg:order-last">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 z-10"></div>
              <img 
                src={heroImages[currentImageIndex]}
                alt="Ministry"
                className={`w-full h-full transition-all duration-1000 ${
                  isCurrentImageLogo 
                    ? 'object-contain bg-white/90' 
                    : 'object-cover'
                }`}
              />
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 z-20">
                <div className="bg-black/50 backdrop-blur-sm rounded-xl p-3 md:p-4 text-white">
                  <h3 className="font-semibold text-base md:text-lg mb-1">
                    {isCurrentImageLogo ? 'Our Ministry Partners' : 'Building Faith Communities'}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-300">
                    {isCurrentImageLogo 
                      ? 'Expanding our reach through collaborative partnerships' 
                      : 'Nurturing spiritual growth through worship and fellowship'}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Image indicators */}
            <div className="flex justify-center mt-4 space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-teal-400 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;