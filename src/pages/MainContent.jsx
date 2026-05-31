import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Dashboard/Home";

const MainContent = () => {
  return (
    <div className="min-h-screen ml-72 pt-22 px-8 bg-gray-100">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default MainContent;
