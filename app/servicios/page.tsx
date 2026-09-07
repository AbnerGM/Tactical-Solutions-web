import type { Metadata } from "next";
import ServiciosContent from "@/components/common/sevicios/ServiciosContent";

export const metadata: Metadata = {
  title: "Servicios Especializados en Automatización y Tableros | Tactical Solutions",
  description: "Descubre nuestra gama de servicios industriales: montaje e integración de tableros eléctricos, programación PLC, mantenimiento electromecánico y consultoría técnica.",
};

export default function ServiciosPage() {
  return (
    <main className="flex-1">
      <ServiciosContent />
    </main>
  );
}
