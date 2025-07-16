import React from 'react';
import travel from '../../assets/ctcl/travel.jpg';

const AboutSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent mb-4">
            About CTCL
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={travel} 
              alt="Our Journey" 
              className="w-full h-80 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20"></div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Purpose</h3>
              <p className="text-gray-700 leading-relaxed">
                CTCL equips church leaders and preachers with the skills, knowledge, and spiritual growth necessary to effectively fulfill their roles. Our comprehensive training includes spiritual development, leadership competencies, pastoral care, administrative skills, and church growth strategies.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Leadership</h3>
              <p className="text-gray-700 leading-relaxed">
                Under the guidance of Rtd. Pr. Nixon Kwaku Duah (President), we bring legacy and endowed experience to strengthen church leaders and preachers in the Ahafo Region through well-designed practical training tools customized for each church's unique needs.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Our Commitment</h3>
              <p className="text-gray-700 leading-relaxed">
                We respect the administrative independence of every local congregation. We don't seek to control or interfere but to strengthen unity and support churches through leadership training and developmental programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;