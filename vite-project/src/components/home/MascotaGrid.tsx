import type { PreparedProducts } from "../../interfaces";
import { CardMascota } from "../mascotas/CardMascota";

interface Props {
  title: string;
  mascots: PreparedProducts[];
}

export const MascotaGrid = ({ title, mascots }: Props) => {
  return (
    <div className="my-32">
      <h2 className="text-3xl font-semibold text-center mb-8 md:text-4xl lg:text-5xl">
        {title}
      </h2>

      <div className="grid grid-cols-1 gap-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {mascots.map((mascota) => (
          <CardMascota
            key={mascota.id}
            name={mascota.name}
            price={mascota.price}
            colors={mascota.colors}
            img={mascota.images[0]}
            slug={mascota.slug}
            variants={mascota.variants}
          />
        ))}
      </div>
    </div>
  );
};
