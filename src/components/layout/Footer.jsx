import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Youtube, MessageSquare } from 'lucide-react';
import Logo from '../common/Logo';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 flex items-center justify-center overflow-hidden shrink-0">
                <Logo className="w-full h-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-white text-xl tracking-tight leading-none">
                  SEVEN SEAS
                </span>
                <span className="font-bold text-brand-orange text-[10px] uppercase tracking-widest">
                  Education Pvt. Ltd. | Est. 2017
                </span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Your gateway to academic and career excellence abroad. Since 2017, we have provided comprehensive language training and consultancy services to help you achieve your dreams.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/share/1Cm6dh3bSi/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-orange transition-all hover:-translate-y-1"
              >
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-orange transition-all hover:-translate-y-1">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-orange transition-all hover:-translate-y-1">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-bold text-lg">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about" className="hover:text-brand-orange transition-colors">About Us</Link></li>
              <li><Link to="/abroad-study" className="hover:text-brand-orange transition-colors">Abroad Study</Link></li>
              <li><Link to="/test-preparation" className="hover:text-brand-orange transition-colors">Test Prep</Link></li>
              <li><Link to="/gallery" className="hover:text-brand-orange transition-colors">Our Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-brand-orange transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Test Preparation */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-bold text-lg">Test Prep</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/test-preparation/jlpt" className="hover:text-brand-orange transition-colors">JLPT Course</Link></li>
              <li><Link to="/test-preparation/nat" className="hover:text-brand-orange transition-colors">NAT Test</Link></li>
              <li><Link to="/test-preparation/jft" className="hover:text-brand-orange transition-colors">JFT Basic</Link></li>
              <li><Link to="/test-preparation/jlct" className="hover:text-brand-orange transition-colors">JLCT Prep</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="text-white font-bold text-lg">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <MapPin className="text-brand-orange shrink-0" size={20} />
                <span className="text-sm">Koteshwor-32, Kathmandu, Nepal</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-brand-orange shrink-0" size={20} />
                <span className="text-sm">01591592, 9765341882</span>
              </li>
              <li className="flex gap-3 text-white">
                <MessageSquare className="text-green-500 shrink-0" size={20} />
                <span className="text-sm font-bold">+977 985-1228996</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-brand-orange shrink-0" size={20} />
                <span className="text-sm">sevenseas.edu2017@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500 uppercase tracking-widest">
          <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left">
            <p>© {currentYear} Seven Seas Education Pvt. Ltd. All Rights Reserved.</p>
            <p className="normal-case text-[10px] opacity-60">Developed by: <a href="mailto:sarojbhagat666@gmail.com" className="hover:text-brand-orange transition-colors">sarojbhagat666@gmail.com</a></p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
