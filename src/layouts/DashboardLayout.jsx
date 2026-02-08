import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-sans text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 px-10 py-4 glass-card border-b-0 mx-8 mt-4 rounded-2xl bg-white/40 backdrop-blur-xl border border-white/50">
        <div className="max-w-[1840px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link to="/dashboard" className="flex items-center gap-3">
              <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
                <span className="material-symbols-outlined text-2xl">account_balance</span>
              </div>
              <h2 className="text-slate-900 dark:text-white text-xl font-extrabold tracking-tight">UGEL <span className="text-primary">Huacaybamba</span></h2>
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <Link to="/dashboard" className="text-slate-600 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors">Panel</Link>
              <a href="#" className="text-primary text-sm font-semibold flex items-center gap-1">
                Notificaciones
                <span className="size-1.5 bg-primary rounded-full"></span>
              </a>
              <a href="#" className="text-slate-600 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors">Vacantes</a>
              <a href="#" className="text-slate-600 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors">Expedientes</a>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative hidden lg:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
              <input className="bg-white/50 border-none rounded-xl pl-10 pr-4 py-2 w-64 text-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400" placeholder="Buscar alertas..." type="text" />
            </div>
            <div className="flex items-center gap-3">
              <button className="glass-button size-10 rounded-xl flex items-center justify-center text-slate-600 bg-white/60 hover:bg-white/80 transition-all">
                <span className="material-symbols-outlined text-xl">notifications</span>
              </button>
              <button className="glass-button size-10 rounded-xl flex items-center justify-center text-slate-600 bg-white/60 hover:bg-white/80 transition-all">
                <span className="material-symbols-outlined text-xl">settings</span>
              </button>
              <div className="h-10 w-px bg-slate-200 mx-1"></div>
              <div className="flex items-center gap-3 pl-1">
                <div className="text-right hidden sm:block">
                  <p className="text-xs font-bold text-slate-900 dark:text-white">M. Valenzuela</p>
                  <p className="text-[10px] text-slate-500 font-medium">Docente Administrativo</p>
                </div>
                <div className="size-10 rounded-xl bg-primary/10 p-0.5 border border-primary/20">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ7cucERcd8XsP9Eb2BfHpsPmTWh_OPMge4rT-V_1zR_W7HtYFBaTCq9MYEeQu3LQy01uiggmzlkCDp5-HWmax4RjnJJV3kh5bjnmS9phN7L1FcnPkQBChjCQoGO8bB_7ZZe0Tc8RPHtDQTjzXdtBsuHOdQznv6piXL6Df7vYdg3qm9bFgPoEaKHKEhIlIwVHWNxkQrgsH1-j8wyQTSQFE_KesAwVD5cZ4EWTzOLajbcjH-INMXVN2kR8fwiCrvAZPzOSaPWoOO4c" alt="Profile" className="w-full h-full object-cover rounded-[10px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-[1920px] mx-auto p-10 pt-8">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
