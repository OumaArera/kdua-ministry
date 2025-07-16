
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './components/ministry/Home';
import OurTeam from './components/ministry/OurTeam';
import AboutUs from './components/ministry/AboutUs';
import WonHome from './components/won/WonHome';
import WonLeadership from './components/won/WonLeadership';
import AsedaHome from './components/aseda/AsedaHome';
import AsedaTeam from './components/aseda/AsedaTeam';
import AsedaEvents from './components/aseda/AsedaEvents';
import UpcomingEvents from './components/ministry/Upcoming.Events';
import CTCLHome from './components/ctcl/CTCL.Home';
import TeamModal from './components/ctcl/TeamModal';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <Router>
      <AppContent activeSection={activeSection} setActiveSection={setActiveSection} />
    </Router>
  );
}

function AppContent({ activeSection, setActiveSection }) {
  const location = useLocation();

  // Update active section based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setActiveSection('home');
    } else if (path === '/won') {
      setActiveSection('won');
    } else if (path === '/aseda') {
      setActiveSection('aseda');
    } else if (path === '/ctcl') {
      setActiveSection('ctcl');
    }
  }, [location.pathname, setActiveSection]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kduah-ministry/our-team" element={<OurTeam />} />
          <Route path="/kduah-ministry/events" element={<UpcomingEvents />} />
          <Route path="/kduah-ministry/about" element={<AboutUs />} />
          <Route path="/won" element={<WonHome />} />
          <Route path="/won/team" element={<WonLeadership />} />
          <Route path="/aseda" element={<AsedaHome />} />
          <Route path="/aseda/team" element={<AsedaTeam />} />
          <Route path="/aseda/events" element={<AsedaEvents />} />
          <Route path="/ctcl" element={<CTCLHome />} />
          <Route path="/ctcl/team" element={<TeamModal />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
