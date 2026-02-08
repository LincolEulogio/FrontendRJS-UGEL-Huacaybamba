import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 font-bold text-sm">Postulantes</h3>
            <span className="material-symbols-rounded text-primary bg-primary/10 p-2 rounded-lg">
              group
            </span>
          </div>
          <p className="text-3xl font-extrabold text-slate-800 dark:text-white">
            1,245
          </p>
          <div className="flex items-center gap-1 mt-2 text-green-500 text-xs font-bold">
            <span className="material-symbols-rounded text-sm">
              trending_up
            </span>
            <span>+12% esta semana</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 font-bold text-sm">Convocatorias</h3>
            <span className="material-symbols-rounded text-amber-500 bg-amber-500/10 p-2 rounded-lg">
              work
            </span>
          </div>
          <p className="text-3xl font-extrabold text-slate-800 dark:text-white">
            8
          </p>
          <div className="flex items-center gap-1 mt-2 text-slate-400 text-xs font-bold">
            <span>3 cierran pronto</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 font-bold text-sm">Pendientes</h3>
            <span className="material-symbols-rounded text-red-500 bg-red-500/10 p-2 rounded-lg">
              pending_actions
            </span>
          </div>
          <p className="text-3xl font-extrabold text-slate-800 dark:text-white">
            45
          </p>
          <div className="flex items-center gap-1 mt-2 text-red-500 text-xs font-bold">
            <span>Requieren revisión</span>
          </div>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-500 font-bold text-sm">Plazas</h3>
            <span className="material-symbols-rounded text-blue-500 bg-blue-500/10 p-2 rounded-lg">
              check_circle
            </span>
          </div>
          <p className="text-3xl font-extrabold text-slate-800 dark:text-white">
            124
          </p>
          <div className="flex items-center gap-1 mt-2 text-blue-500 text-xs font-bold">
            <span>98% cubiertas</span>
          </div>
        </div>
      </div>

      {/* Recent Activity / Applications Table */}
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center">
          <h3 className="font-bold text-lg text-slate-800 dark:text-white">
            Postulaciones Recientes
          </h3>
          <button className="text-primary text-sm font-bold hover:underline">
            Ver todas
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 text-xs uppercase tracking-wider">
                <th className="p-4 font-bold border-b dark:border-slate-700">
                  Postulante
                </th>
                <th className="p-4 font-bold border-b dark:border-slate-700">
                  Convocatoria
                </th>
                <th className="p-4 font-bold border-b dark:border-slate-700">
                  Fecha
                </th>
                <th className="p-4 font-bold border-b dark:border-slate-700">
                  Estado
                </th>
                <th className="p-4 font-bold border-b dark:border-slate-700 text-right">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr
                  key={i}
                  className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="size-10 bg-slate-200 rounded-full">
                        <img
                          src={`https://ui-avatars.com/api/?name=User+${i}&background=random`}
                          className="w-full h-full rounded-full"
                          alt=""
                        />
                      </div>
                      <div>
                        <p className="font-bold text-sm text-slate-900 dark:text-white">
                          Carlos Rodriguez
                        </p>
                        <p className="text-xs text-slate-500">DNI: 458923{i}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <p className="font-bold text-sm text-slate-700 dark:text-gray-300">
                      CAS 00{i}-2024
                    </p>
                    <p className="text-xs text-slate-500">Esp. Pedagógico</p>
                  </td>
                  <td className="p-4 text-sm text-slate-500 font-medium">
                    12 Feb, 2024
                  </td>
                  <td className="p-4">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 rounded-full text-xs font-bold uppercase tracking-wider">
                      Pendiente
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <Link
                      to="/admin/postulantes/1"
                      className="inline-flex items-center justify-center size-8 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-lg hover:bg-primary hover:text-white transition-colors"
                    >
                      <span className="material-symbols-rounded text-lg">
                        visibility
                      </span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
