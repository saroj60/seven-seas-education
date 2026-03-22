import React from 'react';
import Section from '../components/common/Section';
import { motion } from 'framer-motion';
import { Check, Plane, Building2, GraduationCap, MapPin, Search } from 'lucide-react';
import CTA from '../components/common/CTA';

const AbroadStudy = () => {
  const steps = [
    { title: 'Counseling', desc: 'Detailed discussion about your goals, preferences, and finances.', icon: Building2 },
    { title: 'Selection', desc: 'Choosing the right university and city in your destination country.', icon: MapPin },
    { title: 'Documentation', desc: 'Preparing and translating academic and financial papers.', icon: GraduationCap },
    { title: 'Application', desc: 'Applying for admission and necessary eligibility certificates.', icon: Search },
    { title: 'Visa Processing', desc: 'Final visa process at the relevant Embassy or Consulate.', icon: Check },
    { title: 'Departure', desc: 'Pre-departure orientation and travel arrangements.', icon: Plane }
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-brand-blue text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4 block">Global Education</span>
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">
              Transform Your Future with <span className="text-brand-orange">Global Excellence</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed opacity-90">
              Unlock a world of opportunities with our comprehensive abroad study consultancy. From university selection to visa processing, we help you navigate every step of your international journey.
            </p>
          </div>
        </div>
      </section>

      {/* Why Abroad Study */}
      <Section id="why" background="bg-white">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Why Study Abroad?</h2>
          <div className="w-24 h-1.5 bg-brand-orange mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {[
            { title: 'Global Exposure', desc: 'Gain a worldwide perspective and experience diverse cultures firsthand.' },
            { title: 'Quality Education', desc: 'Access top-ranked universities and cutting-edge research facilities.' },
            { title: 'Career Growth', desc: 'Enhance your resume and unlock international career opportunities.' },
            { title: 'Personal Development', desc: 'Build independence, confidence, and cross-cultural communication skills.' }
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col gap-4 p-8 bg-slate-50 rounded-[2.5rem] hover:bg-white hover:shadow-xl transition-all border border-transparent hover:border-slate-100 group">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-blue shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <Check size={24} />
              </div>
              <h4 className="font-bold text-lg text-slate-800">{item.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section id="process" background="bg-brand-blue" className="text-white">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold mb-6">Our Success Process</h2>
          <p className="text-blue-200">A clear, documented path to your global education.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-400/20 -translate-y-1/2 z-0" />
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 relative z-10"
            >
              <div className="w-14 h-14 bg-white text-brand-blue rounded-2xl flex items-center justify-center font-black text-xl mb-6 shadow-lg shadow-black/20">
                <step.icon size={28} />
              </div>
              <span className="text-brand-orange font-black text-sm uppercase tracking-widest mb-2 block">Step 0{idx + 1}</span>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Documents Section */}
      <Section id="docs" background="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-8">Required Documents</h2>
            <div className="space-y-4">
              {[
                'Academic Certificates (SEE to latest)',
                'Japanese Language Certificates (150+ hours)',
                'Relationship Certificate with Sponsor',
                'Occupation & Income Certificates of Sponsor',
                'Bank Balance Certificate & Statement (Latest)',
                'Property Valuation & Tax Clearance',
                'Copy of Passport'
              ].map((doc, i) => (
                <div key={i} className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="w-6 h-6 bg-brand-orange rounded-full flex items-center justify-center text-white shrink-0">
                    <Check size={14} />
                  </div>
                  <span className="text-slate-700 font-medium">{doc}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2098&auto=format&fit=crop" 
              alt="Documents and Planning" 
              className="rounded-3xl shadow-2xl"
            />
          </div>
        </div>
        
        <CTA />
      </Section>
    </div>
  );
};

export default AbroadStudy;
