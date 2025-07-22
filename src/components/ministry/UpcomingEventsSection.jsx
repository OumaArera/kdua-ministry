import React from 'react';
import upcoming1 from '../../assets/upcoming/upcm1.jpeg';
import upcoming2 from '../../assets/upcoming/upcm2.jpeg';
import upcoming3 from '../../assets/upcoming/upcm3.jpeg';
import upcoming4 from '../../assets/upcoming/upcm4.jpeg';
import upcoming5 from '../../assets/upcoming/upcm5.jpeg';




const UpcomingEventsSection = () => {
  const images = [upcoming1, upcoming2, upcoming3, upcoming4, upcoming5];

  // Duplicate images for seamless scroll
  const duplicatedImages = [...images, ...images];

  return (
    <section className="py-10 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="overflow-hidden relative">
          <div className="flex space-x-6 md:space-x-8 whitespace-nowrap animate-scroll">
            {duplicatedImages.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 rounded-2xl min-h-144 overflow-hidden min-w-[280px] md:min-w-[320px] lg:min-w-[400px] h-[200px] md:h-[250px] lg:h-[300px]"
              >
                <img
                  src={img}
                  alt={`Event ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default UpcomingEventsSection;
