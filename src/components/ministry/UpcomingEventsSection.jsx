import React from 'react';
import upcoming1 from '../../assets/upcoming/Event 1.jpeg';
import upcoming2 from '../../assets/upcoming/Event 5.jpeg';
import upcoming3 from '../../assets/upcoming/upcm6.jpg';
import upcoming4 from '../../assets/upcoming/upcm7.jpg';
import upcoming5 from '../../assets/upcoming/upcm10.jpg';
import upcoming6 from '../../assets/upcoming/upcm8.jpg';

const UpcomingEventsSection = () => {
  const images = [upcoming5, upcoming3, upcoming2, upcoming1, upcoming6, upcoming4];

  const duplicatedImages = [...images, ...images];

  return (
    <section className="py-10 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="overflow-hidden relative">
          <div className="flex space-x-6 md:space-x-8 whitespace-nowrap animate-marquee">
            {duplicatedImages.map((img, index) => (
              <div
                key={index}
                className="flex-shrink-0 rounded-2xl overflow-hidden min-w-[280px] md:min-w-[320px] lg:min-w-[400px] h-96"
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
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
          will-change: transform;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default UpcomingEventsSection;
