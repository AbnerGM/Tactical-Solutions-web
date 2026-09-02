import FormularioContacto from "@/components/common/FormularioContacto";
import HeroSlider from "@/components/home/heroSlider";
import IndustrialStatsBanner from "@/components/home/IndustrialStatsBanner";


import StatsOverview from "@/components/home/StatsOverview";
import UbicacionEmpresaSection from "@/components/home/UbicacionEmpresaSection";
export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Llamamos al componente HeroSlider creado */}
      <HeroSlider />
      <StatsOverview />
      <IndustrialStatsBanner/>
      <UbicacionEmpresaSection/>
      <FormularioContacto/>
      {/* Aquí abajo irán los siguientes componentes de la home cuando los crees */}
    </main>
  );
}