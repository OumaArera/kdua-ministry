import React, { useState, useEffect } from "react";
import { Users, Heart, BookOpen, ChevronDown, ChevronUp, Target, Eye, Sparkles, Globe, Church, ArrowRight, Quote, Star } from 'lucide-react';
import ContactUs from "./Contact";


const AboutUs = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleNavigation = (route) => {
    window.location.href = `/${route}`;
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-100 via-blue-50 to-teal-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className={`text-center mb-20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 px-6 py-3 rounded-full border border-teal-300/30 backdrop-blur-sm mb-6">
              <Quote className="w-5 h-5 text-teal-600" />
              <span className="text-teal-700 font-semibold text-lg">The Gospel on Display</span>
              <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full animate-pulse"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-teal-700 via-blue-700 to-purple-700 bg-clip-text text-transparent">
                About Kduah Ministry
              </span>
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
                Kwaku Duah Ministry is an organization dedicated to helping local Churches of Christ understand their mission through the Great Commission.
              </p>
              
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-teal-100/50">
                <button 
                  onClick={() => toggleSection('profile')}
                  className="group flex items-center justify-center mx-auto text-teal-600 hover:text-teal-700 transition-colors mb-4"
                >
                  <span className="mr-3 text-lg font-semibold">Discover Our Full Profile</span>
                  <div className="p-2 bg-teal-100 rounded-full group-hover:bg-teal-200 transition-colors">
                    {expandedSection === 'profile' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>
                
                {expandedSection === 'profile' && (
                  <div className="mt-8 space-y-6 text-left animate-fadeIn">
                    <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-xl border-l-4 border-teal-500">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        This mission, set forth in the Great Commission, though never fully understood, may be defined as having an inner and an outer direction whereby the inner mission of the church is to nurture its members, seeking ever to bring them more and more to the stature of maturity in Christ, and the outer mission of the church is to be related, as God's instrument, to the problems and the needs of the world.
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-500">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        These two major functions of the church can be achieved to the extent that we must be under-girded with stewardship of time, talent, and material resources. Every congregation is a basic unit of the church at work in the world. Therefore Servants of the Lord must be alert to the needs and the opportunities about them. We must make our ministry relevant to the changing times and should always be creative in communicating the Word and the love of God.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-teal-100/50 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-teal-700 transition-colors">Our Mission</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To partner with various churches of Christ in Ghana so we can fulfill the Great Commission...
              </p>
              
              <button 
                onClick={() => toggleSection('mission')}
                className="group flex items-center text-teal-600 hover:text-teal-700 transition-colors"
              >
                <span className="mr-2 font-semibold">Read Full Mission</span>
                <div className="p-1 bg-teal-100 rounded-full group-hover:bg-teal-200 transition-colors">
                  {expandedSection === 'mission' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>
              
              {expandedSection === 'mission' && (
                <div className="mt-6 p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl border border-teal-100 animate-fadeIn">
                  <p className="text-gray-700 leading-relaxed">
                    To partner with various churches of Christ in Ghana so we can fulfill the Great Commission by supporting them through events, resources, and programs designed to equip and train Christians effectively and develop the spiritual strength needed for the Lord's work.
                  </p>
                </div>
              )}
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-blue-100/50 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-700 transition-colors">Our Vision</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                To help various churches of Christ understand the inner and outer mission of the Church...
              </p>
              
              <button 
                onClick={() => toggleSection('vision')}
                className="group flex items-center text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span className="mr-2 font-semibold">Read Full Vision</span>
                <div className="p-1 bg-blue-100 rounded-full group-hover:bg-blue-200 transition-colors">
                  {expandedSection === 'vision' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>
              
              {expandedSection === 'vision' && (
                <div className="mt-6 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100 animate-fadeIn">
                  <p className="text-gray-700 leading-relaxed">
                    To help various churches of Christ understand the inner and outer mission of the Church through various programs and activities.
                  </p>
                </div>
              )}
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-purple-100/50 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-700 transition-colors">Core Values</h3>
              <div className="space-y-4">
                <div className="flex items-center group/item">
                  <div className="w-4 h-4 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mr-4 group-hover/item:scale-125 transition-transform"></div>
                  <span className="text-gray-700 font-semibold text-lg group-hover/item:text-teal-700 transition-colors">Hope</span>
                </div>
                <div className="flex items-center group/item">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-4 group-hover/item:scale-125 transition-transform"></div>
                  <span className="text-gray-700 font-semibold text-lg group-hover/item:text-blue-700 transition-colors">Faith</span>
                </div>
                <div className="flex items-center group/item">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full mr-4 group-hover/item:scale-125 transition-transform"></div>
                  <span className="text-gray-700 font-semibold text-lg group-hover/item:text-purple-700 transition-colors">Charity</span>
                </div>
              </div>
            </div>
          </div>

          {/* What We Do Section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-teal-100/50 mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-teal-700 via-blue-700 to-purple-700 bg-clip-text text-transparent">
                  What We Do
                </span>
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                KDUAH Ministry hosts a series of projects under a common umbrella, each designed to fulfill the Great Commission.
              </p>
            </div>
            
            <div className="text-center mb-8">
              <button 
                onClick={() => toggleSection('projects')}
                className="group bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span className="mr-3">Explore Our Projects & Activities</span>
                <div className="inline-flex items-center">
                  {expandedSection === 'projects' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </div>
              </button>
            </div>
            
            {expandedSection === 'projects' && (
              <div className="animate-fadeIn">
                <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-8 rounded-2xl border border-teal-100 mb-8">
                  <p className="text-gray-700 leading-relaxed text-lg text-center">
                    Each project's vision and mission is fueled by praises to God for how far He has blessed us and His continual countenance on us. As such, the main aim of KDUAH MINISTRY is to give back to the Church and society at large so we can fulfill the Great Commission.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="group bg-white rounded-2xl p-8 shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Globe className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-teal-700 mb-4">Evangelism Projects</h4>
                    <p className="text-gray-600 leading-relaxed">Spreading the Gospel and reaching the lost through various outreach programs and community engagement initiatives.</p>
                  </div>
                  
                  <div className="group bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-blue-700 mb-4">Benevolence Projects</h4>
                    <p className="text-gray-600 leading-relaxed">Caring for those in need and serving others through acts of kindness and community support programs.</p>
                  </div>
                  
                  <div className="group bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-purple-700 mb-4">Edification Projects</h4>
                    <p className="text-gray-600 leading-relaxed">Building up and strengthening the faithful through education, training, and spiritual development programs.</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-3xl p-12 shadow-2xl text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Learn More?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Join us in our mission to transform lives and build stronger communities of faith
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => handleNavigation('kduah-ministry/our-team')}
                  className="bg-white text-teal-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Meet Our Team
                </button>
                <button 
                  onClick={() => setShowContact(true)}
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105 border border-white/20"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
        <ContactUs 
          isOpen={showContact} 
          onClose={() => setShowContact(false)} 
        />
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;