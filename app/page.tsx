import HeroSlider from "@/components/home/heroSlider";
import StatsOverview from "@/components/home/StatsOverview";
export default function HomePage() {
  return (
    <main className="flex-1">
      {/* Llamamos al componente HeroSlider creado */}
      <HeroSlider />
      <StatsOverview />
      {/* Aquí abajo irán los siguientes componentes de la home cuando los crees */}
    </main>
  );
}