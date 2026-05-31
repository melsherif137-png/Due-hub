import React from "react";
import { BookOpen, Clock, Award, TrendingUp } from "lucide-react";

const stats = [
  {
    label: "Recorded Courses",
    value: "0",
    icon: BookOpen,
    color: "bg-blue-100 text-blue-600",
  },
  {
    label: "Learning Hours",
    value: "24.5",
    icon: Clock,
    color: "bg-purple-100 text-purple-600",
  },
  {
    label: "Certificates",
    value: "2",
    icon: Award,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    label: "Progress Rate",
    value: "68%",
    icon: TrendingUp,
    color: "bg-green-100 text-green-600",
  },
];

const StudentStatus = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full py-6">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className=" justify-between items-center bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg transition flex gap-4 h-30"
          >
            <div>
              <div className="text-3xl font-bold text-gray-800">
                {item.value}
              </div>

              <div className="text-sm text-gray-500">{item.label}</div>
            </div>
            <div className={`w-fit p-3 rounded-xl ${item.color}`}>
              <Icon size={22} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StudentStatus;
