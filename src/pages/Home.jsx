import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import WelcomeModal from "../components/WelcomeModal";
import HeroSlider from "../components/HeroSlider";

const Home = () => {
  useEffect(() => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <div>
      {/* Hero Image Slider Section */}
      <HeroSlider />

      {/* Aplicativos de Interés */}
      <section
        className="max-w-6xl mx-auto py-20 relative z-10"
        data-aos="fade-up"
      >
        <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl rounded-[32px] p-10 shadow-2xl border border-white/20 dark:border-slate-700/50">
          <div
            className="text-center mb-10"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            <h2 className="text-3xl font-extrabold mb-2 dark:text-white">
              Aplicativos de Interés
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Accede rápidamente a los servicios y plataformas digitales más
              utilizados.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div
              className="group bg-blue-50 dark:bg-blue-900/20 p-6 rounded-2xl border border-blue-100 dark:border-blue-800/50 hover:shadow-xl hover:shadow-blue-200/50 dark:hover:shadow-none transition-all duration-300 hover:-translate-y-2 cursor-pointer text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                <span className="material-symbols-rounded text-3xl">
                  folder_shared
                </span>
              </div>
              <h3 className="font-bold text-lg mb-1 dark:text-white">
                Expedientes
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Seguimiento en línea
              </p>
            </div>
            <div
              className="group bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-2xl border border-emerald-100 dark:border-emerald-800/50 hover:shadow-xl hover:shadow-emerald-200/50 dark:hover:shadow-none transition-all duration-300 hover:-translate-y-2 cursor-pointer text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="w-14 h-14 bg-emerald-600 text-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                <span className="material-symbols-rounded text-3xl">
                  campaign
                </span>
              </div>
              <h3 className="font-bold text-lg mb-1 dark:text-white">
                Convocatorias
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Procesos vigentes
              </p>
            </div>
            <div
              className="group bg-purple-50 dark:bg-purple-900/20 p-6 rounded-2xl border border-purple-100 dark:border-purple-800/50 hover:shadow-xl hover:shadow-purple-200/50 dark:hover:shadow-none transition-all duration-300 hover:-translate-y-2 cursor-pointer text-center"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="w-14 h-14 bg-purple-600 text-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-purple-500/30 group-hover:scale-110 transition-transform">
                <span className="material-symbols-rounded text-3xl">
                  school
                </span>
              </div>
              <h3 className="font-bold text-lg mb-1 dark:text-white">Becas</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Oportunidades
              </p>
            </div>
            <div
              className="group bg-amber-50 dark:bg-amber-900/20 p-6 rounded-2xl border border-amber-100 dark:border-amber-800/50 hover:shadow-xl hover:shadow-amber-200/50 dark:hover:shadow-none transition-all duration-300 hover:-translate-y-2 cursor-pointer text-center"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="w-14 h-14 bg-amber-600 text-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform">
                <span className="material-symbols-rounded text-3xl">
                  article
                </span>
              </div>
              <h3 className="font-bold text-lg mb-1 dark:text-white">
                Documentos
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Normativas oficiales
              </p>
            </div>
            <div
              className="group bg-rose-50 dark:bg-rose-900/20 p-6 rounded-2xl border border-rose-100 dark:border-rose-800/50 hover:shadow-xl hover:shadow-rose-200/50 dark:hover:shadow-none transition-all duration-300 hover:-translate-y-2 cursor-pointer text-center"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="w-14 h-14 bg-rose-600 text-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-rose-500/30 group-hover:scale-110 transition-transform">
                <span className="material-symbols-rounded text-3xl">
                  handshake
                </span>
              </div>
              <h3 className="font-bold text-lg mb-1 dark:text-white">
                Convivencia
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Reporte SISEVE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Acceso a Servicios y Transparencia */}
      <section className="relative h-auto overflow-hidden py-16 px-6">
        <img
          alt="Vista Panorámica de Huacaybamba"
          className="absolute inset-0 w-full h-full object-cover scale-110"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdj3cfxtHOQZ1JlWN_npzr_iWL1Sjl5rkPWHjAYsds0ks0mpZzXUfOh_XKbGEaiiXQdswDBVoOtfMj3DAlZ6nZY-ez7nf4mE1g8eHtUB3IJUwkuRVG8S4BH4FTI00Xd9z_XYWQY8S5hVaan805ZSHkT2cTSan1pZnqSt8-FSmvvPhwtfTTQrcetYLWxr1L82mjAU-ARUEIDm9Ot0F5uDwBkpHn-ahP31_gvJpxnGXEOaMKb31-HmB7eNNQMq6dwNjJXHangf7Q8DE"
          data-aos="fade"
          data-aos-duration="1500"
        />
        <div className="absolute inset-0 bg-slate-900/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <div className="relative z-10 container mx-auto flex flex-col min-[1440px]:flex-row items-center gap-6 min-[1440px]:gap-10">
          <div
            className="w-full min-[1440px]:w-1/4 text-center min-[1440px]:text-left"
            data-aos="fade-right"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
              Acceso a Servicios y Transparencia
            </h2>
            <p className="text-white/80 text-sm md:text-base mb-6 md:mb-0">
              Herramientas y canales para una gestión abierta y participativa.
            </p>
          </div>
          <div className="w-full min-[1440px]:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div
                className="glass-card p-5 md:p-6 rounded-2xl text-white group cursor-pointer hover:bg-white/30 transition-all"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-rounded text-2xl md:text-3xl bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform">
                    visibility
                  </span>
                  <h3 className="font-bold text-base md:text-lg leading-tight">
                    Portal de Transparencia
                  </h3>
                </div>
                <p className="text-white/80 mb-4 text-xs md:text-sm">
                  Información pública y rendición de cuentas.
                </p>
                <a
                  className="inline-flex items-center gap-2 font-bold text-xs md:text-sm group-hover:gap-3 transition-all underline decoration-2 underline-offset-4"
                  href="#"
                >
                  Acceder{" "}
                  <span className="material-symbols-rounded text-sm md:text-base">
                    arrow_forward
                  </span>
                </a>
              </div>
              <div
                className="glass-card p-5 md:p-6 rounded-2xl text-white group cursor-pointer hover:bg-white/30 transition-all"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-rounded text-2xl md:text-3xl bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform">
                    warning
                  </span>
                  <h3 className="font-bold text-base md:text-lg leading-tight">
                    Denuncias Anónimas
                  </h3>
                </div>
                <p className="text-white/80 mb-4 text-xs md:text-sm">
                  Canal seguro para reportar irregularidades.
                </p>
                <a
                  className="inline-flex items-center gap-2 font-bold text-xs md:text-sm group-hover:gap-3 transition-all underline decoration-2 underline-offset-4"
                  href="#"
                >
                  Reportar{" "}
                  <span className="material-symbols-rounded text-sm md:text-base">
                    arrow_forward
                  </span>
                </a>
              </div>
              <div
                className="glass-card p-5 md:p-6 rounded-2xl text-white group cursor-pointer hover:bg-white/30 transition-all"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-rounded text-2xl md:text-3xl bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform">
                    request_quote
                  </span>
                  <h3 className="font-bold text-base md:text-lg leading-tight">
                    Información Pública
                  </h3>
                </div>
                <p className="text-white/80 mb-4 text-xs md:text-sm">
                  Solicitudes formales de acceso a la información.
                </p>
                <a
                  className="inline-flex items-center gap-2 font-bold text-xs md:text-sm group-hover:gap-3 transition-all underline decoration-2 underline-offset-4"
                  href="#"
                >
                  Solicitar{" "}
                  <span className="material-symbols-rounded text-sm md:text-base">
                    arrow_forward
                  </span>
                </a>
              </div>
              <div
                className="glass-card p-5 md:p-6 rounded-2xl text-white group cursor-pointer hover:bg-white/30 transition-all"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="material-symbols-rounded text-2xl md:text-3xl bg-white/20 p-2 rounded-lg group-hover:scale-110 transition-transform">
                    forum
                  </span>
                  <h3 className="font-bold text-base md:text-lg leading-tight">
                    Participación Ciudadana
                  </h3>
                </div>
                <p className="text-white/80 mb-4 text-xs md:text-sm">
                  Espacios de diálogo y vigilancia ciudadana.
                </p>
                <a
                  className="inline-flex items-center gap-2 font-bold text-xs md:text-sm group-hover:gap-3 transition-all underline decoration-2 underline-offset-4"
                  href="#"
                >
                  Participar{" "}
                  <span className="material-symbols-rounded text-sm md:text-base">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trámites y Servicios */}
      <section className="max-w-4xl mx-auto py-24 px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold mb-4 dark:text-white">
            Trámites y Servicios
          </h2>
          <p className="text-slate-500 dark:text-slate-400">
            Simplificamos tu gestión administrativa con acceso directo a todos
            nuestros servicios.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
          {[
            { icon: "inventory_2", title: "Sistema de Gestión Digital" },
            { icon: "laptop_chromebook", title: "Directorio Institucional" },
            { icon: "settings_applications", title: "Acceso a Intranet" },
            { icon: "description", title: "Formato Único de Trámite" },
            { icon: "assignment", title: "Documentos de Gestión" },
            { icon: "cast_for_education", title: "Aula Virtual" },
            { icon: "assignment_turned_in", title: "Mi Boleta" },
            { icon: "image", title: "Galería de Imágenes" },
            { icon: "edit_square", title: "Registro de Visitas" },
          ].map((item, index) => (
            <a
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-blue-500/20 hover:border-blue-500 shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all flex flex-col items-center text-center justify-center min-h-[160px]"
              href="#"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-rounded text-4xl text-blue-600">
                  {item.icon}
                </span>
              </div>
              <h3 className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide leading-tight px-2">
                {item.title}
              </h3>
            </a>
          ))}
        </div>
      </section>

      {/* Gestión Institucional */}
      <section className="bg-primary/5 dark:bg-slate-900/50 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-4 dark:text-white">
              Gestión Institucional
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Comprometidos con el desarrollo educativo de Huacaybamba.
            </p>
          </div>
          <div
            className="bg-white dark:bg-slate-800 rounded-[40px] shadow-2xl overflow-hidden flex flex-col lg:flex-row items-center border border-slate-100 dark:border-slate-700"
            data-aos="zoom-in"
          >
            <div
              className="lg:w-1/2 p-12 lg:p-20"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <span className="inline-block bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300 px-6 py-2 rounded-full font-bold text-sm mb-8">
                Gestión Vigente 2024 - 2026
              </span>
              <h3 className="text-4xl font-extrabold mb-6 dark:text-white">
                Mensaje del Director de la UGEL Huacaybamba
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg italic">
                <p>
                  "Es un honor dirigirme a ustedes para liderar esta gestión.
                  Nuestro compromiso es transformar la educación en nuestra
                  provincia, fomentando un entorno de inclusión, innovación y
                  excelencia académica para cada estudiante."
                </p>
                <p>
                  "Trabajamos incansablemente para asegurar que nuestras
                  instituciones sean espacios de crecimiento real, donde el
                  talento de nuestros niños y jóvenes florezca sin límites."
                </p>
              </div>
              <div className="mt-12 gap-6">
                <div>
                  <p className="font-extrabold text-2xl dark:text-white">
                    Dr. Juan Carlos Pérez
                  </p>
                  <p className="text-primary font-bold tracking-wide mt-2 mb-4">
                    DIRECTOR - UGEL HUACAYBAMBA
                  </p>
                </div>
                <div className="flex gap-2">
                  <a
                    className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all transform hover:scale-110"
                    href="#"
                  >
                    <span className="material-symbols-rounded text-lg">
                      facebook
                    </span>
                  </a>
                  <a
                    className="w-10 h-10 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center hover:bg-sky-600 hover:text-white transition-all transform hover:scale-110"
                    href="#"
                  >
                    <span className="material-symbols-rounded text-lg">
                      public
                    </span>
                  </a>
                  <a
                    className="w-10 h-10 bg-red-100 text-red-600 rounded-full flex items-center justify-center hover:bg-red-600 hover:text-white transition-all transform hover:scale-110"
                    href="#"
                  >
                    <span className="material-symbols-rounded text-lg">
                      play_circle
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative bg-slate-50 dark:bg-slate-900/50 self-stretch flex justify-center items-end pt-20 overflow-hidden">
              <img
                alt="Director UGEL"
                className="w-[80%] h-[90%] object-cover object-top rounded-t-full shadow-2xl border-x-8 border-t-8 border-white dark:border-slate-800 transition-transform duration-700 hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlo7xPFH2-4zFjkLX1JWlliXBhJbxAut0IjIGeo9m4AFgY0GB4YBGsttrvpq7y8MJAB9C6JpcXOiU2FL2pm7CB8WKVZ9M9NHlfklax0PocmOhC65IEGQ9CPMpyVbZly4bBJJl0Wf3Hol-IzPkXpAN08DiBTRcs7Fbf5n7pXncYSWaUuH9msQ2_nb7c_nVBDzNDX1gOtU-A_82TNLSlChfa6AN9zShsF83Jj89ojoP0UOT_0DE8s7BOXcCrkiaqJ8rIEHUIble01eQ"
                data-aos="fade-up"
                data-aos-delay="400"
              />
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute top-10 left-10 w-32 h-32 bg-amber-400/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Directorio de Funcionarios */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-end mb-16">
          <div>
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">
              Nuestro Equipo
            </p>
            <h2 className="text-4xl font-extrabold dark:text-white">
              Directorio de Funcionarios
            </h2>
          </div>
          <a
            className="bg-slate-200 dark:bg-slate-800 px-6 py-3 rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-all"
            href="/directorio"
          >
            Ver todo el directorio
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Dra. Martha Quispe",
              role: "Directora del Área de Gestión Pedagógica",
              email: "m.quispe@ugelhuacaybamba.gob.pe",
              location: "Oficina de Pedagogía - Piso 2",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuD9epMDik9z9bVB2FMctS453SzVWubHW6xnlVrAuigz-PnaAWDrf8snCbYrxQr7duuKfIzqaGEUmSf0crmf2ui4JD2AxuO2rhDQc9i4w3Men9UvB8UsYDqZOAuqYxhaTnPFa8Faq5Uk5pdOosC6PmL-ZAhHVsW6vhUoQylkW6qpdaQUqmkntoLkO-Bq7oEv4zXRTuHfaeg5Mpm_ijZy5AXw5h7sPZjDMVR53kTOqOxxAYUu0YZBKUtmNYrNWeWdrVycadoXyMSvopI",
            },
            {
              name: "Ing. Roberto Vizcarra",
              role: "Jefe de Tecnologías de la Información",
              email: "r.vizcarra@ugelhuacaybamba.gob.pe",
              location: "Oficina OTIC - Sede Central",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCpghnaJazwh3qw3L2a9svyHe0dev1k2f32ayrbx6hFTe_KrGntW9cL-8ypAtN0S79BNeW0DMgjZfopzMZrwVAxvHUmkaLBXEXfsNEJfQGlc7jdt6j-VTsO7dCouS30bo4tyQ2pfOnwdJupoYcvj3Ra9qt-97CwlUZfQDNu1uAVH0cmBAX77lUUNufLymK61KaV0wyVDg2EpnBwpVWnqY6L6BMIglLKfHEWhLXPhQo2I60PXeR-MPiCXzMmJUeP3woXcKvgJ_C-L3A",
            },
            {
              name: "Lic. Carlos Mendoza",
              role: "Especialista en Recursos Humanos",
              email: "c.mendoza@ugelhuacaybamba.gob.pe",
              location: "Oficina de Personal - Piso 1",
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuBH5eg5eaht_--V2vnh-zUjaxIe7tpgfgNfC69A4wjfXYF1V2OnF7xkyRiarJ1rNtIgLEcGa0zm5uaPUPNofz_p9u_o-k8SLvdAOAiE9ahNC1yCeBDEXop1MHwxl6VAGnx0a6SdMoTZp1Xpg422WP2nDD8Q366P_8dlI-Lg5IALNGs2hjP-aCymB82ThM17DYh9f1yD1UJqK0c3un5ROk5WCK-IYXfUnkd6tjUW2riqMt80DuTMf1D7vaIVZXojeEVB0KYKWptBIgw",
            },
          ].map((person, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all group overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square">
                <img
                  alt={person.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  src={person.image}
                />
                <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2 translate-y-24 group-hover:translate-y-0 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                  <button className="w-12 h-12 bg-white/95 backdrop-blur shadow-lg rounded-full flex items-center justify-center text-slate-800 hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                    <span className="material-symbols-rounded text-xl">
                      mail
                    </span>
                  </button>
                  <button className="w-12 h-12 bg-white/95 backdrop-blur shadow-lg rounded-full flex items-center justify-center text-slate-800 hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                    <span className="material-symbols-rounded text-xl">
                      call
                    </span>
                  </button>
                  <button className="w-12 h-12 bg-white/95 backdrop-blur shadow-lg rounded-full flex items-center justify-center text-slate-800 hover:bg-primary hover:text-white transition-all transform hover:scale-110">
                    <span className="material-symbols-rounded text-xl">
                      share
                    </span>
                  </button>
                </div>
              </div>
              <h4 className="font-bold text-2xl mb-1 dark:text-white group-hover:text-primary transition-colors">
                {person.name}
              </h4>
              <p className="text-primary font-bold text-sm mb-4">
                {person.role}
              </p>
              <div className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-rounded text-lg text-primary/60">
                    alternate_email
                  </span>{" "}
                  {person.email}
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-rounded text-lg text-primary/60">
                    location_on
                  </span>{" "}
                  {person.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Estadísticas */}
      <section className="bg-secondary py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            {
              icon: "domain",
              number: "156",
              label: "Instituciones Educativas",
            },
            { icon: "group", number: "12,450", label: "Estudiantes" },
            { icon: "cast_for_education", number: "890", label: "Docentes" },
            { icon: "stars", number: "98%", label: "Nivel de Satisfacción" },
          ].map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
              data-aos="zoom-out"
              data-aos-delay={index * 150}
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 transform transition-transform group-hover:rotate-12">
                <span className="material-symbols-rounded text-4xl">
                  {stat.icon}
                </span>
              </div>
              <div className="text-5xl font-black text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white/60 font-medium uppercase tracking-widest text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Últimas Noticias */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-extrabold dark:text-white">
            Últimas Noticias
          </h2>
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              <span className="material-symbols-rounded">chevron_left</span>
            </button>
            <button className="w-12 h-12 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
              <span className="material-symbols-rounded">chevron_right</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuDi2HrawoxpNYFOinTyn4-3JtrAOUFr4ZHlUDtCIrJcvx5HnKpbWtyIbuonjlZ1DjTUQpQvP1U55rp-OKMptleicjNIimELsvkkd97PAxRSEHScgAdWAMqL5Cu5L5oxJTHuEndVHyAMWStwBl5VdpN3P6a94pheJKG3ygL1yzTo7U-fcsMQHfSbgkMSx5hxf2jioPcT51QzWbbbo0iEstG8fr0dXdwJOnfORJGKf0sJih4ZL4E4TQ4qxiMwiW70Ja57YjhucacFN4I",
              badge: "Nuevo",
              badgeColor: "orange",
              date: "15 Ene 2024",
              author: "UGEL Prensa",
              title: "Protocolos de Inicio de Año Escolar 2025",
              excerpt:
                "Se establecen los nuevos lineamientos para garantizar un retorno a clases seguro y eficiente en todas las instituciones de la jurisdicción...",
            },
            {
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuByHzw-nSry-1TJvlt-579SfhrH-UBvWlZ9owvLroFGzaVP08hClNQ4a2EIxXmmAOxJGKXTsGMcahWmOHBTGHoFkGLoe5sc6JG3DvOY7OecidkBqUZ7ySQfAo1j9EDh6bonbcVqlupvbN48bvv7QeLRqSTmHdT5lfnVA7QEK61DlqLyLLFOD4SGp_ZEg73ImxGaniDq0wcMVCfrTG6xL8yBaba5y5zSKyQs2ijDkTMFSRPRveWhdMjp6cW5awJgQdgv9R1L3We_Rfs",
              badge: "Capacitación",
              badgeColor: "blue",
              date: "12 Ene 2024",
              author: "Gestión Pedagógica",
              title: "Taller de Innovación para Docentes Rurales",
              excerpt:
                "Fortalecimiento de capacidades en metodologías activas y herramientas digitales adaptadas al contexto rural de nuestra provincia...",
            },
            {
              image:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuA3yf-LMC5m6Uq79cjf1FQMAivxIeNQ7uY_qtwOA9IHcZcsPR1woENYjF9mA79NB9dYssyf-apBnrpI3c4rZZedtmAWr7hEHpDCJFeBKnhH36T09IfPsd_Fx99S6wZL6kOFEwL8UaaMA1n4JjURDvBtlqXLJSTDavVvUGk2zEa_fC8NKVdYyO-JQtpevDVVj7vzmdxOejECvOuia19ds8a7Cn2Pshtukt7lQ2ezZqGtlLegdPE_fxwuvpxF_ZeUI5OMGgevBfds2Gk",
              badge: "Infraestructura",
              badgeColor: "emerald",
              date: "10 Ene 2024",
              author: "Infraestructura",
              title: "Mejoramiento de II.EE. en Huacaybamba",
              excerpt:
                "Supervisión de obras de mantenimiento preventivo en 25 instituciones educativas para asegurar ambientes óptimos el próximo año...",
            },
          ].map((news, index) => (
            <article
              key={index}
              className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all border border-slate-100 dark:border-slate-700"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="h-64 relative overflow-hidden">
                <img
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src={news.image}
                />
                <span
                  className={`absolute top-4 left-4 bg-${news.badgeColor}-500 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg`}
                >
                  {news.badge}
                </span>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-slate-400 text-sm mb-4">
                  <span className="flex items-center gap-1 group-hover:text-primary transition-colors">
                    <span className="material-symbols-rounded text-base">
                      calendar_today
                    </span>{" "}
                    {news.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="material-symbols-rounded text-base">
                      person
                    </span>{" "}
                    {news.author}
                  </span>
                </div>
                <h3 className="font-extrabold text-2xl mb-4 group-hover:text-primary transition-colors dark:text-white leading-tight">
                  {news.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 mb-8 line-clamp-3">
                  {news.excerpt}
                </p>
                <a
                  className="inline-flex items-center gap-2 font-extrabold text-primary group-hover:gap-4 transition-all"
                  href="#"
                >
                  Leer más{" "}
                  <span className="material-symbols-rounded">
                    arrow_right_alt
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Convocatorias Vigentes */}
      <section className="bg-slate-100 dark:bg-slate-900/30 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 md:flex md:justify-center md:items-center md:gap-6">
            <div>
              <h2 className="text-4xl font-extrabold mb-4 dark:text-white">
                Convocatorias Vigentes
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                Encuentra oportunidades de desarrollo profesional en nuestra
                institución.
              </p>
            </div>
            <a
              className="text-primary font-bold flex items-center gap-2 md:ml-auto hover:gap-4 transition-all mt-2 md:mt-0"
              href="#"
            >
              Ver todas las convocatorias{" "}
              <span className="material-symbols-rounded">trending_flat</span>
            </a>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                deadline: "25 Enero 2025",
                code: "CAS Nº 001-2025",
                title: "Contrato Docente 2025 - Nivel Inicial",
                description:
                  "Proceso de contratación de docentes para plazas vacantes en instituciones de educación inicial de la provincia de Huacaybamba.",
                published: "hace 2 días",
                files: "3 Archivos PDF",
              },
              {
                deadline: "30 Enero 2025",
                code: "CAS Nº 002-2025",
                title: "Concurso de Directores y Subdirectores",
                description:
                  "Selección de cargos directivos bajo la modalidad de encargatura para el periodo lectivo 2025 en instituciones de educación básica.",
                published: "hoy",
                files: "5 Archivos PDF",
              },
            ].map((conv, index) => (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 p-8 rounded-3xl border border-slate-100 dark:border-slate-700 flex flex-col md:flex-row gap-8 items-start hover:shadow-2xl transition-all group"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 200}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                      Cierre: {conv.deadline}
                    </span>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                      {conv.code}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold mb-4 group-hover:text-primary transition-colors dark:text-white leading-tight">
                    {conv.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                    {conv.description}
                  </p>
                  <div className="flex items-center gap-6 text-xs font-bold text-slate-400">
                    <span className="flex items-center gap-1 group-hover:text-primary transition-colors">
                      <span className="material-symbols-rounded text-sm">
                        schedule
                      </span>{" "}
                      Publicado: {conv.published}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-rounded text-sm">
                        description
                      </span>{" "}
                      {conv.files}
                    </span>
                  </div>
                </div>
                <button className="w-full md:w-auto bg-primary text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:shadow-primary/30 transition-all self-center transform hover:scale-105">
                  Ver Detalles
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal de bienvenida */}
      <WelcomeModal />
    </div>
  );
};

export default Home;
