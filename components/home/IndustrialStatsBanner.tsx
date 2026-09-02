"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function IndustrialStatsBanner() {
  const stats = [
    { value: 15, suffix: "+", label: "AÑOS DE EXPERIENCIA" },
    { value: 120, suffix: "+", label: "PROYECTOS EJECUTADOS" },
    { value: 100, suffix: "%", label: "COMPROMISO OPERATIVO" },
    { value: 24, suffix: "/7", label: "SOPORTE TÉCNICO" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 1800;
            const incrementTime = 30;
            const step = Math.ceil(end / (duration / incrementTime));

            const timer = setInterval(() => {
              start += step;
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const newCounts = [...prev];
                newCounts[index] = start;
                return newCounts;
              });
            }, incrementTime);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="relative w-full py-16 md:py-24 overflow-hidden bg-tactical-dark">
      {/* Fondo con la imagen real y un overlay sutil para que la foto sí luzca y se note */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/inicio/tablero.jpg"
          alt="Industrial"
          fill
          className="object-cover w-full h-full opacity-45"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-2 text-white">
          Tomar las medidas adecuadas
        </h2>
        <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight text-amber-400 mb-6">
          Justo cuando se necesita
        </h3>
        
        <p className="text-zinc-200 text-sm md:text-base max-w-3xl mx-auto mb-16 leading-relaxed font-normal">
          Garantizamos continuidad operativa, montaje electromecánico y respuesta inmediata ante cualquier requerimiento crítico en campo.
        </p>

        {/* Bloque de estadísticas con números delgados y separadores limpios */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/15">
          {stats.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center px-4 pt-4 md:pt-0">
              <span className="text-5xl md:text-6xl font-light text-white tracking-normal mb-3">
                {counts[index]}{item.suffix}
              </span>
              <span className="text-xs md:text-sm text-zinc-300 font-bold uppercase tracking-wider">
                {item.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}