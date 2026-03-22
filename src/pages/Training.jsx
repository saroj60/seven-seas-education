import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import Breadcrumb from '../components/common/Breadcrumb';
import CTA from '../components/common/CTA';
import { BookOpen, Users, Clock, Languages, Star, BadgeCheck } from 'lucide-react';

const Training = () => {
  const courses = [
    {
      title: 'Basic Japanese (N5/NAT 5Q)',
      level: 'A1/N5',
      description: 'Perfect for beginners. Focuses on Hiragana, Katakana, and basic Kanji.'
    },
    {
      title: 'Spanish Language Course',
      level: 'A1 - Beginner',
      description: 'Master the basics of Spanish grammar, vocabulary, and everyday conversation.'
    },
    {
      title: 'French Language Course',
      level: 'A1 - Beginner',
      description: 'Learn French from scratch with emphasis on speaking and listening skills.'
    }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-blue pt-32 pb-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Language <span className="text-brand-orange">Training</span></h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl opacity-90">
              Leading multi-language training center. Learn Japanese, Spanish, and French from expert instructors in an immersive environment.
            </p>
          </motion.div>
        </div>
      </section>

      <Section background="bg-slate-50">
        <Breadcrumb items={[{ name: 'Training', path: '/training' }]} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-orange/5 rounded-bl-[4rem] group-hover:bg-brand-orange group-hover:text-white transition-all flex items-center justify-center">
                <Star size={32} />
              </div>
              <span className="text-brand-orange font-bold text-sm tracking-widest uppercase mb-4">{course.level}</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">{course.title}</h3>
              
              <div className="space-y-4 mb-8 flex-grow">
                <p className="text-slate-600 text-sm leading-relaxed">
                  {course.description}
                </p>
              </div>
              
              <div className="pt-8 border-t border-slate-100 flex justify-center items-center">
                <Link to="/contact" className="w-full bg-slate-50 text-slate-800 hover:bg-slate-100 px-6 py-4 rounded-2xl font-bold text-sm transition-all text-center">
                  Enquire Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Features Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16 bg-white rounded-[4rem] px-12 shadow-inner border border-slate-100">
          {[
            { icon: Users, title: 'Small Batches', desc: 'Max 15 students per class for personalized attention.' },
            { icon: Languages, title: 'Native Audio', desc: 'Learn with genuine Japanese listening materials.' },
            { icon: BadgeCheck, title: 'Official Support', desc: 'Free assistance with test registration.' }
          ].map((item, idx) => (
            <div key={idx} className="flex gap-6 items-start">
              <div className="w-14 h-14 shrink-0 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-blue">
                <item.icon size={28} />
              </div>
              <div>
                <h4 className="font-bold text-lg text-slate-800 mb-1">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <CTA />
      </Section>
    </div>
  );
};

export default Training;
