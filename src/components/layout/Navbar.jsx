import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Languages, GraduationCap, Image as ImageIcon, Phone, MessageSquare, ClipboardList, FileText, Users, CheckCircle2, Globe } from 'lucide-react';
import { useTranslate } from '../../context/LanguageContext';
import Logo from '../common/Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const { language, setLanguage, t } = useTranslate();
  const [isLangOpen, setIsLangOpen] = useState(false);
  
  const languages = [
    { name: 'English', id: 'EN' },
    { name: 'Nepali', id: 'NE' },
    { name: 'Japanese', id: 'JP' }
  ];
  
  const location = useLocation();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { 
      name: t('nav.abroad'), 
      path: '/abroad-study',
      submenu: [
        { name: t('nav.process'), path: '/abroad-study#process', desc: t('nav.processDesc'), icon: ClipboardList },
        { name: t('nav.docs'), path: '/documents', desc: t('nav.docsDesc'), icon: FileText },
        { name: t('nav.counselling'), path: '/contact', desc: t('nav.counsellingDesc'), icon: Users },
        { name: t('nav.scholarships'), path: '/abroad-study#scholarships', desc: t('nav.scholarshipsDesc'), icon: GraduationCap },
      ]
    },
    { 
      name: t('nav.test'), 
      path: '/test-preparation',
      submenu: [
        { name: t('nav.jlpt'), path: '/test-preparation/jlpt', desc: t('nav.jlptDesc'), icon: GraduationCap },
        { name: t('nav.nat'), path: '/test-preparation/nat', desc: t('nav.natDesc'), icon: CheckCircle2 },
        { name: t('nav.jft'), path: '/test-preparation/jft', desc: t('nav.jftDesc'), icon: Globe },
        { name: t('nav.jlct'), path: '/test-preparation/jlct', desc: t('nav.jlctDesc'), icon: FileText },
        { name: t('nav.ielts'), path: '/test-preparation/ielts', desc: t('nav.ieltsDesc'), icon: Languages },
      ]
    },
    { name: t('nav.training'), path: '/training' },
    { name: t('nav.gallery'), path: '/gallery' },
    { name: t('nav.contact'), path: '/contact' },
  ];

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
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-brand-orange ${scrolled ? 'py-2 shadow-lg' : 'py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className={`relative transition-all duration-300 ${scrolled ? 'w-10 h-10' : 'w-12 h-12'} flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-110`}>
            <Logo className="w-full h-full" scrolled={scrolled} />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className={`font-black tracking-tight leading-none transition-all duration-300 text-white ${scrolled ? 'text-lg' : 'text-xl'}`}>
                SEVEN SEAS
              </span>
              {!scrolled && (
                <span className="hidden lg:inline-block text-[10px] font-bold bg-white/10 px-2 py-0.5 rounded-full border border-white/20 whitespace-nowrap">
                  Est. 2017
                </span>
              )}
            </div>
            <span className={`font-bold tracking-widest text-[10px] uppercase transition-all duration-300 text-white/90`}>
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
                    ? 'text-white font-bold underline underline-offset-4' 
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.name}
                {link.submenu && <ChevronDown size={14} className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {link.submenu && activeDropdown === link.name && (
                  <motion.div
                    key={`mega-menu-${link.name}-${Date.now()}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-[400px] bg-white shadow-2xl rounded-[2rem] overflow-hidden p-4 border border-slate-100 z-50 grid grid-cols-1 gap-1"
                  >
                    {link.submenu.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.path}
                        className="group/sub flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all"
                      >
                        <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-brand-orange shrink-0 group-hover/sub:bg-brand-orange group-hover/sub:text-white transition-colors">
                          {sub.icon ? <sub.icon size={20} /> : <div className="w-2 h-2 rounded-full bg-brand-orange" />}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 group-hover/sub:text-brand-orange transition-colors">
                            {sub.name}
                          </p>
                          {sub.desc && (
                            <p className="text-xs text-slate-500 mt-0.5 line-clamp-1 opacity-80">
                              {sub.desc}
                            </p>
                          )}
                        </div>
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
            {t('nav.whatsapp')}
          </a>

          {/* Language Switcher */}
          <div className="relative ml-2">
            <button 
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl backdrop-blur-md border border-white/20"
            >
              <Languages size={18} />
              <span className="text-sm font-bold uppercase">{language}</span>
              <ChevronDown size={14} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <AnimatePresence>
              {isLangOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 w-36 bg-white rounded-2xl shadow-2xl border border-slate-100 py-3 overflow-hidden z-50 p-1"
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => {
                        setLanguage(lang.id);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-all flex items-center justify-between ${
                        language === lang.id 
                          ? 'text-brand-orange bg-orange-50 font-bold' 
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {lang.name}
                      {language === lang.id && <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} className="text-white" />}
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
                    <div className="pl-4 flex flex-col gap-4 border-l-2 border-slate-100 mt-4 h-max">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.path}
                          className="flex items-start gap-3 group"
                        >
                          <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 shrink-0">
                            {sub.icon && <sub.icon size={16} />}
                          </div>
                          <div>
                            <p className="text-slate-700 font-bold text-sm tracking-tight">{sub.name}</p>
                            {sub.desc && <p className="text-[10px] text-slate-400 mt-0.5 leading-tight">{sub.desc}</p>}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Language Selector */}
              <div className="mt-4 pt-6 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">Select Language</span>
                <div className="grid grid-cols-3 gap-3">
                  {languages.map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => setLanguage(lang.id)}
                      className={`px-4 py-3 rounded-xl text-sm font-bold transition-all border ${
                        language === lang.id 
                          ? 'bg-brand-orange text-white border-brand-orange' 
                          : 'bg-slate-50 text-slate-600 border-slate-100'
                      }`}
                    >
                      {lang.id}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-auto pb-12">
                <Link
                  to="/contact"
                  className="w-full bg-brand-blue text-white py-4 rounded-xl flex items-center justify-center font-bold text-lg gap-2"
                >
                  <Phone size={20} />
                  {t('nav.consultation')}
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
