import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        
        {/* Contenido principal del footer en columnas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-zinc-800">
          
          {/* Columna 1: Logo e identidad */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <Image 
                src="/images/inicio/logo-tactical.png" 
                alt="Tactical Solutions" 
                width={120} 
                height={50} 
                className="h-10 w-auto object-contain brightness-0 invert" 
              />
            </Link>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Soluciones y proyectos electromecánicos orientados a optimizar los procesos de producción y automatización industrial.
            </p>
          </div>

          {/* Columna 2: Navegación rápida */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Secciones
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-white transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-white transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="hover:text-white transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="hover:text-white transition-colors">
                  Galería
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto directo */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Contacto
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>Lima, Perú</li>
              <li>
                <Link href="/contacto" className="hover:text-white transition-colors">
                  Escríbenos un mensaje
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Barra inferior de Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Tactical Solutions SAC. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <span>Soporte e ingeniería industrial</span>
          </div>
        </div>

      </div>
    </footer>
  );
}