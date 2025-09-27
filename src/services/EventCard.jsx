import React from 'react';

const EventCard = ({ image, index, imageWidth, imageHeight, onClick }) => (
  <div
    className="flex-shrink-0 cursor-pointer group relative"
    style={{ width: `${imageWidth}px`, height: `${imageHeight}px` }}
    onClick={() => onClick(image, index)}
  >
    <div className="relative w-full h-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
      <div className="w-full h-full bg-white rounded-xl overflow-hidden">
        <img 
          src={image} 
          alt={`Event ${index + 1}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-1 bg-black/50 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 rounded-xl flex items-center justify-center">
        <div className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
          View Event
        </div>
      </div>
      
      {/* Event Number Badge */}
      <div className="absolute top-3 left-3 bg-white bg-opacity-90 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold text-slate-700 shadow-lg">
        {index + 1}
      </div>
    </div>
  </div>
);

export default EventCard;