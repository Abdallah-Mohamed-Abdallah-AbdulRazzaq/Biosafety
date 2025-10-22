import React from 'react';
import { motion } from 'framer-motion';
import { Shield, User, Droplet, AlertTriangle, CheckCircle } from 'lucide-react';

const Slide4 = ({ language }) => {
  const content = {
    en: {
      title: 'BSL-1: Basic Safety Laboratory',
      subtitle: 'Minimal Risk - Well-Characterized Agents',
      description: 'Deals with agents that cannot cause disease in healthy humans.',
      equipment: 'Required Equipment',
      equipmentList: [
        'Lab coat',
        'Gloves',
        'Mask',
        'Goggles',
        'Closed-toe shoes'
      ],
      practices: 'Safety Practices',
      practicesList: [
        'Wash hands regularly',
        'Prevent contamination',
        'Handle samples carefully',
        'Proper waste disposal'
      ],
      emergency: 'Emergency Procedures',
      emergencyList: [
        'Sample spills',
        'Needle-stick injuries',
        'Immediate reporting'
      ],
      preparation: 'Before Starting Work',
      preparationList: [
        'Proper training completed',
        'Vaccinations up to date',
        'Aware of surroundings',
        'Know emergency exits'
      ],
      imageAlt: 'Basic laboratory setup with scientist wearing gloves and lab coat'
    },
    ar: {
      title: 'المستوى الأول: مختبر السلامة الأساسية',
      subtitle: 'خطر ضئيل - عوامل معروفة جيداً',
      description: 'يتعامل مع عوامل لا يمكن أن تسبب المرض للبشر الأصحاء.',
      equipment: 'المعدات المطلوبة',
      equipmentList: [
        'معطف المختبر',
        'قفازات',
        'كمامة',
        'نظارات واقية',
        'أحذية مغلقة'
      ],
      practices: 'ممارسات السلامة',
      practicesList: [
        'غسل اليدين بانتظام',
        'منع التلوث',
        'التعامل مع العينات بعناية',
        'التخلص السليم من النفايات'
      ],
      emergency: 'إجراءات الطوارئ',
      emergencyList: [
        'انسكاب العينات',
        'إصابات الإبر',
        'الإبلاغ الفوري'
      ],
      preparation: 'قبل بدء العمل',
      preparationList: [
        'إكمال التدريب المناسب',
        'تحديث التطعيمات',
        'الوعي بالمحيط',
        'معرفة مخارج الطوارئ'
      ],
      imageAlt: 'إعداد مختبر أساسي مع عالم يرتدي قفازات ومعطف مختبر'
    }
  };

  const t = content[language];

  return (
    <div className="h-[600px] bg-gradient-to-br from-green-50 to-emerald-50 p-8 overflow-y-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-4">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-2">{t.title}</h2>
          <p className="text-xl text-green-700 font-semibold">{t.subtitle}</p>
          <p className="text-lg text-slate-600 mt-2">{t.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Equipment */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <User className="w-6 h-6 text-green-600" />
              <h3 className="text-xl font-bold text-slate-800">{t.equipment}</h3>
            </div>
            <ul className="space-y-2">
              {t.equipmentList.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Practices */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <Droplet className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-800">{t.practices}</h3>
            </div>
            <ul className="space-y-2">
              {t.practicesList.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Emergency */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-lg border-2 border-orange-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-bold text-slate-800">{t.emergency}</h3>
            </div>
            <ul className="space-y-2">
              {t.emergencyList.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Preparation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-bold text-slate-800">{t.preparation}</h3>
            </div>
            <ul className="space-y-2">
              {t.preparationList.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 rounded-xl overflow-hidden shadow-xl border-4 border-green-300"
        >
          <img alt={t.imageAlt} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1582719201918-f1fa99cc3c1d" />
        </motion.div>
      </div>
    </div>
  );
};

export default Slide4;