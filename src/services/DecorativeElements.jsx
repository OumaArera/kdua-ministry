import React from 'react';


const DecorativeElements = () => (
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
    {/* Floating particles */}
    {[...Array(8)].map((_, i) => (
      <div
        key={`particle-${i}`}
        className="absolute w-2 h-2 bg-gradient-to-r from-cyan-300 to-blue-400 rounded-full opacity-20 animate-bounce"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${i * 0.8}s`,
          animationDuration: `${3 + Math.random() * 2}s`
        }}
      />
    ))}
    
    {/* Floating geometric shapes */}
    {[...Array(6)].map((_, i) => (
      <div
        key={`shape-${i}`}
        className="absolute opacity-10 animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${i * 1.2}s`,
          animationDuration: `${4 + Math.random() * 2}s`
        }}
      >
        <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full transform rotate-45"></div>
      </div>
    ))}
  </div>
);

export default DecorativeElements;