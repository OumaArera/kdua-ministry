import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

// Import the gallery components
import Widows from './Widows';
import Orphans from './Orphans';
import Education from './Education';
import CommunityOutreach from './Community.Outreach';

const WonProjects = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hoveredProject, setHoveredProject] = useState(null);
  const [activeGallery, setActiveGallery] = useState(null);

  // Enhanced projects data with images
  const projects = [
    {
      id: 1,
      title: "Widow Support Program",
      description: "Empowering widows through skills training, financial support, and community building initiatives that restore dignity and hope.",
      icon: "👩‍🦳",
      image: images?.widow || "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&h=600&fit=crop",
      gradient: "from-rose-500 to-pink-600",
      bgGradient: "from-rose-50/80 to-pink-50/80",
      status: "Active",
      stats: "150+ Widows Supported",
      impact: "Lives Transformed",
      galleryComponent: "widows"
    },
    {
      id: 2,
      title: "Orphan Care Initiative",
      description: "Providing comprehensive education, healthcare, and emotional support to orphaned children across Ghana for a brighter future.",
      icon: "👶",
      image: images?.orphans || "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800&h=600&fit=crop",
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50/80 to-cyan-50/80",
      status: "Active",
      stats: "200+ Children Helped",
      impact: "Futures Secured",
      galleryComponent: "orphans"
    },
    {
      id: 3,
      title: "Community Development",
      description: "Building sustainable communities through infrastructure development, clean water access, and comprehensive healthcare programs.",
      icon: "🏘️",
      image: images?.community || "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50/80 to-teal-50/80",
      status: "Ongoing",
      stats: "10+ Communities Reached",
      impact: "Communities Empowered",
      galleryComponent: "community"
    },
    {
      id: 4,
      title: "Educational Support",
      description: "Providing scholarships, school supplies, and educational infrastructure for underprivileged children to break the cycle of poverty.",
      icon: "📚",
      image: images?.education || "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop",
      gradient: "from-purple-500 to-indigo-600",
      bgGradient: "from-purple-50/80 to-indigo-50/80",
      status: "Active",
      stats: "50+ Students Aided",
      impact: "Dreams Realized",
      galleryComponent: "education"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (isPlaying && !activeGallery) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, activeGallery, projects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleLearnMore = (projectId) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      setActiveGallery(project.galleryComponent);
      setIsPlaying(false); // Pause the carousel when gallery opens
    }
  };

  const closeGallery = () => {
    setActiveGallery(null);
    setIsPlaying(true); // Resume carousel when gallery closes
  };

  const renderGallery = () => {
    switch(activeGallery) {
      case 'widows':
        return <Widows onClose={closeGallery} />;
      case 'orphans':
        return <Orphans onClose={closeGallery} />;
      case 'education':
        return <Education onClose={closeGallery} />;
      case 'community':
        return <CommunityOutreach onClose={closeGallery} />;
      default:
        return null;
    }
  };

  return (
    <>
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-clip-text text-transparent mb-6 hover:animate-pulse transition-all duration-300">
              Our Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover our ongoing initiatives that are making a real difference in the lives of widows, orphans, and needy families
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-pink-500 mx-auto animate-pulse"></div>
          </div>
          
          {/* Main Interactive Carousel */}
          <div className="relative mb-16 group">
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {projects.map((project, index) => (
                  <div key={project.id} className="w-full flex-shrink-0 relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                      {/* Image Section */}
                      <div className="relative overflow-hidden group">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                          <div className="text-5xl mb-3 animate-bounce">{project.icon}</div>
                          <div className="space-y-2">
                            <div className="text-sm font-semibold bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full inline-block">
                              {project.stats}
                            </div>
                            <div className="text-xs text-gray-200 font-medium">
                              {project.impact}
                            </div>
                          </div>
                        </div>
                        {/* Hover overlay */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                      </div>
                      
                      {/* Content Section */}
                      <div className={`bg-gradient-to-br ${project.bgGradient} backdrop-blur-sm p-12 flex flex-col justify-center relative overflow-hidden`}>
                        {/* Floating decoration */}
                        <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r ${project.gradient} rounded-full opacity-10 animate-pulse`}></div>
                        
                        <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${project.gradient} text-white w-fit mb-6 transform hover:scale-105 transition-transform duration-300`}>
                          <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                          {project.status}
                        </div>
                        
                        <h3 className="text-3xl font-bold text-gray-800 mb-6 hover:text-purple-700 transition-colors duration-300">
                          {project.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                          {project.description}
                        </p>
                        
                        <button 
                          onClick={() => handleLearnMore(project.id)}
                          className={`group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r ${project.gradient} text-white rounded-full font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-fit`}
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Enhanced Carousel Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm hover:bg-white p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
            
            {/* Play/Pause Button */}
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
            >
              {isPlaying ? 
                <Pause className="w-5 h-5 text-gray-800" /> : 
                <Play className="w-5 h-5 text-gray-800 ml-0.5" />
              }
            </button>
          </div>
          
          {/* Interactive Dot Indicators */}
          <div className="flex justify-center space-x-3 mb-12">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative transition-all duration-300 ${
                  index === currentSlide 
                    ? 'w-8 h-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full' 
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400 rounded-full hover:scale-125'
                }`}
              >
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
          
          {/* Interactive Thumbnail Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setCurrentSlide(index)}
                className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  hoveredProject === index ? 'shadow-2xl' : 'shadow-lg'
                } ${index === currentSlide ? 'ring-4 ring-purple-400 ring-opacity-50' : ''}`}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-2xl mb-2 group-hover:animate-bounce">{project.icon}</div>
                  <h4 className="font-semibold text-sm mb-1">{project.title}</h4>
                  <div className="text-xs opacity-75">{project.stats}</div>
                </div>
                
                {/* Hover indicator */}
                <div className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-r ${project.gradient} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100`}>
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                
                {/* Active indicator */}
                {index === currentSlide && (
                  <div className="absolute top-4 left-4 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                )}
                
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Gallery Overlay */}
      {activeGallery && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          {renderGallery()}
        </div>
      )}
    </>
  );
};

export default WonProjects;