import React from "react";
import { ArrowRight } from 'lucide-react';
import { projects } from "../../data/projects";


const WonProjects = () => (
  <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-clip-text text-transparent mb-6">
          Our Projects
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our ongoing initiatives that are making a real difference in the lives of widows, orphans, and needy families
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto mt-8"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id}
            className={`bg-gradient-to-br ${project.bgGradient} backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer group`}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white`}>
                {project.status}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-700 transition-colors duration-300">
              {project.title}
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex items-center justify-between">
              <button className={`inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`w-10 h-10 bg-gradient-to-br ${project.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WonProjects;