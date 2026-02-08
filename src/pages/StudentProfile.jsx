import React from "react";

const StudentProfile = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Left Column: Sticky Bio (35%) */}
      <aside className="w-full lg:w-[35%]">
        <div className="lg:sticky lg:top-28 glass rounded-xl overflow-hidden shadow-xl border border-white/30">
          {/* Profile Header Image */}
          <div className="h-48 bg-primary/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          </div>
          <div className="px-8 pb-10 -mt-24 relative z-10">
            <div
              className="size-44 rounded-xl border-4 border-white shadow-2xl bg-cover bg-center mb-6"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAkWwZpDumGHryuxjSelTtT1iPPYPOm6786BpWF4kiAfCSgIbT0RcoPDoJHx6EmcNiDo7OoOsAtTud265JAOPTLOVxMpbUB7flzYu1TfjCS9Ygy8wkhz7bZnxkR7rRqiiWTaXGvOPiU3VXDfnWiFaR-86dq_TV0zUodTCecI7-FBjBRqgtaL3okvfp1YDfSi0Y2hKl6pf3m5_XsT5stDtQyrlbUKn6b3YeG-jfLsXZnBby9h-qmTLcrWKERsAsyyVIIZ3Px9PIberM")',
              }}
            ></div>
            <div className="space-y-2">
              <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Carlos Rodriguez
              </h1>
              <p className="text-primary font-bold text-lg">
                Docente de Innovación Educativa
              </p>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm font-medium">
                <span className="material-symbols-rounded text-[18px]">
                  location_on
                </span>
                <span>Huacaybamba, Huánuco</span>
                <span className="mx-2">•</span>
                <span className="material-symbols-rounded text-[18px]">
                  calendar_month
                </span>
                <span>Miembro desde 2021</span>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                Sobre mí
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                Apasionado por la integración de tecnologías emergentes en el
                aula rural. Con más de 8 años de experiencia liderando proyectos
                de digitalización educativa en la región Huánuco. Busco
                transformar la experiencia de aprendizaje a través del
                pensamiento crítico y herramientas digitales.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-full font-bold hover:bg-primary/90 transition-all text-sm">
                <span className="material-symbols-rounded text-[20px]">
                  download
                </span>
                <span>Descargar CV</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 py-3 rounded-full font-bold hover:bg-gray-50 transition-all text-sm text-slate-700 dark:text-white">
                <span className="material-symbols-rounded text-[20px]">
                  mail
                </span>
                <span>Contactar</span>
              </button>
            </div>
            <div className="mt-10 flex items-center justify-between border-t border-gray-100 dark:border-white/5 pt-8">
              <div className="flex gap-4">
                <a
                  className="size-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white hover:bg-primary/10 hover:text-primary transition-all"
                  href="#"
                >
                  <span className="material-symbols-rounded text-[20px]">
                    share
                  </span>
                </a>
                <a
                  className="size-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white hover:bg-primary/10 hover:text-primary transition-all"
                  href="#"
                >
                  <span className="material-symbols-rounded text-[20px]">
                    public
                  </span>
                </a>
                <a
                  className="size-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-white hover:bg-primary/10 hover:text-primary transition-all"
                  href="#"
                >
                  <span className="material-symbols-rounded text-[20px]">
                    link
                  </span>
                </a>
              </div>
              <div className="flex items-center gap-1 text-green-500 font-bold text-sm bg-green-500/10 px-3 py-1 rounded-full">
                <span className="size-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Disponible</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Right Column: Bento Grid (65%) */}
      <section className="w-full lg:w-[65%] space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Tile 1: Trayectoria Educativa (Wide) */}
          <div className="col-span-1 md:col-span-6 bento-card glass p-8 rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="size-10 bg-blue-100 dark:bg-blue-500/20 text-primary rounded-xl flex items-center justify-center">
                  <span className="material-symbols-rounded">school</span>
                </div>
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Trayectoria Educativa
                </h2>
              </div>
              <button className="text-primary font-bold flex items-center gap-1 hover:underline">
                <span className="material-symbols-rounded">add_circle</span>
                <span>Agregar</span>
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 p-6 rounded-xl flex gap-6 group hover:shadow-md transition-shadow">
                <div
                  className="size-20 bg-gray-100 dark:bg-white/5 rounded-xl bg-cover bg-center shrink-0"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBV--mTAbwerFe3q5z49B0YK2nI7faw8uaFIUrYQgM2hnFqX9x-cR-op5XnowhzmWsYNZrGfrjG7UxhbqJ5KxmQBG3NLiruI3jh2Hm2PEmM54Vy4P39DQ55w_muuNpdsg3ZapyhUdA6dwH48dCTMbzoHvH6vJqWWUQmepaPuDzh6EBQkueKKd5le8Gt0p5Nr5HwLqlf1yP_aPmQEqDsNCrrQ5CnAwN38MmDwifnUhV_3afDaQx7TjDg9cLy8I0o6nECxvy7m3sax1Q")',
                  }}
                ></div>
                <div className="flex flex-col justify-center">
                  <span className="text-primary font-bold text-xs uppercase tracking-wider mb-1">
                    Postgrado
                  </span>
                  <h4 className="text-lg font-bold leading-tight mb-1 text-slate-900 dark:text-white">
                    Maestría en Gestión Educativa
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                    Universidad Nacional Mayor de San Marcos
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                    <span className="material-symbols-rounded text-[16px]">
                      calendar_today
                    </span>
                    <span>2018 - 2020</span>
                    <span className="mx-1">•</span>
                    <span className="text-green-600 dark:text-green-400 bg-green-500/10 px-2 rounded">
                      Graduado
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 p-6 rounded-xl flex gap-6 group hover:shadow-md transition-shadow">
                <div
                  className="size-20 bg-gray-100 dark:bg-white/5 rounded-xl bg-cover bg-center shrink-0"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB4J3ThDq3jbxLl_rm3UvU1VYiw2oa4g3WmnpjDjEXiIwSYrgSc3CHQMMk2ARkipyNLZkd2P1r-k7ANrBkJHpQr2z88ZtcPuMVtgiJkPPtRgMnLepgUI-iC-2IXBSges2aSDV-ZfogIo5SMJjaZHOexqrZSFyDOXFqxx4tT3hmO6IBeT8YFW6CySitgf_VEzowhuFLPuR4cEsz5QCr6DFUCgVtPVfvpG_d_Y3ZltEUvlU3-23aquZ5_FbwGVXytgawEM0omKD93Z3s")',
                  }}
                ></div>
                <div className="flex flex-col justify-center">
                  <span className="text-primary font-bold text-xs uppercase tracking-wider mb-1">
                    Pregrado
                  </span>
                  <h4 className="text-lg font-bold leading-tight mb-1 text-slate-900 dark:text-white">
                    Licenciatura en Educación Primaria
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                    Universidad Nacional Hermilio Valdizán
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-medium">
                    <span className="material-symbols-rounded text-[16px]">
                      calendar_today
                    </span>
                    <span>2012 - 2017</span>
                    <span className="mx-1">•</span>
                    <span className="text-green-600 dark:text-green-400 bg-green-500/10 px-2 rounded">
                      Titulado
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Tile 2: Habilidades y Competencias (Medium) */}
          <div className="col-span-1 md:col-span-2 bento-card glass p-8 rounded-xl flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 bg-purple-100 dark:bg-purple-500/20 text-purple-600 rounded-xl flex items-center justify-center">
                <span className="material-symbols-rounded">
                  workspace_premium
                </span>
              </div>
              <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Competencias
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-bold shadow-sm hover:scale-105 transition-transform cursor-default">
                Pedagogía Digital
              </span>
              <span className="px-4 py-2 bg-primary/10 dark:bg-white/10 text-primary dark:text-white rounded-full text-sm font-bold border border-primary/20 hover:scale-105 transition-transform cursor-default">
                Gestión Pública
              </span>
              <span className="px-4 py-2 bg-primary/10 dark:bg-white/10 text-primary dark:text-white rounded-full text-sm font-bold border border-primary/20 hover:scale-105 transition-transform cursor-default">
                Liderazgo
              </span>
              <span className="px-4 py-2 bg-primary/10 dark:bg-white/10 text-primary dark:text-white rounded-full text-sm font-bold border border-primary/20 hover:scale-105 transition-transform cursor-default">
                Google Workspace
              </span>
              <span className="px-4 py-2 bg-primary/10 dark:bg-white/10 text-primary dark:text-white rounded-full text-sm font-bold border border-primary/20 hover:scale-105 transition-transform cursor-default">
                Python para Edu
              </span>
              <span className="px-4 py-2 bg-primary/10 dark:bg-white/10 text-primary dark:text-white rounded-full text-sm font-bold border border-primary/20 hover:scale-105 transition-transform cursor-default">
                Gamificación
              </span>
              <span className="px-4 py-2 bg-primary/10 dark:bg-white/10 text-primary dark:text-white rounded-full text-sm font-bold border border-primary/20 hover:scale-105 transition-transform cursor-default">
                Curriculum
              </span>
            </div>
            <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-bold text-gray-500">Nivel General</span>
                <span className="text-primary font-extrabold">Avanzado</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-white/10 h-2 rounded-full mt-2 overflow-hidden">
                <div className="bg-primary h-full w-[85%] rounded-full"></div>
              </div>
            </div>
          </div>
          {/* Tile 3: Historial Laboral (Large/Wide) */}
          <div className="col-span-1 md:col-span-4 bento-card glass p-8 rounded-xl flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="size-10 bg-orange-100 dark:bg-orange-500/20 text-orange-600 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-rounded">work</span>
                </div>
                <h2 className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Experiencia Profesional
                </h2>
              </div>
              <button className="size-10 bg-gray-100 dark:bg-white/10 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
                <span className="material-symbols-rounded">chevron_right</span>
              </button>
            </div>
            <div className="space-y-4">
              {/* Job 1 */}
              <div className="relative group h-32 rounded-xl overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCSSnOXQ9un2LsFeT1B0ZefhRFf-0ik4BAVaHdLk_Ztz5dAay3jcPziG9RDLsMvqDv4GKE2t6oKwijP503WgoE_xZn7QwjcMjIxRSpusW72cMviDpWSr_4n8dDMGc9NZ94GadP45ZuOpkJXgpvjSUxU8UIaaKvCs2bR4BnOVLpj5TkC4byNS3l0Jr354tO8wSlMkrheWhGZoasJicEE9tzOLrCNSO3WMxIGdLZg6JgroOialTGYfxUWy2NUOdk86iXEF4MVx9ZUDRw")',
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-1">
                    <span className="size-1.5 bg-primary rounded-full"></span>
                    <span>Actualidad</span>
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    Especialista en Innovación
                  </h4>
                  <p className="text-gray-300 text-sm">
                    UGEL Huacaybamba • 2021 - Presente
                  </p>
                </div>
              </div>
              {/* Job 2 */}
              <div className="relative group h-32 rounded-xl overflow-hidden cursor-pointer">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA0CZ3fUxrxoi8R5RPSPsu-Gts5GzQ_DLI0FpNGTElyuJjGyHtiQMopgM1ONHofeaBCfauSxIADqEMOptj8evq67XB4oqGgM783ukVPXZKqrQdHOUz0meWr9Lc2DwPysbH6hUjUVxIA1Gk4wBsJzjU49ZnQ0raZ3Y9zUFC6dDHB4iAk9TigS5vwfeKzgpJFgEkC07h6kpNDcZA5j5mLUCEvSz13s0JnoAq1B6GnyXD7eLbBn7-7FA1SQOWf9I1uVe3ONH8q4GpCCow")',
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-gray-400 font-bold text-xs uppercase tracking-widest mb-1">
                    <span className="size-1.5 bg-gray-400 rounded-full"></span>
                    <span>2 Años</span>
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    Coordinador de TICs
                  </h4>
                  <p className="text-gray-300 text-sm">
                    I.E. Sagrado Corazón • 2019 - 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Small Stats/Info Tiles */}
          <div className="col-span-1 md:col-span-2 bento-card glass p-6 rounded-xl flex items-center gap-5">
            <div className="size-14 bg-green-100 dark:bg-green-500/20 text-green-600 rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-rounded text-3xl">
                verified
              </span>
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900 dark:text-white">
                95%
              </p>
              <p className="text-xs font-bold text-gray-500 uppercase">
                Perfil Verificado
              </p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 bento-card glass p-6 rounded-xl flex items-center gap-5">
            <div className="size-14 bg-yellow-100 dark:bg-yellow-500/20 text-yellow-600 rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-rounded text-3xl">
                emoji_events
              </span>
            </div>
            <div>
              <p className="text-2xl font-black text-slate-900 dark:text-white">
                12
              </p>
              <p className="text-xs font-bold text-gray-500 uppercase">
                Certificaciones
              </p>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2 bento-card bg-primary p-6 rounded-xl flex items-center gap-5 group cursor-pointer hover:shadow-primary/30 shadow-lg">
            <div className="size-14 bg-white/20 text-white rounded-full flex items-center justify-center shrink-0">
              <span className="material-symbols-rounded text-3xl">send</span>
            </div>
            <div>
              <p className="text-white text-lg font-bold">Ver Postulaciones</p>
              <p className="text-white/70 text-xs font-bold uppercase">
                4 Activas
              </p>
            </div>
          </div>
          {/* Featured Project / Portfolio (Wide) */}
          <div className="col-span-1 md:col-span-6 glass p-10 rounded-xl relative overflow-hidden group">
            <div className="absolute -right-20 -bottom-20 size-80 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-10 bg-red-100 dark:bg-red-500/20 text-red-600 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-rounded">lightbulb</span>
                </div>
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  Proyecto Destacado
                </h2>
              </div>
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl font-black tracking-tighter leading-none text-slate-900 dark:text-white">
                    "Huacay Digital 2024"
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl font-medium">
                    Lideré la implementación de una red intranet educativa para
                    15 instituciones en zonas sin acceso a internet satelital,
                    beneficiando a más de 1,200 estudiantes rurales con
                    contenidos offline de alta calidad.
                  </p>
                  <div className="flex gap-6 pt-4">
                    <div className="flex flex-col">
                      <span className="text-2xl font-black text-primary">
                        1.2k+
                      </span>
                      <span className="text-xs font-bold text-gray-400 uppercase">
                        Impacto Estudiantes
                      </span>
                    </div>
                    <div className="w-px h-10 bg-gray-200 dark:bg-white/10"></div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-black text-primary">
                        15
                      </span>
                      <span className="text-xs font-bold text-gray-400 uppercase">
                        Sedes Implementadas
                      </span>
                    </div>
                  </div>
                  <button className="mt-6 px-8 py-3 bg-[#0d121b] dark:bg-white text-white dark:text-[#0d121b] font-bold rounded-full hover:scale-105 transition-transform">
                    Ver Detalles del Proyecto
                  </button>
                </div>
                <div
                  className="w-full md:w-72 aspect-square rounded-xl bg-gray-200 dark:bg-white/5 border border-white/20 shadow-2xl bg-cover bg-center rotate-3 group-hover:rotate-0 transition-transform duration-500"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAlr-vUfyC1KpdW6YdmS1PymPdIJMnvMmfuiGF05M2zeiDsljt38DzZBlrVbtkf6BRE3a1n9zMxme2u-sU0taMHqyPaU-inLI49mOEdpgcoFgpy243rooK-vAZwN3Gn2kd7ppx-JO-R_gYZovajCEYsaNe0tJziqT0IcVoYUsQK9y6qh3sk-NgX-GIxFXBTfFPoxnAmpO2UHZbUo-YavvmPSPLQHI7yzX6PWLMD29kux6_0j6dkt2HbcYz0qDUn0eWsZH97hwe5pjQ")',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentProfile;
