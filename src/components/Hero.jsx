import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">مرحباً بك في DueHub!</h1>
      <p className="text-lg text-gray-600 mb-8">
        منصة تعليمية شاملة تساعدك على تحقيق أهدافك الأكاديمية بسهولة.
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
        ابدأ الآن
      </button>
    </div>
  );
};

export default Hero;
