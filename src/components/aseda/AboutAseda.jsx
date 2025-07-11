import React from "react";
import { Award, Music, Mic } from "lucide-react";


const AboutAseda = () => {
    return (
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-700 via-pink-700 to-orange-700 bg-clip-text text-transparent mb-8">
                About Aseda Musical Concept
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
                  <h3 className="text-2xl font-bold text-purple-800 mb-4 flex items-center">
                    <Music className="w-6 h-6 mr-3" />
                    Who We Are
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Aseda Musical Concept and Recognition Awards is an NGO established in 2023 to provide a periodic manifestation of God's blessings through music and awarding dedicated servants in the Lord's church for their massive contribution towards the development and growth of the Church in the three main pillars of Christianity: Evangelism, Benevolence, and Edification.
                  </p>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-pink-100">
                  <h3 className="text-2xl font-bold text-pink-800 mb-4 flex items-center">
                    <Award className="w-6 h-6 mr-3" />
                    What We Do
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    We collaborate with organizations that are willing to fulfill the Great Commission by supporting musical events, resources, and programs designed to equip and award our generation to see the need to effectively devote their self, time and resources for the growth and development of the Lord's Church in any capacity.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 rounded-3xl p-8 text-white shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-white/20 bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mic className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Our Slogan</h3>
                  <p className="text-xl font-semibold opacity-90">Generational Legacy. Transformational Future.</p>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white/20 bg-opacity-10 rounded-xl p-4 backdrop-blur-sm">
                    <h4 className="font-bold text-lg mb-2">Mission</h4>
                    <p className="opacity-90">To create the most compelling entertaining and recognition awards in our generation.</p>
                  </div>
                  
                  <div className="bg-white/20 bg-opacity-10 rounded-xl p-4 backdrop-blur-sm">
                    <h4 className="font-bold text-lg mb-2">Vision</h4>
                    <p className="opacity-90">Transparently delivering the Gospel through music and present day storytelling with recognition.</p>
                  </div>
                </div>
              </div>
              
              {/* Floating music notes */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-400 rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-400 rounded-full opacity-60 animate-bounce delay-1000"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-orange-400 rounded-full opacity-60 animate-bounce delay-500"></div>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default AboutAseda;