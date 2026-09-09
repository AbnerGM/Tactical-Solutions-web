"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";

export interface GalleryPhoto {
    id: number;
    title: string;
    category: "tableros" | "automatizacion" | "mantenimiento" | "montaje" | "campo";
    categoryLabel: string;
    image: string;
    location?: string;
}

const GALLERY_PHOTOS: GalleryPhoto[] = [
    {
        id: 1,
        title: "Tablero General de Distribución TGD 1600A",
        category: "tableros",
        categoryLabel: "Tableros Eléctricos",
        image: "/images/inicio/tablero.jpg",
        location: "Callao, Lima"
    },
    {
        id: 2,
        title: "Celda de Automatización con PLC Siemens S7-1500",
        category: "automatizacion",
        categoryLabel: "Automatización & PLC",
        image: "/images/galeria/plc-automation.jpg",
        location: "Lurín, Lima"
    },
    {
        id: 3,
        title: "Inspección y Pruebas en Subestación Eléctrica",
        category: "mantenimiento",
        categoryLabel: "Mantenimiento Industrial",
        image: "/images/galeria/mantenimiento-subestacion.jpg",
        location: "Villa El Salvador, Lima"
    },
    {
        id: 4,
        title: "Centro de Control de Motores (CCM) con Variadores VFD",
        category: "montaje",
        categoryLabel: "Montaje Electromecánico",
        image: "/images/galeria/montaje-ccm.jpg",
        location: "Huachipa, Lima"
    },
    {
        id: 5,
        title: "Canalización con Bandejas Portacables Galvanizadas",
        category: "campo",
        categoryLabel: "Instalaciones en Campo",
        image: "/images/galeria/instalacion-campo.jpg",
        location: "Ate Vitarte, Lima"
    },
    {
        id: 6,
        title: "Tablero de Transferencia Automática Red - Grupo Electrógeno",
        category: "tableros",
        categoryLabel: "Tableros Eléctricos",
        image: "/images/inicio/tablero.jpg",
        location: "San Isidro, Lima"
    },
    {
        id: 7,
        title: "Arquitectura de Control Distribuido y E/S Remotas",
        category: "automatizacion",
        categoryLabel: "Automatización & PLC",
        image: "/images/galeria/plc-automation.jpg",
        location: "Pisco, Ica"
    },
    {
        id: 8,
        title: "Protocolo de Pruebas Dieléctricas y Mantenimiento de Celdas",
        category: "mantenimiento",
        categoryLabel: "Mantenimiento Industrial",
        image: "/images/galeria/mantenimiento-subestacion.jpg",
        location: "Callao, Lima"
    },
    {
        id: 9,
        title: "Barraje de Fuerza en Cobre y Celdas de Maniobra",
        category: "montaje",
        categoryLabel: "Montaje Electromecánico",
        image: "/images/galeria/montaje-ccm.jpg",
        location: "Chimbote, Ancash"
    },
    {
        id: 10,
        title: "Tendido de Conductores de Fuerza en Altura",
        category: "campo",
        categoryLabel: "Instalaciones en Campo",
        image: "/images/galeria/instalacion-campo.jpg",
        location: "Lurín, Lima"
    },
    {
        id: 11,
        title: "Integración de Mandos y Señalización Frontal IP55",
        category: "tableros",
        categoryLabel: "Tableros Eléctricos",
        image: "/images/inicio/tablero.jpg",
        location: "Arequipa"
    },
    {
        id: 12,
        title: "Montaje y Conexionado de Instrumentación de Campo",
        category: "campo",
        categoryLabel: "Instalaciones en Campo",
        image: "/images/inicio/prueba-direccion.jpg",
        location: "Lima"
    }
];

const CATEGORY_TABS = [
    { key: "todos", label: "Todas las Fotos" },
    { key: "tableros", label: "Tableros Eléctricos" },
    { key: "automatizacion", label: "Automatización & PLC" },
    { key: "mantenimiento", label: "Mantenimiento" },
    { key: "montaje", label: "Montaje CCM" },
    { key: "campo", label: "Instalaciones en Campo" }
];

export default function GaleriaContent() {
    const [selectedCategory, setSelectedCategory] = useState("todos");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    // Filtrado por categoría y buscador de texto
    const filteredPhotos = useMemo(() => {
        return GALLERY_PHOTOS.filter((photo) => {
            const matchesCategory = selectedCategory === "todos" || photo.category === selectedCategory;
            const query = searchQuery.trim().toLowerCase();
            const matchesSearch =
                !query ||
                photo.title.toLowerCase().includes(query) ||
                photo.categoryLabel.toLowerCase().includes(query) ||
                (photo.location && photo.location.toLowerCase().includes(query));
            return matchesCategory && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    const activePhoto = selectedIndex !== null ? filteredPhotos[selectedIndex] : null;

    // Navegación dentro del lightbox
    const handlePrev = useCallback(() => {
        if (selectedIndex === null) return;
        setSelectedIndex((prev) => (prev! > 0 ? prev! - 1 : filteredPhotos.length - 1));
    }, [selectedIndex, filteredPhotos.length]);

    const handleNext = useCallback(() => {
        if (selectedIndex === null) return;
        setSelectedIndex((prev) => (prev! < filteredPhotos.length - 1 ? prev! + 1 : 0));
    }, [selectedIndex, filteredPhotos.length]);

    const handleClose = useCallback(() => {
        setSelectedIndex(null);
    }, []);

    // Manejo de atajos de teclado (Esc, Flechas)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedIndex === null) return;
            if (e.key === "Escape") handleClose();
            if (e.key === "ArrowLeft") handlePrev();
            if (e.key === "ArrowRight") handleNext();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [selectedIndex, handleClose, handlePrev, handleNext]);

    // Bloqueo de scroll cuando el lightbox está activo
    useEffect(() => {
        if (selectedIndex !== null) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedIndex]);

    return (
        <div className="bg-[#F9F8F6] min-h-screen text-tactical-dark font-sans pb-16">

            {/* ========================================================= */}
            {/* 2. BARRA DE FILTROS POR CATEGORÍA + BUSCADOR DE IMÁGENES */}
            {/* ========================================================= */}
            <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-zinc-200 py-3.5 px-6 shadow-xs">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">

                    {/* Botones de Categorías */}
                    <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 scrollbar-none">
                        {CATEGORY_TABS.map((tab) => {
                            const isActive = selectedCategory === tab.key;
                            const count = tab.key === "todos"
                                ? GALLERY_PHOTOS.length
                                : GALLERY_PHOTOS.filter(i => i.category === tab.key).length;

                            return (
                                <button
                                    key={tab.key}
                                    onClick={() => {
                                        setSelectedCategory(tab.key);
                                        setSelectedIndex(null);
                                    }}
                                    className={`px-3.5 py-2 font-sans text-xs font-bold transition-all duration-200 whitespace-nowrap flex items-center gap-2 cursor-pointer ${isActive
                                        ? "bg-tactical-green text-white shadow-sm"
                                        : "bg-zinc-100 text-zinc-700 hover:bg-zinc-200 border border-zinc-200"
                                        }`}
                                >
                                    <span>{tab.label}</span>
                                    <span
                                        className={`px-1.5 py-0.2 font-mono text-[10px] ${isActive ? "bg-white/20 text-white" : "bg-zinc-200 text-zinc-800"
                                            }`}
                                    >
                                        {count}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Input de Búsqueda de Imágenes */}
                    <div className="relative w-full lg:w-72">
                        <input
                            type="text"
                            placeholder="Buscar por equipo, zona, tipo..."
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setSelectedIndex(null);
                            }}
                            className="w-full pl-9 pr-8 py-2 bg-zinc-50 border border-zinc-300 font-sans text-xs text-tactical-dark placeholder-zinc-400 focus:outline-none focus:border-tactical-green focus:ring-1 focus:ring-tactical-green transition-all"
                        />
                        <svg className="w-4 h-4 text-zinc-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-2.5 top-2 text-zinc-400 hover:text-tactical-red text-xs font-bold cursor-pointer"
                                title="Limpiar búsqueda"
                            >
                                ✕
                            </button>
                        )}
                    </div>

                </div>
            </section>

            {/* ========================================================= */}
            {/* 3. GRILLA DE FOTOS SIN DETALLES EXTENSOS (SOLO FOTOS)     */}
            {/* ========================================================= */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

                {/* Subbarra de conteo y restablecer filtros */}
                <div className="flex items-center justify-between mb-5 pb-2 border-b border-zinc-200 text-xs font-sans">
                    <div className="text-zinc-600 font-mono flex items-center gap-2">
                        <span className="w-2 h-2 bg-tactical-green" />
                        <span>Mostrando <strong>{filteredPhotos.length}</strong> {filteredPhotos.length === 1 ? "fotografía" : "fotografías"}</span>
                    </div>

                    {(selectedCategory !== "todos" || searchQuery) && (
                        <button
                            onClick={() => {
                                setSelectedCategory("todos");
                                setSearchQuery("");
                            }}
                            className="text-tactical-green hover:text-tactical-dark font-bold underline cursor-pointer"
                        >
                            Restablecer filtros
                        </button>
                    )}
                </div>

                {/* Grilla visual limpia de fotos (Sin border-radius en las tarjetas ni imágenes) */}
                {filteredPhotos.length === 0 ? (
                    <div className="bg-white p-12 text-center border border-zinc-200 max-w-md mx-auto my-12 shadow-xs">
                        <p className="text-zinc-600 text-xs font-medium mb-3 font-sans">
                            No se encontraron fotografías con los filtros aplicados.
                        </p>
                        <button
                            onClick={() => {
                                setSelectedCategory("todos");
                                setSearchQuery("");
                            }}
                            className="px-4 py-2 bg-tactical-green hover:bg-[#072c1d] text-white text-xs font-bold uppercase tracking-wide transition-colors cursor-pointer"
                        >
                            Ver todas las fotos
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {filteredPhotos.map((photo, index) => (
                            <div
                                key={photo.id}
                                onClick={() => setSelectedIndex(index)}
                                className="group relative aspect-4/3 overflow-hidden bg-tactical-dark border border-zinc-200 hover:border-tactical-green cursor-pointer transition-all duration-300 shadow-xs hover:shadow-xl"
                            >
                                {/* Foto de la galería (Sin border-radius) */}
                                <Image
                                    src={photo.image}
                                    alt={photo.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                                />

                                {/* Overlay con gradiente sutil al hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-tactical-dark/90 via-tactical-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5" />

                                {/* Tag de categoría en esquina superior */}
                                <div className="absolute top-2.5 left-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="bg-tactical-dark/90 text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 border border-tactical-green/60">
                                        {photo.categoryLabel}
                                    </span>
                                </div>

                                {/* Botón de expandir / pantalla completa en esquina superior derecha */}
                                <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-tactical-green hover:bg-[#072c1d] text-white w-8 h-8 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                    </svg>
                                </div>

                                {/* Pie de imagen al hover (título conciso y ubicación) */}
                                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-white text-xs font-bold leading-snug drop-shadow-md font-sans">
                                        {photo.title}
                                    </p>
                                    {photo.location && (
                                        <p className="text-zinc-300 text-[10px] mt-0.5 font-mono">
                                            📍 {photo.location}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Enlace sutil para cotizaciones al final de la página */}
                <div className="mt-12 text-center font-sans">
                    <p className="text-xs text-zinc-500 mb-2">¿Requieres un servicio o proyecto similar para tu planta industrial?</p>
                    <Link
                        href="/contacto"
                        className="inline-block px-5 py-2.5 bg-tactical-green hover:bg-[#072c1d] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-xs"
                    >
                        Contactar Asesoría Técnica
                    </Link>
                </div>

            </main>

            {/* ========================================================= */}
            {/* 4. VISOR EN PANTALLA COMPLETA TOTAL (LIGHTBOX)             */}
            {/* ========================================================= */}
            {activePhoto && (
                <div
                    className="fixed inset-0 z-50 bg-tactical-dark/95 backdrop-blur-md flex flex-col justify-between select-none animate-fadeIn"
                    onClick={handleClose}
                >
                    {/* BARRA SUPERIOR DEL VISOR */}
                    <div
                        className="w-full flex items-center justify-between px-4 sm:px-6 py-3.5 bg-tactical-dark/90 border-b border-zinc-800 z-20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Contador de fotos y categoría */}
                        <div className="flex items-center gap-3 font-sans">
                            <span className="bg-tactical-green text-white font-mono text-xs font-bold px-2.5 py-1">
                                {selectedIndex! + 1} / {filteredPhotos.length}
                            </span>
                            <span className="text-xs font-mono font-medium text-zinc-300 hidden sm:inline">
                                {activePhoto.categoryLabel}
                            </span>
                        </div>

                        {/* Botón cerrar */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={handleClose}
                                className="w-9 h-9 bg-zinc-800 hover:bg-tactical-red text-white flex items-center justify-center transition-colors cursor-pointer text-base font-bold"
                                aria-label="Cerrar visor"
                                title="Cerrar (Esc)"
                            >
                                ✕
                            </button>
                        </div>
                    </div>

                    {/* ÁREA CENTRAL: IMAGEN EN PANTALLA COMPLETA */}
                    <div
                        className="relative flex-1 flex items-center justify-center px-2 sm:px-12 md:px-16 py-2"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Botón Foto Anterior */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-2 sm:left-4 z-20 w-11 h-11 sm:w-13 sm:h-13 bg-zinc-900/90 hover:bg-tactical-green text-white flex items-center justify-center transition-all duration-200 cursor-pointer border border-zinc-700 shadow-xl group"
                            aria-label="Foto anterior"
                            title="Anterior (←)"
                        >
                            <svg className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Contenedor de la Imagen */}
                        <div className="relative w-full h-[76vh] sm:h-[82vh] max-w-6xl flex items-center justify-center">
                            <Image
                                key={activePhoto.id}
                                src={activePhoto.image}
                                alt={activePhoto.title}
                                fill
                                priority
                                sizes="100vw"
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>

                        {/* Botón Foto Siguiente */}
                        <button
                            onClick={handleNext}
                            className="absolute right-2 sm:right-4 z-20 w-11 h-11 sm:w-13 sm:h-13 bg-zinc-900/90 hover:bg-tactical-green text-white flex items-center justify-center transition-all duration-200 cursor-pointer border border-zinc-700 shadow-xl group"
                            aria-label="Foto siguiente"
                            title="Siguiente (→)"
                        >
                            <svg className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>

                    {/* BARRA INFERIOR CON TÍTULO Y MINIATURAS */}
                    <div
                        className="w-full bg-tactical-dark/95 border-t border-zinc-800 py-3 px-4 sm:px-6 z-20"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="max-w-4xl mx-auto text-center mb-2 font-sans">
                            <h2 className="text-white font-bold text-sm sm:text-base">
                                {activePhoto.title}
                            </h2>
                            {activePhoto.location && (
                                <p className="text-tactical-green text-xs font-mono mt-0.5">
                                    📍 {activePhoto.location}
                                </p>
                            )}
                        </div>

                        {/* Miniaturas de selección directa (Sin bordes redondeados) */}
                        <div className="flex items-center justify-center gap-1.5 overflow-x-auto max-w-3xl mx-auto py-1 scrollbar-none">
                            {filteredPhotos.map((thumb, idx) => (
                                <button
                                    key={thumb.id}
                                    onClick={() => setSelectedIndex(idx)}
                                    className={`relative w-12 h-10 sm:w-14 sm:h-11 overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${idx === selectedIndex
                                        ? "border-tactical-green scale-105 opacity-100"
                                        : "border-transparent opacity-40 hover:opacity-80"
                                        }`}
                                >
                                    <Image
                                        src={thumb.image}
                                        alt={thumb.title}
                                        fill
                                        sizes="56px"
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>

                        <p className="text-[10px] text-zinc-500 text-center font-mono mt-1.5 hidden sm:block">
                            Usa las flechas ← → del teclado para navegar o Esc para cerrar
                        </p>
                    </div>
                </div>
            )}

        </div>
    );
}