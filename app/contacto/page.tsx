import React from "react";
import FormularioContacto from "@/components/common/FormularioContacto";
import UbicacionEmpresaSection from "@/components/home/UbicacionEmpresaSection";
import BannerContacto from "@/components/contacto/BannerContacto";

export default function ContactoPage() {
  return (
    <main className="flex-1">
      <BannerContacto/>
      <FormularioContacto />
      <UbicacionEmpresaSection/>
    </main>
  );
}