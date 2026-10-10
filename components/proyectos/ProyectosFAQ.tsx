"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
    id: number;
    question: string;
    answer: string;
    category: string;
}

const FAQ_DATA: FAQItem[] = [
    {
        id: 1,
        category: "MANTENIMIENTO",
        question: "¿Con qué frecuencia debo realizar el mantenimiento de mis tableros eléctricos?",
        answer: "La frecuencia depende del entorno y la criticidad del equipo. En ambientes industriales con polvo, humedad o vibraciones recomendamos inspecciones cada 3 a 6 meses. En condiciones controladas, una revisión anual puede ser suficiente. Realizamos un diagnóstico inicial gratuito para definir el plan preventivo más adecuado para su planta.",
    },
    {
        id: 2,
        category: "AUTOMATIZACIÓN",
        question: "¿Pueden automatizar un proceso que actualmente opera de forma manual?",
        answer: "Sí. Analizamos el proceso existente, definimos los parámetros de control y diseñamos la solución con PLC, HMI y sensores adecuados. El objetivo es minimizar la intervención humana, reducir errores y aumentar la productividad. Trabajamos con marcas como Siemens, Allen-Bradley y Schneider Electric.",
    },
    {
        id: 3,
        category: "TABLEROS",
        question: "¿Fabrican tableros eléctricos a medida según los requerimientos de mi planta?",
        answer: "Así es. Diseñamos y fabricamos tableros de distribución, control, fuerza motriz, MCC y CCM bajo normas IEC, NEMA y NEC, adaptados a los requerimientos eléctricos, espaciales y operativos de cada cliente. Entregamos planos as-built y certificación de pruebas.",
    },
    {
        id: 4,
        category: "PROYECTOS",
        question: "¿Trabajan en proyectos fuera de Lima o en zonas remotas?",
        answer: "Sí, contamos con experiencia en proyectos mineros, industriales y de infraestructura en diferentes regiones del Perú. Nuestro equipo se moviliza a cualquier punto del país con equipamiento propio y protocolos de seguridad adaptados a cada zona de trabajo.",
    },
    {
        id: 5,
        category: "TIEMPOS",
        question: "¿Cuánto tiempo tarda la ejecución de un proyecto de automatización?",
        answer: "El tiempo varía según el alcance. Un proyecto de automatización simple puede ejecutarse en 2 a 4 semanas. Proyectos integrales de planta pueden tomar entre 2 y 6 meses. Siempre elaboramos un cronograma detallado con hitos y entregables claros antes de iniciar.",
    },
    {
        id: 6,
        category: "SEGURIDAD",
        question: "¿Sus servicios cumplen con las normas de seguridad eléctrica y minera?",
        answer: "Todos nuestros trabajos se ejecutan bajo las normativas vigentes: Código Nacional de Electricidad, normas IEC 60204, OSHA y estándares de seguridad minera del MEM. Nuestro personal cuenta con certificaciones IPERC, PETAR, trabajos en altura y espacios confinados.",
    },
    {
        id: 7,
        category: "AUTOMATIZACIÓN",
        question: "¿Ofrecen soporte técnico y capacitación al personal de la planta?",
        answer: "Sí. Al finalizar cada proyecto entregamos manuales operativos, capacitamos al personal técnico del cliente y ofrecemos soporte post-instalación. También contamos con planes de soporte remoto y presencial para atender fallas o ajustes de parámetros en el menor tiempo posible.",
    },
    {
        id: 8,
        category: "COTIZACIÓN",
        question: "¿Cómo puedo solicitar una cotización y cuánto tiempo demoran en responder?",
        answer: "Puede contactarnos vía WhatsApp, formulario web o correo electrónico. En menos de 24 horas un ingeniero especialista se comunicará para entender su requerimiento. Las propuestas técnico-económicas se entregan en un plazo de 2 a 5 días hábiles dependiendo de la complejidad.",
    },
    {
        id: 9,
        category: "MANTENIMIENTO",
        question: "¿Qué incluye un contrato de mantenimiento preventivo?",
        answer: "Nuestros contratos preventivos incluyen: inspecciones programadas, termografía infrarroja, medición de aislamiento y continuidad, limpieza de contactos y buses, ajuste de conexiones, reporte técnico con evidencias fotográficas y recomendaciones. También priorizamos la atención de emergencia para clientes bajo contrato.",
    },
    {
        id: 10,
        category: "TABLEROS",
        question: "¿Pueden intervenir tableros o equipos de otras marcas que no instalaron ustedes?",
        answer: "Sí, tenemos experiencia en diagnóstico, reparación y actualización de tableros y sistemas de automatización independientemente de quién los instaló. Realizamos un levantamiento de información previo para garantizar compatibilidad y seguridad en la intervención.",
    },
];

const CATEGORIES = ["TODOS", "MANTENIMIENTO", "AUTOMATIZACIÓN", "TABLEROS", "PROYECTOS", "SEGURIDAD", "COTIZACIÓN", "TIEMPOS"];

export default function ServiciosFAQ() {
    const [openId, setOpenId] = useState<number | null>(1);
    const [activeCategory, setActiveCategory] = useState("TODOS");

    const filtered = activeCategory === "TODOS"
        ? FAQ_DATA
        : FAQ_DATA.filter((f) => f.category === activeCategory);

    const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

    return (
        <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">

                {/* Encabezado */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-tactical-green/10 border border-tactical-green/30 text-tactical-green font-mono text-xs uppercase tracking-widest mb-3 font-semibold">
                        Soporte & Consultas
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
                        PREGUNTAS FRECUENTES
                    </h2>
                    <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                        Resolvemos las dudas más comunes de nuestros clientes industriales. Si no encuentras tu respuesta,{" "}
                        <Link href="/contacto" className="text-tactical-green font-semibold hover:underline">
                            contáctanos directamente
                        </Link>.
                    </p>
                </div>

                {/* Filtros por categoría */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest border transition-all duration-200 font-mono cursor-pointer ${
                                activeCategory === cat
                                    ? "bg-tactical-green text-white border-tactical-green"
                                    : "bg-white text-slate-600 border-slate-300 hover:border-tactical-green hover:text-tactical-green"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

                    {/* Acordeón */}
                    <div className="lg:col-span-8 space-y-3">
                        {filtered.map((item) => {
                            const isOpen = openId === item.id;
                            return (
                                <div
                                    key={item.id}
                                    className={`border transition-all duration-300 ${
                                        isOpen
                                            ? "border-tactical-green shadow-md"
                                            : "border-slate-200 hover:border-slate-300 bg-white"
                                    }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggle(item.id)}
                                        className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left bg-white group cursor-pointer"
                                        aria-expanded={isOpen}
                                    >
                                        <div className="flex items-start gap-3 flex-1 min-w-0">
                                            {/* Número */}
                                            <span className={`shrink-0 w-7 h-7 flex items-center justify-center text-[10px] font-black font-mono border mt-0.5 transition-colors ${
                                                isOpen
                                                    ? "bg-tactical-green text-white border-tactical-green"
                                                    : "bg-slate-100 text-slate-500 border-slate-200 group-hover:border-tactical-green group-hover:text-tactical-green"
                                            }`}>
                                                {String(item.id).padStart(2, "0")}
                                            </span>
                                            <div className="min-w-0">
                                                <span className={`block text-[9px] font-bold font-mono uppercase tracking-widest mb-0.5 ${
                                                    isOpen ? "text-tactical-green" : "text-slate-400"
                                                }`}>
                                                    {item.category}
                                                </span>
                                                <span className={`block text-sm font-extrabold uppercase leading-snug transition-colors ${
                                                    isOpen ? "text-tactical-green" : "text-slate-800 group-hover:text-tactical-green"
                                                }`}>
                                                    {item.question}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Ícono +/x */}
                                        <span className={`shrink-0 w-7 h-7 flex items-center justify-center border text-lg font-black transition-all duration-300 mt-0.5 ${
                                            isOpen
                                                ? "bg-tactical-green text-white border-tactical-green rotate-45"
                                                : "bg-white text-slate-400 border-slate-200 group-hover:border-tactical-green group-hover:text-tactical-green"
                                        }`}>
                                            +
                                        </span>
                                    </button>

                                    {/* Respuesta con animación */}
                                    <div
                                        className="overflow-hidden transition-all duration-300 ease-in-out"
                                        style={{
                                            maxHeight: isOpen ? "600px" : "0px",
                                            opacity: isOpen ? 1 : 0,
                                            transition: "max-height 0.35s ease, opacity 0.25s ease",
                                        }}
                                    >
                                        <div className="px-5 pb-5 pt-2 border-t border-slate-100 bg-white">
                                            <div className="flex gap-3 ml-10">
                                                <div className="shrink-0 w-0.5 bg-tactical-green/40 rounded-full" />
                                                <p className="text-slate-600 text-sm leading-relaxed">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}

                        {filtered.length === 0 && (
                            <div className="text-center py-10 text-slate-400 text-sm font-mono border border-dashed border-slate-200">
                                No hay preguntas en esta categoría.
                            </div>
                        )}
                    </div>

                    {/* Panel lateral */}
                    <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-8">

                        {/* CTA contacto */}
                        <div className="bg-slate-900 p-6 text-white border border-slate-800">
                            <div className="w-10 h-10 bg-tactical-green flex items-center justify-center mb-4">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                            </div>
                            <h4 className="font-black text-sm uppercase tracking-tight mb-2">
                                ¿No encontraste tu respuesta?
                            </h4>
                            <p className="text-slate-400 text-xs leading-relaxed mb-4">
                                Nuestros ingenieros están disponibles para atender tu consulta de forma personalizada.
                            </p>
                            <Link
                                href="/contacto"
                                className="block w-full py-3 bg-tactical-green hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider text-center transition-colors"
                            >
                                → Hacer una Consulta
                            </Link>
                        </div>

                        {/* Stats rápidas */}
                        <div className="bg-white border border-slate-200 p-6 shadow-sm">
                            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 mb-4 border-b border-slate-100 pb-2 font-mono">
                                ¿Por qué elegirnos?
                            </h4>
                            <div className="space-y-4">
                                {[
                                    { num: "+10", label: "Años de experiencia industrial" },
                                    { num: "100%", label: "Proyectos entregados a tiempo" },
                                    { num: "24h", label: "Tiempo de respuesta garantizado" },
                                    { num: "+50", label: "Clientes en minería e industria" },
                                ].map((s, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <span className="text-2xl font-black text-tactical-green font-mono shrink-0 w-14 text-right">
                                            {s.num}
                                        </span>
                                        <span className="text-xs text-slate-600 leading-snug">
                                            {s.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Estándares */}
                        <div className="bg-tactical-green/5 border border-tactical-green/20 p-5">
                            <h4 className="text-xs font-black uppercase tracking-wider text-tactical-green mb-3 font-mono">
                                Estándares que aplicamos:
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {["IEC 60204", "NEMA 250", "NEC", "OSHA", "ISO 9001", "MEM Perú"].map((std) => (
                                    <span
                                        key={std}
                                        className="px-2 py-1 bg-white border border-tactical-green/30 text-tactical-green text-[10px] font-bold font-mono uppercase"
                                    >
                                        {std}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
