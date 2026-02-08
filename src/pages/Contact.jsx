import React from 'react';

const Contact = () => {
  const teamMembers = [
    {
      name: 'Cornejo Romero, Edith Yesenia',
      role: 'Secretaria - Dirección',
      email: 'secretariad@ugelhuacaybamba.edu.pe',
      whatsapp: '51998872733',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfviBk-80niTHUV4d37oIR6D0Gj_oO9RAqSwC9eeo_VisRZeFR-CTJba7eSDWjJzHwXkUQ3DwWx95QuBP5ul9aFoP3BDlDWspPBdHwtLDPpBZ-Iprf9L_i9kJbFMXV0xeS9oHcIaY1ezrAnthI3YxudLxNTDmXI22zsw5S0-0ImCFAmCIvLQi0jHFD4rBBem8z-oOn-tVXf3Ue3BNogUqS6mUHxUB7bcGhWXM8PKDEhe5DF4-g1dUSNtUK8BlbjEoEa_MSkl6JInU'
    },
    {
      name: 'Pardo Flores, Nena Yadith',
      role: 'Secretaria - G. Administrativa',
      email: 'secretariaaga@ugelhuacaybamba.edu.pe',
      whatsapp: null,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9ElKfemK5ax1g6AzYCdxd9kF9salNnEg_Tb_4C8POrz7TGz1evT3LiKvZu63UeMibaY3kgqhomdiWrJiPozHkYnCcAxU9T2yhMXK2BRo-nudMZTIBkcvHYjQWoseJ9kYwXH9YRYi_NW5k4H4ara7WaTkdJfOFQoVzrmfyxdgcp6Bcos_tt9yPOCF31m7wHglD-jAYHTI6iu3Goek_xN-LFC9t7hhZA4yqF0ctAel0m0dBE6kGQSHHk7fIRi8hmOdykCY_NxTqJbA'
    },
    {
      name: 'Fretel Mendoza, Renzo Jesús',
      role: 'Secretario - G. Institucional',
      email: 'secretarioagi@ugelhuacaybamba.edu.pe',
      whatsapp: null,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIAErZ3Ylnx2hV5pdxUjGohg2ppVzXLETJd2muoVOyxBSV0eW8joYZPOoKiA_JqysYALNGMq6KIdI6wh3ehzKJCjtGjzx4MkhrB0QnogGHo5sGm1Pv1pTD1WLBup-PFc5mRJvbF-OXMTHaX9UdlMJnU3Oko2DCDQL90EsKWwFvmWcIIGVNgWjh2Nf5o_yC1z3ci1McYFHGdanVZBdaf_3IYt00nS2gqyPLnxuifku-ghohIYjOYPHehRUf3mw1ymhQa7FiUxzj35w'
    },
    {
      name: 'Ambrosio Santos, Javier',
      role: 'Secretario - G. Pedagógica',
      email: 'secretarioagp@ugelhuacaybamba.edu.pe',
      whatsapp: null,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBczFuJuEGtNifrw335W7VTwH3CMc60tv225qFOI8ACG6r5anSrenh4kBkyH7OZIaooah-UqAI9yJ9KQ_9elbvoFLuXWWge035CTCHb0FV0ukoaq9RsqkOJVw_3V2OSi0RkweCzhzga8v16bLEw_uK0kSS6TEhZfNQchJ4Q02z2khQ6ZUHtqDoI7x2sGUqgUwpMHYJxLX-UG7gw4c8NLmH_5j4o2S8RMAcX1vHo0NSD8WALQ3R-FnxFZJXwBNurfSRl-qe18A7I4oY'
    }
  ];

  return (
    <div className="bg-background-light dark:bg-background-dark min-h-screen">
      <main className="max-w-[1920px] mx-auto flex flex-col lg:flex-row min-h-screen relative">
        {/* Sidebar */}
        <aside className="w-full lg:w-[40%] lg:sticky lg:top-0 h-auto lg:h-screen p-8 lg:p-12 flex flex-col justify-between">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                <span className="material-symbols-rounded text-3xl">account_balance</span>
              </div>
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight uppercase">UGEL Huacaybamba</h1>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Dirección Regional de Educación</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-2xl shadow-2xl h-[400px] lg:h-[500px]">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAInFmrr7BFZKW5UfNEW3km1FRxWeZsdVCuvC1avpRkVXlcsrkaaAX8Lge_n-8yiJyyanD-vGLyLDI0sjSdfCLFGe2u9RiYbK3kv2RF1JYZ9al91Uq90lew7-fWnUxHlNVCdiNpnx4OIZ2X16dTfmiP0SYPIyJItOeZxk5B6cJAWrRxKbrSn77OxD1sSF5f_Jdup9Kq5P1AfExzUUJIrTd7Y3HIz_slIlye1TEzfPm_ntG4yacqanhVsOkcLKRH57tJhIqDesci3B0" 
                alt="UGEL Building" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="glass p-6 rounded-2xl text-white">
                  <h2 className="text-xl font-bold mb-2">Visítanos en Sede Central</h2>
                  <p className="text-sm opacity-90 flex items-center gap-2 mb-4">
                    <span className="material-symbols-rounded text-sm">location_on</span>
                    Av. 28 de Julio Nº 502 - 504, Huacaybamba, Perú
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="bg-white/20 hover:bg-white/30 backdrop-blur-md p-2 rounded-lg transition-colors">
                      <span className="material-symbols-rounded text-white">facebook</span>
                    </a>
                    <a href="#" className="bg-white/20 hover:bg-white/30 backdrop-blur-md p-2 rounded-lg transition-colors">
                      <span className="material-symbols-rounded text-white">alternate_email</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 space-y-4">
            <p className="text-xs font-medium text-slate-400 dark:text-slate-500 uppercase tracking-widest">Atención al Usuario</p>
            <div className="flex flex-col gap-2">
              <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <span className="material-symbols-rounded text-primary">phone</span>
                998 872 733
              </span>
              <span className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <span className="material-symbols-rounded text-primary">mail</span>
                ue307hbba@hotmail.com
              </span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <section className="w-full lg:w-[60%] bg-slate-100/50 dark:bg-slate-900/50 p-8 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <header className="mb-12">
              <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2 block">Directorio de Contacto</span>
              <h2 className="text-4xl lg:text-5xl font-extrabold mb-4">
                Nuestro Equipo <span className="text-primary">Estratégico</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl text-lg">
                Estamos aquí para apoyarte. Conéctate directamente con los responsables de cada área para una atención personalizada.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="glass p-6 rounded-2xl flex flex-col gap-4 hover:-translate-y-2 transition-transform">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-4">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-16 h-16 rounded-xl object-cover ring-2 ring-primary/20" 
                      />
                      <div>
                        <h3 className="font-bold text-lg leading-tight">{member.name}</h3>
                        <p className="text-primary font-semibold text-sm">{member.role}</p>
                      </div>
                    </div>
                    <span className="material-symbols-rounded text-slate-300 dark:text-slate-700">stars</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <a 
                      href={`mailto:${member.email}`}
                      className="flex-1 flex items-center justify-center gap-2 bg-primary text-white py-3 px-4 rounded-xl font-semibold hover:opacity-90 transition-all text-sm"
                    >
                      <span className="material-symbols-rounded text-lg">alternate_email</span>
                      Email
                    </a>
                    {member.whatsapp && (
                      <a 
                        href={`https://wa.me/${member.whatsapp}`}
                        className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-4 rounded-xl font-semibold hover:opacity-90 transition-all text-sm"
                      >
                        <span className="material-symbols-rounded text-lg">chat</span>
                        WhatsApp
                      </a>
                    )}
                  </div>
                </div>
              ))}

              {/* CTA Card */}
              <div className="glass p-8 rounded-2xl md:col-span-2 flex items-center justify-between bg-primary text-white border-none">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">¿Necesitas ayuda adicional?</h4>
                  <p className="opacity-80">Si tienes dudas sobre el Libro de Reclamaciones o transparencia.</p>
                </div>
                <a 
                  href="#" 
                  className="bg-white text-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform"
                >
                  Ver FAQ <span className="material-symbols-rounded">arrow_forward</span>
                </a>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
              <p className="text-xs text-slate-500 dark:text-slate-400">
                © 2024 UGEL HUACAYBAMBA. Todos los derechos reservados.
              </p>
              <p className="text-[10px] text-slate-400 mt-1 uppercase">Desarrollado por ALVACOR</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;