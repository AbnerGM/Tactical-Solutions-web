import type { Metadata } from "next";
import GaleriaContent from "@/components/galeria/GaleriaContent";

export const metadata = {
  title: "Galería de Proyectos e Instalaciones | Tactical Solutions",
  description: "Explora la galería de proyectos de Tactical Solutions: montaje de tableros eléctricos, automatización PLC, mantenimiento industrial y ejecuciones en campo.",
};

export default function GaleriaPage() {
  return (
    <main className="flex-1">
      <GaleriaContent />
    </main>
  );
}
