import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import DashboardLayout from "./DashboardLayout";
import Login from "./Registration/Login";
import SignIn from "./Registration/SignIn";
import StudentDashboard from "./Dashboard/StudentDashboard";
import Courses from "./Dashboard/components/Courses";
import Profile from "./Dashboard/components/Profile";

const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<StudentDashboard />} />
        <Route path="courses" element={<Courses />} />
        <Route path="profile" element={<Profile />} />

        <Route path="*" element={<div>Page Not Found</div>} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};

export default MainContent;
