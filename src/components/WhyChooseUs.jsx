import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, BookOpen, Users, BadgeCheck, ArrowLeft } from "lucide-react";

const featuresData = [
  {
    id: 1,
    icon: Brain,
    title: "تجربة تعلم مخصصة",
    shortDesc: "تابع تقدمك الأكاديمي والعملي بسهولة كاملة عبر لوحة تحكم ذكية.",
    fullDesc:
      "تابع تقدمك الأكاديمي والعملي بسهولة كاملة من خلال لوحة تحكم ذكية، واحصل على توصيات دقيقة لمحتوى متطور يساعدك على تنمية مهاراتك البرمجية والتقنية بشكل مستمر.",
    iconStyle: "bg-violet-50 text-violet-700 border border-violet-100",
  },
  {
    id: 2,
    icon: BookOpen,
    title: "مسارات تعليمية منظمة",
    shortDesc: "تعلم خطوة بخطوة من التأسيس وحتى الاحتراف عبر مسارات مرتبة.",
    fullDesc:
      "تعلم خطوة بخطوة من التأسيس وحتى الاحتراف عبر مسارات مرتبة ومصممـة بعناية فائقة لتصل إلى أهدافك المهنية بوضوح تام وتطبيق عملي مباشر على مشاريع حقيقية.",
    iconStyle: "bg-emerald-50 text-emerald-700 border border-emerald-100",
  },
  {
    id: 3,
    icon: Users,
    title: "مجتمع تعليمي تفاعلي",
    shortDesc: "ناقش الأفكار البرمجية وتبادل الخبرات مع زملائك بالمنصة.",
    fullDesc:
      "ناقش الأفكار البرمجية، شارك حلولك، وتبادل الخبرات الحية مع زملائك الطلاب ومدربين متخصصين داخل المنصة لتبني شبكة علاقات قوية تدعم مسيرتك في سوق العمل.",
    iconStyle: "bg-amber-50 text-amber-700 border border-amber-100",
  },
  {
    id: 4,
    icon: BadgeCheck,
    title: "شهادات وإنجازات معتمدة",
    shortDesc: "احصل على شهادات قوية وموثقة فور إكمالك المسارات التعليمية.",
    fullDesc:
      "احصل على شهادات قوية وموثقة فور إكمالك المسارات التعليمية والتحديات البرمجية، لتثبت كفاءتك وتضيف تميزاً حقيقياً لمعرض أعمالك ملفاتك الشخصية أمام الشركات.",
    iconStyle: "bg-rose-50 text-rose-700 border border-rose-100",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      mass: 0.8,
      delay: i * 0.07,
    },
  }),
};

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-80px",
  });

  return (
    <section
      dir="rtl"
      ref={sectionRef}
      className="w-full bg-slate-50 px-4 sm:px-8 md:px-16 lg:px-[100px] xl:px-[160px] py-12 md:py-24 text-right selection:bg-blue-500 selection:text-white overflow-hidden"
      style={{ fontFamily: "'Cairo', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto flex flex-col">
        {/* الهيدر المتجاوب */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-right max-w-3xl mb-10 md:mb-16">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-xs md:text-sm font-bold text-blue-600 mb-3"
          >
            🚀 لماذا يختار الطلاب EduHub؟
          </motion.div>

          <motion.h2
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1}
            className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-3"
          >
            منصة تعليمية صُممت <br className="hidden lg:block" />
            <span className="bg-gradient-to-l from-blue-700 to-blue-500 bg-clip-text text-transparent">
              لتناسب طريقة تعلمك
            </span>
          </motion.h2>

          <motion.p
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
            className="text-sm sm:text-base lg:text-lg text-slate-500 leading-relaxed"
          >
            نوفر تجربة تعليمية متكاملة تجمع بين المحتوى المنظم، التفاعل المستمر،
            ومتابعة التقدم الفوري لمساعدتك على تحقيق أهدافك.
          </motion.p>
        </div>

        {/* شبكة المحتوى */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-16 w-full lg:items-stretch">
          {/* الجانب الأيمن: كروت رشيقة وواضحة جداً في الموبايل وممتلئة في الكبير */}
          <div className="w-full grid grid-cols-2 gap-3 sm:gap-5">
            {featuresData.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  custom={index + 3}
                  className="group rounded-xl sm:rounded-2xl border border-slate-100 bg-white p-3.5 sm:p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl flex flex-col justify-between h-full"
                >
                  <div className="text-right flex flex-col h-full justify-between">
                    <div>
                      <div
                        className={`mb-2.5 sm:mb-4 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-2xl ${item.iconStyle} transition-transform duration-300 group-hover:scale-110`}
                      >
                        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>

                      {/* تكبير خط عنوان الكارت خطوة في الموبايل */}
                      <h3 className="mb-1 sm:mb-2 text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors duration-200">
                        {item.title}
                      </h3>
                    </div>

                    {/* تكبير خط الوصف خطوة في الموبايل ليصبح واضحاً تماماً وقابلاً للقراءة السريعة */}
                    <div className="text-[13px] sm:text-sm leading-relaxed text-slate-500 font-medium flex-1 mt-1.5">
                      <span className="block lg:hidden">{item.shortDesc}</span>
                      <span className="hidden lg:block">{item.fullDesc}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* الجانب الأيسر: الكارت الكبير المتوافق بالملي */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={featuresData.length + 3}
            className="w-full lg:h-full mt-2 lg:mt-0"
          >
            <div className="relative overflow-hidden h-full rounded-xl sm:rounded-[32px] border border-blue-700/10 bg-gradient-to-br from-slate-900 to-slate-800 p-5 sm:p-8 md:p-10 text-white shadow-xl shadow-slate-950/20 group transform transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between">
              <div className="absolute top-0 left-0 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl transition-opacity duration-500 group-hover:bg-blue-500/20" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <div className="mb-4 sm:mb-5 flex h-10 w-10 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-white/10 text-blue-400 backdrop-blur-md border border-white/10 transition-transform duration-300 group-hover:scale-105">
                    <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  {/* تكبير عنوان البانر خطوة في الموبايل */}
                  <h3 className="text-lg sm:text-2xl md:text-3xl font-black text-white leading-snug">
                    تعلم بشكل منظم، تفاعلي <br className="hidden sm:block" />{" "}
                    وواضح تماماً
                  </h3>

                  {/* تكبير وصف البانر في الموبايل */}
                  <p className="mt-2 sm:mt-3 text-[13px] sm:text-sm md:text-base leading-relaxed text-slate-300 font-medium">
                    كل مسار تعليمي ودورة داخل منصة EduHub صُممت بعناية فائقة
                    بأيدي خبراء الصناعة لتنقلك بسلاسة من مرحلة التأسيس النظري
                    وحتى التطبيق العملي.
                  </p>

                  <div className="mt-4 sm:mt-8 space-y-2 sm:space-y-3.5">
                    <div className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-sm" />
                      <p className="text-[13px] sm:text-sm font-semibold text-slate-200">
                        محتوى هندسي حديث ومُحدّث باستمرار
                      </p>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-sm" />
                      <p className="text-[13px] sm:text-sm font-semibold text-slate-200">
                        مؤشرات بيانية متطورة لمتابعة تقدمك
                      </p>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-sm" />
                      <p className="text-[13px] sm:text-sm font-semibold text-slate-200">
                        ورش عمل تطبيقية وتحديات برمجية تفاعلية
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 pt-4 border-t border-white/5">
                  <button className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 rounded-lg sm:rounded-2xl bg-blue-600 px-4 py-2.5 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-extrabold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/30 active:scale-95">
                    <span>استكشف المسارات والدورات</span>
                    <ArrowLeft
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
