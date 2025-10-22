import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lock, Zap, Droplet, AlertTriangle } from 'lucide-react';

const Slide7 = ({ language }) => {
  const content = {
    en: {
      title: 'BSL-4: Maximum Safety Laboratory',
      subtitle: 'Extreme Risk - Exotic & Deadly Pathogens',
      description: 'Highest biosafety level for extremely dangerous pathogens with no known treatment or vaccine.',
      examples: 'Example Pathogens',
      examplesList: [
        'Ebola virus',
        'Marburg virus',
        'Lassa fever virus',
        'Crimean-Congo hemorrhagic fever'
      ],
      design: 'Facility Design',
      designList: [
        'Isolated building or zone',
        'Independent power supply',
        'Dedicated ventilation system',
        'Multiple airlocks',
        'Chemical shower decontamination'
      ],
      personnel: 'Personnel Requirements',
      personnelList: [
        'Positive-pressure full-body suits',
        'Supplied air systems',
        'Extensive specialized training',
        'Medical monitoring',
        'Psychological evaluation'
      ],
      waste: 'Waste Management',
      wasteText: 'All waste must be sterilized before leaving the laboratory using autoclaves and chemical treatment.',
      imageAlt: 'Scientist in positive-pressure suit inside BSL-4 laboratory facility'
    },
    ar: {
      title: 'المستوى الرابع: مختبر السلامة القصوى',
      subtitle: 'خطر شديد - مسببات أمراض غريبة وقاتلة',
      description: 'أعلى مستوى للسلامة الحيوية لمسببات الأمراض الخطيرة للغاية بدون علاج أو لقاح معروف.',
      examples: 'أمثلة على مسببات الأمراض',
      examplesList: [
        'فيروس إيبولا',
        'فيروس ماربورغ',
        'فيروس حمى لاسا',
        'حمى القرم والكونغو النزفية'
      ],
      design: 'تصميم المنشأة',
      designList: [
        'مبنى أو منطقة معزولة',
        'إمداد طاقة مستقل',
        'نظام تهوية مخصص',
        'أقفال هوائية متعددة',
        'إزالة التلوث بالدش الكيميائي'
      ],
      personnel: 'متطلبات الموظفين',
      personnelList: [
        'بدلات كاملة بضغط إيجابي',
        'أنظمة إمداد الهواء',
        'تدريب متخصص مكثف',
        'المراقبة الطبية',
        'التقييم النفسي'
      ],
      waste: 'إدارة النفايات',
      wasteText: 'يجب تعقيم جميع النفايات قبل مغادرة المختبر باستخدام أجهزة التعقيم والمعالجة الكيميائية.',
      imageAlt: 'عالم في بدلة ضغط إيجابي داخل منشأة مختبر المستوى الرابع'
    }
  };

  const t = content[language];

  return (
    <div className="h-[600px] bg-gradient-to-br from-red-50 via-pink-50 to-red-100 p-8 overflow-y-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-pink-600 rounded-full mb-4 shadow-2xl">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-2">{t.title}</h2>
          <p className="text-xl text-red-700 font-semibold">{t.subtitle}</p>
          <p className="text-lg text-slate-600 mt-2">{t.description}</p>
        </motion.div>

        {/* Warning Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-r from-red-600 to-pink-600 rounded-xl p-4 mb-6 text-center shadow-xl"
        >
          <div className="flex items-center justify-center gap-3">
            <AlertTriangle className="w-8 h-8 text-white" />
            <p className="text-xl font-bold text-white">MAXIMUM CONTAINMENT - AUTHORIZED PERSONNEL ONLY</p>
            <AlertTriangle className="w-8 h-8 text-white" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Examples */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <Droplet className="w-6 h-6 text-red-600" />
              <h3 className="text-xl font-bold text-slate-800">{t.examples}</h3>
            </div>
            <ul className="space-y-2">
              {t.examplesList.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-700 bg-red-50 p-3 rounded-lg border border-red-200">
                  <span className="text-red-600 font-bold text-xl">☣</span>
                  <span className="font-semibold">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Design */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-blue-600" />
              <h3 className="text-xl font-bold text-slate-800">{t.design}</h3>
            </div>
            <ul className="space-y-2">
              {t.designList.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-700">
                  <span className="text-blue-500 mt-1 font-bold">▪</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Personnel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-purple-600" />
              <h3 className="text-xl font-bold text-slate-800">{t.personnel}</h3>
            </div>
            <ul className="space-y-2">
              {t.personnelList.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-slate-700">
                  <span className="text-purple-500 mt-1 font-bold">▪</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Waste */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 shadow-lg text-white"
          >
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-6 h-6" />
              <h3 className="text-xl font-bold">{t.waste}</h3>
            </div>
            <p className="text-white/90 leading-relaxed">{t.wasteText}</p>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-6 rounded-xl overflow-hidden shadow-2xl border-4 border-red-400"
        >
          <img alt={t.imageAlt} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1599318524598-6274dfab44ec" />
        </motion.div>
      </div>
    </div>
  );
};

export default Slide7;