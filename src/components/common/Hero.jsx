import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { ChevronRight, Play, ShieldCheck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop",
    alt: "Beautiful Japan - Traditional Temple"
  },
  {
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    alt: "Language Class - Interactive Learning"
  },
  {
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop",
    alt: "Japan's Beautiful Cityscape - Tokyo Night"
  },
  {
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    alt: "Language Class - Dedicated Study"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const yearsOfExperience = new Date().getFullYear() - 2017;

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
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent z-10" />
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].image}
            alt={slides[currentSlide].alt}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div className="container-custom relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-brand-blue/10 backdrop-blur-md border border-brand-blue/20 px-4 py-2 rounded-full flex items-center gap-2">
              <ShieldCheck size={18} className="text-brand-blue" />
              <span className="text-brand-blue font-bold text-xs md:text-sm uppercase tracking-wider">Certified by Ministry of Education</span>
            </div>
            <div className="bg-brand-orange/10 backdrop-blur-md border border-brand-orange/20 px-4 py-2 rounded-full flex items-center gap-2">
              <Award size={18} className="text-brand-orange" />
              <span className="text-brand-orange font-bold text-xs md:text-sm uppercase tracking-wider">Abroad Study & Language Experts | Est. 2017</span>
            </div>
          </div>
        </div>

        <motion.h1 
          key={`title-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tight max-w-5xl"
        >
          Your Journey to <span className="text-brand-orange">Japan</span> <br className="hidden md:block" />
          Begins at <span className="relative">
            Seven Seas
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-orange/40" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
            </svg>
          </span>
        </motion.h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Unlock endless opportunities with professional Japanese language training and expert consultancy. We bridge the gap between your dreams and reality.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-brand-orange/20 transition-all flex items-center gap-2 active:scale-95"
              >
                Apply Now
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="group bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-xl font-bold text-lg border border-white/20 transition-all flex items-center gap-2 active:scale-95"
              >
                Learn More
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white"><Counter value={1000} suffix="+" /></span>
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Students Sent</span>
              </div>
              <div className="w-px h-10 bg-slate-700" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white"><Counter value={98} suffix="%" /></span>
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Visa Success</span>
              </div>
              <div className="w-px h-10 bg-slate-700" />
              <div className="flex flex-col">
                <span className="text-3xl font-bold text-white"><Counter value={yearsOfExperience} suffix="+" /></span>
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Years Exp.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full" 
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
