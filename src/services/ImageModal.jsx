import React from 'react';
import { X } from 'lucide-react';

const ImageModal = ({ selectedImage, onClose, onOverlayClick }) => (
  <div 
    className="fixed inset-0 bg-black/50 bg-opacity-90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
    onClick={onOverlayClick}
  >
    <div className="relative max-w-4xl max-h-full animate-fade-in">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-200 backdrop-blur-sm"
        aria-label="Close modal"
      >
        <X className="w-6 h-6 text-gray-900" />
      </button>
      
      {/* Large Image */}
      <div className="bg-gradient-to-br from-cyan-400 to-blue-500 p-2 rounded-2xl shadow-2xl">
        <img
          src={selectedImage.src}
          alt={`Event ${selectedImage.index + 1} - Enlarged`}
          className="max-w-full max-h-[80vh] object-contain rounded-xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
      
      {/* Image Info */}
      <div className="absolute bottom-4 left-4 bg-black/50 bg-opacity-50 backdrop-blur-sm text-white px-4 py-2 rounded-lg">
        <p className="text-sm font-semibold">Event {selectedImage.index + 1}</p>
      </div>
    </div>
  </div>
);

export default ImageModal;