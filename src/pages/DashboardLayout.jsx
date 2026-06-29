// import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Dashboard from "./Dashboard/StudentDashboard";
// import Home from "./Dashboard/Home";

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="min-h-screen mr-72 pt-22 px-8 bg-gray-100">
        <Dashboard />
      </div>
      <main className="min-h-screen mr-72 pt-22 px-8 bg-gray-100">
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
