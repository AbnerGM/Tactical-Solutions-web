"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Pillar {
    code: string;
    tag: string;
    title: string;
    desc: string;
    image: string;
    specs: string[];
    tools: string[];
}

const PILLARS: Pillar[] = [
    {
        code: "PL-01",
        tag: "Fuerza & Distribución",
        title: "Montaje & Estructuración de Tableros",
        desc: "Ingeniería de detalle y fabricación de tableros de fuerza, celdas CCM y transferencias automáticas construidas para resistir ambientes industriales severos.",
        image: "/images/galeria/montaje-ccm.jpg",
        specs: [
            "Diseño y cálculo de barras de cobre según norma IEC 61439-1/2",
            "Celdas tipo arrancador suave y variadores de frecuencia integrados",
            "Pruebas de rutina dieléctricas y aislamiento antes de despacho"
        ],
        tools: ["EPLAN Pro Panel", "Cobre Electrolítico 99.9%", "Enclosures NEMA 4X / IP65"]
    },
    {
        code: "PL-02",
        tag: "Control de Procesos",
        title: "Automatización & Sistemas PLC",
        desc: "Migración, programación y optimización de lazos de control industrial para plantas continuas de concreto, minería y manufactura.",
        image: "/images/galeria/plc-automation.jpg",
        specs: [
            "Arquitectura con controladores Siemens S7-1500 y Allen-Bradley",
            "Diseño de pantallas HMI táctiles ergonómicas y sistemas SCADA",
            "Comunicación en red industrial redundante PROFINET y Ethernet/IP"
        ],
        tools: ["Siemens TIA Portal", "Rockwell Studio 5000", "Ignition SCADA"]
    },
    {
        code: "PL-03",
        tag: "Confiabilidad de Activos",
        title: "Mantenimiento Predictivo & Subestaciones",
        desc: "Diagnósticos no destructivos para anticipar fallas catastróficas, reducir paradas no programadas y extender la vida útil de los equipos.",
        image: "/images/galeria/mantenimiento-subestacion.jpg",
        specs: [
            "Termografía infrarroja certificada bajo estándar ISO 18436-7",
            "Medición de resistencia de aislamiento con megóhmetros de 5kV",
            "Análisis de calidad de energía y filtrado de armónicos"
        ],
        tools: ["Cámara Fluke Ti480", "Megger MIT515", "Analizador Fluke 1736"]
    },
    {
        code: "PL-04",
        tag: "Medición & Precisión",
        title: "Instrumentación & Calibración en Campo",
        desc: "Verificación y calibración in situ de sensores, transmisores y lazos de control con instrumental homologado trazable a estándares nacionales.",
        image: "/images/galeria/instalacion-campo.jpg",
        specs: [
            "Calibración de lazos 4-20mA, presión, nivel y celdas de carga",
            "Protocolos de comisionamiento FAT/SAT con dossier de calibración",
            "Personal habilitado con SCTR y certificaciones para trabajo en planta"
        ],
        tools: ["Calibrador Fluke 754", "Módulos de Presión", "Patrones Trazables"]
    }
];

export default function ServiciosHero() {
    const [activePillar, setActivePillar] = useState<number>(0);
    const selectedPillar = PILLARS[activePillar];

    return (
        <>
            {/* 1. TOP BANNER / HERO INDUSTRIAL */}
            <section className="relative w-full h-[260px] sm:h-[320px] md:h-[360px] bg-tactical-dark text-white flex items-center font-sans overflow-hidden">
                {/* Imagen de fondo */}
                <div className="absolute -inset-4 z-0 animate-pulse transition-transform duration-1000 ease-out">
                    <Image
                        src="/images/galeria/montaje-ccm.jpg"
                        alt="Servicios especializados Tactical Solutions"
                        fill
                        className="object-cover object-center scale-105"
                        priority
                    />
                </div>

                {/* Gradiente de fondo + Malla visual táctica */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-tactical-dark/85 to-transparent z-[1]" />
                <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px] opacity-30 z-[1]" />

                {/* Contenido del banner */}
                <div className="relative max-w-6xl mx-auto px-6 w-full z-10">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-sans font-black uppercase tracking-tight text-white leading-none">
                        Servicios <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">Especializados</span>
                    </h1>

                    <p className="text-xs sm:text-sm md:text-base font-sans font-normal text-zinc-300 mt-3 max-w-xl leading-relaxed">
                        Desarrollo integral de proyectos electromecánicos, automatización industrial y mantenimiento predictivo bajo estrictos estándares normativos.
                    </p>

                    {/* Acciones */}
                    <div className="flex flex-wrap items-center gap-4 mt-6">
                        <a
                            href="#catalogo-servicios"
                            className="px-6 py-3 bg-zinc-900/80 hover:bg-zinc-800 text-white font-sans font-bold text-xs uppercase tracking-wider transition-all border border-zinc-700/80 hover:border-zinc-500 shadow-lg hover:shadow-zinc-900/50 backdrop-blur-sm"
                        >
                            Explorar Catálogo
                        </a>
                        <Link
                            href="/contacto"
                            className="relative group overflow-hidden px-6 py-3 bg-tactical-green text-white font-sans font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-emerald-900/30"
                        >
                            <span className="relative z-10">Solicitar Cotización</span>
                            <div className="absolute inset-0 bg-emerald-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        </Link>
                    </div>
                </div>

                {/* Corte diagonal inferior */}
                <div className="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
                    <svg
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                        className="relative block w-full h-8 sm:h-10 md:h-12 fill-current text-white scale-[1.02]"
                    >
                        <path d="M1200 0L0 120H1200V0Z" />
                    </svg>
                </div>
            </section>

            {/* 2. PILARES DE INGENIERÍA DINÁMICOS */}
            <section id="catalogo-servicios" className="py-16 md:py-20 bg-white border-b border-slate-200 font-sans">
                <div className="max-w-6xl mx-auto px-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-tactical-green/10 border border-tactical-green/30 text-tactical-green font-mono text-xs uppercase tracking-widest font-bold mb-3">
                            Capacidades de Ejecución
                        </div>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
                            Pilares de Nuestra Ingeniería en Campo
                        </h2>
                        <p className="text-slate-600 text-sm max-w-2xl mt-2 leading-relaxed">
                            Selecciona cada pilar técnico para conocer la metodología, instrumental certificado y alcance operativo que desplegamos en cada intervención.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-10 items-stretch">
                        {/* Selector de Pilares */}
                        <div className="lg:col-span-5 flex flex-col gap-3">
                            {PILLARS.map((p, idx) => {
                                const isActive = activePillar === idx;
                                return (
                                    <button
                                        key={p.code}
                                        type="button"
                                        onClick={() => setActivePillar(idx)}
                                        className={`flex items-center gap-4 p-4 text-left transition-all border cursor-pointer ${isActive
                                                ? "bg-white border-tactical-green border-l-4 shadow-md"
                                                : "bg-slate-50 border-slate-200 hover:bg-white hover:border-slate-300"
                                            }`}
                                    >
                                        <span className={`font-mono text-xs font-black transition-colors ${isActive ? "text-tactical-green" : "text-slate-400"
                                            }`}>
                                            {p.code}
                                        </span>
                                        <div className="flex-1">
                                            <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">{p.tag}</div>
                                            <div className={`text-sm font-extrabold uppercase leading-snug ${isActive ? "text-tactical-green" : "text-slate-900"
                                                }`}>
                                                {p.title}
                                            </div>
                                        </div>
                                        <span className={`text-lg transition-transform ${isActive ? "text-tactical-green translate-x-1" : "text-slate-300"
                                            }`}>
                                            →
                                        </span>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Display Dinámico del Pilar Seleccionado */}
                        <div className="lg:col-span-7 bg-white border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-2 overflow-hidden">
                            <div className="relative min-h-[280px] md:min-h-full bg-tactical-dark">
                                <Image
                                    src={selectedPillar.image}
                                    alt={selectedPillar.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-tactical-dark/80 via-transparent to-transparent" />
                                <span className="absolute top-4 left-4 bg-tactical-dark/90 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1">
                                    {selectedPillar.tag}
                                </span>
                            </div>

                            <div className="p-6 md:p-8 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-mono font-bold text-tactical-green">{selectedPillar.code}</span>
                                    </div>
                                    <h3 className="text-lg font-black text-slate-900 uppercase leading-snug mb-3">
                                        {selectedPillar.title}
                                    </h3>
                                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                                        {selectedPillar.desc}
                                    </p>

                                    <div className="space-y-2 mb-6">
                                        {selectedPillar.specs.map((spec, i) => (
                                            <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                                                <span className="w-1.5 h-1.5 rounded-full bg-tactical-green mt-1.5 shrink-0" />
                                                <span className="leading-snug">{spec}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-slate-100">
                                    <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-2">
                                        Tecnología &amp; Herramientas:
                                    </span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {selectedPillar.tools.map((t, i) => (
                                            <span key={i} className="text-[10px] font-mono font-bold bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}