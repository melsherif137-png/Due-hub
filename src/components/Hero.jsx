import { ShieldCheck, ArrowLeft, Award } from "lucide-react";
import { motion } from "framer-motion";

// Replace with your own illustration
const heroImage = "/Gemini_Generated_Image_ej048pej048pej04.png";

const avatars = [
  "https://i.pravatar.cc/64?img=12",
  "https://i.pravatar.cc/64?img=33",
  "https://i.pravatar.cc/64?img=51",
];

const fadeBlur = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: (i = 0) => ({
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-indigo-50/40 to-white px-6 py-15  lg:px-[120px]  md:px-25 lg:py-16"
    >
      {/* top badge */}
      <motion.div
        variants={fadeBlur}
        initial="hidden"
        animate="visible"
        custom={0}
        className="lg:mt-5 my-5 flex justify-start"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm backdrop-blur">
          <span>مستقبل التعليم الذكي هنا</span>
          <ShieldCheck size={16} className="text-blue-600" />
        </div>
      </motion.div>

      <div className="mx-auto lg:flex-row gap-4 justify-between items-center md:flex-col-reverse flex flex-col-reverse">
        {/* text column (renders on the right in RTL) */}
        <div className="order-2 lg:order-1 flex-1">
          <motion.h1
            variants={fadeBlur}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            تعلم بذكاء، انجز بفعالية
            <br />
            <span className="text-blue-700">وارسم مستقبلك</span>
            <br />
            اليوم
          </motion.h1>

          <motion.p
            variants={fadeBlur}
            initial="hidden"
            animate="visible"
            custom={2}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg"
          >
            منصة EduHub توفر لك تجربة تعليمية متكاملة مدعومة بالذكاء الاصطناعي
            لتمكين الطلاب والمعلمين من الوصول إلى أقصى إمكانياتهم في بيئة
            تفاعلية حديثة.
          </motion.p>

          <motion.div
            variants={fadeBlur}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <div className="flex flex-wrap items-center gap-4">
              <button
                className="
    rounded-xl sm:rounded-2xl
    border border-slate-200
    bg-white
    px-4 py-2.5
    sm:px-6 sm:py-3
    lg:px-7 lg:py-3.5
    text-sm sm:text-base
    font-semibold
    text-slate-700
    shadow-sm
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-blue-200
    hover:shadow-lg
    hover:text-blue-700
    cursor-pointer
  "
              >
                استكشف المسارات
              </button>

              <button
                className="
    group
    flex items-center gap-2
    rounded-xl sm:rounded-2xl
    bg-gradient-to-r from-blue-600 to-blue-700
    px-4 py-2.5
    sm:px-6 sm:py-3
    lg:px-7 lg:py-3.5
    text-sm sm:text-base
    font-semibold
    text-white
    shadow-lg shadow-blue-500/25
    transition-all
    duration-300
    hover:-translate-y-1
    hover:shadow-xl
    hover:shadow-blue-500/40
    cursor-pointer
  "
              >
                <ArrowLeft
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                ابدأ رحلتك الآن
              </button>
            </div>
          </motion.div>

          <motion.div
            variants={fadeBlur}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-10 flex items-center gap-3"
          >
            <div className="flex -space-x-3">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  className="h-9 w-9 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <p className="text-sm text-slate-500">
              <span className="font-bold text-slate-800">+10k</span> طالب مسجل
              حالياً
            </p>
          </motion.div>
        </div>

        {/* image column (renders on the left in RTL) */}
        <motion.div
          variants={fadeBlur}
          initial="hidden"
          animate="visible"
          custom={1.5}
          className="order-1 lg:order-3 flex-1"
        >
          <div className="relative mx-auto max-w-xl">
            {/* Glow */}
            <div className="absolute inset-0  bg-blue-500/20 blur-[100px]" />

            {/* Main Image */}
            <motion.div
              transition={{
                duration: 0.4,
              }}
              className="relative mx-auto w-[320px] sm:w-[380px] lg:w-[500px] rotate-4 hover:rotate-0 transition-all duration-400 ease-in-out lg:mb-12 my-8"
            >
              <div className="overflow-hidden rounded-[32px] border-[6px] border-white shadow-2xl bg-white">
                <img
                  src={heroImage}
                  alt="طالب يتعلم باستخدام جهاز لوحي"
                  className="w-full aspect-[4/4] object-cover"
                />
              </div>
            </motion.div>
            {/* Floating Card */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
    absolute
    bottom-2 right-0
    sm:bottom-4 sm:right-2
    md:-bottom-4 md:right-4
    lg:-bottom-6 lg:right-6
    z-20
  "
            >
              <div
                className="
      flex items-center gap-2 sm:gap-3
      rounded-2xl sm:rounded-3xl
      border border-white/20
      bg-white/10
      px-3 py-2
      sm:px-5 sm:py-4
      backdrop-blur-xl
      shadow-xl
    "
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <Award size={22} />
                </span>

                <div className="text-right">
                  <p className="text-sm sm:text-base font-bold text-white">
                    شهادة معتمدة
                  </p>

                  <p className="text-xs sm:text-sm text-gray-200">
                    تم إكمال الدورة بنجاح
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
