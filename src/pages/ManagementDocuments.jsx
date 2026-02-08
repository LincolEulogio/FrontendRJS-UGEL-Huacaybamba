

const ManagementDocuments = () => {
  return (
    <div className="font-display mesh-gradient min-h-screen text-slate-900 overflow-x-hidden px-6">
      <section className="pt-24 pb-32 max-w-6xl mx-auto text-center relative px-6">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block py-2 px-4 rounded-full bg-blue-50 text-[var(--primary)] text-xs font-bold uppercase tracking-[0.2em] mb-8">
            Transparencia y Gestión Eficiente
          </span>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[var(--secondary)] leading-tight mb-8">
            Instrumentos de{" "}
            <span className="italic text-[var(--primary)]">Gestión</span>
          </h2>
          <p className="text-xl text-slate-500 font-light leading-relaxed mb-16 max-w-2xl mx-auto">
            Acceso centralizado a los documentos normativos, técnicos y
            estratégicos que rigen nuestra excelencia administrativa y
            pedagógica.
          </p>
          <div className="glass-search max-w-3xl mx-auto p-2 rounded-[32px] flex flex-col md:flex-row gap-4 items-center shadow-2xl">
            <div className="w-full md:flex-grow flex items-center pl-6 h-14 md:h-auto bg-slate-50/50 md:bg-transparent rounded-[24px] md:rounded-none">
              <span className="material-symbols-rounded text-slate-400 mr-4">
                search
              </span>
              <input
                className="w-full bg-transparent border-none focus:ring-0 text-slate-700 placeholder:text-slate-400 font-medium outline-none"
                placeholder="Buscar documento..."
                type="text"
              />
            </div>
            <button className="w-full md:w-auto bg-[var(--secondary)] text-white px-8 py-4 rounded-[26px] font-bold text-sm tracking-widest hover:bg-[var(--primary)] transition-all shadow-lg flex items-center justify-center gap-2">
              BUSCAR
              <span className="material-symbols-rounded text-sm">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto pb-32">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <h3 className="text-2xl font-bold text-[var(--secondary)] flex items-center gap-3">
            <span className="w-10 h-1 bg-[var(--primary)] rounded-full"></span>
            Documentos Estratégicos
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-2 rounded-full bg-white border border-slate-200 text-slate-500 font-bold text-xs uppercase tracking-widest hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all">
              Organizativos
            </button>
            <button className="px-6 py-2 rounded-full bg-white border border-slate-200 text-slate-500 font-bold text-xs uppercase tracking-widest hover:border-[var(--primary)] hover:text-[var(--primary)] transition-all">
              Normativos
            </button>
            <button className="px-6 py-2 rounded-full bg-[var(--secondary)] text-white font-bold text-xs uppercase tracking-widest shadow-md">
              Ver Todos
            </button>
          </div>
        </div>
        <div className="bento-grid">
          <article className="bento-card p-10 rounded-[24px] flex flex-col h-[400px]">
            <div className="flex justify-between items-start mb-10">
              <div className="w-16 h-16 bg-blue-50 text-[var(--primary)] rounded-2xl flex items-center justify-center">
                <span className="material-symbols-rounded text-4xl">
                  move_up
                </span>
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Organizativo
              </span>
            </div>
            <h4 className="text-3xl font-extrabold text-[var(--secondary)] mb-4 tracking-tight">
              MOF
            </h4>
            <p className="text-slate-500 leading-relaxed text-sm mb-auto">
              Manual de Organización y Funciones: Estructura técnica que define
              las responsabilidades específicas de cada cargo institucional.
            </p>
            <a
              className="group flex items-center justify-between py-5 border-t border-slate-100 mt-6"
              href="#"
            >
              <span className="font-bold text-sm text-[var(--secondary)] group-hover:text-[var(--primary)] transition-colors">
                VER DOCUMENTO
              </span>
              <span className="material-symbols-rounded text-slate-400 group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all">
                open_in_new
              </span>
            </a>
          </article>
          <article className="bento-card p-10 rounded-[24px] flex flex-col h-[400px]">
            <div className="flex justify-between items-start mb-10">
              <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-rounded text-4xl">
                  account_tree
                </span>
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Normativo
              </span>
            </div>
            <h4 className="text-3xl font-extrabold text-[var(--secondary)] mb-4 tracking-tight">
              ROF
            </h4>
            <p className="text-slate-500 leading-relaxed text-sm mb-auto">
              Reglamento de Organización y Funciones: Marco normativo que
              establece la estructura orgánica y competencias generales.
            </p>
            <a
              className="group flex items-center justify-between py-5 border-t border-slate-100 mt-6"
              href="#"
            >
              <span className="font-bold text-sm text-[var(--secondary)] group-hover:text-[var(--primary)] transition-colors">
                VER DOCUMENTO
              </span>
              <span className="material-symbols-rounded text-slate-400 group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all">
                open_in_new
              </span>
            </a>
          </article>
          <article className="bento-card p-10 rounded-[24px] flex flex-col h-[400px]">
            <div className="flex justify-between items-start mb-10">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-rounded text-4xl">
                  user_attributes
                </span>
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Personal
              </span>
            </div>
            <h4 className="text-3xl font-extrabold text-[var(--secondary)] mb-4 tracking-tight">
              CAP
            </h4>
            <p className="text-slate-500 leading-relaxed text-sm mb-auto">
              Cuadro para Asignación de Personal: Instrumento que contiene los
              cargos definidos y aprobados de la entidad.
            </p>
            <a
              className="group flex items-center justify-between py-5 border-t border-slate-100 mt-6"
              href="#"
            >
              <span className="font-bold text-sm text-[var(--secondary)] group-hover:text-[var(--primary)] transition-colors">
                VER DOCUMENTO
              </span>
              <span className="material-symbols-rounded text-slate-400 group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all">
                open_in_new
              </span>
            </a>
          </article>
          <article className="bento-card p-10 rounded-[24px] flex flex-col h-[400px]">
            <div className="flex justify-between items-start mb-10">
              <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-rounded text-4xl">
                  description
                </span>
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Técnico
              </span>
            </div>
            <h4 className="text-3xl font-extrabold text-[var(--secondary)] mb-4 tracking-tight">
              Clasificador de Cargos
            </h4>
            <p className="text-slate-500 leading-relaxed text-sm mb-auto">
              Descripción detallada de los cargos requeridos para el
              cumplimiento de objetivos institucionales.
            </p>
            <a
              className="group flex items-center justify-between py-5 border-t border-slate-100 mt-6"
              href="#"
            >
              <span className="font-bold text-sm text-[var(--secondary)] group-hover:text-[var(--primary)] transition-colors">
                VER DOCUMENTO
              </span>
              <span className="material-symbols-rounded text-slate-400 group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all">
                open_in_new
              </span>
            </a>
          </article>
          <article className="bento-card p-10 rounded-[24px] flex flex-col h-[400px]">
            <div className="flex justify-between items-start mb-10">
              <div className="w-16 h-16 bg-rose-50 text-rose-600 rounded-2xl flex items-center justify-center">
                <span className="material-symbols-rounded text-4xl">
                  schema
                </span>
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                Estructura
              </span>
            </div>
            <h4 className="text-3xl font-extrabold text-[var(--secondary)] mb-4 tracking-tight">
              Organigrama
            </h4>
            <p className="text-slate-500 leading-relaxed text-sm mb-auto">
              Representación gráfica de la estructura orgánica funcional de la
              UGEL Huacaybamba.
            </p>
            <a
              className="group flex items-center justify-between py-5 border-t border-slate-100 mt-6"
              href="#"
            >
              <span className="font-bold text-sm text-[var(--secondary)] group-hover:text-[var(--primary)] transition-colors">
                VER DOCUMENTO
              </span>
              <span className="material-symbols-rounded text-slate-400 group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all">
                open_in_new
              </span>
            </a>
          </article>
          <article className="border-2 border-dashed border-slate-200 p-10 rounded-[24px] flex flex-col items-center justify-center text-center hover:border-[var(--primary)] hover:bg-white/50 transition-all cursor-pointer group">
            <div className="w-20 h-20 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-50 group-hover:text-[var(--primary)] transition-all">
              <span className="material-symbols-rounded text-4xl">
                add_circle
              </span>
            </div>
            <h4 className="text-xl font-bold text-slate-400 group-hover:text-[var(--secondary)]">
              Repositorio Completo
            </h4>
            <p className="text-slate-400 text-sm mt-3 max-w-[200px]">
              Acceda a otros documentos normativos y circulares.
            </p>
          </article>
        </div>
      </main>

      {/* Footer from provided code incorporated if needed, but keeping MainLayout footer is easier. 
          The user wanted "este código", so I'll trust MainLayout handles navigation wrapper, 
          and this component handles the unique page content. 
      */}
    </div>
  );
};

export default ManagementDocuments;
