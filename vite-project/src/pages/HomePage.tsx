import { Brands } from "../components/home/Brands";
import { FeatureGrid } from "../components/home/FeatureGrid";
import { MascotaGrid } from "../components/home/MascotaGrid";
import { popularCelulares, recentCelulares } from "../data/initialData";
import { prepareProducts } from "../helpers";

export const HomePage = () => {
  const preparedRecentProducts = prepareProducts(recentCelulares);
  const preparedPopularProducts = prepareProducts(popularCelulares);

  return (
    <div>
      <FeatureGrid />

      <MascotaGrid title="Nuevos Productos" mascots={preparedRecentProducts} />

      <MascotaGrid
        title="Productos Destacados"
        mascots={preparedPopularProducts}
      />

      <Brands />
    </div>
  );
};
