import type { Metadata } from "next";
import FormularioContacto from "@/components/common/FormularioContacto";
import HeroSlider from "@/components/home/heroSlider";
import IndustrialStatsBanner from "@/components/home/IndustrialStatsBanner";


import StatsOverview from "@/components/home/StatsOverview";
import UbicacionEmpresaSection from "@/components/home/UbicacionEmpresaSection";

export const metadata: Metadata = {
  title: "Tactical Solutions | Soluciones y Equipamiento Industrial en Perú",
  description: "Especialistas en montaje electromecánico, continuidad operativa y equipamiento industrial de alta precisión.",
};

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Llamamos al componente HeroSlider creado */}
      <HeroSlider />
      <StatsOverview />
      <IndustrialStatsBanner/>
      <FormularioContacto/>
      <UbicacionEmpresaSection/>
      
      {/* Aquí abajo irán los siguientes componentes de la home cuando los crees */}
    </main>
  );
}