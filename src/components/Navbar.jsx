import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveSubmenu(null);
  }, [location]);

  const toggleSubmenu = (menuName) => {
    if (activeSubmenu === menuName) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(menuName);
    }
  };

  const navLinks = [
    { name: "INICIO", path: "/", submenu: null },
    {
      name: "UGEL",
      path: "#",
      submenu: [
        { name: "Quiénes Somos", path: "/quienes-somos", icon: "info" },
        { name: "Misión y Visión", path: "/mision-vision", icon: "visibility" },
        { name: "Nuestra Historia", path: "/historia", icon: "history_edu" },
        { name: "Valores", path: "/valores", icon: "favorite" },
        { name: "Directorio", path: "/directorio", icon: "badge" },
      ],
    },
    {
      name: "ÁREAS",
      path: "#",
      submenu: [
        {
          name: "Área de Dirección",
          path: "/area-direccion",
          icon: "corporate_fare",
        },
        {
          name: "Área de Gestión Pedagógica",
          path: "/gestion-pedagogica",
          icon: "school",
        },
        {
          name: "Área de Gestión Institucional",
          path: "/gestion-institucional",
          icon: "admin_panel_settings",
        },
        {
          name: "Área de Gestión Administrativa",
          path: "/gestion-administrativa",
          icon: "business_center",
        },
        {
          name: "Asesoría Jurídica",
          path: "/asesoria-juridica",
          icon: "gavel",
        },
      ],
    },
    {
      name: "DOCUMENTOS OFICIALES",
      path: "#",
      submenu: [
        { name: "Documentos", path: "/documentos", icon: "folder_open" },
        {
          name: "Documentos de Gestión",
          path: "/documentos-de-gestion",
          icon: "folder_managed",
        },
      ],
    },
    { name: "CONVOCATORIA", path: "#", submenu: null },
    { name: "CONTÁCTENOS", path: "/contacto", submenu: null },
  ];

  return (
    <>
      {/* Top Bar - Desktop Only */}
      <div className="bg-secondary text-white/80 py-2 hidden lg:block border-b border-white/10 relative z-50">
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

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-2"
            : "bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl py-4"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 xl:px-0">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4 group">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center p-1 shadow-sm group-hover:scale-105 transition-transform">
              <img
                alt="UGEL Logo"
                className="w-full h-full object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGhJNC8R-z5xmbw5XKdRpZUcHbLbL7EdYPbyyzjtIS5-jsgx9UNv_W8zbvI5sXKg3dAdrwn03pQv-_4LZj48fn_-tBMWV-TdNjyT57zDNdNvmqgN-ITGRUiXSsEHwcgcDkdcY73tEnIAoOBahNbImtfjLR43yIrwAx94DQmcfxkCNuOBS411ZOt1KOeP6IXhb-l0FLL_eN-Y4yV3AMBvhcfwgsuHOLJjq6hKa0qDpTQQJpNsT7to31BZ1xZpL4JxLHWlzFyBFFxbA"
              />
            </div>
            <div>
              <h1 className="font-extrabold text-lg md:text-xl tracking-tight leading-none text-slate-800 dark:text-white group-hover:text-primary transition-colors">
                UGEL Huacaybamba
              </h1>
              <p className="text-[10px] uppercase font-bold text-slate-500 tracking-[0.2em] mt-0.5">
                Unidad de Gestión Educativa Local
              </p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden xl:flex items-center gap-8 font-semibold text-sm text-slate-600 dark:text-slate-300">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group">
                {link.submenu ? (
                  <>
                    <button className="hover:text-primary transition-colors flex items-center gap-1 py-2">
                      {link.name}
                      <span className="material-symbols-rounded text-sm">
                        expand_more
                      </span>
                    </button>
                    {/* Desktop Dropdown */}
                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                      <div className="w-64 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 py-2">
                        {link.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block px-4 py-3 mx-2 rounded-xl hover:bg-blue-50 dark:hover:bg-white/10 hover:pl-6 transition-all duration-300 group/item"
                          >
                            <div className="flex items-center gap-3">
                              <span className="material-symbols-rounded text-primary group-hover/item:scale-110 transition-transform">
                                {subItem.icon}
                              </span>
                              <div>
                                <div className="font-bold text-slate-900 dark:text-white group-hover/item:text-primary transition-colors">
                                  {subItem.name}
                                </div>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`transition-colors hover:text-primary ${
                      location.pathname === link.path
                        ? "text-primary border-b-2 border-primary pb-1"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Actions & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:block p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors">
              <span className="material-symbols-rounded">search</span>
            </button>
            <Link
              to="/login"
              className="bg-primary hover:shadow-lg hover:shadow-primary/30 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all transform active:scale-95 hidden sm:block"
            >
              Mesa de Partes
            </Link>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              <span className="material-symbols-rounded text-3xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 transition-opacity duration-300 xl:hidden ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white dark:bg-slate-900 shadow-2xl z-50 transform transition-transform duration-300 ease-out xl:hidden overflow-y-auto ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-slate-800 dark:text-white">
              Menú
            </h2>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full"
            >
              <span className="material-symbols-rounded">close</span>
            </button>
          </div>

          <nav className="space-y-2">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="border-b border-slate-100 dark:border-slate-800 last:border-0 pb-2"
              >
                {link.submenu ? (
                  <div>
                    <button
                      onClick={() => toggleSubmenu(link.name)}
                      className="w-full flex items-center justify-between py-3 text-left font-semibold text-slate-700 dark:text-slate-200"
                    >
                      {link.name}
                      <span
                        className={`material-symbols-rounded transform transition-transform ${
                          activeSubmenu === link.name
                            ? "rotate-180 text-primary"
                            : ""
                        }`}
                      >
                        expand_more
                      </span>
                    </button>
                    <div
                      className={`space-y-2 pl-4 overflow-hidden transition-all duration-300 ${
                        activeSubmenu === link.name
                          ? "max-h-[500px] opacity-100 pt-2 pb-4"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      {link.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="flex items-center gap-3 py-2 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
                        >
                          <span className="material-symbols-rounded text-sm text-primary/70">
                            {subItem.icon}
                          </span>
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className="block py-3 font-semibold text-slate-700 dark:text-slate-200 hover:text-primary"
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-8 space-y-4">
            <Link
              to="/login"
              className="block w-full text-center bg-primary text-white py-3 rounded-xl font-bold shadow-lg shadow-primary/30"
            >
              Mesa de Partes
            </Link>
            <div className="flex justify-center gap-4 text-slate-400 mt-6">
              <a href="#" className="hover:text-primary transition-colors">
                <span className="material-symbols-rounded">settings</span>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <span className="material-symbols-rounded">help</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
