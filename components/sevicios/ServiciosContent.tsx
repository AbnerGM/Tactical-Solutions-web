import ServiciosHero from "./ServiciosHero";
import ServiciosCatalogo from "./ServiciosCatalogo";
import ServiciosCasosBlog from "./ServiciosCasosBlog";
import ServiciosFAQ from "./ServiciosFAQ";

export default function ServiciosContent() {
    return (
        <div className="bg-white min-h-screen text-zinc-800">
            {/* 1. Banner Principal, KPIs y Pilares de Ingeniería Dinámicos */}
            <ServiciosHero />

            {/* 2. Catálogo Técnico de Servicios con Buscador y Especificaciones */}
            <ServiciosCatalogo />

            {/* 3. Demostraciones en Video y Casos de Éxito en Campo */}
            <ServiciosCasosBlog />

            {/* 4. Preguntas Frecuentes de Ingeniería & Consulta Directa */}
            <ServiciosFAQ />
        </div>
    );
}