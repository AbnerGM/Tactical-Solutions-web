import Image from "next/image";
import Link from "next/link";

export default function ProyectosHero() {
    return (
        <section className="relative w-full h-[260px] sm:h-[320px] md:h-[360px] bg-tactical-dark text-white flex items-center font-sans overflow-hidden">
            {/* Imagen de fondo */}
            <div className="absolute -inset-4 z-0 animate-pulse transition-transform duration-1000 ease-out">
                <Image
                    src="/images/galeria/instalacion-campo.jpg"
                    alt="Proyectos industriales Tactical Solutions"
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
                {/* Badge superior */}

                <h1 className="text-3xl sm:text-4xl md:text-6xl font-sans font-black uppercase tracking-tight text-white leading-none">
                    Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">Proyectos</span>
                </h1>

                <p className="text-xs sm:text-sm md:text-base font-sans font-normal text-zinc-300 mt-3 max-w-xl leading-relaxed">
                    Conoce los proyectos más destacados que hemos ejecutado en el sector industrial: montaje, automatización, mantenimiento y más.
                </p>

                {/* Acciones */}
                <div className="flex flex-wrap items-center gap-4 mt-6">
                    <a
                        href="#proyectos-destacados"
                        className="px-6 py-3 bg-zinc-900/80 hover:bg-zinc-800 text-white font-sans font-bold text-xs uppercase tracking-wider transition-all border border-zinc-700/80 hover:border-zinc-500 shadow-lg hover:shadow-zinc-900/50 backdrop-blur-sm"
                    >
                        Ver Proyectos
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
    );
}
