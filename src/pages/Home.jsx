import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/common/Hero';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import CTA from '../components/common/CTA';
import { 
  Languages, 
  GraduationCap, 
  FileCheck, 
  ShieldCheck, 
  Users, 
  Globe, 
  BookOpen, 
  MessageCircle 
} from 'lucide-react';

const services = [
  {
    title: 'Japanese Language Class',
    description: 'Intensive courses for NAT, JLPT, and basic conversation from certified instructors.',
    icon: Languages,
    link: '/training'
  },
  {
    title: 'Spanish Language Class',
    description: 'Master Spanish with our communicative approach, covering grammar and conversation.',
    icon: Globe,
    link: '/training'
  },
  {
    title: 'French Language Class',
    description: 'Learn French from scratch with focus on DELF/DALF preparation and cultural immersion.',
    icon: BookOpen,
    link: '/training'
  },
  {
    title: 'Abroad Study Consultancy',
    description: 'Expert guidance on university selection, visa processing, and career mapping for global education.',
    icon: GraduationCap,
    link: '/abroad-study'
  }
];

const homeTests = [
  {
    title: 'NAT Test Prep',
    description: 'Comprehensive coaching for NAT levels with past paper practice and mock exams.',
    image: '/images/nat-test-prep.png',
    tag: 'Popular',
    link: '/test-preparation/nat'
  },
  {
    title: 'JLPT Prep',
    description: 'Targeted preparation for N5 to N1 levels with focus on vocabulary and grammar.',
    image: 'https://images.unsplash.com/photo-1518349619113-03114f06ac3a?q=80&w=2070&auto=format&fit=crop',
    tag: 'Essential',
    link: '/test-preparation/jlpt'
  },
  {
    title: 'JFT-Basic',
    description: 'Specific training for the JFT-Basic test for Specified Skilled Worker (SSW) visa.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop',
    tag: 'New',
    link: '/test-preparation/jft'
  }
];

const Home = () => {
  return (
    <div>
      <Hero />
      
      {/* Services Section */}
      <Section background="bg-white">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4 block">Our Services</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Expert Guidance for Your Success</h2>
          <p className="text-slate-500 text-lg">We provide end-to-end solutions for students and professionals looking to build their future in Japan.</p>
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
                    <span className="font-bold text-lg">9+</span>
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
            <div>
              <span className="text-brand-blue font-bold uppercase tracking-widest text-sm mb-4 block underline decoration-brand-orange decoration-2 underline-offset-8">Why Choose Seven Seas?</span>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">Elevating Your Career Through Excellence</h2>
              <p className="text-slate-600 leading-relaxed italic">"Our mission is to empower Nepalese students with the language skills and cultural insights needed to thrive in Japan."</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Users, title: 'Expert Faculty', desc: 'Native-level teachers' },
                { icon: BookOpen, title: 'Targeted Learning', desc: 'Ideal for ages 18-24' },
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
      </Section>
      
      {/* Test Prep Grid */}
      <Section background="bg-white">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4 block">Test Preparation</span>
            <h2 className="text-4xl font-extrabold text-slate-900">Ace Your Proficiency Tests</h2>
          </div>
          <Link to="/test-preparation" className="text-brand-blue font-bold flex items-center gap-2 hover:gap-3 transition-all border-b-2 border-brand-blue/20 pb-1">
            Browse All Tests <ArrowRight size={20} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {homeTests.map((test, index) => (
            <Card key={index} {...test} />
          ))}
        </div>
        
        <CTA />
      </Section>
    </div>
  );
};

// Simple Arrow Component for the Browse All link
const ArrowRight = ({ size, className }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default Home;
