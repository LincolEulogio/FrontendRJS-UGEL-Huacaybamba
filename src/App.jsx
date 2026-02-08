import { Outlet, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const MainLayout = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-sans text-slate-900 dark:text-slate-100 selection:bg-primary selection:text-white min-h-screen flex flex-col">
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
