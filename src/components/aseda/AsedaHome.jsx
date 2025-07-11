import React, { useState } from 'react';
import { ArrowRight, Music, Award, Users, Phone, Heart } from 'lucide-react';
import ContactOverlay from './ContactOverlay';
import CoreValues from './CoreValues';
import AboutAseda from './AboutAseda';
import logo from '../../assets/aseda_logo.png';
import home from '../../assets/aseda/speaker7.jpg';
import home1 from '../../assets/aseda/sing4.jpg';
import home2 from '../../assets/aseda/sing1.jpg';

const AsedaHome = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleTeamNavigation = () => {
    // Replace with your routing logic
    window.location.href = '/aseda/team';
  };

  const handleEventsNavigation = () => {
    // Replace with your routing logic
    window.location.href = '/aseda/events';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50">
      {/* Hero Section with Background Image */}
      <section className="pt-24 pb-20 px-4 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={home} 
            alt="Musical Performance" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/15 to-orange-600/20"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="text-6xl md:text-7xl mb-6 animate-bounce flex justify-center">
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center bg-white/90 backdrop-blur-sm shadow-lg">
                <img 
                  src={logo}
                  alt="Aseda Musical Concept Logo"
                  className="h-16 md:h-24 w-auto object-contain"
                />
              </div>
            </div>
            <div className="h-48 md:h-56 lg:h-64"></div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-100 to-pink-100 px-8 py-4 rounded-full border border-purple-200 backdrop-blur-sm">
              <Heart className="w-5 h-5 text-purple-600" />
              <span className="text-purple-700 font-semibold">Generational Legacy. Transformational Future.</span>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleEventsNavigation}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Award className="w-5 h-5" />
              <span>Our Events</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button 
              onClick={handleTeamNavigation}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-orange-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Users className="w-5 h-5" />
              <span>Meet Our Team</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              <span>Contact Us</span>
            </button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20 animate-pulse delay-500"></div>
      </section>

      {/* Music Gallery Section */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-700 via-pink-700 to-orange-700 bg-clip-text text-transparent mb-4">
              Musical Excellence in Action
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Experience the power of music as we celebrate and recognize God's servants through our events and performances
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side - Image */}
            <div className="relative group">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={home1} 
                  alt="Musical Performance" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-2">
                    <Music className="w-5 h-5" />
                    <span className="font-semibold">Live Performance</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Content */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border border-purple-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <Music className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-800">Musical Ministry</h3>
                </div>
                <p className="text-gray-700">
                  Our musical performances inspire, uplift, and bring communities together in celebration of faith and service.
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-pink-100 to-orange-100 p-6 rounded-xl border border-pink-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-pink-800">Recognition Awards</h3>
                </div>
                <p className="text-gray-700">
                  Honoring those who serve with excellence and dedication, building a legacy for future generations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Showcase */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-700 via-pink-700 to-orange-700 bg-clip-text text-transparent mb-4">
              Celebrating Through Music
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Every performance is a celebration of God's goodness and an opportunity to recognize His faithful servants
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side - Content */}
            <div className="space-y-6 order-2 md:order-1">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-orange-800">Generational Impact</h3>
                </div>
                <p className="text-gray-700">
                  Creating lasting memories and building bridges between generations through the universal language of music.
                </p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-white/50">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-800">Community Building</h3>
                </div>
                <p className="text-gray-700">
                  Bringing people together in unity, celebrating achievements, and fostering connections that last a lifetime.
                </p>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="relative group order-1 md:order-2">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={home2} 
                  alt="Musical Celebration" 
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5" />
                    <span className="font-semibold">Recognition Event</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutAseda />

      {/* Core Values Section */}
      <CoreValues />

      {/* Contact Overlay */}
      <ContactOverlay isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
};

export default AsedaHome;