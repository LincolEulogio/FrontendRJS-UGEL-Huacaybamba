import React from 'react';

const InstitutionalManagement = () => {
  const objectives = [
    {
      title: "Planificación Estratégica",
      description: "Diseñar e implementar planes institucionales alineados con las políticas educativas del sector.",
      icon: "target"
    },
    {
      title: "Gestión de Calidad",
      description: "Monitoreo y evaluación de procesos para garantizar estándares de calidad educativa.",
      icon: "verified"
    },
    {
      title: "Desarrollo Institucional",
      description: "Fortalecer las capacidades organizacionales y promover la mejora continua.",
      icon: "trending_up"
    }
  ];

  const functions = [
    {
      icon: "description",
      title: "Documentos de Gestión",
      description: "Elaboración y actualización de MOF, ROF, PAT y otros instrumentos"
    },
    {
      icon: "analytics",
      title: "Monitoreo y Evaluación",
      description: "Seguimiento de metas e indicadores institucionales"
    },
    {
      icon: "groups",
      title: "Coordinación Interinstitucional",
      description: "Gestión de alianzas estratégicas y convenios"
    },
    {
      icon: "local_library",
      title: "Capacitación Institucional",
      description: "Programas de fortalecimiento de capacidades"
    }
  ];

  const team = [
    { id: "015", name: "Sandra Patricia", role: "Jefa AGI", code: "448-03-01-1", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" },
    { id: "016", name: "Miguel Ángel", role: "Especialista en Planificación", code: "448-03-01-2", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
    { id: "017", name: "Patricia Elena", role: "Especialista en Calidad", code: "448-03-01-3", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400" },
    { id: "024", name: "Ricardo José", role: "Asesor Técnico", code: "448-03-01-4", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920')] bg-cover bg-center opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-6">
            <span className="material-symbols-rounded text-2xl">admin_panel_settings</span>
            <span className="font-bold text-sm uppercase tracking-wider">Gestión Institucional</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Planificación y Desarrollo
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            Fortalecemos la gestión institucional mediante planificación estratégica y mejora continua de procesos
          </p>
        </div>
      </section>

      {/* Objectives Grid - Bento Style */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-800 mb-4">Objetivos Estratégicos</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {objectives.map((obj, index) => (
            <div key={index} className="bg-white rounded-[2rem] p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-purple-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <span className="material-symbols-rounded text-white text-3xl">{obj.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{obj.title}</h3>
              <p className="text-slate-600 leading-relaxed">{obj.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Functions Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-800 mb-4">Funciones Principales</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {functions.map((func, index) => (
            <div key={index} className="bg-gradient-to-br from-white to-purple-50 rounded-[24px] p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-purple-100">
              <span className="material-symbols-rounded text-purple-600 text-4xl block mb-4">{func.icon}</span>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{func.title}</h3>
              <p className="text-sm text-slate-600">{func.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-800 mb-4">Equipo de Gestión</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.id} className="group bg-white rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300">
              <div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-purple-100 to-indigo-100">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="p-6 bg-gradient-to-br from-white to-purple-50">
                <div className="flex items-center gap-2 mb-3">
                  <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-bold">
                    ID: {member.id}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">{member.name}</h3>
                <p className="text-sm text-purple-600 font-semibold mb-2">{member.role}</p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="material-symbols-rounded text-sm">tag</span>
                  <span>{member.code}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-[2rem] p-12 text-white text-center shadow-2xl">
          <span className="material-symbols-rounded text-6xl mb-6 block">architecture</span>
          <h2 className="text-3xl md:text-4xl font-black mb-4">Construyendo el Futuro Educativo</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
            Trabajamos día a día para fortalecer nuestra institución y brindar un servicio educativo de excelencia
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Conocer Más
          </button>
        </div>
      </section>
    </div>
  );
};

export default InstitutionalManagement;