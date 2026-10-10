"use client";

import { useState } from "react";
import Link from "next/link";

export interface SuccessCase {
    id: string;
    code: string;
    tag: string;
    title: string;
    plant: string;
    desc: string;
    videoUrl: string;
    duration: string;
}

export const SUCCESS_CASES: SuccessCase[] = [
    {
        id: "1",
        code: "CS-01",
        tag: "Mantenimiento Electromecánico",
        title: "Mantenimiento y Montaje de Tableros en Campo",
        plant: "Operaciones en Mina & Planta Industrial",
        desc: "Proceso de inspección termoeléctrica, pruebas de aislamiento dieléctrico y reapriete dinamométrico ejecutado directamente en sitio para línea continua.",
        videoUrl: "/videos/video1.mp4",
        duration: "Demo Técnica"
    },
    {
        id: "2",
        code: "CS-02",
        tag: "Automatización Industrial",
        title: "Automatización de Planta, Planta Unicon",
        plant: "Planta Unicon — Sector Construcción",
        desc: "Programación e integración de PLC con pantallas HMI para control automatizado de mezclado, tolvas y supervisión de variables de flujo continuo.",
        videoUrl: "/videos/video2.mp4",
        duration: "Inspección en Planta"
    },
    {
        id: "3",
        code: "CS-03",
        tag: "Instrumentación & Calibración",
        title: "Calibración de Sistema de Dosificación de Aditivo",
        plant: "Línea 2 del Metro de Lima — Infraestructura Crítica",
        desc: "Ajuste y calibración de lazos de control de dosificación con patrones trazables, garantizando repetibilidad y precisión estricta de mezclado.",
        videoUrl: "/videos/video3.mp4",
        duration: "Protocolo FAT/SAT"
    },
    {
        id: "4",
        code: "CS-04",
        tag: "Mantenimiento Electromecánico",
        title: "Mantenimiento Integral a Silo de Cemento",
        plant: "Planta Fullmix — Operaciones Industriales",
        desc: "Intervención de emergencia y mantenimiento preventivo en silo de cemento: revisión de sensores de nivel, accionamientos mecánicos y tablero de mando.",
        videoUrl: "/videos/video4.mp4",
        duration: "Puesta a Punto"
    }
];

export const TECHNICAL_INSIGHTS = [
    {
        badge: "Criterio Técnico 01",
        title: "Diagnóstico Predictivo en Tableros",
        desc: "La termografía infrarroja periódica detecta puntos calientes por falsos contactos antes de que originen incendios o paradas no deseadas."
    },
    {
        badge: "Criterio Técnico 02",
        title: "Protocolos FAT & SAT Homologados",
        desc: "Toda integración PLC y montaje de celdas se somete a pruebas exhaustivas en fábrica (FAT) y en sitio (SAT) con dossier de calidad formal."
    },
    {
        badge: "Criterio Técnico 03",
        title: "Seguridad Eléctrica Bajo CNE & OSHA",
        desc: "Nuestros técnicos cuentan con implementos dieléctricos clase 0/00, procedimientos LOTO y acreditaciones IPERC vigentes en plantas mineras."
    }
];

function VideoPlayer({ src }: { src: string }) {
    const isLocal = src.startsWith("/") || !src.startsWith("http");
    if (isLocal) {
        return (
            <video
                key={src}
                src={src}
                controls
                muted
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover block"
            />
        );
    }
    return (
        <iframe
            src={src}
            width="100%"
            height="100%"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            className="w-full h-full object-cover block"
        />
    );
}

export default function ServiciosCasosBlog() {
    const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);
    const activeCase = SUCCESS_CASES[activeCaseIndex];

    return (
        <section className="py-16 md:py-20 bg-white text-zinc-900 border-b border-zinc-200 font-sans">
            <div className="max-w-6xl mx-auto px-6">

                {/* Encabezado */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-tactical-green/10 border border-tactical-green text-tactical-green font-mono text-xs uppercase tracking-widest font-bold mb-3">
                        Evidencia Técnica en Video
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 uppercase tracking-tight">
                        Demostraciones y Casos de Éxito en Campo
                    </h2>
                    <p className="text-zinc-600 text-sm mt-3 leading-relaxed">
                        Visualiza nuestros proyectos ejecutados en tiempo real: automatizaciones en plantas de concreto, obras de infraestructura y mantenimiento en planta.
                    </p>
                </div>

                {/* Studio de Videos: Reproductor Activo + Playlist */}
                <div className="grid grid-cols-1 lg:grid-cols-12 bg-white border-2 border-zinc-900 shadow-2xl overflow-hidden">
                    {/* Reproductor Activo (7 cols) */}
                    <div className="lg:col-span-7 flex flex-col bg-black">
                        <div className="relative w-full aspect-video bg-black overflow-hidden">
                            <VideoPlayer src={activeCase.videoUrl} />
                        </div>

                        {/* Pie del reproductor activo con bg-tactical-green */}
                        <div className="p-6 bg-tactical-green text-white">
                            <div className="flex flex-wrap items-center gap-2 mb-2">
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-black/30 text-white border border-white/40 px-2 py-0.5">
                                    {activeCase.tag}
                                </span>
                                <span className="text-[11px] font-mono text-white font-bold">{activeCase.code}</span>
                                <span className="text-[11px] font-mono text-white/80">• {activeCase.plant}</span>
                            </div>

                            <h3 className="text-lg font-black uppercase text-white leading-snug mb-2">
                                {activeCase.title}
                            </h3>
                            <p className="text-xs text-white/90 leading-relaxed">
                                {activeCase.desc}
                            </p>
                        </div>
                    </div>

                    {/* Playlist Interactiva (5 cols) */}
                    <div className="lg:col-span-5 bg-zinc-50 border-t lg:border-t-0 lg:border-l border-zinc-900 flex flex-col justify-between">
                        <div>
                            <div className="p-4 bg-zinc-900 text-white flex items-center justify-between border-b border-zinc-800">
                                <span className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-200">
                                    Proyectos en Video
                                </span>
                                <span className="text-[10px] font-mono font-bold text-white bg-tactical-green px-2 py-0.5 border border-tactical-green">
                                    {SUCCESS_CASES.length} Ejecuciones
                                </span>
                            </div>

                            <div className="divide-y divide-zinc-200">
                                {SUCCESS_CASES.map((item, idx) => {
                                    const isActive = activeCaseIndex === idx;
                                    return (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() => setActiveCaseIndex(idx)}
                                            className={`w-full flex items-start gap-3 p-4 text-left transition-colors cursor-pointer ${isActive
                                                    ? "bg-tactical-green/15 border-l-4 border-tactical-green"
                                                    : "bg-transparent hover:bg-zinc-100"
                                                }`}
                                        >
                                            <span className={`font-mono text-xs font-black shrink-0 ${isActive ? "text-tactical-green" : "text-zinc-400"
                                                }`}>
                                                {item.code}
                                            </span>

                                            <div className="flex-1 min-w-0">
                                                <div className="text-[9px] font-mono uppercase text-zinc-500 font-bold tracking-wider truncate mb-1">
                                                    {item.plant}
                                                </div>
                                                <div className={`text-xs font-extrabold uppercase leading-snug ${isActive ? "text-zinc-900" : "text-zinc-700"
                                                    }`}>
                                                    {item.title}
                                                </div>
                                                <div className="text-[10px] font-mono text-zinc-500 mt-1">
                                                    {item.duration} {isActive ? "• Reproduciendo" : "• Clic para ver"}
                                                </div>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* CTA a Galería */}
                        <div className="p-4 bg-zinc-100 border-t border-zinc-200 text-center">
                            <Link
                                href="/galeria"
                                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-900 hover:text-tactical-green transition-colors"
                            >
                                <span>Ver Galería Completa de Fotos &amp; Obras</span>
                                <span>→</span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Criterios Técnicos e Insights de Ingeniería */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    {TECHNICAL_INSIGHTS.map((ins, i) => (
                        <div key={i} className="p-6 bg-zinc-50 border border-zinc-200 hover:border-tactical-green hover:shadow-md transition-all">
                            <span className="text-[10px] font-mono font-bold text-tactical-green uppercase tracking-widest block mb-2">
                                {ins.badge}
                            </span>
                            <h4 className="text-sm font-black uppercase text-zinc-900 leading-snug mb-2">
                                {ins.title}
                            </h4>
                            <p className="text-xs text-zinc-600 leading-relaxed">
                                {ins.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}