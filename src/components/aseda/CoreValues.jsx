import React from "react";
import { Users,  Heart, Star, Trophy } from 'lucide-react';

  const CoreValues = () => {
    const values = [
      {
        icon: <Trophy className="w-8 h-8" />,
        title: "Recognition",
        description: "The law of positive reinforcement states that behavior that is rewarded will be repeated.",
        color: "from-yellow-500 to-orange-500"
      },
      {
        icon: <Star className="w-8 h-8" />,
        title: "Inspire",
        description: "Each one of us can make a big difference for a better transformational future.",
        color: "from-purple-500 to-pink-500"
      },
      {
        icon: <Users className="w-8 h-8" />,
        title: "Collaboration",
        description: "Working jointly with others or together especially in the musical concept endeavor.",
        color: "from-blue-500 to-teal-500"
      },
      {
        icon: <Heart className="w-8 h-8" />,
        title: "Gratitude",
        description: "Embracing an ownership of gratitude by showing appreciation.",
        color: "from-green-500 to-emerald-500"
      }
    ];

    return (
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-700 via-pink-700 to-orange-700 bg-clip-text text-transparent mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The foundational principles that guide our mission to transform lives through music and recognition
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

export default CoreValues;