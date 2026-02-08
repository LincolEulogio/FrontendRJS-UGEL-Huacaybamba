import React, { useState } from 'react';

const Documents = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredDocs = [
    {
      title: 'Directiva de Matrícula 2024',
      description: 'Guía completa para el proceso de matrícula del año escolar 2024.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOMvobWaCcF-sB-qn72NEnrDbKtzivQ-vprHkTpD-8pJhJuQtIyYjleQG1WkYhknA8hFMuJ6Lfq1OH3mgHuoW9iY-HaOrP-tE-KaMX5T20ir804TOFTXoLtAYglQ5RP_rH-PAVHGMXvp77_zcuGmyZFx2vkOaqUU7eKdcQUbBxsOZcjDcRan0JAsU9MWdc3b9Ou9OSfHHsBGgcgO1aCsybE2o69u4lio6vnFenIzvKLMUA-bvFPNA4BHL8t8xMxfgfpuaDkMh3Q2Y'
    },
    {
      title: 'Calendario Académico 2024',
      description: 'Fechas clave y eventos importantes del calendario académico.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAd4slT6IsaRz559_ErOtKIUxPgYM-xBDYgGZ5TxmG4nyhANkSiuaKhw7Etzu8rOlv4Z8EdvzzEKs-NA-u_j5rV8lkINPBFacn1VrCn0XvmMX7URa4o66a15AgV-x7wwJsWvSpcAP9lYwKqHfbkZnCMiRjNm0q_NVPkwEr69Bjdr2cyK1d6-CyuKOOUQ9LYptbXvhIlqqAJ1ptQonCO-NJPH_Z_f9s5vlRhrTOOyzbCabasQqOppEIZ_fnMHJRyuDZNoAnKNEeVm0'
    },
    {
      title: 'Reglamento Interno de la UGEL',
      description: 'Normas y procedimientos que rigen el funcionamiento de la UGEL.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCM4GaWKdCf6nP9T2SB6nmR97CNCPopNgOI-ttwu1lMm0CaP1kQb14_Lg6_YRoUvqX2jFTVEhtreYY_A1kmZVLQdW30Nkk4Ciga14K2EdecMHkmNsDQyX2H0DIWW0Q02TwA99uMYQAaXrGgebnPm7Hjqj74Cv9QxTw5cIy0qOGX59OSaXiG-uniczujd9RqGjkBlCAQ3fH10Zfgue3B-Fe-B1q774R8vyNf3PgMXbQ2vFr-1QsAMgG-whRNbFbzmu044TBg2-trEeA'
    }
  ];

  const documents = [
    { name: 'Informe Anual de Gestión 2023', category: 'Gestión', date: '15 de enero de 2024' },
    { name: 'Plan Operativo Institucional 2024', category: 'Planificación', date: '20 de diciembre de 2023' },
    { name: 'Directiva N° 005-2023-UGEL-HB', category: 'Normativa', date: '5 de noviembre de 2023' },
    { name: 'Acta de Reunión de Directores', category: 'Actas', date: '10 de octubre de 2023' },
    { name: 'Comunicado N° 012-2023-UGEL-HB', category: 'Comunicados', date: '25 de septiembre de 2023' },
    { name: 'Resoluciones Directorales 2023', category: 'Resoluciones', date: '1 de agosto de 2023' }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <div className="md:w-1/2">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyAjC3m1ueADe8CPoQklXwxytBYruxrl-MpILkS2_A5yOkyTy11sf7MjtSfYK54dOIIpUwXiYBQRP9oLiKJoTqA8VpEu5rinXg0iqo79GjyNW_nLvItud0svVueu5dYpxd0-EE6mcjXbBBcX8bItHcKvMq8QZaT5-QuzztdLY4MeVqmzRynKOeo8n40os91ovZ91usJ1erwBxYih7mc7FC5Jx6J6GWaMbLmmLaD6Is9uqhkhnxegI7sGi_rf1i6T_MdUDNSbf1E6U" 
              alt="Portal Documents" 
              className="w-full aspect-video bg-cover rounded-xl" 
            />
          </div>
          <div className="md:w-1/2 flex flex-col justify-center gap-6">
            <h1 className="text-5xl font-black leading-tight tracking-tight">Portal Documentos</h1>
            <p className="text-base text-slate-600 dark:text-slate-400">
              Accede a todos los documentos importantes de la UGEL Huacaybamba en un solo lugar. Encuentra lo que necesitas rápidamente con nuestra búsqueda avanzada.
            </p>
            <div className="flex items-stretch rounded-xl h-14 overflow-hidden">
              <div className="flex items-center justify-center bg-slate-100 dark:bg-slate-800 pl-4">
                <span className="material-symbols-rounded text-slate-500">search</span>
              </div>
              <input
                type="text"
                placeholder="Buscar documentos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-slate-100 dark:bg-slate-800 border-none focus:outline-none focus:ring-0 px-4 text-slate-900 dark:text-white"
              />
              <button className="bg-primary hover:bg-primary/90 text-white px-6 font-bold transition-colors">
                Buscar
              </button>
            </div>
          </div>
        </div>

        {/* Featured Documents */}
        <h2 className="text-2xl font-bold mb-6">Documentos Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredDocs.map((doc, index) => (
            <div key={index} className="glass rounded-xl overflow-hidden">
              <img src={doc.image} alt={doc.title} className="w-full aspect-square object-cover" />
              <div className="p-4">
                <p className="font-medium mb-2">{doc.title}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{doc.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* All Documents */}
        <h2 className="text-2xl font-bold mb-6">Todos los Documentos</h2>
        <div className="glass rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-white dark:bg-slate-800">
                <th className="px-4 py-3 text-left text-sm font-medium">Nombre del Documento</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Categoría</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Fecha de Publicación</th>
                <th className="px-4 py-3 text-left text-sm font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {documents.map((doc, index) => (
                <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="px-4 py-4 text-sm">{doc.name}</td>
                  <td className="px-4 py-4">
                    <button className="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-xl text-sm font-medium">
                      {doc.category}
                    </button>
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-500">{doc.date}</td>
                  <td className="px-4 py-4 text-sm font-bold text-primary cursor-pointer hover:underline">
                    Descargar
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

export default Documents;