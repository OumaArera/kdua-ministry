import React, { useState, useEffect, useRef } from 'react';
import { X, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import EventCard from './EventCard';
import ImageModal from './ImageModal';
import DecorativeElements from './DecorativeElements';

const CircularEvents = ({ 
  images = [], 
  imageWidth = 320,
  imageHeight = 400,
  scrollSpeed = 30,
  title = "Upcoming Events",
  showTitle = true,
  showControls = true,
  autoPlay = true,
  spacing = 24
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  // Calculate centering offset for images
  const calculateCenterOffset = () => {
    if (!scrollRef.current || images.length === 0) return 0;
    
    const containerWidth = scrollRef.current.parentElement.offsetWidth;
    const totalImagesWidth = images.length * imageWidth + (images.length - 1) * spacing;
    
    return Math.max(0, (containerWidth - totalImagesWidth) / 2);
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPlaying || images.length === 0) return;

    const scrollInterval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, scrollSpeed * 100);

    return () => clearInterval(scrollInterval);
  }, [isPlaying, images.length, scrollSpeed]);

  // Event handlers
  const handleImageClick = (image, index) => {
    setSelectedImage({ src: image, index });
    setIsPlaying(false);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    if (autoPlay) setIsPlaying(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleManualScroll = (direction) => {
    if (direction === 'left') {
      setCurrentIndex(prevIndex => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
    } else {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  // Calculate transform based on current index and centering
  const getTransform = () => {
    const centerOffset = calculateCenterOffset();
    const scrollOffset = currentIndex * (imageWidth + spacing);
    return `translateX(${centerOffset - scrollOffset}px)`;
  };

  if (!images || images.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-slate-600 text-lg">No events available</p>
      </div>
    );
  }

  return (
    <section className="py-10 px-4 relative overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      {showTitle && (
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>
      )}

      {/* Controls */}
      {showControls && images.length > 1 && (
        <div className="flex justify-center items-center gap-4 mb-8">
          <button
            onClick={() => handleManualScroll('left')}
            className="p-3 bg-white hover:bg-slate-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-slate-200"
            aria-label="Previous event"
          >
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          
          <button
            onClick={handlePlayPause}
            className="p-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          
          <button
            onClick={() => handleManualScroll('right')}
            className="p-3 bg-white hover:bg-slate-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-slate-200"
            aria-label="Next event"
          >
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      )}

      {/* Scrolling Container */}
      <div className="relative overflow-hidden">
        <div 
          ref={scrollRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: getTransform(),
            gap: `${spacing}px`
          }}
          onMouseEnter={() => !selectedImage && setIsPlaying(false)}
          onMouseLeave={() => !selectedImage && autoPlay && setIsPlaying(true)}
        >
          {images.map((image, index) => (
            <EventCard
              key={index}
              image={image}
              index={index}
              imageWidth={imageWidth}
              imageHeight={imageHeight}
              onClick={handleImageClick}
            />
          ))}
        </div>
      </div>

      {/* Progress Indicators */}
      {images.length > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 scale-110' 
                  : 'bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to event ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          selectedImage={selectedImage}
          onClose={handleCloseModal}
          onOverlayClick={handleOverlayClick}
        />
      )}

      {/* Decorative Elements */}
      <DecorativeElements />
    </section>
  );
};
export default CircularEvents;