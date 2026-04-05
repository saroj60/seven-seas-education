import React from 'react';
import Section from '../../components/common/Section';
import Breadcrumb from '../../components/common/Breadcrumb';
import CTA from '../../components/common/CTA';
import { CheckCircle, Info, Target } from 'lucide-react';

const NAT = () => {
  return (
    <div className="pt-20">
      <Section background="bg-white">
        <Breadcrumb 
          items={[
            { name: 'Test Preparation', path: '/test-preparation' },
            { name: 'NAT-TEST', path: '/test-preparation/nat' }
          ]} 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h1 className="text-5xl font-extrabold text-slate-900 mb-8">NAT-TEST Preparation</h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              The Japanese Language NAT-TEST is an examination that measures the Japanese language ability of students who are not native Japanese speakers.
            </p>

            <div className="space-y-12">
              <section>
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Info className="text-brand-orange" />
                  What is NAT-TEST?
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  The NAT-TEST is held six times a year. It is one of the most popular tests for students seeking to study in Japan, as it is widely accepted by Japanese language institutes and the Immigration Bureau of Japan. The difficulty levels are divided into five levels: 5Q (Easiest) to 1Q (Most Hard).
                </p>
              </section>

              <section className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <Target className="text-brand-blue" />
                  Our Course Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    'Intensive Grammar & Vocab sessions',
                    'Bi-weekly Mock Examinations',
                    'Specific techniques for Kanji',
                    'Listening practice with native audio',
                    'Past paper analysis and discussion',
                    'Free study materials & textbooks'
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="text-green-500 shrink-0" size={20} />
                      <span className="text-slate-700 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </section>


            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="bg-brand-blue p-8 rounded-[2rem] text-white shadow-xl">
                <h4 className="text-xl font-bold mb-4">Enroll Now</h4>
                <p className="text-blue-200 text-sm mb-6 leading-relaxed">
                  Join our upcoming batch for the NAT-TEST April intake. Seats are filling fast!
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 text-sm">
                    <CheckCircle size={18} className="text-brand-orange shrink-0" />
                    <span>Time: 7 AM - 10 AM</span>
                  </li>
                </ul>
                <button className="w-full bg-white text-brand-blue font-bold py-4 rounded-xl hover:bg-slate-100 transition-colors">
                  Check Eligibility
                </button>
              </div>

              <div className="bg-slate-100 p-8 rounded-[2rem]">
                <h4 className="text-lg font-bold text-slate-800 mb-4">Other Tests</h4>
                <div className="flex flex-col gap-3">
                  {['JLPT', 'JFT-Basic', 'JLCT'].map(test => (
                    <button key={test} className="flex items-center justify-between p-4 bg-white rounded-xl text-slate-600 hover:text-brand-orange transition-all font-medium border border-transparent hover:border-slate-200 group">
                      {test}
                      <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <CTA />
      </Section>
    </div>
  );
};

// Simple Arrow Component proxy
const ChevronRight = ({ size, className }) => (
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
    <path d="M9 18l6-6-6-6" />
  </svg>
);

export default NAT;
