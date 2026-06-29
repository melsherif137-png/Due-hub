import React from "react";
import StudentStatus from "./components/StudentStatus";

const Dashboard = () => {
  return (
    <div>
      <div className="">
        <h2 className="text-3xl font-bold">
          مرحباً، محمد عبد العزيز حسن الشريف! 👋
        </h2>
        <p className="text-xl max-w-[600px] mt-2 text-gray-500">
          استمر في التعلم وحقق أهدافك التعليمية
        </p>
      </div>
      <StudentStatus />
    </div>
  );
};

export default Dashboard;
