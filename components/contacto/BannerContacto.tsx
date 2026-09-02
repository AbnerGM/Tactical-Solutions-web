export default function BannerContacto() {
  return (
    <div className="relative w-full h-[220px] sm:h-[280px] md:h-[310px] bg-zinc-900 flex items-center font-sans overflow-hidden">
      <div 
        className="absolute -inset-2 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80')` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-tactical-dark)] via-[var(--color-tactical-dark)]/80 to-[var(--color-tactical-dark)]/40"></div>

      <div className="relative max-w-6xl mx-auto px-6 w-full z-10">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-wider text-white">
          Contáctanos
        </h1>
        <p className="text-xs sm:text-sm md:text-base font-sans font-medium text-zinc-300 mt-2">
          ¡Obtén más información sobre nuestros servicios industriales!
        </p>
        <div className="w-16 h-1 bg-[var(--color-tactical-green)] mt-4"></div>
      </div>

      {/* Corte diagonal inferior con SVG corregido para eliminar la línea blanca en móviles */}
      <div className="absolute -bottom-[1px] left-0 right-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-8 sm:h-10 md:h-12 text-[#F9F8F6] fill-current scale-[1.02]"
        >
          <path d="M1200 0L0 120H1200V0Z"></path>
        </svg>
      </div>
    </div>
  );
}