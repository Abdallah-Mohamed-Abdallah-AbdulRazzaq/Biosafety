import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Thermometer, Droplet, Snowflake, FileText } from 'lucide-react';

const Slide8 = ({ language }) => {
  const content = {
    en: {
      title: 'Cell Culture & Sample Handling',
      subtitle: 'Best Practices for Cell Maintenance',
      conditions: 'Basic Conditions',
      conditionsList: [
        'Temperature: 37°C',
        'pH: 7.2-7.4',
        'Humidity: 95%',
        'CO₂: 5%',
        'Sterility maintained'
      ],
      routine: 'Routine Work',
      routineList: [
        'Check confluency daily',
        'Monitor morphology',
        'Subculture at 80-90% confluency',
        'Replace medium every 2-3 days',
        'Document all procedures'
      ],
      cryo: 'Cryopreservation (-196°C)',
      cryoList: [
        'Freeze medium: FBS + 10% DMSO',
        'Controlled rate freezing',
        'Store in liquid nitrogen',
        'Label with date and passage number'
      ],
      thawing: 'Thawing Protocol',
      thawingList: [
        'Thaw quickly at 37°C water bath',
        'Transfer to fresh medium immediately',
        'Replace medium after 24 hours',
        'Allow recovery before experiments'
      ],
      notes: 'Important Notes',
      notesList: [
        'Passage cells frequently',
        'Maintain cell bank',
        'Test for contamination regularly',
        'Keep detailed records'
      ],
      imageAlt: 'Cell culture under microscope with laminar flow hood and cryopreservation equipment'
    },
    ar: {
      title: 'زراعة الخلايا ومعالجة العينات',
      subtitle: 'أفضل الممارسات لصيانة الخلايا',
      conditions: 'الظروف الأساسية',
      conditionsList: [
        'درجة الحرارة: 37 درجة مئوية',
        'الأس الهيدروجيني: 7.2-7.4',
        'الرطوبة: 95%',
        'ثاني أكسيد الكربون: 5%',
        'الحفاظ على التعقيم'
      ],
      routine: 'العمل الروتيني',
      routineList: [
        'فحص الكثافة يومياً',
        'مراقبة الشكل المورفولوجي',
        'الزراعة الفرعية عند 80-90% كثافة',
        'استبدال الوسط كل 2-3 أيام',
        'توثيق جميع الإجراءات'
      ],
      cryo: 'الحفظ بالتبريد (-196 درجة مئوية)',
      cryoList: [
        'وسط التجميد: FBS + 10% DMSO',
        'التجميد بمعدل محكوم',
        'التخزين في النيتروجين السائل',
        'وضع ملصق بالتاريخ ورقم المرور'
      ],
      thawing: 'بروتوكول الذوبان',
      thawingList: [
        'الذوبان السريع في حمام مائي 37 درجة',
        'النقل إلى وسط جديد فوراً',
        'استبدال الوسط بعد 24 ساعة',
        'السماح بالتعافي قبل التجارب'
      ],
      notes: 'ملاحظات مهمة',
      notesList: [
        'تمرير الخلايا بشكل متكرر',
        'الحفاظ على بنك الخلايا',
        'الفحص المنتظم للتلوث',
        'الاحتفاظ بسجلات مفصلة'
      ],
      imageAlt: 'زراعة الخلايا تحت المجهر مع غطاء التدفق الصفحي ومعدات الحفظ بالتبريد'
    }
  };

  const t = content[language];

  return (
    <div className="h-[600px] bg-gradient-to-br from-purple-50 to-indigo-50 p-8 overflow-y-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full mb-4">
            <Microscope className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-2">{t.title}</h2>
          <p className="text-xl text-purple-700 font-semibold">{t.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Conditions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl p-5 shadow-lg border-2 border-blue-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <Thermometer className="w-6 h-6 text-blue-600" />
              <h3 className="text-lg font-bold text-slate-800">{t.conditions}</h3>
            </div>
            <ul className="space-y-1.5">
              {t.conditionsList.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-blue-500 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Routine */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl p-5 shadow-lg border-2 border-green-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-6 h-6 text-green-600" />
              <h3 className="text-lg font-bold text-slate-800">{t.routine}</h3>
            </div>
            <ul className="space-y-1.5">
              {t.routineList.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-green-500 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Cryo */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl p-5 shadow-lg border-2 border-cyan-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <Snowflake className="w-6 h-6 text-cyan-600" />
              <h3 className="text-lg font-bold text-slate-800">{t.cryo}</h3>
            </div>
            <ul className="space-y-1.5">
              {t.cryoList.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-cyan-500 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Thawing */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-xl p-5 shadow-lg border-2 border-orange-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <Droplet className="w-6 h-6 text-orange-600" />
              <h3 className="text-lg font-bold text-slate-800">{t.thawing}</h3>
            </div>
            <ul className="space-y-1.5">
              {t.thawingList.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="text-orange-500 mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Notes */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl p-5 shadow-lg text-white md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-6 h-6" />
              <h3 className="text-lg font-bold">{t.notes}</h3>
            </div>
            <ul className="space-y-1.5">
              {t.notesList.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <span className="mt-0.5">✓</span>
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
          transition={{ delay: 0.7 }}
          className="mt-6 rounded-xl overflow-hidden shadow-xl border-4 border-purple-300"
        >
          <img alt={t.imageAlt} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1602052577122-f73b9710adba" />
        </motion.div>
      </div>
    </div>
  );
};

export default Slide8;