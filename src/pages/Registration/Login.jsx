import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  GraduationCap,
  Mail,
  Lock,
  AlertCircle,
  EyeIcon,
  EyeOffIcon,
} from "lucide-react";

// المكون يمثل صفحة تسجيل الدخول بالديزاين المتوافق والموحد
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("يرجى إدخال البريد الإلكتروني وكلمة المرور");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      console.log({ email, password });
      navigate("/dashboard");
    } catch (err) {
      setError("حدث خطأ أثناء تسجيل الدخول");
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
        {/* Logo - متوافق تماماً مع التدرج والأبعاد */}
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
            مرحباً بعودتك! سجل دخولك للمتابعة
          </p>
        </div>

        <div className="border border-border/50 rounded-xl shadow-xl backdrop-blur-sm bg-card/80 p-6">
          <h2 className="text-xl font-semibold mb-1">تسجيل الدخول</h2>
          <p className="text-sm text-muted-foreground mb-6">
            أدخل بياناتك للوصول إلى حسابك التعليمي
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
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
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium">كلمة المرور</label>
                <Link
                  to="/forgot-password"
                  className="text-sm text-blue-500 font-semibold hover:underline"
                >
                  نسيت كلمة المرور؟
                </Link>
              </div>

              <div className="relative">
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

            {/* Button - تم تطبيق الـ Gradient الموحد من كود الـ SignIn */}
            <button
              type="submit"
              className="w-full h-11 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
            </button>

            {/* Link to SignIn page - تم توجيه الرابط ليأخذ المستخدم لصفحة الـ SignIn */}
            <p className="text-sm text-center text-muted-foreground">
              ليس لديك حساب؟{" "}
              <Link
                to="/signin"
                className="text-blue-500 font-bold hover:underline"
              >
                سجل الآن
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

export default Login;
