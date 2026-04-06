import React, { useState } from 'react';
import Section from '../components/common/Section';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, Facebook } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappNumber = '9779851228996';
    const message = `Hello Seven Seas Education!%0A%0A*New Inquiry from Website*%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Subject:* ${formData.subject}%0A*Message:* ${formData.message}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    
    setSubmitted(true);
    // Reset after some time
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-brand-blue pt-32 pb-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
        <div className="container-custom text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black mb-6 tracking-tight"
          >
            Get In <span className="text-brand-orange">Touch</span>
          </motion.h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto opacity-90">
            Have questions about Abroad Study? Our experts are here to help you every step of the way.
          </p>
        </div>
      </section>

      <Section background="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Contact Information</h2>
              <p className="text-slate-500">
                Reach out to us through any of these channels or visit our office for a face-to-face consultation.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { icon: Phone, title: 'Call Us', detail: '01591592, 9765341882', sub: 'Sun - Fri, 10am - 5pm' },
                { icon: MessageSquare, title: 'WhatsApp Us', detail: '+977 985-1228996', sub: 'Instant Response' },
                { icon: Mail, title: 'Email Us', detail: 'sevenseas.edu2017@gmail.com', sub: 'We reply within 24 hours' },
                { icon: Facebook, title: 'Facebook Page', detail: 'Seven Seas Education', sub: 'Latest Updates', link: 'https://www.facebook.com/share/1Cm6dh3bSi/?mibextid=wwXIfr' },
                { icon: MapPin, title: 'Visit Us', detail: 'Koteshwor-32, Kathmandu', sub: 'Near Koteshwor Chowk' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start group">
                  <div className={`w-12 h-12 shrink-0 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-orange shadow-sm transition-all ${item.link ? 'group-hover:bg-brand-orange group-hover:text-white' : ''}`}>
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-lg">{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-blue font-bold hover:text-brand-orange transition-colors"
                      >
                        {item.detail}
                      </a>
                    ) : (
                      <p className="text-slate-600 font-medium">{item.detail}</p>
                    )}
                    <p className="text-slate-400 text-sm mt-1">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Google Map */}
            <div className="mt-4 rounded-3xl overflow-hidden shadow-lg border border-slate-100 h-64 relative group">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.0232757692134!2d85.34724837546654!3d27.685651126426475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19679d8165ed%3A0x76e53e0d0c2ae4f3!2sSeven%20Seas%20Education%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1711091234567!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-2xl border border-slate-100 shadow-xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center">Interactive Map Active</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8 flex items-center gap-3">
                Send a Message
                <MessageSquare className="text-brand-orange" />
              </h2>

              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border border-green-100 p-10 rounded-3xl text-center"
                >
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-green-200">
                    <Send size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-600">Thank you for reaching out. We will get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe" 
                        className="bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-brand-blue focus:bg-white transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com" 
                        className="bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-brand-blue focus:bg-white transition-all"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                      <input 
                        required
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="01591592" 
                        className="bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-brand-blue focus:bg-white transition-all"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                      <input 
                        required
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="General Inquiry" 
                        className="bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-brand-blue focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Your Message</label>
                    <textarea 
                      required
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?" 
                      className="bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 outline-none focus:border-brand-blue focus:bg-white transition-all resize-none"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-5 rounded-2xl shadow-xl shadow-brand-orange/20 transition-all active:scale-[0.98] flex items-center justify-center gap-3 text-lg mt-4"
                  >
                    Send Message
                    <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
