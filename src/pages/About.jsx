import React from 'react';
import Section from '../components/common/Section';
import { motion } from 'framer-motion';
import { Heart, Award, Users, BookOpen, Globe, Gift, CheckCircle2, Star, ShieldCheck, HeartPulse } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-brand-blue pt-32 pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight">
              About <span className="text-brand-orange">Us</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-medium opacity-90">
              Championing Excellence in Japanese Language & Study Abroad Consultancy Since 2017.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Welcome & Philosophy */}
      <Section background="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-brand-orange mb-6">
              <Heart className="animate-pulse" size={24} />
              <span className="font-bold uppercase tracking-widest text-sm">Welcome to our family</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
              A Warm Welcome from <br /><span className="text-brand-blue">Seven Seas Education</span>
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
              <p className="font-medium text-slate-800">
                You are always welcome to Seven Seas Education Pvt. Ltd. from the bottom of our heart. We are certified by the Ministry of Education of Nepal, established in 2017 A.D.
              </p>
              <p>
                Seven Seas Education Pvt. Ltd. always focuses on giving students true information about Japan, Japanese culture and traditions so that they can feel easier and tensionless in Nepal, even after their entry into Japan.
              </p>
              <p>
                Our team is packed with experience and mature professionals. We truly feel our responsibility to uplift the level of Japanese education standard in Nepal and expansion of it. We believe in action rather than words.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                alt="Classroom" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-brand-orange text-white p-10 rounded-[2.5rem] shadow-2xl z-20 hidden md:block max-w-xs">
              <ShieldCheck size={40} className="mb-4" />
              <h4 className="font-bold text-xl mb-2">Certified Excellence</h4>
              <p className="text-sm opacity-90 font-medium">Ministry of Education, Nepal Registered (Est. 2017)</p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Team Quote */}
      <section className="bg-slate-950 py-24 text-white relative overflow-hidden text-center">
        <div className="container-custom relative z-10">
          <Users className="mx-auto mb-8 text-brand-orange" size={48} />
          <h2 className="text-4xl font-extrabold mb-12">Our Dedicated Team</h2>
          <p className="text-xl text-slate-400 max-w-4xl mx-auto mb-16 leading-relaxed">
            We feel proud of getting a dedicated and expert team to lead you to succeed in Japanese as well as studying in Japan.
          </p>
          <div className="max-w-2xl mx-auto p-12 bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10 italic text-2xl md:text-3xl font-medium text-blue-200">
            "Coming together is a beginning, Keeping together is progress and Working together is success."
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Section background="bg-slate-50">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-sm">Services</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 italic">Action Rather Than Words</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: BookOpen, title: 'Language Classes', desc: 'Japanese Language classes for any purpose' },
            { icon: Users, title: 'Free Counseling', desc: 'Expert advice about studying in Japan' },
            { icon: Award, title: 'Free Processing', desc: 'Seamless processing for your studies' },
            { icon: Star, title: 'Translation', desc: 'Accurate document translation in Japanese' },
            { icon: Globe, title: 'Cultural Exchange', desc: 'Programs between Japan and Nepal' },
            { icon: HeartPulse, title: 'Nepali for Japanese', desc: 'Classes for Japanese nationals in Nepal' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex items-start gap-6 group hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                <item.icon size={26} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop" 
              alt="Japan Culture" 
              className="rounded-[3rem] shadow-2xl"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight">Benefits & Scope of <br /><span className="text-brand-orange italic">Japanese Language</span></h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p className="text-lg">
                Language is the only way of communication in any circumstance. It is quite difficult to survive in a new environment until and unless you know the language, culture, manners and traditions.
              </p>
              <div className="bg-slate-50 p-6 rounded-2xl border-l-[6px] border-brand-orange text-slate-800 font-bold italic shadow-md">
                "When in Rome, do as Romans do."
              </div>
              <p>
                If you are thinking of going to Japan for work or study, obviously you need Japanese to make yourself comfortable and get rid of unwanted problems. Without it, you will probably find yourself in trouble.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Special Offers Section */}
      <Section background="bg-brand-blue" className="text-white">
        <div className="text-center mb-16">
          <Gift className="mx-auto mb-4 text-brand-orange" size={40} />
          <h2 className="text-4xl md:text-5xl font-black italic">Special Offers & Extras</h2>
          <p className="mt-4 text-blue-100 text-lg opacity-80 underline underline-offset-8">Discounts & More for Our Happy Students</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {[
            'We introduce the best school in Japan',
            'We provide Scholarship opportunities',
            'We provide part-time job assistance',
            'Free Japanese language classes at your convenient time',
            'Free counseling for study abroad in Japan',
            'Special practical language classes',
            'Classes run by expert instructors with variety of materials',
            'Pay after COE/VISA'
          ].map((benefit, idx) => (
            <div key={idx} className="flex gap-4 items-center bg-white/10 p-5 rounded-2xl border border-white/10 backdrop-blur-sm">
              <CheckCircle2 className="text-green-400 shrink-0" size={24} />
              <span className="font-bold text-lg">{benefit}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default About;
