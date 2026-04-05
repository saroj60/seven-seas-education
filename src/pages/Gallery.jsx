import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/common/Section';
import Breadcrumb from '../components/common/Breadcrumb';
import { Camera } from 'lucide-react';
import g1 from '../assets/g1.jpeg';
import g2 from '../assets/g2.jpeg';
import g3 from '../assets/g3.jpeg';
import g4 from '../assets/g4.jpeg';
import g5 from '../assets/G5.jpeg';

const Gallery = () => {
  const images = [
    { url: g1, title: 'Inauguration Ceremony' },
    { url: g2, title: 'Class Session' },
    { url: g3, title: 'Cultural Interaction' },
    { url: g4, title: 'Student Achievement' },
    { url: g5, title: 'Interactive Learning' },
    { url: '/images/gallery/gallery-1.jpeg', title: 'Interactive Learning' },
    { url: '/images/gallery/gallery-2.jpeg', title: 'Cultural Celebration' },
    { url: '/images/gallery/gallery-3.jpeg', title: 'Student Excellence' },
    { url: '/images/gallery/gallery-4.jpeg', title: 'Class Interaction' },
    { url: '/images/gallery/gallery-5.jpeg', title: 'Success Moment' },
    { url: '/images/gallery/gallery-6.jpeg', title: 'Our Campus' },
    { url: '/images/gallery/gallery-7.jpeg', title: 'Certificate Distribution' },
    { url: '/images/gallery/gallery-8.jpeg', title: 'Language Training' },
    { url: '/images/gallery/gallery-9.jpeg', title: 'Counseling Session' },
    { url: '/images/gallery/gallery-10.jpeg', title: 'Study Abroad Support' }
  ];

  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-blue pt-32 pb-20 text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-brand-orange mx-auto mb-6 border border-white/10">
              <Camera size={32} />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Our <span className="text-brand-orange">Moments</span></h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto opacity-90">
              A glimpse into the life at Seven Seas Education. From classroom learning to cultural celebrations.
            </p>
          </motion.div>
        </div>
      </section>

      <Section background="bg-white">
        <Breadcrumb items={[{ name: 'Gallery', path: '/gallery' }]} />

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((img, idx) => (
            <div key={idx} className="break-inside-avoid relative group rounded-3xl overflow-hidden shadow-lg border border-slate-100">
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Gallery;
