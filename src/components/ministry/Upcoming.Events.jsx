import React, { useState, useEffect } from "react";
import { Calendar, Clock, ChevronLeft, ChevronRight, Play, Pause, MapPin, Users, ExternalLink } from 'lucide-react';
import upcm1 from '../../assets/upcoming/upcm1.jpeg';
import upcm2 from '../../assets/upcoming/upcm2.jpeg';
import upcm3 from '../../assets/upcoming/upcm3.jpeg';
import upcm4 from '../../assets/upcoming/upcm4.jpeg';
import upcm5 from '../../assets/upcoming/upcm5.jpeg';
import ContactUs from "./Contact";

const events = [upcm1, upcm2, upcm3, upcm4, upcm5];

const UpcomingEvents = () => {
    // Sample placeholder images - replace with your actual imports
    const events = [upcm1, upcm2, upcm3, upcm4, upcm5];
    
    const eventDate = 'December 13, 2025';
    const staleDate = new Date('2025-12-31');
    const targetDate = new Date('2025-12-13');
    const currentDate = new Date();
    
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isStale, setIsStale] = useState(currentDate > staleDate);
    const [timeLeft, setTimeLeft] = useState(null);
    const [showContact, setShowContact] = useState(false);

    // Calculate time remaining until event
    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = targetDate - currentDate;
            
            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                
                setTimeLeft({ days, hours, minutes });
            } else {
                setTimeLeft(null);
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 60000);
        
        return () => clearInterval(timer);
    }, []);

    // Auto-toggle functionality
    useEffect(() => {
        if (isAutoPlaying && !isStale) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => 
                    prevIndex === events.length - 1 ? 0 : prevIndex + 1
                );
            }, 4000);

            return () => clearInterval(interval);
        }
    }, [isAutoPlaying, isStale, events.length]);

    // Manual navigation
    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? events.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === events.length - 1 ? 0 : currentIndex + 1);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    if (isStale) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="bg-white rounded-3xl p-12 shadow-2xl border border-gray-200">
                        <div className="w-24 h-24 bg-gradient-to-r from-gray-400 to-gray-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Calendar className="w-12 h-12 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Events Have Concluded</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            The events for {eventDate} have concluded. Stay tuned for upcoming announcements!
                        </p>
                        <button 
                            onClick={() => window.location.href = '/'}
                            className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            Return to Home
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
            </div>

            <div className="relative pt-24 pb-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500/20 to-blue-500/20 px-6 py-3 rounded-full border border-teal-400/30 backdrop-blur-sm mb-6">
                            <Calendar className="w-5 h-5 text-teal-300" />
                            <span className="text-teal-200 font-medium">Upcoming Ministry Events</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-white via-teal-200 to-blue-200 bg-clip-text text-transparent">
                                Join Us for
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Special Events
                            </span>
                        </h1>
                        
                        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                            Experience powerful ministry events designed to strengthen faith and build community
                        </p>
                        
                        {/* Event Date and Countdown */}
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 max-w-2xl mx-auto">
                            <div className="flex items-center justify-center mb-4">
                                <Calendar className="w-6 h-6 text-teal-300 mr-3" />
                                <span className="text-2xl font-bold text-white">{eventDate}</span>
                            </div>
                            
                            {timeLeft && (
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    <div className="bg-white/10 rounded-lg p-3">
                                        <div className="text-2xl font-bold text-teal-300">{timeLeft.days}</div>
                                        <div className="text-sm text-gray-300">Days</div>
                                    </div>
                                    <div className="bg-white/10 rounded-lg p-3">
                                        <div className="text-2xl font-bold text-blue-300">{timeLeft.hours}</div>
                                        <div className="text-sm text-gray-300">Hours</div>
                                    </div>
                                    <div className="bg-white/10 rounded-lg p-3">
                                        <div className="text-2xl font-bold text-purple-300">{timeLeft.minutes}</div>
                                        <div className="text-sm text-gray-300">Minutes</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Main Event Carousel */}
                    <div className="relative max-w-4xl mx-auto">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            {/* Main Image Display - Fixed sizing */}
                            <div className="relative">
                                <img 
                                    src={events[currentIndex]}
                                    alt={`Event ${currentIndex + 1}`}
                                    className="w-full h-96 md:h-[500px] lg:h-[600px] object-contain transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/20"></div>
                            </div>


                            {/* Navigation Arrows */}
                            <button 
                                onClick={goToPrevious}
                                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 group"
                            >
                                <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            </button>
                            
                            <button 
                                onClick={goToNext}
                                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/70 transition-all duration-300 group"
                            >
                                <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
                            </button>
                        </div>

                        {/* Controls */}
                        <div className="flex items-center justify-center mt-8 space-x-6">
                            {/* Auto-play Toggle */}
                            <button 
                                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/20 transition-all duration-300"
                            >
                                {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                                <span>{isAutoPlaying ? 'Pause' : 'Play'}</span>
                            </button>

                            {/* Slide Indicators */}
                            <div className="flex space-x-2">
                                {events.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                            index === currentIndex 
                                                ? 'bg-teal-400 scale-125' 
                                                : 'bg-white/30 hover:bg-white/50'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Thumbnail Navigation */}
                        <div className="grid grid-cols-5 gap-4 mt-8">
                            {events.map((event, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                                        index === currentIndex 
                                            ? 'ring-4 ring-teal-400 scale-105' 
                                            : 'hover:scale-105 opacity-70 hover:opacity-100'
                                    }`}
                                >
                                    <img 
                                        src={event}
                                        alt={`Event ${index + 1}`}
                                        className="w-full h-16 md:h-20 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/20"></div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16">
                        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Don't Miss Out!
                            </h3>
                            <p className="text-gray-300 mb-8 text-lg">
                                Mark your calendars and join us for these transformative ministry events
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button 
                                    onClick={() => setShowContact(true)}
                                    className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:from-teal-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
                                >
                                    Get More Information
                                </button>
                                <button 
                                    onClick={() => window.location.href = '/'}
                                    className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20"
                                >
                                    Back to Home
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Us Modal */}
            <ContactUs 
                isOpen={showContact} 
                onClose={() => setShowContact(false)} 
            />
        </div>
    );
};

export default UpcomingEvents;