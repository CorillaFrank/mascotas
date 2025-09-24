import { CardMascota } from "../components/mascotas/CardMascota";
import { ContainerFilter } from "../components/mascotas/ContainerFilter";
import { allCelulares } from "../data/initialData";
import { prepareProducts } from "../helpers";

export const PerritosPage = () => {
  const preparedProducts = prepareProducts(allCelulares);

  return (
    <>
      <h1 className="text-5xl font-semibold text-center mb-12">Mascotas</h1>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {/* FILTROS */}
        <ContainerFilter />

        <div className="col-span-2 lg:col-span-2 xl:col-span-4 flex flex-col gap-12">
          <div className="grid grid-cols-2 gap-3 gap-y-10 xl:grid-cols-4">
            {preparedProducts.map((mascota) => (
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

          {/* TODO: Paginación */}
        </div>
      </div>
    </>
  );
};
