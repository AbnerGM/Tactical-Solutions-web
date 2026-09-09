import React from "react";
import type { Metadata } from "next";
import FormularioContacto from "@/components/common/FormularioContacto";
import UbicacionEmpresaSection from "@/components/home/UbicacionEmpresaSection";
import BannerContacto from "@/components/contacto/BannerContacto";

export const metadata: Metadata = {
  title: "Contacto | Tactical Solutions",
  description: "Contáctanos para obtener más información sobre nuestros servicios de instalación y mantenimiento industrial.",
};


export default function ContactoPage() {
  return (
    <main className="flex-1">
      <BannerContacto/>
      <FormularioContacto />
      <UbicacionEmpresaSection/>
    </main>
  );
}