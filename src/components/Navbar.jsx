import { GraduationCap, Bell, UserCircle, Search } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full h-16 px-4 md:px-8 flex items-center justify-between bg-white shadow-md fixed z-2">
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-md">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>

        <span className="text-xl font-bold bg-gradient-to-br from-blue-600 to-purple-600 bg-clip-text text-transparent">
          EduHub
        </span>
        <div
          className="
                hidden md:block
                rounded-2xl
                p-[3px]
                bg-gray-100
                transition-all duration-300
                focus-within:bg-gradient-to-r
                focus-within:from-blue-400
                focus-within:via-indigo-500
                focus-within:to-purple-500
                focus-within:shadow-[0_0_25px_rgba(99,102,241,0.25)]
                ease-in-out 
  "
        >
          <div className="flex items-center bg-white px-4 py-2 rounded-[14px] w-[480px] h-11">
            <Search className="w-5 h-5 text-gray-500 " />
            <input
              type="text"
              placeholder="ابحث عن الدورات.."
              className="bg-transparent outline-none px-3 w-full text-sm"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          className="md:hidden w-11 h-11
            flex items-center justify-center
            rounded-xl
            bg-gradient-to-br
         from-purple-50
         to-purple-100
         text-purple-700
            border border-purple-100
            transition-all duration-300
            hover:shadow-md
            hover:-translate-y-0.5
            cursor-pointer"
        >
          <Search className="w-6 h-6" />
        </button>

        <button
          className="
            relative
            flex items-center justify-center
            w-11 h-11
            rounded-xl
            bg-gradient-to-br
            from-blue-50
            to-blue-100
            text-blue-700
            border border-blue-100
            transition-all duration-300
            hover:shadow-md
            hover:-translate-y-0.5
            cursor-pointer
        "
        >
          <Bell className="w-6 h-6" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-600 rounded-full" />
        </button>
        <Link to="/login">
          <button
            className="
            flex items-center justify-center
            w-11 h-11
            rounded-xl
            bg-gradient-to-br
            from-purple-50
            to-purple-100
            text-purple-700
            border border-purple-100
            transition-all duration-300
            hover:shadow-md
            hover:-translate-y-0.5
            cursor-pointer
        "
          >
            <UserCircle className="w-6 h-6" />
          </button>
        </Link>
      </div>
    </nav>
  );
}
