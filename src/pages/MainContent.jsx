import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import DashboardLayout from "./DashboardLayout";
import Login from "./Registration/Login";
import SignIn from "./Registration/SignIn";
import ForgotPassword from "./Registration/ForgotPassword";

const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
    </Routes>
  );
};

export default MainContent;
