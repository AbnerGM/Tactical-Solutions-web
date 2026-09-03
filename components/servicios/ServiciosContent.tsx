"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  formatter?: (val: number) => string;
  duration?: number;
}

function AnimatedCounter({
  target,
  prefix = "+",
  suffix = "",
  formatter,
  duration = 2000
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeOut * target);

            setCount(currentVal);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(target);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  if (formatter) {
    return <span ref={elementRef}>{formatter(count)}</span>;
  }

  return (
    <span ref={elementRef}>
      {prefix}{count}{suffix}
    </span>
  );
}

interface ServiceCard {
  id: string;
  title: string;
  image: string;
  description: string;
  bullets: string[];
  category: string;
}

const SERVICES_CARDS: ServiceCard[] = [
  {
    id: "tableros-electricos",
    title: "MONTAJE E INSTALACIÓN DE TABLEROS ELÉCTRICOS",
    image: "/images/inicio/tablero.jpg",
    description: "Diseño, estructuración y armado de tableros de fuerza y control para líneas de producción continuas.",
    bullets: [
      "Tableros de distribución TGD y celdas CCM",
      "Transferencias automáticas TTA Red-Grupo",
      "Pruebas de aislamiento y rotulado normado"
    ],
    category: "Fuerza y Distribución"
  },
  {
    id: "mantenimiento-especializado",
    title: "MANTENIMIENTO ELECTROMECÁNICO ESPECIALIZADO",
    image: "/images/inicio/tablero.jpg",
    description: "Operaciones preventivas y correctivas para asegurar la operatividad ininterrumpida de sus equipos críticos.",
    bullets: [
      "Inspección termográfica certificada Fluke",
      "Megado y pruebas de aislamiento dieléctrico",
      "Ajuste de torque y mantenimiento a interruptores"
    ],
    category: "Confiabilidad Operativa"
  },
  {
    id: "calibracion-instrumentacion",
    title: "INSTRUMENTACIÓN & CALIBRACIÓN EN CAMPO",
    image: "/images/inicio/tablero.jpg",
    description: "Aseguramos la exactitud del control de procesos en planta mediante calibración y verificación de lazos analógicos.",
    bullets: [
      "Transmisores de presión, nivel y temperatura",
      "Configuración de señales 4-20mA y protocolo HART",
      "Calibración in situ con patrones trazables"
    ],
    category: "Medición y Calidad"
  },
  {
    id: "auxilio-electrico",
    title: "AUXILIO MECÁNICO Y ELÉCTRICO DE EMERGENCIA",
    image: "/images/inicio/tablero.jpg",
    description: "Respuesta rápida para fallas imprevistas en planta, minimizando paradas operativas y tiempos muertos.",
    bullets: [
      "Diagnóstico de fallas críticas en tableros y líneas",
      "Personal técnico equipado para atención en sitio",
      "Disponibilidad para paradas de emergencia 24/7"
    ],
    category: "Soporte de Emergencia"
  },
  {
    id: "automatizacion-plc",
    title: "AUTOMATIZACIÓN DE PLANTAS & SISTEMAS PLC",
    image: "/images/inicio/tablero.jpg",
    description: "Control centralizado de procesos mediante PLCs, pantallas HMI y telemetría para elevar la eficiencia operativa.",
    bullets: [
      "Programación Siemens S7-1200/1500 y Allen-Bradley",
      "Redes industriales PROFINET y Modbus TCP/IP",
      "Supervisión SCADA y control de recetas en tiempo real"
    ],
    category: "Control y Automatización"
  },
  {
    id: "asesoria-tecnica",
    title: "ASESORÍA TÉCNICA & PROYECTOS EPC",
    image: "/images/inicio/tablero.jpg",
    description: "Acompañamiento técnico en todas las etapas del proyecto: desde el diagnóstico en planta hasta la entrega formal.",
    bullets: [
      "Levantamiento y memorias de cálculo en campo",
      "Elaboración de planos unifilares en CAD/EPLAN",
      "Dossier de calidad y protocolos homologados"
    ],
    category: "Ingeniería y Proyectos"
  }
];

const SUCCESS_CASES = [
  {
    id: "1",
    tag: "LOGÍSTICA Y REPUESTOS CRÍTICOS",
    title: "Suministro de Variadores y Componentes con Disponibilidad Inmediata",
    desc: "Gestión de stock estratégico y despacho express de repuestos electromecánicos críticos para evitar interrupciones de planta.",
    image: "/images/inicio/tablero.jpg"
  },
  {
    id: "2",
    tag: "MONTAJE ELECTROMECÁNICO EN MINA",
    title: "Instalación de Celdas CCM en Línea de Chancado Subterránea",
    desc: "Ejecución técnica bajo estándares de seguridad minera, garantizando operatividad y protección en ambientes de alta exigencia.",
    image: "/images/inicio/tablero.jpg"
  },
  {
    id: "3",
    tag: "AUTOMATIZACIÓN INTEGRAL",
    title: "Modernización y Control SCADA en Planta Agroindustrial",
    desc: "Integración de PLC modular con pantallas HMI táctiles y enlace a base de datos de producción con monitoreo en tiempo real.",
    image: "/images/inicio/tablero.jpg"
  },
  {
    id: "4",
    tag: "HOMOLOGACIÓN & SEGURIDAD",
    title: "Protocolos de Calidad y Certificación para Auditorías",
    desc: "Dossiers de calidad y pruebas de aislamiento aprobadas sin observaciones en auditorías de compañías certificadoras.",
    image: "/images/inicio/tablero.jpg"
  }
];

const ARTICLES_LIST = [
  "Diagnóstico predictivo para prolongar la vida útil de tableros y motores.",
  "Instalación y puesta en marcha bajo estándares normativos IEC y NEMA.",
  "Gestión de inventario de repuestos críticos para plantas de producción continua.",
  "Automatización de procesos: dosificación, pesaje y control mediante PLC."
];

export default function ServiciosContent() {
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceCard | null>(null);
  const [searchFilter, setSearchFilter] = useState("");

  const filteredArticles = ARTICLES_LIST.filter(art =>
    art.toLowerCase().includes(searchFilter.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen text-zinc-800">

      {/* ========================================================= */}
      {/* 1. TOP BANNER / CALLOUT OSCURO ESTILO HORMAQ */}
      {/* ========================================================= */}
      <section className="relative bg-tactical-dark text-white py-12 md:py-16 overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/inicio/tablero.jpg"
            alt="Fondo industrial"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-tactical-dark via-tactical-dark/95 to-tactical-dark/80" />

        <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 z-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight uppercase leading-tight">
              ¿Deseas conocer más sobre <br className="hidden sm:inline" />
              <span className="text-white">nuestros servicios?</span>
            </h2>
            <p className="text-zinc-300 text-sm mt-2 max-w-xl">
              Estamos listos para evaluar tus proyectos electromecánicos y ofrecerte soluciones técnicas a medida.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href="#catalogo-servicios"
              className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors border border-zinc-700 text-center flex-1 md:flex-none"
            >
              Ver Servicios
            </a>
            <Link
              href="/contacto"
              className="px-6 py-3 bg-tactical-green hover:bg-emerald-900 text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-colors shadow-lg text-center flex-1 md:flex-none"
            >
              Solicitar Cotización
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. SECCIÓN ¿POR QUÉ ELEGIRNOS? / EXPERIENCIA (ESTILO HORMAQ) */}
      {/* ========================================================= */}
      <section className="py-14 md:py-20 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">

          {/* Bloque superior: Imagen destacada + Texto */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">

            {/* Foto grande izquierda */}
            <div className="lg:col-span-6 relative h-[320px] sm:h-[400px] bg-tactical-dark overflow-hidden shadow-lg">
              <Image
                src="/images/inicio/tablero.jpg"
                alt="Ingeniería y soporte en campo"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* Texto derecha */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-tactical-green">
                ¿Por qué elegirnos?
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 tracking-tight uppercase leading-tight">
                Con años de experiencia en el sector industrial
              </h2>
              <p className="text-zinc-600 text-sm leading-relaxed">
                En Tactical Solutions contamos con un equipo multidisciplinario highly capacitado en montaje electromecánico, integración de automatismos PLC y mantenimiento en plantas. Brindamos soporte técnico directo, reduciendo tiempos de inactividad y garantizando la continuidad de cada operación.
              </p>
              <div className="pt-2">
                <Link
                  href="/nosotros"
                  className="inline-block px-7 py-3 bg-tactical-green hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow"
                >
                  Conócenos
                </Link>
              </div>
            </div>

          </div>

          {/* 4 Mini Cards de Pilares / Control de Calidad */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            <div className="bg-zinc-50 border border-zinc-200 p-5 flex flex-col justify-between">
              <div>
                <h3 className="font-black text-sm uppercase text-tactical-green tracking-wider mb-2">
                  Personal Calificado
                </h3>
                <p className="text-zinc-600 text-xs leading-relaxed">
                  Ingenieros y técnicos especialistas homologados con capacitaciones constantes y certificación en trabajos de alto riesgo.
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 border border-zinc-200 p-5 flex flex-col justify-between">
              <div>
                <h3 className="font-black text-sm uppercase text-tactical-green tracking-wider mb-2">
                  Innovación y Tecnología
                </h3>
                <p className="text-zinc-600 text-xs leading-relaxed">
                  Uso de herramientas de diagnóstico digital, termografía infrarroja y software de automatización de última generación.
                </p>
              </div>
            </div>

            <div className="bg-zinc-50 border border-zinc-200 p-5 flex flex-col justify-between">
              <div>
                <h3 className="font-black text-sm uppercase text-tactical-green tracking-wider mb-2">
                  Confiabilidad y Calidad
                </h3>
                <p className="text-zinc-600 text-xs leading-relaxed">
                  Ejecución bajo normas IEC, NEMA y Código Nacional de Electricidad, asegurando instalaciones seguras y duraderas.
                </p>
              </div>
            </div>

            {/* Tarjeta con imagen de fondo "Control de calidad garantizado" */}
            <div className="relative h-[130px] sm:h-auto bg-tactical-dark border border-zinc-800 p-5 flex items-end overflow-hidden group">
              <Image
                src="/images/inicio/tablero.jpg"
                alt="Control de calidad"
                fill
                className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="relative z-10 text-white">
                <h3 className="font-black text-xs sm:text-sm uppercase tracking-tight leading-tight">
                  Control de calidad garantizado en nuestro equipo de trabajo
                </h3>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. SECCIÓN PRINCIPAL: NUESTROS SERVICIOS (GRILLA HORMAQ 3x2) */}
      {/* ========================================================= */}
      <section id="catalogo-servicios" className="py-16 md:py-24 bg-zinc-100/60 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">

          {/* Título de sección idéntico a HORMAQ */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-zinc-900 uppercase tracking-tight">
              NUESTROS SERVICIOS
            </h2>
            <div className="text-xs sm:text-sm font-black text-tactical-green uppercase tracking-widest mt-2">
              Conoce nuestros servicios técnicos especializados
            </div>
          </div>

          {/* Grilla 3 columnas x 2 filas idéntica a la estructura de HORMAQ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_CARDS.map((srv) => (
              <div
                key={srv.id}
                className="bg-white border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Foto superior con banner negro del título superpuesto */}
                  <div className="relative h-56 w-full bg-tactical-dark overflow-hidden">
                    <Image
                      src={srv.image}
                      alt={srv.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Banner Negro en la parte inferior de la imagen */}
                    <div className="absolute bottom-0 inset-x-0 bg-black/85 backdrop-blur-xs px-4 py-2.5 border-t border-zinc-700">
                      <h3 className="text-xs font-black text-white uppercase tracking-wider text-center leading-tight">
                        {srv.title}
                      </h3>
                    </div>
                  </div>

                  {/* Cuerpo de la tarjeta */}
                  <div className="p-6">
                    <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-5">
                      {srv.description}
                    </p>

                    <div className="space-y-2 border-t border-zinc-100 pt-4">
                      {srv.bullets.map((b, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700 leading-normal">
                          <span className="text-tactical-green font-bold">•</span>
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Botón inferior ancho "SOLICITAR INFORMACIÓN" */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedServiceModal(srv)}
                    className="w-full py-3 bg-tactical-green hover:bg-emerald-900 text-white font-black text-xs uppercase tracking-wider transition-colors shadow text-center cursor-pointer"
                  >
                    Solicitar Información
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. BLOQUE DE ESTADÍSTICAS & CTA (RESULTADOS CLAVE QUE NOS RESPALDAN) */}
      {/* ========================================================= */}
      <section className="py-12 bg-white border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden shadow-xl border border-zinc-800">

            {/* Mitad izquierda negra con estadísticas */}
            <div className="lg:col-span-5 bg-tactical-dark text-white p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1">
                  Resultados Clave
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
                  Que nos respaldan
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-6 my-8">
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-white">
                    <AnimatedCounter
                      target={5000}
                      formatter={(val) => {
                        if (val >= 1000) {
                          const k = (val / 1000).toFixed(val % 1000 === 0 ? 0 : 1);
                          return `+${k}k Hras`;
                        }
                        return `+${val} Hras`;
                      }}
                    />
                  </div>
                  <div className="text-xs text-zinc-400 font-semibold mt-1">Servicios de ingeniería ejecutados</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-emerald-400">
                    <AnimatedCounter target={20} prefix="+" />
                  </div>
                  <div className="text-xs text-zinc-400 font-semibold mt-1">Años de experiencia acumulada</div>
                </div>
                <div className="col-span-2">
                  <div className="text-3xl sm:text-4xl font-black text-white">
                    <AnimatedCounter target={300} prefix="+" />
                  </div>
                  <div className="text-xs text-zinc-400 font-semibold mt-1">Proyectos industriales entregados</div>
                </div>
              </div>

              <div className="text-xs text-zinc-400">
                Garantía técnica y cumplimiento en cada entrega.
              </div>
            </div>

            {/* Mitad derecha con foto de equipo de campo y botón de cotización */}
            <div className="lg:col-span-7 relative min-h-[300px] bg-zinc-900 flex items-center p-8 sm:p-12 text-white">
              <Image
                src="/images/inicio/tablero.jpg"
                alt="Proyecto industrial"
                fill
                className="object-cover opacity-35"
              />
              <div className="relative z-10 max-w-lg">
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-3">
                  Comencemos tu Próximo Proyecto
                </h3>
                <p className="text-zinc-200 text-xs sm:text-sm leading-relaxed mb-6">
                  Nuestros especialistas están a tu disposición para evaluar en terreno las necesidades electromecánicas y de automatización de tu empresa.
                </p>
                <Link
                  href="/contacto"
                  className="inline-block px-8 py-3.5 bg-tactical-green hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg"
                >
                  Solicitar Cotización
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. SECCIÓN INFERIOR: BLOGS, NOTICIAS, VIDEOS & SIDEBAR (ESTILO HORMAQ) */}
      {/* ========================================================= */}
      <section className="py-16 md:py-24 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 uppercase tracking-tight">
              BLOGS Y NOTICIAS
            </h2>
            <div className="text-xs sm:text-sm font-black text-tactical-green uppercase tracking-widest mt-2">
              Conoce nuestras últimas noticias y casos de éxito
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Columna Izquierda (8 cols): Casos de Éxito y Proyectos (2x2 cards) */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-zinc-200">
                <h3 className="text-lg font-black uppercase tracking-tight text-zinc-900">
                  <span className="text-tactical-green">VIDEOS Y CASOS</span> DE ÉXITO
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {SUCCESS_CASES.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-zinc-200 shadow-sm overflow-hidden flex flex-col justify-between group"
                  >
                    {/* Thumbnail tipo video con icono play */}
                    <div className="relative h-48 w-full bg-tactical-dark overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-tactical-green/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                          <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>

                      {/* Tag superior */}
                      <div className="absolute top-2 left-2 z-10">
                        <span className="bg-black/80 text-emerald-400 text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider font-mono">
                          {item.tag}
                        </span>
                      </div>
                    </div>

                    {/* Texto del caso */}
                    <div className="p-5">
                      <h4 className="font-bold text-sm text-zinc-900 group-hover:text-tactical-green transition-colors leading-snug mb-2 line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="text-zinc-600 text-xs leading-relaxed line-clamp-3">
                        {item.desc}
                      </p>
                    </div>

                    <div className="p-5 pt-0">
                      <Link
                        href="/galeria"
                        className="text-xs font-bold text-tactical-green hover:underline flex items-center gap-1"
                      >
                        <span>Ver proyecto en galería</span>
                        <span>&rarr;</span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              {/* Botón Ver Más Proyectos */}
              <div className="text-center pt-4">
                <Link
                  href="/galeria"
                  className="inline-block px-8 py-3.5 bg-black hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow"
                >
                  &rarr; Ver Más Proyectos e Instalaciones
                </Link>
              </div>
            </div>

            {/* Columna Derecha (4 cols): Sidebar idéntica a HORMAQ */}
            <div className="lg:col-span-4 space-y-8">

              {/* 1. Buscar Recursos */}
              <div className="bg-white border border-zinc-200 p-6 shadow-sm">
                <h4 className="text-xs font-black uppercase tracking-wider text-zinc-900 mb-3 border-b border-zinc-100 pb-2">
                  Buscar Recursos:
                </h4>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar servicios, temas..."
                    value={searchFilter}
                    onChange={(e) => setSearchFilter(e.target.value)}
                    className="w-full pl-3 pr-10 py-2 bg-zinc-50 border border-zinc-300 text-xs focus:outline-none focus:border-tactical-green"
                  />
                  <button className="absolute right-0 top-0 bottom-0 px-3 bg-tactical-dark text-white text-xs flex items-center justify-center">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* 2. Categorías de Interés */}
              <div className="bg-white border border-zinc-200 p-6 shadow-sm">
                <h4 className="text-xs font-black uppercase tracking-wider text-zinc-900 mb-4 border-b border-zinc-100 pb-2">
                  Categorías de Interés:
                </h4>
                <div className="flex flex-col gap-2">
                  <Link
                    href="/galeria"
                    className="px-3 py-2 bg-zinc-50 hover:bg-tactical-green hover:text-white text-zinc-700 text-xs font-bold uppercase tracking-wider border border-zinc-200 transition-colors"
                  >
                    Tableros y Equipos de Distribución
                  </Link>
                  <Link
                    href="/galeria"
                    className="px-3 py-2 bg-zinc-50 hover:bg-tactical-green hover:text-white text-zinc-700 text-xs font-bold uppercase tracking-wider border border-zinc-200 transition-colors"
                  >
                    Servicios de Automatización & PLC
                  </Link>
                  <Link
                    href="/galeria"
                    className="px-3 py-2 bg-zinc-50 hover:bg-tactical-green hover:text-white text-zinc-700 text-xs font-bold uppercase tracking-wider border border-zinc-200 transition-colors"
                  >
                    Mantenimiento Preventivo y Correctivo
                  </Link>
                </div>
              </div>

              {/* 3. Últimos Artículos Técnicos */}
              <div className="bg-white border border-zinc-200 p-6 shadow-sm">
                <h4 className="text-xs font-black uppercase tracking-wider text-zinc-900 mb-4 border-b border-zinc-100 pb-2">
                  Últimos Artículos Técnicos:
                </h4>
                <div className="space-y-3">
                  {filteredArticles.map((art, idx) => (
                    <div key={idx} className="pb-3 border-b border-zinc-100 last:border-b-0 text-xs text-zinc-600 hover:text-tactical-green transition-colors cursor-pointer leading-relaxed">
                      • {art}
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Caja Destacada CTA Lateral (Idéntico a HORMAQ) */}
              <div className="bg-tactical-green p-6 text-white text-center shadow-lg">
                <h4 className="text-sm font-black uppercase tracking-tight mb-2">
                  Solicite su diagnóstico técnico especializado
                </h4>
                <p className="text-zinc-200 text-xs leading-relaxed mb-4">
                  Atención directa para plantas industriales y contratistas.
                </p>
                <Link
                  href="/contacto"
                  className="block w-full py-3 bg-tactical-dark hover:bg-black text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  &rarr; Contáctanos
                </Link>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. MODAL INTERACTIVO AL SOLICITAR INFORMACIÓN */}
      {/* ========================================================= */}
      {selectedServiceModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedServiceModal(null)}
        >
          <div
            className="relative bg-white w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl border border-zinc-700 p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedServiceModal(null)}
              className="absolute top-4 right-4 w-9 h-9 bg-zinc-100 hover:bg-tactical-red text-zinc-700 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Cerrar modal"
            >
              ✕
            </button>

            <div className="mb-4">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-tactical-green">
                {selectedServiceModal.category}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-zinc-900 leading-tight mt-1">
                {selectedServiceModal.title}
              </h3>
              <p className="text-zinc-600 text-xs sm:text-sm mt-3 leading-relaxed">
                {selectedServiceModal.description}
              </p>
            </div>

            <div className="border-t border-zinc-200 pt-4 space-y-3">
              <h4 className="text-xs font-bold uppercase text-zinc-900 tracking-wider">
                Alcances y Trabajos Comprendidos:
              </h4>
              <ul className="space-y-2 text-xs text-zinc-700">
                {selectedServiceModal.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-tactical-green font-bold">✓</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-zinc-200 mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/contacto"
                className="flex-1 text-center px-6 py-3 bg-tactical-green hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow"
              >
                Cotizar este Servicio
              </Link>
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="px-6 py-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
