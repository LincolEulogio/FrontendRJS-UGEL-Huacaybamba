import React, { useState, useEffect } from "react";

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal on every visit with a slight delay
    const timer = setTimeout(() => setIsOpen(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-sm animate-backdrop-blur"
        onClick={handleClose}
      ></div>

      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl flex flex-col p-6 md:p-8 gap-6 animate-modal-slide-in pointer-events-auto border border-slate-100 dark:border-slate-800">
          {/* Header */}
          <div className="flex items-center justify-between w-full mb-2 sticky top-0 bg-white dark:bg-slate-900 z-30 py-2">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-xl text-white shadow-lg shadow-primary/20">
                <span className="material-symbols-rounded text-2xl">
                  campaign
                </span>
              </div>
              <div>
                <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">
                  UGEL Huacaybamba
                </h2>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest">
                  Comunicado Oficial
                </p>
              </div>
            </div>
            <button
              onClick={handleClose}
              className="size-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 transition-all"
            >
              <span className="material-symbols-rounded text-xl">close</span>
            </button>
          </div>

          {/* Bento Grid Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 flex-1">
            {/* Large Image Card */}
            <div className="lg:col-span-7 rounded-[24px] overflow-hidden relative group shadow-lg h-64 md:h-auto min-h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10"></div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrmxPWSXDjlUhICybz3Ed0KYFh3YiF0lWrW4oFrI2iAAYrxPYZk_PwloP1iRvyB42d7rJwVBSgqVPafP0-6ywE2PlaLPeDyKxlCwFsjImQ1-LiEjlCiSvC2IRyj23SpNliZi_3wooOMw67u_u997TqWjrVm0NbzyvFqwJoxCyENE8ncABKHzEI-vtopMUQiARC_VPo6A-tdmWleI7MajQRqDXUEInCOu8pAbYktaU4kx_S0JuAPFWPBcGIuTWneVhk3YyLSesELRU"
                alt="Evento Educativo"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 p-6 md:p-8 z-20 w-full">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary text-white text-[10px] md:text-xs font-bold rounded-full tracking-wider shadow-lg shadow-primary/30 uppercase">
                    Recuperación
                  </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] md:text-xs font-bold rounded-full tracking-wider border border-white/20 uppercase">
                    Evento 2024
                  </span>
                </div>
                <h3 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3">
                  Fortaleciendo Lazos con la Comunidad Educativa
                </h3>
                <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-lg">
                  Encuentros presenciales para la mejora continua del sistema
                  administrativo y pedagógico en nuestra región.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Top Right Card */}
              <div className="bg-slate-50 dark:bg-slate-800 rounded-[24px] p-6 md:p-8 border border-slate-100 dark:border-slate-700">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-primary text-[10px] font-extrabold uppercase tracking-[0.2em]">
                    Asunto Prioritario
                  </span>
                  <span className="flex h-5 items-center px-2 bg-red-500 text-[10px] font-black text-white rounded-full">
                    NUEVO
                  </span>
                </div>
                <h1 className="text-slate-900 dark:text-white text-xl md:text-2xl font-bold leading-tight tracking-tight mb-3">
                  Actualización Integral del Escalafón Magisterial
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  Cronograma oficial para el proceso de actualización
                  documentaria obligatoria dirigida a todo el personal docente.
                </p>
              </div>

              {/* Bottom Right Card */}
              <div className="bg-white dark:bg-slate-800 rounded-[24px] p-6 md:p-8 flex flex-col justify-between border border-slate-200 dark:border-slate-700 flex-1 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                      <span className="material-symbols-rounded text-xl">
                        event_note
                      </span>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                        Fecha Límite
                      </p>
                      <p className="text-slate-900 dark:text-white font-bold text-sm">
                        31 de Mayo, 2024
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary">
                      <span className="material-symbols-rounded text-xl">
                        account_balance
                      </span>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                        Área Responsable
                      </p>
                      <p className="text-slate-900 dark:text-white font-bold text-sm">
                        Recursos Humanos
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700/50">
                  <button className="w-full bg-primary hover:bg-blue-700 text-white rounded-xl py-4 px-6 flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] shadow-lg shadow-primary/20 group">
                    <span className="material-symbols-rounded text-xl group-hover:translate-y-0.5 transition-transform">
                      download
                    </span>
                    <span className="font-bold text-sm md:text-base tracking-tight">
                      Descargar PDF Oficial
                    </span>
                  </button>
                  <div className="flex justify-center items-center gap-2 mt-3 text-[10px] text-slate-400 font-bold uppercase tracking-wide">
                    <span>2.4 MB</span>
                    <span className="size-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                    <span>Firmado Digitalmente</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between text-slate-400 text-[10px] font-bold uppercase tracking-widest px-2 gap-4 text-center md:text-left">
            <p>© 2024 UGEL HUACAYBAMBA</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Transparencia
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Mesa de Partes
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes modalSlideIn {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes backdropBlur {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-modal-slide-in {
          animation: modalSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-backdrop-blur {
          animation: backdropBlur 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default WelcomeModal;
