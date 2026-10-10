"use client";

import { useState } from "react";
import Link from "next/link";

interface FAQItem {
    id: number;
    category: string;
    question: string;
    answer: string;
}

const FAQ_DATA: FAQItem[] = [
    {
        id: 1,
        category: "Mantenimiento",
        question: "¿Con qué frecuencia se debe realizar el mantenimiento de tableros eléctricos en planta?",
        answer: "En plantas industriales continuas con presencia de polvo o vibración, se recomienda una inspección termográfica y ajuste dinamométrico cada 3 a 6 meses. En condiciones controladas, una revisión semestral o anual con protocolo de aislamiento dieléctrico es suficiente para asegurar la continuidad operativa."
    },
    {
        id: 2,
        category: "Automatización",
        question: "¿Es factible modernizar sistemas electromecánicos antiguos con PLCs y pantallas táctiles?",
        answer: "Sí, realizamos retrofitting y modernización de líneas existentes mediante controladores lógicos programables (Siemens S7-1200/1500, Allen-Bradley), integrando sensores de campo, variadores de frecuencia y pantallas HMI ergonómicas sin necesidad de reemplazar toda la maquinaria mecánica."
    },
    {
        id: 3,
        category: "Normativas",
        question: "¿Bajo qué normativas y protocolos se diseñan y arman los tableros?",
        answer: "Todos nuestros tableros de distribución, CCM y automatización se ensamblan bajo la norma internacional IEC 61439-1/2, Código Nacional de Electricidad (CNE) y grado de protección NEMA 4X / IP65 según el ambiente de instalación del cliente."
    },
    {
        id: 4,
        category: "Cobertura",
        question: "¿Realizan intervenciones de emergencia y proyectos fuera de Lima o en minas?",
        answer: "Sí. Contamos con cuadrillas técnicas equipadas para movilizarse a cualquier región del país, con homologaciones vigentes para ingresos a operaciones mineras (SCTR, EMO, inducción de seguridad y protocolos PETAR)."
    },
    {
        id: 5,
        category: "Garantía",
        question: "¿Qué entregables y garantías técnicas se proporcionan al finalizar un servicio?",
        answer: "Entregamos un dossier de calidad formal con certificados de calibración trazables, planos unifilares y arquitecturas en formato CAD/EPLAN, protocolos de prueba FAT/SAT firmados por ingenieros colegiados y garantía técnica post-servicio."
    }
];

export default function ServiciosFAQ() {
    const [openId, setOpenId] = useState<number | null>(1);

    const toggle = (id: number) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="py-16 md:py-20 bg-zinc-50 border-t border-zinc-200 font-sans">
            <div className="max-w-7xl mx-auto px-6">

                {/* Encabezado */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-tactical-green/10 border border-tactical-green text-tactical-green font-mono text-xs uppercase tracking-widest font-bold mb-3">
                        Consultas Frecuentes
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-black text-zinc-900 uppercase tracking-tight">
                        Preguntas Técnicas &amp; Operativas
                    </h2>
                    <p className="text-zinc-600 text-sm mt-3 leading-relaxed">
                        Respuestas directas a las consultas más habituales de jefes de planta, supervisores de mantenimiento e ingenieros de proyectos.
                    </p>
                </div>

                {/* Layout: Acordeón + Tarjeta de Contacto */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Acordeón (8 cols) */}
                    <div className="lg:col-span-8 space-y-3">
                        {FAQ_DATA.map((item) => {
                            const isOpen = openId === item.id;
                            return (
                                <div
                                    key={item.id}
                                    className={`bg-white border transition-all ${isOpen
                                        ? "border-tactical-green shadow-sm"
                                        : "border-zinc-200 hover:border-zinc-300"
                                        }`}
                                >
                                    <button
                                        type="button"
                                        onClick={() => toggle(item.id)}
                                        className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white cursor-pointer"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className={`w-8 h-8 font-mono text-xs font-black flex items-center justify-center border shrink-0 transition-colors ${isOpen
                                                ? "bg-tactical-green text-white border-tactical-green"
                                                : "bg-zinc-100 text-zinc-500 border-zinc-200"
                                                }`}>
                                                0{item.id}
                                            </span>
                                            <div>
                                                <span className="text-[10px] font-mono uppercase text-tactical-green font-bold block mb-0.5">
                                                    {item.category}
                                                </span>
                                                <span className={`text-sm font-extrabold uppercase leading-snug transition-colors ${isOpen ? "text-tactical-green" : "text-zinc-900"
                                                    }`}>
                                                    {item.question}
                                                </span>
                                            </div>
                                        </div>

                                        <span className={`w-7 h-7 rounded-full border flex items-center justify-center text-sm font-bold shrink-0 transition-all ${isOpen
                                            ? "bg-tactical-green text-white border-tactical-green rotate-45"
                                            : "bg-white text-zinc-400 border-zinc-200"
                                            }`}>
                                            +
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className="px-5 pb-5 pt-1 text-xs text-zinc-600 leading-relaxed pl-16 border-t border-zinc-100">
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Sidebar: Tarjeta de Contacto Directo (4 cols) */}
                    <div className="lg:col-span-4 sticky top-6">
                        <div className="bg-zinc-900 text-white p-6 md:p-8 border border-zinc-800 shadow-md">
                            <span className="text-[10px] font-mono font-bold text-tactical-green uppercase tracking-widest block mb-2">
                                Atención de Ingeniería
                            </span>
                            <h3 className="text-lg font-black uppercase mb-3">
                                ¿Tienes un requerimiento especial?
                            </h3>
                            <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                                Nuestros ingenieros de proyectos están listos para evaluar tus planos unifilares, especificaciones técnicas o coordinar un levantamiento de información en planta.
                            </p>
                            <Link
                                href="/contacto"
                                className="block w-full text-center py-3 bg-tactical-green hover:opacity-90 text-white text-xs font-bold uppercase tracking-wider transition-opacity shadow-sm"
                            >
                                Contactar con un Especialista →
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}