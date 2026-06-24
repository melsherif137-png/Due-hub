import React from "react";
// استيراد الأيقونات من مكتبة react-icons
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

// مصفوفات البيانات لفصلها عن الـ JSX وتنظيف الكود تماماً كما فعلنا سابقاً
const footerLinks = {
  platform: [
    { name: "عن EduHub", href: "#about" },
    { name: "المسارات التعليمية", href: "#tracks" },
    { name: "الدورات والورش", href: "#courses" },
    { name: "أسعار الاشتراكات", href: "#pricing" },
  ],
  support: [
    { name: "مركز المساعدة", href: "#help" },
    { name: "تواصل معنا", href: "#contact" },
    { name: "الأسئلة الشائعة", href: "#faq" },
    { name: "وظائف وشراكات", href: "#careers" },
  ],
  legal: [
    { name: "شروط الاستخدام", href: "#terms" },
    { name: "سياسة الخصوصية", href: "#privacy" },
    { name: "سياسة ملفات التعريف", href: "#cookies" },
  ],
};

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "#",
    color: "hover:text-blue-500 hover:bg-blue-500/10 hover:border-blue-500/20",
  },
  {
    icon: FaTwitter,
    href: "#",
    color: "hover:text-sky-400 hover:bg-sky-400/10 hover:border-sky-400/20",
  },
  {
    icon: FaInstagram,
    href: "#",
    color: "hover:text-pink-500 hover:bg-pink-500/10 hover:border-pink-500/20",
  },
  {
    icon: FaLinkedinIn,
    href: "#",
    color: "hover:text-blue-600 hover:bg-blue-600/10 hover:border-blue-600/20",
  },
  {
    icon: FaGithub,
    href: "#",
    color:
      "hover:text-slate-900 hover:bg-slate-900/10 hover:border-slate-950/20 dark:hover:text-white dark:hover:bg-white/10",
  },
];

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="w-full bg-white border-t border-slate-100 px-4 sm:px-8 md:px-16 lg:px-[120px] xl:px-[180px] pt-16 pb-8 text-right selection:bg-blue-500 selection:text-white overflow-hidden"
      style={{ fontFamily: "'Cairo', sans-serif" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* الجزء العلوي: شبكة الروابط والنشرة البريدية */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-dashed border-slate-100">
          {/* عمود الهوية والتعبير بالمنصة */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl pt-1">🚀</span>
              <span className="text-2xl font-black bg-gradient-to-l from-blue-700 to-blue-500 bg-clip-text text-transparent">
                EduHub
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 font-medium mb-6 max-w-sm">
              منصة تعليمية عربية رائدة تهدف إلى تمكين الشباب العربي وتأهيلهم
              لسوق العمل التقني من خلال مسارات تعليمية وتطبيقية احترافية.
            </p>

            {/* معلومات الاتصال السريعة المحدثة بـ React Icons */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-500 text-xs font-semibold">
                <FiMail size={15} className="text-blue-600" />
                <span>support@eduhub.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-500 text-xs font-semibold">
                <FaPhoneAlt size={13} className="text-blue-600" />
                <span>+20 100 000 0000</span>
              </div>
            </div>
          </div>

          {/* أعمدة الروابط السريعة المستخرجة من المصفوفة */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-black text-slate-900 mb-5">المنصة</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-black text-slate-900 mb-5">
              الدعم والمساعدة
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* عمود الاشتراك في النشرة البريدية (Newsletter) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <h4 className="text-sm font-black text-slate-900 mb-3">
              اشترك في نشرتنا البريدية
            </h4>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500 font-medium mb-4">
              احصل على أحدث المقالات التقنية، النصائح المهنية، وكوبونات الخصم
              الحصرية مباشرة في بريدك.
            </p>

            {/* حقل الإدخال والزر الاحترافي الموحد */}
            <form
              className="w-full flex flex-col sm:flex-row gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full px-4 py-3 text-sm bg-slate-50 border border-slate-100 rounded-xl font-semibold text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-200"
                required
              />
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-1.5 rounded-xl bg-blue-600 px-5 py-3 text-xs font-black text-white shadow-sm shadow-blue-600/10 hover:bg-blue-500 hover:shadow-md transition-all duration-200 whitespace-nowrap active:scale-95"
              >
                اشترك
                <HiOutlineArrowNarrowLeft
                  size={16}
                  className="transition-transform duration-200 group-hover:-translate-x-0.5"
                />
              </button>
            </form>
          </div>
        </div>

        {/* الجزء السفلي: الحقوق وسياسات الخصوصية وأيقونات السوشيال ميديا */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* نص الحقوق وسياسات الخصوصية المختصرة */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center md:text-right">
            <p className="text-xs font-semibold text-slate-400">
              © {new Date().getFullYear()} منصة EduHub. جميع الحقوق محفوظة.
            </p>
            <div className="hidden sm:flex items-center gap-3 text-xs font-semibold text-slate-400">
              <span>·</span>
              {footerLinks.legal.map((link, idx) => (
                <React.Fragment key={idx}>
                  <a
                    href={link.href}
                    className="hover:text-blue-600 transition-colors duration-150"
                  >
                    {link.name}
                  </a>
                  {idx < footerLinks.legal.length - 1 && <span>·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* أزرار قنوات التواصل الاجتماعي التفاعلية المبنية بـ React Icons */}
          <div className="flex items-center gap-2.5">
            {socialLinks.map((social, idx) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  className={`flex h-9 w-9 items-center justify-center rounded-xl border border-slate-100 bg-white text-slate-400 transition-all duration-250 hover:-translate-y-0.5 ${social.color}`}
                >
                  <IconComponent size={14} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
