import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Wind, Shield, AlertTriangle } from 'lucide-react';

const Slide6 = ({ language }) => {
  const content = {
    en: {
      title: 'BSL-3: High Safety Laboratory',
      subtitle: 'High Risk - Serious or Potentially Lethal',
      description: 'Handles microorganisms that cause serious or potentially deadly diseases.',
      examples: 'Example Pathogens',
      examplesList: [
        'Mycobacterium tuberculosis',
        'SARS-CoV-2',
        'Yellow fever virus',
        'West Nile virus'
      ],
      features: 'Laboratory Features',
      featuresList: [
        'Negative air pressure',
        'HEPA filtration systems',
        'Sealed windows',
        'Self-closing double doors',
        'Directional airflow'
      ],
      practices: 'Safety Practices',
      practicesList: [
        'All work in BSC',
        'N95 respirators required',
        'Face shields mandatory',
        'Authorized personnel only',
        'Decontamination showers available'
      ],
      emergency: 'Spill Response',
      emergencyText: 'Lock area, evacuate, notify supervisor, decontaminate with approved protocols',
      imageAlt: 'BSL-3 laboratory interior with HEPA filters and scientist wearing N95 respirator'
    },
    ar: {
      title: 'المستوى الثالث: مختبر السلامة العالية',
      subtitle: 'خطر عالٍ - خطير أو قاتل محتمل',
      description: 'يتعامل مع الكائنات الدقيقة التي تسبب أمراضاً خطيرة أو قاتلة محتملة.',
      examples: 'أمثلة على مسببات الأمراض',
      examplesList: [
        'المتفطرة السلية',
        'فيروس كورونا المستجد',
        'فيروس الحمى الصفراء',
        'فيروس غرب النيل'
      ],
      features: 'مميزات المختبر',
      featuresList: [
        'ضغط هواء سلبي',
        'أنظمة ترشيح HEPA',
        'نوافذ محكمة الإغلاق',
        'أبواب مزدوجة ذاتية الإغلاق',
        'تدفق هواء اتجاهي'
      ],
      practices: 'ممارسات السلامة',
      practicesList: [
        'جميع الأعمال في خزانة السلامة',
        'أقنعة N95 مطلوبة',
        'واقيات الوجه إلزامية',
        'الموظفون المصرح لهم فقط',
        'دشات إزالة التلوث متاحة'
      ],
      emergency: 'الاستجابة للانسكاب',
      emergencyText: 'إغلاق المنطقة، الإخلاء، إخطار المشرف، إزالة التلوث بالبروتوكولات المعتمدة',
      imageAlt: 'داخل مختبر المستوى الثالث مع مرشحات HEPA وعالم يرتدي قناع N95'
    }
  };

  const t = content[language];

  return (
    <div className="h-[600px] bg-gradient-to-br from-orange-50 to-red-50 p-8 overflow-y-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mb-4">
            <Microscope className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-2">{t.title}</h2>
          <p className="text-xl text-orange-700 font-semibold">{t.subtitle}</p>
          <p className="text-lg text-slate-600 mt-2">{t.description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Examples */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-bold text-slate-800">{t.examples}</h3>
            </div>
            <ul className="space-y-2">
              {t.examplesList.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-700 bg-red-50 p-2 rounded">
                  <span className="text-red-500 font-bold">⚠</span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <Wind className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-800">{t.features}</h3>
            </div>
            <ul className="space-y-2">
              {t.featuresList.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-700">
                  <span className="text-blue-500 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Practices */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-bold text-slate-800">{t.practices}</h3>
            </div>
            <ul className="space-y-2">
              {t.practicesList.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-700">
                  <span className="text-purple-500 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Emergency */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 shadow-lg text-white"
          >
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6" />
              <h3 className="text-xl font-bold">{t.emergency}</h3>
            </div>
            <p className="text-white/90 leading-relaxed">{t.emergencyText}</p>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 rounded-xl overflow-hidden shadow-xl border-4 border-orange-300"
        >
          <img alt={t.imageAlt} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1691935152684-ea61702ec5c9" />
        </motion.div>
      </div>
    </div>
  );
};

export default Slide6;