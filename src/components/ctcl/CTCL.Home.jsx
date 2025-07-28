import React, { useState } from 'react';
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

const CTCLHome = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
  const [isMilestonesModalOpen, setIsMilestonesModalOpen] = useState(false);

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
    </div>
  );
};

export default CTCLHome;