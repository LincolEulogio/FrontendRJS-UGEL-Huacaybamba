import React from 'react';
import { GlassCard } from '../components/GlassCard';

const Department = () => {
  return (
    <div className="max-w-[1920px] mx-auto px-8 pt-28 pb-12">
      {/* Hero Section */}
      <section className="bg-primary rounded-3xl p-12 mb-8 relative overflow-hidden flex flex-col justify-end min-h-[320px] shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-900 opacity-90"></div>
        <div className="relative z-10">
            <div className="flex items-center gap-2 text-blue-100 text-sm font-semibold mb-4 uppercase tracking-widest">
                <span className="w-8 h-[2px] bg-blue-100"></span>
                Administración Pública
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Área de Gestión Institucional</h1>
            <p className="text-blue-100 text-lg max-w-2xl font-light">
                Promovemos la eficiencia y el liderazgo participativo para consolidar los objetivos estratégicos de nuestra institución educativa.
            </p>
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-5 rounded-full"></div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Strategic Objectives */}
        <div className="md:col-span-5 md:row-span-2">
            <GlassCard className="h-full flex flex-col justify-between shadow-lg bg-white/70 dark:bg-slate-900/70">
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary dark:text-blue-400">
                            <span className="material-icons-round text-3xl">track_changes</span>
                        </div>
                        <h2 className="text-2xl font-bold dark:text-white">Objetivos Estratégicos</h2>
                    </div>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <span className="material-icons-round text-primary flex-shrink-0">check_circle</span>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                Lograr que la gestión institucional de la Unidad Ejecutora 307 Educación UGEL Huacaybamba, sea eficiente en los sistemas de planificación, presupuesto, racionalización y estadística.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <span className="material-icons-round text-primary flex-shrink-0">check_circle</span>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                Promover modelos de liderazgo participativo y organizacional en las instituciones educativas de la jurisdicción para el logro de la calidad educativa.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-400 uppercase tracking-widest">Planificación 2024</span>
                    <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-blue-500"></div>
                        <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-indigo-500"></div>
                        <div className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-800 bg-sky-500"></div>
                    </div>
                </div>
            </GlassCard>
        </div>

        {/* Small Cards */}
        <div className="md:col-span-4 md:row-span-1">
            <GlassCard className="p-6 hover:bg-white/90 dark:hover:bg-slate-800/80 transition-all duration-300 group cursor-pointer h-full bg-white/60 dark:bg-slate-900/60">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                        <span className="material-icons-round">gavel</span>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1 dark:text-white">Políticas Educativas</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3">Orientar y supervisar la implementación de la política y normatividad educativa nacional y regional.</p>
                    </div>
                </div>
            </GlassCard>
        </div>

        <div className="md:col-span-3 md:row-span-1">
             <GlassCard className="p-6 hover:bg-white/90 dark:hover:bg-slate-800/80 transition-all duration-300 group cursor-pointer h-full bg-white/60 dark:bg-slate-900/60">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                        <span className="material-icons-round">map</span>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1 dark:text-white">Plan Estratégico</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3">Elaborar el Plan Estratégico de la UGEL y otros instrumentos de gestión integral.</p>
                    </div>
                </div>
            </GlassCard>
        </div>

        <div className="md:col-span-3 md:row-span-1">
             <GlassCard className="p-6 hover:bg-white/90 dark:hover:bg-slate-800/80 transition-all duration-300 group cursor-pointer h-full bg-white/60 dark:bg-slate-900/60">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                        <span className="material-icons-round">visibility</span>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1 dark:text-white">Supervisión</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3">Asesorar y supervisar a las instituciones en la elaboración de instrumentos de gestión.</p>
                    </div>
                </div>
            </GlassCard>
        </div>

        <div className="md:col-span-4 md:row-span-1">
             <GlassCard className="p-6 hover:bg-white/90 dark:hover:bg-slate-800/80 transition-all duration-300 group cursor-pointer h-full bg-white/60 dark:bg-slate-900/60">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-rose-100 dark:bg-rose-900/30 flex items-center justify-center text-rose-600 group-hover:scale-110 transition-transform">
                        <span className="material-icons-round">analytics</span>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1 dark:text-white">Estudios Técnicos</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-3">Autorizar la creación, ampliación o receso de instituciones públicas y privadas según normativa.</p>
                    </div>
                </div>
            </GlassCard>
        </div>

        {/* Staff Grid */}
        <div className="md:col-span-12">
            <GlassCard className="p-8 shadow-xl bg-white/60 dark:bg-slate-900/60">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-bold mb-2 dark:text-white">Cuadro Orgánico de Asignación</h2>
                        <p className="text-slate-500 dark:text-slate-400">Personal directivo y técnico responsable de la gestión.</p>
                    </div>
                    <div className="bg-primary text-white px-6 py-2 rounded-full font-bold text-lg shadow-md">
                        Total Personal: 04
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {[
                        { name: "Director de Sistema Administrativo", role: "Director", code: "013", fullCode: "448-02-02-3", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQz0JoTW7H0e-5Co1iU3wPBFEC4qMhorfLnyPd0in4p0ZCl93L7ernArcCFrSk1-Kf8AA_oszIFo-sJRBrtGMm-1giVuo9SUd59qelwhxkehEmJ-8MxGQIsgcAOAZ-e6vKXlPPyJq42ww0U13DBNKidCsBTQ5WlTEf85AHFBx44HwrbaLPHK3osAGq6vmSYYBks-zTb1WkK8ghwf00p3c7JLCkBAbpedyPj1cEmfTFs5NPK0Pj-RhuxNhS7YXlq5DXQH3dg0siGyY", color: "blue" },
                        { name: "Planificador Institucional", role: "Técnico", code: "014", fullCode: "448-02-02-5", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBazs6M1vjl8ggA9AfmOCYt4GtBKkPIiO_8KFn8nApyTsr1qv2mpqLN1dEA3xT294zFzI3XlWMFNhvNm8HnLweaKNhX132GAW87ayNhNz9O3fJRj8uuZm-o8l6BNhW6BSdibZjlH7-Qauzsdp_uxAsqm7qMqQ62H-rmzsuuq2gymHWTiNbPrRnVeKqJ2G9hqvnI19DothTOTizw9XQ39c3kN56VsUkYaX39L4Asxpy5vfFSrX-cG8IO3fqFNvXqRU1u_pcJ9mEM35E", color: "emerald" },
                        { name: "Especialista en Finanzas", role: "Especialista", code: "015", fullCode: "448-02-02-5", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDayAh0xKs21ry3NkQM7WYb2o2qNOglXWsz8ZP1KU1gn1OK-YlHgn05_dzaFImpHpKiQ1XbcCWzbE-hu5WbtoTMyUeNQqh8wxIWNaxMJR3rBYWs9qT9IH-ZrRzDuYB1qKWuhb-PdLFFnCgBCzxEbqCNsu5blD0kPW-8bxyVxUIhofaCnp1FoF9ZhGRCtPc3Yo1TYFwJz8ajArndNc_5ljg-dpXon9UCQPrTJ8KZ8sl_Vrp7O_2bMuGy7GZXZp_6CVcpaT31R8wVUZ0", color: "purple" },
                        { name: "Técnico Administrativo", role: "Soporte", code: "016", fullCode: "448-02-02-5", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYHutGak61RBvipmhTu0f220v3xg8XKZN6UrmaqX91Q8NeG8giLVo0cYRwx4JtQ-3ffD5uqJIb-QXoc3kdLidU-jx4MYBZCrXz02yb-VvaKeaucceIxbijN6J5eooC2lBBhxw0vcNnTvGtGJBkUj5-Ims-DkyeTJKTvw_nmlO1xK85XU8xnZsrxu0UXKZphyiYoFdlkWEJp-GA45tZpat-qTSYxDzm1RMnKnSssTRo3PTgQ3vyXY6nRFSiRNw2EOht_CCymPSYByQ", color: "amber" },
                    ].map((staff, index) => (
                        <div key={index} className="bg-white/40 dark:bg-slate-800/40 p-6 rounded-2xl border border-white/20 hover:shadow-lg transition-all">
                            <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-${staff.color}-400 to-${staff.color}-600 mb-4 overflow-hidden`}>
                                <img src={staff.img} alt={staff.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="mb-4">
                                <span className={`text-xs font-bold text-${staff.color}-600 dark:text-${staff.color}-400 uppercase tracking-tighter`}>{staff.code} • {staff.role}</span>
                                <h4 className="font-bold text-lg leading-tight dark:text-white">{staff.name}</h4>
                            </div>
                            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                                <span>CÓDIGO:</span>
                                <span className="font-bold">{staff.fullCode}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Department;
