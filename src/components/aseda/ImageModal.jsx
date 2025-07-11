import React from "react";
import { 
  Heart,
  Share2,
  Download,
  X
} from 'lucide-react';


 const ImageModal = ({ selectedImage, onClose }) => {
    if (!selectedImage) return null;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div className="relative max-w-4xl max-h-[90vh] w-full">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
          >
            <X className="w-6 h-6 text-gray-800" />
          </button>
          
          <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={selectedImage.image}
              alt={`${selectedImage.section} ${selectedImage.index + 1}`}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 capitalize">
                    {selectedImage.section} {selectedImage.index + 1}
                  </h3>
                  <p className="text-gray-600">
                    {currentEvent.event} - {selectedYear}
                  </p>
                </div>
                
                <div className="flex space-x-2">
                  <button className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300">
                    <Download className="w-5 h-5" />
                  </button>
                  <button className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
export default ImageModal;