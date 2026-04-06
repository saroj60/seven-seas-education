import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquareQuote } from 'lucide-react';
import Section from './Section';
import t1 from '../../assets/t1.jpeg';
import t2 from '../../assets/t2.jpeg';
import t3 from '../../assets/t3.jpeg';
import t4 from '../../assets/t4.jpeg';
import t5 from '../../assets/t5.jpeg';
import t6 from '../../assets/t6.jpeg';
import t7 from '../../assets/t7.jpeg';
import roshan from '../../assets/ROSHAN NEPALI.jpeg';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Nirjal Tamang",
      role: "Student",
      image: t1,
      content: "The teaching methodology here is excellent. The instructors are very patient and focus on individual progress. Highly recommended for NAT/JLPT preparation.",
      stars: 5
    },
    {
      id: 2,
      name: "Rudra Karki",
      role: "Student",
      image: t2,
      content: "Seven Seas helped me not only with the language training but also with the entire processing for Japan. The environment is very supportive.",
      stars: 5
    },
    {
      id: 3,
      name: "Suman Bishwakarma",
      role: "Student",
      image: t3,
      content: "The interactive classes and language training were very practical. I felt confident during my interviews thanks to the professional guidance I received here.",
      stars: 5
    },
    {
      id: 4,
      name: "Aarya Yonjan",
      role: "Student",
      image: t4,
      content: "Found my path to Japan through Seven Seas. The staff is incredibly knowledgeable and supportive throughout the documentation process.",
      stars: 5
    },
    {
      id: 5,
      name: "Alank Khadka",
      role: "Student",
      image: t5,
      content: "Best place for Japanese language learning in town. The interactive classes and regular mock tests helped me clear my NAT test in the first attempt.",
      stars: 5
    },
    {
      id: 6,
      name: "Ashmi Goley",
      role: "Student",
      image: t6,
      content: "I'm grateful for the counseling I received. They helped me choose the right school and city in Japan based on my career goals.",
      stars: 5
    },
    {
      id: 7,
      name: "Ganesh Rai",
      role: "Student",
      image: t7,
      content: "Highly professional environment. The dedication of the teachers is what sets Seven Seas apart from other institutes.",
      stars: 5
    },
    {
      id: 8,
      name: "Roshan Nepali",
      role: "Student",
      image: roshan,
      content: "A truly transformative experience. The cultural immersion and language focus provided here are unmatched. Highly recommended!",
      stars: 5
    }
  ];

  return (
    <Section background="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4 block"
        >
          Success Stories
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight"
        >
          What Our <span className="text-brand-orange">Clients</span> Say
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 leading-relaxed"
        >
          Discover how Seven Seas Education has empowered individuals to achieve their dreams of studying in Japan.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/40 border border-slate-100 hover:border-brand-orange/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -mr-10 -mt-10 group-hover:bg-brand-orange/5 transition-colors" />
            
            <div className="relative z-10">
              <div className="text-brand-orange mb-6 flex justify-between items-start">
                <div className="flex gap-1">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <MessageSquareQuote size={40} className="opacity-10 group-hover:opacity-30 transition-opacity" />
              </div>

              <p className="text-slate-600 italic leading-relaxed mb-10 text-lg">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4 border-t border-slate-50 pt-8 mt-2">
                <div className="relative">
                   <div className="absolute -inset-2.5 bg-brand-orange/20 rounded-full blur group-hover:scale-110 transition-transform" />
                   <div className="relative w-40 h-40 rounded-full bg-white p-1 border-[8px] border-white shadow-2xl shadow-slate-300 overflow-hidden">
                     <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full rounded-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" 
                    />
                   </div>
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 group-hover:text-brand-orange transition-colors">{item.name}</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
