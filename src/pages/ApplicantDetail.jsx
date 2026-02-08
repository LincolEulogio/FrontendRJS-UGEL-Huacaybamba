import React from "react";
import { Link } from "react-router-dom";

const ApplicantDetail = () => {
  return (
    <div className="space-y-6">
      {/* Admin Actions Bar */}
      <div className="bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <Link
            to="/admin/dashboard"
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg text-slate-500"
          >
            <span className="material-symbols-rounded">arrow_back</span>
          </Link>
          <div>
            <h2 className="font-bold text-slate-800 dark:text-white">
              Revisión de Postulante
            </h2>
            <p className="text-xs text-slate-500">ID: #4829 • CAS 004-2024</p>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg font-bold text-sm hover:bg-red-100 transition-colors">
            <span className="material-symbols-rounded font-bold">close</span>
            Observar
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-bold text-sm hover:bg-green-700 shadow-md transition-colors">
            <span className="material-symbols-rounded font-bold">check</span>
            Aprobar Fase
          </button>
        </div>
      </div>

      {/* Profile Content (Reused/Adapted Layout) */}
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column (Bio) */}
        <div className="w-full lg:w-[35%] space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 text-center">
            <div className="size-32 mx-auto rounded-full p-1 border-2 border-primary border-dashed mb-4">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkWwZpDumGHryuxjSelTtT1iPPYPOm6786BpWF4kiAfCSgIbT0RcoPDoJHx6EmcNiDo7OoOsAtTud265JAOPTLOVxMpbUB7flzYu1TfjCS9Ygy8wkhz7bZnxkR7rRqiiWTaXGvOPiU3VXDfnWiFaR-86dq_TV0zUodTCecI7-FBjBRqgtaL3okvfp1YDfSi0Y2hKl6pf3m5_XsT5stDtQyrlbUKn6b3YeG-jfLsXZnBby9h-qmTLcrWKERsAsyyVIIZ3Px9PIberM"
                alt="Applicant"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">
              Carlos Rodriguez
            </h3>
            <p className="text-primary font-bold text-sm mb-4">
              Docente de Innovación
            </p>
            <div className="grid grid-cols-2 gap-4 text-left text-sm mt-6">
              <div>
                <p className="text-xs text-slate-400 uppercase font-bold">
                  DNI
                </p>
                <p className="font-semibold dark:text-white">45892312</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase font-bold">
                  Teléfono
                </p>
                <p className="font-semibold dark:text-white">987 654 321</p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase font-bold">
                  Email
                </p>
                <p className="font-semibold dark:text-white">
                  carlos.rod@gmail.com
                </p>
              </div>
              <div>
                <p className="text-xs text-slate-400 uppercase font-bold">
                  Ubicación
                </p>
                <p className="font-semibold dark:text-white">Huacaybamba</p>
              </div>
            </div>
            <button className="w-full mt-6 py-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors flex items-center justify-center gap-2">
              <span className="material-symbols-rounded">download</span>
              Descargar CV Completo
            </button>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            <h4 className="font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
              <span className="material-symbols-rounded text-amber-500">
                warning
              </span>
              Alertas del Sistema
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-lg flex gap-3">
                <span className="material-symbols-rounded text-red-500">
                  error
                </span>
                <div>
                  <p className="text-xs font-bold text-red-600 dark:text-red-400">
                    Documentación Incompleta
                  </p>
                  <p className="text-xs text-red-500/80">
                    Falta certificado de salud mental.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Files/Experience) */}
        <div className="flex-1 space-y-6">
          {/* Experience Section */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-6">
              Experiencia Laboral
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="size-3 bg-primary rounded-full"></div>
                  <div className="w-0.5 bg-slate-200 dark:bg-slate-700 h-full my-1"></div>
                </div>
                <div className="pb-6">
                  <h4 className="font-bold text-slate-800 dark:text-white">
                    Especialista en Innovación
                  </h4>
                  <p className="text-sm text-slate-500">
                    UGEL Huacaybamba • 2021 - Presente
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                    Liderazgo de proyectos tecnológicos y capacitación docente
                    en herramientas digitales.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="size-3 bg-slate-300 dark:bg-slate-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white">
                    Coordinador de TICs
                  </h4>
                  <p className="text-sm text-slate-500">
                    I.E. Sagrado Corazón • 2019 - 2021
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Academic Section */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700">
            <h3 className="font-bold text-lg text-slate-800 dark:text-white mb-6">
              Formación Académica
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700 flex items-start gap-3">
                <span className="material-symbols-rounded text-blue-500 mt-1">
                  school
                </span>
                <div>
                  <p className="font-bold text-slate-800 dark:text-white text-sm">
                    Maestría en Gestión
                  </p>
                  <p className="text-xs text-slate-500">UNMSM • 2018</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-700/30 border border-slate-100 dark:border-slate-700 flex items-start gap-3">
                <span className="material-symbols-rounded text-blue-500 mt-1">
                  school
                </span>
                <div>
                  <p className="font-bold text-slate-800 dark:text-white text-sm">
                    Lic. Educación
                  </p>
                  <p className="text-xs text-slate-500">UNHEVAL • 2012</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantDetail;
