import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0c1e15] text-zinc-300 pt-16 pb-8 border-t border-emerald-900/40 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Contenedor principal alineado uniformemente a la izquierda por columna con ancho óptimo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 items-start">
          
          {/* Columna 1: Imagen de Logo y descripción un poco más ancha */}
          <div className="lg:col-span-1.2 flex flex-col items-start space-y-4 text-left">
            <div className="w-36 h-12 relative flex items-center">
              <img 
                src="/images/inicio/logo-tactical.png" 
                alt="Logo Tactical Solutions" 
                className="max-h-full w-auto object-contain"
              />
            </div>
            <p className="text-zinc-300/80 text-xs md:text-sm leading-relaxed max-w-xs">
              Nuestra creencia tiene solicitud no cómo comodidad evidente. Arriba deleitamos .
            </p>
          </div>

          {/* Columna 2: Compañía */}
          <div className="flex flex-col items-start space-y-3 text-left">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">
              Compañía
            </h4>
            <ul className="flex flex-col space-y-2.5 text-xs md:text-sm text-zinc-300/80">
              <li>
                <Link href="/horario" className="hover:text-emerald-400 transition-colors">
                  Horario comercial
                </Link>
              </li>
              <li>
                <Link href="/devoluciones" className="hover:text-emerald-400 transition-colors">
                  Política de devoluciones
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="hover:text-emerald-400 transition-colors">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="hover:text-emerald-400 transition-colors">
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Sobre nosotros */}
          <div className="flex flex-col items-start space-y-3 text-left">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">
              Sobre nosotros
            </h4>
            <ul className="flex flex-col space-y-2.5 text-xs md:text-sm text-zinc-300/80">
              <li>
                <Link href="/nosotros" className="hover:text-emerald-400 transition-colors">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/derechos" className="hover:text-emerald-400 transition-colors">
                  Aviso de derechos de autor
                </Link>
              </li>
              <li>
                <Link href="/pagos" className="hover:text-emerald-400 transition-colors">
                  Métodos de pago
                </Link>
              </li>
              <li>
                <Link href="/informacion" className="hover:text-emerald-400 transition-colors">
                  Información
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 4: Horario laboral */}
          <div className="flex flex-col items-start space-y-3 text-left">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">
              Horario laboral
            </h4>
            <ul className="flex flex-col space-y-2.5 text-xs md:text-sm text-zinc-300/80">
              <li>
                <Link href="/terminos" className="hover:text-emerald-400 transition-colors">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="/horario" className="hover:text-emerald-400 transition-colors">
                  Horario comercial
                </Link>
              </li>
              <li>
                <Link href="/derechos" className="hover:text-emerald-400 transition-colors">
                  Aviso de derechos de autor
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="hover:text-emerald-400 transition-colors">
                  Sobre nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 5: Información de contacto */}
          <div className="flex flex-col items-start space-y-3 text-left">
            <h4 className="text-white font-bold text-sm tracking-wide uppercase">
              Información de contacto
            </h4>
            <ul className="flex flex-col space-y-3 text-xs md:text-sm text-zinc-300/80">
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">+</span>
                <span>+1-(314) 892-2600</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold">@</span>
                <span>Financialservice@mail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">#</span>
                <span>969 Pine Street, Grand Rapids, MI 49503</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Línea divisoria inferior con texto centrado */}
        <div className="border-t border-emerald-900/40 pt-6 flex justify-center text-xs text-zinc-400">
          <p>© 2026 Tactical Solutions EIRL / Todos los derechos reservados</p>
        </div>

      </div>
    </footer>
  );
}