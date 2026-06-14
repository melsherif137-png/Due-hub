import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import DashboardLayout from "./DashboardLayout";
import Login from "./Registration/Login";

const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainContent;
