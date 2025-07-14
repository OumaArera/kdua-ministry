import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Heart, BookOpen, Play, ChevronRight, Star, Globe, Church, Gift } from 'lucide-react';
import { programs } from '../../data/children';
import prayer from '../../assets/ministry/prayer.jpeg';
import bible from '../../assets/ministry/bible.jpg';
import atTheCross from '../../assets/ministry/at_the_cross.jpeg';
import lastSupper from '../../assets/ministry/last_supper.jpg';
import ContactUs from './Contact';


const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const navigate = useNavigate();

  // Sample images - replace with your actual image imports
  const heroImages = [
    prayer,
    bible,
    atTheCross,
    lastSupper
  ];

  const handleNavigation = (route) => {
    navigate(route)
    // window.location.href = `/${route}`;
  };

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className={`text-left transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 px-4 py-2 rounded-full border border-teal-400/30 backdrop-blur-sm mb-6">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-teal-200 font-medium">The Gospel on Display</span>
                <div className="w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full animate-pulse"></div>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-teal-200 to-blue-200 bg-clip-text text-transparent">
                  Welcome to
                </span>
                <br />
                <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Kduah Ministry
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transforming lives through the power of God's Word and building a community of believers committed to the Great Commission.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button 
                  onClick={() => handleNavigation('kduah-ministry/about')}
                  className="group bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center hover:from-teal-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>Learn About Us</span>
                  <Users className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button 
                  onClick={() => handleNavigation('/kduah-ministry/events')}
                  className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Upcoming Events</span>
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className="flex items-center space-x-6 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Church className="w-5 h-5" />
                  <span>Churches of Christ</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5" />
                  <span>Ghana</span>
                </div>
              </div>
            </div>

            {/* Hero Images Carousel */}
            <div className="relative">
              <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 z-10"></div>
                <img 
                  src={heroImages[currentImageIndex]}
                  alt="Ministry"
                  className="w-full h-full object-cover transition-all duration-1000"
                />
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4 text-white">
                    <h3 className="font-semibold text-lg mb-1">Building Faith Communities</h3>
                    <p className="text-sm text-gray-300">Nurturing spiritual growth through worship and fellowship</p>
                  </div>
                </div>
              </div>
              
              {/* Image indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
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

      {/* Programs Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-teal-200 to-blue-200 bg-clip-text text-transparent">
                Our Programs
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our ministry programs designed to nurture spiritual growth and community connection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div 
                key={program.id}
                className={`group relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden`}
                onClick={() => handleNavigation(program.id)}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Background gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${program.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={program.icon}
                      alt={program.title}
                      className="h-12 md:h-16 w-auto object-contain"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-300 transition-colors duration-300">
                    {program.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-8 leading-relaxed">
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
                      <div className={`w-12 h-12 bg-gradient-to-br ${program.gradient} rounded-full flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-300`}>
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Church className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Churches</h3>
              <p className="text-gray-300">Partnering with local congregations</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Community</h3>
              <p className="text-gray-300">Building stronger faith communities</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Gift className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Mission</h3>
              <p className="text-gray-300">Fulfilling the Great Commission</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Be part of a community dedicated to spreading the Gospel and building stronger churches
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setShowContact(true)}
                className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Involved
              </button>
              <button 
                onClick={() => handleNavigation('kduah-ministry/about')}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      <ContactUs 
        isOpen={showContact} 
        onClose={() => setShowContact(false)} 
      />
    </div>
  );
};

export default Home;