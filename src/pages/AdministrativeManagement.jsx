import React from 'react';

const AdministrativeManagement = () => {
  const objectives = [
    {
      title: "Recursos Humanos",
      description: "Gestión integral del personal administrativo y docente, incluyendo planillas, legajos y beneficios.",
      color: "blue"
    },
    {
      title: "Optimización de Recursos",
      description: "Administración eficiente de recursos materiales, financieros y logísticos de la institución.",
      color: "emerald"
    }
  ];

  const functions = [
    {
      icon: "inventory_2",
      title: "Control Patrimonial",
      description: "Registro y control de bienes institucionales"
    },
    {
      icon: "psychology",
      title: "Bienestar del Personal",
      description: "Programas de desarrollo y bienestar laboral"
    },
    {
      icon: "account_balance_wallet",
      title: "Administración Financiera",
      description: "Gestión presupuestal y contable"
    },
    {
      icon: "gavel",
      title: "Procesos Administrativos",
      description: "Control y seguimiento de procedimientos"
    },
    {
      icon: "business",
      title: "Mantenimiento",
      description: "Infraestructura y servicios generales"
    }
  ];

  const team = [
    { id: "018", name: "Jhon Marcos", role: "Especialista AGP", code: "448-04-01-3", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400" },
    { id: "026", name: "Sheyli Yomira", role: "Secretaria", code: "448-04-01-3", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400" },
    { id: "019", name: "Carlos André", role: "Técnico Administrativo", code: "448-04-01-5", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400" },
    { id: "020", name: "María Isabel", role: "Tesorera", code: "448-04-01-3", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400" },
    { id: "021", name: "Pedro Luis", role: "Contador", code: "448-04-01-5", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400" },
    { id: "022", name: "Ana Sofía", role: "Abogada", code: "448-04-01-5", image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400" },
    { id: "023", name: "Roberto Manuel", role: "Logística", code: "448-04-01-6", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e40af] to-[#2563eb]">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1e40af]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-6 py-2 rounded-full mb-6">
            <span className="material-symbols-rounded text-2xl">business_center</span>
            <span className="font-bold text-sm uppercase tracking-wider">Área de Gestión Administrativa</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
            Administración y Recursos
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Gestionamos eficientemente los recursos humanos, materiales y financieros para el óptimo funcionamiento institucional
          </p>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-800 mb-4">Nuestros Objetivos</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#1e40af] to-[#2563eb] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {objectives.map((obj, index) => (
            <div key={index} className={`bg-${obj.color}-100 rounded-[24px] p-8 border-2 border-${obj.color}-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}>
              <div className={`inline-flex px-4 py-1 bg-${obj.color}-500 text-white rounded-full text-sm font-bold mb-4`}>
                Objetivo {index + 1}
              </div>
              <h3 className={`text-2xl font-bold text-${obj.color}-900 mb-3`}>{obj.title}</h3>
              <p className={`text-${obj.color}-700 leading-relaxed`}>{obj.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Functions Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-800 mb-4">Funciones Principales</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#1e40af] to-[#2563eb] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {functions.map((func, index) => (
            <div key={index} className="bg-white rounded-[24px] p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-slate-200">
              <div className="w-16 h-16 bg-gradient-to-br from-[#1e40af] to-[#2563eb] rounded-2xl flex items-center justify-center mb-4">
                <span className="material-symbols-rounded text-white text-3xl">{func.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{func.title}</h3>
              <p className="text-slate-600">{func.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-800 mb-4">Nuestro Equipo</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-[#1e40af] to-[#2563eb] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {team.map((member) => (
            <div key={member.id} className="bg-white rounded-[24px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-rounded text-[#1e40af] text-sm">badge</span>
                  <span className="text-xs font-bold text-slate-500">ID: {member.id}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">{member.name}</h3>
                <p className="text-sm text-[#1e40af] font-semibold mb-2">{member.role}</p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="material-symbols-rounded text-sm">tag</span>
                  <span>{member.code}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Summary Card */}
        <div className="bg-gradient-to-r from-[#1e40af] to-[#2563eb] rounded-[24px] p-8 text-white text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="material-symbols-rounded text-5xl">groups_3</span>
            <div className="text-7xl font-black">09</div>
          </div>
          <p className="text-xl font-semibold">Profesionales en Gestión Administrativa</p>
        </div>
      </section>
    </div>
  );
};

export default AdministrativeManagement;