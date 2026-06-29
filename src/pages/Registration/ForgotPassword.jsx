import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Mail,
  AlertCircle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("يرجى إدخل البريد الإلكتروني أولاً");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      // هنا يتم استدعاء الـ API الخاص باستعادة كلمة المرور
      console.log({ email });

      // محاكاة الإرسال بنجاح
      setTimeout(() => {
        setIsSubmitted(true);
        setIsLoading(false);
      }, 1500);
    } catch (err) {
      setError("حدث خطأ أثناء محاولة إرسال الرابط");
      setIsLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 flex items-center justify-center p-4"
      dir="rtl"
    >
      <div className="w-full max-w-md">
        {/* Logo - متوافق بالكامل مع صفحة تسجيل الدخول */}
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
            استعادة الوصول إلى حسابك التعليمي
          </p>
        </div>

        <div className="border border-border/50 rounded-xl shadow-xl backdrop-blur-sm bg-card/80 p-6">
          {!isSubmitted ? (
            <>
              <h2 className="text-xl font-semibold mb-1">نسيت كلمة المرور؟</h2>
              <p className="text-sm text-muted-foreground mb-6">
                أدخل بريدك الإلكتروني وسنقوم بإرسال رابط لإعادة تعيين كلمة
                المرور الخاصة بك.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    البريد الإلكتروني
                  </label>
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

                {/* Error Block */}
                {error && (
                  <div className="flex items-center gap-2 p-3 rounded-lg bg-destructive/10 border border-destructive/20 text-destructive">
                    <AlertCircle className="w-4 h-4" />
                    <span className="text-sm">{error}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full h-11 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition disabled:opacity-50"
                  disabled={isLoading}
                >
                  {isLoading ? "جاري إرسال الرابط..." : "إرسال رابط الاستعادة"}
                </button>
              </form>
            </>
          ) : (
            /* شاشة النجاح المتناسقة بعد الإرسال */
            <div className="text-center py-4">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-500">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <h2 className="text-xl font-semibold mb-2">
                تفقد بريدك الإلكتروني
              </h2>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                لقد قمنا بإرسال رابط إعادة تعيين كلمة المرور إلى البريد
                الإلكتروني: <br />
                <span className="font-semibold text-foreground" dir="ltr">
                  {email}
                </span>
              </p>

              <button
                onClick={() => setIsSubmitted(false)}
                className="text-sm text-blue-500 font-bold hover:underline"
              >
                إعادة المحاولة ببريد آخر
              </button>
            </div>
          )}
        </div>

        {/* Back Link to Login */}
        <div className="mt-6 text-center">
          <Link
            to="/login"
            className="text-sm text-muted-foreground hover:text-foreground transition inline-flex items-center gap-1.5"
          >
            <ArrowRight className="w-4 h-4" />
            العودة لصفحة تسجيل الدخول
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
