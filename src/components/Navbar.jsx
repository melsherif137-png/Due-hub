import { useState } from "react";
import {
  GraduationCap,
  Bell,
  UserCircle,
  Search,
  Menu,
  X,
  BookOpen,
  Settings,
  HelpCircle,
  LogIn,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* --- الـ Navbar الرئيسي --- */}
      <nav className="w-full h-16 px-4 md:px-8 flex items-center justify-between bg-white shadow-md fixed top-0 left-0 z-40 dir-rtl">
        {/* الجزء الأيمن: اللوجو + السيرش في الشاشات الكبيرة */}
        <div className="flex items-center gap-4 flex-row-reverse md:flex-row">
          {/* اللوجو */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-md">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EduHub
            </span>
          </Link>

          {/* خانة البحث للشاشات الكبيرة فقط */}
          <div className="hidden md:block rounded-2xl p-[3px] bg-gray-100 transition-all duration-300 focus-within:bg-gradient-to-r focus-within:from-blue-400 focus-within:via-indigo-500 focus-within:to-purple-500 focus-within:shadow-[0_0_25px_rgba(99,102,241,0.25)] ease-in-out">
            <div className="flex items-center bg-white px-4 py-2 rounded-[14px] w-[480px] h-11 justify-between">
              <input
                type="text"
                placeholder="ابحث عن الدورات.."
                className="bg-transparent outline-none px-3 w-full text-sm text-right"
              />
              <Search className="w-5 h-5 text-gray-500" />
            </div>
          </div>
        </div>

        {/* الجزء الأيسر: الأزرار للشاشات الكبيرة / زر البرجر للموبايل */}
        <div className="flex items-center gap-3">
          {/* أزرار الشاشات الكبيرة (تختفي في الموبايل) */}
          <div className="hidden md:flex items-center gap-4">
            <button className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 border border-blue-100 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
              <Bell className="w-6 h-6" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full" />
            </button>
            <Link to="/login">
              <button className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 text-purple-700 border border-purple-100 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
                <UserCircle className="w-6 h-6" />
              </button>
            </Link>
          </div>

          {/* زر البرجر (يظهر في الموبايل فقط على اليسار) */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl bg-gray-50 text-gray-700 border border-gray-200 transition-all duration-300 hover:bg-gray-100 active:scale-95 cursor-pointer"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* --- الـ Sidebar الاحترافي للموبايل --- */}
      {/* الخلفية المظلمة الشفافة (Overlay) */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity duration-300 md:hidden ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* لوحة الـ Sidebar نفسها */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* الهيدر الخاص بالـ Sidebar */}
        <div className="p-4 flex items-center justify-between border-b border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EduHub
            </span>
          </div>
          {/* زر الإغلاق */}
          <button
            onClick={() => setIsOpen(false)}
            className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-50 text-gray-500 hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* خانة البحث داخل الـ Sidebar للموبايل */}
        <div className="p-4">
          <div className="flex items-center bg-gray-50 border border-gray-200 px-3 py-2 rounded-xl">
            <input
              type="text"
              placeholder="ابحث عن الدورات.."
              className="bg-transparent outline-none w-full text-sm text-right pl-2"
            />
            <Search className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* روابط التنقل (Links) */}
        <div
          className="flex-1 px-4 py-2 space-y-1 overflow-y-auto text-right"
          style={{ direction: "rtl" }}
        >
          <Link
            to="/courses"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all"
          >
            <BookOpen className="w-5 h-5 text-gray-400" />
            <span className="font-medium text-sm">الدورات التدريبية</span>
          </Link>

          <Link
            to="/notifications"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-between px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all"
          >
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-gray-400" />
              <span className="font-medium text-sm">الإشعارات</span>
            </div>
            <span className="w-2 h-2 bg-red-600 rounded-full" />
          </Link>

          <Link
            to="/settings"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all"
          >
            <Settings className="w-5 h-5 text-gray-400" />
            <span className="font-medium text-sm">الإعدادات</span>
          </Link>

          <Link
            to="/help"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-xl transition-all"
          >
            <HelpCircle className="w-5 h-5 text-gray-400" />
            <span className="font-medium text-sm">المساعدة والدعم</span>
          </Link>
        </div>

        {/* الجزء السفلي (Footer الـ Sidebar) - زر تسجيل الدخول */}
        <div className="p-4 border-t border-gray-100">
          <Link to="/login" onClick={() => setIsOpen(false)}>
            <button className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 hover:opacity-95 transition-all">
              <LogIn className="w-4 h-4" />
              <span>تسجيل الدخول</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
