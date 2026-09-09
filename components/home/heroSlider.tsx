"use client";

import { useState, useEffect, useCallback, useRef } from "react";
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
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Reinicia el autoplay cada vez que hay interacción manual, para que no "pelee" con el usuario
  const resetAutoplay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 6000);
  }, [nextSlide]);

  useEffect(() => {
    resetAutoplay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetAutoplay]);

  const handleManualNav = (action: () => void) => {
    action();
    resetAutoplay();
  };

  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden bg-tactical-dark">
      {/* Carrusel de imágenes de fondo */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className={`relative w-full h-full transition-transform duration-[6000ms] ease-out ${
              index === currentIndex ? "scale-110" : "scale-100"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/70" />
        </div>
      ))}

      {/* Contenido de texto */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-6 md:px-12 flex flex-col justify-center items-start text-left text-white">
        <div key={currentIndex} className="animate-hero-in max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4 leading-tight drop-shadow-lg">
            {slides[currentIndex].title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-zinc-200 mb-8 max-w-2xl leading-relaxed drop-shadow">
            {slides[currentIndex].description}
          </p>
        </div>

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

      {/* Flecha izquierda */}
      <button
        onClick={() => handleManualNav(prevSlide)}
        aria-label="Diapositiva anterior"
        className="group absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          className="w-5 h-5 md:w-6 md:h-6 text-white transition-transform group-hover:-translate-x-0.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Flecha derecha */}
      <button
        onClick={() => handleManualNav(nextSlide)}
        aria-label="Siguiente diapositiva"
        className="group absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          className="w-5 h-5 md:w-6 md:h-6 text-white transition-transform group-hover:translate-x-0.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-6 right-6 md:right-12 z-20 flex gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleManualNav(() => goToSlide(index))}
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