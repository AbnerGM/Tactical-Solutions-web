import Link from "next/link";

export default function StatsOverview() {
  return (
    <section className="py-15 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Bloque de texto directo */}
          <div>
            
            <h2 className="text-3xl md:text-4xl font-black text-zinc-900 mt-2 tracking-tight">
              Soporte técnico y montaje electromecánico sin paralizar tu planta
            </h2>
            <p className="text-zinc-700 mt-4 text-base leading-relaxed">
              En Tactical Solutions nos enfocamos en resolver problemas críticos en campo. Desde la instalación de tableros eléctricos y sistemas de automatización hasta el mantenimiento correctivo de maquinaria industrial.
            </p>
            <p className="text-zinc-700 mt-3 text-base leading-relaxed">
              Trabajamos de la mano con la industria local para asegurar que cada equipo opere bajo los estándares de seguridad y rendimiento exigidos.
            </p>
            
            <div className="mt-8 flex items-center gap-6">
              <Link
                href="/contacto"
                className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-sm transition-colors"
              >
                Solicitar Visita Técnica
              </Link>
              <Link
                href="/proyectos"
                className="text-tactical-green font-bold text-sm hover:underline flex items-center gap-1"
              >
                Ver proyectos realizados &rarr;
              </Link>
            </div>
          </div>

          {/* Bloque visual utilizando la variable oficial bg-tactical-green */}
          <div className="bg-tactical-green text-white p-8 md:p-10 shadow-lg">
            <h3 className="text-xl font-bold mb-6 text-white border-b border-white/20 pb-3">
              Nuestra área de cobertura y acción
            </h3>
            
            <ul className="space-y-4 text-zinc-100 text-sm md:text-base">
              <li>
                <strong className="text-white">Montaje y cableado:</strong> Tableros de control y fuerza para líneas de producción.
              </li>
              <li>
                <strong className="text-white">Atención a empresas:</strong> Diagnósticos rápidos y soporte directo en plantas industriales.
              </li>
              <li>
                <strong className="text-white">Integración:</strong> Automatización de procesos mecánicos con sistemas electrónicos modernos.
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-white/20 flex justify-between items-center text-xs md:text-sm text-zinc-200">
              <span>Respuesta inmediata</span>
              <span className="font-bold text-white">Personal calificado</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}