import React from "react";
import StudentStatus from "./components/StudentStatus";

const Home = () => {
  return (
    <div>
      <div className="">
        <h2 className="text-3xl font-bold">
          Hello, Mohamed Abdelaziz Hassan El-Sharif.👋
        </h2>
        <p className="text-lg max-w-[600px] mt-2 text-gray-500">
          Keep learning consistently and focus on building your skills step by
          step to reach your academic goals.
        </p>
      </div>
      <StudentStatus />
    </div>
  );
};

export default Home;
