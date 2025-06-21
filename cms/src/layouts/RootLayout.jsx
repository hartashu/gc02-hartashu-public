import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

const RootLayout = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col md:flex-row bg-gray-100 text-gray-800">
        <Sidebar />
        <Outlet />
      </section>
    </>
  );
};

export default RootLayout;
