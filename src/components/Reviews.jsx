import React from "react";

// 1. مصفوفة الكروت الكبيرة المميزة (Featured)
const featuredCards = [
  {
    id: 1,
    name: "أحمد حسام",
    role: "مطور واجهات أمامية · القاهرة",
    badge: "🎓 خريج متميز",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-100",
    avatarText: "أح",
    avatarClass: "bg-blue-100 text-blue-600 font-bold border-2 border-blue-200",
    shortBody:
      "منذ انضمامي لـ EduHub تغيّرت نظرتي للتعلم تماماً. المحتوى منظم باحترافية شديدة وأسلوب التدريس عملي ومباشر ومواكب للسوق.",
    fullBody:
      "منذ انضمامي لـ EduHub تغيّرت نظرتي للتعلم تماماً. المحتوى منظم باحترافية شديدة وأسلوب التدريس عملي ومباشر. حصلت على شهادتي المعتمدة خلال 3 أشهر فقط وانتقلت لوظيفة أحلامي بناءً على المشاريع الحقيقية التي قمت بتطبيقها هندسياً.",
    isHighlighted: false,
  },
  {
    id: 2,
    name: "سمر المنصوري",
    role: "CTO · شركة Nexus Tech",
    badge: "💼 شريك استراتيجي",
    badgeClass: "bg-white/10 text-blue-100 border-white/20",
    avatarText: "سم",
    avatarClass:
      "bg-white/20 text-white backdrop-blur-sm font-bold border border-white/30",
    shortBody:
      "كشريك مؤسسي أثق في EduHub لتدريب فريقي الهندسي بالكامل. الجودة ثابتة والمحتوى يُحدَّث دائماً ليواكب الثورة التقنية.",
    fullBody:
      "كشريك مؤسسي أثق في EduHub لتدريب فريقي الهندسي. الجودة ثابتة والمحتوى يُحدَّث دائماً. النتيجة ظهرت في إنتاجية الفريق خلال أسابيع ونمو ملحوظ في الأداء البرمجي وسرعة تسليم المشاريع المعقدة لعملائنا.",
    isHighlighted: true,
  },
];

// 2. مصفوفة الكروت الصغيرة الذكية (Small Grid)
const smallCards = [
  {
    id: 1,
    name: "مي عبد الله",
    role: "طالبة جامعية",
    badge: "⚡ استجابة فورية",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-100",
    avatarText: "مي",
    avatarClass:
      "bg-emerald-100 text-emerald-600 font-bold border border-emerald-200",
    shortBody: "الدعم الفوري جعل تجربتي سلسة جداً بالمنصة ومتابعة مستمرة.",
    fullBody:
      "الدعم الفوري جعل تجربتي سلسة جداً. في أي وقت أجد إجابة لسؤالي خلال دقائق معدودة ومتابعة متميزة من الموجهين والمهندسين لحل أي مشكلة برمجية تواجهني.",
  },
  {
    id: 2,
    name: "كريم طارق",
    role: "مدير منتج · دبي",
    badge: "🚀 نمو مهني",
    badgeClass: "bg-amber-50 text-amber-700 border-amber-100",
    avatarText: "كر",
    avatarClass:
      "bg-amber-100 text-amber-700 font-bold border border-amber-200",
    shortBody: "أفضل استثمار في حياتي المهنية على الإطلاق وتناسب كل المستويات.",
    fullBody:
      "أفضل استثمار في حياتي المهنية على الإطلاق. المسارات مصممة بذكاء وتناسب كل المستويات وتواكب سوق العمل وتختصر عليك سنوات من التشتت والتعلم العشوائي.",
  },
  {
    id: 3,
    name: "رنا الشمري",
    role: "مديرة موارد بشرية",
    badge: "🏢 تدريب شركات",
    badgeClass: "bg-rose-50 text-rose-700 border-rose-100",
    avatarText: "رن",
    avatarClass: "bg-rose-100 text-rose-600 font-bold border border-rose-200",
    shortBody:
      "المنصة ساعدتنا على إعادة تأهيل موظفينا بكفاءة وتكلفة أقل بكثير.",
    fullBody:
      "المنصة ساعدتنا على إعادة تأهيل أكثر من 200 موظف بكفاءة وتكلفة أقل بكثير من برامج التدريب التقليدية المعتادة، مع لوحة تحكم تتابع أداء كل فرد بدقة.",
  },
];

const StarRating = ({ count = 5, className = "text-amber-400" }) => (
  <div className={`flex gap-0.5 justify-end ${className}`}>
    {[...Array(count)].map((_, i) => (
      <svg
        key={i}
        className="w-4 h-4 sm:w-5 h-5 fill-current"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Reviews() {
  return (
    <>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap');`}
      </style>

      <div
        className="w-full bg-slate-50 px-4 sm:px-8 md:px-16 lg:px-[100px] xl:px-[160px] py-12 md:py-24 text-right selection:bg-blue-500 selection:text-white overflow-hidden"
        style={{ fontFamily: "'Cairo', sans-serif", direction: "rtl" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-right mb-10 md:mb-14">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-xs md:text-sm font-bold text-blue-600 mb-3">
              ⭐ آراء شركاء النجاح
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-3">
              ماذا يقول <br className="hidden lg:block" />
              <span className="bg-gradient-to-l from-blue-700 to-blue-500 bg-clip-text text-transparent">
                شركاؤنا وطلابنا؟
              </span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-slate-500 leading-relaxed max-w-2xl">
              أكثر من{" "}
              <span className="font-extrabold text-blue-600">10,000+</span>{" "}
              مبتكر وقائد وثقوا بـ EduHub لبناء رحلتهم الاحترافية ومستقبلهم
              المهني.
            </p>
          </div>

          {/* البلوك الجديد للتقييمات: تم نسف القديم كلياً وإضافة لوحة ذكية وحية */}
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl shadow-blue-950/20 mb-10 md:mb-14 border border-slate-800">
            {/* إضاءات جمالية في الخلفية */}
            <div className="absolute top-0 right-1/4 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/4 h-32 w-32 rounded-full bg-emerald-500/5 blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
              {/* السكور الإجمالي بشكل خاطف للعين مع تأثير التوهج (Glow) */}
              <div className="text-center md:border-l md:border-white/10 md:pl-10 lg:pl-14 flex flex-col items-center min-w-[180px] w-full md:w-auto">
                <span className="text-[11px] font-black text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20 tracking-wider mb-2">
                  التقييم العام
                </span>
                <div className="text-6xl sm:text-7xl font-black text-white tracking-tighter drop-shadow-[0_0_15px_rgba(59,130,246,0.3)] leading-none">
                  4.9
                </div>
                <div className="mt-3">
                  <StarRating className="text-amber-400 gap-0.5" />
                </div>
                <div className="text-[11px] text-slate-400 mt-2.5 font-bold">
                  ⚡ من خلال +2,400 طالب متحقق
                </div>
              </div>

              {/* توزيع النسب مع تلوين بارات التقدم لإضفاء الحيوية بدلاً من اللون الواحد الباهت */}
              <div className="flex-1 w-full text-right space-y-4">
                <h3 className="text-xs sm:text-sm font-black text-slate-200 mb-2 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  مؤشرات الكفاءة والرضا الأكاديمي
                </h3>

                <div className="space-y-3">
                  {/* 5 نجوم - أخضر حيوي */}
                  <div className="flex items-center gap-3 justify-end">
                    <span className="text-[11px] sm:text-xs font-bold text-slate-400 w-6 text-left">
                      5★
                    </span>
                    <div className="flex-1 max-w-xl h-2.5 bg-white/5 rounded-full overflow-hidden p-[1px] border border-white/5">
                      <div
                        className="h-full bg-gradient-to-l from-emerald-500 to-teal-400 rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                        style={{ width: "92%" }}
                      />
                    </div>
                    <span className="text-[11px] sm:text-xs font-extrabold text-emerald-400 w-8 text-right">
                      92%
                    </span>
                  </div>

                  {/* 4 نجوم - أزرق مشرق */}
                  <div className="flex items-center gap-3 justify-end">
                    <span className="text-[11px] sm:text-xs font-bold text-slate-400 w-6 text-left">
                      4★
                    </span>
                    <div className="flex-1 max-w-xl h-2.5 bg-white/5 rounded-full overflow-hidden p-[1px] border border-white/5">
                      <div
                        className="h-full bg-gradient-to-l from-blue-500 to-indigo-400 rounded-full transition-all duration-500 shadow-[0_0_8px_rgba(59,130,246,0.3)]"
                        style={{ width: "6%" }}
                      />
                    </div>
                    <span className="text-[11px] sm:text-xs font-extrabold text-blue-400 w-8 text-right">
                      6%
                    </span>
                  </div>

                  {/* 3 نجوم - برتقالي تحذيري لطيف */}
                  <div className="flex items-center gap-3 justify-end">
                    <span className="text-[11px] sm:text-xs font-bold text-slate-400 w-6 text-left">
                      3★
                    </span>
                    <div className="flex-1 max-w-xl h-2.5 bg-white/5 rounded-full overflow-hidden p-[1px] border border-white/5">
                      <div
                        className="h-full bg-gradient-to-l from-amber-500 to-orange-400 rounded-full transition-all duration-500"
                        style={{ width: "2%" }}
                      />
                    </div>
                    <span className="text-[11px] sm:text-xs font-extrabold text-amber-400 w-8 text-right">
                      2%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
            {featuredCards.map((card) => (
              <div
                key={card.id}
                className={`border rounded-xl sm:rounded-3xl p-5 sm:p-8 relative flex flex-col justify-between group transform transition-all duration-300 hover:-translate-y-1 ${
                  card.isHighlighted
                    ? "bg-gradient-to-br from-blue-700 to-blue-900 border-blue-700 text-white shadow-xl shadow-blue-900/10"
                    : "bg-white border-slate-100 text-slate-800 shadow-sm hover:shadow-xl"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-5xl sm:text-7xl font-serif font-black leading-[0.1] block select-none -mt-4 ${
                        card.isHighlighted
                          ? "text-blue-400/20"
                          : "text-slate-200"
                      }`}
                    >
                      “
                    </span>
                    <span
                      className={`px-2.5 py-1 text-[11px] font-bold rounded-lg border ${card.badgeClass}`}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <div className="mb-3.5">
                    <StarRating
                      className={
                        card.isHighlighted ? "text-amber-300" : "text-amber-400"
                      }
                    />
                  </div>

                  <p
                    className={`text-[13px] sm:text-base leading-relaxed font-medium mb-8 ${
                      card.isHighlighted ? "text-blue-100" : "text-slate-600"
                    }`}
                  >
                    <span className="block lg:hidden">{card.shortBody}</span>
                    <span className="hidden lg:block">{card.fullBody}</span>
                  </p>
                </div>

                <div
                  className={`flex items-center gap-3.5 border-t pt-4 mt-auto border-dashed ${
                    card.isHighlighted ? "border-white/10" : "border-slate-100"
                  }`}
                >
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center text-xs sm:text-base tracking-wide flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${card.avatarClass}`}
                  >
                    {card.avatarText}
                  </div>
                  <div className="flex-1 text-right">
                    <div
                      className={`text-sm sm:text-base font-extrabold tracking-tight ${card.isHighlighted ? "text-white" : "text-slate-900"}`}
                    >
                      {card.name}
                    </div>
                    <div
                      className={`text-[11px] sm:text-xs font-semibold mt-0.5 ${card.isHighlighted ? "text-blue-300" : "text-slate-400"}`}
                    >
                      {card.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Small Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {smallCards.map((card) => (
              <div
                key={card.id}
                className="bg-white border border-slate-100 rounded-xl sm:rounded-3xl p-5 sm:p-6 flex flex-col justify-between group transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <StarRating className="text-amber-400" />
                    <span
                      className={`px-2 py-0.5 text-[10px] font-bold rounded-md border ${card.badgeClass}`}
                    >
                      {card.badge}
                    </span>
                  </div>

                  <p className="text-[13px] sm:text-sm text-slate-600 leading-relaxed font-medium mb-6">
                    <span className="block lg:hidden">{card.shortBody}</span>
                    <span className="hidden lg:block">{card.fullBody}</span>
                  </p>
                </div>

                <div className="flex items-center gap-3 border-t border-slate-50 pt-4 mt-auto">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${card.avatarClass}`}
                  >
                    {card.avatarText}
                  </div>
                  <div className="flex-1 text-right">
                    <div className="text-xs sm:text-sm font-extrabold text-slate-900">
                      {card.name}
                    </div>
                    <div className="text-[11px] font-medium text-slate-400 mt-0.5">
                      {card.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
