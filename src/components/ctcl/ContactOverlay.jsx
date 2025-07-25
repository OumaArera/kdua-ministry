import React from "react";
import { Phone, Mail, MapPin } from 'lucide-react';


const ContactOverlay = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact CTCL</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">+233 24 909 9740</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">+233 54 228 1546</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">info.ctcl@kduahministries.org</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">BU-0055-7727</span>
              <span className="text-gray-700">Ahafo Goaso, Ghana</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

export default ContactOverlay;