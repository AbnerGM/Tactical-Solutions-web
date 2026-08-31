"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        
        {/* Logo corporativo en imagen a la izquierda */}
        <Link href="/" className="flex items-center">
          <Image src="/images/inicio/logo-tactical.png" alt="Logo de tactical solutions" width={120} height={50} className="h-14 w-auto object-contain" priority/>
        </Link>

        {/* Links de navegación principales en pantallas grandes */}
        <ul className="hidden lg:flex items-center gap-8 font-bold text-lg xl:text-xl">
          <li>
            <Link 
              href="/" 
              className={`relative py-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-tactical-green after:transition-all after:duration-300 ${
                isActive("/") ? "text-tactical-green after:w-full" : "text-zinc-700 hover:text-tactical-green after:w-0 hover:after:w-full"
              }`}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link 
              href="/nosotros" 
              className={`relative py-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-tactical-green after:transition-all after:duration-300 ${
                isActive("/nosotros") ? "text-tactical-green after:w-full" : "text-zinc-700 hover:text-tactical-green after:w-0 hover:after:w-full"
              }`}
            >
              Nosotros
            </Link>
          </li>
          <li>
            <Link 
              href="/servicios" 
              className={`relative py-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-tactical-green after:transition-all after:duration-300 ${
                isActive("/servicios") ? "text-tactical-green after:w-full" : "text-zinc-700 hover:text-tactical-green after:w-0 hover:after:w-full"
              }`}
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link 
              href="/proyectos" 
              className={`relative py-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-tactical-green after:transition-all after:duration-300 ${
                isActive("/proyectos") ? "text-tactical-green after:w-full" : "text-zinc-700 hover:text-tactical-green after:w-0 hover:after:w-full"
              }`}
            >
              Proyectos
            </Link>
          </li>
          <li>
            <Link 
              href="/contacto" 
              className={`relative py-1 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-tactical-green after:transition-all after:duration-300 ${
                isActive("/contacto") ? "text-tactical-green after:w-full" : "text-zinc-700 hover:text-tactical-green after:w-0 hover:after:w-full"
              }`}
            >
              Contactanos
            </Link>
          </li>
        </ul>

        {/* Botón de galería a la derecha con un poco más de ancho */}
        <div className="hidden lg:block">
          <Link
            href="/galeria"
            className={`px-12 py-3 font-bold text-base transition-colors shadow-lg shadow-tactical-green/20 ${
              isActive("/galeria") ? "bg-emerald-900 text-white" : "bg-tactical-green text-white hover:bg-emerald-800"
            }`}
          >
            Galería
          </Link>
        </div>

        {/* Botón de Menú Hamburguesa para Celular y Tablets */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2.5 rounded-xl text-zinc-700 hover:bg-zinc-100 transition-colors focus:outline-none"
          aria-label="Abrir menú"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Menú desplegable para Celulares y Tablets */}
      <div
        className={`lg:hidden bg-white border-b border-zinc-200 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100 px-6 py-8" : "max-h-0 opacity-0 px-6 py-0 border-b-0"
        }`}
      >
        <div className="space-y-6">
          <ul className="flex flex-col space-y-4 font-semibold text-lg">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`block py-2 transition-colors ${
                  isActive("/") ? "text-tactical-green font-bold" : "text-zinc-700 hover:text-tactical-green"
                }`}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/nosotros"
                onClick={() => setIsOpen(false)}
                className={`block py-2 transition-colors ${
                  isActive("/nosotros") ? "text-tactical-green font-bold" : "text-zinc-700 hover:text-tactical-green"
                }`}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/servicios"
                onClick={() => setIsOpen(false)}
                className={`block py-2 transition-colors ${
                  isActive("/servicios") ? "text-tactical-green font-bold" : "text-zinc-700 hover:text-tactical-green"
                }`}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/proyectos"
                onClick={() => setIsOpen(false)}
                className={`block py-2 transition-colors ${
                  isActive("/proyectos") ? "text-tactical-green font-bold" : "text-zinc-700 hover:text-tactical-green"
                }`}
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                onClick={() => setIsOpen(false)}
                className={`block py-2 transition-colors ${
                  isActive("/contacto") ? "text-tactical-green font-bold" : "text-zinc-700 hover:text-tactical-green"
                }`}
              >
                Contactanos
              </Link>
            </li>
          </ul>

          <div className="pt-4 border-t border-zinc-100">
            <Link
              href="/galeria"
              onClick={() => setIsOpen(false)}
              className={`block w-full text-center py-3.5 font-bold text-base transition-colors shadow-md ${
                isActive("/galeria") ? "bg-emerald-900 text-white" : "bg-tactical-green text-white hover:bg-emerald-800"
              }`}
            >
              Galería
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}