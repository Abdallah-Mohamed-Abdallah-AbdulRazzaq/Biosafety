import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Lock, Users, Shield } from 'lucide-react';

const Slide5 = ({ language }) => {
  const content = {
    en: {
      title: 'BSL-2: Moderate Safety Laboratory',
      subtitle: 'Moderate Risk - Indigenous Agents',
      description: 'Handles agents that can cause mild diseases, but effective treatment or vaccines are available.',
      standard: 'Standard Practices',
      standardList: [
        'Limited access to laboratory',
        'No mouth pipetting',
        'Hand washing after work',
        'Sharp object management',
        'Decontamination procedures'
      ],
      special: 'Special Practices',
      specialList: [
        'Biohazard warning signs',
        'Biosafety training required',
        'Medical surveillance',
        'Documented safety protocols'
      ],
      equipment: 'Safety Equipment',
      equipmentList: [
        'Biological Safety Cabinet (BSC)',
        'Personal Protective Equipment (PPE)',
        'Face shields when needed',
        'Autoclave for waste'
      ],
      imageAlt: 'BSL-2 laboratory with biohazard warning sign and biological safety cabinet'
    },
    ar: {
      title: 'المستوى الثاني: مختبر السلامة المتوسطة',
      subtitle: 'خطر متوسط - عوامل محلية',
      description: 'يتعامل مع عوامل يمكن أن تسبب أمراضاً خفيفة، لكن العلاج الفعال أو اللقاحات متوفرة.',
      standard: 'الممارسات القياسية',
      standardList: [
        'وصول محدود للمختبر',
        'عدم استخدام الماصة بالفم',
        'غسل اليدين بعد العمل',
        'إدارة الأدوات الحادة',
        'إجراءات إزالة التلوث'
      ],
      special: 'الممارسات الخاصة',
      specialList: [
        'علامات تحذير الخطر البيولوجي',
        'التدريب على السلامة الحيوية مطلوب',
        'المراقبة الطبية',
        'بروتوكولات السلامة الموثقة'
      ],
      equipment: 'معدات السلامة',
      equipmentList: [
        'خزانة السلامة البيولوجية (BSC)',
        'معدات الحماية الشخصية (PPE)',
        'واقيات الوجه عند الحاجة',
        'جهاز التعقيم للنفايات'
      ],
      imageAlt: 'مختبر المستوى الثاني مع علامة تحذير الخطر البيولوجي وخزانة السلامة البيولوجية'
    }
  };

  const t = content[language];

  return (
    <div className="h-[600px] bg-gradient-to-br from-yellow-50 to-amber-50 p-8 overflow-y-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-full mb-4">
            <AlertTriangle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-2">{t.title}</h2>
          <p className="text-xl text-yellow-700 font-semibold">{t.subtitle}</p>
          <p className="text-lg text-slate-600 mt-2">{t.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Standard Practices */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-slate-800">{t.standard}</h3>
            </div>
            <ul className="space-y-2">
              {t.standardList.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Special Practices */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-lg border-2 border-orange-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-orange-600" />
              <h3 className="text-lg font-bold text-slate-800">{t.special}</h3>
            </div>
            <ul className="space-y-2">
              {t.specialList.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Equipment */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-bold text-slate-800">{t.equipment}</h3>
            </div>
            <ul className="space-y-2">
              {t.equipmentList.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Biohazard Warning */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-xl p-6 text-center shadow-xl"
        >
          <AlertTriangle className="w-12 h-12 text-white mx-auto mb-2" />
          <p className="text-xl font-bold text-white">BIOHAZARD - AUTHORIZED PERSONNEL ONLY</p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 rounded-xl overflow-hidden shadow-xl border-4 border-yellow-300"
        >
          <img alt={t.imageAlt} className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1669101283206-480f531d0f47" />
        </motion.div>
      </div>
    </div>
  );
};

export default Slide5;