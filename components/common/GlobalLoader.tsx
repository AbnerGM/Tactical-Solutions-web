    "use client";

    import { useState, useEffect } from "react";
    import { usePathname, useSearchParams } from "next/navigation";
    import Image from "next/image";

    export default function GlobalLoader() {
        const [isLoading, setIsLoading] = useState(true);
        const [isFading, setIsFading] = useState(false);
        const pathname = usePathname();
        const searchParams = useSearchParams();

        // 1. Carga inicial real conectada al navegador
        useEffect(() => {
            const handleLoad = () => {
                setIsFading(true);
                setTimeout(() => {
                    setIsLoading(false);
                }, 500);
            };

            // Si la página ya terminó de descargar recursos e imágenes, se quita
            if (document.readyState === "complete") {
                handleLoad();
            } else {
                window.addEventListener("load", handleLoad);
                return () => window.removeEventListener("load", handleLoad);
            }
        }, []);

        // 2. Transiciones de ruta reales (espera a que el DOM e imágenes de la nueva vista estén listas)
        useEffect(() => {
            setIsLoading(true);
            setIsFading(false);

            let isMounted = true;

            // Verificamos de forma dinámica el estado de carga de la nueva ruta
            const checkReadyState = () => {
                if (document.readyState === "complete") {
                    if (isMounted) {
                        setIsFading(true);
                        setTimeout(() => {
                            if (isMounted) setIsLoading(false);
                        }, 500);
                    }
                } else {
                    window.addEventListener("load", checkReadyState, { once: true });
                }
            };

            // Damos un pequeño margen para que Next.js empiece a renderizar la nueva página
            const timer = setTimeout(() => {
                checkReadyState();
            }, 150);

            return () => {
                isMounted = false;
                clearTimeout(timer);
            };
        }, [pathname, searchParams]);

        if (!isLoading) return null;

        return (
            <div
                className={`fixed inset-0 z-[9999] bg-white flex items-center justify-center transition-opacity duration-500 ${
                    isFading ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
            >
                <div className="relative flex items-center justify-center">
                    {/* Anillo de luz brillante con efecto de haz que circula alrededor */}
                    <div className="absolute w-36 h-36 md:w-44 md:h-44 rounded-full animate-spin [background:conic-gradient(from_0deg,transparent_60%,var(--color-tactical-green))] p-[3px] shadow-[0_0_20px_rgba(0,0,0,0.05)]">
                        <div className="w-full h-full bg-white rounded-full"></div>
                    </div>

                    {/* Ícono central con tamaño incrementado y animación de escala */}
                    <div className="relative w-28 h-28 md:w-36 md:h-36 flex items-center justify-center">
                        <Image
                            src="/images/icons/icon.ico"
                            alt="Tactical Solutions"
                            width={160}
                            height={80}
                            className="object-contain max-h-20 w-auto animate-scale-pulse"
                            priority
                        />
                    </div>
                </div>

                {/* Definición de la animación CSS personalizada */}
                <style jsx global>{`
                    @keyframes scale-pulse {
                        0%, 100% {
                            transform: scale(1);
                        }
                        50% {
                            transform: scale(1.15);
                        }
                    }
                    .animate-scale-pulse {
                        animation: scale-pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                    }
                `}</style>
            </div>
        );
    }