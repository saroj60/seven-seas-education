import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Languages, GraduationCap, Image as ImageIcon, Phone, MessageSquare } from 'lucide-react';
import Logo from '../common/Logo';

const navLinks = [
  { name: 'Home', path: '/' },
  { 
    name: 'Abroad Study', 
    path: '/abroad-study',
    submenu: [
      { name: 'Process', path: '/abroad-study#process' },
      { name: 'Documents', path: '/abroad-study#docs' },
      { name: 'Scholarships', path: '/abroad-study#scholarships' },
    ]
  },
  { 
    name: 'Test Preparation', 
    path: '/test-preparation',
    submenu: [
      { name: 'JLPT', path: '/test-preparation/jlpt' },
      { name: 'NAT', path: '/test-preparation/nat' },
      { name: 'JFT', path: '/test-preparation/jft' },
      { name: 'JLCT', path: '/test-preparation/jlct' },
    ]
  },
  { name: 'Training', path: '/training' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-2 shadow-md' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className={`relative transition-all duration-300 ${scrolled ? 'w-10 h-10' : 'w-12 h-12'} flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-110`}>
            <Logo className="w-full h-full" scrolled={scrolled} />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className={`font-black tracking-tight leading-none transition-all duration-300 ${scrolled ? 'text-lg text-slate-900' : 'text-xl text-white'}`}>
                SEVEN SEAS
              </span>
              {!scrolled && (
                <span className="hidden lg:inline-block text-[10px] font-bold bg-white/10 px-2 py-0.5 rounded-full border border-white/20 whitespace-nowrap">
                  Est. 2017
                </span>
              )}
            </div>
            <span className={`font-bold tracking-widest text-[10px] uppercase transition-all duration-300 ${scrolled ? 'text-brand-orange' : 'text-brand-orange'}`}>
              Education Pvt. Ltd. {scrolled && <span className="hidden lg:inline-block ml-2 font-normal opacity-60">| est. 2017</span>}
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.submenu && setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.path}
                className={`flex items-center gap-1 font-medium text-sm transition-colors ${
                  location.pathname === link.path 
                    ? 'text-brand-orange font-bold' 
                    : scrolled ? 'text-slate-700 hover:text-brand-orange' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                {link.submenu && <ChevronDown size={14} className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {link.submenu && activeDropdown === link.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white shadow-xl rounded-xl overflow-hidden py-2 border border-slate-100"
                  >
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-brand-orange transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <a
            href="https://wa.me/9779851228996"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-lg shadow-green-200 transition-all active:scale-95 flex items-center gap-2"
          >
            <MessageSquare size={16} />
            WhatsApp Us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-brand-blue"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} className={scrolled ? 'text-slate-900' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden bg-white mt-[64px]"
          >
            <div className="flex flex-col p-6 gap-6 h-full overflow-y-auto">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-2">
                  <Link
                    to={link.path}
                    className={`text-lg font-bold flex items-center justify-between ${
                      location.pathname === link.path ? 'text-brand-orange' : 'text-slate-800'
                    }`}
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <div className="pl-4 flex flex-col gap-3 border-l-2 border-slate-100 mt-2">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="text-slate-500 font-medium hover:text-brand-orange"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-auto pb-12">
                <Link
                  to="/contact"
                  className="w-full bg-brand-blue text-white py-4 rounded-xl flex items-center justify-center font-bold text-lg gap-2"
                >
                  <Phone size={20} />
                  Book a Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
