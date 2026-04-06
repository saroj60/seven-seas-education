import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import { ArrowRight, Play, Users, Star, GraduationCap, ShieldCheck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslate } from '../../context/LanguageContext';
import g1 from '../../assets/g1.jpeg';
import g2 from '../../assets/g2.jpeg';
import g3 from '../../assets/g3.jpeg';
import g4 from '../../assets/g4.jpeg';
import g5 from '../../assets/G5.jpeg';
import g6 from '../../assets/g6.jpeg';

const Counter = ({ value, duration = 2, suffix = "" }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        onUpdate: (latest) => setDisplayValue(Math.round(latest))
      });
      return () => controls.stop();
    } else {
      setDisplayValue(0);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}{suffix}</span>;
};

const slides = [
  {
    image: g1,
    alt: "Seven Seas Education - Activity 1"
  },
  {
    image: g2,
    alt: "Seven Seas Education - Activity 2"
  },
  {
    image: g3,
    alt: "Seven Seas Education - Activity 3"
  },
  {
    image: g4,
    alt: "Seven Seas Education - Activity 4"
  },
  {
    image: g5,
    alt: "Seven Seas Education - Activity 5"
  },
  {
    image: g6,
    alt: "Seven Seas Education - Activity 6"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background with Slider */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/40 to-transparent z-10" />
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div className="container-custom relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full flex items-center gap-2">
                <ShieldCheck size={18} className="text-sky-400" />
                <span className="text-white font-bold text-xs uppercase tracking-wider">Certified by MOE</span>
              </div>
              <div className="bg-brand-orange/10 backdrop-blur-md border border-brand-orange/20 px-4 py-2 rounded-full flex items-center gap-2">
                <Award size={18} className="text-brand-orange" />
                <span className="text-brand-orange font-bold text-xs uppercase tracking-wider">Est. 2017</span>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-[1.1] text-white">
              {t('hero.title')} <br />
              <span className="text-brand-orange">
                {t('hero.japan')}
              </span>
            </h1>

            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-xl opacity-90">
              {t('hero.subtitle')}
            </p>

            <div className="flex flex-wrap gap-6 mb-12">
              <Link 
                to="/contact" 
                className="bg-brand-orange text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-orange-900/20 hover:bg-orange-600 hover:-translate-y-1 transition-all flex items-center gap-2 group"
              >
                {t('hero.apply')} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="flex items-center gap-4 text-white font-bold group">
                <div className="w-14 h-14 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-all">
                  <Play size={20} fill="white" />
                </div>
                {t('hero.learnMore')}
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-10 border-t border-white/10 pt-10">
              {[
                { label: t('hero.visaSuccess'), num: 98, suffix: '%', icon: Star },
                { label: t('hero.yearsExp'), num: (new Date().getFullYear() - 2017), suffix: '+', icon: GraduationCap }
              ].map((stat, i) => (
                <div key={i}>
                  <p className="text-3xl font-black text-white mb-1">
                    <Counter value={stat.num} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs font-bold text-blue-200 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
