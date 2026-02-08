import React, { useState, useEffect } from 'react';

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('hasSeenWelcomeModal');
    if (!hasSeenModal) {
      setTimeout(() => setIsOpen(true), 500);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenWelcomeModal', 'true');
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-md animate-backdrop-blur" onClick={handleClose}></div>
      
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div className="relative w-full max-w-[1200px] min-h-[700px] glass rounded-[24px] shadow-2xl overflow-hidden flex flex-col p-8 gap-6 border border-white/40 animate-modal-slide-in pointer-events-auto">
          
          {/* Header */}
          <div className="flex items-center justify-between w-full mb-2">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-xl text-white">
                <span className="material-symbols-rounded text-2xl">campaign</span>
              </div>
              <div>
                <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight">UGEL Huacaybamba</h2>
                <p className="text-slate-600 dark:text-slate-400 text-xs font-medium uppercase tracking-widest">Comunicado Oficial</p>
              </div>
            </div>
            <button 
              onClick={handleClose}
              className="size-10 flex items-center justify-center rounded-full bg-white/50 dark:bg-white/10 text-slate-900 dark:text-white hover:bg-white transition-all border border-white/20 shadow-sm"
            >
              <span className="material-symbols-rounded text-xl">close</span>
            </button>
          </div>

          {/* Bento Grid Content */}
          <div className="grid grid-cols-12 grid-rows-6 gap-6 flex-1">
            
            {/* Large Image Card */}
            <div className="col-span-12 lg:col-span-7 row-span-6 rounded-[24px] overflow-hidden relative group shadow-lg border border-white/20">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrmxPWSXDjlUhICybz3Ed0KYFh3YiF0lWrW4oFrI2iAAYrxPYZk_PwloP1iRvyB42d7rJwVBSgqVPafP0-6ywE2PlaLPeDyKxlCwFsjImQ1-LiEjlCiSvC2IRyj23SpNliZi_3wooOMw67u_u997TqWjrVm0NbzyvFqwJoxCyENE8ncABKHzEI-vtopMUQiARC_VPo6A-tdmWleI7MajQRqDXUEInCOu8pAbYktaU4kx_S0JuAPFWPBcGIuTWneVhk3YyLSesELRU" 
                alt="Evento Educativo" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" 
              />
              <div className="absolute bottom-0 left-0 p-10 z-20 w-full">
                <div className="flex gap-2 mb-4">
                  <span className="px-4 py-1.5 bg-primary text-white text-xs font-bold rounded-full tracking-wider shadow-lg shadow-primary/30">
                    RECUPERACIÓN
                  </span>
                  <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded-full tracking-wider border border-white/20">
                    EVENTO 2024
                  </span>
                </div>
                <h3 className="text-white text-4xl font-bold leading-tight max-w-lg mb-4">
                  Fortaleciendo Lazos con la Comunidad Educativa
                </h3>
                <p className="text-white/90 text-base max-w-md leading-relaxed">
                  Encuentros presenciales para la mejora continua del sistema administrativo y pedagógico en nuestra región.
                </p>
              </div>
            </div>

            {/* Top Right Card */}
            <div className="col-span-12 lg:col-span-5 row-span-3 glass rounded-[24px] p-10 flex flex-col justify-center border border-white/40 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <span className="text-primary text-xs font-extrabold uppercase tracking-[0.2em]">Asunto Prioritario</span>
                <span className="flex h-6 items-center px-3 bg-red-500 text-[10px] font-black text-white rounded-full">NEW</span>
              </div>
              <h1 className="text-slate-900 dark:text-white text-3xl font-bold leading-[1.1] tracking-tight mb-4">
                Actualización Integral del Escalafón Magisterial
              </h1>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                Cronograma oficial para el proceso de actualización documentaria obligatoria dirigida a todo el personal docente.
              </p>
            </div>

            {/* Bottom Right Card */}
            <div className="col-span-12 lg:col-span-5 row-span-3 glass rounded-[24px] p-10 flex flex-col justify-between border border-white/40 shadow-sm">
              <div className="flex justify-between items-start">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="size-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                      <span className="material-symbols-rounded text-2xl">event_note</span>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Fecha Límite</p>
                      <p className="text-slate-900 dark:text-white font-bold text-base">31 de Mayo, 2024</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="size-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
                      <span className="material-symbols-rounded text-2xl">account_balance</span>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Área Responsable</p>
                      <p className="text-slate-900 dark:text-white font-bold text-base">Recursos Humanos</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto">
                <button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-5 px-8 flex items-center justify-center gap-4 transition-all transform active:scale-[0.97] shadow-xl shadow-primary/20 group">
                  <span className="material-symbols-rounded group-hover:translate-y-0.5 transition-transform">download</span>
                  <span className="font-bold text-lg tracking-tight">Descargar PDF Oficial</span>
                </button>
                <div className="flex justify-center items-center gap-2 mt-4 text-[11px] text-slate-400 font-bold uppercase tracking-wide">
                  <span>2.4 MB</span>
                  <span className="size-1 rounded-full bg-current opacity-30"></span>
                  <span>Documento Firmado Digitalmente</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between text-slate-400 text-[10px] font-bold uppercase tracking-[0.15em] px-2 pt-2">
            <p>© 2024 UGEL HUACAYBAMBA - GOBIERNO REGIONAL DE HUÁNUCO</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Transparencia</a>
              <a href="#" className="hover:text-primary transition-colors">Mesa de Partes</a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes modalSlideIn {
          0% { opacity: 0; transform: translateY(40px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes backdropBlur {
          0% { backdrop-filter: blur(0px); background-color: rgba(0,0,0,0); }
          100% { backdrop-filter: blur(12px); background-color: rgba(0,0,0,0.3); }
        }
        .animate-modal-slide-in {
          animation: modalSlideIn 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        .animate-backdrop-blur {
          animation: backdropBlur 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
      `}</style>
    </>
  );
};

export default WelcomeModal;