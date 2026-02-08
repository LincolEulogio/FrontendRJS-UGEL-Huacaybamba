import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const MainLayout = () => {
  const [showUgelMenu, setShowUgelMenu] = useState(false);
  const [showAreasMenu, setShowAreasMenu] = useState(false);
  const [showDocumentosMenu, setShowDocumentosMenu] = useState(false);

  return (
    <div className="bg-background-light dark:bg-background-dark font-sans text-slate-900 dark:text-slate-100 selection:bg-primary selection:text-white min-h-screen flex flex-col">
      {/* Top Bar */}
      <div className="bg-secondary text-white/80 py-2 hidden lg:block border-b border-white/10">
        <div className="container mx-auto flex justify-between items-center text-xs font-medium uppercase tracking-wider">
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-white flex items-center gap-2 transition-colors"
            >
              <span className="material-symbols-rounded text-sm">
                visibility
              </span>{" "}
              Portal de Transparencia
            </a>
            <Link
              to="/documentos"
              className="hover:text-white flex items-center gap-2 transition-colors"
            >
              <span className="material-symbols-rounded text-sm">
                description
              </span>{" "}
              Documentos Públicos
            </Link>
            <Link
              to="/directorio"
              className="hover:text-white flex items-center gap-2 transition-colors"
            >
              <span className="material-symbols-rounded text-sm">groups</span>{" "}
              Directorio
            </Link>
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-white flex items-center gap-2 transition-colors"
            >
              <span className="material-symbols-rounded text-sm">mail</span>{" "}
              Correo Institucional
            </a>
            <a
              href="#"
              className="hover:text-white flex items-center gap-2 transition-colors"
            >
              <span className="material-symbols-rounded text-sm">cloud</span>{" "}
              Intranet
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="glass-nav sticky top-0 z-50 border-b border-slate-200/50 dark:border-slate-800/50 transition-all duration-300 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl">
        <nav className="container mx-auto h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 shadow-sm">
              <img
                alt="UGEL Logo"
                className="w-full h-full object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGhJNC8R-z5xmbw5XKdRpZUcHbLbL7EdYPbyyzjtIS5-jsgx9UNv_W8zbvI5sXKg3dAdrwn03pQv-_4LZj48fn_-tBMWV-TdNjyT57zDNdNvmqgN-ITGRUiXSsEHwcgcDkdcY73tEnIAoOBahNbImtfjLR43yIrwAx94DQmcfxkCNuOBS411ZOt1KOeP6IXhb-l0FLL_eN-Y4yV3AMBvhcfwgsuHOLJjq6hKa0qDpTQQJpNsT7to31BZ1xZpL4JxLHWlzFyBFFxbA"
              />
            </div>
            <div>
              <h1 className="font-extrabold text-xl tracking-tight leading-none text-slate-800 dark:text-white">
                UGEL Huacaybamba
              </h1>
              <p className="text-[10px] uppercase font-bold text-slate-500 tracking-[0.2em] mt-0.5">
                Unidad de Gestión Educativa Local
              </p>
            </div>
          </Link>
          <ul className="hidden xl:flex items-center gap-8 font-semibold text-sm text-slate-600 dark:text-slate-300">
            <li>
              <Link
                to="/"
                className="text-primary dark:text-white border-b-2 border-primary pb-1"
              >
                INICIO
              </Link>
            </li>

            {/* Dropdown UGEL */}
            <li
              className="relative group"
              onMouseEnter={() => setShowUgelMenu(true)}
              onMouseLeave={() => setShowUgelMenu(false)}
            >
              <button className="hover:text-primary transition-colors flex items-center gap-1 py-2">
                UGEL{" "}
                <span className="material-symbols-rounded text-sm">
                  expand_more
                </span>
              </button>
              {showUgelMenu && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-64 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 py-2 animate-fadeIn">
                    <Link
                      to="/quienes-somos"
                      className="block px-4 py-3 mx-2 rounded-xl hover:bg-blue-50 dark:hover:bg-white/10 hover:pl-6 transition-all duration-300 group/item"
                      onClick={() => setShowUgelMenu(false)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-rounded text-primary group-hover/item:scale-110 transition-transform">
                          info
                        </span>
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white group-hover/item:text-primary transition-colors">
                            Quiénes Somos
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            Descripción institucional
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/mision-vision"
                      className="block px-4 py-3 mx-2 rounded-xl hover:bg-blue-50 dark:hover:bg-white/10 hover:pl-6 transition-all duration-300 group/item"
                      onClick={() => setShowUgelMenu(false)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-rounded text-primary group-hover/item:scale-110 transition-transform">
                          visibility
                        </span>
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white group-hover/item:text-primary transition-colors">
                            Misión y Visión
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            Objetivos institucionales
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/historia"
                      className="block px-4 py-3 mx-2 rounded-xl hover:bg-blue-50 dark:hover:bg-white/10 hover:pl-6 transition-all duration-300 group/item"
                      onClick={() => setShowUgelMenu(false)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-rounded text-primary group-hover/item:scale-110 transition-transform">
                          history_edu
                        </span>
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white group-hover/item:text-primary transition-colors">
                            Nuestra Historia
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            Historia de la UGEL
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/valores"
                      className="block px-4 py-3 mx-2 rounded-xl hover:bg-blue-50 dark:hover:bg-white/10 hover:pl-6 transition-all duration-300 group/item"
                      onClick={() => setShowUgelMenu(false)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-rounded text-primary group-hover/item:scale-110 transition-transform">
                          favorite
                        </span>
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white group-hover/item:text-primary transition-colors">
                            Valores
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            Principios institucionales
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/directorio"
                      className="block px-4 py-3 mx-2 rounded-xl hover:bg-blue-50 dark:hover:bg-white/10 hover:pl-6 transition-all duration-300 group/item"
                      onClick={() => setShowUgelMenu(false)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-rounded text-primary group-hover/item:scale-110 transition-transform">
                          badge
                        </span>
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white group-hover/item:text-primary transition-colors">
                            Directorio
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            Correo y cargos del personal
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </li>

            {/* Dropdown Áreas */}
            <li
              className="relative group"
              onMouseEnter={() => setShowAreasMenu(true)}
              onMouseLeave={() => setShowAreasMenu(false)}
            >
              <button className="hover:text-primary transition-colors flex items-center gap-1 py-2">
                ÁREAS{" "}
                <span className="material-symbols-rounded text-sm">
                  expand_more
                </span>
              </button>
              {showAreasMenu && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-72 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 py-2 animate-fadeIn">
                    <Link
                      to="/area-direccion"
                      className="block px-4 py-3 mx-2 rounded-xl hover:bg-blue-50 dark:hover:bg-white/10 hover:pl-6 transition-all duration-300 group/item"
                      onClick={() => setShowAreasMenu(false)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-rounded text-primary group-hover/item:scale-110 transition-transform">
                          corporate_fare
                        </span>
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white group-hover/item:text-primary transition-colors">
                            Área de Dirección
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            Liderazgo estratégico
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/gestion-pedagogica"
                      className="block px-4 py-3 mx-2 rounded-xl hover:bg-blue-50 dark:hover:bg-white/10 hover:pl-6 transition-all duration-300 group/item"
                      onClick={() => setShowAreasMenu(false)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-rounded text-primary group-hover/item:scale-110 transition-transform">
                          school
                        </span>
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white group-hover/item:text-primary transition-colors">
                            Área de Gestión Pedagógica
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            Funciones y objetivos
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/gestion-institucional"
                      className="block px-4 py-3 mx-2 rounded-xl hover:bg-blue-50 dark:hover:bg-white/10 hover:pl-6 transition-all duration-300 group/item"
                      onClick={() => setShowAreasMenu(false)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-rounded text-primary group-hover/item:scale-110 transition-transform">
                          admin_panel_settings
                        </span>
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white group-hover/item:text-primary transition-colors">
                            Área de Gestión Institucional
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            Planificación estratégica
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/gestion-administrativa"
                      className="block px-4 py-3 mx-2 rounded-xl hover:bg-blue-50 dark:hover:bg-white/10 hover:pl-6 transition-all duration-300 group/item"
                      onClick={() => setShowAreasMenu(false)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-rounded text-primary group-hover/item:scale-110 transition-transform">
                          business_center
                        </span>
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white group-hover/item:text-primary transition-colors">
                            Área de Gestión Administrativa
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            Funciones y organización
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/asesoria-juridica"
                      className="block px-4 py-3 mx-2 rounded-xl hover:bg-blue-50 dark:hover:bg-white/10 hover:pl-6 transition-all duration-300 group/item"
                      onClick={() => setShowAreasMenu(false)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-rounded text-primary group-hover/item:scale-110 transition-transform">
                          gavel
                        </span>
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white group-hover/item:text-primary transition-colors">
                            Asesoría Jurídica
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            Legal y normativa
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </li>

            {/* Dropdown Documentos Oficiales */}
            <li
              className="relative group"
              onMouseEnter={() => setShowDocumentosMenu(true)}
              onMouseLeave={() => setShowDocumentosMenu(false)}
            >
              <button className="hover:text-primary transition-colors flex items-center gap-1 py-2">
                DOCUMENTOS OFICIALES{" "}
                <span className="material-symbols-rounded text-sm">
                  expand_more
                </span>
              </button>
              {showDocumentosMenu && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="w-72 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 py-2 animate-fadeIn">
                    <Link
                      to="/documentos"
                      className="block px-4 py-3 mx-2 rounded-xl hover:bg-blue-50 dark:hover:bg-white/10 hover:pl-6 transition-all duration-300 group/item"
                      onClick={() => setShowDocumentosMenu(false)}
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-rounded text-primary group-hover/item:scale-110 transition-transform">
                          folder_open
                        </span>
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white group-hover/item:text-primary transition-colors">
                            Documentos
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            Portal de documentos oficiales
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/documentos-de-gestion"
                      className="block px-4 py-3 mx-2 rounded-xl hover:bg-blue-50 dark:hover:bg-white/10 hover:pl-6 transition-all duration-300 group/item"
                    >
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-rounded text-primary group-hover/item:scale-110 transition-transform">
                          folder_managed
                        </span>
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white group-hover/item:text-primary transition-colors">
                            Documentos de Gestión
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            ROF, MOF, PAT, PEI
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </li>

            <li>
              <a href="#" className="hover:text-primary transition-colors">
                CONVOCATORIA
              </a>
            </li>
            <li>
              <Link
                to="/contacto"
                className="hover:text-primary transition-colors"
              >
                CONTÁCTENOS
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <span className="material-symbols-rounded">search</span>
            </button>
            <Link
              to="/login"
              className="bg-primary hover:shadow-lg hover:shadow-primary/30 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform active:scale-95"
            >
              Mesa de Partes
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-white mt-20">
        <div className="container mx-auto py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Column 1 - About */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center p-1">
                  <img
                    alt="UGEL Logo"
                    className="w-full h-full object-contain"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGhJNC8R-z5xmbw5XKdRpZUcHbLbL7EdYPbyyzjtIS5-jsgx9UNv_W8zbvI5sXKg3dAdrwn03pQv-_4LZj48fn_-tBMWV-TdNjyT57zDNdNvmqgN-ITGRUiXSsEHwcgcDkdcY73tEnIAoOBahNbImtfjLR43yIrwAx94DQmcfxkCNuOBS411ZOt1KOeP6IXhb-l0FLL_eN-Y4yV3AMBvhcfwgsuHOLJjq6hKa0qDpTQQJpNsT7to31BZ1xZpL4JxLHWlzFyBFFxbA"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">UGEL Huacaybamba</h4>
                </div>
              </div>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Comprometidos con la excelencia educativa y el desarrollo
                integral de nuestra comunidad estudiantil en Huánuco.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <span className="material-symbols-rounded text-sm">
                    share
                  </span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors"
                >
                  <span className="material-symbols-rounded text-sm">mail</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary flex items-center justify-center transition-colors"
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
    </div>
  );
};

export default MainLayout;
