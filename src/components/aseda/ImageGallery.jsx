import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Eye } from 'lucide-react';

const ImageGallery = ({ 
  images, 
  section, 
  title, 
  icon: Icon, 
  color, 
  selectedYear,
  onImageClick 
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [autoSlide, setAutoSlide] = useState(false); // Start with autoSlide off
  const intervalRef = useRef(null);

  // Configuration - much smaller chunks to prevent overload
  const config = useMemo(() => ({
    itemsPerPage: section === 'singers' ? 6 : 4, // Reduced significantly
    gridCols: section === 'singers' 
      ? 'grid-cols-2 md:grid-cols-3' // Simplified grid
      : 'grid-cols-2'
  }), [section]);

  // Calculate total pages and current page images
  const pageData = useMemo(() => {
    if (!images || images.length === 0) return { totalPages: 0, currentImages: [] };
    
    const totalPages = Math.ceil(images.length / config.itemsPerPage);
    const startIndex = currentPage * config.itemsPerPage;
    const currentImages = images.slice(startIndex, startIndex + config.itemsPerPage);
    
    return { totalPages, currentImages };
  }, [images, currentPage, config.itemsPerPage]);

  // Auto-slide with proper cleanup
  useEffect(() => {
    if (!autoSlide || pageData.totalPages <= 1) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setCurrentPage(prev => (prev + 1) % pageData.totalPages);
    }, 4000); // Slower auto-slide

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [autoSlide, pageData.totalPages]);

  // Navigation functions
  const goToPage = useCallback((page) => {
    setCurrentPage(Math.max(0, Math.min(page, pageData.totalPages - 1)));
  }, [pageData.totalPages]);

  const navigateSlide = useCallback((direction) => {
    setCurrentPage(prev => {
      if (direction === 'next') {
        return prev >= pageData.totalPages - 1 ? 0 : prev + 1;
      } else {
        return prev <= 0 ? pageData.totalPages - 1 : prev - 1;
      }
    });
  }, [pageData.totalPages]);

  const toggleAutoSlide = useCallback(() => {
    setAutoSlide(prev => !prev);
  }, []);

  // Reset page when images change
  useEffect(() => {
    setCurrentPage(0);
  }, [images]);

  // Early return if no images
  if (!images || images.length === 0) return null;

  return (
    <div className={`bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border-2 border-${color}-100 hover:border-${color}-300 transition-all duration-500`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className={`p-3 bg-gradient-to-r from-${color}-400 to-${color}-600 rounded-full shadow-lg`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <p className="text-gray-600 text-sm">
              {images.length} total • Page {currentPage + 1} of {pageData.totalPages}
            </p>
          </div>
        </div>
        
        {/* Controls */}
        <div className="flex items-center space-x-3">
          <button
            onClick={toggleAutoSlide}
            className={`p-2 rounded-full transition-all duration-300 ${
              autoSlide 
                ? `bg-${color}-500 text-white hover:bg-${color}-600` 
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
            aria-label={autoSlide ? 'Pause slideshow' : 'Play slideshow'}
          >
            {autoSlide ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          
          <div className="flex space-x-1">
            <button
              onClick={() => navigateSlide('prev')}
              disabled={pageData.totalPages <= 1}
              className={`p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-${color}-600 hover:bg-${color}-50 disabled:opacity-50 disabled:cursor-not-allowed`}
              aria-label="Previous page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigateSlide('next')}
              disabled={pageData.totalPages <= 1}
              className={`p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-${color}-600 hover:bg-${color}-50 disabled:opacity-50 disabled:cursor-not-allowed`}
              aria-label="Next page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className={`grid ${config.gridCols} gap-4 min-h-[200px]`}>
        {pageData.currentImages.map((image, index) => {
          const globalIndex = currentPage * config.itemsPerPage + index;
          return (
            <ImageCard
              key={`${section}-${globalIndex}`}
              image={image}
              section={section}
              index={globalIndex}
              selectedYear={selectedYear}
              color={color}
              onImageClick={onImageClick}
            />
          );
        })}
      </div>

      {/* Pagination */}
      {pageData.totalPages > 1 && (
        <div className="mt-6 flex justify-center">
          <div className="flex space-x-2">
            {Array.from({ length: Math.min(pageData.totalPages, 10) }).map((_, index) => {
              // Show only first 10 pages to avoid too many dots
              const pageIndex = pageData.totalPages <= 10 ? index : 
                currentPage < 5 ? index :
                currentPage > pageData.totalPages - 6 ? pageData.totalPages - 10 + index :
                currentPage - 5 + index;
              
              return (
                <button
                  key={pageIndex}
                  onClick={() => goToPage(pageIndex)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPage === pageIndex
                      ? `bg-${color}-500`
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to page ${pageIndex + 1}`}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

// Simplified ImageCard component
const ImageCard = React.memo(({ 
  image, 
  section, 
  index, 
  selectedYear, 
  color, 
  onImageClick
}) => {
  const [imageState, setImageState] = useState('loading');
  const imageRef = useRef(null);

  const handleImageLoad = useCallback(() => {
    setImageState('loaded');
  }, []);

  const handleImageError = useCallback(() => {
    setImageState('error');
  }, []);

  const handleClick = useCallback(() => {
    if (imageState === 'loaded') {
      onImageClick(image, section, index);
    }
  }, [image, section, index, imageState, onImageClick]);

  return (
    <div
      className="group relative aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={handleClick}
    >
      {/* Loading state */}
      {imageState === 'loading' && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="w-6 h-6 bg-gray-400 rounded-full animate-pulse"></div>
        </div>
      )}
      
      {/* Error state */}
      {imageState === 'error' && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-gray-400 text-center">
            <div className="w-6 h-6 bg-gray-300 rounded-full mx-auto mb-1"></div>
            <span className="text-xs">Failed</span>
          </div>
        </div>
      )}

      {/* Image */}
      <img
        ref={imageRef}
        src={image}
        alt={`${section} ${index + 1}`}
        className={`w-full h-full object-cover transition-all duration-300 ${
          imageState === 'loaded' ? 'opacity-100 group-hover:scale-105' : 'opacity-0'
        }`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading="lazy"
      />
      
      {/* Hover overlay */}
      {imageState === 'loaded' && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-2 left-2 right-2">
            <div className="flex items-center justify-between text-white">
              <span className="text-xs font-medium">
                {section.charAt(0).toUpperCase() + section.slice(1)} {index + 1}
              </span>
              <Eye className="w-3 h-3" />
            </div>
          </div>
        </div>
      )}

      {/* Year badge */}
      {imageState === 'loaded' && (
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className={`bg-${color}-500 text-white px-2 py-1 rounded-full text-xs font-medium`}>
            {selectedYear}
          </div>
        </div>
      )}
    </div>
  );
});

ImageCard.displayName = 'ImageCard';

export default ImageGallery;