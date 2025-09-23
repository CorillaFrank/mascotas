import { CardMascota } from "../mascotas/CardMascota";

interface Props {
  title: string;
}

export const MascotasGrid = ({ title }: Props) => {
  return (
    <div className="my-32">
      <h2 className="text-3xl font-semibold text-center mb-8 md:text-4xl lg:text-5xl">
        {title}
      </h2>

      <div className="grid grid-cols-1 gap-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        <CardMascota />
      </div>
    </div>
  );
};
