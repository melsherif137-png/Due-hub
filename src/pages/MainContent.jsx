import React from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import DashboardLayout from "./DashboardLayout";

const MainContent = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />} />
      <Route path="/dashboard" element={<DashboardLayout />} />
    </Routes>
  );
};

export default MainContent;
