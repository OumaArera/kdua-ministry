import React, { useState, useRef, useCallback } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Heart, Users, MapPin, Home, X, Building2 } from "lucide-react";
import { community } from "../../data/won.data";

const CommunityOutreach = ({ onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loadedImages, setLoadedImages] = useState(new Set());
  const observer = useRef();

  const imagesPerPage = 6; // Show more images per page
  const totalPages = Math.ceil(community.length / imagesPerPage);
  const currentImages = community.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage);

  const lastImageElementRef = useCallback(node => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        // Trigger loading of next page if needed
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  const handleImageLoad = (index) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-7xl w-full max-h-[95vh] overflow-hidden shadow-2xl">
        {/* Compact Header */}
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-4 text-white">
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back</span>
            </button>
            
            <div className="text-center">
              <h1 className="text-2xl font-bold flex items-center justify-center space-x-2">
                <Home className="w-6 h-6" />
                <span>Community Development</span>
              </h1>
              <p className="text-emerald-100 text-sm mt-1">
                {community.length} images • Building sustainable communities
              </p>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Image Gallery - Takes up most of the space */}
        <div className="p-6 overflow-y-auto max-h-[calc(95vh-120px)]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {currentImages.map((image, index) => {
              const globalIndex = currentPage * imagesPerPage + index;
              const isLastImage = index === currentImages.length - 1;
              
              return (
                <div
                  key={globalIndex}
                  ref={isLastImage ? lastImageElementRef : null}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  onClick={() => setSelectedImage({ image, index: globalIndex })}
                >
                  <div className="aspect-square bg-gradient-to-br">
                    <img
                      src={image}
                      alt={`Community development ${globalIndex + 1}`}
                      className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                        loadedImages.has(globalIndex) ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading="lazy"
                      onLoad={() => handleImageLoad(globalIndex)}
                    />
                  </div>
                  
                  {/* Simple overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 text-white">
                      <div className="text-sm font-semibold">Image {globalIndex + 1}</div>
                    </div>
                  </div>
                  
                  {/* Image number badge */}
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-emerald-600 text-xs font-bold px-2 py-1 rounded-full">
                    {globalIndex + 1}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-4 mt-6">
              <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  currentPage === 0
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:shadow-lg hover:scale-105'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>
              
              <div className="flex space-x-2">
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPage(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentPage
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-600 scale-125'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextPage}
                disabled={currentPage === totalPages - 1}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  currentPage === totalPages - 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:shadow-lg hover:scale-105'
                }`}
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
          
          {/* Compact stats at bottom */}
          <div className="mt-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-4">
            <div className="flex justify-center space-x-8 text-center">
              <div className="flex items-center space-x-2">
                <Home className="w-5 h-5 text-emerald-600" />
                <div>
                  <div className="text-lg font-bold text-gray-800">10+</div>
                  <div className="text-xs text-gray-600">Communities</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Building2 className="w-5 h-5 text-teal-600" />
                <div>
                  <div className="text-lg font-bold text-gray-800">25</div>
                  <div className="text-xs text-gray-600">Projects</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-emerald-600" />
                <div>
                  <div className="text-lg font-bold text-gray-800">5000+</div>
                  <div className="text-xs text-gray-600">Lives Impacted</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-teal-600" />
                <div>
                  <div className="text-lg font-bold text-gray-800">Healthcare</div>
                  <div className="text-xs text-gray-600">& Clean Water</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/50 bg-opacity-90 z-60 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh]">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage.image}
                alt={`Community development ${selectedImage.index + 1}`}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 text-white bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                <div className="font-semibold">Community Development Program</div>
                <div className="text-sm opacity-75">Image {selectedImage.index + 1} of {community.length}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityOutreach;