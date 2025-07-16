import React from 'react';
import { Heart, Shield, Award, Users } from 'lucide-react';

const CoreValuesSection = () => {
  const coreValues = [
    {
      title: "Spiritual Growth",
      icon: Heart,
      description: "Prioritizing spiritual growth and development in leaders.",
      color: "from-blue-500 to-purple-500"
    },
    {
      title: "Integrity",
      icon: Shield,
      description: "Upholding high standards of integrity and ethics in leadership.",
      color: "from-green-500 to-blue-500"
    },
    {
      title: "Accountability",
      icon: Award,
      description: "Promoting accountability and transparency in church leadership.",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Collaboration",
      icon: Users,
      description: "Encouraging collaboration and teamwork among church leaders.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            The principles that guide our approach to leadership development and ministry training
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;