import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <main className="min-h-[80vh] bg-white flex flex-col items-center justify-between px-4 text-center py-12 overflow-x-hidden">
            <div></div>

            <div className="relative flex flex-col items-center w-full max-w-md mx-auto px-2">
                {/* Ícono central */}
                <div className="relative w-32 h-32 md:w-44 md:h-44 flex items-center justify-center -mb-2">
                    <Image
                        src="/images/icons/icon.ico"
                        alt="Tactical Solutions"
                        width={200}
                        height={100}
                        className="object-contain max-h-28 w-auto"
                        priority
                    />
                </div>

                {/* Código de error y textos con adaptación responsiva estricta */}
                <span className="text-xs font-semibold tracking-widest text-[var(--color-tactical-green)] uppercase mb-2">
                    404
                </span>
                
                <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-zinc-900 tracking-tight mb-2 w-full break-words">
                    PÁGINA NO ENCONTRADA
                </h1>

                <p className="text-sm md:text-base text-zinc-500 mb-6 leading-relaxed max-w-sm">
                    Lo sentimos, la ruta que estás buscando no existe, fue movida o la dirección es incorrecta.
                </p>

                {/* Botón usando la variable nativa de Tailwind v4 directamente */}
                <Link
                    href="/"
                    className="inline-flex items-center justify-center px-8 py-3 bg-zinc-900 text-white font-medium text-sm hover:bg-[var(--color-tactical-green)] transition-all duration-300 shadow-sm"
                >
                    Volver al inicio
                </Link>
            </div>

            {/* Espaciador inferior */}
            <div className="w-full h-8"></div>
        </main>
    );
}