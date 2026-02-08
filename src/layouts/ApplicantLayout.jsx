import React from "react";
import { Outlet, Link } from "react-router-dom";

const ApplicantLayout = () => {
  return (
    <>
      <style>{`
        .aurora-bg {
            background: radial-gradient(circle at 0% 0%, #427cf020 0%, transparent 50%),
                        radial-gradient(circle at 100% 100%, #427cf015 0%, transparent 50%),
                        radial-gradient(circle at 50% 50%, #f6f6f8 0%, #f6f6f8 100%);
        }
        .dark .aurora-bg {
            background: radial-gradient(circle at 0% 0%, #427cf030 0%, transparent 50%),
                        radial-gradient(circle at 100% 100%, #427cf020 0%, transparent 50%),
                        radial-gradient(circle at 50% 50%, #101622 0%, #101622 100%);
        }
        .glass {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .dark .glass {
            background: rgba(16, 22, 34, 0.7);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .bento-card {
            transition: transform 0.2s ease-in-out;
        }
        .bento-card:hover {
            transform: translateY(-4px);
        }
      `}</style>
      <div className="font-display bg-background-light dark:bg-background-dark text-[#0d121b] dark:text-white min-h-screen aurora-bg font-sans">
        <div className="min-h-screen flex flex-col">
          {/* Top Navigation */}
          <header className="sticky top-0 z-50 px-10 py-4 glass border-b border-white/20">
            <div className="flex items-center justify-between gap-8 max-w-6xl mx-auto w-full">
              <div className="flex items-center gap-10">
                <Link to="/" className="flex items-center gap-3">
                  <div className="size-8 bg-primary rounded-lg flex items-center justify-center text-white">
                    <span className="material-symbols-rounded">
                      account_balance
                    </span>
                  </div>
                  <h2 className="text-xl font-extrabold tracking-tight">
                    UGEL Huacaybamba
                  </h2>
                </Link>
                <div className="relative w-96 hidden md:block">
                  <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                    search
                  </span>
                  <input
                    className="w-full bg-white/50 dark:bg-white/10 border-none rounded-full pl-12 pr-6 py-2.5 focus:ring-2 focus:ring-primary/50 placeholder:text-gray-400 text-sm font-medium"
                    placeholder="Buscar convocatorias o plazas..."
                    type="text"
                  />
                </div>
              </div>
              <div className="flex items-center gap-8">
                <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">
                  <a className="hover:text-primary transition-colors" href="#">
                    Dashboard
                  </a>
                  <a className="hover:text-primary transition-colors" href="#">
                    Convocatorias
                  </a>
                  <a className="hover:text-primary transition-colors" href="#">
                    Mis Postulaciones
                  </a>
                  <a className="hover:text-primary transition-colors" href="#">
                    Soporte
                  </a>
                </nav>
                <div className="h-6 w-px bg-gray-300 dark:bg-gray-700 hidden lg:block"></div>
                <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold rounded-full hover:shadow-lg transition-all text-sm">
                  <span className="material-symbols-rounded text-[20px]">
                    logout
                  </span>
                  <span>Salir</span>
                </button>
                <div className="size-11 rounded-full border-2 border-primary p-0.5 pointer-events-none select-none">
                  <div
                    className="w-full h-full rounded-full bg-cover bg-center"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCZl8Yw9OwK8_z4MsTjA8I6b2BXeOo-RL49yac4IBj4sgQ0GDnogfluXpvA9TBVqPJXD0P-DD4V4vawoUDVo8Nxl7eqDUZ9nWcPMF9PAv5VMu8lJLzWbQyw20ZOrdLvzKBjKLUs5p2GkipdzEHtcnr1EijqyOKrIRGH8zjUF4DOYHy5ufGk5Scj73fihky8SQhuwTe4ORDpeA8VNWd0ysSIIR34nkGkUpL8pIksyL1Ev09SoxYOMf7-ER8lLNlzMbGT2gko9I67ZFI")',
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 max-w-6xl mx-auto w-full px-4 md:px-10 py-8">
            <Outlet />
          </main>

          {/* Footer */}
          <footer className="px-10 py-10 mt-8 border-t border-white/10 glass">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-6xl mx-auto w-full">
              <div className="flex items-center gap-3">
                <div className="size-6 bg-primary/20 rounded-md flex items-center justify-center text-primary">
                  <span className="material-symbols-rounded text-[16px]">
                    account_balance
                  </span>
                </div>
                <p className="text-sm font-bold text-gray-500">
                  © 2024 UGEL Huacaybamba. Todos los derechos reservados.
                </p>
              </div>
              <div className="flex gap-8 text-sm font-semibold text-gray-400">
                <a className="hover:text-primary transition-colors" href="#">
                  Políticas de Privacidad
                </a>
                <a className="hover:text-primary transition-colors" href="#">
                  Términos de Uso
                </a>
                <a className="hover:text-primary transition-colors" href="#">
                  Contacto UGEL
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ApplicantLayout;
