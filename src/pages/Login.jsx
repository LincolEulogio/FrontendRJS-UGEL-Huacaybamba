import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (dni === "12345678" && password === "123456") {
      navigate("/perfil");
    } else {
      setError("Credenciales incorrectas (Prueba: 12345678 / 123456)");
    }
  };
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background-light dark:bg-background-dark px-4 font-sans transition-colors duration-300">
      {/* Abstract Background Decoration */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-primary/15 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Header */}
      <header className="w-full max-w-[1200px] absolute top-0 flex items-center justify-between p-8 z-20">
        <Link to="/" className="flex items-center gap-3">
          <div className="p-2 bg-primary rounded-lg text-white">
            <span className="material-symbols-rounded text-2xl">
              account_balance
            </span>
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-slate-800 dark:text-white">
            UGEL Huacaybamba
          </h2>
        </Link>
        <div className="flex items-center gap-4">
          <button className="px-5 py-2 text-sm font-semibold rounded-full border border-slate-300 dark:border-slate-700 hover:bg-white/50 dark:hover:bg-slate-800 transition-all text-slate-600 dark:text-slate-300">
            Ayuda
          </button>
        </div>
      </header>

      {/* Main Bento Grid Container */}
      <main className="w-full max-w-[1100px] grid grid-cols-12 gap-6 relative z-10 pt-24 pb-20">
        {/* Central Bento: Login Credentials */}
        <div className="col-span-12 lg:col-span-7 glass-effect rounded-[2rem] p-10 flex flex-col justify-center shadow-glass border border-white/50">
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-2">
              Acceso Postulante
            </h1>
            <p className="text-slate-500 font-medium">
              Bienvenido de nuevo. Por favor, ingresa tus credenciales.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700 ml-1">
                DNI
              </label>
              <div className="relative">
                <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  badge
                </span>
                <input
                  value={dni}
                  onChange={(e) => setDni(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 bg-white/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-800 placeholder:text-slate-400 font-medium"
                  placeholder="Ingrese su número de DNI"
                  type="text"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center ml-1">
                <label className="block text-sm font-bold text-slate-700">
                  Contraseña
                </label>
                <a
                  className="text-xs font-bold text-primary hover:underline"
                  href="#"
                >
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <div className="relative">
                <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  lock
                </span>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-xl border border-slate-200 bg-white/50 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-slate-800 placeholder:text-slate-400 font-medium"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm font-bold text-center">
                {error}
              </p>
            )}

            <button
              className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg clay-button flex items-center justify-center gap-2 shadow-clay hover:-translate-y-1 transition-transform"
              type="submit"
            >
              Ingresar
              <span className="material-symbols-rounded">arrow_forward</span>
            </button>
          </form>
        </div>

        {/* Side Bento: Social Auth */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
          {/* Google Card */}
          <div className="glass-effect rounded-[2rem] p-8 flex flex-col items-center justify-center text-center group cursor-pointer hover:scale-[1.02] transition-transform shadow-glass border border-white/50">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 border border-slate-100">
              <svg className="w-8 h-8" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                ></path>
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
                  fill="#EA4335"
                ></path>
              </svg>
            </div>
            <h3 className="font-bold text-slate-800 mb-1">Google Access</h3>
            <p className="text-xs text-slate-500 font-medium">
              Inicia sesión con tu cuenta institucional
            </p>
          </div>
          {/* LinkedIn Card */}
          <div className="glass-effect rounded-[2rem] p-8 flex flex-col items-center justify-center text-center group cursor-pointer hover:scale-[1.02] transition-transform shadow-glass border border-white/50">
            <div className="w-16 h-16 bg-[#0077b5] rounded-2xl flex items-center justify-center shadow-sm mb-4">
              <svg
                className="w-8 h-8 text-white fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </div>
            <h3 className="font-bold text-slate-800 mb-1">LinkedIn Sync</h3>
            <p className="text-xs text-slate-500 font-medium">
              Importa tu perfil profesional directamente
            </p>
          </div>
        </div>

        {/* Bottom Bento: Info/Testimonial */}
        <div className="col-span-12 glass-effect rounded-[2rem] p-6 lg:p-8 flex flex-col md:flex-row items-center gap-8 overflow-hidden shadow-glass border border-white/50">
          <div className="w-32 h-32 md:w-40 md:h-40 flex-shrink-0 relative">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl rotate-6"></div>
            <img
              alt="Retrato de una docente sonriente"
              className="w-full h-full object-cover rounded-2xl relative z-10 shadow-lg"
              data-alt="Professional teacher smiling in a bright office"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPoVCr1fs1mOxp-xGaJKSPlsd_lIDUBKpDPHbuTIWEd-NdKNEJozAklaCt2RvEkpUbCHRIGVHKCXvV9WhG24mJOfW-zqAxaFM9zZa4H7WbgtctGJ1ePKy6VKcl65gxjToLPHj0KRrxF6otfxt2SsAw4jUbbURjsN4IfWidheZbnFhE_xlH4vivJNuD_GL6_gSroJ2_Zzgjv9faA4PXN9KY7KXZhiZQ5hvxcmf5j8GsoLkpz7VUsciZtC036QtOnIm7MTdxSywphIk"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3 uppercase tracking-wider">
              <span className="material-symbols-rounded text-sm">stars</span>
              Convocatoria 2024
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">
              "Únete a nuestro equipo"
            </h2>
            <blockquote className="text-slate-600 italic mb-4 leading-relaxed font-medium">
              "En UGEL Huacaybamba valoramos el talento y la vocación de
              servicio. Buscamos profesionales apasionados por transformar la
              educación en nuestra región."
            </blockquote>
            <p className="text-slate-400 text-sm font-bold">
              — Dra. Maria Fernanda Torres, Directora de RRHH
            </p>
          </div>
          <div className="flex flex-col gap-2 md:w-64 w-full">
            <div className="p-4 bg-white/40 rounded-2xl border border-white/40">
              <p className="text-xs font-bold text-slate-500 mb-1">
                PLAZAS DISPONIBLES
              </p>
              <p className="text-2xl font-black text-primary">124</p>
            </div>
            <div className="p-4 bg-white/40 rounded-2xl border border-white/40">
              <p className="text-xs font-bold text-slate-500 mb-1">
                POSTULANTES HOY
              </p>
              <p className="text-2xl font-black text-slate-800">542</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-[1200px] absolute bottom-0 flex flex-col md:flex-row items-center justify-between p-8 z-20 text-slate-400 text-xs font-medium">
        <p>© 2024 UGEL Huacaybamba. Todos los derechos reservados.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a className="hover:text-primary transition-colors" href="#">
            Políticas de Privacidad
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Términos y Condiciones
          </a>
          <a className="hover:text-primary transition-colors" href="#">
            Contacto
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Login;
