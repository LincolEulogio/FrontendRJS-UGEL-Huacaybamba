import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      {/* Hero Header Section */}
      <header className="relative h-[600px] flex items-center overflow-hidden">
        <img
          alt="Professional educational setting"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYYh9z8zcfFyqbUe4LV7bcRb1sRC2EvT3RIvKO8jspfUUjmkyzQBqDJDjPxrCZuC7ybD-7ZN9EtkpLQDXKtMNEKZQT65PnM78Ra3zpyT3AD-7P6y2I7SptQuikhN2oQtbYCCxhwsXZ17nFYUljg6kJht3sL1P4A-ToTm0SpGwY4bHLdQIdbQezEInQiBa1AEvcIApNi9n6zEhDt6LvRa7TdV5kunE1a1aB_-QaBVsYx36hcsOGN48kN6SoZ62S1pMMlulLr3R5hRA"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30"></div>
        <div className="relative z-10 max-w-6xl mx-auto w-full px-6">
          <div className="max-w-2xl glass-card p-10 rounded-2xl bg-white/10 text-white">
            <h1 className="md:text-6xl text-4xl font-extrabold mb-6 leading-tight">
              UGEL Huacaybamba
            </h1>
            <p className="md:text-xl text-lg opacity-90 mb-10 leading-relaxed font-light">
              Comprometidos con la excelencia educativa y el desarrollo integral
              de nuestra comunidad estudiantil en Huánuco.
            </p>
            <div className="flex md:flex-row flex-col gap-4">
              <button className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg flex items-center gap-2 group">
                Conoce Más{" "}
                <span className="material-symbols-rounded group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
              <button className="glass-card bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold transition-all border border-white/30">
                Documentos Oficiales
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Nuestra Institución */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8 text-slate-900 dark:text-white">
              Nuestra Institución
            </h2>
            <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                La Unidad de Gestión Educativa Local (UGEL) Huacaybamba es un
                órgano descentralizado del Ministerio de Educación, encargado de
                administrar y supervisar los servicios educativos en el ámbito
                de su jurisdicción territorial.
              </p>
              <p>
                Trabajamos de manera coordinada con las instituciones
                educativas, promoviendo una educación de calidad, inclusiva e
                intercultural que responda a las necesidades y características
                de nuestra comunidad educativa.
              </p>
              <p>
                Nuestro compromiso se centra en fortalecer la gestión pedagógica
                e institucional, brindando acompañamiento técnico y
                desarrollando capacidades en directivos, docentes y personal
                administrativo de las instituciones educativas de nuestra
                jurisdicción.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-2xl"></div>
            <img
              alt="Staff meeting"
              className="relative rounded-2xl shadow-2xl w-full object-cover h-[450px]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgh3xk3_SeePHDzSaM7ceWRvvp8rVpujYx0nVsDcLDZOh2Kg8XRFH0xoYo8fzGUFE0E1adlnuChyDfUm4Ni4pXrygSYmzb_nZ61qDNt4YVWvQDbm_RW9yW-4h5CALcFcx67g-QxyVmS1-aLqLaXH4-W-x7KKRIyeauiFW4M7dnq7mP7OsoxBJasw3M4bSRcyFNyPGeZ-_QIh656elBpGz4xEL1fhHOXATfyanN1RzFtWq7AXVfaZgdmffigCJH2FQjTgzMBabNonY"
            />
          </div>
        </div>
      </section>

      {/* Identidad Institucional */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Identidad Institucional
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              Conoce los pilares fundamentales que definen nuestra labor y
              compromiso con la educación en Huacaybamba
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700">
              <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-primary rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-rounded text-3xl">
                  verified_user
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                Rol de la UGEL
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Órgano ejecutor de la política educativa nacional y regional en
                el ámbito local.
              </p>
            </div>
            <div className="glass-card bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700">
              <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-rounded text-3xl">map</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                Alcance Territorial
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Cobertura integral en toda la provincia de Huacaybamba y sus
                distritos.
              </p>
            </div>
            <div className="glass-card bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700">
              <div className="w-14 h-14 bg-rose-100 dark:bg-rose-900/30 text-rose-600 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-rounded text-3xl">
                  favorite
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                Compromiso Educativo
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Garantizar el derecho a una educación de calidad para todos los
                estudiantes.
              </p>
            </div>
            <div className="glass-card bg-white dark:bg-slate-800/50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700">
              <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-rounded text-3xl">
                  handshake
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-slate-900 dark:text-white">
                Articulación
              </h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                Coordinación efectiva entre instituciones educativas y actores
                locales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vinculación con la Comunidad Educativa */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Vinculación con la Comunidad Educativa
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Construimos puentes sólidos con todos los actores del sistema
            educativo local
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "domain",
              title: "Instituciones Educativas",
              description:
                "Acompañamiento técnico y supervisión pedagógica para el logro de aprendizajes.",
            },
            {
              icon: "school",
              title: "Docentes",
              description:
                "Desarrollo profesional continuo y fortalecimiento de competencias pedagógicas.",
            },
            {
              icon: "person_book",
              title: "Estudiantes",
              description:
                "Garantía de condiciones óptimas para el desarrollo integral y logro de aprendizajes.",
            },
            {
              icon: "family_restroom",
              title: "Padres de Familia",
              description:
                "Participación activa en la formación educativa y desarrollo de sus hijos.",
            },
          ].map((item, index) => (
            <div key={index} className="group text-center">
              <div className="mb-6 mx-auto w-24 h-24 bg-primary text-white rounded-[2rem] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <span className="material-symbols-rounded text-4xl">
                  {item.icon}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">
                {item.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-slate-100 dark:bg-slate-800/30 border-t border-slate-200 dark:border-slate-800 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 dark:text-white">
              Conoce Más Sobre Nuestra Gestión
            </h2>
            <p className="text-slate-500 dark:text-slate-400">
              Explora en detalle nuestra estructura organizativa y los servicios
              que brindamos a la comunidad educativa
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/estructura"
              className="flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-semibold shadow-xl hover:shadow-2xl hover:translate-y-[-2px] transition-all"
            >
              <span className="material-symbols-rounded">account_tree</span>{" "}
              Estructura Organizativa
            </a>
            <a
              href="/documentos-de-gestion"
              className="flex items-center gap-3 bg-white dark:bg-slate-700 text-primary dark:text-white border border-slate-200 dark:border-slate-600 px-8 py-4 rounded-xl font-semibold shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all"
            >
              <span className="material-symbols-rounded">grid_view</span> Áreas
              de Gestión
            </a>
            <a
              href="/documentos"
              className="flex items-center gap-3 bg-white dark:bg-slate-700 text-primary dark:text-white border border-slate-200 dark:border-slate-600 px-8 py-4 rounded-xl font-semibold shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-all"
            >
              <span className="material-symbols-rounded">folder_open</span>{" "}
              Documentos Oficiales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
