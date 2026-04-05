import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';

// Layout & Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import AbroadStudy from './pages/AbroadStudy';
import TestPreparation from './pages/TestPreparation';
import NAT from './pages/Tests/NAT';
import Training from './pages/Training';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();

  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 overflow-x-hidden">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/abroad-study" element={<AbroadStudy />} />
              <Route path="/test-preparation" element={<TestPreparation />} />
              <Route path="/test-preparation/jlpt" element={<NAT />} />
              <Route path="/test-preparation/nat" element={<NAT />} />
              <Route path="/test-preparation/jft" element={<NAT />} />
              <Route path="/test-preparation/jlct" element={<NAT />} />
              <Route path="/training" element={<Training />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
