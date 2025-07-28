import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaWhatsapp, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo.png';
import ContactUs from '../components/ministry/Contact';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const ministryLinks = {
    ministry: [
      { name: 'About Us', href: '/kduah-ministry/about' },
      { name: 'Our Team', href: '/kduah-ministry/our-team' },
    ],
    programs: [
      { name: 'Won', href: '/won' },
      { name: 'Aseda', href: '/aseda' },
      { name: 'CTCL', href: '/ctcl' },
    ],
    connect: [
      { name: 'Visit Us', href: 'https://maps.google.com/?q=Gbawe,+H/N+33,+Tower+School+Dig,+Accra,+Ghana' },
      // { name: 'Join Us', href: '/kduah-ministry/join' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: FaFacebook, href: 'https://facebook.com/kduahministry' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com/kduah2000' },
    { name: 'YouTube', icon: FaYoutube, href: 'https://youtube.com/kduahministry' },
    { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/13257030636' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+233 24 909 9740', href: 'tel:+233249099740' },
    { icon: Phone, text: '+1 (325) 703-0636', href: 'tel:+1 (325) 703-0636' },
    { icon: Phone, text: '+13257030636', href: 'tel:+13257030636' },
    { icon: Mail, text: 'info@kduahministries.org', href: 'mailto:info@kduahministries.org' },
    { icon: MapPin, text: 'Gbawe, H/N 33, Tower School', href: 'https://maps.google.com/?q=Gbawe,+H/N+33,+Tower+School+Dig,+Accra,+Ghana' },
    { icon: MapPin, text: 'GS-0047-3214 Accra, Ghana', href: 'https://maps.google.com/?q=Gbawe,+H/N+33,+Tower+School+Dig,+Accra,+Ghana' }
  ];

  const handleNavigation = (href) => {
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      window.open(href, '_blank');
    } else {
      window.location.href = href;
    }
  };

  const handleSocialClick = (href) => {
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="mt-[-2rem] bg-gradient-to-b from-slate-900 to-slate-950 border-t border-teal-500/20">
      {/* Inspirational Quote Section */}
      <div className="border-b border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              "The Gospel on Display"
            </h3>
            <p className="text-gray-400 text-lg sm:text-xl max-w-4xl mx-auto leading-relaxed">
              Transforming lives through the power of God's Word and building a community of believers who reflect Christ's love in all they do.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
              <div className="h-16 md:h-20 w-16 md:w-20 bg-white rounded-full flex items-center justify-center shadow-md">
                <img 
                  src={logo} 
                  alt="Kduah Ministry Logo" 
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  KDUAH MINISTRY
                </h2>
                <p className="text-base sm:text-lg text-gray-400">The Gospel on Display</p>
              </div>
            </div>
            
            <p className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed">
              A Christ-centered ministry committed to spreading the Gospel, nurturing believers, and transforming communities through God's love and grace.
            </p>

            {/* Contact Info */}
            <div className="mb-8">
              <h4 className="text-white text-xl font-semibold mb-4">Get In Touch</h4>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <contact.icon className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                    <a 
                      href={contact.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(contact.href);
                      }}
                      className="text-gray-400 hover:text-teal-400 text-base transition-colors duration-200 leading-relaxed"
                    >
                      {contact.text}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => handleSocialClick(social.href)}
                    className="w-12 h-12 bg-slate-800/50 hover:bg-teal-500/20 border border-slate-700 hover:border-teal-500/50 rounded-xl flex items-center justify-center transition-all duration-200 group shadow-lg hover:shadow-teal-500/25"
                    title={social.name}
                  >
                    <social.icon className="w-6 h-6 text-teal-400 group-hover:text-white transition-all duration-200 group-hover:scale-110" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Ministry Links */}
            <div>
              <h4 className="text-white text-xl font-semibold mb-6">Ministry</h4>
              <ul className="space-y-4">
                {ministryLinks.ministry.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="text-gray-400 hover:text-teal-400 text-base transition-colors duration-200 hover:translate-x-1 transform"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs Links */}
            <div>
              <h4 className="text-white text-xl font-semibold mb-6">Subsidiaries</h4>
              <ul className="space-y-4">
                {ministryLinks.programs.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="text-gray-400 hover:text-teal-400 text-base transition-colors duration-200 hover:translate-x-1 transform"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Links */}
            <div>
              <h4 className="text-white text-xl font-semibold mb-6">Connect</h4>
              <ul className="space-y-4">
                {ministryLinks.connect.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="text-gray-400 hover:text-teal-400 text-base transition-colors duration-200 hover:translate-x-1 transform"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
            {/* Copyright and Developer Credit */}
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm sm:text-base">
                © {currentYear} Kduah Ministry. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Built with love for God's glory
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Built and maintained by{' '}
                <a 
                  href="https://safestack.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-400 hover:text-teal-300 transition-colors duration-200"
                >
                  SafeStack Technologies
                </a>
              </p>
            </div>
            
            {/* Bible Verse */}
            <div className="text-center lg:text-right">
              <p className="text-teal-400 text-sm sm:text-base italic">
                "Go therefore and make disciples of all nations"
              </p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">
                Matthew 28:19
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;