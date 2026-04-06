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
      jftDesc: "Measures Japanese proficiency for everyday life and 'Specified Skilled Worker' status.",
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
    tests: {
      jlpt: {
        title: "JLPT Preparation",
        full: "Japanese-Language Proficiency Test",
        desc: "The JLPT is the world's most widely recognized Japanese language test for non-native speakers, used for academic and professional certification.",
        info: "It evaluates language knowledge, reading, and listening skills. Held twice a year internationally, it is the 'Gold Standard' for university admissions and career advancement.",
        frequency: "Twice a year (July & December)",
        levels: "N5 (Beginner) to N1 (Advanced)",
        enroll: "Join our JLPT morning and evening batches for the next intake."
      },
      nat: {
        title: "NAT-TEST Preparation",
        full: "Japanese Language NAT-TEST",
        desc: "The NAT-TEST is an examination that measures the Japanese language ability of students who are not native Japanese speakers.",
        info: "Held 6 times a year, it is widely accepted for study-abroad applications and visa processing by the Immigration Bureau of Japan.",
        frequency: "Six times a year",
        levels: "5Q (Easiest) to 1Q (Most Hard)",
        enroll: "Enroll now for the upcoming NAT April/June intake."
      },
      jft: {
        title: "JFT-Basic Preparation",
        full: "Japan Foundation Test for Basic Japanese",
        desc: "The JFT-Basic measures the Japanese proficiency needed to communicate in everyday life situations for foreign nationals residing in Japan for work.",
        info: "Specifically designed for 'Specified Skilled Worker' (Tokutei Gino) visa applicants, focusing on practical communication at the CEFR A2 level.",
        frequency: "Frequent (Computer-Based Test)",
        levels: "Basic (Equivalent to N4)",
        enroll: "Dedicated SSW preparation classes starting soon."
      },
      jlct: {
        title: "JLCT Preparation",
        full: "Japanese Language Capability Test",
        desc: "A standardized test focusing on the practical application of Japanese language proficiency in real-world scenarios.",
        info: "Recognized internationally for evaluating communication ability for study and employment in Japan, with flexible testing schedules.",
        frequency: "Six times a year",
        levels: "JCT5 to JCT1",
        enroll: "Flexible batch timings for JLCT applicants."
      },
      ielts: {
        title: "IELTS Preparation",
        full: "International English Language Testing System",
        desc: "The premier English language proficiency test for higher education and global migration, respected by thousands of organizations.",
        info: "Our intensive IELTS coaching covers all four modules: Listening, Reading, Writing, and Speaking, with regular mock tests and expert feedback.",
        frequency: "Multiple times per month",
        levels: "Band 1.0 to 9.0",
        enroll: "Expert English training with certified instructors."
      }
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
      jftDesc: "दैनिक जीवन र 'निर्दिष्ट कुशल कामदार' स्थिति (SSW) को लागि जापानी दक्षता।",
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
    tests: {
      jlpt: {
        title: "JLPT तयारी",
        full: "जापानी भाषा दक्षता परीक्षा",
        desc: "JLPT गैर-जापानी वक्ताहरूका लागि विश्वकै सबैभन्दा धेरै मान्यता प्राप्त जापानी भाषा परीक्षा हो, जुन शैक्षिक र व्यावसायिक प्रमाणीकरणका लागि प्रयोग गरिन्छ।",
        info: "यसले भाषा ज्ञान, पढाइ र सुन्ने सीपहरूको मूल्याङ्कन गर्छ। अन्तर्राष्ट्रिय रूपमा वर्षमा दुई पटक आयोजना गरिने यो विश्वविद्यालय भर्ना र करियरको लागि 'गोल्ड स्ट्यान्डर्ड' हो।",
        frequency: "वर्षमा दुई पटक (जुलाई र डिसेम्बर)",
        levels: "N5 (सुरुवात) देखि N1 (उच्च) सम्म",
        enroll: "अर्को भर्नाका लागि हाम्रो JLPT बिहान र बेलुकाको ब्याचमा सामेल हुनुहोस्।"
      },
      nat: {
        title: "NAT-TEST तयारी",
        full: "जापानी भाषा NAT-TEST",
        desc: "NAT-TEST एक परीक्षा हो जसले गैर-जापानी वक्ता भएका विद्यार्थीहरूको जापानी भाषा क्षमता मापन गर्दछ।",
        info: "वर्षमा ६ पटक आयोजना हुने यो परीक्षा जापानमा अध्ययन गर्न जाने विद्यार्थीहरू र भिसा प्रक्रियाका लागि व्यापक रूपमा स्वीकृत छ।",
        frequency: "वर्षमा ६ पटक",
        levels: "5Q (सजिलो) देखि 1Q (गाह्रो) सम्म",
        enroll: "आगामी NAT अप्रिल / जुन सत्रको लागि अहिले नै भर्ना हुनुहोस्।"
      },
      jft: {
        title: "JFT-बेसिक तयारी",
        full: "आधारभूत जापानीका लागि जापान फाउण्डेशन परीक्षा",
        desc: "JFT-बेसिकले जापानमा कामका लागि बस्ने विदेशी नागरिकहरूका लागि दैनिक जीवनमा सञ्चार गर्न आवश्यक जापानी दक्षता मापन गर्दछ।",
        info: "विशेष गरी 'निर्दिष्ट कुशल कामदार' स्थिति (SSW) भिसाका लागि डिजाइन गरिएको, जसले व्यवहारिक कुराकानीमा ध्यान केन्द्रित गर्दछ।",
        frequency: "बारम्बार (कम्प्युटरमा आधारित परीक्षा)",
        levels: "आधारभूत (N4 सरह)",
        enroll: "समर्पित SSW तयारी कक्षाहरू चाँडै सुरु हुँदैछन्।"
      },
      jlct: {
        title: "JLCT तयारी",
        full: "जापानी भाषा क्षमता परीक्षा",
        desc: "वास्तविक संसारमा जापानी भाषाको व्यवहारिक प्रयोगमा ध्यान केन्द्रित गर्ने एक मानक परीक्षा।",
        info: "जापानमा अध्ययन र रोजगारीका लागि सञ्चार क्षमताको मूल्याङ्कन गर्न अन्तर्राष्ट्रिय रूपमा मान्यता प्राप्त परीक्षा।",
        frequency: "वर्षमा ६ पटक",
        levels: "JCT5 देखि JCT1 सम्म",
        enroll: "JLCT आवेदकहरूका लागि लचिलो समय तालिका।"
      },
      ielts: {
        title: "IELTS तयारी",
        full: "अन्तर्राष्ट्रिय अङ्ग्रेजी भाषा परीक्षण प्रणाली",
        desc: "उच्च शिक्षा र विश्वव्यापी बसाइसराइको लागि प्रमुख अङ्ग्रेजी भाषा दक्षता परीक्षा, जसलाई हजारौं संस्थाहरूले सम्मान गर्छन्।",
        info: "हाम्रो IELTS कचिङले सुन्ने, पढ्ने, लेख्ने र बोल्ने चारवटै विधालाई कभर गर्दछ, नियमित परीक्षा र विशेषज्ञ प्रतिक्रियाका साथ।",
        frequency: "महिनामा धेरै पटक",
        levels: "ब्यान्ड १.० देखि ९.०",
        enroll: "प्रमाणित प्रशिक्षकहरूसँग विशेषज्ञ अङ्ग्रेजी तालिम।"
      }
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
      jftDesc: "日常生活や「特定技能」の在留資格取得に必要な日本語能力を測定します。",
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
    tests: {
      jlpt: {
        title: "JLPT 対策",
        full: "日本語能力試験",
        desc: "JLPTは、非母国語話者を対象とした世界で最も広く認められている日本語試験であり、学術的および専門的な資格認定に使用されます。",
        info: "言語知識、読解、聴解を評価します。年に2回、国際的に実施される大学入学やキャリアアップのための「ゴールドスタンダード」です。",
        frequency: "年2回（7月・12月）",
        levels: "N5（初級）からN1（上級）",
        enroll: "次回の合格に向けて、午前と午後のJLPT対策クラスに参加しましょう。"
      },
      nat: {
        title: "NAT-TEST 対策",
        full: "日本語 NAT-TEST",
        desc: "NAT-TESTは、日本語を母国語としない生徒の日本語能力を測定する試験です。",
        info: "年に6回実施され、日本への留学申請や出入国在留管理庁によるビザ審査において広く受け入れられています。",
        frequency: "年6回",
        levels: "5Q（初級）から1Q（上級）",
        enroll: "4月・6月のNAT試験に向けて今すぐお申し込みください。"
      },
      jft: {
        title: "JFT-Basic 対策",
        full: "国際交流基金日本語基礎テスト",
        desc: "JFT-Basicは、日本で働くために滞在する外国人が日常生活で必要な日本語能力を測定する試験です。",
        info: "特に「特定技能」ビザの申請者を対象としており、CEFR A2レベルの実践的なコミュニケーションに焦点を当てています。",
        frequency: "随時実施（CBT方式）",
        levels: "基礎（N4相当）",
        enroll: "特定技能クラスがまもなく開始されます。"
      },
      jlct: {
        title: "JLCT 対策",
        full: "日本語技能検定",
        desc: "日本語能力の実践的な活用に焦点を当てた標準化された試験です。",
        info: "日本での留学や就職に必要なコミュニケーション能力を評価する試験として国際的に認められています。",
        frequency: "年6回",
        levels: "JCT5 から JCT1",
        enroll: "JLCT受験者のための柔軟なクラススケジュール。"
      },
      ielts: {
        title: "IELTS 対策",
        full: "アイエルツ・英語検定",
        desc: "高等教育や海外移住のための主要な英語能力試験であり、数千の機関に認められています。",
        info: "リスニング、リーディング、ライティング、スピーキングの4つのモジュールすべてを網羅し、模擬試験と専門家によるフィードバックを提供します。",
        frequency: "毎月複数回実施",
        levels: "バンド 1.0 から 9.0",
        enroll: "認定講師によるエキスパート英語トレーニング。"
      }
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
