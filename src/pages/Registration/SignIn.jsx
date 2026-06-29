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
  Contact,
} from "lucide-react";

import { useAuth } from "../../auth/AuthContext";

const SignUp = () => {
  const [accountType, setAccountType] = useState("student");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("يرجى ملء جميع الحقول المطلوبة لإنشاء حسابك");
      return;
    }

    if (password !== confirmPassword) {
      setError("كلمتا المرور غير متطابقتين");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      // الاعتماد على دالة register القادمة من السياق (Context)
      await register({
        role: accountType,
        firstName,
        lastName,
        fullName: `${firstName} ${lastName}`.trim(),
        email,
        password,
        confirmPassword,
      });

      navigate("/dashboard");
    } catch (err) {
      setError(err?.message || "حدث خطأ أثناء إنشاء الحساب");
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
              <div className="grid grid-cols-2 gap-2 mt-2">
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
              </div>
            </div>

            {/* الاسم الأول واسم العائلة */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-2">
                <label className="text-sm font-medium">الاسم الأول</label>
                <div className="relative mt-2">
                  <User className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="محمد"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full h-11 rounded-lg border border-border bg-background px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">اسم العائلة</label>
                <div className="relative mt-2">
                  <Contact className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="أحمد"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full h-11 rounded-lg border border-border bg-background px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
            </div>

            {/* البريد الإلكتروني */}
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

            {/* كلمة المرور */}
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

            {/* تأكيد كلمة المرور */}
            <div className="space-y-2">
              <label className="text-sm font-medium">تأكيد كلمة المرور</label>
              <div className="relative mt-2">
                <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                {showConfirmPassword ? (
                  <EyeOffIcon
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground cursor-pointer"
                    onClick={() => setShowConfirmPassword(false)}
                  />
                ) : (
                  <EyeIcon
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground cursor-pointer"
                    onClick={() => setShowConfirmPassword(true)}
                  />
                )}
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full h-11 rounded-lg border border-border bg-background px-3 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* الأخطاء */}
            {error && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive">
                <AlertCircle className="w-4 h-4" />
                <span className="text-sm">{error}</span>
              </div>
            )}

            {/* زر إنشاء الحساب */}
            <button
              type="submit"
              className="w-full h-11 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "جاري إنشاء الحساب..." : "إنشاء الحساب"}
            </button>

            {/* رابط تسجيل الدخول */}
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

        {/* العودة */}
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

export default SignUp;
