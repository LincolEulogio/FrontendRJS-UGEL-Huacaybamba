import React from 'react';

const PedagogicalManagement = () => {
  const objectives = [
    {
      icon: 'public',
      title: 'Interculturalidad y Gestión',
      description: 'Aplicar estrategias transversales para promover la interculturalidad, la inclusión, la tutoría y la orientación educativa, la educación ambiental de gestión de riesgos para la conservación de la salud comunitaria, la promoción de la cultura y del deporte, la investigación, acompañamiento y monitoreo, y la supervisión educativa, así como las tecnologías educativas para mejorar los aprendizajes de los estudiantes del ámbito de la provincia.'
    },
    {
      icon: 'psychology',
      title: 'Políticas de Gestión',
      description: 'Promover una política de gestión, asesoramiento y actualización técnica, pedagógica que permita desarrollar y potenciar programas y estrategias propuestas a nivel nacional, regional y local; optimizando las estrategias aplicadas a la movilización de los aprendizajes para asegurar un servicio educativo de calidad.'
    }
  ];

  const functions = [
    { icon: 'gavel', title: 'Política y Normatividad', description: 'Monitorear y orientar la aplicación de la política y normatividad educativa nacional y regional.' },
    { icon: 'auto_awesome', title: 'Mejora de la Calidad', description: 'Implementar estrategias alternativas para mejorar la calidad de los servicios educativos.' },
    { icon: 'volunteer_activism', title: 'Bienestar Social', description: 'Desarrollar programas de prevención, atención integral y bienestar social para los estudiantes.' },
    { icon: 'menu_book', title: 'Alfabetización', description: 'Promover y ejecutar estrategias efectivas de alfabetización en colaboración institucional.' },
    { icon: 'insights', title: 'Innovación', description: 'Apoyar y participar en programas de investigación e innovación pedagógica y evaluación.' }
  ];

  const team = [
    {
      code: 'Cód. 448-02-01-7',
      title: 'Jefe de Gestión Pedagógica',
      count: '01',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwY5uHI6jUidiJ0QE7d-N9MN2Es31iON-kKXiHiR_QslYeM6GWLnYzpKr9aXzG4i4xbSvSvoW-vKRp2tzJP-ztzbWHJP7qxwNq1-gEgE5hw_KPUD60v3hwq1W9Q17-oLk_C-VjB0Q-5sxvmKzrbKRIg_5BTMtZ1KVL7owUzc67AayrtEdmMjcVNsQltBh3gxodD2AGrwKTWfVWb8OPAitYdp7FpGx5XKsdCvWkYPg8kc8URUs5zRd4yI2VwxHQ8Ro4SVOSPrD2mPM',
      highlighted: true
    },
    {
      code: 'Cód. 448-02-01-7',
      title: 'Especialista Educación Inicial',
      count: '02',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUfpvAJ-Yg45VLmYAOSP1ex_af4tQz-5cIPSHkF7pyvShadj-GQonBWf1mR6vrhS7G7CqWGxG3PFnEubp5odN4F4a8qRlLt9iCCldeoUYrLrSTcLAVEk9M1kH-fBsqScccK22xgSzrlPleiIXDdfvIIntlVK6fvtwtaJZjc1fIK7dTuuCMJNmOQGdMCYWJ2FDOmXHg4Quz9HhOZpoVFZQRilejrFnRZREsbmSr48-PH06aoiM9LhPqgucnEnu9ULLGLrpwHKcWBjc'
    },
    {
      code: 'Cód. 448-02-01-7',
      title: 'Especialista Educación Primaria',
      count: '02',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFarQXoG9Y_3Rj1_lPsW7djusi40p54IGL71y_B4OQwtrSE92PeFxuoCuHj-lSn0FA2gmb9sGqbFFboeG5RtEDv5SyaLrC3-5zTrgdYYVvnR9N8sPVcLV7fRfSZlWjDuhMChbICsCj5wWCrITlC8tIXsDPE70sDumlk71doO1ISFFN5hXwUyq4xnm0uVUfnGDKqCLSJqVAa5FY0p7mxNQV-toFqiEvMmYyUY7qXpNqMeA5_jevlNxRrD_nByHROVWzCKUaq3tinJs'
    },
    {
      code: 'Cód. 448-02-01-7',
      title: 'Especialista Educación Secundaria',
      count: '02',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBud7thxw4R4_ZrIhjVQ50iNtOhwGvpNdr4IZTTW1IimW5RfxDh8ereV-8V8LFWqivLX0xZEve6ICeFo5Z8EtYKUdPT6cHnno3N6siyUcyhHV22fLb8uw8YfbQ4D7oW3ZxbN21T25UsDjobdgg2zoJmwbICJ5jxMbQXVohpOAqiZMDXD2I8lb48oe83fVM22LO2J8tZb7-AAc4R4k5O_J1RHlS8ybNLnXFKdZB78rqm_Mtnk79OkXGjtxDISTKLUP-rEb3uYnpPknE'
    },
    {
      code: 'Cód. 448-02-01-7',
      title: 'Especialista Intercultural Bilingüe',
      count: '01',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCw3XkMmgzkrN67o4M8P6NUY1wi6MTdxANhKmdAaaGHE4enUVyxhaCGntVtYWllz5SIss9EpZOSBwnwZ80w0XAenTKo1Lx-_jV4nDz3AI9h2610R3sQXoNPhvxe2qFhzl1Qf1c3wPM9ZBPCqGwTQ2X5v2pY4Gyy5GpwKZewtj0LBJNz1-uNmQq6DycLPrM19puPz5iiCd3buA4nNFkw9YnUF6dM10f1-L24uUDsTHGzXqp2bXIwsjWNCUhKs2LtB04PHbTPqYoZnA4'
    },
    {
      code: 'Cód. 448-02-01-6',
      title: 'Secretaria de Área',
      count: '01',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4Ye7aVvK3DvpZH8BWNsQwYCCUD_ItjhbwmdFl5-C9PIK1h3JU19vrlPPKPemkCCq-jaldqXKeMdxhuC0TdfktVhlYXeZ6tstcqU9xZT2rWbBb5dDz03ZwhJrpAfYPxpkix72MoO7E6q8BqQQ87kU0_w4SGuXyP7xI2It02GLiwp-9w5T1QS7cZjhKQW9fWkHd6-YL0HGr4Jor5MaKm9X0VZbeCIGY0Hjt3vAiKTZe-y44P29eN2ymLd4qKeDtTmnCvZhSrGNr4eo'
    }
  ];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <header className="relative overflow-hidden py-24">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIRITGhU8Kz4TN0qz7QdzTxKKAPA34sIgx4FQv7d0P9ykb2Z-OkuoAlaWSjxzbQLptzh3mLpXsjPdM6eLPEJDeCjDSyKIxnlbWQy4IzTDIzdGjndQtrs1Kek0XZkB0AsflRrLfaYMoKMRs4RveyivMYJL_yOHHS6f61XfFBHuWTYlAZhmfgBo0bzPlPYYqSJhLriNe70C9FheYu-nwDKfEjiGxH97vGMCkgoT65cZS5qZbW6wUFoE3US2SO3v8YOXXDm3QBc7fb4s" 
            alt="Educational facility" 
            className="w-full h-full object-cover opacity-10 dark:opacity-20" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background-light dark:to-background-dark"></div>
        </div>
        
        <div className="relative z-10 max-w-[1600px] mx-auto px-6 text-center">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
            Dirección de Gestión
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Área de Gestión <span className="text-primary">Pedagógica</span>
          </h1>
          <p className="mt-6 text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Fortaleciendo el sistema educativo provincial a través de la innovación, el acompañamiento continuo y la excelencia en el servicio pedagógico.
          </p>
        </div>
      </header>

      <main className="max-w-[1600px] mx-auto px-6 space-y-24 pb-24">
        <section>
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px w-12 bg-primary"></span>
            <h2 className="text-3xl font-bold uppercase tracking-wide">Nuestros Objetivos</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <div key={index} className="glass p-10 rounded-[24px] shadow-xl hover:shadow-2xl transition-all group">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-rounded text-3xl">{objective.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{objective.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {objective.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px w-12 bg-primary"></span>
            <h2 className="text-3xl font-bold uppercase tracking-wide">Funciones Principales</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {functions.map((func, index) => (
              <div key={index} className="glass p-8 rounded-[24px] hover:bg-primary hover:text-white transition-all duration-300 group">
                <span className="material-symbols-rounded text-4xl text-primary group-hover:text-white mb-6">
                  {func.icon}
                </span>
                <h4 className="text-lg font-bold mb-3">{func.title}</h4>
                <p className="text-sm opacity-80 leading-relaxed">{func.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px w-12 bg-primary"></span>
            <h2 className="text-3xl font-bold uppercase tracking-wide">Cuadro Orgánico de Asignación</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <div 
                key={index}
                className={`glass p-6 rounded-[24px] flex items-center gap-6 ${
                  member.highlighted ? 'border-l-4 border-primary' : 'border-l-4 border-slate-300 dark:border-slate-700'
                }`}
              >
                <img 
                  src={member.image}
                  alt={member.title}
                  className="w-24 h-24 rounded-2xl object-cover shadow-lg"
                />
                <div className="flex-1">
                  <p className={`text-xs font-bold uppercase mb-1 ${
                    member.highlighted ? 'text-primary' : 'text-slate-500'
                  }`}>
                    {member.code}
                  </p>
                  <h4 className="font-extrabold text-xl mb-1 leading-tight">{member.title}</h4>
                  <div className="flex justify-between items-end">
                    <span className="text-sm text-slate-500 dark:text-slate-400">Total Personal</span>
                    <span className="text-2xl font-black text-primary">{member.count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 flex justify-end">
            <div className="bg-primary text-white px-8 py-4 rounded-[24px] shadow-lg flex items-center gap-8">
              <span className="text-sm font-bold uppercase tracking-widest opacity-80">
                Total General de Cargos
              </span>
              <span className="text-4xl font-black">09</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default PedagogicalManagement;
