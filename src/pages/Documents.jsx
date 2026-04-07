import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  GraduationCap, 
  User, 
  Wallet, 
  CheckCircle2, 
  AlertCircle,
  Clock,
  ShieldCheck
} from 'lucide-react';
import Section from '../components/common/Section';
import Breadcrumb from '../components/common/Breadcrumb';

const Documents = () => {
  const documentSections = [
    {
      title: "Academic Documents",
      icon: GraduationCap,
      color: "text-brand-blue",
      bgColor: "bg-blue-50",
      items: [
        "S.L.C. / S.E.E. Marksheet & Character Certificate",
        "+2 / PCL / Plus Two Transcript & Character",
        "Migration Certificate (Original)",
        "Provisional/Original Certificate of Graduation",
        "Language Proficiency Certificate (NAT/JLPT/JFT/JLCT)",
        "Letter of Recommendation from School/College"
      ]
    },
    {
      title: "Personal Documents",
      icon: User,
      color: "text-brand-orange",
      bgColor: "bg-orange-50",
      items: [
        "Valid Passport (with at least 1 year validity)",
        "Birth Registration Certificate (English Translation)",
        "Relationship Certificate with Sponsor (English)",
        "Recent Passport-sized Photographs (8-10 copies)",
        "Citizenship Certificate (English Translation)",
        "Work Experience Letters (if applicable)"
      ]
    },
    {
      title: "Financial Documents",
      icon: Wallet,
      color: "text-green-600",
      bgColor: "bg-green-50",
      items: [
        "3 Years Annual Income Source Verification",
        "Bank Balance Certificate (Minimum 3-4 Million NPR)",
        "Bank Transaction History (Last 6 Months)",
        "Tax Clearance Certificate",
        "Occupation Verification Documents",
        "Property Valuation Report (if required)"
      ]
    }
  ];

  const sidebarInfo = [
    {
      title: "Processing Time",
      desc: "Allow 3-6 months for the Certificate of Eligibility (COE) process.",
      icon: Clock,
      color: "text-sky-500"
    },
    {
      title: "Authenticity",
      desc: "All documents must be original and verified by relevant authorities.",
      icon: ShieldCheck,
      color: "text-indigo-500"
    },
    {
      title: "Translation",
      desc: "All Nepali documents must be translated into English and Japanese.",
      icon: FileText,
      color: "text-brand-orange"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Header */}
      <section className="bg-brand-blue py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Documents <span className="text-brand-orange">Required</span></h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto opacity-90">
              Your comprehensive checklist for a successful study application to Japan. Organization is the first step to your success.
            </p>
          </motion.div>
        </div>
      </section>

      <Section background="bg-white">
        <Breadcrumb items={[{ name: 'Abroad Study', path: '/abroad-study' }, { name: 'Documents Required', path: '/documents' }]} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {documentSections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden"
              >
                <div className={`${section.bgColor} p-8 flex items-center gap-6 border-b border-slate-100`}>
                  <div className={`w-16 h-16 rounded-2xl bg-white flex items-center justify-center ${section.color} shadow-sm`}>
                    <section.icon size={32} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">{section.title}</h3>
                </div>
                <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex gap-3 group">
                      <CheckCircle2 size={18} className="text-green-500 mt-1 shrink-0 group-hover:scale-125 transition-transform" />
                      <p className="text-slate-600 font-medium text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Important Note */}
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               className="bg-orange-50 border-2 border-brand-orange/20 rounded-3xl p-8 flex gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-orange text-white flex items-center justify-center shrink-0 shadow-lg shadow-orange-200">
                <AlertCircle size={24} />
              </div>
              <div>
                <h4 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-wide">Important Technical Tip</h4>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Document consistency is key. Ensure dates, name spellings, and addresses match across all academic, personal, and financial records. Discrepancies may lead to COE rejection.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-slate-900 rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
               <h3 className="text-2xl font-black mb-8 relative z-10">Quick <span className="text-brand-orange">Info</span></h3>
               <div className="space-y-10 relative z-10">
                 {sidebarInfo.map((info, i) => (
                   <div key={i} className="flex gap-5">
                      <div className={`${info.color} mt-1`}>
                        <info.icon size={28} />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{info.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed">{info.desc}</p>
                      </div>
                   </div>
                 ))}
               </div>
               
               <div className="mt-12 pt-10 border-t border-white/10 relative z-10">
                  <p className="font-bold text-brand-orange text-sm mb-4 tracking-widest uppercase">Need help?</p>
                  <button className="w-full bg-white text-slate-900 py-4 rounded-2xl font-black hover:bg-brand-orange hover:text-white transition-all shadow-xl">
                    Get Free Consult
                  </button>
               </div>
            </div>
            

          </div>
        </div>
      </Section>
    </div>
  );
};

export default Documents;
