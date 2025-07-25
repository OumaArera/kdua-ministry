import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Header = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (route) => {
    // Route to the specified section/page
    // You can implement routing logic here (e.g., React Router)
    setActiveSection(route);
    setIsMenuOpen(false);
    
    // Example routing implementation - replace with your routing solution
    if (route === 'home') {
      navigate('/')
      // window.location.href = '/';
    } else {
      navigate(`/${route}`)
      // window.location.href = `/${route}`;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Track scroll position for styling changes
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on current route or scroll position
      const sections = ['home', 'won', 'aseda', 'ctcl'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const navigationItems = [
    { key: 'home', label: 'Home' },
    { key: 'won', label: 'WON' },
    { key: 'aseda', label: 'Aseda' },
    { key: 'ctcl', label: 'CTCL' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200 py-2' 
        : 'bg-white/90 backdrop-blur-sm py-3'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="flex-shrink-0">
              <div className="h-16 md:h-20 w-16 md:w-20 bg-white rounded-full flex items-center justify-center shadow-md">
                <img 
                  src={logo} 
                  alt="Kduah Ministry Logo" 
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl md:text-2xl font-bold text-slate-800">
                KDuah Ministry
              </h1>
              <p className="text-xs md:text-sm text-slate-600 font-medium">
                The Gospel on Display
              </p>
            </div>
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1">
            <div className="flex space-x-1 bg-slate-50 p-2 rounded-full shadow-sm border border-slate-200">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavigation(item.key)}
                  className={`px-5 py-2.5 rounded-full transition-all duration-300 text-sm font-medium ${
                    activeSection === item.key
                      ? 'bg-slate-800 text-white shadow-md transform scale-105'
                      : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900 hover:shadow-sm'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>

          {/* Right side spacer for balance - Desktop only */}
          <div className="hidden md:block flex-shrink-0 w-32 lg:w-40"></div>

          {/* Mobile brand and menu toggle - Right side */}
          <div className="md:hidden flex items-center justify-between flex-1 ml-4">
            <div className="flex flex-col items-center">
              <h1 className="text-sm font-bold text-slate-800">
                Kduah Ministry
              </h1>
              <p className="text-xs text-slate-600 font-medium">
                The Gospel on Display
              </p>
            </div>
            
            <button
              onClick={toggleMenu}
              className="text-white p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all duration-200 shadow-md"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-4 shadow-lg max-w-full overflow-x-hidden">
          <div className="flex flex-col space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavigation(item.key)}
                className={`${
                  activeSection === item.key
                    ? 'bg-slate-800 text-white shadow-md'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                } py-3.5 px-4 text-left rounded-lg transition-all duration-300 font-medium border border-slate-200 hover:border-slate-300`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;