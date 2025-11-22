
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Experience', path: '/experience' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Custom SVG Logo Component
  const NdnexLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 220 54" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="42" transform="scale(1.15, 0.85)" fontFamily="'Century Gothic', CenturyGothic, AppleGothic, sans-serif" fontWeight="bold" fontSize="42" fill="#54585A" letterSpacing="-1">NDNEX</text>
      <text x="2" y="50" fontFamily="'Century Gothic', CenturyGothic, AppleGothic, sans-serif" fontWeight="normal" fontSize="11" fill="#F08020" letterSpacing="0.2">Evidence and Next solutions</text>
    </svg>
  );

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' 
        : 'bg-white/80 backdrop-blur-sm py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo area */}
          <Link to="/" className="flex items-center gap-3 group">
             <NdnexLogo className="h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-semibold tracking-tight transition-all duration-300 font-sans ${
                  isActive(link.path)
                    ? 'text-ndnex-orange bg-orange-50/50'
                    : 'text-gray-600 hover:text-ndnex-dark hover:bg-gray-50/50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="ml-2 px-3 py-2 rounded-full text-sm font-bold text-gray-600 hover:bg-gray-100 transition-colors flex items-center gap-1"
            >
              <Globe size={16} />
              {language === 'en' ? 'KR' : 'EN'}
            </button>

            <Link 
              to="/contact"
              className="ml-3 pl-5 pr-4 py-2.5 bg-ndnex-dark text-white rounded-full text-sm font-bold hover:bg-ndnex-dark-light transition-all duration-300 shadow-lg shadow-ndnex-dark/20 hover:shadow-ndnex-dark/30 flex items-center gap-1 group tracking-wide font-sans"
            >
              {t.contactUs}
              <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="text-sm font-bold text-gray-600 hover:text-ndnex-orange"
            >
              {language === 'en' ? 'KR' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-ndnex-dark hover:text-ndnex-orange focus:outline-none p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-xl text-base font-bold transition-colors font-sans ${
                  isActive(link.path)
                    ? 'bg-orange-50 text-ndnex-orange'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-ndnex-orange'
                }`}
              >
                {link.name}
              </Link>
            ))}
             <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block mt-4 px-4 py-3 rounded-xl text-base font-bold bg-ndnex-dark text-white text-center font-sans"
              >
                {t.contactUs}
              </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
