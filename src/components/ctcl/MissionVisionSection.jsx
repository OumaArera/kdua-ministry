import React from 'react';
import { Target, Lightbulb } from 'lucide-react';

const MissionVisionSection = () => {
  return (
    <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-800">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To develop leaders who rightly handle God's work through comprehensive training, spiritual formation, and practical leadership development.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-8 rounded-2xl shadow-lg">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-purple-800">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              To transform leaders for the development of the Lord's Church, creating lasting impact across the Ahafo Region and beyond.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;