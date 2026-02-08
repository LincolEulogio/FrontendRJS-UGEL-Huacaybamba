import React from "react";

const LegalAdvisory = () => {
  const objectives = [
    "Desempeñar las funciones encomendadas de manera estrictamente profesional para satisfacción de los usuarios.",
    "Emitir opinión legal y brindar asesoramiento técnico en el ámbito de competencia institucional.",
    "Efectuar el control de documentos emitidos y recibidos, asegurando la debida conservación.",
  ];

  const functions = [
    {
      icon: "balance",
      title: "Dictámenes y Opiniones",
      description:
        "Emitir dictámenes y opiniones legales sobre recursos administrativos de su competencia técnica.",
    },
    {
      icon: "forum",
      title: "Consultas Jurídicas",
      description:
        "Informar, opinar y absolver consultas de carácter jurídico-legal de la Unidad Ejecutora.",
    },
    {
      icon: "description",
      title: "Proyectos de Resolución",
      description:
        "Formular proyectos de resolución, disposiciones, contratos y convenios de carácter legal.",
    },
    {
      icon: "library_books",
      title: "Legislación Educativa",
      description:
        "Sistematizar y difundir la legislación educativa vigente para el conocimiento público.",
    },
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen px-6">
      <main className="pt-12 pb-24 container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="bg-primary/10 text-primary dark:text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 inline-block">
            Áreas Técnicas
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 dark:from-white dark:to-slate-400">
            Asesoría Jurídica
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-500 dark:text-slate-400 leading-relaxed">
            Brindamos soporte legal especializado para garantizar la legalidad
            de los actos administrativos y el correcto cumplimiento del marco
            normativo institucional.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {/* Objetivos Card */}
          <div className="md:col-span-2 lg:col-span-3 glass p-10 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-primary/30">
                <span className="material-symbols-rounded text-3xl">gavel</span>
              </div>
              <h2 className="text-3xl font-bold mb-6">
                Objetivos Estratégicos
              </h2>
              <ul className="space-y-6">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="material-symbols-rounded text-primary dark:text-blue-400">
                      check_circle
                    </span>
                    <p className="text-slate-600 dark:text-slate-400">
                      {objective}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Director Card */}
          <div className="md:col-span-2 lg:col-span-2 glass overflow-hidden rounded-2xl flex flex-col group">
            <div className="relative h-2/3">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZqxHD_f8iVUpLWO-q0sQgfLVevuQH2YSysmg_oN9j7iQ3GPRnvQ9zLomQ1EGvEa7j9hwVEbOJD_WfSeFiMC23NpbqHI3IW2cucZzRndnmteIc_6plG6bWrApd717JBJMFfTkzugL0z5lRLqH1YLLcqjrV7rr50JA3xvv3so9qBSREfAqlYjZ6OmrV8VFvdpjQ5lRuu-OoEnBXE9aMVm0S53oCMsE_Xsbr3mikcEVhVBkHEM8fv0ymzQPF2mCGee-_fVxIJ3fVfZA"
                alt="Legal Director"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium opacity-80 uppercase tracking-widest">
                  Director de Área
                </p>
                <h3 className="text-2xl font-bold">Abogado Encargado</h3>
              </div>
            </div>
            <div className="p-6 bg-white dark:bg-slate-900/50 flex-grow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <span className="material-symbols-rounded text-primary text-lg">
                    badge
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    Cód: 448-03-01-5
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="material-symbols-rounded text-primary text-lg">
                    history_edu
                  </span>
                  <span className="text-slate-600 dark:text-slate-400">
                    Colegiado habilitado
                  </span>
                </div>
              </div>
              <button className="mt-6 w-full py-3 bg-slate-100 dark:bg-slate-800 rounded-xl font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white transition-all">
                <span className="material-symbols-rounded text-sm">mail</span>{" "}
                CONTACTAR AHORA
              </button>
            </div>
          </div>

          {/* Badge Card */}
          <div className="md:col-span-1 glass p-6 rounded-2xl bg-primary text-white border-none flex flex-col justify-center items-center text-center">
            <span className="text-5xl font-black mb-2">017</span>
            <span className="text-xs font-bold uppercase tracking-widest opacity-80">
              N° de Orden
            </span>
          </div>

          {/* Functions Card */}
          <div className="md:col-span-4 lg:col-span-4 glass p-8 rounded-2xl">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl font-bold">Funciones del Área</h2>
              <div className="h-[1px] flex-grow bg-slate-200 dark:bg-slate-700"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {functions.map((func, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-bold text-primary dark:text-blue-400 flex items-center gap-2">
                    <span className="material-symbols-rounded text-sm">
                      {func.icon}
                    </span>{" "}
                    {func.title}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {func.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Card */}
          <div className="md:col-span-2 lg:col-span-2 glass overflow-hidden rounded-2xl relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOBVnpS5sFJgxcqtASIvOOFGucJ5-3MR8SRAeAjDJtaf9oUMjpGMC-mLBHfDTg6dQ5fXOrZ22lM22bnZIT2ftoDhCsvhl-8jJtuMRR5gyoPytq6Kb_CsbtZzrzb5BlkbCiZ7XL3hrFXAmZlTGyv8wJ0ABdgXiwTzbMupZLNmpdazLPMDcmMYB9bxWGQ1RSiFmY7XQRvYU3wLaWaoRW0r6s1OKEmb-8RRtaFita-A-S7Bb1g7Nh02bzmiUFunpHtjdYW33gi8UijdU"
              alt="Legal documents"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/90 dark:bg-slate-900/90 p-4 rounded-xl shadow-2xl text-center">
                <p className="font-bold text-primary dark:text-white">
                  Transparencia Legal
                </p>
              </div>
            </div>
          </div>

          {/* Table Card */}
          <div className="md:col-span-4 lg:col-span-6 glass p-8 rounded-2xl overflow-hidden">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
              <span className="material-symbols-rounded text-primary">
                analytics
              </span>
              Cuadro Orgánico de Asignación de Cargos
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="pb-4 font-bold text-slate-400 uppercase text-xs tracking-wider">
                      N° Orden
                    </th>
                    <th className="pb-4 font-bold text-slate-400 uppercase text-xs tracking-wider">
                      Cargo Estructural
                    </th>
                    <th className="pb-4 font-bold text-slate-400 uppercase text-xs tracking-wider">
                      Código
                    </th>
                    <th className="pb-4 font-bold text-slate-400 uppercase text-xs tracking-wider text-right">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="group hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="py-5 font-medium">017</td>
                    <td className="py-5 font-bold">Abogado</td>
                    <td className="py-5 font-mono text-sm opacity-70">
                      448-03-01-5
                    </td>
                    <td className="py-5 text-right font-bold">1</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="bg-slate-50/50 dark:bg-slate-800/50 font-black">
                    <td className="py-4 px-4 text-right" colSpan="3">
                      TOTAL CARGOS
                    </td>
                    <td className="py-4 text-right">1</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LegalAdvisory;
