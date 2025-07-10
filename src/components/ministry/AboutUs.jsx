import React, { useState } from "react";
import { Users, Heart, BookOpen, ChevronDown, ChevronUp, Target, Eye, Sparkles } from 'lucide-react';

const AboutUs = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-teal-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-700 via-blue-700 to-purple-700 bg-clip-text text-transparent mb-4">
            About Us
          </h2>
          <div className="text-lg text-gray-600 max-w-4xl mx-auto">
            <p className="mb-4">
              <span className="font-semibold text-teal-700">"The Gospel on Display"</span>
            </p>
            <p className="text-base">
              Kwaku Duah Ministry is an organization dedicated to helping local Churches of Christ understand their mission through the Great Commission.
            </p>
            <button 
              onClick={() => toggleSection('profile')}
              className="mt-4 flex items-center justify-center mx-auto text-teal-600 hover:text-teal-700 transition-colors"
            >
              <span className="mr-2">Learn More About Our Profile</span>
              {expandedSection === 'profile' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            {expandedSection === 'profile' && (
              <div className="mt-6 p-6 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-teal-100 text-left">
                <p className="text-gray-700 leading-relaxed">
                  This mission, set forth in the Great Commission, though never fully understood, may be defined as having an inner and an outer direction whereby the inner mission of the church is to nurture its members, seeking ever to bring them more and more to the stature of maturity in Christ, and the outer mission of the church is to be related, as God's instrument, to the problems and the needs of the world.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  These two major functions of the church can be achieved to the extent that we must be under-girded with stewardship of time, talent, and material resources. Every congregation is a basic unit of the church at work in the world. Therefore Servants of the Lord must be alert to the needs and the opportunities about them. We must make our ministry relevant to the changing times and should always be creative in communicating the Word and the love of God.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-teal-100">
            <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600 mb-4">
              To partner with various churches of Christ in Ghana so we can fulfill the Great Commission...
            </p>
            <button 
              onClick={() => toggleSection('mission')}
              className="flex items-center text-teal-600 hover:text-teal-700 transition-colors"
            >
              <span className="mr-2">Read Full Mission</span>
              {expandedSection === 'mission' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {expandedSection === 'mission' && (
              <div className="mt-4 p-4 bg-teal-50 rounded-lg border border-teal-100">
                <p className="text-gray-700 text-sm">
                  To partner with various churches of Christ in Ghana so we can fulfill the Great Commission by supporting them through events, resources, and programs designed to equip and train Christians effectively and develop the spiritual strength needed for the Lord's work.
                </p>
              </div>
            )}
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-teal-100">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600 mb-4">
              To help various churches of Christ understand the inner and outer mission of the Church...
            </p>
            <button 
              onClick={() => toggleSection('vision')}
              className="flex items-center text-teal-600 hover:text-teal-700 transition-colors"
            >
              <span className="mr-2">Read Full Vision</span>
              {expandedSection === 'vision' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {expandedSection === 'vision' && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <p className="text-gray-700 text-sm">
                  To help various churches of Christ understand the inner and outer mission of the Church through various programs and activities.
                </p>
              </div>
            )}
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-teal-100">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Core Values</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">Hope</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">Faith</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span className="text-gray-700 font-medium">Charity</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-teal-100">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">What We Do</h3>
            <p className="text-gray-600">
              KDUAH Ministry hosts a series of projects under a common umbrella, each designed to fulfill the Great Commission.
            </p>
          </div>
          
          <button 
            onClick={() => toggleSection('projects')}
            className="w-full flex items-center justify-center text-teal-600 hover:text-teal-700 transition-colors mb-4"
          >
            <span className="mr-2">View Our Projects & Activities</span>
            {expandedSection === 'projects' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
          
          {expandedSection === 'projects' && (
            <div className="p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border border-teal-100">
              <p className="text-gray-700 leading-relaxed mb-4">
                Each project's vision and mission is fueled by praises to God for how far He has blessed us and His continual countenance on us. As such, the main aim of KDUAH MINISTRY is to give back to the Church and society at large so we can fulfill the Great Commission.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-4 rounded-lg shadow-sm border border-teal-100">
                  <h4 className="font-semibold text-teal-700 mb-2">Evangelism Projects</h4>
                  <p className="text-sm text-gray-600">Spreading the Gospel and reaching the lost</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-100">
                  <h4 className="font-semibold text-blue-700 mb-2">Benevolence Projects</h4>
                  <p className="text-sm text-gray-600">Caring for those in need and serving others</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-100">
                  <h4 className="font-semibold text-purple-700 mb-2">Edification Projects</h4>
                  <p className="text-sm text-gray-600">Building up and strengthening the faithful</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;