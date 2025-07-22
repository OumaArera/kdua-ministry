import React from "react";
import { Phone, Mail, X, MapPin, Clock } from 'lucide-react';

const ContactOverlay = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl transform animate-in slide-in-from-bottom-4 duration-500">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-teal-700 bg-clip-text text-transparent">
            Contact Us
          </h3>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Call us</p>
              <p className="font-semibold text-gray-800">+233 24 909 9740</p>
              <p className="font-semibold text-gray-800">+233 54 095 7766</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Email us</p>
              <p className="font-semibold text-gray-800">wonfoundation@kduahministry.org</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Visit us</p>
              <p className="font-semibold text-gray-800">H/N 33, Tower School</p>
              <p className="font-semibold text-gray-800">GS-0047-3214</p>
              <p className="font-semibold text-gray-800">Accra Ghana</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Office hours</p>
              <p className="font-semibold text-gray-800">Mon-Fri: 8AM-5PM</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 mb-4">We'd love to hear from you!</p>
          <button 
            onClick={onClose}
            className="w-full bg-gradient-to-r from-purple-500 to-teal-500 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactOverlay;