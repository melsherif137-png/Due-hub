import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Home from "./Dashboard/Home";

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="min-h-screen mr-72 pt-22 px-8 bg-gray-100">
        <Home />
      </div>
    </>
  );
};

export default DashboardLayout;
