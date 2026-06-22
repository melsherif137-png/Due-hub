import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Check, HelpCircle, Sparkles, ArrowLeft } from "lucide-react";

// مصفوفة خطط الأسعار
const pricingPlans = [
  {
    id: 1,
    name: "الخطة الأساسية",
    price: "29",
    description:
      "مثالية للطلاب والمبتدئين الراغبين في استكشاف المجالات البرمجية وتطوير مهاراتهم الأساسية.",
    features: [
      "الوصول إلى 50+ دورة تدريبية",
      "مسارات تعليمية مرتبة ومنظمة",
      "شهادات إتمام رقمية فورية",
      "دعم فني عبر البريد الإلكتروني",
    ],
    buttonText: "ابدأ رحلتك الآن",
    isPopular: false,
  },
  {
    id: 2,
    name: "الخطة الاحترافية",
    price: "79",
    description:
      "الخطة الأكثر طلباً! صُممت خصيصاً لمن يسعى للاحتراف والانتقال المباشر إلى سوق العمل وبناء معرض أعمال قوي وناجح.",
    features: [
      "الوصول غير المحدود لجميع المسارات",
      "تحديات برمجية وورش عمل حية",
      "شهادات معتمدة وموثقة من EduHub",
      "أولوية الدعم الفوري والموجهين 24/7",
      "جلسات مراجعة الكود والمشاريع",
    ],
    buttonText: "اشترك في الخطة الاحترافية",
    isPopular: true, // هدا الكارت اللي في النص اللي حيكبر ويبان قدام
  },
  {
    id: 3,
    name: "خطة الشركات",
    price: "199",
    description:
      "مخصصة للفرق الهندسية والشركات التقنية التي تسعى لرفع كفاءة موظفيها الإنتاجية بأحدث التقنيات.",
    features: [
      "حسابات مخصصة لجميع أعضاء الفريق",
      "لوحة تحكم متطورة للمدراء للمتابعة",
      "مسارات مخصصة حسب احتياج الشركة",
      "مدرب خاص وموجه مخصص للفريق",
    ],
    buttonText: "تواصل مع المبيعات",
    isPopular: false,
  },
];

// كائن حركات الـ Framer Motion الاحترافي
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
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

export default function Pricing() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      dir="rtl"
      ref={sectionRef}
      className="w-full bg-slate-50 px-4 sm:px-8 md:px-16 lg:px-[120px] xl:px-[180px] py-16 md:py-28 text-right selection:bg-blue-500 selection:text-white overflow-hidden"
      style={{ fontFamily: "'Cairo', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          {/* Pill */}
          <motion.div
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-xs md:text-sm font-bold text-blue-600 mb-4 animate-pulse"
          >
            <span>💎</span> خطط الأسعار والاستثمار
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1}
            className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-4"
          >
            استثمر في مستقبلك، <br className="sm:hidden" />
            <span className="bg-gradient-to-l from-blue-700 to-blue-500 bg-clip-text text-transparent">
              اختر خطتك المناسبة
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
            className="text-base md:text-lg text-slate-500 leading-relaxed max-w-2xl"
          >
            خطط مرنة وبسيطة مصممة لتناسب كافة المستويات والأهداف المهنية. لا
            توجد رسوم خفية، ويمكنك إلغاء الاشتراك في أي وقت تريده.
          </motion.p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-4 items-center">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={fadeUpVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index + 2}
              className={`border rounded-[32px] relative flex flex-col justify-between group transform transition-all duration-300 ${
                plan.isPopular
                  ? "bg-gradient-to-br from-slate-900 to-slate-800  ring-blue-600/10 text-white shadow-[0_30px_70px_rgba(29,78,216,0.25)] p-9 md:-translate-y-6 hover:-translate-y-8"
                  : "bg-white border-slate-100 text-slate-800 shadow-sm hover:shadow-xl p-6 z-0 scale-95 hover:scale-[0.98]"
              }`}
            >
              {/* شارة الخطة الأكثر طلباً (Popular Badge) */}
              {plan.isPopular && (
                <div className="absolute -top-4 left-6 right-6 sm:left-auto sm:right-6 inline-flex items-center justify-center gap-1.5 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-black tracking-wide text-white shadow-lg shadow-blue-600/30 animate-bounce">
                  <Sparkles size={12} />
                  الخطة الأكثر طلباً وشهرة
                </div>
              )}

              {/* الجزء العلوي: اسم الخطة والسعر والوصف */}
              <div>
                <h3
                  className={`font-black mb-2.5 ${
                    plan.isPopular
                      ? "text-2xl text-white"
                      : "text-lg text-slate-900"
                  }`}
                >
                  {plan.name}
                </h3>

                <p
                  className={`text-xs sm:text-sm leading-relaxed font-medium mb-6 ${
                    plan.isPopular
                      ? "text-slate-300 min-h-[64px]"
                      : "text-slate-500 min-h-[54px]"
                  }`}
                >
                  {plan.description}
                </p>

                {/* عرض السعر */}
                <div className="flex items-baseline gap-1 mb-6 border-b pb-5 border-dashed border-slate-100/10 group-hover:border-blue-500/10">
                  <span
                    className={`font-black tracking-tight ${
                      plan.isPopular
                        ? "text-5xl text-white"
                        : "text-4xl text-slate-900"
                    }`}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className={`text-xs font-bold ${plan.isPopular ? "text-blue-300" : "text-slate-400"}`}
                  >
                    / شهرياً
                  </span>
                </div>

                {/* قائمة الميزات */}
                <div className="space-y-3.5 mb-8">
                  <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    الميزات المشمولة في الخطة:
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2.5">
                        <div
                          className={`mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full ${
                            plan.isPopular
                              ? "bg-blue-500/20 text-blue-400"
                              : "bg-emerald-50 text-emerald-600 border border-emerald-100"
                          }`}
                        >
                          <Check size={11} className="stroke-[3.5]" />
                        </div>
                        <p
                          className={`font-semibold leading-relaxed ${
                            plan.isPopular
                              ? "text-sm text-slate-200"
                              : "text-xs text-slate-600"
                          }`}
                        >
                          {feature}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* الجزء السفلي: الزر */}
              <div className="mt-auto pt-1">
                <button
                  className={`w-full group inline-flex items-center justify-center gap-2 rounded-2xl shadow-sm transition-all duration-300 active:scale-95 ${
                    plan.isPopular
                      ? "bg-blue-600 text-white hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20 py-4 text-sm font-extrabold"
                      : "bg-slate-100 text-slate-800 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/20 py-3.5 text-xs font-bold"
                  }`}
                >
                  {plan.buttonText}
                  <ArrowLeft
                    size={plan.isPopular ? 16 : 14}
                    className="transition-transform duration-300 group-hover:-translate-x-1"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* الملاحظة السفلية */}
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={6}
          className="mt-16 flex items-center justify-center gap-2 text-sm text-slate-400 font-medium"
        >
          <HelpCircle size={16} />
          <span>
            هل تحتاج لخطة مخصصة أو لديك أي استفسار؟{" "}
            <a
              href="#support"
              className="text-blue-600 font-bold hover:underline transition-all duration-200"
            >
              تحدث مع الدعم الفني
            </a>
          </span>
        </motion.div>
      </div>
    </section>
  );
}
