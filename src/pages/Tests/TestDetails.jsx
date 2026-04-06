import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Section from '../../components/common/Section';
import Breadcrumb from '../../components/common/Breadcrumb';
import CTA from '../../components/common/CTA';
import { CheckCircle, Info, Target, ChevronRight, Clock, Award, Globe } from 'lucide-react';
import { useTranslate } from '../../context/LanguageContext';

const TestDetails = () => {
  const { testId } = useParams();
  const { t } = useTranslate();
  
  // Mapping of test IDs to their content keys in LanguageContext
  const testKey = testId?.toLowerCase() || 'nat';
  const testData = t(`tests.${testKey}`);
  
  // Sidebar data for other tests
  const otherTests = [
    { name: 'JLPT', id: 'jlpt' },
    { name: 'NAT-TEST', id: 'nat' },
    { name: 'JFT-Basic', id: 'jft' },
    { name: 'JLCT', id: 'jlct' },
    { name: 'IELTS', id: 'ielts' }
  ].filter(test => test.id !== testKey);

  return (
    <div className="pt-20">
      <Section background="bg-white">
        <Breadcrumb 
          items={[
            { name: t('nav.test'), path: '/test-preparation' },
            { name: testData.title, path: `/test-preparation/${testKey}` }
          ]} 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <h1 className="text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">{testData.title}</h1>
            <p className="text-brand-orange font-bold text-lg mb-8 uppercase tracking-widest">{testData.full}</p>
            
            <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium">
              {testData.desc}
            </p>

            <div className="space-y-16">
              <section className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-brand-orange/20 rounded-full" />
                <h3 className="text-2xl font-black text-slate-800 mb-6 flex items-center gap-3">
                  <Info className="text-brand-orange" size={28} />
                  What is {testId?.toUpperCase()}?
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {testData.info}
                </p>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-orange-50 p-8 rounded-[2rem] border border-orange-100/50">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-orange mb-6 shadow-sm">
                    <Clock size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Exam Frequency</h4>
                  <p className="text-slate-600">{testData.frequency}</p>
                </div>
                <div className="bg-blue-50 p-8 rounded-[2rem] border border-blue-100/50">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-blue mb-6 shadow-sm">
                    <Award size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900 mb-2">Difficulty Levels</h4>
                  <p className="text-slate-600">{testData.levels}</p>
                </div>
              </div>

              <section className="bg-slate-900 p-10 rounded-[3rem] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32" />
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
                  <Target className="text-brand-orange" size={28} />
                  Why Prepare with Seven Seas?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                  {[
                    t('home.onlineClasses'),
                    'Intensive Grammar & Vocab sessions',
                    'Bi-weekly Mock Examinations',
                    'Specific techniques for Kanji',
                    'Listening practice with native audio',
                    'Past paper analysis and discussion',
                    'Free study materials & textbooks'
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="text-brand-orange shrink-0" size={20} />
                      <span className="text-slate-300 font-medium text-sm">{typeof feat === 'string' ? feat : feat.title || 'Expert Guidance'}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <div className="bg-brand-blue p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue to-brand-blue-dark opacity-90 transition-opacity" />
                <div className="relative z-10">
                  <h4 className="text-2xl font-black mb-4">Ready to Enroll?</h4>
                  <p className="text-blue-100 text-sm mb-8 leading-relaxed opacity-80">
                    {testData.enroll}
                  </p>
                  <div className="space-y-4 mb-10">
                    <div className="flex gap-4 p-4 bg-white/10 rounded-2xl border border-white/10">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                        <Clock size={20} className="text-brand-orange" />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold text-blue-300 tracking-widest">Timings</p>
                        <p className="text-sm font-bold">7 AM - 10 AM / 4 PM - 7 PM</p>
                      </div>
                    </div>
                  </div>
                  <Link 
                    to="/contact"
                    className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-brand-orange/20 flex items-center justify-center gap-2 group-hover:scale-[1.02]"
                  >
                    Enroll Now
                    <ChevronRight size={20} />
                  </Link>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                <h4 className="text-lg font-black text-slate-900 mb-6 flex items-center gap-2">
                  <Globe className="text-brand-orange" size={20} />
                  Other Proficiencies
                </h4>
                <div className="flex flex-col gap-3">
                  {otherTests.map(test => (
                    <Link 
                      key={test.id} 
                      to={`/test-preparation/${test.id}`}
                      className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl text-slate-700 hover:text-brand-orange hover:bg-orange-50 transition-all font-bold text-sm border border-transparent hover:border-orange-100 group"
                    >
                      {test.name}
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform text-slate-300" />
                    </Link>
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

export default TestDetails;
