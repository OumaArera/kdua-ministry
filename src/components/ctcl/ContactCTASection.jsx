import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';

const ContactCTASection = ({ onContactClick }) => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Transform Your Leadership?
        </h2>
        <p className="text-xl mb-8 text-white/90">
          Join us in developing leaders who will make a lasting impact in God's Kingdom
        </p>
        <button 
          onClick={onContactClick}
          className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <Phone className="w-5 h-5" />
          <span>Get Started Today</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default ContactCTASection;