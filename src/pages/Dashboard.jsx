import React from 'react';
import { GlassCard } from '../components/GlassCard';
import { ClayButton } from '../components/ClayButton';

const Dashboard = () => {
  return (
    <div className="flex-1 w-full max-w-[1920px] mx-auto">
      {/* Hero Section */}
      <div className="flex items-end justify-between mb-8 px-2">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Mis Notificaciones</h1>
          <p className="text-slate-500 mt-2 font-medium">Bienvenido de nuevo, tienes 4 actualizaciones importantes hoy.</p>
        </div>
        <button className="glass-button bg-white/60 hover:bg-white/80 px-6 py-3 rounded-xl flex items-center gap-2 text-slate-700 font-bold text-sm shadow-sm transition-all">
          <span className="material-symbols-outlined text-xl">done_all</span>
          Marcar todas como leídas
        </button>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        {/* Main Bento: Job Alerts (Large) */}
        <section className="col-span-12 lg:col-span-8 flex flex-col gap-6">
          <GlassCard className="rounded-2xl p-8 h-full bg-white/40 dark:bg-slate-900/60">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">work</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Alertas de Vacantes</h3>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-full uppercase tracking-wider">Nuevo Perfil</span>
                <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-bold rounded-full uppercase tracking-wider">Filtro: Huacaybamba</span>
              </div>
            </div>
            <div className="space-y-4">
              {/* Job Card 1 */}
              <div className="group flex flex-col sm:flex-row items-center gap-6 p-5 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-white/60 dark:border-slate-700 hover:bg-white/80 dark:hover:bg-slate-800 transition-all cursor-pointer">
                <div className="relative">
                  <div className="size-16 rounded-2xl overflow-hidden ring-4 ring-white dark:ring-slate-700 shadow-md">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbu7z6k_PcCbtSYFejTWkRMPJTx0A1CoPATRy2U-cfeHUPKXFvhFfPiPNbEsIKB4bCH35SScjvn3XdjRWC4jCcpR9Po5amMl-gPvhvRXvyuaTJmKaazukZYAFW_pbgAZ9E89fc22u6hWLNFQ-p1CaEmFOpuw-rZC1xe0S9j92ZL6oxGCnHO4kxciIcV09v_tbrs_1xgzDa97inGT3COMpU2rYmy0cdM6ZcpeQV_Fz8wlIuogXUsUbe5s7uK6pL96Ibqv4dck02JNQ" alt="Recruiter" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 size-5 bg-green-500 border-2 border-white dark:border-slate-800 rounded-full"></div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest">PEDAGOGÍA</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-[10px] font-bold text-slate-500">HACE 2 HORAS</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Nueva Vacante: Especialista Pedagógico</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-1">Se requiere experiencia en gestión pública y monitoreo curricular. Sede Central UGEL.</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="text-center sm:text-right">
                    <p className="text-xs font-bold text-slate-900 dark:text-white">S/ 4,500.00</p>
                    <p className="text-[10px] text-slate-400 font-medium">Contrato CAS</p>
                  </div>
                  <ClayButton className="px-5 py-2.5 text-sm flex items-center gap-2">
                    Ver Vacante
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </ClayButton>
                </div>
              </div>
              {/* Job Card 2 */}
              <div className="group flex flex-col sm:flex-row items-center gap-6 p-5 rounded-2xl bg-white/60 dark:bg-slate-800/60 border border-white/60 dark:border-slate-700 hover:bg-white/80 dark:hover:bg-slate-800 transition-all cursor-pointer">
                <div className="relative">
                  <div className="size-16 rounded-2xl overflow-hidden ring-4 ring-white dark:ring-slate-700 shadow-md">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCY1ddfMdEVn_iSqmRJN5DrSwwUbKMoKkqiogsjna1H929SndTaMFc6uLlkvNjslv6zdgmu5bgAuEpG0YpWmwYtsUCpLzRZ2cP6SzrOtIlU6J7YceNywxvCPxWwAmyKFzziJlZfgwVeMPNCC7hKPJwPKsYKjzUSZzd3ib0cxQkPxuf27fZUQ98R6z3l8DpvU_R21IqJc_CVo2OVnNMrH--BX4VniWj-s9qfvArGzpA13rx-8tcO8YSCbsLav12IoeozFu4TP7RJGPI" alt="Recruiter" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 size-5 bg-amber-500 border-2 border-white dark:border-slate-800 rounded-full"></div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <span className="text-[10px] font-extrabold text-amber-600 uppercase tracking-widest">ADMINISTRACIÓN</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-[10px] font-bold text-slate-500">HACE 5 HORAS</span>
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Convocatoria CAS 004-2024</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-1">Puesto disponible para Especialista en Planificación Presupuestaria.</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <div className="text-center sm:text-right">
                    <p className="text-xs font-bold text-slate-900 dark:text-white">S/ 3,800.00</p>
                    <p className="text-[10px] text-slate-400 font-medium">Temporal</p>
                  </div>
                  <ClayButton className="px-5 py-2.5 text-sm flex items-center gap-2">
                    Ver Vacante
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </ClayButton>
                </div>
              </div>
            </div>
            <button className="w-full mt-6 py-4 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-2xl text-slate-400 font-bold text-sm hover:border-primary/50 hover:text-primary transition-all">
              Cargar más vacantes recomendadas
            </button>
          </GlassCard>
        </section>

        {/* Side Bento: System Alerts (Tall) */}
        <aside className="col-span-12 lg:col-span-4 flex flex-col gap-6">
          <GlassCard className="rounded-2xl p-6 h-full flex flex-col bg-white/40 dark:bg-slate-900/60">
            <div className="flex items-center gap-3 mb-6">
              <span className="material-symbols-outlined text-amber-500 bg-amber-500/10 p-2 rounded-lg">warning</span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Alertas de Sistema</h3>
            </div>
            <div className="space-y-4 flex-1">
              {/* Deadline Card */}
              <div className="p-4 rounded-xl bg-amber-50/50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 flex gap-4">
                <div className="size-10 bg-amber-100 dark:bg-amber-800 rounded-lg flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-amber-600 dark:text-amber-200">event_busy</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-1">Vencimiento Próximo</p>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Informe Mensual de Actividades</h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Faltan 48 horas para la fecha límite de entrega vía mesa de partes virtual.</p>
                  <div className="mt-3 w-full bg-amber-200/50 dark:bg-amber-700/50 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full w-3/4"></div>
                  </div>
                </div>
              </div>
              {/* Document Update Card */}
              <div className="p-4 rounded-xl bg-blue-50/50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 flex gap-4">
                <div className="size-10 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-blue-600 dark:text-blue-200">description</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">Actualización de Documento</p>
                  <h5 className="text-sm font-bold text-slate-900 dark:text-white mb-1">Nueva Resolución Directorial</h5>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Se ha publicado la RD-2024-045 sobre lineamientos de evaluación docente.</p>
                  <button className="mt-2 text-xs font-extrabold text-blue-600 dark:text-blue-400 hover:underline">Descargar PDF</button>
                </div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-primary/5 dark:bg-primary/10 rounded-2xl border border-primary/10">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary">verified_user</span>
                <span className="text-sm font-bold text-primary">Seguridad de la cuenta</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Tu contraseña expira en 5 días. Te recomendamos actualizarla hoy mismo.</p>
              <button className="w-full bg-white dark:bg-slate-800 py-2 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-200 shadow-sm border border-slate-100 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">Cambiar Contraseña</button>
            </div>
          </GlassCard>
        </aside>

        {/* Bottom Bento: Profile Suggestions (Wide) */}
        <section className="col-span-12">
          <GlassCard className="rounded-2xl p-6 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden bg-white/40 dark:bg-slate-900/60">
            {/* Decorative background element */}
            <div className="absolute -right-20 -bottom-20 size-80 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative shrink-0">
              <div className="size-28 rounded-2xl overflow-hidden ring-4 ring-white dark:ring-slate-700 shadow-xl rotate-3">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiCYkvsVsoHBu6pW2tQrMw_uEGbgHpDducvfaszMb88Os1O1D1xmsoTY-H6dQ7uzBhV5VU5-dtax_hMIQbxLo4--GQjE5EGsM33LfoYpLeAmTHkNITtSRJG7J0-lxT8HTCzlz8vaT-gVDDbR2lktEYlkGYtQSwinKJXCnlLx0GJUtdKwpppzlGo5EuOabOGbDudJXXvuTB5r2ICFRzkUWyT29xzUHPBev9rQ2_v6KeDCZHyIZ9735XbLfKKbtr2DxepojzfeNqnFs" alt="Mentor" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-3 -left-3 bg-primary text-white p-2 rounded-lg shadow-lg rotate-[-12deg]">
                <span className="material-symbols-outlined text-lg">psychology</span>
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-2">Sugerencias del Perfil</h3>
              <p className="text-slate-600 dark:text-slate-300 max-w-2xl font-medium">"Tu perfil tiene un 85% de coincidencia con puestos directivos. Te sugiero actualizar tu certificado de Gestión Pública para alcanzar el 100%."</p>
              <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-slate-800/60 rounded-xl border border-white/80 dark:border-slate-700">
                  <span className="material-symbols-outlined text-green-500 text-sm">check_circle</span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200">CV Actualizado</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-slate-800/60 rounded-xl border border-white/80 dark:border-slate-700">
                  <span className="material-symbols-outlined text-primary text-sm">stars</span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200">2 Nuevas Habilidades</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-slate-800/60 rounded-xl border border-white/80 dark:border-slate-700">
                  <span className="material-symbols-outlined text-amber-500 text-sm">pending</span>
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-200">Falta Título Certificado</span>
                </div>
              </div>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <button className="w-full md:w-auto bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold text-sm shadow-xl hover:bg-slate-800 dark:hover:bg-slate-200 transition-all flex items-center justify-center gap-3">
                <span className="material-symbols-outlined">edit_document</span>
                Optimizar mi Perfil CV
              </button>
            </div>
          </GlassCard>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
