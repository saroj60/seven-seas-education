import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

const translations = {
  EN: {
    nav: {
      home: "Home",
      abroad: "Abroad Study",
      test: "Test Preparation",
      training: "Training",
      gallery: "Gallery",
      contact: "Contact",
      whatsapp: "WhatsApp Us",
      consultation: "Book a Consultation",
      process: "Process",
      docs: "Documents",
      scholarships: "Scholarships",
      counselling: "Educational Counselling",
      processDesc: "Step-by-step roadmap for your study journey.",
      docsDesc: "Essential paperwork and certification details.",
      counsellingDesc: "Personalized expert guidance for your goals.",
      scholarshipsDesc: "Financial aid and award opportunities in Japan.",
      jlpt: "Japanese Proficiency",
      jlptDesc: "Standardized test for certifying Japanese language proficiency.",
      nat: "NAT-TEST",
      natDesc: "Evaluation of the Japanese ability of non-native speakers.",
      jft: "JFT-Basic",
      jftDesc: "Japanese proficiency for Specified Skilled Worker status.",
      jlct: "JLCT Test",
      jlctDesc: "Standardized Japanese testing for global communication.",
      ielts: "IELTS English",
      ieltsDesc: "World's most popular English proficiency test for migration.",
    },
    hero: {
      title: "Your Journey to Japan Begins at",
      japan: "Seven Seas",
      subtitle: "Unlock endless opportunities with professional Japanese language training and expert consultancy. We bridge the gap between your dreams and reality.",
      apply: "Apply Now",
      learnMore: "Learn More",
      studentsSent: "Students Sent",
      visaSuccess: "Visa Success",
      yearsExp: "Years Exp.",
      institute: "Japanese Language Institute",
    },
    home: {
      services: "Our Services",
      expertGuidance: "Expert Guidance for Your Success",
      servicesDesc: "We provide end-to-end solutions for students and professionals looking to build their future in Japan.",
      whyChoose: "Why Choose Seven Seas?",
      elevating: "Elevating Your Career Through Excellence",
      onlineClasses: "Flexible Learning with Online Classes",
      onlineClassesDesc: "We provide intensive online classes for all our courses, allowing you to learn from the comfort of your home at your own convenience.",
      testPrep: "Test Preparation",
      aceTests: "Ace Your Proficiency Tests",
      browseAll: "Browse All Tests",
    },
  },
  NE: {
    nav: {
      home: "गृहपृष्ठ",
      abroad: "वैदेशिक अध्ययन",
      test: "परीक्षा तयारी",
      training: "तालिम",
      gallery: "ग्यालरी",
      contact: "सम्पर्क",
      whatsapp: "ह्वाट्सएप",
      consultation: "काउन्सिलिङ बुक गर्नुहोस्",
      process: "प्रक्रिया",
      docs: "कागजातहरू",
      scholarships: "छात्रवृत्ति",
      counselling: "शैक्षिक परामर्श",
      processDesc: "तपाईको अध्ययन यात्राको लागि चरण-दर-चरण रोडम्याप।",
      docsDesc: "आवश्यक कागजात र प्रमाणीकरण विवरणहरू।",
      counsellingDesc: "तपाईको लक्ष्यहरूको लागि व्यक्तिगत विशेषज्ञ मार्गदर्शन।",
      scholarshipsDesc: "जापानमा आर्थिक सहायता र छात्रवृत्ति अवसरहरू।",
      jlpt: "JLPT परीक्षा",
      jlptDesc: "जापानी भाषा दक्षता प्रमाणित गर्ने विश्वव्यापी परीक्षा।",
      nat: "NAT-टेस्ट",
      natDesc: "गैर-नेपाली वक्ताहरूको जापानी क्षमताको मूल्याङ्कन।",
      jft: "JFT-बेसिक",
      jftDesc: "विशेष दक्ष कामदारको लागि जापानी भाषा दक्षता।",
      jlct: "JLCT परीक्षा",
      jlctDesc: "विश्वव्यापी सञ्चारका लागि जापानी भाषा परीक्षण।",
      ielts: "IELTS अङ्ग्रेजी",
      ieltsDesc: "बसाइसराइ र उच्च शिक्षाको लागि विश्व प्रसिद्ध अङ्ग्रेजी परीक्षा।",
    },
    hero: {
      title: "जापानको यात्राको सुरुवात",
      japan: "सेभेन सिज",
      subtitle: "व्यावसायिक जापानी भाषा तालिम र विशेषज्ञ परामर्शको साथ अनन्त अवसरहरू खोल्नुहोस्। हामी तपाईंको सपना र वास्तविकता बीचको खाडललाई जोड्दछौं।",
      apply: "अहिले आवेदन दिनुहोस्",
      learnMore: "थप जान्नुहोस्",
      studentsSent: "पठाएका विद्यार्थीहरू",
      visaSuccess: "भिसा सफलता",
      yearsExp: "वर्षको अनुभव",
      institute: "जापानी भाषा संस्थान",
    },
    home: {
      services: "हाम्रा सेवाहरू",
      expertGuidance: "तपाईंको सफलताको लागि विशेषज्ञ मार्गदर्शन",
      servicesDesc: "हामी जापानमा आफ्नो भविष्य निर्माण गर्न चाहने विद्यार्थी र पेशेवरहरूको लागि पूर्ण समाधान प्रदान गर्दछौं।",
      whyChoose: "किन सेभेन सिज रोज्ने?",
      elevating: "उत्कृष्टता मार्फत तपाईंको करियरलाई उचाल्दै",
      onlineClasses: "अनलाइन क्लास मार्फत सजिलो सिकाइ",
      onlineClassesDesc: "हामी हाम्रा सबै कोर्षहरूको लागि गहन अनलाइन क्लासहरू प्रदान गर्दछौं, जसले तपाईंलाई आफ्नै सुविधामा घरबाटै सिक्न अनुमति दिन्छ।",
      testPrep: "परीक्षा तयारी",
      aceTests: "आफ्नो दक्षता परीक्षामा सफल हुनुहोस्",
      browseAll: "सबै परीक्षाहरू हेर्नुहोस्",
    },
  },
  JP: {
    nav: {
      home: "ホーム",
      abroad: "留学",
      test: "試験準備",
      training: "トレーニング",
      gallery: "ギャラリー",
      contact: "お問い合わせ",
      whatsapp: "WhatsApp",
      consultation: "相談を予約する",
      process: "プロセス",
      docs: "書類",
      scholarships: "奨学金",
      counselling: "教育カウンセリング",
      processDesc: "あなたの留学への道のりのステップバイステップガイド。",
      docsDesc: "必要書類と証明書の詳細情報。",
      counsellingDesc: "あなたの目標へのパーソナライズされたガイダンス。",
      scholarshipsDesc: "日本での奨学金と財政支援の機会。",
      jlpt: "日本語能力試験",
      jlptDesc: "日本語能力を認定するための世界最大の試験。",
      nat: "NAT-TEST",
      natDesc: "日本語を母国語としない者の能力を評価する試験。",
      jft: "JFT-Basic",
      jftDesc: "特定技能資格のための日本語能力試験。",
      jlct: "JLCT技能検定",
      jlctDesc: "グローバルなコミュニケーションのための日本語試験。",
      ielts: "IELTS英語",
      ieltsDesc: "移住と留学のための世界で最も人気のある英語試験。",
    },
    hero: {
      title: "日本への道はここから始まる",
      japan: "セブンシーズ",
      subtitle: "専門的な日本語トレーニングとエキスパートコンサルタンシーで、無限の可能性を広げましょう。私たちはあなたの夢と現実の架け橋となります。",
      apply: "今すぐ申し込む",
      learnMore: "詳細を見る",
      studentsSent: "送り出した学生",
      visaSuccess: "ビザ成功率",
      yearsExp: "経験年数",
      institute: "日本語学校",
    },
    home: {
      services: "私たちのサービス",
      expertGuidance: "あなたの成功のための専門的ガイダンス",
      servicesDesc: "日本で未来を築こうとする学生や専門家のために、エンドツーエンドのソリューションを提供します。",
      whyChoose: "なぜセブンシーズなのか？",
      elevating: "卓越性を通じてあなたのキャリアを高める",
      onlineClasses: "オンラインクラスによる柔軟な学習",
      onlineClassesDesc: "すべてのコースで集中的なオンラインクラスを提供しており、自宅から自分のペースで学習することができます。",
      testPrep: "試験準備",
      aceTests: "能力試験に合格する",
      browseAll: "すべての試験を見る",
    },
  },
};

export const LanguageProvider = ({ children }) => {
  // Load from localStorage if available, default to 'EN'
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('site-language');
    return saved || 'EN';
  });

  useEffect(() => {
    localStorage.setItem('site-language', language);
    // You could also set HTML lang attribute here
    document.documentElement.lang = language.toLowerCase();
  }, [language]);

  const t = (path) => {
    const keys = path.split('.');
    let value = translations[language];
    
    for (const key of keys) {
      if (value && value[key]) {
        value = value[key];
      } else {
        // Fallback to English if key missing
        let fallback = translations['EN'];
        for (const fKey of keys) {
          fallback = fallback ? fallback[fKey] : null;
        }
        return fallback || path; // Return key path if both fail
      }
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslate = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslate must be used within a LanguageProvider');
  }
  return context;
};
