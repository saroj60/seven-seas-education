import React from 'react';
import Section from '../components/common/Section';
import Breadcrumb from '../components/common/Breadcrumb';
import Card from '../components/common/Card';
import CTA from '../components/common/CTA';

const TestPreparation = () => {
  const tests = [
    {
      title: 'JLPT (Japanese Language Proficiency Test)',
      description: 'The standard test for non-native speakers, recognized worldwide for work and study.',
      image: 'https://images.unsplash.com/photo-1518349619113-03114f06ac3a?q=80&w=2070&auto=format&fit=crop',
      tag: 'Global Standard',
      link: '/test-preparation/jlpt'
    },
    {
      title: 'NAT-TEST',
      description: 'An examination that measures the Japanese language ability of non-native speakers.',
      image: '/images/nat-test-prep.png',
      tag: 'Frequent',
      link: '/test-preparation/nat'
    },
    {
      title: 'JFT-Basic',
      description: 'Assessment for the Specified Skilled Worker (SSW) visa category.',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop',
      tag: 'For SSW',
      link: '/test-preparation/jft'
    },
    {
      title: 'JLCT (Japanese Language Capability Test)',
      description: 'A test measuring Japanese communication ability, recognized for study and work in Japan.',
      image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=2070&auto=format&fit=crop',
      tag: 'New Standard',
      link: '/test-preparation/jlct'
    },
    {
      title: 'IELTS (International English Language Testing System)',
      description: 'The world\'s most popular English language proficiency test for higher education and global migration.',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop',
      tag: 'English Proficiency',
      link: '/test-preparation/ielts'
    }
  ];

  return (
    <div className="pt-20">
      <Section background="bg-slate-50">
        <Breadcrumb items={[{ name: 'Test Preparation', path: '/test-preparation' }]} />
        <div className="max-w-3xl mb-12">
          <h1 className="text-5xl font-extrabold text-slate-900 mb-6">Language Proficiency Tests</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Choose the right certification for your goals. We provide specialized coaching for all major Japanese proficiency examinations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tests.map((test, index) => (
            <Card key={index} {...test} />
          ))}
        </div>
        
        <CTA />
      </Section>
    </div>
  );
};

export default TestPreparation;
