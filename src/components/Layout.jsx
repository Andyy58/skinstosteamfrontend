import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="bg-[#1B2138]">
      <Navbar />
      <main className="bg-slate-950 text-slate-200">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
