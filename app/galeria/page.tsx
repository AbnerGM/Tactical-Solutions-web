import type { Metadata } from "next";
import GaleriaPrincipal from "@/components/galeria/GaleriaContent";

export const metadata: Metadata = {
  title: "Galería de Proyectos | Tactical Solutions",
  description:
    "Conoce nuestra galería de proyectos electromecánicos, montaje de tableros de control y distribución, automatización con PLC e instalaciones industriales en campo.",
};

export default function GaleriaPage() {
  return (
    <main className="flex-1">
      <GaleriaPrincipal />
    </main>
  );
}
