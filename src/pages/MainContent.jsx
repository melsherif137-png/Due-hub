import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout"; // أو مكوّن الـ Home الرئيسي
import DashboardLayout from "./DashboardLayout";
import Login from "./Registration/Login";
import SignUp from "./Registration/SignIn";
import ForgotPassword from "./Registration/ForgotPassword";
import StudentDashboard from "./Dashboard/StudentDashboard";
import Courses from "./Dashboard/components/Courses";
import Profile from "./Dashboard/components/Profile";

const MainContent = () => {
  return (
    <Routes>
      {/* الصفحة الرئيسية للموقع */}
      <Route path="/" element={<AppLayout />} />

      {/* لوحة التحكم والمسارات الفرعية التابعة لها */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        {/* الصفحة الافتراضية عند دخول /dashboard */}
        <Route index element={<StudentDashboard />} />
        {/* ستفتح على رابط /dashboard/courses */}
        <Route path="courses" element={<Courses />} />
        {/* ستفتح على رابط /dashboard/profile */}
        <Route path="profile" element={<Profile />} />

        {/* في حال كتابة رابط خاطئ داخل لوحة التحكم */}
        <Route
          path="*"
          element={<div>الصفحة غير موجودة داخل لوحة التحكم</div>}
        />
      </Route>

      {/* مسارات التسجيل والدخول */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* في حال كتابة أي رابط خاطئ تماماً في الموقع */}
      <Route path="*" element={<div>404 - الصفحة غير موجودة</div>} />
    </Routes>
  );
};

export default MainContent;
