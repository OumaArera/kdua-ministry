import React, { useState, useRef, useCallback } from 'react';
import { X, Calendar, Award, Users, Building, BookOpen, Target, ChevronLeft, ChevronRight, ArrowLeft } from 'lucide-react';
import ctc1 from '../../assets/ctcl/ctc1.jpeg';
import ctc2 from '../../assets/ctcl/ctc2.jpeg';
import ctc3 from '../../assets/ctcl/ctc3.jpeg';
import ctcl1 from '../../assets/ctcl/ctcl1.jpeg';
import ctcl2 from '../../assets/ctcl/ctcl2.jpeg';
import ctcl3 from '../../assets/ctcl/ctcl3.jpeg';
import ctcl4 from '../../assets/ctcl/ctcl4.jpeg';
import ctcl5 from '../../assets/ctcl/ctcl5.jpeg';

const MilestonesModal = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('milestones');
  const [loadedImages, setLoadedImages] = useState(new Set());
  const observer = useRef();

  const lastImageElementRef = useCallback(node => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        // Trigger loading of next page if needed
      }
    });
    if (node) observer.current.observe(node);
  }, []);

  // Move the early return AFTER all hooks are declared
  if (!isOpen) return null;

  const milestones = [ctc1, ctc2, ctc3];
  const eventAdverts = [ctcl1, ctcl2, ctcl3, ctcl4, ctcl5];

  const currentImages = activeTab === 'milestones' ? milestones : eventAdverts;
  const imagesPerPage = 6;
  const totalPages = Math.ceil(currentImages.length / imagesPerPage);
  const paginatedImages = currentImages.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage);

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

  const switchTab = (tab) => {
    setActiveTab(tab);
    setCurrentPage(0);
    setSelectedImage(null);
  };

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-7xl w-full max-h-[95vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4 text-white">
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
                <Award className="w-6 h-6" />
                <span>{activeTab === 'milestones' ? 'Progress Milestones' : 'Event Advertisements'}</span>
              </h1>
              <p className="text-purple-100 text-sm mt-1">
                {currentImages.length} images • {activeTab === 'milestones' ? 'Our journey and achievements' : 'Past events and promotions'}
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

        {/* Tab Navigation */}
        <div className="bg-gray-50 border-b border-gray-200 p-4">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => switchTab('milestones')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'milestones'
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              <Target className="w-4 h-4" />
              <span>Progress Milestones ({milestones.length})</span>
            </button>
            
            <button
              onClick={() => switchTab('events')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'events'
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Event Adverts ({eventAdverts.length})</span>
            </button>
          </div>
        </div>

        {/* Main Image Gallery */}
        <div className="p-6 overflow-y-auto max-h-[calc(95vh-200px)]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {paginatedImages.map((image, index) => {
              const globalIndex = currentPage * imagesPerPage + index;
              const isLastImage = index === paginatedImages.length - 1;
              
              return (
                <div
                  key={globalIndex}
                  ref={isLastImage ? lastImageElementRef : null}
                  className="group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  onClick={() => setSelectedImage({ image, index: globalIndex })}
                >
                  <div className="aspect-square bg-gradient-to-br from-purple-100 to-indigo-100">
                    <img
                      src={image}
                      alt={`${activeTab === 'milestones' ? 'Progress milestone' : 'Event advertisement'} ${globalIndex + 1}`}
                      className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
                        loadedImages.has(globalIndex) ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading="lazy"
                      onLoad={() => handleImageLoad(globalIndex)}
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-3 left-3 text-white">
                      <div className="text-sm font-semibold">
                        {activeTab === 'milestones' ? 'Milestone' : 'Event'} {globalIndex + 1}
                      </div>
                    </div>
                  </div>
                  
                  {/* Image number badge */}
                  <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm text-purple-600 text-xs font-bold px-2 py-1 rounded-full">
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
                    : 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:shadow-lg hover:scale-105'
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
                        ? 'bg-gradient-to-r from-purple-500 to-indigo-600 scale-125'
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
                    : 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:shadow-lg hover:scale-105'
                }`}
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
          
          {/* Stats Section */}
          <div className="mt-6 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-4">
            <div className="flex justify-center space-x-8 text-center">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-purple-600" />
                <div>
                  <div className="text-lg font-bold text-gray-800">{milestones.length}</div>
                  <div className="text-xs text-gray-600">Milestones</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-indigo-600" />
                <div>
                  <div className="text-lg font-bold text-gray-800">{eventAdverts.length}</div>
                  <div className="text-xs text-gray-600">Events</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 text-purple-600" />
                <div>
                  <div className="text-lg font-bold text-gray-800">{milestones.length + eventAdverts.length}</div>
                  <div className="text-xs text-gray-600">Total Images</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-60 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh]">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedImage.image}
                alt={`${activeTab === 'milestones' ? 'Progress milestone' : 'Event advertisement'} ${selectedImage.index + 1}`}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
              />
              <div className="absolute bottom-4 left-4 text-white bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg">
                <div className="font-semibold">
                  {activeTab === 'milestones' ? 'Progress Milestone' : 'Event Advertisement'}
                </div>
                <div className="text-sm opacity-75">
                  Image {selectedImage.index + 1} of {currentImages.length}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MilestonesModal;