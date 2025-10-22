import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import Slide1 from '@/components/slides/Slide1';
import Slide2 from '@/components/slides/Slide2';
import Slide3 from '@/components/slides/Slide3';
import Slide4 from '@/components/slides/Slide4';
import Slide5 from '@/components/slides/Slide5';
import Slide6 from '@/components/slides/Slide6';
import Slide7 from '@/components/slides/Slide7';
import Slide8 from '@/components/slides/Slide8';
import Slide9 from '@/components/slides/Slide9';
import Slide10 from '@/components/slides/Slide10';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [language, setLanguage] = useState('en');

  const slides = [
    Slide1, Slide2, Slide3, Slide4, Slide5,
    Slide6, Slide7, Slide8, Slide9, Slide10
  ];

  const totalSlides = slides.length;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const CurrentSlideComponent = slides[currentSlide];

  return (
    <>
      <Helmet>
        <title>Biosafety Levels (BSL-1 to BSL-4) - Professional Presentation</title>
        <meta name="description" content="Comprehensive presentation on biosafety levels from BSL-1 to BSL-4, covering laboratory safety, containment, and microorganism handling." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex flex-col">
        {/* Header */}
        <header className="bg-slate-900/80 backdrop-blur-md border-b border-blue-500/30 px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">⚗️</span>
              </div>
              <h1 className="text-white font-bold text-xl">Biosafety Levels</h1>
            </div>
            
            <Button
              onClick={toggleLanguage}
              variant="outline"
              className="bg-blue-600/20 border-blue-400/50 text-white hover:bg-blue-600/40"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </Button>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center p-4 md:p-8">
          <div className="w-full max-w-6xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden"
              >
                <CurrentSlideComponent language={language} />
              </motion.div>
            </AnimatePresence>
          </div>
        </main>

        {/* Footer Navigation */}
        <footer className="bg-slate-900/80 backdrop-blur-md border-t border-blue-500/30 px-6 py-4">
          <div className="max-w-7xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-300 text-sm">
                  {language === 'en' ? 'Slide' : 'شريحة'} {currentSlide + 1} / {totalSlides}
                </span>
                <span className="text-blue-300 text-sm">
                  {Math.round(((currentSlide + 1) / totalSlides) * 100)}%
                </span>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
              <Button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                variant="outline"
                className="bg-blue-600/20 border-blue-400/50 text-white hover:bg-blue-600/40 disabled:opacity-30"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                {language === 'en' ? 'Previous' : 'السابق'}
              </Button>

              <Button
                onClick={() => goToSlide(0)}
                variant="ghost"
                className="text-blue-300 hover:text-white hover:bg-blue-600/20"
              >
                <Home className="w-5 h-5" />
              </Button>

              <Button
                onClick={nextSlide}
                disabled={currentSlide === totalSlides - 1}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 disabled:opacity-30"
              >
                {language === 'en' ? 'Next' : 'التالي'}
                <ChevronRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Slide Dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-blue-500 w-8'
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </footer>

        <Toaster />
      </div>
    </>
  );
}
/* test 2 */
export default App;