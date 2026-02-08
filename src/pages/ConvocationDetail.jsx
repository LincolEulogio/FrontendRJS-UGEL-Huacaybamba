import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ConvocationDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen pb-32">
      <main className="pt-32 px-4 md:px-10 max-w-6xl mx-auto">
        <div className="max-w-[1600px] mx-auto">
          {/* Hero Section */}
          <section className="relative w-full h-[600px] rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.6)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-WZK-WoqG0pUDWdclDCrujBbycVAulx1zaQmveECRT6GCM-8v4ErrGyI18oJkSeugt9L2VQI75FN_scfHYgPXmwOrmb9T_gU6jRrRrUtJ08ebU6iqAfeKpSMKxLhpfExWPrB71X2NtM_uN8pw-iD5x_0iRBcxoOkYZNeXIAaYHxH8S8zWzGq2aVzuG9zhXKFvkMtGaP8t_-A99mfGWDu2Ocuk2NG9S0StvVVn7qBvK2gNq_CpldhxQXYq-afXlftiKb6r3R-TmDo')",
              }}
            ></div>
            <div className="absolute bottom-12 left-6 right-6 md:left-12 md:right-12 glass-effect rounded-[2rem] p-6 md:p-10 flex flex-wrap items-center justify-between shadow-2xl backdrop-blur-3xl border border-white/40">
              <div className="max-w-2xl mb-6 md:mb-0">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-primary/10 text-primary text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest border border-primary/20">
                    CAS N° {id || "042-2024"}
                  </span>
                  <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest border border-emerald-200">
                    Abierta
                  </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-2">
                  Especialista Senior en Gestión Pedagógica
                </h2>
                <div className="flex flex-wrap items-center gap-6 text-slate-600 font-semibold">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-rounded text-primary">
                      location_on
                    </span>
                    <span>Huacaybamba, Huánuco</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-rounded text-primary">
                      schedule
                    </span>
                    <span>Tiempo Completo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-rounded text-primary">
                      payments
                    </span>
                    <span className="text-xl text-slate-900">S/. 7,500</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 w-full md:w-auto">
                <button className="w-16 h-16 rounded-2xl bg-white text-slate-400 flex items-center justify-center border border-slate-200 hover:text-rose-500 transition-colors">
                  <span className="material-symbols-rounded text-3xl">
                    favorite
                  </span>
                </button>
                <button className="mt-4 flex-1 md:flex-none bg-primary text-white px-8 md:px-12 py-4 md:py-6 rounded-3xl font-black text-lg md:text-xl shadow-clay clay-button flex items-center justify-center gap-3">
                  Postular Ahora
                  <span className="material-symbols-rounded">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </section>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Description Card (8 cols) */}
            <div className="col-span-1 lg:col-span-8 glass-effect rounded-[2rem] p-8 shadow-glass border border-white/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-primary shadow-sm border border-blue-100">
                  <span className="material-symbols-rounded">description</span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-800">
                  Descripción y Objetivos
                </h3>
              </div>
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-600 leading-relaxed mb-6 font-medium">
                  Buscamos un profesional apasionado por la transformación
                  educativa para liderar el equipo de acompañamiento pedagógico
                  en la provincia. Tu misión principal será elevar los
                  estándares de enseñanza-aprendizaje a través de la innovación
                  y la gestión eficiente de recursos educativos.
                </p>
                <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <span className="material-symbols-rounded text-primary">
                    ads_click
                  </span>
                  Responsabilidades Clave
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
                  <li className="bg-white/50 p-4 rounded-2xl border border-white flex gap-3 text-slate-600 font-medium">
                    <span className="material-symbols-rounded text-emerald-500">
                      check_circle
                    </span>
                    Diseñar el Plan Regional de Acompañamiento Docente 2025.
                  </li>
                  <li className="bg-white/50 p-4 rounded-2xl border border-white flex gap-3 text-slate-600 font-medium">
                    <span className="material-symbols-rounded text-emerald-500">
                      check_circle
                    </span>
                    Supervisar la implementación de tecnologías en el aula.
                  </li>
                  <li className="bg-white/50 p-4 rounded-2xl border border-white flex gap-3 text-slate-600 font-medium">
                    <span className="material-symbols-rounded text-emerald-500">
                      check_circle
                    </span>
                    Coordinar con directivos de II.EE. focalizadas.
                  </li>
                  <li className="bg-white/50 p-4 rounded-2xl border border-white flex gap-3 text-slate-600 font-medium">
                    <span className="material-symbols-rounded text-emerald-500">
                      check_circle
                    </span>
                    Elaborar reportes de impacto educativo trimestrales.
                  </li>
                </ul>
              </div>
            </div>

            {/* Requirements Card (4 cols) */}
            <div className="col-span-1 lg:col-span-4 bg-slate-900 text-white rounded-[2rem] p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 blur-[80px] rounded-full"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-primary shadow-inner border border-white/10">
                    <span className="material-symbols-rounded">
                      assignment_ind
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold">
                    Requisitos y Perfil
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <span className="text-blue-400 text-xs font-black uppercase tracking-widest mb-2 block">
                      Formación Académica
                    </span>
                    <p className="font-bold text-lg leading-snug">
                      Licenciatura en Educación con Maestría en Gestión o
                      afines.
                    </p>
                  </div>
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md">
                    <span className="text-blue-400 text-xs font-black uppercase tracking-widest mb-2 block">
                      Experiencia
                    </span>
                    <p className="font-bold text-lg leading-snug">
                      Mínimo 5 años en gestión pública educativa.
                    </p>
                  </div>
                  <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                        <span className="material-symbols-rounded text-sm text-primary">
                          done_all
                        </span>
                      </div>
                      <span className="text-slate-300 font-medium">
                        Dominio de Quechua (Deseable)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                        <span className="material-symbols-rounded text-sm text-primary">
                          done_all
                        </span>
                      </div>
                      <span className="text-slate-300 font-medium">
                        Certificación en Google for Education
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                        <span className="material-symbols-rounded text-sm text-primary">
                          done_all
                        </span>
                      </div>
                      <span className="text-slate-300 font-medium">
                        Disponibilidad para viajar a zonas rurales
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Card (5 cols) */}
            <div className="col-span-1 lg:col-span-5 glass-effect rounded-[2rem] p-8 shadow-glass border border-white/50 flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 shadow-sm border border-amber-100">
                  <span className="material-symbols-rounded">
                    military_tech
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-800">
                  Beneficios
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                <div className="p-6 rounded-3xl bg-white shadow-sm border border-slate-100 flex flex-col gap-3 group hover:border-primary/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-rounded">
                      health_and_safety
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-800">Seguro Integral</h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Cobertura completa EPS para ti y tu familia.
                  </p>
                </div>
                <div className="p-6 rounded-3xl bg-white shadow-sm border border-slate-100 flex flex-col gap-3 group hover:border-primary/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    <span className="material-symbols-rounded">school</span>
                  </div>
                  <h4 className="font-bold text-slate-800">Capacitación</h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Becas para diplomados y cursos internacionales.
                  </p>
                </div>
                <div className="p-6 rounded-3xl bg-white shadow-sm border border-slate-100 flex flex-col gap-3 group hover:border-primary/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <span className="material-symbols-rounded">
                      trending_up
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-800">Línea de Carrera</h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Oportunidades de ascenso a nivel regional.
                  </p>
                </div>
                <div className="p-6 rounded-3xl bg-white shadow-sm border border-slate-100 flex flex-col gap-3 group hover:border-primary/30 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center group-hover:bg-rose-600 group-hover:text-white transition-colors">
                    <span className="material-symbols-rounded">
                      workspace_premium
                    </span>
                  </div>
                  <h4 className="font-bold text-slate-800">Bonos</h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Incentivos por cumplimiento de metas pedagógicas.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline for Process (7 cols) */}
            <div className="col-span-1 lg:col-span-7 glass-effect rounded-[2rem] p-8 shadow-glass border border-white/50">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-100">
                  <span className="material-symbols-rounded">
                    event_available
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-800">
                  Cronograma del Proceso
                </h3>
              </div>
              <div className="relative space-y-8">
                {[
                  {
                    step: "01",
                    title: "Postulación Digital",
                    date: "DEL 01 AL 08 NOV",
                    desc: "Registro de CV y documentos sustentatorios a través del portal.",
                    active: true,
                  },
                  {
                    step: "02",
                    title: "Evaluación Curricular",
                    date: "10 NOV",
                    desc: "Filtro técnico basado en requisitos mínimos y perfil.",
                    active: false,
                  },
                  {
                    step: "03",
                    title: "Entrevista Personal",
                    date: "12 AL 14 NOV",
                    desc: "Entrevista presencial o virtual con el comité evaluador.",
                    active: false,
                  },
                  {
                    step: "04",
                    title: "Resultados Finales",
                    date: "15 NOV",
                    desc: "Publicación de cuadro de méritos y adjudicación de plaza.",
                    active: false,
                  },
                ].map((item, index, arr) => (
                  <div
                    key={item.step}
                    className="relative flex gap-6 timeline-item"
                  >
                    {/* Line connector */}
                    {index !== arr.length - 1 && (
                      <div className="absolute left-[19px] top-10 w-0.5 h-full bg-slate-200"></div>
                    )}

                    <div
                      className={`flex-shrink-0 relative z-10 w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-4 border-white ${
                        item.active
                          ? "bg-primary text-white"
                          : "bg-white text-slate-400 border-2 border-slate-100"
                      }`}
                    >
                      <span className="text-xs font-black">{item.step}</span>
                    </div>
                    <div className="flex-1 pb-4">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-slate-800">
                          {item.title}
                        </h4>
                        <span
                          className={`text-[10px] font-black px-2 py-1 rounded-lg ${
                            item.active
                              ? "bg-blue-50 text-primary"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {item.date}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Sticky Bottom Bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] bg-slate-900/90 rounded-[2.5rem] px-6 py-3 md:px-8 md:py-4 shadow-2xl border border-white/10 flex flex-wrap items-center gap-4 md:gap-6 backdrop-blur-3xl w-[95%] max-w-[800px] justify-between">
        <div className="flex items-center gap-4 border-r border-white/10 pr-6 mr-auto md:mr-0">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-primary/50 shadow-lg">
            <img
              alt="Recruiter"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5cShFUfRCm35BnC40w95t2WIf__TMoGC3AjBeS53QCqC7NclLMI6hWVTbl9IPNoxrRQYJFArqsfXtLWcHKHQI5QBcmsw3Z_5xklLPICMKL2Wr5OVnh4uArcpuMQSkYYDQ-8EEQCz6_g6fkcO_-G_bgQg6gf-wLvXuXj0oVev88I0W6mvEHpeAQ0uQ2SOR6TcXli3mzNCQzsQDZ_9tAVkmE3-LwrwctclcV3SfO-U_Jl19bDiPlAiV7i9t0iH0ADVg1Tj-NbcOlgM"
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-[10px] text-blue-400 font-black uppercase tracking-widest">
              Consultas
            </p>
            <p className="text-sm font-bold text-white">Lic. Carlos Méndez</p>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <button className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center hover:bg-primary transition-all">
            <span className="material-symbols-rounded">share</span>
          </button>
          <button className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center hover:bg-emerald-500 transition-all">
            <span className="material-symbols-rounded">chat</span>
          </button>
          <button className="bg-primary text-white px-4 md:px-8 h-10 md:h-12 rounded-2xl font-black text-xs md:text-sm shadow-clay clay-button flex items-center gap-2">
            <span className="hidden sm:inline">Iniciar Postulación</span>
            <span className="sm:hidden">Postular</span>
            <span className="material-symbols-rounded text-base">
              rocket_launch
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConvocationDetail;
