import ProyectosHero from "./ProyectosHero";
import ProyectosGrid from "./ProyectosGrid";
import ProyectosFAQ from "./ProyectosFAQ";

export default function ProyectosContent() {
    return (
        <div className="bg-white min-h-screen text-zinc-800">
            {/* 1. Banner Principal */}
            <ProyectosHero />

            {/* 2. Preguntas Frecuentes */}
            <ProyectosFAQ />

            {/* 3. Grilla de Proyectos, Estadísticas y CTA */}
            <ProyectosGrid />
        </div>
    );
}
