import { FeatureGrid } from "../components/home/FeatureGrid";
import { MascotasGrid } from "../components/home/MascotaGrid";
export const HomePage = () => {
  return (
    <div>
      <FeatureGrid />
      <MascotasGrid title="Nuevas Mascotas" />
      <MascotasGrid title="Integracion Reciente" />
    </div>
  );
};
