import React from 'react';
import { Users, Heart, HandHeart, TrendingUp, Shield, Building } from 'lucide-react';

const WhatWeStandForSection = () => {
  const standForItems = [
    {
      icon: Users,
      title: "Leadership Development",
      description: "Training, coaching, and mentoring programs to enhance leadership skills and competencies.",
      color: "from-blue-100 to-purple-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Heart,
      title: "Spiritual Formation",
      description: "Fostering spiritual growth, discipleship, and character development among leaders.",
      color: "from-purple-100 to-indigo-100",
      iconColor: "text-purple-600"
    },
    {
      icon: HandHeart,
      title: "Community Engagement",
      description: "Encouraging leaders to address social, economic, and spiritual needs in their communities.",
      color: "from-indigo-100 to-blue-100",
      iconColor: "text-indigo-600"
    },
    {
      icon: TrendingUp,
      title: "Church Growth",
      description: "Supporting church development through strategic planning and innovative ministry initiatives.",
      color: "from-green-100 to-blue-100",
      iconColor: "text-green-600"
    },
    {
      icon: Shield,
      title: "Accountability",
      description: "Enhancing financial management skills for effective church administration.",
      color: "from-orange-100 to-red-100",
      iconColor: "text-orange-600"
    },
    {
      icon: Building,
      title: "Strong Administration",
      description: "Fostering healthy administration practices that support effective ministry.",
      color: "from-red-100 to-pink-100",
      iconColor: "text-red-600"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent mb-4">
            What We Stand For
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {standForItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className={`bg-gradient-to-r ${item.color} p-6 rounded-xl shadow-lg`}>
                <div className="flex items-center space-x-3 mb-4">
                  <Icon className={`w-8 h-8 ${item.iconColor}`} />
                  <h3 className={`text-lg font-bold ${item.iconColor.replace('text-', 'text-').replace('-600', '-800')}`}>{item.title}</h3>
                </div>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeStandForSection;