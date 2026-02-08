import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white mt-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-6xl mx-auto py-20 px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1 - About */}
          <div data-aos="fade-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center p-2 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  alt="UGEL Logo"
                  className="w-full h-full object-contain"
                  src="/logo-ugel-huacaybamba.png"
                />
              </div>
              <div>
                <h4 className="font-black text-xl tracking-tight uppercase leading-none">
                  UGEL <br />
                  <span className="text-primary">Huacaybamba</span>
                </h4>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-8 font-medium">
              Comprometidos con la excelencia educativa y el desarrollo integral
              de nuestra comunidad estudiantil en la provincia de Huacaybamba.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/5 hover:bg-primary flex items-center justify-center transition-all transform hover:scale-110 hover:shadow-xl hover:shadow-primary/30 group"
              >
                <span className="material-symbols-rounded text-xl group-hover:rotate-12 transition-transform">
                  share
                </span>
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/5 hover:bg-primary flex items-center justify-center transition-all transform hover:scale-110 hover:shadow-xl hover:shadow-primary/30 group"
              >
                <span className="material-symbols-rounded text-xl group-hover:rotate-12 transition-transform">
                  mail
                </span>
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-xl bg-white/5 hover:bg-primary flex items-center justify-center transition-all transform hover:scale-110 hover:shadow-xl hover:shadow-primary/30 group"
              >
                <span className="material-symbols-rounded text-xl group-hover:rotate-12 transition-transform">
                  smart_display
                </span>
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h5 className="font-extrabold text-lg mb-8 relative inline-block">
              Enlaces Rápidos
              <span className="absolute bottom-[-10px] left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h5>
            <ul className="space-y-4 text-sm text-white/50">
              <li>
                <Link
                  to="/"
                  className="hover:text-white hover:font-bold transition-all hover:pl-2 block duration-300 ease-out"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/quienes-somos"
                  className="hover:text-white hover:font-bold transition-all hover:pl-2 block duration-300 ease-out"
                >
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link
                  to="/mision-vision"
                  className="hover:text-white hover:font-bold transition-all hover:pl-2 block duration-300 ease-out"
                >
                  Misión y Visión
                </Link>
              </li>
              <li>
                <Link
                  to="/historia"
                  className="hover:text-white hover:font-bold transition-all hover:pl-2 block duration-300 ease-out"
                >
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link
                  to="/directorio"
                  className="hover:text-white hover:font-bold transition-all hover:pl-2 block duration-300 ease-out"
                >
                  Directorio
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Transparency */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h5 className="font-extrabold text-lg mb-8 relative inline-block">
              Transparencia
              <span className="absolute bottom-[-10px] left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h5>
            <ul className="space-y-4 text-sm text-white/50">
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:font-bold transition-all hover:pl-2 block duration-300 ease-out"
                >
                  Portal de Transparencia
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:font-bold transition-all hover:pl-2 block duration-300 ease-out"
                >
                  Libro de Reclamaciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:font-bold transition-all hover:pl-2 block duration-300 ease-out"
                >
                  Acceso a Información
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white hover:font-bold transition-all hover:pl-2 block duration-300 ease-out"
                >
                  Rendición de Cuentas
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div data-aos="fade-up" data-aos-delay="300">
            <h5 className="font-extrabold text-lg mb-8 relative inline-block">
              Contacto Sede
              <span className="absolute bottom-[-10px] left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h5>
            <ul className="space-y-5 text-sm">
              <li className="flex gap-4 items-start text-white/50 group">
                <span className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-rounded text-xl">
                    location_on
                  </span>
                </span>
                <span className="group-hover:text-white transition-colors duration-300 font-medium">
                  Av. 28 de Julio Nº 502, <br /> Huacaybamba, Huánuco
                </span>
              </li>
              <li className="flex gap-4 items-start text-white/50 group">
                <span className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-rounded text-xl">
                    phone
                  </span>
                </span>
                <span className="group-hover:text-white transition-colors duration-300 font-medium">
                  998 872 733
                </span>
              </li>
              <li className="flex gap-4 items-start text-white/50 group">
                <span className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <span className="material-symbols-rounded text-xl">mail</span>
                </span>
                <span className="group-hover:text-white transition-colors duration-300 font-medium break-all text-xs lg:text-sm">
                  ue307hbba@hotmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-xs font-bold uppercase tracking-widest">
          <p>© 2024 UGEL HUACAYBAMBA. GESTIÓN CON EXCELENCIA.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-all">
              Términos
            </a>
            <a href="#" className="hover:text-white transition-all">
              Privacidad
            </a>
            <a href="#" className="hover:text-white transition-all">
              Intranet
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
