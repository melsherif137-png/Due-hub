import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, BookOpen, Users, BadgeCheck, ArrowLeft } from "lucide-react";

// نقل البيانات خارج المكون لتنظيف الـ JSX ومنع التكرار (متناسق مع بنيةReviews)
const featuresData = [
  {
    id: 1,
    icon: Brain,
    title: "تجربة تعلم مخصصة",
    desc: "تابع تقدمك بسهولة واحصل على محتوى يساعدك على تطوير مهاراتك بشكل مستمر.",
    iconStyle: "bg-violet-50 text-violet-700 border border-violet-100",
  },
  {
    id: 2,
    icon: BookOpen,
    title: "مسارات تعليمية منظمة",
    desc: "تعلم خطوة بخطوة من خلال محتوى مرتب ومصمم للوصول لأهدافك بوضوح تام.",
    iconStyle: "bg-emerald-50 text-emerald-700 border border-emerald-100",
  },
  {
    id: 3,
    icon: Users,
    title: "مجتمع تعليمي تفاعلي",
    desc: "ناقش الأفكار وتبادل الخبرات الحية مع طلاب ومدربين متخصصين داخل المنصة.",
    iconStyle: "bg-amber-50 text-amber-700 border border-amber-100",
  },
  {
    id: 4,
    icon: BadgeCheck,
    title: "شهادات وإنجازات",
    desc: "احصل على شهادات معتمدة بعد إكمال المسارات وتتبع إنجازاتك التعليمية الفريدة.",
    iconStyle: "bg-rose-50 text-rose-700 border border-rose-100",
  },
];

// كائن حركات الـ Framer Motion الاحترافي الموحد
const fadeUpVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: "easeOut",
    },
  }),
};

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      dir="rtl"
      ref={sectionRef}
      className="w-full bg-slate-50 px-4 sm:px-8 md:px-16 lg:px-[120px] xl:px-[180px] py-16 md:py-24 text-right selection:bg-blue-500 selection:text-white overflow-hidden"
      style={{ fontFamily: "'Cairo', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* الجانب الأيمن: النصوص الرئيسية وشبكة الميزات */}
          <div className="flex flex-col items-center md:items-start text-center md:text-right">
            {/* Pill */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={0}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-xs md:text-sm font-bold text-blue-600 mb-4 animate-pulse"
            >
              🚀 لماذا يختار الطلاب EduHub؟
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={1}
              className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-4"
            >
              منصة تعليمية صُممت <br className="hidden md:block" />
              <span className="bg-gradient-to-l from-blue-700 to-blue-500 bg-clip-text text-transparent">
                لتناسب طريقة تعلمك
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={2}
              className="text-base md:text-lg text-slate-500 leading-relaxed max-w-xl mb-10"
            >
              نوفر تجربة تعليمية متكاملة تجمع بين المحتوى المنظم، التفاعل
              المستمر، ومتابعة التقدم الفوري لمساعدتك على تحقيق أهدافك التعليمية
              بكفاءة أكبر وسرعة تفوق التوقعات.
            </motion.p>

            {/* شبكة الميزات الأربعة الدقيقة وعالية الجودة */}
            <div className="w-full grid gap-5 sm:grid-cols-2">
              {featuresData.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    variants={fadeUpVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={index + 2}
                    className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                  >
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${item.iconStyle} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <IconComponent size={22} />
                    </div>

                    <h3 className="mb-2.5 text-base font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors duration-200">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-slate-500 font-medium">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* الجانب الأيسر: البانر التفاعلي البصري الكبير (مطابق لروح الـ Highlight Card السابق) */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={5}
            className="w-full lg:sticky lg:top-10"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-blue-700/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-10 text-white shadow-2xl shadow-slate-950/20 group transform transition-all duration-300 hover:-translate-y-1">
              {/* بقعة ضوء خلفية خافتة (Glassmorphism Aura) */}
              <div className="absolute top-0 left-0 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl transition-opacity duration-500 group-hover:bg-blue-500/20" />

              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  {/* رمز الـ Icon العلوي */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-blue-400 backdrop-blur-md border border-white/10 transition-transform duration-300 group-hover:scale-105">
                    <BookOpen size={26} />
                  </div>

                  {/* عنوان البطاقة المميزة */}
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-snug">
                    تعلم بشكل منظم، تفاعلي <br /> وواضح تماماً
                  </h3>

                  {/* نص الوصف البصري */}
                  <p className="mt-4 text-sm md:text-base leading-relaxed text-slate-300 font-medium">
                    كل مسار تعليمي ودورة داخل منصة EduHub صُممت بعناية فائقة
                    بأيدي خبراء الصناعة لتنقلك بسلاسة من مرحلة التأسيس النظري
                    وحتى التطبيق العملي وبناء مشاريع حقيقية تملأ بها معرض
                    أعمالك.
                  </p>

                  {/* قائمة الميزات المدعومة بعلامات ملونة دائرية */}
                  <div className="mt-8 space-y-3.5">
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
                      <p className="text-sm font-semibold text-slate-200">
                        محتوى هندسي حديث ومُحدّث باستمرار
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-violet-400 shadow-sm shadow-violet-400/50" />
                      <p className="text-sm font-semibold text-slate-200">
                        مؤشرات بيانية متطورة لمتابعة تقدمك
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400/50" />
                      <p className="text-sm font-semibold text-slate-200">
                        ورش عمل تطبيقية وتحديات برمجية تفاعلية
                      </p>
                    </div>
                  </div>
                </div>

                {/* زر الإجراء الرئيسي المتجاوب الأنيق */}
                <div className="mt-10 pt-4 border-t border-white/5">
                  <button className="w-full sm:w-auto group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-blue-600 px-6 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/30 active:scale-95">
                    استكشف المسارات والدورات
                    <ArrowLeft
                      size={18}
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
