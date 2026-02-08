import React from "react";
import { Link } from "react-router-dom";

const Values = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        <div
          className="h-[70vh] w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 51, 102, 0.6), rgba(0, 51, 102, 0.8)), url('https://lh3.googleusercontent.com/aida-public/AB6AXuD_qs5BzaYvGDVdS6_yEzcbfdMXZ6MVm-q2Wu7Iy8lQ1l6sRL4C6sB12U-hIXKXoHBgxiWrTLATpd0HBljmTg2ybsjZDgpwinYnVKSpemGs818G_h99pVY5YplSaoahpf9ckZ9-xnFDNuruvHKUz63UyjShDG_JOr2GArZ_VTMf0wkS5BnABDKDT1xMe211Y67iJ42GrbvAYSr4G6BQ66EG4Xo8HWpnbpxliMCuyRINpPPIEpINUZScI_j_W8wroIhQVbQniZSyW2Y')",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-center container mx-auto px-6">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block px-3 py-1 bg-primary/20 text-blue-400 text-xs font-bold tracking-widest uppercase rounded-full">
              Identidad Institucional
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-extrabold leading-none tracking-tighter">
              Valores Institucionales
            </h1>
            <p className="text-slate-200 text-lg md:text-xl font-medium max-w-xl leading-relaxed">
              Construyendo el futuro de Huacaybamba con integridad, vocación de
              servicio y excelencia educativa para nuestra comunidad altoandina.
            </p>
            <div className="pt-6">
              <Link
                to="/mision-vision"
                className="inline-block bg-primary hover:bg-white hover:text-primary text-white px-8 py-4 rounded-lg font-bold transition-all transform hover:-translate-y-1"
              >
                Conoce nuestra misión
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetric Core Values Grid */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-secondary dark:text-white text-4xl font-extrabold leading-tight tracking-tight">
              Nuestros Pilares Fundamentales
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-4 text-lg">
              Definimos nuestra labor a través de principios que guían a cada
              maestro y administrativo en la provincia.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-primary font-bold flex items-center gap-2">
              Explora nuestra cultura{" "}
              <span className="material-symbols-rounded text-sm">
                arrow_downward
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Integridad - Big Square Block */}
          <div className="md:col-span-7 group relative overflow-hidden rounded-2xl bg-slate-900 h-[500px]">
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105 bg-cover bg-center opacity-70"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD5MproI6nQxjFrwzRtXhnZ5oRiN9VVNz4nHUS64nXwFYcMUlK80YJ31QzzjFTbRqCuK5I7T4fCc7tVioWEaQ3z80MO6yDYFCKbwZAT7oeA2QURP8_zs5X0LrGAYaBYy9X_Jgu5BSDT-XD_dJdrSVAZ_3grgO_MfIcHu7Gidy0Ncy75aDnh7ZXreiW9_922uQdaqESpn-MtApz6J-A4OlsksaikcmVB-dru7dTrNYTLfnppd2vu19CP7Uttq-DQx6ZIAY4BG1UERTg')",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <span className="text-primary font-black text-6xl opacity-20 absolute -top-10 left-8 select-none">
                01
              </span>
              <h3 className="text-white text-4xl font-extrabold mb-4">
                Integridad
              </h3>
              <p className="text-slate-300 text-lg max-w-md leading-relaxed">
                Actuamos con transparencia y rectitud en cada proceso
                administrativo, asegurando la confianza de nuestra comunidad
                educativa.
              </p>
            </div>
          </div>

          {/* Right Column - Two Stacked Cards */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Responsabilidad - Vertical Block */}
            <div className="group relative overflow-hidden rounded-2xl bg-primary/10 h-[240px] flex items-center p-8 border border-primary/20">
              <div className="relative z-10">
                <span className="text-primary mb-4 block">
                  <span className="material-symbols-rounded text-4xl">
                    verified_user
                  </span>
                </span>
                <h3 className="text-secondary dark:text-white text-2xl font-bold mb-2">
                  Responsabilidad
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-snug">
                  Comprometidos con el cumplimiento de nuestras metas
                  pedagógicas y sociales.
                </p>
              </div>
            </div>

            {/* Equidad - Horizontal Block */}
            <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 h-[240px] flex items-center p-8 shadow-xl shadow-slate-200/50 dark:shadow-none">
              <div className="flex gap-6 items-center">
                <div className="h-16 w-16 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <span className="material-symbols-rounded text-3xl">
                    groups
                  </span>
                </div>
                <div>
                  <h3 className="text-secondary dark:text-white text-2xl font-bold mb-2">
                    Equidad
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-snug">
                    Garantizamos oportunidades para todos los estudiantes, sin
                    distinción de origen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Panoramic Respect Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center"
          style={{
            backgroundImage:
              "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCeBB03mk-hhBc2Z486JDSuGqusRfYC0_wKN99lGjEB0OOm4ufGBqdQ-Tsn6wgFCLS094ZCj0jgJFfejFseT1KFLELZtEXUuq4tY-JMZpn_MWU2MMfNbwFK6Ibk8vIKkNYKXzCObozdZLHI1PHVW5Xzl3f43qI5SnPPRjI4vu3sVRmRHakJS-Ee8uDNy9l-ypEyjaOWs-P_ilKpOFmyaqhM57ZFJS0dH9nYmQRxcaESxPf6OMTXJWmBmNg2KqYEm2FxT_2aoaIj3L0')",
          }}
        />
        <div className="absolute inset-0 bg-secondary/40 backdrop-blur-[2px]"></div>
        <div className="relative h-full flex items-center justify-center px-6">
          <div className="max-w-4xl text-center bg-white/10 backdrop-blur-xl p-10 md:p-16 rounded-3xl border border-white/20 shadow-2xl">
            <span className="text-blue-400 font-bold tracking-widest uppercase text-sm block mb-6">
              Convivencia Armoniosa
            </span>
            <h2 className="text-white text-4xl md:text-6xl font-extrabold mb-8 tracking-tighter">
              Respeto &amp; Diversidad
            </h2>
            <p className="text-slate-100 text-lg md:text-xl leading-relaxed">
              Valoramos la riqueza cultural de nuestra provincia, fomentando una
              convivencia armoniosa y el respeto mutuo en cada aula rural. La
              diversidad es nuestra mayor fortaleza para el aprendizaje
              colectivo.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <div className="flex -space-x-3">
                <img
                  alt="Docente local"
                  className="w-12 h-12 rounded-full border-2 border-white"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA01HDC4ACeHBxgM1-K7dzNE9CgI29L-4ZzzOqD7Xtd6sDzd4Qcx-gj0mLRLg6WseCxgA3rD-Nvz1_0L6dgJ-J6T0dZECXp2ADiOTtzOGdfbSiyIv4bhVizQ80geg_LpFqf5u4n6JiCKHYmU4PePHSe1BJZhcthsNKrB1Cm8IT5Sv7dLpMh9Cddmf_lwJNxB9h6c_nM4FnXf-x81ie-U8_IxkPxf-y_xp6Py_0bjhY1a7WDATDqSLnzaStZxyaLNOrwbyLXMkv8gZ4"
                />
                <img
                  alt="Estudiante local"
                  className="w-12 h-12 rounded-full border-2 border-white"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZSxjz02v1gLbjVHX9u8m2_KutPkPsMmtmZc6ARqPMGKpmzuyFGdiyE4WNpHi0rLW4ogjHD7UchaGWvNdT_s9Ojz4Hx1dQtgPkKNvmm7uIFC6Id8AhMyRV2HlRDnin_4RhkoEe8oXK-1w-RbZCD2DCHqIwla5LUHAy2Qwvx0uoVbJ8Oab1J30T3OMP9N7IxUdtQdlolldWckIU62V3bQR2Z2SVJMrt-ZPqLVqS-VhXIR5BYZ0yWD13zyxecxvscJvOo3C4_g4GllQ"
                />
                <img
                  alt="Padre de familia"
                  className="w-12 h-12 rounded-full border-2 border-white"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuATqO_1SVK2fz67PeDfusgmOsIyNumVVNDCtMFCkVIFC2Mlxd2WE44TN9bOlMSBZP-JiDHZKbeYBT3n2Gz8f1L3a-sF5SAdIiuxOTE_I1dwpO6I2vA0TPOXQieEy48JqKOyRzT2M89XbXugmj-MUUOkrrI9ISYPUAly1P5od6qX7rB7rzWyozMuN43-Xt0m3A1cqIybNxiCF_SSIkw5h_tHeC2R3bILXqX3DJT6Tf9qimU-5P9-IhOeB57a1jdaiHZABp8TuHcKIio"
                />
              </div>
              <span className="text-white text-sm self-center font-semibold ml-2">
                +2,000 miembros de la comunidad
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation & Leadership Grid */}
      <section className="py-24 container px-6 mx-auto bg-white dark:bg-background-dark">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-video lg:aspect-auto lg:h-[500px]">
              <img
                alt="Tecnología educativa"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNxUL47th2kQ-RpYapEPp1eP--ZjFueMeLlIggfXkejK3CK3Q-8f33_yWA7ZXfr2hP-0mfFywKApNNn5LA4BGE8_1oVBh7E9ZzeyyZJht6ViMoXYsAh9nlzBqwy4tUH_J_rAEyhjhMlHdLaCP3YJag-6S_8hwcZ8IS2-ZLx-JTLQMGYMYT2uE5Ht0YuMM5aAv-k81ErYNCIMUAhMh0VPIuThyD66cIO2lIC3XJWL0LwlfyTxqOchbLt9ZGSN5_XXFY2tkRMS5ydOk"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 hidden lg:block w-48 h-48 bg-primary rounded-2xl -z-0"></div>
          </div>

          <div className="lg:col-span-4 space-y-8">
            <div>
              <h2 className="text-secondary dark:text-white text-4xl font-extrabold leading-tight mb-6">
                Innovación y Liderazgo
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                Miramos hacia el futuro integrando nuevas tecnologías y
                liderando el cambio pedagógico en la región Huánuco.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <span className="material-symbols-rounded">lightbulb</span>
                </div>
                <div>
                  <h4 className="font-bold text-secondary dark:text-white">
                    Pensamiento Crítico
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Fomentamos la curiosidad y la resolución de problemas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <span className="material-symbols-rounded">
                    rocket_launch
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-secondary dark:text-white">
                    Transformación Digital
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Capacitación constante en herramientas TIC.
                  </p>
                </div>
              </div>
            </div>

            <button className="w-full lg:w-auto px-8 py-3 bg-secondary dark:bg-slate-700 text-white rounded-lg font-bold hover:bg-primary transition-colors">
              Nuestros Proyectos
            </button>
          </div>
        </div>
      </section>

      {/* Commitment Footer Area */}
      <section className="relative bg-secondary py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-10 grayscale">
          <img
            alt="Equipo UGEL"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr0IG52T1K9kevgcaYpQcORoNK0WMXz3A7Ik02Iw-JDTbKg3iRDqcT48li1mKRRc5V_r38VFEkMS00Q8U2-cQ7KaE7wN56jycw-azjbzoL3KXxfTzpw686a0G3SSD6FTHmjwRG86-ImkKi7hGQmRHpRvGmjSSWM3nc9nnu9ioEipZO5pTYjq-YwEviib09Nz46tEd1mG1qfjf9qXoJpOZgs959tYWBxp8l3jxyV60tn8ymahlZrXohbTKwfVRcpx7dKew5zYobdBM"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-white text-4xl md:text-5xl font-extrabold tracking-tight">
              Nuestro Compromiso con la Calidad Educativa
            </h2>
            <p className="text-blue-100 text-lg md:text-xl font-medium leading-relaxed">
              Trabajamos día a día para que cada niño y niña de Huacaybamba
              reciba una educación digna, moderna y con valores firmes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <a href="/contacto" className="bg-primary text-white px-10 py-4 rounded-xl font-bold shadow-xl shadow-black/20 hover:bg-blue-600 transition-all">
                Contáctanos ahora
              </a>
              <a href="/directorio" className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                Directorio Institucional
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Values;
