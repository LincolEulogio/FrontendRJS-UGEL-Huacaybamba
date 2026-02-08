import React from 'react';

const DirectionArea = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Director del Programa',
      title: 'Director Sectorial',
      code: '448-01-01-7',
      photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6mej5Cc-64TIpHScTMOr-DCtkUMXqh80zfha_-FzVlpEhPrxdmtjZgvHqKbwgdClFYBj4xk6QkfcygqDaoSR-mQvylJ-vE4YVX_2kfk9kvM5xIqVgyeAau0qVAK5OG7E0RRXR3PBZbXDqGGUZU1aeBvTKva75AGYge4-s60INgLcarBsheVkAnYDSmgfwNJoO_LYUSpg-hGPbzNTzzR5RMW6gyPyEKXF3zXm59g41ZX74ZacBnfx3DTgHenkQOaF-m85wxf3uev8'
    },
    {
      id: 2,
      name: 'Especialista en Cómputo e Informática',
      title: 'Técnico Administrativo',
      code: '448-01-01-6',
      photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAcYFZfPZvnGp-3Ta66vxDMxX5m8Gp18pd6upXqO0Z85ZWYeSzRhFXmKCcoRK2P1WmcqBwSXG37JhrOyBJcWUDExiNKdTDe0o-5PJlIR443J0D1cnRapi1nSD9-8b0DsU7GbC6l-5rnWmFZbp1KZXsEAbYIMKCR6sTq6bk69TuRo_H84LS158hR-9InGSyt1llZT-v3VlUF5n4V_4pUHS-tlpzItO76YROPD39sfMqt8boDKkb8o4Exi5KiUorVv12rPFXPj9Gj5pU'
    },
    {
      id: 3,
      name: 'Secretaria',
      title: 'Apoyo Administrativo',
      code: '448-01-01-6',
      photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxGXpeT2BzooD-iBOqudbv391HpFjGGsyjGlotC9hPe7Hnko-ziBpP5ssTgcuiNepSUb4HSGVT7BSF_5T0nSAGHv8fy-2TELfQnZxzPB6A-XsjmczAyNx1im2THPd2YQv9VcMdkjTGA2X_29zDLXAn5zFppn2kdg0HrVBocYN51tB0fsx8HrACxT4yfdaZwvFMtni-fYC5kfoXdNHjDavGp1PDBqwN0g-k_hn_2HBcZtpLx6XXOFw3kw8pYcDN8DT5XgtOpPGTjc0'
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl opacity-30"></div>

      <main className="pt-32 pb-20 px-6 max-w-[1920px] mx-auto">
        <div className="max-w-7xl mx-auto mb-16">
          <h1 className="text-6xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            Área de Dirección
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl font-medium leading-relaxed">
            Liderazgo estratégico y gestión educativa de excelencia para el desarrollo integral de la provincia.
          </p>
        </div>

        <div className="grid grid-cols-12 grid-rows-6 gap-6 h-[1000px] max-w-7xl mx-auto">
          <div className="col-span-8 row-span-3 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200 dark:border-slate-700 p-10 rounded-3xl shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
              <span className="material-symbols-rounded text-[120px]">track_changes</span>
            </div>
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center gap-3 mb-8">
                <span className="p-2 bg-primary/10 rounded-lg text-primary">
                  <span className="material-symbols-rounded">ads_click</span>
                </span>
                <h2 className="text-2xl font-bold uppercase tracking-widest">Objetivos</h2>
              </div>
              <div className="grid grid-cols-2 gap-10">
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  Implementar políticas y directivas locales, para fortalecer el servicio que brindan las instituciones educativas, en el marco de coadyuvar en la formación integral de las personas.
                </p>
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300 border-l border-slate-200 dark:border-slate-700 pl-10">
                  Administrar el proceso de fortalecimiento de las capacidades de gestión pedagógica y administrativa de las instituciones educativas para impulsar el mejoramiento de la calidad.
                </p>
              </div>
              <div className="mt-auto pt-10">
                <img alt="Equipo" className="w-full h-48 object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800" />
              </div>
            </div>
          </div>

          <div className="col-span-4 row-span-4 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200 dark:border-slate-700 p-8 rounded-3xl shadow-xl flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <span className="p-2 bg-primary/10 rounded-lg text-primary">
                <span className="material-symbols-rounded">account_tree</span>
              </span>
              <h2 className="text-2xl font-bold uppercase tracking-widest">Funciones</h2>
            </div>
            <div className="space-y-6 overflow-y-auto pr-4">
              <div className="group">
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Liderazgo y Coordinación</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Responsable de guiar y coordinar la implementación de políticas educativas.</p>
              </div>
              <div className="group">
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Desarrollo Curricular</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Fomenta la innovación educativa a través de la diversificación de currículos.</p>
              </div>
              <div className="group">
                <h3 className="font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Infraestructura y Recursos</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">Identifica necesidades de infraestructura y equipamiento.</p>
              </div>
            </div>
          </div>

          <div className="col-span-8 row-span-3 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl border border-slate-200 dark:border-slate-700 p-10 rounded-3xl shadow-xl flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="p-2 bg-primary/10 rounded-lg text-primary">
                  <span className="material-symbols-rounded">groups</span>
                </span>
                <h2 className="text-2xl font-bold uppercase tracking-widest">Nuestro Equipo</h2>
              </div>
              <span className="text-xs font-bold px-3 py-1 bg-primary text-white rounded-full">CUADRO ORGÁNICO</span>
            </div>
            <div className="grid grid-cols-3 gap-6 flex-grow">
              {teamMembers.map((member) => (
                <div key={member.id} className="p-6 rounded-2xl bg-white/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 flex flex-col items-center text-center group hover:bg-white dark:hover:bg-slate-800 transition-all duration-300">
                  <div className="relative mb-4">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-blue-300 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000"></div>
                    <img alt={member.name} className="relative w-24 h-24 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-md" src={member.photo} />
                  </div>
                  <span className="text-xs font-bold text-primary mb-1">{member.code}</span>
                  <h4 className="font-bold text-slate-900 dark:text-white leading-tight mb-1 text-sm">{member.name}</h4>
                  <p className="text-xs text-slate-400 uppercase font-semibold">{member.title}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between px-6 py-4 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-900">
              <span className="font-bold tracking-widest text-xs">RESUMEN DE ASIGNACIÓN</span>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-black">03</span>
                <span className="text-[10px] leading-tight opacity-70 uppercase">Cargos Totales</span>
              </div>
            </div>
          </div>

          <div className="col-span-4 row-span-2 relative group overflow-hidden rounded-3xl shadow-xl">
            <img alt="Oficinas" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8">
              <div className="text-white">
                <h4 className="text-xl font-bold">Entorno Directivo</h4>
                <p className="text-sm opacity-80">Gestión enfocada en resultados para Huacaybamba</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DirectionArea;
