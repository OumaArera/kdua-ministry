import React from 'react';
import { BookOpen, Users, Target, User } from 'lucide-react';
import creative from '../../assets/coaching.jpg';
import technology from '../../assets/consulting.jpg';
import ignite from '../../assets/training.jpg';
import coaching from '../../assets/ctcl/coaching.jpeg';
import training from '../../assets/ctcl/training.jpeg';


const ServicesSection = () => {
  const services = [
    {
      title: "Consulting",
      icon: Target,
      description: "Expert guidance on best practices in church leadership, governance, and administration for effective ministry.",
      image: technology
    },
    {
      title: "Coaching",
      icon: User,
      description: "Personalized mentorship to help leaders navigate challenges. One-on-one mentoring to enhance skills and confidence.",
      image: coaching
    },
    {
      title: "Training",
      icon: BookOpen,
      description: "Workshops, seminars, and conferences on council leadership, strategic planning, budgeting, and event planning.",
      image: training
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 bg-clip-text text-transparent mb-4">
            What We Do
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive leadership development through consulting, coaching, and training programs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;