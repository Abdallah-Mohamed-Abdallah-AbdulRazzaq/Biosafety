import React from 'react';
import { motion } from 'framer-motion';
import { Shield, TrendingUp, AlertCircle } from 'lucide-react';

const Slide3 = ({ language }) => {
  const content = {
    en: {
      title: 'Introduction to Biosafety',
      definition: 'Biosafety refers to the principles, techniques, and practices implemented to prevent unintentional exposure to pathogens and toxins, or their accidental release.',
      importance: 'Why Biosafety Matters',
      importanceText: 'Protects laboratory workers, the community, and the environment from biological hazards.',
      classification: 'Classification System',
      classificationText: 'Biosafety levels (BSL-1 to BSL-4) are ranked based on the risk level of microorganisms:',
      levels: [
        'BSL-1: Minimal risk',
        'BSL-2: Moderate risk',
        'BSL-3: High risk',
        'BSL-4: Extreme risk'
      ],
      principle: 'Higher Level = More Risk = More Protection',
      imageAlt: 'Biosafety concept illustration with laboratory safety symbols'
    },
    ar: {
      title: 'مقدمة في السلامة الحيوية',
      definition: 'السلامة الحيوية تشير إلى المبادئ والتقنيات والممارسات المطبقة لمنع التعرض غير المقصود لمسببات الأمراض والسموم، أو إطلاقها العرضي.',
      importance: 'أهمية السلامة الحيوية',
      importanceText: 'تحمي العاملين في المختبرات والمجتمع والبيئة من المخاطر البيولوجية.',
      classification: 'نظام التصنيف',
      classificationText: 'يتم تصنيف مستويات السلامة الحيوية (BSL-1 إلى BSL-4) بناءً على مستوى خطورة الكائنات الدقيقة:',
      levels: [
        'المستوى الأول: خطر ضئيل',
        'المستوى الثاني: خطر متوسط',
        'المستوى الثالث: خطر عالٍ',
        'المستوى الرابع: خطر شديد'
      ],
      principle: 'مستوى أعلى = خطر أكبر = حماية أكثر',
      imageAlt: 'رسم توضيحي لمفهوم السلامة الحيوية مع رموز السلامة المختبرية'
    }
  };

  const t = content[language];

  return (
    <div className="h-[600px] bg-gradient-to-br from-white to-slate-100 p-12 overflow-y-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-slate-800 mb-8 text-center"
      >
        {t.title}
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-6">
        {/* Definition */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg"
        >
          <p className="text-lg text-slate-700 leading-relaxed">
            {t.definition}
          </p>
        </motion.div>

        {/* Importance */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-200"
        >
          <div className="flex items-center gap-3 mb-3">
            <Shield className="w-8 h-8 text-green-600" />
            <h3 className="text-2xl font-bold text-slate-800">{t.importance}</h3>
          </div>
          <p className="text-lg text-slate-600">{t.importanceText}</p>
        </motion.div>

        {/* Classification */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-200"
        >
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-8 h-8 text-purple-600" />
            <h3 className="text-2xl font-bold text-slate-800">{t.classification}</h3>
          </div>
          <p className="text-lg text-slate-600 mb-4">{t.classificationText}</p>
          
          <div className="grid grid-cols-2 gap-3">
            {t.levels.map((level, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg ${
                  index === 0 ? 'bg-green-100 border-green-300' :
                  index === 1 ? 'bg-yellow-100 border-yellow-300' :
                  index === 2 ? 'bg-orange-100 border-orange-300' :
                  'bg-red-100 border-red-300'
                } border-2`}
              >
                <p className="font-semibold text-slate-700">{level}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Principle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-6 text-center shadow-xl"
        >
          <AlertCircle className="w-12 h-12 text-white mx-auto mb-3" />
          <p className="text-2xl font-bold text-white">{t.principle}</p>
        </motion.div>

        {/* Image Placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="rounded-xl overflow-hidden shadow-xl border-4 border-blue-300"
        >
          <img alt={t.imageAlt} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1669101283206-480f531d0f47" />
        </motion.div>
      </div>
    </div>
  );
};

export default Slide3;