import React, { useState, useEffect } from 'react';
import ContactOverlay from './ContactOverlay';
import HeroSection from './HeroSection';
import MissionVisionSection from './MissionVisionSection';
import ServicesSection from './ServicesSection';
import CoreValuesSection from './CoreValuesSection';
import AboutSection from './AboutSection';
import WhatWeStandForSection from './WhatWeStandForSection';
import ContactCTASection from './ContactCTASection';
import TeamModal from './TeamModal';
import MilestonesModal from './MilestonesModal';
import RollingLeaders from './RollingLeaders';
import VideoOverlay from '../../services/VideoOverlay';
import introVid from '../../assets/ctcl.mov';
import CircularEvents from '../../services/CircularEvents';
import upcoming3 from '../../assets/upcoming/upcm6.jpg';
import upcoming4 from '../../assets/upcoming/upcm7.jpg';
import upcoming5 from '../../assets/upcoming/upcm10.jpg';


const CTCLHome = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [isMilestonesModalOpen, setIsMilestonesModalOpen] = useState(false);
  const [showIntroVideo, setShowIntroVideo] = useState(false);
  const eventImages = [
    upcoming3, upcoming4, upcoming5
  ];
    
  useEffect(() => {
    setShowIntroVideo(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <HeroSection 
        onContactClick={() => setIsContactOpen(true)}
        onTeamClick={() => setIsTeamModalOpen(true)}
        onMilestonesClick={() => setIsMilestonesModalOpen(true)}
      />
      <RollingLeaders />
      <MissionVisionSection />
      <ServicesSection />
      <CoreValuesSection />
      <AboutSection />
      <WhatWeStandForSection />
      <ContactCTASection onContactClick={() => setIsContactOpen(true)} />
      
      {/* Modals */}
      <ContactOverlay isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <TeamModal isOpen={isTeamModalOpen} onClose={() => setIsTeamModalOpen(false)} />
      <MilestonesModal isOpen={isMilestonesModalOpen} onClose={() => setIsMilestonesModalOpen(false)} />
      {/* Intro Video Overlay */}
      <VideoOverlay
        isOpen={showIntroVideo}
        onClose={() => setShowIntroVideo(false)}
        videoSrc={introVid}
        autoPlay={true}
        showCloseButton={true}
        closeOnVideoEnd={false}
      />
      <CircularEvents 
        images={eventImages}
        containerSize={900}
        imageSize={160}
        animationDuration={25}
        title="Upcoming Events"
        showTitle={true}
      />
    </div>
  );
};

export default CTCLHome;