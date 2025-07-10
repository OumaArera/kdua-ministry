import React from "react";
import { Heart, Users } from "lucide-react";

const AboutWon = () => (
  <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-700 via-blue-700 to-teal-700 bg-clip-text text-transparent mb-6">
          About WON Foundation
        </h2>
        <p className="text-xl text-blue-600 font-semibold italic mb-6">"Smile of a needy, our concern"</p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto mb-8"></div>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Mission and Vision Cards */}
        <div className="space-y-6">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <Heart className="w-12 h-12 text-rose-500 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To put smiles on the faces of Widows, Orphans and the disadvantaged through educational, emotional and financial support.
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
            <Users className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be the 1st point of call in mobilising funds for the eradication of poverty and improving the lives of Widows, Orphans and Needy but brilliant children, in Ghana and beyond.
            </p>
          </div>
        </div>

        {/* Established + Core Values */}
        <div className="bg-gradient-to-br from-purple-500/10 to-teal-500/10 rounded-3xl p-8 backdrop-blur-sm border border-white/20 shadow-xl">
          <div className="text-center space-y-8">
            <div className="text-6xl mb-4">🌟</div>
            <h3 className="text-3xl font-bold text-gray-800">Established 2015</h3>
            <p className="text-lg text-gray-600">
              WON is an NGO based in Ghana, addressing the vulnerabilities of widows, orphans, and the needy through comprehensive support programs.
            </p>

            {/* Core Values */}
            <div className="bg-white/40 rounded-xl px-6 py-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Core Values</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xl font-bold text-purple-600">Benevolence</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-blue-600">Insight</div>
                </div>
                <div>
                  <div className="text-xl font-bold text-teal-600">Care</div>
                </div>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Widows and orphans are the most vulnerable in our society. WON Foundation is poised to address these vulnerabilities with available structures, programs and funds to make positive change a reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutWon;
