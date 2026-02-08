import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MeritResults = () => {
  return (
    <>
      <style>{`
        .glass-card {
            background: rgba(255, 255, 255, 0.7);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.8);
            box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.05);
        }
        .aurora-bg {
            background: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
            position: relative;
            overflow: hidden;
        }
        .aurora-bg::before {
            content: "";
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle at 50% 50%, rgba(66, 124, 240, 0.05), transparent 50%);
            pointer-events: none;
        }
      `}</style>
      <div className="bg-background-light font-display text-[#0d121b] min-h-screen flex flex-col">
        <Navbar />
        <div className="max-w-[1920px] mx-auto px-10 py-6 flex-grow">
          {/* Hero Search Section */}
          <section className="relative h-[400px] w-full rounded-3xl overflow-hidden mb-10 shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBKHForpHuNG3QZ1_W_Wduco1Qjs_nJyjbkXoLJvlV4Ibi0weVJZ5BoO48zWbIcqwblVzgHU-sKIEiERyye85MOg4a_IvXJ8HxI9dHX6sz_sgNVrP3m-oWcDkhG7yoKH6-BJ3bcQ7O0XMNY-dxHCJV_O-2ZUK-zEXpHR_sOjgg7sl7XlJr6Hu36rUJXJJqy-csmMFcNf7CjJG8BZJ0pj_SsR4kbLsfa_0WKfs3_BGxOrCcSXOotXTQcILtXIHz7VtCVhCaknQc_gLo')",
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d121b]/80 via-[#0d121b]/40 to-transparent"></div>
            <div className="relative h-full flex flex-col justify-center px-6 md:px-20">
              <span className="bg-primary/20 text-primary-light text-white text-xs font-bold px-3 py-1 rounded-full w-fit mb-4 backdrop-blur-md border border-white/20">
                CONVOCATORIA VIGENTE 2024
              </span>
              <h2 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
                Consulta tus Resultados
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl font-medium">
                Encuentra tu posición en el Cuadro de Méritos oficial ingresando
                tu número de DNI o código de postulante asignado.
              </p>
              <div className="glass-card p-2 rounded-2xl flex items-center max-w-2xl border-white/30">
                <div className="flex-1 flex items-center px-4 gap-3">
                  <span className="material-symbols-outlined text-gray-500">
                    search
                  </span>
                  <input
                    className="bg-transparent border-none focus:ring-0 text-[#0d121b] placeholder:text-gray-400 w-full font-medium focus:outline-none"
                    placeholder="Ingresa DNI o Código de Postulante"
                    type="text"
                  />
                </div>
                <button className="bg-primary text-white px-8 py-3.5 rounded-xl font-bold flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all">
                  <span>Buscar Resultados</span>
                  <span className="material-symbols-outlined text-lg">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </section>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Card A: Cuadro de Méritos (Large) */}
            <div className="col-span-1 lg:col-span-8 glass-card rounded-3xl overflow-hidden min-h-[700px]">
              <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-white/40">
                <div>
                  <h3 className="text-2xl font-bold text-[#0d121b]">
                    Cuadro de Méritos Final
                  </h3>
                  <p className="text-sm text-[#4c669a] font-medium">
                    Relación de postulantes aptos y sus puntajes consolidados
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <span className="material-symbols-outlined text-gray-500">
                      filter_list
                    </span>
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <span className="material-symbols-outlined text-gray-500">
                      more_vert
                    </span>
                  </button>
                </div>
              </div>
              <div className="p-0 overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-gray-50/50">
                      <th className="px-8 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                        Ranking
                      </th>
                      <th className="px-8 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                        Postulante
                      </th>
                      <th className="px-8 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                        Currículum
                      </th>
                      <th className="px-8 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                        Entrevista
                      </th>
                      <th className="px-8 py-4 text-xs font-bold text-[#4c669a] uppercase tracking-wider">
                        Puntaje Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white/30">
                    {/* Rank #1 */}
                    <tr className="hover:bg-primary/[0.02] transition-colors group">
                      <td className="px-8 py-6">
                        <div className="size-10 bg-yellow-400/20 text-yellow-700 rounded-full flex items-center justify-center font-black text-sm border border-yellow-400/30">
                          #1
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div
                            className="size-12 rounded-full bg-cover bg-center border-2 border-white shadow-sm"
                            style={{
                              backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCzOki5lrld4uLd1pqGVvjGOYGczkb_iYYLt-5bWwGqXlJx5paSKka-5LMue-Efg9EjOVY2M-zwS2GRmpe8urcLZ2jOr2pQdRjA2P2M_KeCO0_a4BGvWRwd7n1pVAXJWUJcGOvcZjsnTYerBDdW-0BobJ0Fk_6B8X38IpzhNxVgG_n2QFD05z2VCxQIDYs5TxZeKTMg6LSR4B9_xX8yAmoRhGb2-h9IB0mygHpvFgdk_qitoYO2crv2LqHNeTXFtj3AOMb7hkgtLX4')",
                            }}
                          ></div>
                          <div>
                            <p className="font-bold text-[#0d121b]">
                              Ricardo Mendoza Rojas
                            </p>
                            <p className="text-xs text-[#4c669a]">
                              DNI 45****12
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 font-semibold">18.50</td>
                      <td className="px-8 py-6 font-semibold">17.25</td>
                      <td className="px-8 py-6">
                        <span className="bg-primary text-white px-4 py-1.5 rounded-full font-bold text-sm">
                          35.75
                        </span>
                      </td>
                    </tr>
                    {/* Rank #2 */}
                    <tr className="hover:bg-primary/[0.02] transition-colors group">
                      <td className="px-8 py-6">
                        <div className="size-10 bg-gray-200/50 text-gray-700 rounded-full flex items-center justify-center font-black text-sm">
                          #2
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div
                            className="size-12 rounded-full bg-cover bg-center border-2 border-white shadow-sm"
                            style={{
                              backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDudcZW7h6qDuVhV7QGKFcjQZtszcGFl9k7wSmt1zDq_5dCwQnGed42ITvuuTuGOUnixNlMh6nVyjcwxcek3uN4O_6WKn0FBTjESYqiKUP1tNVrNxoQ6MWxcfTrp3EOTb5w804mlJZNduALiq1TsUAjFcEk-ih1ut0tuY0lEJz20iJHIP91087-5_VU7N-YXgAZNUDCmMdfhsPmXLUWV7EhFp4ZOmAftPSHIyp0vG7rL_DnezPd2IprGTXEXwmDT8TLFqr48CkHUiY')",
                            }}
                          ></div>
                          <div>
                            <p className="font-bold text-[#0d121b]">
                              Elena Gutierrez Vila
                            </p>
                            <p className="text-xs text-[#4c669a]">
                              DNI 72****09
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 font-semibold">17.00</td>
                      <td className="px-8 py-6 font-semibold">18.00</td>
                      <td className="px-8 py-6">
                        <span className="bg-gray-100 text-[#0d121b] px-4 py-1.5 rounded-full font-bold text-sm border border-gray-200">
                          35.00
                        </span>
                      </td>
                    </tr>
                    {/* Rank #3 */}
                    <tr className="hover:bg-primary/[0.02] transition-colors group">
                      <td className="px-8 py-6">
                        <div className="size-10 bg-orange-200/50 text-orange-700 rounded-full flex items-center justify-center font-black text-sm">
                          #3
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div
                            className="size-12 rounded-full bg-cover bg-center border-2 border-white shadow-sm"
                            style={{
                              backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBwHKe3GdS0hiVwnM0FQKY4en73TIEo9QaIjSe2FKOdqH0FRuvTyk1Zu5sQpx9bTMRc-_KhW92BZxyrMtILT7GPDI2Wp3Hvm0nuJMMAf-AyXPKK3pisNL_s0jY73X8k9eMq6xvBvppW_x_eZSswEKODEnr2zWQPDjMKK-W4ICBoIkDToWWcycn_0KIM-2wIINUMUocS1oRsEPzA34-eRHqSP4N7-muMKCd_N-NOj1nOf_MwsH7x6CSreR4Do4w9Ogu3wTzzgcZSqds')",
                            }}
                          ></div>
                          <div>
                            <p className="font-bold text-[#0d121b]">
                              Carlos Huamán Soto
                            </p>
                            <p className="text-xs text-[#4c669a]">
                              DNI 40****56
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 font-semibold">16.50</td>
                      <td className="px-8 py-6 font-semibold">17.50</td>
                      <td className="px-8 py-6">
                        <span className="bg-gray-100 text-[#0d121b] px-4 py-1.5 rounded-full font-bold text-sm border border-gray-200">
                          34.00
                        </span>
                      </td>
                    </tr>
                    {/* Rank #4 */}
                    <tr className="hover:bg-primary/[0.02] transition-colors group">
                      <td className="px-8 py-6">
                        <div className="size-10 bg-gray-50 text-gray-400 rounded-full flex items-center justify-center font-black text-sm">
                          #4
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div
                            className="size-12 rounded-full bg-cover bg-center border-2 border-white shadow-sm"
                            style={{
                              backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDZMnRUxBfAL2SJKWIvORkuWFBcGKoviEcRZSOIkHl9STgt6zIInv0bP0VtGqUW935_hX1YM5O4QhfGq4scgAplGlDucaNYW6-YJn9eiDfKRL-CIdIzrLgx7IRp708h6UYy1kwQEJRTDr4MkllaMkBbfCdM3SVrUYgXPwQmJTY-_fNCW95JWFJ9HGiFFQFF1Ah7dwMnY4A0kwGXbAxceeHoOdS5cZPF5elc_V1UZdITsKmvriHzJYFPQTsYI6knVnP9HoL97fRwK_0')",
                            }}
                          ></div>
                          <div>
                            <p className="font-bold text-[#0d121b]">
                              María Luz Rivera
                            </p>
                            <p className="text-xs text-[#4c669a]">
                              DNI 44****88
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6 font-semibold">15.00</td>
                      <td className="px-8 py-6 font-semibold">18.50</td>
                      <td className="px-8 py-6">
                        <span className="bg-gray-100 text-[#0d121b] px-4 py-1.5 rounded-full font-bold text-sm border border-gray-200">
                          33.50
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-8 border-t border-gray-100 flex justify-center bg-white/40">
                <button className="text-primary font-bold text-sm flex items-center gap-2 hover:underline">
                  Cargar más postulantes
                  <span className="material-symbols-outlined text-sm">
                    expand_more
                  </span>
                </button>
              </div>
            </div>

            {/* Side Bento Column */}
            <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
              {/* Card B: Estado del Proceso (Medium) */}
              <div className="glass-card rounded-3xl p-8 overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4">
                  <span className="flex size-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full size-3 bg-green-500"></span>
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0d121b] mb-6">
                  Estado del Proceso
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="size-6 rounded-full bg-primary flex items-center justify-center text-white z-10">
                        <span className="material-symbols-outlined text-[14px]">
                          check
                        </span>
                      </div>
                      <div className="w-0.5 h-10 bg-primary"></div>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#0d121b]">
                        Convocatoria Abierta
                      </p>
                      <p className="text-xs text-[#4c669a]">
                        Finalizado el 01 Oct
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="size-6 rounded-full bg-primary flex items-center justify-center text-white z-10">
                        <span className="material-symbols-outlined text-[14px]">
                          check
                        </span>
                      </div>
                      <div className="w-0.5 h-10 bg-primary"></div>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#0d121b]">
                        Evaluación Curricular
                      </p>
                      <p className="text-xs text-[#4c669a]">
                        Finalizado el 05 Oct
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="size-6 rounded-full bg-primary ring-4 ring-primary/20 flex items-center justify-center text-white z-10">
                        <span className="material-symbols-outlined text-[14px]">
                          bolt
                        </span>
                      </div>
                      <div className="w-0.5 h-10 bg-gray-200"></div>
                    </div>
                    <div>
                      <p className="text-sm font-extrabold text-primary">
                        Resultados Finales Publicados
                      </p>
                      <p className="text-xs text-[#4c669a] font-medium">
                        Actualizado hace 2 horas
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 opacity-50">
                    <div className="flex flex-col items-center">
                      <div className="size-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 z-10">
                        <span className="material-symbols-outlined text-[14px]">
                          hourglass_empty
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#0d121b]">
                        Adjudicación de Plazas
                      </p>
                      <p className="text-xs text-[#4c669a]">
                        Programado para 15 Oct
                      </p>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-8 bg-[#0d121b] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#0d121b]/90 transition-all">
                  Ver Cronograma Completo
                </button>
              </div>

              {/* Card C: Documentos Oficiales (Small) */}
              <div className="glass-card rounded-3xl p-8">
                <h3 className="text-xl font-bold text-[#0d121b] mb-6">
                  Documentos Oficiales
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <a
                    className="flex items-center p-4 rounded-2xl bg-white/50 border border-white hover:bg-white transition-all group"
                    href="#"
                  >
                    <div className="size-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 mr-4">
                      <span className="material-symbols-outlined">
                        picture_as_pdf
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-[#0d121b] group-hover:text-primary transition-colors">
                        Acta de Resultados
                      </p>
                      <p className="text-xs text-[#4c669a]">PDF • 2.4 MB</p>
                    </div>
                    <span className="material-symbols-outlined text-gray-300">
                      download
                    </span>
                  </a>
                  <a
                    className="flex items-center p-4 rounded-2xl bg-white/50 border border-white hover:bg-white transition-all group"
                    href="#"
                  >
                    <div className="size-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mr-4">
                      <span className="material-symbols-outlined">
                        description
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-bold text-[#0d121b] group-hover:text-primary transition-colors">
                        Resolución Directoral
                      </p>
                      <p className="text-xs text-[#4c669a]">PDF • 1.1 MB</p>
                    </div>
                    <span className="material-symbols-outlined text-gray-300">
                      download
                    </span>
                  </a>
                </div>
              </div>

              {/* Extra Small Card: Info */}
              <div className="bg-primary text-white rounded-3xl p-8 shadow-xl shadow-primary/20 flex flex-col justify-between h-[180px]">
                <div className="flex justify-between">
                  <span className="material-symbols-outlined text-3xl">
                    help_center
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest opacity-70">
                    Soporte Técnico
                  </span>
                </div>
                <div>
                  <p className="text-lg font-bold">
                    ¿Tienes dudas con tu puntaje?
                  </p>
                  <p className="text-xs opacity-80 mt-1">
                    Escríbenos a mesa-ayuda@ugelhbay.gob.pe
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MeritResults;
