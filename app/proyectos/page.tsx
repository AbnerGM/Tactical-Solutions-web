import type { Metadata } from "next";
import ProyectosContent from "@/components/proyectos/ProyectosContent";

export const metadata: Metadata = {
  title: "Proyectos Industriales Ejecutados | Tactical Solutions",
  description: "Descubre nuestro portafolio de proyectos industriales: montaje electromecánico, automatización de plantas, mantenimiento de subestaciones y más.",
};

export default function ProyectosPage() {
  return (
    <main className="flex-1">
      <ProyectosContent />
    </main>
  );
}
