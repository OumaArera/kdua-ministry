
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import './App.css';
import Header from './layout/Header';
import Footer from './layout/Footer';

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
          {/* <Route path="/" element={<Dashboard />} /> */}
          {/* <Route path="/won" element={<WonPage />} /> */}
          {/* <Route path="/aseda" element={<AsedaPage />} /> */}
          {/* <Route path="/ctcl" element={<CTCLPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
