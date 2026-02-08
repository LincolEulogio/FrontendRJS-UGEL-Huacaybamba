import React, { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";

const AdminLayout = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: "dashboard",
    },
    {
      name: "Convocatorias",
      path: "/admin/convocatorias",
      icon: "work",
    },
    {
      name: "Postulantes",
      path: "/admin/postulantes",
      icon: "group",
    },
    {
      name: "Reportes",
      path: "/admin/reportes",
      icon: "analytics",
    },
    {
      name: "Usuarios",
      path: "/admin/usuarios",
      icon: "manage_accounts",
    },
    {
      name: "Configuración",
      path: "/admin/configuracion",
      icon: "settings",
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-slate-900 min-h-screen font-sans flex text-slate-900 dark:text-white transition-colors duration-300">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 h-screen w-72 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 z-50 transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } flex flex-col`}
      >
        <div className="p-6 border-b border-slate-100 dark:border-slate-700">
          <Link to="/" className="flex items-center gap-3">
            <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
              <span className="material-symbols-rounded text-2xl">
                admin_panel_settings
              </span>
            </div>
            <div>
              <h1 className="font-extrabold text-lg tracking-tight leading-none text-slate-800 dark:text-white">
                Admin Panel
              </h1>
              <p className="text-[10px] uppercase font-bold text-slate-500 tracking-[0.2em] mt-0.5">
                UGEL Huacaybamba
              </p>
            </div>
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <p className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 mt-2">
            Principal
          </p>
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                location.pathname.startsWith(item.path)
                  ? "bg-primary text-white shadow-md shadow-primary/30"
                  : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 hover:text-primary dark:hover:text-white"
              }`}
            >
              <span className="material-symbols-rounded">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100 dark:border-slate-700">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
            <span className="material-symbols-rounded">logout</span>
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg"
            >
              <span className="material-symbols-rounded text-2xl">menu</span>
            </button>
            <h2 className="text-xl font-bold text-slate-800 dark:text-white hidden sm:block">
              {menuItems.find((m) => location.pathname.startsWith(m.path))
                ?.name || "Panel de Control"}
            </h2>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <button className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors relative">
                <span className="material-symbols-rounded">notifications</span>
                <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full ring-2 ring-white dark:ring-slate-800"></span>
              </button>
              <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>
              <div className="flex items-center gap-3 pl-1">
                <div className="text-right hidden sm:block">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Administrador
                  </p>
                  <p className="text-xs text-slate-500 font-medium">Sistemas</p>
                </div>
                <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden border-2 border-white dark:border-slate-600 shadow-sm">
                  <img
                    src="https://ui-avatars.com/api/?name=Admin+User&background=0D8ABC&color=fff"
                    alt="Admin Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 lg:p-10 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
