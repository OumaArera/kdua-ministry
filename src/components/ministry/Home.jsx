import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactUs from './Contact';

// Child Components
import HeroSection from './HeroSection';
import ProgramsSection from './ProgramsSection';
import AboutSection from './StatsSection';
import UpcomingEventsSection from './UpcomingEventsSection';
import CallToActionSection from './CallToActionSection';
import RollingLeaders from './RollingLeaders';

const Home = () => {
  const [showContact, setShowContact] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-teal-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <HeroSection handleNavigation={handleNavigation} />
      <ProgramsSection handleNavigation={handleNavigation} />
      <RollingLeaders />
      <AboutSection />
      <UpcomingEventsSection />
      <CallToActionSection 
        handleNavigation={handleNavigation}
        onContactClick={() => setShowContact(true)}
      />
      <ContactUs 
        isOpen={showContact} 
        onClose={() => setShowContact(false)} 
      />
    </div>
  );
};

export default Home;