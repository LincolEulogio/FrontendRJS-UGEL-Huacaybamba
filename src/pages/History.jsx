import React from "react";

const History = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="relative overflow-hidden py-24 lg:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold tracking-wide uppercase">
                Hito Institucional
              </div>
              <h2 className="text-5xl lg:text-7xl font-extrabold text-slate-900 dark:text-white leading-[1.1]">
                UGEL <span className="text-primary">Huacaybamba</span>
              </h2>
              <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                Una creación al servicio de la educación regional. Historia,
                origen y propósito institucional.
              </p>
            </div>
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  alt="Paisaje de Huacaybamba"
                  className="w-full h-[500px] object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDktnTHqDxk0vzeGFBhVtmYzwCCB39l4gdCwHemupMzUYBh7LBtcTyBH4KZwufoWjdUwulNWMgdNQGxDAS-4uEC7BvI-5m90xnlfMDJlTgjHcvE1-0xikDyIQBbnizwMx2q4ztHo-0kYKJNFoewFpwwPgriyfD1VHZHY9A-M2Sj0IETZh5xtV-zJNgnYA_UGSiG8cuAC94qPgBx7isAv-cQJsZmHXKm3yNdQ-xA6qQb7df7A7bKsYHexks8Zhs4dJkdskeNBDwTO60"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm leading-relaxed italic">
                    "Ubicada en las tierras altas de Huánuco, nuestra
                    institución nace de la necesidad de acercar una educación de
                    calidad a las comunidades rurales."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Geography Section */}
      <section className="py-24 bg-slate-100 dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="rounded-2xl overflow-hidden shadow-lg transform translate-y-8">
                    <img
                      alt="Comunidades Rurales"
                      className="w-full aspect-square object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuANVIHh5KA_3NfRq49Dww7F0Za0rXxWa_fP81VD5IiT08GTvE_QDQjrYQb4Nbdl_HHYaLnzaRD3J7Qaj4qt5z8ev7l5s_ddBrK-BkAtafFDC-cZ_MhIRorlT3WrQqOIpuxlIbO7Mwdde3gQeyN43WCPeiXGa90Mp5oGPMhFvbmH3bbBzjNzR0aluQEhwXoRo2IlHMdd-F4Akg6iMmq2TbVqhIGRtbYLXCfie9x2QvmELPFsciaX2fi0XlaSR1WySdlH7l2lDLQg6WE"
                    />
                    <div className="bg-white dark:bg-slate-800 p-4">
                      <h4 className="font-bold text-sm">Comunidades Rurales</h4>
                    </div>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      alt="Docentes Locales"
                      className="w-full aspect-square object-cover"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1IxXXXgsG4aFt8sbClpMVHr1d43g0oBl7RELZaXUWFPeYeoWJvpvsxFp5ZqhavtWPHfR6aUymRj3YRoKWchTotJDYp8_07_e5ZRC_ESYPkihsRtM4uZCWLX1YbqHRVSMxLCjFr5h4D980AMqHP_x51mj8wEdMyBFljDfGqgy9WGu_RO1fyB_OwW4CFcFmGvlJOiRdRdTXv5E7osC7iMw1lZiUJM0V3Eo-MojI5THculm8pasTCuNunydjQ46I7R1fuGaOOVfRbfE"
                    />
                    <div className="bg-white dark:bg-slate-800 p-4">
                      <h4 className="font-bold text-sm">Docentes Locales</h4>
                    </div>
                  </div>
                </div>
                <div className="pt-12">
                  <img
                    alt="Vista Aérea"
                    className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmGY1G_KR_LVaFE6-isczX8LN_POYLoe9ENB_9jGd7OuLHXBuoyPPDKv818W8s0ZanQ6uzrjn0yDDEwokauHHThE5jh-_-tNZsJk38tssHokGnyhTcezCKjWXmUJJpXhWxmWFOQ_xj3gTI1HZu9-mlDRcKKmuy4gnVyzSbCHy0U17UOeG2M0fqdQC6mVmjkpWBl9I0bFPAMDXEx7TRZ5N7QjnehcYwQDxkXKbq5qlMWkqsjRBYDUqDMO6JJYMD0yLPqfZd7Y72Jgs"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h3 className="text-4xl lg:text-5xl font-serif italic text-slate-800 dark:text-slate-100">
                "La geografía también condiciona el acceso a una educación de
                calidad."
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                En las tierras altas del departamento de Huánuco, la provincia
                de Huacaybamba enfrentaba desafíos únicos para garantizar una
                educación accesible y de calidad para todos sus ciudadanos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Framework */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">
              El Marco Legal -{" "}
              <span className="text-primary">Origen Formal</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
              La creación de nuestra institución se sustenta en un sólido marco
              normativo que reconoce la autonomía y gestión descentralizada.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 relative rounded-3xl overflow-hidden group">
              <img
                alt="Palacio de Gobierno"
                className="w-full h-full min-h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5sT9wVQAcEUPHiUZ4lCbkiT0JshRtoSKArpjqIJV_GfmeWXaJAv5SJG57rW3ZYLKQPk9hX4_QRKm_H3LzB766j4chGm7MpyOjnDM43yhnyk-a5zYAMjQ7EJldKbUC7EI_iR2vdcA3x7m8zFV588KaTDsbivUo0ISSMgUq3X3L5klKqxZU06YqVf0IcyMWCIeHWVr_D018_buPwsJyc4vc_b3N1f-ty8JX_sFQUPePPj3mLEZPzDfYDDXhpnc4MQZ5Q9TI7kUNOV0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-12">
                <span className="text-8xl font-black text-white/40 mb-2">
                  2012
                </span>
                <h3 className="text-3xl font-bold text-white">
                  Consolidación Legislativa
                </h3>
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col gap-8">
              <div className="bg-blue-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-blue-100 dark:border-slate-700 flex items-start gap-4 hover:-translate-y-1 transition-transform">
                <div className="bg-primary p-3 rounded-xl text-white">
                  <span className="material-symbols-rounded">balance</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">Ley N.° 29812</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Marco normativo fundamental para el presupuesto público.
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-blue-100 dark:border-slate-700 flex items-start gap-4 hover:-translate-y-1 transition-transform">
                <div className="bg-primary p-3 rounded-xl text-white">
                  <span className="material-symbols-rounded">description</span>
                </div>
                <div>
                  <h4 className="font-bold text-lg">
                    Artículo 58 - Ley N.° 28411
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Autorización específica para la creación de unidades
                    ejecutoras.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 justify-center items-center h-full">
                <img
                  alt="Escudo Perú 1"
                  className="h-24 w-auto opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlE2ZF147WYdUnmCcwwsH5mGAyUMlHmJueAc6XwV8_nfmoHZE5Y7teJQf3PMwCPrI_RNW1gaQoZrLcOGGdxl3ggik78MMejfm_uxVr_1pW5U4CqEgpT0g9v0j1nqFEh8AuwWfuPaug8CFk1MTgrtrNJgpz6mZMjCdL5RTlUM2wqJ1RyXAtEoOIHr9gBkjyvSf1DmBkrjWpRyFMM5KY85mepLqT_MmqIuTYmvvokgo7qtuZTU-WfPSW2obpgJdp3A3EWeP0etOUknA"
                />
                <img
                  alt="Escudo Perú 2"
                  className="h-24 w-auto opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdOm3GQczjhNAeE-iYpj-0i6Ful5P9Ro9qz6T6uNuLlb4_MyzPQiDkwB4a2vKdTkNK7qeJD7HhYA8_yaI--K8qedD-MIqdz-qMoARs1RVedoi3lkYYJenShzyZA3zR0wdA1CkPuJ2a1tugX49G2YlNVgo1uaaLv9N328ExrjV0NnvL70_3Y07LJiVXlXjsQOZhQsiPN15HoSPvgf5RZ7dy7NjuNCI-UAcp9-a0x0IV-qnMuyMcZJCla9Ps3jji0hRFM5t0oD_fyy4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Process */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-4xl font-bold mb-20">
            Proceso de Reconocimiento - Hito Institucional
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Solicitud del Gobierno Regional",
                subtitle: "Iniciativa regional de Huánuco",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCQNtghleo4EsrRFS0VCULMHyfW4h1YwaSmM4lU26H0Zq0NpA04r_j6ftrZTkaSvFRR4LfDkorWQ0Hg81fzOCXF-PMVvZBoCQfxKeGpu449q8RThYxxrWMmXrtjNo0hi8U1W0mdnON4QYJlaH8ayAAWkIWyMAvoP-AxJWTGTGSpSyl0L4rdqyo2-WPKkJMKMP4SGopaywqjSfM8J5YnfB5lgvpOyWiNVC-nFKpymq47XYYAlGSFIeMEm_DbC1lOvIIPxhWUer3fNCQ",
              },
              {
                step: "2",
                title: "Oficio N.° 972-2012",
                subtitle: "Documentación formal",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBqO04OfxUxI6dA6-Qy-EAlY7KSerPNuaDA5cmfwX5-V10OBxTANtxEvxfuT9HZtBn47f3W9BMyr3tzxx3lGXrn6uKxAaARL6rhv6-4B1Li-4aKGkopiew0w7_uVngoJGtwRmpkdNxJ9sJ27yhiDuohDNQX-7qXALhPxWgsEI25E2IAmFfslekid9CiAPivO0hnUcXh5cg6B097OtvmGc1ADLOkCvYl11Q6db7fk4T9pMbOA33KR2zBGFs8cAmuj4V00GGJIoNNFKc",
              },
              {
                step: "3",
                title: "Recomendación del MEF",
                subtitle: "Aprobación ministerial",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBh8knefmE6XX1I8ImoBWI133rOPCAPGp6s7S-4XaieXmkotaqQ55UtZMltlGzM4sAzxCpA7IdmkJO37nshHZ_rItaQuM0Ct2KWYKMg-71Luq26H_6M8u5En8PAw2_mIoQpG8HLqls4QaZIZLv6vbYXtwc3A7YmBPDF3zyWij7Jq0m7XQQGkuU63aLktrQzGVLDinFTi5sWnoqBqwp7LcCGGiwv9poX4lpVB-Vx7YsOAqEEY4o0hT1AU9WOfei8Cz20_u2D1RYHTdI",
              },
              {
                step: "4",
                title: "Resolución N.° 2532-2012",
                subtitle: "Creación oficial",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuDyhNc0jzK9i7fuKQSmjRdySx4rsOJyci2nRlZQyMuftVEuaeypa0QteRJU8QkWq4lKgJt1LUCvuEuNdd9AZSf5r60tEZ2I-lHAKDQv4fb9LbtU-eFRjQhz9DLk7pofUeOYhiGyZ6T2_uzCELnUUxwp-klpur-LEw_9VD7digGC1dJ6UV_WMyGffDkIR-E8-nTZc-mG2xeaOcO0UqxG0-8A173LpI6Wja6Jrl1ZCRqhw1lTCZSPjyph2nA2XDra1KIzBldIvtmSAaQ",
              },
            ].map((item) => (
              <div key={item.step} className="group">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold shadow-xl">
                    {item.step}
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm group-hover:shadow-xl transition-all">
                  <img
                    alt={item.title}
                    className="w-full h-32 object-cover rounded-xl mb-4"
                    src={item.image}
                  />
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2013 Operations */}
      <section className="relative bg-primary py-32 overflow-hidden px-6">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="text-white space-y-8">
              <h2 className="text-8xl lg:text-9xl font-black text-white/70 leading-none">
                2013
              </h2>
              <h3 className="text-4xl lg:text-5xl font-bold">
                Inicio de Operaciones - Nueva Etapa
              </h3>
              <p className="text-xl text-blue-100 leading-relaxed font-light">
                Con el año fiscal 2013 comenzó una nueva era para la educación
                en Huacaybamba estableciéndose como Unidad Ejecutora 307 del
                Pliego 448 Gobierno Regional de Huánuco.
              </p>
              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <h4 className="font-bold text-lg">Unidad Ejecutora 307</h4>
                  <p className="text-sm text-blue-200 mt-2">
                    Autonomía administrativa y financiera local.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <h4 className="font-bold text-lg">Pliego 448</h4>
                  <p className="text-sm text-blue-200 mt-2">
                    Dependencia estratégica del GORE Huánuco.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                alt="Personal UGEL"
                className="rounded-[2.5rem] shadow-2xl w-full object-cover aspect-[4/3]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_yc0PTkCaRjBOemG9-2Dmx3mJPQ6YNswN4rq4_zVqUvhhgrin3eQ1Qd36lO49wfZbU7laMG5TEFAFZOt1H4tvIu-BpS42EUQ3ydj3PAK5fQSMdZWLsi4NP2V956Zvc0_i6pfCQKDII-o3RmvBoLmXCm9WNt3E2dHeIP2aO0JzBjF9BzcRFanlUqDWquizB2tufyVrr5nm4JimTxO_2zPHHIFv110exCxCiynli8cMQH24sQM3wgrvzqxQnj00fv1HawqgAHj1QSk"
              />
              <div className="absolute -bottom-6 -right-6 bg-accent p-8 rounded-3xl shadow-xl hidden md:block">
                <span className="material-symbols-rounded text-4xl text-white">
                  handshake
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Impact */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Significado e Impacto Social
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "landscape",
                title: "Educación Rural",
                description: "Acceso garantizado en comunidades remotas.",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuBf3L42JblJLWMnYeBNowwHKf9GA3rldyErXfT6RV73HykcGPPzUu5U5Y-71bWUaRWOYs7KX-Vgt5K3ySLQx1feqeZKVEWsZSBLOzzCi1NARBTzdKDxMmlhZ_A_Dg3y-1tFOehLwkXFecfjZJ4V1u5fYnKTeGJh8eLGCfcmyK1TNqO6pUOf1T2aO40WSycdEPQFz2e7n8WJkbuS31FQPxUxVEQTf61hxGaQofuyEPM6L4_Wac6x1PuiHLffbcxExJngjYFoc6xWKxY",
              },
              {
                icon: "psychology",
                title: "Docentes",
                description: "Fortalecimiento profesional continuo.",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuCrPwNir_ApOQLX4ACQ-5WVSmHfW-UNkUCvsrEzX5sQV-etsvrgBQMNLljj2vbC-mNMexzJXUBGeQF2ujEz_XVxmf1QE2t-6juEZg-4g1scX_hYMtlqkEq8L0Mnce38ib3WtJvmL1x0DncLJt5U-KcpKoPv0hRIRdoJyiYujvaIsdbqV-V5ZVpyoJTSkOByyTy6rEswnHDB_qu6GOlR2PP1uHY4oQsXP9la3kXPTDuY2cAboE-ZHbTYjZX2Qb8DIjyhwFytSvFCluw",
              },
              {
                icon: "person_celebrate",
                title: "Estudiantes",
                description: "Oportunidades de desarrollo integral.",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAAS209_ZtMEnxhHIwzm8I6CVPI88rCUhjIf8F34eXEQBYuj5t4jFSGbnV3eozX3jI5kWSM-xwbf5dWff_IiyyZ8JmH4PpULIhCNt7fT95a9r35vLJk_mt5BkYdUvUekooYERGMVpLc89WdNTHJFW6xyrL7ePBYNUcxabmOMG8QEDN5qb5Xf5gvixUfiUV5fDxcUnd-5waugQ9eNPc7EQwUyv7_cGzsjX7rdLAObXbj9YN8e7H0Ne0M_4DkPIFy9ryHX0JLcW7F9a4",
              },
              {
                icon: "groups",
                title: "Comunidades",
                description: "Participación activa en el proceso educativo.",
                image:
                  "https://lh3.googleusercontent.com/aida-public/AB6AXuAIOG1e2qNC4G7giP37qFy2CkRuj7Z1MPela0p_bHjFeXUL7fJL91s493r2-FNlUYF1x7ClTahKm9TqLCdzbWqelFvz7atkXZwLRLn62to2wzaa-JRKGIeOZYgSQiDDdksr6HZTUlUkIo568iESi6Ki9Sv1IZ7AwjpLPh9ewXxWBu3-fRBH72Lf2WJT54TKw6Nbz2RsD6I_4Fl6TKVGLbgX_3mq3HWI7Cd1IyC4moH7Yi7ZV-c_f_nvoCl4gtd_sq7GpI3anP0COOc",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-6 overflow-hidden rounded-2xl shadow-lg">
                  <img
                    alt={item.title}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-500"
                    src={item.image}
                  />
                </div>
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4">
                  <span className="material-symbols-rounded text-primary dark:text-blue-400">
                    {item.icon}
                  </span>
                </div>
                <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Quote */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="rounded-[3rem] overflow-hidden mb-12 shadow-2xl">
            <img
              alt="Frontis UGEL"
              className="w-full h-[400px] object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU2AYdAyDLnzvxk5zC1Ok_HutDC9DdF1-4lG0eT18BPqtKPwA4ktk8kv6p4o0xqNsR5-gScoIJdy8GixVEtcmKE6m94PIBJxgGftzQXl29RF8K49ApJIjwHkvNElWzmLvF5l2fk8Dr0K0JlsxtZKMPvwUMO1fpdfF1v_me5BdEHhrlRxmn2MLFbEXyLHnyx5dDs9Ex-4sO93bbunKqBBAvwuXn1GtY9R3usyGR_6UnZvbyp-gYXBa7sZyxYMbDDvOX5OV4dM1yr0g"
            />
          </div>
          <h2 className="text-3xl lg:text-4xl font-serif italic text-slate-800 dark:text-slate-200 max-w-3xl mx-auto leading-relaxed">
            "Hoy, la UGEL Huacaybamba trabaja con compromiso para transformar la
            educación y fortalecer el futuro de nuestra región."
          </h2>
          <div className="mt-12 flex justify-center">
            <div className="w-32 h-1.5 bg-primary rounded-full"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
