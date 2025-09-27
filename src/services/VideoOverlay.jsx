import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const VideoOverlay = ({ 
  isOpen, 
  onClose, 
  videoSrc, 
  autoPlay = true, 
  showCloseButton = true,
  closeOnVideoEnd = false 
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isOpen && videoRef.current && autoPlay) {
      videoRef.current.play().catch(console.error);
    }
  }, [isOpen, autoPlay]);

  const handleVideoEnd = () => {
    if (closeOnVideoEnd) {
      onClose();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/50 bg-opacity-90 flex items-center justify-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="relative max-w-4xl max-h-full p-4">
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute top-2 right-2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
          >
            <X className="w-6 h-6 text-gray-900" />
          </button>
        )}
        
        <video
          ref={videoRef}
          className="max-w-full max-h-full rounded-lg shadow-2xl"
          controls
          onEnded={handleVideoEnd}
          onClick={(e) => e.stopPropagation()} 
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoOverlay;