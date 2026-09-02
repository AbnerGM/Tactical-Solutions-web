import Image from "next/image";

export default function UbicacionEmpresaSection() {
  return (
    <section className="w-full py-16 bg-white text-black font-sans">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Contenedor de dos columnas: imagen a la izquierda, mapa más ancho a la derecha */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Columna 1: Imagen (ocupando 5 columnas) sin border-radius */}
          <div className="lg:col-span-5 relative w-full h-[400px] lg:h-[450px] overflow-hidden flex flex-col justify-end">
            <Image
              src="/images/inicio/prueba-direccion.jpg"
              alt="Ubicación Tactical Solutions"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            
            <div className="relative z-10 p-6 flex flex-col space-y-1">
              <span className="text-white font-bold text-base md:text-lg tracking-wide uppercase">
                UBICACIÓN TACTICAL SOLUTIONS
              </span>
              <span className="text-zinc-300 text-sm md:text-base">
                Av. Nicolás Ayllón 3570, Ate 15012
              </span>
            </div>
          </div>

          {/* Columna 2: Mapa de Google Maps (ocupando 7 columnas para que sea más ancho) sin border-radius */}
          <div className="lg:col-span-7 relative w-full h-[400px] lg:h-[450px] overflow-hidden bg-white">
            <iframe
              title="Mapa de ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.865438812345!2d-76.9554!3d-12.0436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c6d3f2b1a1a1%3A0x123456789abcdef!2sAv.+Nicol%C3%A1s+Ayll%C3%B3n+3570%2C+Ate+15012!5e0!3m2!1ses!2spe!4v1700000000000!5m2!1ses!2spe"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}