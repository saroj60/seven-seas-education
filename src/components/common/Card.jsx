import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Card = ({ 
  title, 
  description, 
  icon: Icon, 
  link, 
  image, 
  tag,
  variant = 'default' 
}) => {
  if (variant === 'service') {
    return (
      <motion.div
        whileHover={{ y: -10 }}
        className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-start gap-6 group"
      >
        <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-500 shadow-inner">
          <Icon size={32} />
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
          <p className="text-slate-500 leading-relaxed text-sm">
            {description}
          </p>
        </div>
        <Link 
          to={link} 
          className="mt-4 flex items-center gap-2 font-bold text-brand-orange group-hover:gap-3 transition-all"
        >
          Read More <ArrowRight size={18} />
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="overflow-hidden rounded-3xl bg-white shadow-lg border border-slate-100 group"
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        {tag && (
          <span className="absolute top-4 left-4 bg-brand-orange text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
            {tag}
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col gap-4">
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">
          {description}
        </p>
        <Link 
          to={link} 
          className="flex items-center gap-2 text-brand-blue font-bold text-sm tracking-wide"
        >
          Explore Now <ArrowRight size={16} />
        </Link>
      </div>
    </motion.div>
  );
};

export default Card;
