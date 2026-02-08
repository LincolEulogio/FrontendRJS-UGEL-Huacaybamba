import React from "react";
import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-slate-50 px-4 font-sans transition-colors duration-300">
      {/* Abstract Background Decoration */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-primary/15 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Header */}
      <header className="w-full max-w-[1200px] absolute top-0 flex items-center justify-between p-8 z-20">
        <Link to="/" className="flex items-center gap-3">
          <div className="p-2 bg-primary rounded-lg text-white">
            <span className="material-symbols-rounded text-2xl">
              admin_panel_settings
            </span>
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-slate-800">
            UGEL Huacaybamba <span className="text-primary">Admin</span>
          </h2>
        </Link>
        <div className="flex items-center gap-4">
          <button className="px-5 py-2 text-sm font-semibold rounded-full border border-slate-300 hover:bg-white/50 transition-all text-slate-600">
            Soporte Técnico
          </button>
        </div>
      </header>

      {/* Main Bento Grid Container */}
      <main className="w-full max-w-[1100px] grid grid-cols-12 gap-6 relative z-10 pt-24 pb-20">
        {/* Central Bento: Login Credentials */}
        <div className="col-span-12 lg:col-span-7 bg-white/60 rounded-[2rem] p-10 flex flex-col justify-center shadow-glass border border-white/50 backdrop-blur-xl">
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2">
              Panel de Gestión
            </h1>
            <p className="text-slate-500 font-medium">
              Acceso restringido para personal administrativo autorizado.
            </p>
          </div>
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700 ml-1">
                Usuario / Correo
              </label>
              <div className="relative">
                <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  person
                </span>
                <input
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 bg-white/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-800 placeholder:text-slate-400 font-medium"
                  placeholder="admin@ugelhuacaybamba.gob.pe"
                  type="text"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="block text-sm font-bold text-slate-700">
                  Contraseña
                </label>
                <a
                  className="text-xs font-bold text-primary hover:underline"
                  href="#"
                >
                  Recuperar acceso
                </a>
              </div>
              <div className="relative">
                <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  lock
                </span>
                <input
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 bg-white/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-800 placeholder:text-slate-400 font-medium"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
            </div>
            <button
              className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg clay-button flex items-center justify-center gap-2 shadow-clay hover:-translate-y-1 transition-transform"
              type="submit"
            >
              Iniciar Sesión
              <span className="material-symbols-rounded">login</span>
            </button>
          </form>
        </div>

        {/* Side Bento: System Status */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
          {/* Security Card */}
          <div className="bg-white/60 rounded-[2rem] p-8 flex flex-col items-center justify-center text-center shadow-glass border border-white/50 backdrop-blur-xl h-full">
            <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/10 mb-6 border border-emerald-100 animate-pulse">
              <span className="material-symbols-rounded text-4xl text-emerald-600">
                secure
              </span>
            </div>
            <h3 className="font-bold text-slate-800 text-xl mb-2">
              Sistema Operativo
            </h3>
            <p className="text-sm text-slate-500 font-medium mb-6">
              Todos los servicios de gestión están funcionando correctamente.
            </p>
            <div className="w-full space-y-3">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span>Base de Datos</span>
                <span className="text-emerald-600 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Conectado
                </span>
              </div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span>Servidor de Archivos</span>
                <span className="text-emerald-600 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Operativo
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bento: Recent Activity / Announcements for Admins */}
        <div className="col-span-12 bg-white/60 rounded-[2rem] p-6 lg:p-8 flex flex-col md:flex-row items-center gap-8 overflow-hidden shadow-glass border border-white/50 backdrop-blur-xl">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold mb-3 uppercase tracking-wider border border-blue-100">
              <span className="material-symbols-rounded text-sm">
                notifications_active
              </span>
              Aviso Importante
            </div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">
              Cierre de Convocatoria CAS N° 042
            </h2>
            <p className="text-slate-500 text-sm font-medium mb-0">
              Recuerde que el cierre de postulaciones para la convocatoria
              actual es hoy a las 23:59 horas. Asegúrese de validar los reportes
              preliminares.
            </p>
          </div>
          <div className="flex flex-col gap-2 md:w-64 w-full">
            <button className="p-4 bg-white hover:bg-slate-50 transition-colors rounded-2xl border border-slate-200 flex items-center justify-between group shadow-sm">
              <span className="text-xs font-bold text-slate-600">
                VER REPORTES
              </span>
              <span className="material-symbols-rounded text-slate-400 group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-[1200px] absolute bottom-0 flex flex-col md:flex-row items-center justify-between p-8 z-20 text-slate-400 text-xs font-medium">
        <p>© 2024 UGEL Huacaybamba. Panel Administrativo v2.0</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a className="hover:text-primary transition-colors" href="#">
            Manual del Sistema
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Reportar Incidencia
          </a>
        </div>
      </footer>
    </div>
  );
};

export default AdminLogin;
