import React from "react";
import { Link } from "react-router-dom";

const Vision = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[700px] flex items-center overflow-hidden px-6">
        <div className="absolute inset-0">
          <img
            alt="Huacaybamba Mountains"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7-J1siEMtXrD6EaiCDOuZqAw7Z1kVkIxo0z4RC5iqy8blq4MTHvpgIQez2VO_-hIDzuNopriR7EDLhA7SsqF6I1-_COOzH-V2bU5pUrutcrkn9FQ3kbaGp8mZfC59_vzXMJDmTQ8aB_DRq1rKoFTvQHo1Xvu9wCmmBDRZ2bvkB9bLgVI6BzW_LxEwRAkP3ma3JnaRqJZhHH27c1Fne2-8i3w5nPTBF_6qsdcVsN_H_KfJmxa9iYctO95wApne_3aZFHbn-5JbSKA"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
        </div>
        <div className="relative z-10 container mx-auto w-full">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-semibold text-xs uppercase tracking-[0.2em] mb-6 backdrop-blur-md">
              Propósito Institucional
            </span>
            <h2 className="text-6xl lg:text-8xl font-display font-extrabold text-white leading-tight mb-8">
              Nuestra <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Misión y Visión
              </span>
            </h2>
            <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-xl">
              Guiamos el futuro educativo de la región con excelencia,
              transparencia y un compromiso inquebrantable con nuestra
              comunidad.
            </p>
            <div className="flex gap-4">
              <a
                href="#mision"
                className="px-8 py-4 bg-white text-primary rounded-2xl font-bold hover:scale-105 transition-transform flex items-center gap-2"
              >
                Explorar <span className="material-symbols-rounded">south</span>
              </a>
              <a
                href="#"
                className="px-8 py-4 border border-white/30 text-white rounded-2xl font-bold backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                Plan Estratégico
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-32" id="mision">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* Misión Card */}
            <div className="relative group p-12 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl transition-all hover:-translate-y-2 overflow-hidden">
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/5 rounded-full group-hover:bg-primary/10 transition-colors"></div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl">
                  <span className="material-symbols-rounded text-3xl">
                    flag
                  </span>
                </div>
                <h3 className="text-4xl font-display font-bold dark:text-white">
                  Nuestra Misión
                </h3>
              </div>
              <p className="text-xl leading-loose text-slate-600 dark:text-slate-400">
                "Promover el desarrollo de un{" "}
                <span className="text-primary font-bold">
                  servicio educativo de calidad
                </span>
                , con equidad, valores y respeto por la interculturalidad de los
                pueblos de nuestra jurisdicción, en concordancia con la política
                regional y nacional."
              </p>
              <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3 text-slate-400">
                <span className="material-symbols-rounded">verified</span>
                <span className="text-sm font-medium italic">
                  Compromiso que nos define cada día
                </span>
              </div>
            </div>

            {/* Visión Card */}
            <div className="relative group p-12 rounded-3xl bg-slate-900 text-white shadow-2xl transition-all hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <img
                  alt="Education Future"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjotGMQilemAyIUffXYLEHTrzHuAvqHVJKcfQHDdGZ2soZFLid6mWre1Osb87eU_ZJkyZ7kfJ8e8ILG4gpcS6CnAjl7Rbfezt6uv-3EpOOCpOGX8PMxpPB4bw4Vi0gOkP00MKpeiD88xZvQW5yU8FkmtxZOj0bHSMv9Ny6Fb9w5rDobdsROX6At4yOQqfKNucD3b-ExOiwL3ujw8907rgUZcx1g3i2MeHBUZqRj2uWcXPtE7L8xXGG8jYfvWDSST870oh6kykWHhI"
                />
              </div>
              <div className="absolute inset-0 bg-primary/40 mix-blend-overlay"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-primary shadow-xl">
                    <span className="material-symbols-rounded text-3xl">
                      visibility
                    </span>
                  </div>
                  <h3 className="text-4xl font-display font-bold">
                    Nuestra Visión
                  </h3>
                </div>
                <p className="text-xl leading-loose text-white/90">
                  "Ser reconocidos al 2030 como una{" "}
                  <span className="text-blue-300 font-bold">
                    institución líder en gestión educativa
                  </span>
                  , que garantiza aprendizajes de calidad y forma ciudadanos
                  competentes, éticos y comprometidos con el desarrollo
                  sostenible de Huacaybamba."
                </p>
                <div className="mt-12 pt-8 border-t border-white/10 flex items-center gap-3 text-white/60">
                  <span className="material-symbols-rounded">stars</span>
                  <span className="text-sm font-medium italic">
                    Proyección hacia la excelencia regional
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos Institucionales */}
      <section className="bg-slate-100 dark:bg-slate-900/50 py-32 px-6">
        <div className="container mx-auto">
          <div className="mb-20 text-center max-w-2xl mx-auto">
            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-4 block">
              Ejes de Gestión
            </span>
            <h2 className="text-5xl font-display font-extrabold mb-6 dark:text-white">
              Objetivos Institucionales
            </h2>
            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Objetivo 1 - Grande */}
            <div className="lg:col-span-2 p-10 rounded-[2.5rem] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
              <div>
                <span className="text-8xl font-display font-black text-slate-100 dark:text-slate-700/50 group-hover:text-primary/10 transition-colors">
                  01
                </span>
                <h4 className="text-2xl font-bold mt-4 mb-4 dark:text-white">
                  Mejora Continua de la Calidad
                </h4>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                  Implementar estrategias pedagógicas innovadoras para elevar
                  los logros de aprendizaje en todas las instituciones.
                </p>
              </div>
              <div className="mt-8">
                <span className="material-symbols-rounded text-primary text-4xl">
                  trending_up
                </span>
              </div>
            </div>

            {/* Objetivo 2 */}
            <div className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all group">
              <span className="text-6xl font-display font-black text-slate-100 dark:text-slate-700/50 group-hover:text-primary/10 transition-colors">
                02
              </span>
              <h4 className="text-xl font-bold mt-4 mb-4 dark:text-white">
                Inclusión y Equidad
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Garantizar el acceso y culminación de la educación básica con
                atención especial a poblaciones vulnerables.
              </p>
            </div>

            {/* Objetivo 3 */}
            <div className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all group">
              <span className="text-6xl font-display font-black text-slate-100 dark:text-slate-700/50 group-hover:text-primary/10 transition-colors">
                03
              </span>
              <h4 className="text-xl font-bold mt-4 mb-4 dark:text-white">
                Gestión Moderna
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Modernizar procesos administrativos mediante tecnología y
                promover la transparencia total.
              </p>
            </div>

            {/* Objetivo 4 - Grande con ícono */}
            <div className="lg:col-span-2 lg:row-span-1 p-10 rounded-[2.5rem] bg-primary text-white shadow-2xl shadow-primary/20 flex items-center gap-8 relative overflow-hidden group">
              <div className="relative z-10 flex-1">
                <span className="text-6xl font-display font-black text-white/20">
                  04
                </span>
                <h4 className="text-2xl font-bold mt-2 mb-4">
                  Fortalecimiento de Infraestructura
                </h4>
                <p className="text-white/80 leading-relaxed">
                  Mejorar y ampliar espacios seguros, accesibles y adecuados
                  para procesos pedagógicos de calidad.
                </p>
              </div>
              <div className="relative z-10 hidden md:block">
                <span className="material-symbols-rounded text-[100px] text-white/20 group-hover:scale-110 transition-transform duration-500">
                  domain
                </span>
              </div>
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            {/* Objetivo 5 */}
            <div className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all group">
              <span className="text-6xl font-display font-black text-slate-100 dark:text-slate-700/50 group-hover:text-primary/10 transition-colors">
                05
              </span>
              <h4 className="text-xl font-bold mt-4 mb-4 dark:text-white">
                Articulación
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Promover alianzas con instituciones públicas y privadas para
                potenciar el desarrollo territorial.
              </p>
            </div>

            {/* Objetivo 6 */}
            <div className="p-10 rounded-[2.5rem] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all group">
              <span className="text-6xl font-display font-black text-slate-100 dark:text-slate-700/50 group-hover:text-primary/10 transition-colors">
                06
              </span>
              <h4 className="text-xl font-bold mt-4 mb-4 dark:text-white">
                Bienestar Docente
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                Implementar programas de acompañamiento y reconocimiento para
                los profesionales de la educación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 px-6 bg-white dark:bg-background-dark">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12 inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary">
            <span className="material-symbols-rounded text-4xl">
              format_quote
            </span>
          </div>
          <h3 className="text-3xl md:text-5xl font-display font-light leading-snug dark:text-white italic">
            "Trabajamos con una misión clara y una visión que proyecta el
            desarrollo educativo de{" "}
            <span className="font-bold text-primary">Huacaybamba</span>."
          </h3>
          <p className="mt-8 text-slate-500 dark:text-slate-400 font-medium uppercase tracking-widest text-sm flex items-center justify-center gap-4">
            <span className="h-[1px] w-8 bg-slate-300 dark:bg-slate-700"></span>
            Equipo UGEL Huacaybamba
            <span className="h-[1px] w-8 bg-slate-300 dark:bg-slate-700"></span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Vision;
