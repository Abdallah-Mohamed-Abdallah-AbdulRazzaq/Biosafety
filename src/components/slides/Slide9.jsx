import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Globe, Users, Shield } from 'lucide-react';

const Slide9 = ({ language }) => {
  const content = {
    en: {
      title: 'Conclusion',
      subtitle: 'Safe Laboratories, Safe Research, Healthy World',
      points: [
        {
          icon: Shield,
          title: 'Protection',
          text: 'Biosafety levels protect scientists, communities, and the environment from biological hazards.'
        },
        {
          icon: Users,
          title: 'Progressive Control',
          text: 'Each level adds more control, training, and equipment as risk increases from BSL-1 to BSL-4.'
        },
        {
          icon: Heart,
          title: 'Responsibility',
          text: 'Following biosafety protocols is our responsibility to ensure safe and ethical research practices.'
        },
        {
          icon: Globe,
          title: 'Global Impact',
          text: 'Safe laboratories lead to safe research, which ultimately contributes to a healthier world for all.'
        }
      ],
      tagline: 'Safe Laboratories, Safe Research, Healthy World',
      imageAlt: 'Global health and biosafety concept with diverse team of scientists working together'
    },
    ar: {
      title: 'الخلاصة',
      subtitle: 'مختبرات آمنة، أبحاث آمنة، عالم صحي',
      points: [
        {
          icon: Shield,
          title: 'الحماية',
          text: 'تحمي مستويات السلامة الحيوية العلماء والمجتمعات والبيئة من المخاطر البيولوجية.'
        },
        {
          icon: Users,
          title: 'التحكم التدريجي',
          text: 'يضيف كل مستوى المزيد من التحكم والتدريب والمعدات مع زيادة الخطر من المستوى الأول إلى الرابع.'
        },
        {
          icon: Heart,
          title: 'المسؤولية',
          text: 'اتباع بروتوكولات السلامة الحيوية هو مسؤوليتنا لضمان ممارسات بحثية آمنة وأخلاقية.'
        },
        {
          icon: Globe,
          title: 'التأثير العالمي',
          text: 'المختبرات الآمنة تؤدي إلى أبحاث آمنة، مما يساهم في نهاية المطاف في عالم أكثر صحة للجميع.'
        }
      ],
      tagline: 'مختبرات آمنة، أبحاث آمنة، عالم صحي',
      imageAlt: 'مفهوم الصحة العالمية والسلامة الحيوية مع فريق متنوع من العلماء يعملون معاً'
    }
  };

  const t = content[language];

  return (
    <div className="h-[600px] bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-8 overflow-y-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-full mb-4">
            <Globe className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-5xl font-bold text-slate-800 mb-3">{t.title}</h2>
          <p className="text-2xl text-emerald-700 font-semibold">{t.subtitle}</p>
        </motion.div>

        {/* Key Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {t.points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-lg border-2 border-emerald-200 hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{point.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{point.text}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl p-8 text-center shadow-2xl"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Heart className="w-10 h-10 text-white animate-pulse" />
            <Globe className="w-12 h-12 text-white" />
            <Heart className="w-10 h-10 text-white animate-pulse" />
          </div>
          <p className="text-3xl font-bold text-white mb-2">{t.tagline}</p>
          <p className="text-xl text-white/90">🌍</p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-6 rounded-xl overflow-hidden shadow-xl border-4 border-emerald-300"
        >
          <img alt={t.imageAlt} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1607398027635-ef1b467144f5" />
        </motion.div>
      </div>
    </div>
  );
};

export default Slide9;