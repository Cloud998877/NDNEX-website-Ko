
import React from 'react';
import { MapPin, Phone, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t, content } = useLanguage();
  const { COMPANY_INFO } = content;

  // Logo Component for Footer (White Text Version)
  const FooterLogo = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 220 54" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="42" transform="scale(1.15, 0.85)" fontFamily="'Century Gothic', CenturyGothic, AppleGothic, sans-serif" fontWeight="bold" fontSize="42" fill="#FFFFFF" letterSpacing="-1">NDNEX</text>
      <text x="2" y="50" fontFamily="'Century Gothic', CenturyGothic, AppleGothic, sans-serif" fontWeight="normal" fontSize="11" fill="#F08020" letterSpacing="0.2">Evidence and Next solutions</text>
    </svg>
  );

  return (
    <footer className="bg-ndnex-dark text-white pt-16 pb-8 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <div className="mb-6">
               <FooterLogo className="h-12 w-auto" />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 pr-8 font-medium">
              {COMPANY_INFO.mission}
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/ndnex/?originalSubdomain=kr" target="_blank" rel="noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-ndnex-orange transition-colors border border-white/10">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="md:pl-12">
            <h4 className="text-lg font-bold mb-6 border-b border-gray-600 pb-2 inline-block tracking-wide font-display">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-ndnex-orange transition-colors flex items-center gap-2 font-medium"><span className="w-1 h-1 bg-ndnex-orange rounded-full"></span>About Us</Link></li>
              <li><Link to="/services" className="hover:text-ndnex-orange transition-colors flex items-center gap-2 font-medium"><span className="w-1 h-1 bg-ndnex-orange rounded-full"></span>Our Services</Link></li>
              <li><Link to="/experience" className="hover:text-ndnex-orange transition-colors flex items-center gap-2 font-medium"><span className="w-1 h-1 bg-ndnex-orange rounded-full"></span>Experience & Publications</Link></li>
              <li><Link to="/contact" className="hover:text-ndnex-orange transition-colors flex items-center gap-2 font-medium"><span className="w-1 h-1 bg-ndnex-orange rounded-full"></span>Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-gray-600 pb-2 inline-block tracking-wide font-display">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-ndnex-orange shrink-0 mt-1" />
                <span className="font-medium">{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-ndnex-orange shrink-0" />
                <span className="font-medium">{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-ndnex-orange shrink-0" />
                <span className="font-medium">{COMPANY_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-xs text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4 font-medium">
          <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name} Co., Ltd. All rights reserved.</p>
          <div className="flex gap-6">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
