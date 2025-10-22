import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

const Slide1 = ({ language }) => {
  const content = {
    en: {
      title: 'Biosafety Levels',
      subtitle: 'BSL-1 to BSL-4',
      description: 'Understanding Laboratory Safety & Containment',
      imageAlt: 'Modern laboratory with biohazard symbol'
    },
    ar: {
      title: 'مستويات السلامة الحيوية',
      subtitle: 'من BSL-1 إلى BSL-4',
      description: 'فهم السلامة والاحتواء في المختبرات',
      imageAlt: 'مختبر حديث مع رمز الخطر البيولوجي'
    }
  };

  const t = content[language];

  return (
    <div className="relative h-[600px] bg-gradient-to-br from-blue-900 via-slate-800 to-blue-950 overflow-hidden" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center p-12 text-center">
        {/* Biohazard Symbol */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-500 blur-3xl opacity-30 rounded-full" />
            <AlertTriangle className="w-24 h-24 text-yellow-400 relative z-10" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-white mb-4"
        >
          {t.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-3xl md:text-4xl font-semibold text-cyan-400 mb-6"
        >
          {t.subtitle}
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-xl text-blue-200 max-w-2xl"
        >
          {t.description}
        </motion.p>

        {/* Image Placeholder */}
        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-12 w-full max-w-3xl"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl border-4 border-blue-500/30">
            <img alt={t.imageAlt} className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1669101283206-480f531d0f47" />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
          </div>
        </motion.div> */}
      </div>
    </div>
  );
};

export default Slide1;