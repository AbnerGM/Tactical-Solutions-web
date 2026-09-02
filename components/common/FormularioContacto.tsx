"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function FormularioContacto() {
  const [enviado, setEnviado] = useState(false);
  const [pais, setPais] = useState("");
  const [servicio, setServicio] = useState("");

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section className="w-full py-16 md:py-20 text-[var(--color-tactical-dark)] font-sans border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-6">

        {/* Contenedor principal en dos columnas simétricas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Columna Izquierda: Formulario (Fondo blanco con línea superior verde y bordes definidos) */}
          <div className="bg-white p-8 md:p-10 border border-zinc-300 shadow-sm flex flex-col justify-between relative border-t-4 border-t-[var(--color-tactical-green)]">
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[var(--color-tactical-dark)]">
                  Déjanos un mensaje
                </h3>
                <span className="text-sm text-zinc-600 block mt-1">
                  Formulario de registro operativo
                </span>
              </div>

              {enviado ? (
                <div className="py-16 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-50 text-[var(--color-tactical-green)] border border-[var(--color-tactical-green)]/20 mx-auto flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <h4 className="text-base font-bold text-[var(--color-tactical-dark)]">
                    Mensaje Recibido
                  </h4>
                  <p className="text-sm text-zinc-700 max-w-xs mx-auto leading-relaxed">
                    Hemos registrado su requerimiento correctamente. Nos pondremos en contacto a la brevedad.
                  </p>
                  <button
                    onClick={() => setEnviado(false)}
                    className="mt-2 px-6 py-2.5 bg-[var(--color-tactical-dark)] text-white text-xs font-bold uppercase tracking-widest hover:bg-[var(--color-tactical-green)] transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={manejarEnvio} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Nombres *"
                        className="w-full px-4 py-3 bg-white border border-zinc-300 text-sm font-medium text-[var(--color-tactical-dark)] placeholder-zinc-500 focus:outline-none focus:border-[var(--color-tactical-green)] focus:ring-1 focus:ring-[var(--color-tactical-green)] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Correo *"
                        className="w-full px-4 py-3 bg-white border border-zinc-300 text-sm font-medium text-[var(--color-tactical-dark)] placeholder-zinc-500 focus:outline-none focus:border-[var(--color-tactical-green)] focus:ring-1 focus:ring-[var(--color-tactical-green)] transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="tel"
                        placeholder="Teléfono"
                        className="w-full px-4 py-3 bg-white border border-zinc-300 text-sm font-medium text-[var(--color-tactical-dark)] placeholder-zinc-500 focus:outline-none focus:border-[var(--color-tactical-green)] focus:ring-1 focus:ring-[var(--color-tactical-green)] transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="RUC"
                        className="w-full px-4 py-3 bg-white border border-zinc-300 text-sm font-medium text-[var(--color-tactical-dark)] placeholder-zinc-500 focus:outline-none focus:border-[var(--color-tactical-green)] focus:ring-1 focus:ring-[var(--color-tactical-green)] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <select
                        value={pais}
                        onChange={(e) => setPais(e.target.value)}
                        className={`w-full px-4 py-3 bg-white border border-zinc-300 text-sm font-medium focus:outline-none focus:border-[var(--color-tactical-green)] focus:ring-1 focus:ring-[var(--color-tactical-green)] transition-colors ${
                          pais === "" ? "text-zinc-500" : "text-[var(--color-tactical-dark)] font-medium"
                        }`}
                      >
                        <option value="" disabled className="py-2">Selecciona tu país</option>
                        <option value="pe" className="py-2">Perú</option>
                        <option value="co" className="py-2">Colombia</option>
                        <option value="cl" className="py-2">Chile</option>
                        <option value="mx" className="py-2">México</option>
                      </select>
                    </div>
                    <div>
                      <select
                        value={servicio}
                        onChange={(e) => setServicio(e.target.value)}
                        className={`w-full px-4 py-3 bg-white border border-zinc-300 text-sm font-medium focus:outline-none focus:border-[var(--color-tactical-green)] focus:ring-1 focus:ring-[var(--color-tactical-green)] transition-colors ${
                          servicio === "" ? "text-zinc-500" : "text-[var(--color-tactical-dark)] font-medium"
                        }`}
                      >
                        <option value="" disabled className="py-2">Selecciona un servicio</option>
                        <option value="montaje" className="py-2">Montaje Electromecánico</option>
                        <option value="continuidad" className="py-2">Continuidad Operativa</option>
                        <option value="soporte" className="py-2">Soporte Técnico 24/7</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <textarea
                      rows={4}
                      placeholder="Detalla tu requerimiento..."
                      className="w-full px-4 py-3 bg-white border border-zinc-300 text-sm font-medium text-[var(--color-tactical-dark)] placeholder-zinc-500 focus:outline-none focus:border-[var(--color-tactical-green)] focus:ring-1 focus:ring-[var(--color-tactical-green)] transition-colors resize-none"
                      required
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      style={{
                        backgroundImage: "linear-gradient(135deg, var(--color-tactical-green) 50%, var(--color-tactical-red) 50%)"
                      }}
                      className="w-full py-3.5 text-white font-bold text-xs uppercase tracking-widest shadow-sm hover:opacity-95 transition-opacity relative overflow-hidden"
                    >
                      <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)]">Enviar mensaje</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Columna Derecha: Información de Contacto (Fondo blanco con línea superior roja y bordes definidos) */}
          <div className="bg-white p-8 md:p-10 border border-zinc-300 shadow-sm flex flex-col justify-between relative border-t-4 border-t-[var(--color-tactical-red)]">
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-[var(--color-tactical-dark)]">
                  Información de contacto
                </h3>
                <span className="text-sm text-zinc-600 block mt-1">
                  Detalles de Contacto
                </span>
              </div>

              <div className="space-y-6 pt-2">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-red-50 border border-red-900/10 flex items-center justify-center shrink-0 text-[var(--color-tactical-red)] font-bold text-sm">
                    T
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[var(--color-tactical-dark)]">Teléfono</h5>
                    <p className="text-sm font-medium text-zinc-800 mt-0.5">+51 978 118 557</p>
                    <span className="text-xs text-zinc-500">Lun - Vie: 8:30 AM - 6:00 PM</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-red-50 border border-red-900/10 flex items-center justify-center shrink-0 text-[var(--color-tactical-red)] font-bold text-sm">
                    E
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[var(--color-tactical-dark)]">Email</h5>
                    <p className="text-sm font-medium text-zinc-800 mt-0.5">contacto@tacticalsolutions.pe</p>
                    <span className="text-xs text-zinc-500">Respuesta en 24 horas</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-red-50 border border-red-900/10 flex items-center justify-center shrink-0 text-[var(--color-tactical-red)] font-bold text-sm">
                    H
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-[var(--color-tactical-dark)]">Horarios</h5>
                    <p className="text-sm font-medium text-zinc-800 mt-0.5">Lun - Vier: 8:30 - 18:00</p>
                    <span className="text-xs text-zinc-500">Sáb: 8:30 - 13:30</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-200">
              <h6 className="font-bold text-sm text-[var(--color-tactical-dark)] mb-1">
                ¿Necesitas ayuda inmediata?
              </h6>
              <p className="text-xs text-zinc-600 leading-relaxed">
                Nuestro equipo está listo para atenderte y brindarte la solución para tu requerimiento.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}