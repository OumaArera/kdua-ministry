import React, { useState, useEffect } from 'react';
import { ArrowRight, Heart, Users, Phone } from 'lucide-react';
import ContactOverlay from './ContactOverlay';
import WonProjects from './WonProjects';
import AboutWon from './AboutWon';
import RollingLeaders from './RollingLeaders';
import logo from '../../assets/won_logo.png';
// WON project images
import widow from '../../assets/won/wd5.jpg';
import orphans from '../../assets/won/or9.jpg';
import community from '../../assets/won/cm3.jpg';
import education from '../../assets/won/edu3.jpg';
// Data to display
import orphan1 from '../../assets/won/or1.jpg';
import orphan2 from '../../assets/won/or6.jpg';
import orphan3 from '../../assets/won/or14.jpeg';
import orphan4 from '../../assets/won/or23.jpeg';
import orphan5 from '../../assets/won/or26.jpeg';
import widow1 from '../../assets/won/wd1.jpg';
import widow2 from '../../assets/won/wd4.jpg';
import widow3 from '../../assets/won/wd6.jpeg';
import widow4 from '../../assets/won/edu1.jpg';

const WonHome = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mock logo and images - replace with actual imports
  // const logo = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='45' fill='%23663399'/%3E%3Ctext x='50' y='58' text-anchor='middle' fill='white' font-size='20' font-weight='bold'%3EWON%3C/text%3E%3C/svg%3E";
  
  // Sliding images arrays
  const orphanImages = [
    orphan1,
    orphan2,
    orphan3,
    orphan4,
    orphan5
  ];

  const widowImages = [
    widow1,
    widow2,
    widow3,
    widow4
  ];

  // Project images for the projects section
  const projectImages = {
    widow: widow,
    orphans: orphans,
    community: community,
    education: education
  };

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
        
        {/* Background sliding images with opacity */}
        <div className="absolute top-20 right-0 opacity-10">
          <img 
            src={orphanImages[0]} 
            alt="Background" 
            className="w-32 h-24 object-cover rounded-lg animate-pulse"
          />
        </div>
        <div className="absolute bottom-40 left-20 opacity-15">
          <img 
            src={widowImages[0]} 
            alt="Background" 
            className="w-40 h-28 object-cover rounded-lg animate-pulse delay-500"
          />
        </div>
      </div>

      {/* Sliding Images Container */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        {/* First sliding row - Orphan images */}
        <div className="absolute top-1/4 w-full animate-slide-right-to-left">
          <div className="flex space-x-8 opacity-30">
            {[...orphanImages, ...orphanImages].map((src, index) => (
              <div key={`orphan-${index}`} className="flex-shrink-0">
                <img 
                  src={src} 
                  alt={`Orphan ${index + 1}`}
                  className="w-48 h-32 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Second sliding row - Widow images (slower, different direction) */}
        <div className="absolute top-2/3 w-full animate-slide-left-to-right">
          <div className="flex space-x-8 opacity-25">
            {[...widowImages, ...widowImages, ...widowImages].map((src, index) => (
              <div key={`widow-${index}`} className="flex-shrink-0">
                <img 
                  src={src} 
                  alt={`Widow ${index + 1}`}
                  className="w-40 h-28 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Third sliding row - Mixed images (top area) */}
        <div className="absolute top-12 w-full animate-slide-right-to-left-slow">
          <div className="flex space-x-12 opacity-20">
            {[...orphanImages.slice(0, 3), ...widowImages.slice(0, 2), ...orphanImages.slice(3)].map((src, index) => (
              <div key={`mixed-${index}`} className="flex-shrink-0">
                <img 
                  src={src} 
                  alt={`Mixed ${index + 1}`}
                  className="w-36 h-24 object-cover rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <section className="pt-24 pb-20 px-4 relative z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-teal-600/10"></div>
        <div className="max-w-6xl mx-auto text-center relative z-20 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
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

      {/* Projects Section with enhanced background */}
      <div className="relative z-10 bg-white/90 backdrop-blur-sm">
        <WonProjects images={projectImages} />
      </div>

      <div className="relative z-10 bg-white/90 backdrop-blur-sm">
        <RollingLeaders />
      </div>

      {/* About Section with enhanced background */}
      <div className="relative z-10 bg-gray-50/90 backdrop-blur-sm">
        <AboutWon />
      </div>

      {/* Contact Overlay */}
      <ContactOverlay isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      <style jsx>{`
        @keyframes slide-right-to-left {
          0% {
            transform: translateX(100vw);
          }
          100% {
            transform: translateX(-200%);
          }
        }

        @keyframes slide-left-to-right {
          0% {
            transform: translateX(-200%);
          }
          100% {
            transform: translateX(100vw);
          }
        }

        @keyframes slide-right-to-left-slow {
          0% {
            transform: translateX(100vw);
          }
          100% {
            transform: translateX(-200%);
          }
        }

        .animate-slide-right-to-left {
          animation: slide-right-to-left 25s linear infinite;
        }

        .animate-slide-left-to-right {
          animation: slide-left-to-right 30s linear infinite;
        }

        .animate-slide-right-to-left-slow {
          animation: slide-right-to-left-slow 35s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default WonHome;