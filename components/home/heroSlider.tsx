"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      image: "/images/inicio/tablero.jpg", 
      title: "Soluciones y Equipamiento Industrial",
      description: "Tecnología y componentes de alta precisión para optimizar tu producción.",
    },
    {
      id: 2,
      image: "/images/inicio/tablero.jpg", 
      title: "Sistemas Automatizados",
      description: "Control de procesos industriales con máxima eficiencia y confiabilidad.",
    },
    {
      id: 3,
      image: "/images/inicio/tablero.jpg", 
      title: "Mantenimiento y Soporte Técnico",
      description: "Respuesta rápida y personal especializado para la continuidad de tus operaciones.",
    },
    {
      id: 4,
      image: "/images/inicio/tablero.jpg", 
      title: "Innovación y Calidad Garantizada",
      description: "Comprometidos con el desarrollo y la exigencia del sector industrial.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambio automático de imagen cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-tactical-dark">
      {/* Carrusel de imágenes de fondo */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover w-full h-full"
          />
          {/* Capa oscura (overlay) con gradiente para mayor realismo y profundidad */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70" />
        </div>
      ))}

      {/* Contenido de texto alineado a la izquierda, profesional e industrial */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-6 md:px-12 flex flex-col justify-center items-start text-left text-white">
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 max-w-3xl leading-tight drop-shadow-lg">
          {slides[currentIndex].title}
        </h1>
        <p className="text-base md:text-xl text-zinc-200 mb-8 max-w-2xl leading-relaxed drop-shadow">
          {slides[currentIndex].description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/contacto"
            className="px-8 py-3.5 bg-tactical-green hover:bg-emerald-900 text-white font-bold text-base md:text-lg transition-all shadow-lg text-center"
          >
            Contáctanos
          </Link>
          <Link
            href="/servicios"
            className="px-8 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold text-base md:text-lg transition-all shadow-lg text-center"
          >
            Nuestros Servicios
          </Link>
        </div>
      </div>

      {/* Indicadores (puntitos) en la esquina inferior derecha */}
      <div className="absolute bottom-6 right-6 md:right-12 z-20 flex gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === currentIndex ? "w-8 bg-tactical-green" : "w-2.5 bg-white/40 hover:bg-white"
            }`}
            aria-label={`Ir a la diapositiva ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}