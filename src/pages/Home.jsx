import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Users, GraduationCap, Globe, Clock, Check, MessageCircle, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslate } from '../context/LanguageContext';
import Hero from '../components/common/Hero';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import CTA from '../components/common/CTA';
import Testimonials from '../components/common/Testimonials';
import { 
  Languages, 
  ShieldCheck, 
  BookOpen 
} from 'lucide-react';

const Home = () => {
  const { t } = useTranslate();

  const services = [
    {
      title: 'Japanese Language Training',
      description: 'Expert coaching for JLPT, NAT-TEST, JFT-Basic, and JLCT from N5 to N1 levels.',
      icon: GraduationCap,
      color: 'bg-blue-50 text-brand-blue',
      link: '/training'
    },
    {
      title: 'Spanish & French Language',
      description: 'Professional language courses for survival and advanced proficiency.',
      icon: Globe,
      color: 'bg-orange-50 text-brand-orange',
      link: '/training'
    },
    {
      title: 'Educational Counselling',
      description: 'Comprehensive guidance for students seeking higher education in Japan and beyond.',
      icon: Users,
      color: 'bg-slate-50 text-slate-600',
      link: '/contact'
    }
  ];

  const homeTests = [
    {
      title: 'JLPT / NAT-TEST',
      description: 'Comprehensive preparation for Japanese Proficiency Tests with focus on all modules.',
      image: 'https://images.unsplash.com/photo-1518349619113-03114f06ac3a?q=80&w=2070&auto=format&fit=crop',
      tag: 'Most Popular',
      link: '/test-preparation/nat'
    },
    {
      title: 'IELTS Preparation',
      description: 'Specialized coaching to achieve your desired band score in IELTS Academic and General.',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop',
      tag: 'New',
      link: '/test-preparation/ielts'
    },
    {
      title: 'Skill Base Training',
      description: 'Specific language training tailored for various professional backgrounds and SSW visa.',
      image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=2070&auto=format&fit=crop',
      tag: 'Professional',
      link: '/test-preparation/jft'
    }
  ];

  return (
    <div>
      <Hero />
      
      {/* Services Section */}
      <Section background="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4 block"
          >
            {t('home.services')}
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight"
          >
            {t('home.expertGuidance')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 leading-relaxed"
          >
            {t('home.servicesDesc')}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} {...service} variant="service" />
          ))}
        </div>
      </Section>
      
      {/* Why Choose Us */}
      <Section background="bg-slate-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-orange/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-brand-blue/10 rounded-full blur-3xl" />
            <img 
              src="https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?q=80&w=2070&auto=format&fit=crop" 
              alt="Japanese Culture" 
              className="rounded-[3rem] shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-8 -left-8 flex flex-col gap-4 z-20 hidden md:flex">
              <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">ISO Certified</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-tighter">Quality Guaranteed</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 ml-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center text-white">
                    <span className="font-bold text-lg">{new Date().getFullYear() - 2017}+</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">Years Exp.</h4>
                    <p className="text-xs text-slate-500 uppercase tracking-tighter">Professional Journey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-8">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4 block"
            >
              {t('home.whyChoose')}
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              {t('home.elevating')}
            </h2>
            
            <div className="space-y-8 mb-10">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 italic text-slate-600 text-lg relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-brand-orange text-white rounded-2xl flex items-center justify-center shadow-lg">
                  <Users size={24} />
                </div>
                "Our mission is to empower Nepalese individuals with the language skills and cultural insights needed to thrive in Japan."
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Users, title: 'Expert Faculty', desc: 'Native-level teachers' },
                  { icon: BookOpen, title: 'Targeted Learning', desc: 'Students & Professionals' },
                  { icon: Globe, title: 'Direct Bridge', desc: 'Network with schools' },
                  { icon: GraduationCap, title: 'Full Support', desc: 'Visa to Job placement' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-10 h-10 shrink-0 bg-white rounded-xl shadow-md border border-slate-100 flex items-center justify-center text-brand-orange">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800">{item.title}</h4>
                      <p className="text-xs text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Online Classes Section - NEW */}
      <Section background="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 md:order-1"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-orange/10 rounded-full blur-3xl animate-pulse" />
            <div className="relative rounded-[4rem] overflow-hidden shadow-2xl shadow-slate-200 border-8 border-white group">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                alt="Student studying online" 
                className="w-full h-[540px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center animate-bounce">
                    <Play size={20} fill="currentColor" />
                  </div>
                  <div>
                    <p className="font-bold">Live Interaction</p>
                    <p className="text-xs text-white/70">Join our digital classroom</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <div className="order-1 md:order-2">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4 block">
              {t('home.onlineClasses')}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              Learn Anywhere, <span className="text-brand-orange">Succeed Everywhere</span>
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-10">
              {t('home.onlineClassesDesc')}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {[
                { icon: Check, text: 'Interactive Live Sessions', color: 'bg-green-50 text-green-600' },
                { icon: Clock, text: 'Flexible Timing', color: 'bg-blue-50 text-brand-blue' },
                { icon: Users, text: 'Group Discussions', color: 'bg-purple-50 text-purple-600' },
                { icon: Star, text: 'Recorded Lessons', color: 'bg-orange-50 text-brand-orange' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center`}>
                    <item.icon size={16} strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 font-bold text-sm tracking-tight">{item.text}</span>
                </div>
              ))}
            </div>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-3 bg-brand-blue text-white px-8 py-4 rounded-full font-bold shadow-xl shadow-blue-100 hover:bg-brand-blue/90 hover:-translate-y-1 transition-all"
            >
              Get Started for Free <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </Section>

      {/* Test Preparation Section */}
      <Section background="bg-slate-50">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4 block">{t('home.testPrep')}</span>
            <h2 className="text-4xl font-extrabold text-slate-900">{t('home.aceTests')}</h2>
          </div>
          <Link to="/test-preparation" className="text-brand-blue font-bold flex items-center gap-2 hover:gap-3 transition-all border-b-2 border-brand-blue/20 pb-1">
            {t('home.browseAll')} <ArrowRight size={20} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {homeTests.map((test, index) => (
            <Card key={index} {...test} />
          ))}
        </div>
      </Section>

      <Testimonials />

      <Section background="bg-white" padding="pb-20">
        <CTA />
      </Section>
    </div>
  );
};

// Using ArrowRight from lucide-react instead of custom re-declaration

export default Home;
