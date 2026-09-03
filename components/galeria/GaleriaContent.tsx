"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface GalleryItem {
  id: number;
  title: string;
  category: "tableros" | "automatizacion" | "mantenimiento" | "montaje" | "campo";
  categoryLabel: string;
  image: string;
  location: string;
  year: string;
  description: string;
  specifications: string[];
  clientSector: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Tablero de Distribución y Control de Fuerza Principal",
    category: "tableros",
    categoryLabel: "Tableros Eléctricos",
    image: "/images/inicio/tablero.jpg",
    location: "Lima - Callao",
    year: "2025",
    description: "Diseño, estructuración y armado de tablero general de distribución para planta de procesamiento continuo, con protecciones electromagnéticas de última generación y medición multifunción.",
    specifications: [
      "Normativa: IEC 61439-1 / 2",
      "Componentes: Schneider Electric / ABB",
      "Capacidad: 1600A barraje de cobre",
      "Grado de protección: IP55"
    ],
    clientSector: "Sector Agroindustrial"
  },
  {
    id: 2,
    title: "Sistema de Automatización y Celda PLC Siemens S7-1500",
    category: "automatizacion",
    categoryLabel: "Automatización & PLC",
    image: "/images/inicio/tablero.jpg",
    location: "Lima - Lurín",
    year: "2025",
    description: "Integración de PLC modular con módulos de comunicación PROFINET, control distribuido de servomotores y pantalla táctil HMI para monitoreo de línea en tiempo real.",
    specifications: [
      "Controlador: Siemens S7-1500 CPU 1515-2 PN",
      "Interfaz: HMI Comfort 12 pulgadas",
      "Red: Profinet Industrial aislada",
      "Módulos IO remotos ET200SP"
    ],
    clientSector: "Industria Metalmecánica"
  },
  {
    id: 3,
    title: "Mantenimiento Preventivo y Termografía de Subestación",
    category: "mantenimiento",
    categoryLabel: "Mantenimiento Industrial",
    image: "/images/inicio/tablero.jpg",
    location: "Lima - Villa El Salvador",
    year: "2024",
    description: "Inspección termográfica exhaustiva, ajuste de torques en bornes principales, limpieza criogénica y pruebas de aislamiento Megger para continuidad operativa 24/7.",
    specifications: [
      "Pruebas de Aislamiento: 1000V / 2500V",
      "Análisis Termográfico: Cámara Fluke Ti480",
      "Mantenimiento de Interruptores en Vacío",
      "Certificación técnica emitida"
    ],
    clientSector: "Manufactura Textil"
  },
  {
    id: 4,
    title: "Montaje de Centro de Control de Motores (CCM)",
    category: "montaje",
    categoryLabel: "Montaje Electromecánico",
    image: "/images/inicio/tablero.jpg",
    location: "Lima - Huachipa",
    year: "2024",
    description: "Montaje electromecánico integral de celdas CCM compartimentadas con arrancadores suaves y variadores de frecuencia para bombas de alta presión.",
    specifications: [
      "Variadores: VFD Danfoss / Yaskawa",
      "Barraje con tratamiento estañado",
      "Bloqueo y consignación LOTO segura",
      "Sistema de ventilación forzada termocontrolada"
    ],
    clientSector: "Planta de Tratamiento de Aguas"
  },
  {
    id: 5,
    title: "Canalización y Cableado Estructurado Industrial en Campo",
    category: "campo",
    categoryLabel: "Instalaciones en Campo",
    image: "/images/inicio/tablero.jpg",
    location: "Lima - Ate Vitarte",
    year: "2024",
    description: "Tendido de bandejas portacables tipo escalerilla pesada en acero galvanizado en caliente, cableado libre de halógenos y conexionado de instrumentación de campo.",
    specifications: [
      "Bandejas portacables NEMA 12B",
      "Cables N2XH clase 5 libres de halógeno",
      "Identificación bajo código normativo",
      "Puesta a tierra equipotencial integral"
    ],
    clientSector: "Industria de Alimentos y Bebidas"
  },
  {
    id: 6,
    title: "Tablero de Transferencia Automática TTA (Red-Grupo)",
    category: "tableros",
    categoryLabel: "Tableros Eléctricos",
    image: "/images/inicio/tablero.jpg",
    location: "Lima - San Juan de Lurigancho",
    year: "2024",
    description: "Implementación de sistema de conmutación motorizada para grupo electrógeno de respaldo ante fallos del suministro de red principal, con controlador DSE.",
    specifications: [
      "Controlador: Deep Sea Electronics (DSE)",
      "Conmutador motorizado de 4 polos 800A",
      "Monitoreo de red trifásica y frecuencia",
      "Arranque automático en menos de 8 segundos"
    ],
    clientSector: "Centro Logístico & Almacén"
  },
  {
    id: 7,
    title: "Banco de Condensadores Automático con Filtros de Armónicos",
    category: "tableros",
    categoryLabel: "Tableros Eléctricos",
    image: "/images/inicio/tablero.jpg",
    location: "Lima - Pisco / Ica",
    year: "2024",
    description: "Compensación de energía reactiva y corrección del factor de potencia hasta 0.98, reduciendo penalizaciones tarifarias y optimizando transformadores.",
    specifications: [
      "Potencia: 250 kVAR escalonado",
      "Reactancias de rechazo sintonizadas a 189 Hz",
      "Regulador microprocesado de 12 pasos",
      "Contactores especiales con resistencias de inserción"
    ],
    clientSector: "Sector Pesquero e Industrial"
  },
  {
    id: 8,
    title: "Integración de Sensores y SCADA de Monitoreo Remoto",
    category: "automatizacion",
    categoryLabel: "Automatización & PLC",
    image: "/images/inicio/tablero.jpg",
    location: "Lima - Callao",
    year: "2025",
    description: "Despliegue de red IoT industrial con sensores de vibración, nivel, presión y temperatura enlazados a panel SCADA centralizado accesible vía web segura.",
    specifications: [
      "Protocolos: Modbus TCP/IP, MQTT, OPC UA",
      "Sensores 4-20mA y transmisores HART",
      "Registro de históricos y alarmas automáticas",
      "Dashboard en tiempo real con dashboards analíticos"
    ],
    clientSector: "Planta Química"
  },
  {
    id: 9,
    title: "Mantenimiento Integral de Motores Eléctricos y Reductores",
    category: "mantenimiento",
    categoryLabel: "Mantenimiento Industrial",
    image: "/images/inicio/tablero.jpg",
    location: "Lima - Chilca",
    year: "2025",
    description: "Overhaul mecánico y eléctrico de motores trifásicos de media potencia: alineamiento láser, cambio de rodamientos de alta velocidad y barnizado dieléctrico.",
    specifications: [
      "Alineamiento láser de ejes Prüftechnik",
      "Prueba de vibraciones ISO 10816",
      "Cambio de rodamientos SKF / NSK",
      "Ensayos en vacío con registro de consumo"
    ],
    clientSector: "Industria Cementera y Minera"
  }
];

type CategoryFilter = "todos" | "tableros" | "automatizacion" | "mantenimiento" | "montaje" | "campo";

const CATEGORIES: { id: CategoryFilter; label: string; countBadge?: number }[] = [
  { id: "todos", label: "Todos los Proyectos" },
  { id: "tableros", label: "Tableros Eléctricos" },
  { id: "automatizacion", label: "Automatización & PLC" },
  { id: "mantenimiento", label: "Mantenimiento Industrial" },
  { id: "montaje", label: "Montaje Electromecánico" },
  { id: "campo", label: "Instalaciones en Campo" },
];

export default function GaleriaPrincipal() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("todos");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filtrado de proyectos
  const filteredItems = useMemo(() => {
    return GALLERY_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === "todos" || item.category === activeCategory;
      const matchesQuery =
        searchQuery.trim() === "" ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.clientSector.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  // Manejo de navegación en modal
  const currentIndexInFiltered = useMemo(() => {
    if (!selectedItem) return -1;
    return filteredItems.findIndex((item) => item.id === selectedItem.id);
  }, [selectedItem, filteredItems]);

  const handlePrevItem = () => {
    if (currentIndexInFiltered > 0) {
      setSelectedItem(filteredItems[currentIndexInFiltered - 1]);
    } else {
      setSelectedItem(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleNextItem = () => {
    if (currentIndexInFiltered < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndexInFiltered + 1]);
    } else {
      setSelectedItem(filteredItems[0]);
    }
  };

  // Escuchar teclado para cerrar o cambiar item en el modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === "Escape") setSelectedItem(null);
      if (e.key === "ArrowLeft") handlePrevItem();
      if (e.key === "ArrowRight") handleNextItem();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, currentIndexInFiltered, filteredItems]);

  return (
    <div className="bg-white min-h-screen">
      {/* ========================================================= */}
      {/* 1. ENCABEZADO DE PÁGINA (SUBPÁGINA INTERNA) */}
      {/* ========================================================= */}
      <section className="bg-white border-b border-zinc-200 py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-6">

          {/* Migas de pan (Breadcrumb) */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-zinc-500 mb-3" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-tactical-green transition-colors">
              Inicio
            </Link>
            <span className="text-zinc-400">/</span>
            <span className="text-tactical-green font-bold">Galería</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight">
                Galería de Proyectos
              </h1>
            </div>

            <p className="text-sm text-zinc-600 max-w-lg leading-relaxed">
              Explora nuestra evidencia visual en montaje de tableros eléctricos, integración de sistemas de automatización PLC y mantenimiento especializado en plantas.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. BARRA DE FILTROS Y BÚSQUEDA */}
      {/* ========================================================= */}
      <section className="sticky top-24 z-30 bg-zinc-50 border-b border-zinc-200 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center justify-between">

            {/* Categorías / Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-thin">
              {CATEGORIES.map((cat) => {
                const isSelected = activeCategory === cat.id;
                const count =
                  cat.id === "todos"
                    ? GALLERY_ITEMS.length
                    : GALLERY_ITEMS.filter((i) => i.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`whitespace-nowrap px-4 py-2 text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${isSelected
                      ? "bg-tactical-green text-white shadow-md shadow-tactical-green/20"
                      : "bg-white text-zinc-700 hover:bg-zinc-200/80 border border-zinc-200"
                      }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[11px] px-1.5 py-0.5 rounded ${isSelected
                        ? "bg-emerald-950 text-emerald-200"
                        : "bg-zinc-100 text-zinc-500"
                        }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Barra de búsqueda rápida */}
            <div className="relative min-w-[260px] lg:w-72">
              <input
                type="text"
                placeholder="Buscar por equipo, sector o ciudad..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white border border-zinc-300 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-tactical-green focus:ring-1 focus:ring-tactical-green"
              />
              <svg
                className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-700 font-bold"
                  title="Limpiar búsqueda"
                >
                  ✕
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. GRILLA DE PROYECTOS / FOTOS */}
      {/* ========================================================= */}
      <section className="py-12 md:py-16 bg-zinc-100/50">
        <div className="max-w-7xl mx-auto px-6">

          {/* Mensaje de resultados */}
          <div className="flex justify-between items-center mb-8">
            <p className="text-zinc-600 text-sm font-medium">
              Mostrando <span className="font-bold text-zinc-900">{filteredItems.length}</span> proyecto(s)
              {searchQuery && ` para "${searchQuery}"`}
            </p>

            {(activeCategory !== "todos" || searchQuery) && (
              <button
                onClick={() => {
                  setActiveCategory("todos");
                  setSearchQuery("");
                }}
                className="text-xs font-bold text-tactical-green hover:underline cursor-pointer"
              >
                Restablecer filtros
              </button>
            )}
          </div>

          {filteredItems.length === 0 ? (
            <div className="bg-white border border-zinc-200 p-12 text-center my-8 shadow-sm">
              <div className="w-16 h-16 bg-zinc-100 text-zinc-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-1">No se encontraron proyectos</h3>
              <p className="text-zinc-500 text-sm mb-6 max-w-md mx-auto">
                No hay resultados que coincidan con los filtros seleccionados. Intenta con otros términos o visualiza todas las categorías.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("todos");
                  setSearchQuery("");
                }}
                className="px-6 py-2.5 bg-tactical-green text-white text-sm font-bold hover:bg-emerald-900 transition-colors"
              >
                Ver todos los proyectos
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group bg-white border border-zinc-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
                >
                  {/* Contenedor de Imagen con Overlay táctico */}
                  <div className="relative h-64 w-full overflow-hidden bg-tactical-dark">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Capa gradiente hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Badge de Categoría */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1 bg-tactical-green text-white text-xs font-bold uppercase tracking-wider shadow">
                        {item.categoryLabel}
                      </span>
                    </div>

                    {/* Icono de Lupa / Zoom al hacer hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <div className="w-12 h-12 bg-tactical-green/90 text-white rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                      </div>
                    </div>

                    {/* Ubicación y Año sobre la imagen */}
                    <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-xs text-zinc-300">
                      <span className="flex items-center gap-1 font-medium">
                        <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {item.location}
                      </span>
                      <span className="bg-black/60 px-2 py-0.5 rounded text-[11px] font-mono text-zinc-200">
                        {item.year}
                      </span>
                    </div>
                  </div>

                  {/* Detalle y texto de la tarjeta */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-2">
                        {item.clientSector}
                      </div>

                      <h3 className="font-bold text-lg text-zinc-900 group-hover:text-tactical-green transition-colors leading-snug line-clamp-2 mb-3">
                        {item.title}
                      </h3>

                      <p className="text-zinc-600 text-sm line-clamp-3 leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>

                    {/* Especificación clave resumida */}
                    <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                      <span className="text-xs font-mono text-zinc-500 line-clamp-1">
                        {item.specifications[0]}
                      </span>
                      <span className="text-tactical-green text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        Detalles &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. MODAL DETALLADO / LIGHTBOX INTERACTIVO */}
      {/* ========================================================= */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative bg-white w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl flex flex-col lg:flex-row border border-zinc-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de Cerrar */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/70 hover:bg-tactical-red text-white flex items-center justify-center transition-colors shadow-lg cursor-pointer"
              aria-label="Cerrar modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Mitad Izquierda: Imagen Grande con botones de navegación */}
            <div className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-[460px] bg-tactical-dark flex items-center justify-center">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

              {/* Botones de navegación Anterior / Siguiente */}
              {filteredItems.length > 1 && (
                <div className="absolute inset-x-2 bottom-4 flex justify-between items-center z-10">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrevItem();
                    }}
                    className="p-2.5 bg-black/70 hover:bg-tactical-green text-white transition-colors cursor-pointer flex items-center gap-1 text-xs font-bold"
                    aria-label="Proyecto anterior"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Anterior</span>
                  </button>

                  <span className="text-xs font-mono text-zinc-300 bg-black/60 px-3 py-1">
                    {currentIndexInFiltered + 1} / {filteredItems.length}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNextItem();
                    }}
                    className="p-2.5 bg-black/70 hover:bg-tactical-green text-white transition-colors cursor-pointer flex items-center gap-1 text-xs font-bold"
                    aria-label="Proyecto siguiente"
                  >
                    <span>Siguiente</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* Mitad Derecha: Ficha Técnica y Detalles */}
            <div className="w-full lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between bg-white">
              <div>
                {/* Categoría & Sector */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-tactical-green text-white text-xs font-bold uppercase tracking-wider">
                    {selectedItem.categoryLabel}
                  </span>
                  <span className="text-xs font-semibold text-zinc-500">
                    {selectedItem.clientSector}
                  </span>
                </div>

                {/* Título Principal */}
                <h2 className="text-xl sm:text-2xl font-black text-zinc-900 leading-tight mb-4">
                  {selectedItem.title}
                </h2>

                {/* Metadatos (Ubicación / Año) */}
                <div className="flex items-center gap-4 text-xs text-zinc-600 mb-6 pb-4 border-b border-zinc-200">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-tactical-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <strong>Ubicación:</strong> {selectedItem.location}
                  </span>
                  <span>|</span>
                  <span><strong>Año:</strong> {selectedItem.year}</span>
                </div>

                {/* Descripción */}
                <div className="mb-6">
                  <h4 className="text-xs uppercase font-bold text-zinc-400 tracking-wider mb-2">
                    Alcance del Proyecto
                  </h4>
                  <p className="text-zinc-700 text-sm leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                {/* Especificaciones Técnicas */}
                <div className="mb-6 bg-zinc-50 border border-zinc-200 p-4">
                  <h4 className="text-xs uppercase font-bold text-tactical-green tracking-wider mb-3 flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Ficha y Especificaciones
                  </h4>
                  <ul className="space-y-2 text-xs text-zinc-700">
                    {selectedItem.specifications.map((spec, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-tactical-green font-bold">•</span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Botón de acción */}
              <div className="pt-4 border-t border-zinc-200 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contacto"
                  className="flex-1 text-center px-6 py-3 bg-tactical-green hover:bg-emerald-900 text-white font-bold text-sm transition-colors shadow"
                >
                  Cotizar Proyecto Similar
                </Link>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="px-6 py-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-sm transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 5. CTA INFERIOR / CONTACTO */}
      {/* ========================================================= */}
      <section className="bg-tactical-green text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
            ¿Tienes un proyecto electromecánico en mente?
          </h2>
          <p className="text-zinc-200 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Nuestro equipo de ingenieros y especialistas técnicos está listo para asesorarte en campo, diseñar tus tableros o automatizar tu línea de producción.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="px-8 py-3.5 bg-white text-tactical-green hover:bg-zinc-100 font-bold text-base transition-colors shadow-lg"
            >
              Solicitar Cotización Inmediata
            </Link>
            <Link
              href="/servicios"
              className="px-8 py-3.5 bg-emerald-900/60 hover:bg-emerald-900 text-white border border-emerald-500/40 font-bold text-base transition-colors"
            >
              Conocer Todos los Servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
