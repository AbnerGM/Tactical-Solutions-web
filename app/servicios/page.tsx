import type { Metadata } from "next";
import ServiciosContent from "@/components/servicios/ServiciosContent";

export const metadata: Metadata = {
  title: "Servicios de Ingeniería y Montaje Industrial | Tactical Solutions",
  description:
    "Servicios especializados de ingeniería electromecánica, fabricación de tableros eléctricos certificados, automatización industrial con PLC y mantenimiento en planta.",
};

export default function ServiciosPage() {
  return (
    <main className="flex-1">
      <ServiciosContent />
    </main>
  );
}
