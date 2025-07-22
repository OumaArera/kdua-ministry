import React from "react";
import { Phone } from "lucide-react";

  const ContactOverlay = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-black/70 bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Get In Touch</h3>
            <p className="text-gray-600">Ready to be part of our musical legacy?</p>
          </div>
          
          <div className="space-y-4">
            <div className="text-center">
              <p className="text-gray-700 font-semibold">Contact Information</p>
              <p className="text-gray-600 mt-2">Email: asedamusic@kduahministry.org</p>
              <p className="text-gray-600">Phone: +233 24 909 9740</p>
              <p className="text-gray-600">Phone: +233 50 391 0688</p>
              <div>
                <p className="text-sm text-gray-500">Visit us</p>
                <p className="font-semibold text-gray-800">H/N 33, Tower School</p>
                <p className="font-semibold text-gray-800">GS-0047-3214</p>
                <p className="font-semibold text-gray-800">Accra Ghana</p>
              </div>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

export default ContactOverlay;