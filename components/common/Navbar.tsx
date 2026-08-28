import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-tactical-dark">
          Tactical<span className="text-tactical-red">Solutions</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 font-medium text-sm text-zinc-600">
          <li>
            <Link href="/" className="hover:text-tactical-green transition-colors">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/nosotros" className="hover:text-tactical-green transition-colors">
              Nosotros
            </Link>
          </li>
          <li>
            <Link href="/servicios" className="hover:text-tactical-green transition-colors">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/proyectos" className="hover:text-tactical-green transition-colors">
              Proyectos
            </Link>
          </li>
          <li>
            <Link href="/galeria" className="hover:text-tactical-green transition-colors">
              Galería
            </Link>
          </li>
          <li>
            <Link
              href="/contacto"
              className="bg-tactical-green text-white px-4 py-2.5 rounded-lg hover:bg-emerald-800 transition-colors"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}