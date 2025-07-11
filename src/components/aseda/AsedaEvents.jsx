import React, { useState, useCallback, useMemo, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { musicData } from "../../data/music.awards";
import { 
  Calendar, 
  Music, 
  Mic, 
  Sparkles,
  Trophy,
  Clock,
  MapPin
} from 'lucide-react';
import ImageModal from "./ImageModal";
import EventStats from "./EventStats";
import ImageGallery from "./ImageGallery";

const AsedaEvents = () => {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  // Memoize expensive calculations
  const currentEvent = useMemo(() => 
    musicData.find(event => event.year === selectedYear), 
    [selectedYear]
  );

  const availableYears = useMemo(() => 
    musicData.map(event => event.year).sort((a, b) => b - a), 
    []
  );

  // Optimized callbacks
  const handleYearChange = useCallback((year) => {
    setSelectedYear(year);
  }, []);

  const openImageModal = useCallback((image, section, index) => {
    setSelectedImage({ image, section, index });
  }, []);

  const closeImageModal = useCallback(() => {
    setSelectedImage(null);
  }, []);

  // Early return for no data
  if (!currentEvent) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">No Event Data</h2>
          <p className="text-gray-600">No events found for the selected year.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6 shadow-2xl">
            <Sparkles className="w-12 h-12 text-white animate-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 via-pink-700 to-orange-700 bg-clip-text text-transparent mb-6">
            {currentEvent.event}
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Celebrating excellence in music and recognizing outstanding achievements in the industry
          </p>

          {/* Year Selector */}
          <div className="flex justify-center flex-wrap gap-4 mb-8">
            {availableYears.map(year => (
              <button
                key={year}
                onClick={() => handleYearChange(year)}
                className={`px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg ${
                  selectedYear === year
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-50 hover:shadow-xl'
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Event Stats */}
        <EventStats event={currentEvent} />

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Singers Section */}
          {currentEvent.singers && currentEvent.singers.length > 0 && (
            <Suspense fallback={<div className="h-64 bg-gray-100 rounded-xl animate-pulse"></div>}>
              <ImageGallery
                images={currentEvent.singers}
                section="singers"
                title="Musical Performers"
                icon={Music}
                color="purple"
                selectedYear={selectedYear}
                onImageClick={openImageModal}
              />
            </Suspense>
          )}

          {/* Awards Section */}
          {currentEvent.awards && currentEvent.awards.length > 0 && (
            <Suspense fallback={<div className="h-64 bg-gray-100 rounded-xl animate-pulse"></div>}>
              <ImageGallery
                images={currentEvent.awards}
                section="awards"
                title="Awards & Recognition"
                icon={Trophy}
                color="green"
                selectedYear={selectedYear}
                onImageClick={openImageModal}
              />
            </Suspense>
          )}

          {/* Speakers Section */}
          {currentEvent.speakers && currentEvent.speakers.length > 0 && (
            <Suspense fallback={<div className="h-64 bg-gray-100 rounded-xl animate-pulse"></div>}>
              <ImageGallery
                images={currentEvent.speakers}
                section="speakers"
                title="Guest Speakers"
                icon={Mic}
                color="blue"
                selectedYear={selectedYear}
                onImageClick={openImageModal}
              />
            </Suspense>
          )}
        </div>

        {/* Event Info Banner */}
        <div className="mt-16 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl p-8 shadow-2xl text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-2">Event Year</h3>
              <p className="text-xl opacity-90">{selectedYear}</p>
            </div>
            
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-2">Location</h3>
              <p className="text-xl opacity-90">Music Hall, Accra</p>
            </div>
            
            <div className="text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 opacity-90" />
              <h3 className="text-2xl font-bold mb-2">Duration</h3>
              <p className="text-xl opacity-90">Full Day Event</p>
            </div>
          </div>
        </div>
      </div>
        <div className="mt-12 flex justify-center">
  <button
    onClick={() => navigate('/aseda')}
    className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-all shadow-md hover:shadow-lg"
  >
    Go back to Aseda Musical Concept Page
  </button>
</div>


      {/* Image Modal */}
      <ImageModal selectedImage={selectedImage} onClose={closeImageModal} />
    </div>
  );
};

export default AsedaEvents;