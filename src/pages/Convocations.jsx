import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Convocations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <main className="pt-32 pb-20 px-4 md:px-10 max-w-6xl mx-auto">
        {/* Hero Section */}
        <section className="relative w-full h-[500px] rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <div
            className="absolute inset-0 bg-cover bg-center"
            data-alt="Group of smiling professional teachers in a modern classroom"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.2)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAhk_Hkx4Wb1QrIas_3pb7X90CLYT94LNC-nwrZmeI8w0j2P2m9FT7tQTVYT95F3z2C2wwD9e724dT4rViBGuvNPqLkjkIQcggL9oc5zZ6TNKC7V1ld780xxitW5xgXUpQAFPRG5ULGlS-qWY_bd53eLGtj0QsO61uQuEoV3ZUEK6RvcU8png6sxQqKDpEPjzWkN5nSBJMpEOJiJDnslXhBGAg1Evn6tj2gEV3jrvzg7pl33aJu33Yl9LamhF-MxTLNIsV_uumOJ6A')",
            }}
          ></div>
          <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 max-w-4xl">
            <span className="inline-block bg-primary/20 text-blue-400 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 backdrop-blur-md w-fit">
              Portal de Empleo Premium
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
              Encuentra tu próximo desafío en UGEL Huacaybamba
            </h2>
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl">
              Lideramos la excelencia educativa en la región. Únete a nuestro
              equipo de profesionales comprometidos con el futuro del país.
            </p>
            {/* Floating Glassmorphic Search Bar */}
            <div className="glass-effect rounded-2xl p-4 flex flex-col md:flex-row gap-4 items-center shadow-2xl max-w-3xl">
              <div className="w-full flex-1 flex items-center gap-3 bg-white/50 rounded-xl px-4 py-3 border border-white/20">
                <span className="material-symbols-rounded text-slate-500">
                  search
                </span>
                <input
                  className="bg-transparent border-none focus:ring-0 w-full text-slate-800 placeholder:text-slate-500 font-medium outline-none"
                  placeholder="Puesto o Especialidad"
                  type="text"
                />
              </div>
              <div className="w-full flex-1 flex items-center gap-3 bg-white/50 rounded-xl px-4 py-3 border border-white/20">
                <span className="material-symbols-rounded text-slate-500">
                  description
                </span>
                <select className="bg-transparent border-none focus:ring-0 w-full text-slate-800 font-medium appearance-none outline-none cursor-pointer">
                  <option>Tipo de Contrato</option>
                  <option>CAS</option>
                  <option>Nombramiento</option>
                  <option>Locación</option>
                </select>
              </div>
              <button className="w-full md:w-auto bg-primary text-white h-12 px-8 rounded-xl font-bold flex items-center justify-center gap-2 clay-button">
                <span className="material-symbols-rounded text-xl">tune</span>
                Buscar
              </button>
            </div>
          </div>
        </section>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Filters (3 cols) */}
          <aside className="lg:col-span-3 space-y-8 sticky top-32">
            <div className="glass-effect rounded-3xl p-8 shadow-glass">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-extrabold text-slate-800">
                  Filtros
                </h3>
                <span className="material-symbols-rounded text-slate-400">
                  filter_list
                </span>
              </div>
              {/* Range Slider */}
              <div className="mb-10">
                <label className="block text-sm font-bold text-slate-600 mb-4">
                  Rango Salarial (S/.)
                </label>
                <input
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  max="8000"
                  min="1500"
                  step="100"
                  type="range"
                />
                <div className="flex justify-between mt-2 text-xs font-bold text-slate-500">
                  <span>1,500</span>
                  <span>8,000+</span>
                </div>
              </div>
              {/* Education Level */}
              <div className="mb-10">
                <label className="block text-sm font-bold text-slate-600 mb-4">
                  Nivel Educativo
                </label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 group cursor-pointer">
                    <input
                      className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary/20"
                      type="checkbox"
                    />
                    <span className="text-sm font-medium text-slate-700 group-hover:text-primary transition-colors">
                      Técnico Superior
                    </span>
                  </label>
                  <label className="flex items-center gap-3 group cursor-pointer">
                    <input
                      defaultChecked
                      className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary/20"
                      type="checkbox"
                    />
                    <span className="text-sm font-medium text-slate-700 group-hover:text-primary transition-colors">
                      Universitario
                    </span>
                  </label>
                  <label className="flex items-center gap-3 group cursor-pointer">
                    <input
                      className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary/20"
                      type="checkbox"
                    />
                    <span className="text-sm font-medium text-slate-700 group-hover:text-primary transition-colors">
                      Maestría / Doctorado
                    </span>
                  </label>
                </div>
              </div>
              {/* Modality */}
              <div>
                <label className="block text-sm font-bold text-slate-600 mb-4">
                  Modalidad
                </label>
                <div className="grid grid-cols-1 gap-2">
                  <button className="w-full text-left px-4 py-2.5 rounded-xl bg-primary/10 text-primary font-bold text-sm border border-primary/20">
                    Presencial
                  </button>
                  <button className="w-full text-left px-4 py-2.5 rounded-xl hover:bg-slate-100 text-slate-600 font-bold text-sm transition-colors">
                    Remoto / Híbrido
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-blue-700 rounded-3xl p-8 text-white shadow-clay relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-2">¿Necesitas ayuda?</h4>
                <p className="text-blue-100 text-sm mb-6">
                  Nuestro equipo de soporte técnico está disponible para
                  asistirte en tu postulación.
                </p>
                <button className="bg-white text-primary px-6 py-2 rounded-xl font-bold text-sm hover:shadow-lg transition-all">
                  Contactar Soporte
                </button>
              </div>
              <span className="material-symbols-rounded absolute -bottom-4 -right-4 text-white/10 text-9xl">
                support_agent
              </span>
            </div>
          </aside>

          {/* Grid Content (9 cols) */}
          <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 auto-rows-max">
            {/* Featured Card (Large) */}
            <div className="md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden shadow-2xl group min-h-[500px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                data-alt="Modern administrative office with warm lighting"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(13, 18, 27, 0.95), rgba(13, 18, 27, 0.4)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuB-WZK-WoqG0pUDWdclDCrujBbycVAulx1zaQmveECRT6GCM-8v4ErrGyI18oJkSeugt9L2VQI75FN_scfHYgPXmwOrmb9T_gU6jRrRrUtJ08ebU6iqAfeKpSMKxLhpfExWPrB71X2NtM_uN8pw-iD5x_0iRBcxoOkYZNeXIAaYHxH8S8zWzGq2aVzuG9zhXKFvkMtGaP8t_-A99mfGWDu2Ocuk2NG9S0StvVVn7qBvK2gNq_CpldhxQXYq-afXlftiKb6r3R-TmDo')",
                }}
              ></div>
              <div className="absolute top-8 left-8 flex gap-2">
                <span className="bg-amber-400 text-amber-950 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                  Destacado
                </span>
                <span className="bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                  Urgente
                </span>
              </div>
              <div className="absolute bottom-10 left-10 right-10">
                <p className="text-blue-400 font-bold text-sm mb-2 uppercase tracking-widest">
                  Área de Gestión Pedagógica
                </p>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                  Especialista Senior en Innovación Educativa
                </h3>
                <p className="text-slate-300 text-lg mb-8 max-w-xl hidden md:block">
                  Lidera el diseño e implementación de los nuevos currículos
                  regionales enfocados en competencias digitales para el periodo
                  2024-2025.
                </p>
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex gap-8 text-white w-full md:w-auto">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-rounded text-blue-400">
                        payments
                      </span>
                      <span className="font-bold">S/. 7,500</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-rounded text-blue-400">
                        event
                      </span>
                      <span className="font-bold">Cierre: 15 Nov</span>
                    </div>
                  </div>
                  <Link
                    to="/convocatorias/1"
                    className="w-full md:w-auto bg-white text-primary px-10 py-4 rounded-2xl font-black text-lg shadow-2xl hover:bg-primary hover:text-white transition-all clay-button text-center flex items-center justify-center"
                  >
                    Postular Ahora
                  </Link>
                </div>
              </div>
            </div>

            {/* Small Job Card 1 */}
            <div className="glass-effect rounded-3xl p-8 flex flex-col shadow-glass group hover:border-primary/50 transition-all border-2 border-transparent h-full">
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-16 h-16 rounded-2xl bg-slate-200 bg-cover bg-center border-4 border-white shadow-lg"
                  data-alt="Professional female educator portrait"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-dzcIwuCvjGVT-0TO6NkuLKlhfil46uqWYLwN_fCIiNUKqg7qlS_sEd1gCc5O2w_A-864jcUINQAgdyxIG8z3mxKFWjl258qfZubb2B3G-Zb-9c2Xms3AP3GUhBMZGOvWu8kJptGdDRSg6Q3xKCt15iIxYFRA2jhq-FGegWXLHu3KNGHJZFYLCpplvhiNzy7sLk-6msDACGaZUlc80HSy8shEtBw_w9yj3VB8-Y-IwAYjuXIL7-BhbW7lxhpUcYh-bbZKEW3isHM')",
                  }}
                ></div>
                <span className="bg-emerald-100 text-emerald-700 text-[10px] font-black px-2.5 py-1 rounded-lg uppercase">
                  Nuevo
                </span>
              </div>
              <h4 className="text-xl font-extrabold text-slate-800 mb-2 group-hover:text-primary transition-colors">
                Docente de Primaria
              </h4>
              <p className="text-slate-500 text-sm font-medium mb-6">
                Institución Educativa N° 84123 - Huacaybamba
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-slate-700 font-bold text-sm">
                  S/. 3,200
                </span>
                <Link
                  to="/convocatorias/1"
                  className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-clay clay-button"
                >
                  <span className="material-symbols-rounded">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            {/* Small Job Card 2 */}
            <div className="glass-effect rounded-3xl p-8 flex flex-col shadow-glass group hover:border-primary/50 transition-all border-2 border-transparent h-full">
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-16 h-16 rounded-2xl bg-slate-200 bg-cover bg-center border-4 border-white shadow-lg"
                  data-alt="Professional male administrator portrait"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCka5QM8-b0cRv9Hcm82CE4PvRrKQqFrHX0M61Afj-9MUr_I7qOrwACHN_yKySkRC03VEKL0vw17l0flQ4equkmw6IHqh4Jx_DmbYkIMHSUMYLVcJ_0hel570yxFKcSZ7Xovzc9aAx-ZBVgzK0Z0mcdxtl9ZvU7YqgkgKvLC-4iFILri-hNzHyIFWLXDwQ2BP3nPOCdjrhOIScxF11EhMvXe9nsY_LFFDJ63KP0mhMQk3NH1F4KJ2u061Sd_Y-Ooo-D9wXK1RLxu68')",
                  }}
                ></div>
                <span className="bg-blue-100 text-blue-700 text-[10px] font-black px-2.5 py-1 rounded-lg uppercase">
                  CAS 014
                </span>
              </div>
              <h4 className="text-xl font-extrabold text-slate-800 mb-2 group-hover:text-primary transition-colors">
                Asistente Administrativo II
              </h4>
              <p className="text-slate-500 text-sm font-medium mb-6">
                Área de Recursos Humanos - Sede Central
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-slate-700 font-bold text-sm">
                  S/. 2,800
                </span>
                <Link
                  to="/convocatorias/1"
                  className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-clay clay-button"
                >
                  <span className="material-symbols-rounded">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            {/* Middle Content Card (Wide) */}
            <div className="md:col-span-2 glass-effect rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between shadow-glass relative overflow-hidden">
              <div className="relative z-10 max-w-lg mb-8 md:mb-0">
                <h4 className="text-2xl font-black text-slate-800 mb-3">
                  ¿Eres un profesional de la salud?
                </h4>
                <p className="text-slate-600 font-medium mb-6">
                  Estamos en busca de psicólogos y terapistas para fortalecer el
                  acompañamiento emocional en nuestras escuelas rurales.
                </p>
                <div className="flex gap-4">
                  <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm clay-button">
                    Ver Vacantes de Salud
                  </button>
                  <button className="bg-white border border-slate-200 text-slate-700 px-8 py-3 rounded-xl font-bold text-sm hover:bg-slate-50 transition-colors">
                    Saber Más
                  </button>
                </div>
              </div>
              <div className="relative z-10">
                <div className="w-48 h-48 bg-blue-50 rounded-full flex items-center justify-center border-8 border-white shadow-xl">
                  <span className="material-symbols-rounded text-primary text-7xl">
                    psychology
                  </span>
                </div>
              </div>
              <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 rounded-full"></div>
            </div>

            {/* Small Job Card 3 */}
            <div className="glass-effect rounded-3xl p-8 flex flex-col shadow-glass group hover:border-primary/50 transition-all border-2 border-transparent h-full">
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-16 h-16 rounded-2xl bg-slate-200 bg-cover bg-center border-4 border-white shadow-lg"
                  data-alt="Professional female accountant portrait"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBSsnRHs6FHafOg_4VpMmkwrK8HgFP6IcH7uKv07CPeidsYw7lK-tO2uTFmyXI_5usEGB1C3f4ARLJgFAmZvuoJARHCejdWPp24W1cxQ-Ixfx7vh_-DuwTgGuUZSTwi_YVh_Jv55n8h0F6ZUn74nSXfljgl7LpcF9C6MDfPwpC_8Lzycmq29f9ErkahDXhJvUdbRhxSl8zG7kU0v8rkWvbGlFTBX_MhJTwb4hbMVN8OWq6IljGkOHcNTvPtgBBRz0oq9RsC2hBjFUs')",
                  }}
                ></div>
                <span className="bg-rose-100 text-rose-700 text-[10px] font-black px-2.5 py-1 rounded-lg uppercase">
                  Urgente
                </span>
              </div>
              <h4 className="text-xl font-extrabold text-slate-800 mb-2 group-hover:text-primary transition-colors">
                Contador Público
              </h4>
              <p className="text-slate-500 text-sm font-medium mb-6">
                Área de Administración y Finanzas
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-slate-700 font-bold text-sm">
                  S/. 5,000
                </span>
                <Link
                  to="/convocatorias/1"
                  className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-clay clay-button"
                >
                  <span className="material-symbols-rounded">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            {/* Small Job Card 4 */}
            <div className="glass-effect rounded-3xl p-8 flex flex-col shadow-glass group hover:border-primary/50 transition-all border-2 border-transparent h-full">
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-16 h-16 rounded-2xl bg-slate-200 bg-cover bg-center border-4 border-white shadow-lg"
                  data-alt="Young professional IT specialist portrait"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB46Cpfli2HhqJ-dGR4Mr6_8wV1YD6GLjYzotLZqklBtCr1PWOmPCHaEAppIOIdVzPcZProSvwM7fudCVGMLH8DgLyWClDo1AOybmWhOYZl88bBbMBweI9u1b-FhHAha2lHg-FCq5ztn2nbugyQyvxyiFILGYd-0asAwtaAfNmC8ZLCbb0A4olXsev46Hc_aSlrIYjznOqkhtdDMCQZXh6xdeLs8ua6HuaiHeJjs44gXFrgI2kExZ5W-3b-nXEkS8NtkVNMN3XmSHQ')",
                  }}
                ></div>
                <span className="bg-amber-100 text-amber-700 text-[10px] font-black px-2.5 py-1 rounded-lg uppercase">
                  Prácticas
                </span>
              </div>
              <h4 className="text-xl font-extrabold text-slate-800 mb-2 group-hover:text-primary transition-colors">
                Soporte Técnico TI
              </h4>
              <p className="text-slate-500 text-sm font-medium mb-6">
                Unidad de Informática y Estadística
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-slate-700 font-bold text-sm">
                  S/. 1,800
                </span>
                <Link
                  to="/convocatorias/1"
                  className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-clay clay-button"
                >
                  <span className="material-symbols-rounded">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            {/* Small Job Card 5 */}
            <div className="glass-effect rounded-3xl p-8 flex flex-col shadow-glass group hover:border-primary/50 transition-all border-2 border-transparent h-full">
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-16 h-16 rounded-2xl bg-slate-200 bg-cover bg-center border-4 border-white shadow-lg"
                  data-alt="Mature male educational specialist portrait"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5cShFUfRCm35BnC40w95t2WIf__TMoGC3AjBeS53QCqC7NclLMI6hWVTbl9IPNoxrRQYJFArqsfXtLWcHKHQI5QBcmsw3Z_5xklLPICMKL2Wr5OVnh4uArcpuMQSkYYDQ-8EEQCz6_g6fkcO_-G_bgQg6gf-wLvXuXj0oVev88I0W6mvEHpeAQ0uQ2SOR6TcXli3mzNCQzsQDZ_9tAVkmE3-LwrwctclcV3SfO-U_Jl19bDiPlAiV7i9t0iH0ADVg1Tj-NbcOlgM')",
                  }}
                ></div>
                <span className="bg-slate-100 text-slate-700 text-[10px] font-black px-2.5 py-1 rounded-lg uppercase">
                  Externo
                </span>
              </div>
              <h4 className="text-xl font-extrabold text-slate-800 mb-2 group-hover:text-primary transition-colors">
                Auxiliar de Educación
              </h4>
              <p className="text-slate-500 text-sm font-medium mb-6">
                Institución Educativa José Olaya
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-slate-700 font-bold text-sm">
                  S/. 2,400
                </span>
                <Link
                  to="/convocatorias/1"
                  className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-clay clay-button"
                >
                  <span className="material-symbols-rounded">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            {/* Small Job Card 6 */}
            <div className="glass-effect rounded-3xl p-8 flex flex-col shadow-glass group hover:border-primary/50 transition-all border-2 border-transparent h-full">
              <div className="flex items-start justify-between mb-6">
                <div
                  className="w-16 h-16 rounded-2xl bg-slate-200 bg-cover bg-center border-4 border-white shadow-lg"
                  data-alt="Professional young female architect portrait"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvPfmcA3bB5JLfVWZXbvw09qGpwc6ZIeLIUMBIVEpFgA_oR2tWeEhi-g8sYPDzdm6nLKRqBzE2avVF_vEvDlwgacBENLeypObK6YGl0h8AKfJSKl82zVSpm4MQpd6yeBIcqRa6lEt2XTy3mS3jU_T3SPUcSiOHGz9h4vREKlnNq8W1JDFskWwqdEL-AKBvmOtT_Z4e78mZ9LIaq15YgrG2ohn1KSesbHMI85QlctgWpCoVpZ_TSbi2y-Pu_qTdioKNtJgFimpmxPE')",
                  }}
                ></div>
                <span className="bg-purple-100 text-purple-700 text-[10px] font-black px-2.5 py-1 rounded-lg uppercase">
                  Contrata
                </span>
              </div>
              <h4 className="text-xl font-extrabold text-slate-800 mb-2 group-hover:text-primary transition-colors">
                Ingeniero de Proyectos
              </h4>
              <p className="text-slate-500 text-sm font-medium mb-6">
                Área de Infraestructura Educativa
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-slate-700 font-bold text-sm">
                  S/. 6,200
                </span>
                <Link
                  to="/convocatorias/1"
                  className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-clay clay-button"
                >
                  <span className="material-symbols-rounded">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Footer Section */}
        <section className="mt-20 glass-effect rounded-[3rem] p-16 flex flex-col xl:flex-row items-center justify-between shadow-2xl overflow-hidden relative">
          <div className="relative z-10 w-full xl:w-2/3">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              ¿Listo para transformar la <br />
              educación en Huacaybamba?
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl font-medium">
              Crea tu cuenta hoy mismo, sube tu CV y recibe notificaciones
              personalizadas sobre nuevas oportunidades que se ajusten a tu
              perfil profesional.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-primary text-white px-12 py-5 rounded-2xl font-black text-xl shadow-clay clay-button">
                Crear Perfil Profesional
              </button>
              <button className="bg-white border-2 border-slate-100 text-slate-800 px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-50 transition-colors">
                Ver Guía de Postulación
              </button>
            </div>
          </div>
          <div className="relative z-10 hidden xl:block">
            <div className="relative">
              <div className="w-96 h-96 bg-primary/10 rounded-[3rem] rotate-12 flex items-center justify-center">
                <span className="material-symbols-rounded text-[12rem] text-primary/40 -rotate-12">
                  history_edu
                </span>
              </div>
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-amber-400 rounded-2xl shadow-xl flex items-center justify-center rotate-3">
                <span className="material-symbols-rounded text-white text-4xl">
                  star
                </span>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500 rounded-full shadow-xl flex items-center justify-center -rotate-6">
                <span className="material-symbols-rounded text-white text-5xl">
                  verified
                </span>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
        </section>
      </main>
    </div>
  );
};

export default Convocations;
