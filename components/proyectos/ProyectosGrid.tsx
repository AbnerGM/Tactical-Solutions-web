"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export interface Proyecto {
    id: string;
    numero: string;
    titulo: string;
    cliente: string;
    ubicacion: string;
    categoria: string;
    descripcion: string;
    alcance: string[];
    imagen: string;
    estado: "Completado" | "En Ejecución";
    año: string;
}

const PROYECTOS: Proyecto[] = [
    {
        id: "montaje-ccm-unicon",
        numero: "01",
        titulo: "MONTAJE DE CCM Y TABLEROS DE DISTRIBUCIÓN",
        cliente: "Planta Unicon",
        ubicacion: "Lima, Perú",
        categoria: "Montaje Electromecánico",
        descripcion: "Diseño, fabricación y montaje de centro de control de motores (CCM) y tableros de distribución principal para planta de concreto premezclado, incluyendo pruebas de aislamiento y puesta en marcha.",
        alcance: [
            "Fabricación de tableros CCM de 6 secciones",
            "Instalación de barras de cobre y cableado de potencia",
            "Pruebas FAT y SAT con protocolos certificados",
            "Puesta en marcha y entrega de dossier de calidad"
        ],
        imagen: "/images/galeria/montaje-ccm.jpg",
        estado: "Completado",
        año: "2024"
    },
    {
        id: "automatizacion-dosificacion-metro",
        numero: "02",
        titulo: "CALIBRACIÓN DE SISTEMA DE DOSIFICACIÓN",
        cliente: "Línea 2 Metro de Lima",
        ubicacion: "Lima, Perú",
        categoria: "Automatización",
        descripcion: "Calibración y configuración del sistema de dosificación de aditivo para concreto en la construcción de la Línea 2 del Metro de Lima, asegurando precisión en las mezclas según especificaciones técnicas.",
        alcance: [
            "Calibración de transmisores de flujo y presión",
            "Configuración de lazos de control PLC Siemens",
            "Verificación de señales analógicas 4-20mA",
            "Elaboración de protocolos de calibración certificados"
        ],
        imagen: "/images/galeria/plc-automation.jpg",
        estado: "Completado",
        año: "2024"
    },
    {
        id: "mantenimiento-subestacion-minera",
        numero: "03",
        titulo: "MANTENIMIENTO DE SUBESTACIÓN ELÉCTRICA EN MINA",
        cliente: "Operación Minera",
        ubicacion: "Arequipa, Perú",
        categoria: "Mantenimiento",
        descripcion: "Ejecución de mantenimiento preventivo y correctivo en subestación eléctrica de media tensión en operación minera, incluyendo pruebas de aislamiento, termografía y ajuste de protecciones.",
        alcance: [
            "Inspección termográfica certificada con cámara Fluke",
            "Megado de cables de media tensión y transformadores",
            "Ajuste de relés de protección y coordinación",
            "Mantenimiento a interruptores y seccionadores"
        ],
        imagen: "/images/galeria/mantenimiento-subestacion.jpg",
        estado: "Completado",
        año: "2023"
    },
    {
        id: "instalacion-campo-fullmix",
        numero: "04",
        titulo: "MANTENIMIENTO A SILO DE CEMENTO",
        cliente: "Planta Fullmix",
        ubicacion: "Lima, Perú",
        categoria: "Mantenimiento",
        descripcion: "Servicio de mantenimiento eléctrico y mecánico integral a silo de cemento, incluyendo revisión de motores, sistemas de aireación y tableros de control asociados.",
        alcance: [
            "Inspección y mantenimiento de motores eléctricos",
            "Revisión del sistema de aireación y válvulas",
            "Mantenimiento de tableros de control local",
            "Pruebas de operatividad y entrega de informe técnico"
        ],
        imagen: "/images/galeria/instalacion-campo.jpg",
        estado: "Completado",
        año: "2023"
    },
    {
        id: "automatizacion-planta-concreto",
        numero: "05",
        titulo: "AUTOMATIZACIÓN DE PLANTA DE CONCRETO",
        cliente: "Planta Unicon",
        ubicacion: "Lima, Perú",
        categoria: "Automatización",
        descripcion: "Implementación de sistema de automatización integral para planta de concreto premezclado, con control centralizado mediante PLC y supervisión SCADA en tiempo real.",
        alcance: [
            "Programación de PLC Siemens S7-1500",
            "Diseño e implementación de pantallas HMI",
            "Integración de red PROFINET industrial",
            "Supervisión SCADA y control de recetas de producción"
        ],
        imagen: "/images/inicio/tablero.jpg",
        estado: "Completado",
        año: "2024"
    },
    {
        id: "montaje-tablero-transferencia",
        numero: "06",
        titulo: "MONTAJE DE TABLERO DE TRANSFERENCIA AUTOMÁTICA",
        cliente: "Proyecto Industrial",
        ubicacion: "Callao, Perú",
        categoria: "Montaje Electromecánico",
        descripcion: "Diseño, fabricación y montaje de tablero de transferencia automática Red-Grupo para asegurar la continuidad operativa ante cortes del suministro eléctrico principal.",
        alcance: [
            "Diseño del esquema unifilar y planos de fuerza",
            "Fabricación de tablero TTA con contactores motorizados",
            "Cableado de potencia y circuitos de control",
            "Pruebas de conmutación y tiempos de transferencia"
        ],
        imagen: "/images/inicio/tablero.jpg",
        estado: "En Ejecución",
        año: "2025"
    }
];

const CATEGORIAS = [
    "Todos",
    "Montaje Electromecánico",
    "Automatización",
    "Mantenimiento"
];

export default function ProyectosGrid() {
    const [categoriaActiva, setCategoriaActiva] = useState("Todos");
    const [proyectoModal, setProyectoModal] = useState<Proyecto | null>(null);

    const proyectosFiltrados = categoriaActiva === "Todos"
        ? PROYECTOS
        : PROYECTOS.filter(p => p.categoria === categoriaActiva);

    return (
        <>
            {/* ========================================================= */}
            {/* SECCIÓN: GRILLA DE PROYECTOS                              */}
            {/* ========================================================= */}
            <section id="proyectos-destacados" className="py-16 md:py-20 bg-white text-slate-900 border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">

                    {/* Encabezado */}
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-tactical-green/10 border border-tactical-green/30 text-tactical-green font-mono text-xs uppercase tracking-widest mb-3 font-semibold">
                            Portafolio Industrial
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900">
                            PROYECTOS DESTACADOS
                        </h2>
                        <p className="text-slate-600 text-xs sm:text-sm font-medium mt-2">
                            Cada proyecto refleja nuestro compromiso con la excelencia técnica, la seguridad y la entrega a tiempo.
                        </p>
                    </div>

                    {/* Filtros de categoría */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
                        {CATEGORIAS.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setCategoriaActiva(cat)}
                                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer ${categoriaActiva === cat
                                    ? "bg-tactical-green border-tactical-green text-white shadow-md shadow-emerald-900/20"
                                    : "bg-white border-slate-300 text-slate-700 hover:border-tactical-green hover:text-tactical-green"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Grilla de proyectos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {proyectosFiltrados.map((proyecto) => (
                            <div
                                key={proyecto.id}
                                className="group relative bg-white border border-slate-200 hover:border-tactical-green/80 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-xl"
                            >
                                <div>
                                    {/* Foto superior con badges */}
                                    <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                                        <Image
                                            src={proyecto.imagen}
                                            alt={proyecto.titulo}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                                        {/* Badge Categoría */}
                                        <span className="absolute top-3 left-3 bg-white/90 border border-slate-200 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-tactical-green font-bold shadow-sm">
                                            {proyecto.categoria}
                                        </span>

                                        {/* Número de proyecto */}
                                        <span className="absolute top-3 right-3 text-white/80 font-mono font-black text-xl drop-shadow-md">
                                            {proyecto.numero}
                                        </span>

                                        {/* Badge Estado */}
                                        <span className={`absolute bottom-3 right-3 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm ${proyecto.estado === "Completado"
                                            ? "bg-tactical-green/90 text-white"
                                            : "bg-amber-500/90 text-white"
                                            }`}>
                                            {proyecto.estado}
                                        </span>

                                        {/* Título sobre imagen */}
                                        <div className="absolute bottom-0 left-0 right-16 p-4">
                                            <h3 className="text-sm font-black text-white uppercase tracking-wide leading-snug drop-shadow-sm group-hover:text-emerald-300 transition-colors">
                                                {proyecto.titulo}
                                            </h3>
                                        </div>
                                    </div>

                                    {/* Cuerpo de la tarjeta */}
                                    <div className="p-6 pt-4">
                                        {/* Info del proyecto */}
                                        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-3 text-[11px] text-slate-500 font-medium">
                                            <span className="flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-tactical-green" />
                                                {proyecto.cliente}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                                                {proyecto.ubicacion}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                                                {proyecto.año}
                                            </span>
                                        </div>

                                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                                            {proyecto.descripcion}
                                        </p>

                                        {/* Preview de alcance (2 items) */}
                                        <div className="space-y-2 border-t border-slate-100 pt-3">
                                            {proyecto.alcance.slice(0, 2).map((item, idx) => (
                                                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-tactical-green mt-1.5 shrink-0" />
                                                    <span>{item}</span>
                                                </div>
                                            ))}
                                            {proyecto.alcance.length > 2 && (
                                                <span className="text-[11px] text-tactical-green font-semibold">
                                                    +{proyecto.alcance.length - 2} actividades más
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* Botón Acción */}
                                <div className="p-6 pt-0">
                                    <button
                                        onClick={() => setProyectoModal(proyecto)}
                                        className="w-full py-3 bg-slate-100 hover:bg-tactical-green text-slate-800 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-slate-200 hover:border-tactical-green flex items-center justify-center gap-2 cursor-pointer"
                                    >
                                        <span>Ver Detalles del Proyecto</span>
                                        <span className="text-base leading-none">→</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* ========================================================= */}
            {/* SECCIÓN: ESTADÍSTICAS RÁPIDAS                             */}
            {/* ========================================================= */}
            <section className="py-12 md:py-16 bg-tactical-dark text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/15">
                        {[
                            { valor: "120+", label: "PROYECTOS EJECUTADOS" },
                            { valor: "98%", label: "ENTREGAS A TIEMPO" },
                            { valor: "15+", label: "AÑOS DE EXPERIENCIA" },
                            { valor: "50+", label: "CLIENTES SATISFECHOS" }
                        ].map((stat, index) => (
                            <div key={index} className="flex flex-col items-center justify-center px-4 pt-4 md:pt-0 text-center">
                                <span className="text-4xl md:text-5xl font-light text-white tracking-normal mb-2">
                                    {stat.valor}
                                </span>
                                <span className="text-[10px] md:text-xs text-zinc-400 font-bold uppercase tracking-wider">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* SECCIÓN: CTA CONTACTO                                     */}
            {/* ========================================================= */}
            <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-tactical-green/10 border border-tactical-green/30 text-tactical-green font-mono text-xs uppercase tracking-widest mb-4 font-semibold">
                        ¿Tiene un proyecto en mente?
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-900 mb-4">
                        TRABAJEMOS JUNTOS
                    </h2>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
                        Nuestro equipo de ingenieros y técnicos está listo para atender su próximo proyecto industrial. Contáctenos para una evaluación técnica sin compromiso.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/contacto"
                            className="px-10 py-4 bg-tactical-green hover:bg-emerald-700 text-white font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-emerald-900/20"
                        >
                            Solicitar Cotización
                        </Link>
                        <Link
                            href="/servicios"
                            className="px-10 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm uppercase tracking-wider transition-all shadow-md"
                        >
                            Ver Nuestros Servicios
                        </Link>
                    </div>
                </div>
            </section>

            {/* ========================================================= */}
            {/* MODAL DE DETALLE DEL PROYECTO                             */}
            {/* ========================================================= */}
            {proyectoModal && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm"
                    onClick={() => setProyectoModal(null)}
                >
                    <div
                        className="relative bg-white text-slate-900 w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-0 rounded-sm"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header del Modal con Imagen */}
                        <div className="relative h-48 sm:h-56 w-full bg-slate-100">
                            <Image
                                src={proyectoModal.imagen}
                                alt={proyectoModal.titulo}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                            <button
                                onClick={() => setProyectoModal(null)}
                                className="absolute top-4 right-4 w-9 h-9 bg-white/80 hover:bg-red-600 text-slate-700 hover:text-white flex items-center justify-center border border-slate-200 transition-colors cursor-pointer shadow-sm"
                                aria-label="Cerrar modal"
                            >
                                ✕
                            </button>

                            <div className="absolute bottom-4 left-6 right-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-tactical-green bg-white/90 px-2 py-0.5 border border-slate-200">
                                        {proyectoModal.categoria}
                                    </span>
                                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 ${proyectoModal.estado === "Completado"
                                        ? "bg-tactical-green/90 text-white"
                                        : "bg-amber-500/90 text-white"
                                        }`}>
                                        {proyectoModal.estado}
                                    </span>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-black uppercase text-white leading-tight">
                                    {proyectoModal.titulo}
                                </h3>
                            </div>
                        </div>

                        {/* Contenido del Modal */}
                        <div className="p-6 sm:p-8 space-y-6">

                            {/* Info rápida del proyecto */}
                            <div className="grid grid-cols-3 gap-4">
                                <div className="bg-slate-50 border border-slate-200 p-3 text-center">
                                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">Cliente</span>
                                    <span className="text-xs font-bold text-slate-800">{proyectoModal.cliente}</span>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 p-3 text-center">
                                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">Ubicación</span>
                                    <span className="text-xs font-bold text-slate-800">{proyectoModal.ubicacion}</span>
                                </div>
                                <div className="bg-slate-50 border border-slate-200 p-3 text-center">
                                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">Año</span>
                                    <span className="text-xs font-bold text-slate-800">{proyectoModal.año}</span>
                                </div>
                            </div>

                            {/* Descripción */}
                            <div>
                                <h4 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider mb-2">
                                    Descripción del Proyecto
                                </h4>
                                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                                    {proyectoModal.descripcion}
                                </p>
                            </div>

                            {/* Alcance */}
                            <div className="border-t border-slate-200 pt-5">
                                <h4 className="text-xs font-mono font-bold text-tactical-green uppercase tracking-wider mb-3">
                                    Alcance del Proyecto:
                                </h4>
                                <ul className="grid grid-cols-1 gap-2.5">
                                    {proyectoModal.alcance.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 bg-slate-50 border border-slate-200 p-3 text-xs text-slate-800">
                                            <span className="text-tactical-green font-bold">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Acciones */}
                            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row gap-3">
                                <Link
                                    href="/contacto"
                                    className="flex-1 text-center px-6 py-3.5 bg-tactical-green hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-emerald-900/20"
                                >
                                    Solicitar Proyecto Similar
                                </Link>
                                <button
                                    onClick={() => setProyectoModal(null)}
                                    className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer border border-slate-300"
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
