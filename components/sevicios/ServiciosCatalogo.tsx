"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";

export interface ServiceCard {
    id: string;
    code: string;
    title: string;
    image: string;
    description: string;
    bullets: string[];
    category: string;
    standards?: string[];
}

export const SERVICES_CARDS: ServiceCard[] = [
    {
        id: "tableros-electricos",
        code: "TS-01",
        title: "Montaje e Instalación de Tableros Eléctricos",
        image: "/images/galeria/montaje-ccm.jpg",
        description: "Diseño, estructuración y armado de tableros de fuerza y control para líneas de producción continuas.",
        bullets: [
            "Tableros de distribución general (TGD) y celdas CCM",
            "Transferencias automáticas TTA Red-Grupo electrógeno",
            "Pruebas de aislamiento, continuidad y rotulado normado"
        ],
        category: "Fuerza y Distribución",
        standards: ["IEC 61439-1/2", "NTP 370.053", "NEMA 4X / IP65"]
    },
    {
        id: "mantenimiento-especializado",
        code: "TS-02",
        title: "Mantenimiento Electromecánico Especializado",
        image: "/images/galeria/mantenimiento-subestacion.jpg",
        description: "Operaciones preventivas y predictivas para asegurar la operatividad ininterrumpida de sus equipos críticos.",
        bullets: [
            "Inspección termográfica certificada con informe Fluke",
            "Megado y pruebas de aislamiento dieléctrico en devanados",
            "Ajuste dinamométrico de torque y pruebas de disparo"
        ],
        category: "Confiabilidad Operativa",
        standards: ["IEEE 43-2000", "NFPA 70B", "ISO 18436-7"]
    },
    {
        id: "calibracion-instrumentacion",
        code: "TS-03",
        title: "Instrumentación & Calibración en Campo",
        image: "/images/galeria/instalacion-campo.jpg",
        description: "Aseguramos la exactitud del control de procesos en planta mediante calibración y verificación de lazos analógicos.",
        bullets: [
            "Transmisores de presión, nivel, flujo y temperatura",
            "Configuración de lazos 4-20mA y comunicación HART",
            "Calibración in situ con patrones trazables a INACAL"
        ],
        category: "Medición y Calidad",
        standards: ["ISA-5.1", "HART Protocol", "ISO/IEC 17025"]
    },
    {
        id: "auxilio-electrico",
        code: "TS-04",
        title: "Auxilio Mecánico y Eléctrico de Emergencia",
        image: "/images/inicio/prueba-direccion.jpg",
        description: "Respuesta rápida para fallas imprevistas en planta, minimizando paradas operativas y tiempos muertos.",
        bullets: [
            "Diagnóstico de fallas críticas en tableros y líneas",
            "Personal técnico equipado con instrumental para sitio",
            "Disponibilidad operativa para paradas no programadas"
        ],
        category: "Soporte de Emergencia",
        standards: ["SLA Prioritario", "Atención en Sitio", "Reporte Técnico de Falla"]
    },
    {
        id: "automatizacion-plc",
        code: "TS-05",
        title: "Automatización de Plantas & Sistemas PLC",
        image: "/images/galeria/plc-automation.jpg",
        description: "Control centralizado de procesos mediante PLCs, pantallas HMI y telemetría para elevar la eficiencia operativa.",
        bullets: [
            "Programación Siemens S7-1200/1500 y Allen-Bradley ControlLogix",
            "Redes industriales PROFINET, Modbus TCP/IP y Ethernet/IP",
            "Supervisión SCADA y monitoreo de variables en tiempo real"
        ],
        category: "Control y Automatización",
        standards: ["IEC 61131-3", "ISA-88 Batch", "ISA-101 HMI Design"]
    },
    {
        id: "asesoria-tecnica",
        code: "TS-06",
        title: "Asesoría Técnica & Proyectos EPC",
        image: "/images/inicio/tablero.jpg",
        description: "Acompañamiento técnico integral: desde el levantamiento en planta hasta el comisionamiento y entrega formal.",
        bullets: [
            "Levantamiento de cargas y memorias de cálculo en campo",
            "Elaboración de planos unifilares y trifilares en CAD/EPLAN",
            "Dossier de calidad, protocolos FAT/SAT homologados"
        ],
        category: "Ingeniería y Proyectos",
        standards: ["Código Nacional de Electricidad", "Normas CNE / NFPA 70", "Gestión PMI"]
    }
];

const CATEGORIES = [
    "Todos",
    "Fuerza y Distribución",
    "Control y Automatización",
    "Confiabilidad Operativa",
    "Medición y Calidad",
    "Ingeniería y Proyectos",
    "Soporte de Emergencia"
];

export default function ServiciosCatalogo() {
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceCard | null>(null);

    const filteredServices = useMemo(() => {
        return SERVICES_CARDS.filter((s) => {
            const matchesCategory = selectedCategory === "Todos" || s.category === selectedCategory;
            const query = searchQuery.toLowerCase().trim();
            const matchesSearch =
                query === "" ||
                s.title.toLowerCase().includes(query) ||
                s.description.toLowerCase().includes(query) ||
                s.bullets.some((b) => b.toLowerCase().includes(query)) ||
                (s.standards && s.standards.some((std) => std.toLowerCase().includes(query)));
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    const categoryCounts = useMemo(() => {
        const counts: Record<string, number> = { Todos: SERVICES_CARDS.length };
        CATEGORIES.forEach((cat) => {
            if (cat !== "Todos") {
                counts[cat] = SERVICES_CARDS.filter((s) => s.category === cat).length;
            }
        });
        return counts;
    }, []);

    return (
        <>
            <section id="catalogo-servicios" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Encabezado */}
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 border border-emerald-200 text-tactical-green font-mono text-xs uppercase tracking-widest font-bold mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-tactical-green" />
                            <span>Portafolio de Soluciones Técnicas</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
                            Catálogo de Servicios
                        </h2>
                        <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                            Ejecución técnica en planta con instrumental homologado, ingeniería de detalle y cumplimiento de normas internacionales IEC, IEEE y CNE.
                        </p>
                    </div>

                    {/* Filtros por Categoría */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all border font-mono cursor-pointer ${
                                    selectedCategory === cat
                                        ? "bg-tactical-green text-white border-tactical-green shadow-sm"
                                        : "bg-white text-slate-600 border-slate-200 hover:border-tactical-green hover:text-tactical-green"
                                }`}
                            >
                                {cat} ({categoryCounts[cat] || 0})
                            </button>
                        ))}
                    </div>

                    {/* Barra de Búsqueda y Contador */}
                    <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white border border-slate-200 mb-8">
                        <div className="flex items-center gap-2 bg-slate-50 border border-slate-300 px-3 py-2 flex-1 max-w-md">
                            <svg className="w-4 h-4 text-slate-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Buscar por servicio, norma (IEC, Fluke) o PLC..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-transparent border-none outline-none text-xs text-slate-800 w-full"
                            />
                            {searchQuery && (
                                <button
                                    type="button"
                                    onClick={() => setSearchQuery("")}
                                    className="text-xs text-slate-400 hover:text-slate-700 font-bold px-1"
                                >
                                    ✕
                                </button>
                            )}
                        </div>

                        <div className="text-xs font-mono font-bold uppercase text-slate-500">
                            Mostrando: <span className="text-tactical-green">{filteredServices.length} de {SERVICES_CARDS.length}</span> servicios
                        </div>
                    </div>

                    {/* Cuadrícula Limpia con Imágenes Prominentes */}
                    {filteredServices.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredServices.map((srv) => (
                                <div key={srv.id} className="bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-emerald-600/50 transition-all flex flex-col group overflow-hidden">
                                    {/* Imagen prominente con overlay y código */}
                                    <div className="relative w-full h-56 bg-slate-900 overflow-hidden">
                                        <Image
                                            src={srv.image}
                                            alt={srv.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                                        <span className="absolute top-3 left-3 bg-slate-900/90 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5">
                                            {srv.category}
                                        </span>
                                        <span className="absolute top-3 right-3 bg-white text-slate-900 text-[10px] font-mono font-extrabold px-2 py-0.5 border border-slate-300">
                                            {srv.code}
                                        </span>
                                    </div>

                                    {/* Cuerpo de la tarjeta */}
                                    <div className="p-6 flex flex-col flex-1">
                                        <h3 className="font-extrabold text-base uppercase text-slate-900 group-hover:text-tactical-green transition-colors leading-snug mb-2">
                                            {srv.title}
                                        </h3>
                                        <p className="text-xs text-slate-600 leading-relaxed mb-4">
                                            {srv.description}
                                        </p>

                                        <div className="h-px bg-slate-100 my-2" />
                                        <div className="text-[10px] font-mono uppercase text-slate-400 font-bold mb-3">
                                            Alcance Operativo Clave
                                        </div>

                                        {/* Bullets visibles */}
                                        <div className="space-y-2 mb-6 flex-1">
                                            {srv.bullets.map((b, idx) => (
                                                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 leading-snug">
                                                    <span className="w-4 h-4 rounded-full bg-emerald-50 text-tactical-green font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                                                        ✓
                                                    </span>
                                                    <span>{b}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Acciones */}
                                        <div className="flex items-center gap-3 pt-4 border-t border-slate-100 mt-auto">
                                            <button
                                                type="button"
                                                onClick={() => setSelectedServiceModal(srv)}
                                                className="flex-1 py-2.5 px-3 bg-slate-900 hover:bg-tactical-green text-white text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                                            >
                                                <span>Ficha Técnica</span>
                                                <span>→</span>
                                            </button>
                                            <Link
                                                href="/contacto"
                                                className="py-2.5 px-4 bg-white hover:bg-emerald-50 text-tactical-green border border-tactical-green text-xs font-bold uppercase tracking-wider transition-colors text-center"
                                            >
                                                Cotizar
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 bg-white border border-dashed border-slate-300 p-8">
                            <p className="text-slate-600 font-bold text-sm">
                                No se encontraron servicios con el término &ldquo;{searchQuery}&rdquo;.
                            </p>
                            <button
                                onClick={() => { setSearchQuery(""); setSelectedCategory("Todos"); }}
                                className="mt-3 px-4 py-2 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-tactical-green transition-colors cursor-pointer"
                            >
                                Restablecer Filtros
                            </button>
                        </div>
                    )}

                </div>
            </section>

            {/* Modal de Especificaciones Técnicas */}
            {selectedServiceModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in"
                    onClick={() => setSelectedServiceModal(null)}
                >
                    <div
                        className="bg-white w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-56 bg-slate-950">
                            <Image
                                src={selectedServiceModal.image}
                                alt={selectedServiceModal.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                            <button
                                onClick={() => setSelectedServiceModal(null)}
                                className="absolute top-4 right-4 w-8 h-8 bg-white/90 hover:bg-red-600 hover:text-white text-slate-700 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
                                aria-label="Cerrar modal"
                            >
                                ✕
                            </button>

                            <div className="absolute bottom-4 left-6 right-6">
                                <span className="bg-white text-tactical-green text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5">
                                    {selectedServiceModal.code} • {selectedServiceModal.category}
                                </span>
                                <h3 className="text-xl font-black text-white uppercase mt-2 leading-tight">
                                    {selectedServiceModal.title}
                                </h3>
                            </div>
                        </div>

                        <div className="p-6 md:p-8 space-y-6">
                            <div>
                                <h4 className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider mb-2">
                                    Descripción General &amp; Metodología
                                </h4>
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                    {selectedServiceModal.description}
                                </p>
                            </div>

                            <div className="border-t border-slate-100 pt-4">
                                <h4 className="text-xs font-mono uppercase font-bold text-tactical-green tracking-wider mb-3">
                                    Alcance Operativo &amp; Protocolos:
                                </h4>
                                <div className="space-y-2">
                                    {selectedServiceModal.bullets.map((b, i) => (
                                        <div key={i} className="flex items-start gap-2.5 p-2.5 bg-slate-50 border border-slate-200 text-xs text-slate-800">
                                            <span className="text-tactical-green font-bold">✓</span>
                                            <span>{b}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {selectedServiceModal.standards && (
                                <div className="border-t border-slate-100 pt-4">
                                    <h4 className="text-xs font-mono uppercase font-bold text-slate-400 tracking-wider mb-2">
                                        Normativas &amp; Estándares Aplicados:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedServiceModal.standards.map((std, i) => (
                                            <span
                                                key={i}
                                                className="text-[11px] font-mono font-bold bg-slate-100 text-slate-700 px-2.5 py-1 border border-slate-300"
                                            >
                                                {std}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-col sm:flex-row items-center gap-3 pt-6 border-t border-slate-200">
                                <Link
                                    href="/contacto"
                                    className="w-full sm:flex-1 py-3 px-4 bg-tactical-green hover:bg-emerald-800 text-white text-xs font-bold uppercase tracking-wider text-center transition-colors shadow-sm"
                                >
                                    Solicitar Cotización Formal
                                </Link>
                                <button
                                    onClick={() => setSelectedServiceModal(null)}
                                    className="w-full sm:w-auto py-3 px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}