import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Shield, AlertTriangle, Microscope, Users, CheckCircle } from 'lucide-react';

const Slide2 = ({ language }) => {
  const content = {
    en: {
      title: 'Contents',
      sections: [
        { icon: BookOpen, text: 'Introduction to Biosafety', color: 'blue' },
        { icon: Shield, text: 'BSL-1: Basic Safety', color: 'green' },
        { icon: AlertTriangle, text: 'BSL-2: Moderate Safety', color: 'yellow' },
        { icon: Microscope, text: 'BSL-3: High Safety', color: 'orange' },
        { icon: Users, text: 'BSL-4: Maximum Safety', color: 'red' },
        { icon: CheckCircle, text: 'Cell Culture & Sample Handling', color: 'purple' }
      ]
    },
    ar: {
      title: 'المحتويات',
      sections: [
        { icon: BookOpen, text: 'مقدمة في السلامة الحيوية', color: 'blue' },
        { icon: Shield, text: 'المستوى الأول: السلامة الأساسية', color: 'green' },
        { icon: AlertTriangle, text: 'المستوى الثاني: السلامة المتوسطة', color: 'yellow' },
        { icon: Microscope, text: 'المستوى الثالث: السلامة العالية', color: 'orange' },
        { icon: Users, text: 'المستوى الرابع: السلامة القصوى', color: 'red' },
        { icon: CheckCircle, text: 'زراعة الخلايا ومعالجة العينات', color: 'purple' }
      ]
    }
  };

  const t = content[language];

  const colorMap = {
    blue: 'from-blue-500 to-cyan-500',
    green: 'from-green-500 to-emerald-500',
    yellow: 'from-yellow-500 to-amber-500',
    orange: 'from-orange-500 to-red-500',
    red: 'from-red-500 to-pink-500',
    purple: 'from-purple-500 to-indigo-500'
  };

  return (
    <div className="h-[600px] bg-gradient-to-br from-slate-50 to-blue-50 p-12" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-slate-800 mb-12 text-center"
      >
        {t.title}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {t.sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-slate-200 hover:border-blue-400 h-full">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${colorMap[section.color]} flex items-center justify-center transform group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-700 flex-1">
                    {section.text}
                  </h3>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 right-8 opacity-10">
        <div className="w-32 h-32 bg-blue-500 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default Slide2;