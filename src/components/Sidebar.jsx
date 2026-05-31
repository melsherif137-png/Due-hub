import React, { useState } from "react";
import { Home, BookOpen, Search, User, Settings } from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: Home },
  { label: "My Courses", icon: BookOpen },
  { label: "Browse Courses", icon: Search },
  { label: "Profile", icon: User },
  { label: "Settings", icon: Settings },
];

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="fixed top-0 left-0 w-72 h-screen bg-white border-r border-gray-200 px-4 py-6">
      {/* Menu */}
      <nav className="flex flex-col gap-3 pt-17 ">
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = active === item.label;

          return (
            <div
              key={index}
              onClick={() => setActive(item.label)}
              className={`
                flex items-center gap-3 px-3.5 py-4 rounded-xl cursor-pointer transition-all 
                ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-purple-500 text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }
              `}
            >
              <Icon size={19} />
              <span className="text-md font-medium">{item.label}</span>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
