import { NavLink } from "react-router-dom";
import { Home, BookOpen, Search, User, Settings } from "lucide-react";

const menuItems = [
  { label: "لوحة التحكم", icon: Home, path: "/dashboard" },
  { label: "دوراتي", icon: BookOpen, path: "/dashboard/courses" },
  { label: "تصفح الدورات", icon: Search, path: "/dashboard/browse" },
  { label: "الملف الشخصي", icon: User, path: "/dashboard/profile" },
  { label: "الإعدادات", icon: Settings, path: "/dashboard/settings" },
];

const Sidebar = () => {
  return (
    <div className="fixed top-0 right-0 w-72 h-screen bg-white border-r border-gray-200 px-4 py-6">
      <nav className="flex flex-col gap-3 pt-17">
        {menuItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={index}
              to={item.path}
              end={item.path === "/dashboard"}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-4 rounded-xl transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-purple-500 text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`
              }
            >
              <Icon size={19} />
              <span className="text-md font-medium">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
