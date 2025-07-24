import React from 'react';
import { Church, Users, Gift, Heart, Compass, Target, Sunrise, Cross, HelpingHand } from 'lucide-react';
import logo from '../../assets/logo.png';

const AboutSection = () => {
  return (
    <section className="py-16 md:py-20 px-4 relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About KDuah Ministry
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl font-semibold text-teal-300 mb-8">
            "The Gospel on Display"
          </p>
        </div>

        {/* Main Description */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 mb-12 border border-white/20">
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
            KDuah Ministry is an organization that has the preliminary plan to help local Churches of Christ to understand the mission of the church. This mission, set forth in the Great Commission, though never fully understood, may be defined as having an inner and an outer direction whereby the inner mission of the church is to nurture its members, seeking ever to bring them more and more to the stature of maturity in Christ, and the outer mission of the church is to be related, as God's instrument, to the problems and the needs of the world.
          </p>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
            These two major functions of the church can be achieved to the extent that we must be under-girded with stewardship of time, talent, and material resources. Every congregation is a basic unit of the church at work in the world. Therefore Servants of the Lord must be alert to the needs and the opportunities about them.
          </p>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            We must make our ministry relevant to the changing times and should always be creative in communicating the Word and the love of God. This is exactly what KDuah Ministry stands to do.
          </p>
        </div>

        {/* Mission & Vision + Core Values */}
        <div className="grid grid-cols-1 gap-10 mb-12">
          {/* Row 1: Mission & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Mission */}
            <div className="text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                <Target className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 group-hover:text-teal-300 transition-colors duration-300">
                Mission
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                To partner with various churches of Christ in Ghana so we can fulfill the Great Commission by supporting them through events, resources, and programs designed to equip and train Christians effectively and develop the spiritual strength needed for the Lord's work.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center group">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
                <Compass className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 group-hover:text-blue-300 transition-colors duration-300">
                Vision
              </h3>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                To help various churches of Christ to understand the inner and outer mission of the Church through various programs and activities.
              </p>
            </div>
          </div>

          {/* Row 2: Core Values */}
          <div className="text-center group">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl">
              <Heart className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4 group-hover:text-purple-300 transition-colors duration-300">
              Core Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {/* Hope */}
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                <Sunrise className="w-12 h-12 text-teal-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">Hope</h4>
                <p className="text-gray-300 text-sm">
                  Our ability to do God’s will even when it is hard because we know we will be rewarded for doing so.
                </p>
              </div>

              {/* Faith */}
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                <Cross className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">Faith</h4>
                <p className="text-gray-300 text-sm">
                  Our intimacy between God and humanity is expressed through faith and authentic faith requires action.
                </p>
              </div>

              {/* Charity */}
              <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                <HelpingHand className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                <h4 className="text-lg font-semibold text-white mb-2">Charity</h4>
                <p className="text-gray-300 text-sm">
                  Our virtue that allows us to fulfill the two greatest commandments revealed by Jesus.
                </p>
              </div>
            </div>
          </div>
        </div>


        {/* What We Do */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 md:p-8 mb-12 border border-white/20">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            What We Do
          </h3>
          <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-6">
            KDuah Ministry hosts a series of projects under a common umbrella. Each project's vision and mission is fueled by praises to God for how far He has blessed us and His continual countenance on us. As such, the main aim of KDUAH MINISTRY is to give back to the Church and society at large so we can fulfill the Great Commission.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
              <Church className="w-12 h-12 text-teal-400 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Evangelism</h4>
              <p className="text-gray-300 text-sm">Spreading the Gospel message</p>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Benevolence</h4>
              <p className="text-gray-300 text-sm">Serving those in need</p>
            </div>
            
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
              <Gift className="w-12 h-12 text-purple-400 mx-auto mb-3" />
              <h4 className="text-lg font-semibold text-white mb-2">Edification</h4>
              <p className="text-gray-300 text-sm">Building up the faithful</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;