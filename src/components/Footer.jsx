import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white mt-20">
      <div className="container mx-auto py-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
                <img
                  alt="UGEL Logo"
                  className="w-full h-full object-contain"
                  src="/logo-ugel-huacaybamba.png"
                />
              </div>
              <div>
                <h4 className="font-bold text-lg">UGEL Huacaybamba</h4>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Comprometidos con la excelencia educativa y el desarrollo integral
              de nuestra comunidad estudiantil en Huánuco.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors accent-color"
              >
                <span className="material-symbols-rounded text-sm">share</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors accent-color"
              >
                <span className="material-symbols-rounded text-sm">mail</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors accent-color"
              >
                <span className="material-symbols-rounded text-sm">
                  smart_display
                </span>
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h5 className="font-bold text-lg mb-6">Enlaces Rápidos</h5>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <Link
                  to="/"
                  className="hover:text-white transition-colors hover:pl-2 block duration-200"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  to="/quienes-somos"
                  className="hover:text-white transition-colors hover:pl-2 block duration-200"
                >
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link
                  to="/mision-vision"
                  className="hover:text-white transition-colors hover:pl-2 block duration-200"
                >
                  Misión y Visión
                </Link>
              </li>
              <li>
                <Link
                  to="/historia"
                  className="hover:text-white transition-colors hover:pl-2 block duration-200"
                >
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link
                  to="/valores"
                  className="hover:text-white transition-colors hover:pl-2 block duration-200"
                >
                  Valores
                </Link>
              </li>
              <li>
                <Link
                  to="/directorio"
                  className="hover:text-white transition-colors hover:pl-2 block duration-200"
                >
                  Directorio
                </Link>
              </li>
              <li>
                <Link
                  to="/area-direccion"
                  className="hover:text-white transition-colors hover:pl-2 block duration-200"
                >
                  Área de Dirección
                </Link>
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="hover:text-white transition-colors hover:pl-2 block duration-200"
                >
                  Contáctenos
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Transparency */}
          <div>
            <h5 className="font-bold text-lg mb-6">Transparencia</h5>
            <ul className="space-y-3 text-sm text-white/60">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors hover:pl-2 block duration-200"
                >
                  Portal de Transparencia
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors hover:pl-2 block duration-200"
                >
                  Libro de Reclamaciones
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors hover:pl-2 block duration-200"
                >
                  Acceso a Información
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors hover:pl-2 block duration-200"
                >
                  Datos Abiertos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors hover:pl-2 block duration-200"
                >
                  Rendición de Cuentas
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h5 className="font-bold text-lg mb-6">Contacto</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start text-white/60">
                <span className="material-symbols-rounded text-primary">
                  location_on
                </span>
                <span>Jr. 28 de Julio 123, Huacaybamba, Huánuco</span>
              </li>
              <li className="flex gap-3 items-start text-white/60">
                <span className="material-symbols-rounded text-primary">
                  phone
                </span>
                <span>(062) 123-456</span>
              </li>
              <li className="flex gap-3 items-start text-white/60">
                <span className="material-symbols-rounded text-primary">
                  mail
                </span>
                <span>ugel.huacaybamba@minedu.gob.pe</span>
              </li>
              <li className="flex gap-3 items-start text-white/60">
                <span className="material-symbols-rounded text-primary">
                  schedule
                </span>
                <span>Lun - Vie: 8:00 AM - 4:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© 2025 UGEL Huacaybamba. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Términos de Uso
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Mapa del Sitio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
