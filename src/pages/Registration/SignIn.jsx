import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  GraduationCap,
  Mail,
  Lock,
  User,
  AlertCircle,
  EyeIcon,
  EyeOffIcon,
  BookOpen,
  UserCheck,
} from "lucide-react";

const SignIn = () => {
  const [accountType, setAccountType] = useState("student");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !password) {
      setError("يرجى ملء جميع الحقول المطلوبة لإنشاء حسابك");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      console.log({ accountType, fullName, email, password });
      navigate("/dashboard");
    } catch (err) {
      setError("حدث خطأ أثناء إنشاء الحساب");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 flex items-center justify-center p-4"
      dir="rtl"
    >
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <GraduationCap className="w-7 h-7 text-white" />
            </div>

            <span className="text-3xl font-bold bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">
              EduHub
            </span>
          </Link>

          <p className="text-muted-foreground text-lg">
            أهلاً بك! قم بإنشاء حسابك التعليمي الآن
          </p>
        </div>

        <div className="border border-border/50 rounded-xl shadow-xl backdrop-blur-sm bg-card/80 p-6">
          <h2 className="text-xl font-semibold mb-1">إنشاء حساب جديد</h2>
          <p className="text-sm text-muted-foreground mb-6">
            اختر نوع حسابك ثم أدخل بياناتك الشخصية لتفعيل الحساب
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* اختيار نوع الحساب */}
            <div className="space-y-2">
              <label className="text-sm font-medium">تسجيل كـ :</label>
              <div className="grid grid-cols-3 gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setAccountType("student")}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition duration-200 cursor-pointer ${
                    accountType === "student"
                      ? "border-blue-500 bg-blue-500/5 text-blue-600 font-semibold"
                      : "border-border bg-background text-muted-foreground hover:bg-slate-50"
                  }`}
                >
                  <User className="w-5 h-5 mb-1" />
                  <span className="text-xs">طالب</span>
                </button>

                {/* خيار: مدرس */}
                <button
                  type="button"
                  onClick={() => setAccountType("teacher")}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition duration-200 cursor-pointer ${
                    accountType === "teacher"
                      ? "border-blue-500 bg-blue-500/5 text-blue-600 font-semibold"
                      : "border-border bg-background text-muted-foreground hover:bg-slate-50"
                  }`}
                >
                  <BookOpen className="w-5 h-5 mb-1" />
                  <span className="text-xs">مدرس</span>
                </button>

                {/* خيار: ولي أمر */}
                <button
                  type="button"
                  onClick={() => setAccountType("parent")}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition duration-200 cursor-pointer ${
                    accountType === "parent"
                      ? "border-blue-500 bg-blue-500/5 text-blue-600 font-semibold"
                      : "border-border bg-background text-muted-foreground hover:bg-slate-50"
                  }`}
                >
                  <UserCheck className="w-5 h-5 mb-1" />
                  <span className="text-xs">ولي أمر</span>
                </button>
              </div>
            </div>

            {/* Full Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium">الاسم الكامل</label>
              <div className="relative mt-2">
                <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="محمد أحمد"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full h-11 rounded-lg border border-border bg-background px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium">البريد الإلكتروني</label>
              <div className="relative mt-2">
                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-11 rounded-lg border border-border bg-background px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
                  dir="ltr"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label className="text-sm font-medium">كلمة المرور</label>
              <div className="relative mt-2">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                {showPassword ? (
                  <EyeOffIcon
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground cursor-pointer"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <EyeIcon
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground cursor-pointer"
                    onClick={() => setShowPassword(true)}
                  />
                )}
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-11 rounded-lg border border-border bg-background px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive">
                <AlertCircle className="w-4 h-4" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            {/* Button */}
            <button
              type="submit"
              className="w-full h-11 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "جاري إنشاء الحساب..." : "Sign In"}
            </button>

            {/* Login Link */}
            <p className="text-sm text-center text-muted-foreground">
              لديك حساب بالفعل؟{" "}
              <Link
                to="/login"
                className="text-blue-500 font-bold hover:underline"
              >
                سجل دخولك
              </Link>
            </p>
          </form>
        </div>

        {/* Back */}
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-foreground transition"
          >
            ← العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
