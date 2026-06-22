import React from "react";

// 1. مصفوفة الكروت الكبيرة المميزة (Featured)
const featuredCards = [
  {
    id: 1,
    name: "أحمد حسام",
    role: "مطور واجهات أمامية · القاهرة",
    avatarText: "أح",
    avatarClass: "bg-blue-100 text-blue-600 font-bold border-2 border-blue-200",
    body: "منذ انضمامي لـ EduHub تغيّرت نظرتي للتعلم تماماً. المحتوى منظم باحترافية شديدة وأسلوب التدريس عملي ومباشر. حصلت على شهادتي المعتمدة خلال 3 أشهر فقط وانتقلت لوظيفة أحلامي.",
    isHighlighted: false,
  },
  {
    id: 2,
    name: "سمر المنصوري",
    role: "CTO · شركة Nexus Tech",
    avatarText: "سم",
    avatarClass:
      "bg-white/20 text-white backdrop-blur-sm font-bold border border-white/30",
    body: "كشريك مؤسسي أثق في EduHub لتدريب فريقي الهندسي. الجودة ثابتة والمحتوى يُحدَّث دائماً. النتيجة ظهرت في إنتاجية الفريق خلال أسابيع ونمو ملحوظ في الأداء.",
    isHighlighted: true,
  },
];

// 2. مصفوفة الكروت الصغيرة الذكية (Small Grid)
const smallCards = [
  {
    id: 1,
    name: "مي عبد الله",
    role: "طالبة جامعية",
    avatarText: "مي",
    avatarClass:
      "bg-emerald-100 text-emerald-600 font-bold border border-emerald-200",
    body: "الدعم الفوري جعل تجربتي سلسة جداً. في أي وقت أجد إجابة لسؤالي خلال دقائق معدودة ومتابعة متميزة من الموجهين.",
  },
  {
    id: 2,
    name: "كريم طارق",
    role: "مدير منتج · دبي",
    avatarText: "كر",
    avatarClass:
      "bg-amber-100 text-amber-700 font-bold border border-amber-200",
    body: "أفضل استثمار في حياتي المهنية على الإطلاق. المسارات مصممة بذكاء وتناسب كل المستويات وتواكب سوق العمل.",
  },
  {
    id: 3,
    name: "رنا الشمري",
    role: "مديرة موارد بشرية",
    avatarText: "رن",
    avatarClass: "bg-rose-100 text-rose-600 font-bold border border-rose-200",
    body: "المنصة ساعدتنا على إعادة تأهيل أكثر من 200 موظف بكفاءة وتكلفة أقل بكثير من برامج التدريب التقليدية المعتادة.",
  },
];

// مكون النجوم الـ SVG التفاعلي عالي الجودة
const StarRating = ({ count = 5, className = "text-amber-400" }) => (
  <div className={`flex gap-0.5 justify-end ${className}`}>
    {[...Array(count)].map((_, i) => (
      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
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
        className="w-full bg-slate-50 px-4 sm:px-8 md:px-16 lg:px-[120px] xl:px-[180px] py-16 md:py-24 text-right selection:bg-blue-500 selection:text-white"
        style={{ fontFamily: "'Cairo', sans-serif", direction: "rtl" }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-right mb-14">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-1.5 text-xs md:text-sm font-bold text-blue-600 mb-4 animate-pulse">
              <span>⭐</span> آراء شركاء النجاح
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight mb-4">
              ماذا يقول <br className="hidden md:block" />
              <span className="bg-gradient-to-l from-blue-700 to-blue-500 bg-clip-text text-transparent">
                شركاؤنا وطلابنا؟
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-slate-500 leading-relaxed max-w-[540px]">
              أكثر من <span className="font-bold text-slate-700">10,000+</span>{" "}
              مبتكر وقائد وثقوا بـ EduHub لبناء رحلتهم الاحترافية ومستقبلهم
              المهني.
            </p>
          </div>

          {/* Overall Rating Block */}
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white border border-slate-100 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 mb-14">
            <div className="text-center bg-gradient-to-b from-blue-50/50 to-transparent rounded-2xl p-6 min-w-[160px] border border-blue-50/60">
              <div className="text-6xl md:text-7xl font-black text-blue-600 tracking-tighter">
                4.9
              </div>
              <div className="mt-2 flex justify-center">
                <StarRating className="text-amber-400 gap-0.5" />
              </div>
              <div className="text-xs text-slate-400 mt-2.5 font-bold tracking-wide">
                +2,400 تقييم مؤكد
              </div>
            </div>

            <div className="flex-1 w-full text-right">
              <h3 className="text-sm font-bold text-slate-700 mb-4">
                توزيع تقييمات المنصة
              </h3>

              {/* Bars Row mapping without explicit arrays for readability */}
              <div className="space-y-3.5">
                {/* 5 Stars */}
                <div className="flex items-center gap-3 justify-end">
                  <span className="text-xs font-semibold text-slate-500 w-6 text-left">
                    5★
                  </span>
                  <div className="flex-1 max-w-[320px] h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-l from-blue-600 to-blue-500 rounded-full shadow-inner transition-all duration-500"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                  <span className="text-xs font-bold text-slate-600 w-8 text-right">
                    92%
                  </span>
                </div>

                {/* 4 Stars */}
                <div className="flex items-center gap-3 justify-end">
                  <span className="text-xs font-semibold text-slate-500 w-6 text-left">
                    4★
                  </span>
                  <div className="flex-1 max-w-[320px] h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-l from-blue-600 to-blue-500 rounded-full transition-all duration-500"
                      style={{ width: "6%" }}
                    ></div>
                  </div>
                  <span className="text-xs font-bold text-slate-600 w-8 text-right">
                    6%
                  </span>
                </div>

                {/* 3 Stars */}
                <div className="flex items-center gap-3 justify-end">
                  <span className="text-xs font-semibold text-slate-500 w-6 text-left">
                    3★
                  </span>
                  <div className="flex-1 max-w-[320px] h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-l from-blue-600 to-blue-500 rounded-full transition-all duration-500"
                      style={{ width: "2%" }}
                    ></div>
                  </div>
                  <span className="text-xs font-bold text-slate-600 w-8 text-right">
                    2%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {featuredCards.map((card) => (
              <div
                key={card.id}
                className={`border rounded-3xl p-8 relative flex flex-col justify-between group transform transition-all duration-300 hover:-translate-y-1 ${
                  card.isHighlighted
                    ? "bg-gradient-to-br from-blue-700 to-blue-900 border-blue-700 text-white shadow-xl shadow-blue-900/10"
                    : "bg-white border-slate-100 text-slate-800 shadow-sm hover:shadow-xl"
                }`}
              >
                <div>
                  <span
                    className={`text-7xl font-serif font-black leading-[0.2] block select-none -mt-2 ${
                      card.isHighlighted ? "text-blue-400/20" : "text-slate-200"
                    }`}
                  >
                    “
                  </span>

                  <div className="mb-4">
                    <StarRating
                      className={
                        card.isHighlighted ? "text-amber-300" : "text-amber-400"
                      }
                    />
                  </div>

                  <p
                    className={`text-base leading-relaxed font-medium mb-8 ${
                      card.isHighlighted ? "text-blue-100" : "text-slate-600"
                    }`}
                  >
                    {card.body}
                  </p>
                </div>

                <div className="flex items-center gap-3.5 border-t pt-5 mt-auto border-dashed ${card.isHighlighted ? 'border-white/10' : 'border-slate-100'}">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center text-base tracking-wide flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${card.avatarClass}`}
                  >
                    {card.avatarText}
                  </div>
                  <div className="flex-1 text-right">
                    <div
                      className={`text-base font-extrabold tracking-tight ${card.isHighlighted ? "text-white" : "text-slate-900"}`}
                    >
                      {card.name}
                    </div>
                    <div
                      className={`text-xs font-semibold mt-0.5 ${card.isHighlighted ? "text-blue-300" : "text-slate-400"}`}
                    >
                      {card.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Small Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {smallCards.map((card) => (
              <div
                key={card.id}
                className="bg-white border border-slate-100 rounded-3xl p-6 flex flex-col justify-between group transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-sm"
              >
                <div>
                  <div className="mb-3">
                    <StarRating className="text-amber-400" />
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-medium mb-6">
                    {card.body}
                  </p>
                </div>

                <div className="flex items-center gap-3 border-t border-slate-50 pt-4 mt-auto">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center text-sm flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${card.avatarClass}`}
                  >
                    {card.avatarText}
                  </div>
                  <div className="flex-1 text-right">
                    <div className="text-sm font-extrabold text-slate-900">
                      {card.name}
                    </div>
                    <div className="text-xs font-medium text-slate-400 mt-0.5">
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
