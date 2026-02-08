import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Directory = () => {
  const [activeFilter, setActiveFilter] = useState('todas');
  const [selectedMember, setSelectedMember] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const teamMembers = [
    {
      id: 1,
      name: 'Lic. Elena Rojas P.',
      role: 'Jefe de Área',
      area: 'pedagogica',
      phone: '+51 987 654 321',
      email: 'e.rojas@ugelhuacaybamba.gob.pe',
      photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCxlGb4d_GT2t2vEJ45pu8uJn6UHU6Uu-Ni2AnzQsBJqmoD3x94roatV_TSmi_vdk1DDQT2UqTFsKQbkPV36-vKt709_DGQZ2mpW1ZvGtuoIyrf92t2p4seEjeAU1WQLubKRQpUtMCUhyhDHjd7gYQ37w72FerEDqnEVoz0BSLL8e5TodRHXfn2sWMMc6b4giNzBiq_Oa3Yo7ELvwAMYjitXP1FoMxtOJw33BlAnFM4QnPMsBb_wmzIm5zyyh0Q6U1Vu4CeA1KTdUE',
      functions: [
        'Planificar, organizar y supervisar las actividades técnico-pedagógicas de la jurisdicción.',
        'Brindar asesoramiento especializado a directivos y docentes de las instituciones educativas.',
        'Evaluar los resultados del proceso de enseñanza-aprendizaje en el ámbito local.'
      ]
    },
    {
      id: 2,
      name: 'Mg. Carlos Vera T.',
      role: 'Especialista Primaria',
      area: 'pedagogica',
      phone: '+51 912 345 678',
      email: 'c.vera@ugelhuacaybamba.gob.pe',
      photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKmZc_CGgPkNWlJlHfMg4Vz1AyCcPH1G7y_AAVL7IQ1IRhv46fMoR_jLO_8_HHvX0TPAPLfTGgK3jWoX5_kpl2Y7LZj7Qvf987TTP_OW_9W3kOX_TikDENugRIw7NdY3Q8q9cG2aRsYN2Aj8q_P08yiRNgz2tlpuu0xgvF32XoNS95keNAa0FDd-ym9Owcoj1QnBL4gvc_kk7kGbfn9lEcGt0bRmrnVMNxihVzMYHYIG5NRlZQ51q3wzxU07SnlRaAyEdFB8BcXgM',
      functions: ['Acompañamiento pedagógico a docentes de primaria', 'Capacitación en metodologías activas']
    },
    {
      id: 3,
      name: 'Lic. Sara Mendez',
      role: 'Especialista Inicial',
      area: 'pedagogica',
      phone: '+51 955 443 322',
      email: 's.mendez@ugelhuacaybamba.gob.pe',
      photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCJt7YaDDBn-vVpbd1g6_lyjzh0hIDxdPg6aR8kfWB5G30qX8PdZteof3BkR-8JlJeJMlgERshwwwvCf_uDKeIqhwBQHWTfI8EHW1Lb-o-rWtWkLGfRqRnIYNnussXqfgl_cOCVNYNaUP5YWz-DOH_nx-lJM18KiTe3Ye27bIIt3BE-MNujqOLry6-stXNwbh5kx9NE_6lzZGAYb6uPm7nXawX1-sz_CGLuphtYVv29QFOIrPkwvpzgoyGqpePMcYkjIsgz-ntHtU',
      functions: ['Supervisión de programas de educación inicial', 'Desarrollo de competencias tempranas']
    },
    {
      id: 4,
      name: 'Dr. Juan Quispe',
      role: 'Especialista Secundaria',
      area: 'pedagogica',
      phone: '+51 944 556 677',
      email: 'j.quispe@ugelhuacaybamba.gob.pe',
      photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuACcNcskl6M_xtOGU3b6F0lklvJrbaR2-LO0E6V8T2pJW2NPWwwmWIf4euM9VG7EAm1KqyqGAQgtpehbnqs3ZCZuB_RA5M5ypKjzoJIRVJS1-eaooVPqf0fLIn4q5KkCFs7z-YaSJmSjsPDJoz62R9Tn5cgYrCBxZNuqM2ozjU67CWsTaGHYmy1QmgwCxMY1qcPQX2-DY96gLhZv89JtyJVdhERBfyUqVQ4aa21VGAs3GsS_TyLxvk8XK1zW0LSDzKTwj-1b-vSEQU',
      functions: ['Acompañamiento a docentes de secundaria', 'Implementación de proyectos educativos']
    },
    {
      id: 5,
      name: 'C.P.C. Maria Luz Salazar',
      role: 'Jefe de Administración',
      area: 'administrativa',
      phone: '+51 900 112 233',
      email: 'm.salazar@ugelhuacaybamba.gob.pe',
      photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWVUlNdX-guz7DfDPHYlV3lo9yBbRvjJfL0XuArinaRzxEXuB4oh5VZJfj-I8RWEcY1PdIGVlKZcvX2Ijsp4o1ytXqlOL7G7HsdMosZIm4FDLYh-Zl2NaN5kFqA9X97lK4aeh7xhJHu6OePx2Yv_LKtwyN8XLGaTd5fnDc7TGlQBN-uxwQ6ylQ-r7RS9GdSPx5Op9Xqch9F0kUq00SKLPlQ7ND7TbzNz7xp_sPSAaodHuB3uy7MfHTgYTim0YD0CqkyY2x4HE5PO4',
      functions: ['Gestión administrativa y financiera', 'Control presupuestal', 'Logística institucional']
    },
    {
      id: 6,
      name: 'Ing. Roberto Diaz',
      role: 'Recursos Humanos',
      area: 'administrativa',
      phone: '+51 988 776 655',
      email: 'r.diaz@ugelhuacaybamba.gob.pe',
      photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDo-aLxkG4Q_MhKkZ55bUO-uD2cV1xsUp6mAyi7m_MS11ySnwFzm6LeN7yZfmxdcz8sKqivjrI36NuoMaILBpKSNtQJ_q7y2TRCuiWmhQDMnFkpthcTzRvjomtLV9HLOAZpOimMy3MaAcs6sSLi_aoqNktjpAXy4E_j6FvVyC2GpsD5Y0rkt3IIZU8s6zso1UfmtLh0oj9wRvPn40ySxFHZjTD2ZmnSvEiQ7s0GeD05FdIk3AswmyEm0eV7A9mo4fDLeCQLZyKP_JY',
      functions: ['Gestión de personal', 'Procesos de selección', 'Capacitación de funcionarios']
    },
    {
      id: 7,
      name: 'C.P.C. Julia Ortiz',
      role: 'Contabilidad',
      area: 'administrativa',
      phone: '+51 922 334 455',
      email: 'j.ortiz@ugelhuacaybamba.gob.pe',
      photo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZWRG-MRgcZRsFVIUWcWIQALNqZUHWw2cKkXf6SvqW5pdZpdNXSe6bx5_FwUCNFaMNOzAfutKGY2h7WFfKb0YpE1S5-AbkyFzqM4KyJS7fBzVLdslVwhWoIEXYD6yvaICbllIUfMNfxxQ6Ga7373CZ1VDue7LMIhukAqTK9x1YcNy2uxzlm-HMAzj41doITMmT3HHoSPRYSbBmbNRy0aEtYXZ1tVd3M4vkTuFvhB7CApUwy-t0_RcKKOJZHz7gEuMNsWf0g-BamEw',
      functions: ['Registro contable', 'Estados financieros', 'Auditoría interna']
    }
  ];

  const filteredMembers = teamMembers.filter(member => {
    const matchesFilter = activeFilter === 'todas' || member.area === activeFilter;
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         member.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const MemberModal = ({ member, onClose }) => (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" onClick={onClose}></div>
      <div className="relative bg-white dark:bg-slate-900 w-full max-w-5xl rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-20 size-10 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition-colors text-slate-500 dark:text-slate-400"
        >
          <span className="material-symbols-rounded">close</span>
        </button>

        <div className="md:w-5/12 bg-slate-50 dark:bg-slate-800/50 p-12 flex items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#1152d4 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
          </div>
          <div className="relative z-10 w-full aspect-[4/5]">
            <div className="absolute inset-0 border-2 border-primary/20 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] rotate-6 scale-105"></div>
            <div className="w-full h-full rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] bg-slate-200 dark:bg-slate-700 overflow-hidden shadow-2xl">
              <img alt={member.name} className="w-full h-full object-cover" src={member.photo} />
            </div>
          </div>
        </div>

        <div className="md:w-7/12 p-8 md:p-14 overflow-y-auto max-h-[90vh]">
          <div className="mb-8">
            <span className="inline-block py-1 px-3 bg-primary/10 text-primary text-xs font-bold rounded-full mb-3 uppercase tracking-widest">
              Ficha de Funcionario
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2 leading-tight">
              {member.name}
            </h2>
            <p className="text-lg font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-rounded text-xl">workspace_premium</span>
              {member.role}
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                <span className="h-px w-6 bg-slate-200 dark:bg-slate-700"></span>
                Principales Funciones
              </h3>
              <ul className="space-y-3">
                {member.functions.map((func, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-400">
                    <span className="material-symbols-rounded text-primary text-sm mt-1">check_circle</span>
                    <span>{func}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                <span className="h-px w-6 bg-slate-200 dark:bg-slate-700"></span>
                Información de Contacto
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
                  <div className="flex items-center gap-4">
                    <div className="size-10 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center text-primary shadow-sm">
                      <span className="material-symbols-rounded">mail</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Correo Institucional</p>
                      <p className="text-sm font-semibold dark:text-slate-200">{member.email}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={`tel:${member.phone}`}
                    className="flex-1 flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-colors group"
                  >
                    <div className="size-10 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all">
                      <span className="material-symbols-rounded">call</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Llamar</p>
                      <p className="text-sm font-semibold dark:text-slate-200">{member.phone}</p>
                    </div>
                  </a>
                  <a 
                    href="#"
                    className="flex-1 flex items-center gap-4 p-4 rounded-2xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30 hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors group"
                  >
                    <div className="size-10 rounded-xl bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-200 dark:shadow-none">
                      <span className="material-symbols-rounded">forum</span>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase">WhatsApp</p>
                      <p className="text-sm font-semibold text-green-700 dark:text-green-300">Mensaje Directo</p>
                    </div>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-background-light dark:bg-background-dark">
      {/* Hero Section */}
      <header className="pt-20 pb-12 px-6 text-center max-w-4xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-primary text-xs font-bold tracking-widest uppercase mb-4">
          Directorio 2024
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
          Directorio Institucional
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Conoce al equipo humano comprometido con la excelencia educativa en la provincia de Huacaybamba. Transparencia y servicio a su disposición.
        </p>
      </header>

      {/* Director Card */}
      <main className="max-w-6xl mx-auto px-6 mb-20">
        <div className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none overflow-hidden flex flex-col md:flex-row items-center">
          <div className="flex-1 p-8 md:p-16 space-y-6">
            <div>
              <span className="text-primary font-bold text-sm tracking-widest uppercase">Director General</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-2 text-slate-900 dark:text-white">Mg. Ricardo Alvites Milla</h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-md">
              Liderando la gestión educativa con enfoque territorial, asegurando que cada institución educativa de Huacaybamba reciba el soporte necesario para el éxito de nuestros estudiantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                className="flex items-center justify-center gap-2 bg-slate-100 dark:bg-slate-700/50 hover:bg-slate-200 dark:hover:bg-slate-700 px-6 py-3 rounded-2xl font-semibold transition-all" 
                href="mailto:r.alvites@ugelhuacaybamba.gob.pe"
              >
                <span className="material-symbols-rounded text-xl text-primary">mail</span>
                <span className="text-slate-700 dark:text-slate-200 text-sm">r.alvites@ugelhuacaybamba.gob.pe</span>
              </a>
              <a 
                className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-bold transition-all shadow-lg shadow-blue-500/20" 
                href="#"
              >
                <span className="material-symbols-rounded text-xl">chat</span>
                Contactar vía WhatsApp
              </a>
            </div>
          </div>
          <div className="md:w-2/5 p-8 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 border-2 border-dashed border-primary/20 rounded-[3rem] animate-pulse"></div>
              <img 
                alt="Mg. Ricardo Alvites Milla" 
                className="relative w-full max-w-sm h-[400px] object-cover rounded-[2rem] shadow-2xl" 
                style={{ clipPath: 'polygon(10% 0, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)' }}
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBc_jCa20Eud7pwJH_AGcxV1Y9tG5lSIbfSk2uAtYg0rKf_3t9w0UfIXDhuOKzTw1RJCoWsiSCb_L-SiNA3KvHl45iIzrJtUfNgdIAgDyDriwlKhTn5S0LDVcSA_UqOHZ4ZSDTAQuhf3BVMFcbQPyKsSwcMtCW3bOfLxW5xJVWHuZfxIxH2gibN_R6pm2FZBrOaM0Pd9E8PQ21MuYBrYmcljgJN6-9T-Zj-58Vf9acMvkDiL8QfgkEBdv3Ms5QZSmgpibJRZfHTWLs"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Filter Bar */}
      <div className="sticky top-6 z-50 px-6 flex justify-center mb-16">
        <nav className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl p-2 rounded-full shadow-2xl border border-slate-200 dark:border-slate-700 flex items-center gap-1 md:gap-4 overflow-x-auto max-w-full">
          <button 
            onClick={() => setActiveFilter('todas')}
            className={`px-6 py-2.5 rounded-full whitespace-nowrap text-sm font-bold transition-all ${activeFilter === 'todas' ? 'bg-primary text-white' : 'text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-700/50'}`}
          >
            Todas las Áreas
          </button>
          <button 
            onClick={() => setActiveFilter('pedagogica')}
            className={`px-6 py-2.5 rounded-full whitespace-nowrap text-sm font-medium transition-all ${activeFilter === 'pedagogica' ? 'bg-primary text-white' : 'text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-700/50'}`}
          >
            Pedagógica
          </button>
          <button 
            onClick={() => setActiveFilter('administrativa')}
            className={`px-6 py-2.5 rounded-full whitespace-nowrap text-sm font-medium transition-all ${activeFilter === 'administrativa' ? 'bg-primary text-white' : 'text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-700/50'}`}
          >
            Administración
          </button>
          <div className="h-8 w-px bg-slate-300 dark:bg-slate-700 mx-2 hidden md:block"></div>
          <div className="relative hidden md:block">
            <span className="material-symbols-rounded absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input 
              className="pl-11 pr-4 py-2.5 rounded-full border-none bg-slate-100 dark:bg-slate-800 focus:ring-2 focus:ring-primary w-64 text-sm" 
              placeholder="Filtrar por nombre..." 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </nav>
      </div>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="flex items-center justify-between mb-10 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white tracking-tight">
              {activeFilter === 'todas' ? 'Todo el Equipo' : activeFilter === 'pedagogica' ? 'Gestión Pedagógica' : 'Gestión Administrativa'}
            </h3>
          </div>
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{filteredMembers.length} Miembros</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredMembers.map((member) => (
            <div key={member.id} className="group bg-white dark:bg-slate-800/40 rounded-[2rem] border border-slate-200 dark:border-slate-800 p-1 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden">
              <div className={`h-28 bg-gradient-to-br ${member.area === 'pedagogica' ? 'from-blue-50 to-indigo-100 dark:from-slate-800 dark:to-slate-700' : 'from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700'} rounded-t-[1.8rem]`}></div>
              <div className="px-6 pb-8 text-center -mt-14">
                <img 
                  alt={member.name} 
                  className="w-24 h-24 mx-auto rounded-full border-4 border-white dark:border-slate-800 bg-white dark:bg-slate-700 shadow-lg object-cover" 
                  src={member.photo} 
                />
                <h4 className="mt-4 text-xl font-bold text-slate-900 dark:text-white">{member.name}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">{member.role}</p>
                <div className="mt-6 py-4 border-y border-slate-100 dark:border-slate-700/50">
                  <span className="text-[10px] font-bold uppercase tracking-tight text-slate-400">
                    {member.area === 'pedagogica' ? 'Área Pedagógica' : 'Área Administrativa'}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <button 
                    onClick={() => setSelectedMember(member)}
                    className="py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    Perfil
                  </button>
                  <button className="py-2.5 rounded-xl bg-primary text-white text-sm font-bold shadow-lg shadow-blue-500/10 hover:bg-blue-700 transition-colors">
                    Contactar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}
    </div>
  );
};

export default Directory;
