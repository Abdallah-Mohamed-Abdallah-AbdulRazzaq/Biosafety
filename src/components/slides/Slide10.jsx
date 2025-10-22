import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Slide10 = ({ language }) => {
  const content = {
    en: {
      title: 'References & Credits',
      subtitle: 'Sources and Additional Resources',
      references: [
        {
          title: 'CDC - Biosafety in Microbiological and Biomedical Laboratories (BMBL)',
          description: 'Comprehensive guidelines for biosafety practices',
          icon: BookOpen,
          url: 'https://www.cdc.gov/labs/bmbl'
        },
        {
          title: 'WHO Laboratory Biosafety Manual',
          description: 'International standards for laboratory biosafety',
          icon: BookOpen,
          url: 'https://www.who.int/publications'
        },
        {
          title: 'NIH Guidelines for Recombinant DNA Research',
          description: 'Guidelines for Research Involving Recombinant or Synthetic Nucleic Acid Molecules',
          icon: BookOpen,
          url: 'https://osp.od.nih.gov/biotechnology/nih-guidelines'
        },
        {
          title: 'Course Materials & University Resources',
          description: 'Academic references and educational materials',
          icon: GraduationCap,
          // url: ''
        }
      ],
      // acknowledgment: 'Thank You',
      // acknowledgmentText: 'Thank you for your attention. Stay safe and practice good biosafety!',
      acknowledgment: 'Thank You',
      acknowledgmentText: 'This work was done by student: [Darin Hassan]\nUnder the supervision of Dr. [Doctor Name]\n\nThank you for your attention. Stay safe and practice good biosafety!',
      button: 'View Full References',
      imageAlt: 'Scientific books and reference materials on biosafety'
    },
    ar: {
      title: 'المراجع والاعتمادات',
      subtitle: 'المصادر والموارد الإضافية',
      references: [
        {
          title: 'مركز السيطرة على الأمراض - السلامة الحيوية في المختبرات الميكروبيولوجية والطبية الحيوية',
          description: 'إرشادات شاملة لممارسات السلامة الحيوية',
          icon: BookOpen,
          url: 'https://www.cdc.gov/labs/bmbl'
        },
        {
          title: 'دليل منظمة الصحة العالمية للسلامة الحيوية في المختبرات',
          description: 'المعايير الدولية للسلامة الحيوية في المختبرات',
          icon: BookOpen,
          url: 'https://www.who.int/publications'
        },
        {
          title: 'إرشادات NIH لأبحاث الحمض النووي المؤتلف',
          description: 'إرشادات للبحوث المتعلقة بالأحماض النووية المؤتلفة أو الاصطناعية',
          icon: BookOpen,
          url: 'https://osp.od.nih.gov/biotechnology/nih-guidelines'
        },
        {
          title: 'مواد الدورة والموارد الجامعية',
          description: 'المراجع الأكاديمية والمواد التعليمية',
          icon: GraduationCap,
          // url: ''
        }
      ],
      // acknowledgment: 'شكراً لكم',
      // acknowledgmentText: 'شكراً لاهتمامكم. ابقوا آمنين ومارسوا السلامة الحيوية الجيدة!',
      acknowledgment: 'شكراً لكم',
      acknowledgmentText: 'تم إنجاز هذا العمل بواسطة الطالبة: [دارين حسن]\nتحت إشراف الدكتورة: [اسم الدكتورة]\n\nشكراً لاهتمامكم. ابقوا آمنين ومارسوا السلامة الحيوية الجيدة!',
      button: 'عرض المراجع الكاملة',
      imageAlt: 'كتب علمية ومواد مرجعية حول السلامة الحيوية'
    }
  };

  const t = content[language];


  const handleViewReferences = () => {
    // ضع هنا اسم ملف الـ PDF داخل مجلد public
    // مثال: /references.pdf or /references-en.pdf and /references-ar.pdf
    const pdfPath = language === 'ar' ? '/Biosafety-Levels2.pdf' : '/Biosafety-Levels2.pdf';
    // إذا تستخدم ملف واحد لكل اللغات استعمل: const pdfPath = '/references.pdf';
    window.open(pdfPath, '_blank', 'noopener,noreferrer');
  };


  return (
    <div className="h-[600px] bg-gradient-to-br from-slate-50 to-blue-50 p-8 overflow-y-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mb-4">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-2">{t.title}</h2>
          <p className="text-xl text-blue-700 font-semibold">{t.subtitle}</p>
        </motion.div>

        {/* References */}
        <div className="space-y-4 mb-8">
          {t.references.map((ref, index) => {
            const Icon = ref.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg border-2 border-blue-200 hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => window.open(ref.url, '_blank')}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800 mb-1 flex items-center gap-2 hover:text-blue-600 transition-colors">
                      {ref.title}
                      <ExternalLink className="w-4 h-4 text-blue-500" />
                    </h3>
                    <p className="text-slate-600">{ref.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center mb-8"
        >
          <Button
            onClick={handleViewReferences}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 px-8 py-6 text-lg rounded-xl shadow-lg"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            {t.button}
          </Button>
        </motion.div>

        {/* Acknowledgment */}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-center shadow-2xl"
        >
          <h3 className="text-4xl font-extrabold text-white mb-6 tracking-wide">
            {t.acknowledgment}
          </h3>
          <div className="space-y-6 mb-6">
            {t.acknowledgmentText.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line.includes('[') ? (
                  <p className="text-2xl font-bold text-white leading-relaxed">
                    {line}
                  </p>
                ) : (
                  <p className="text-xl text-white/90 leading-relaxed">
                    {line}
                  </p>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex items-center justify-center gap-3 text-4xl">
            <span>🔬</span>
            <span>🧪</span>
            <span>🌍</span>
            <span>💚</span>
          </div>
        </motion.div>







        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-white mb-3">{t.acknowledgment}</h3>
          <p className="text-xl text-white/90 mb-4">
            {t.acknowledgmentText.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
          <div className="flex items-center justify-center gap-3 text-4xl">
            <span>🔬</span>
            <span>🧪</span>
            <span>🌍</span>
            <span>💚</span>
          </div>
        </motion.div> */}


        {/* <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-8 text-center shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-white mb-3">{t.acknowledgment}</h3>
          <p className="text-xl text-white/90 mb-4">{t.acknowledgmentText}</p>
          <div className="flex items-center justify-center gap-3 text-4xl">
            <span>🔬</span>
            <span>🧪</span>
            <span>🌍</span>
            <span>💚</span>
          </div>
        </motion.div> */}

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-6 rounded-xl overflow-hidden shadow-xl border-4 border-blue-300"
        >
          <img alt={t.imageAlt} className="w-full h-32 object-cover" src="https://images.unsplash.com/photo-1695809711295-381e8cdb7208" />
        </motion.div>
      </div>
    </div>
  );
};

export default Slide10;