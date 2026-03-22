import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <div className="relative bg-brand-blue rounded-[3rem] overflow-hidden p-12 md:p-20 shadow-2xl shadow-brand-blue/30 mt-12">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue-dark rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange rounded-full translate-y-1/2 -translate-x-1/2 opacity-20 blur-3xl" />
      
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-widest mb-6 border border-white/20">
            <Sparkles size={14} className="text-brand-orange" />
            Limited Seats for Next Intake
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            Ready to Start Your Career in Japan?
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Join hundreds of successful students who have achieved their dreams with Seven Seas. Get a free consultation today!
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
          <Link
            to="/contact"
            className="bg-white text-brand-blue hover:bg-slate-100 flex items-center justify-center gap-2 px-10 py-5 rounded-2xl font-bold text-xl transition-all active:scale-95 shadow-xl"
          >
            Get Free Consultation
            <ArrowRight size={22} />
          </Link>
          <Link
            to="/training"
            className="bg-transparent text-white border-2 border-white/30 hover:bg-white/10 px-10 py-5 rounded-2xl font-bold text-xl transition-all active:scale-95"
          >
            Explore Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CTA;
