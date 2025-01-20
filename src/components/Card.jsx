import ButtonCards from "./ButtonCards";
import { categoriasColorMapper } from "../libs";

export default function Card({ video }) {
  const titulo = video.titulo;
  const imagen = video.imagen;
  const videoUrl = video.video;
  const categoria = video.categoria;

  const color = categoriasColorMapper[categoria];

  console.log("colorMapper", categoriasColorMapper);

  return (
    <article
      className="flex flex-col items-center w-96 rounded-2xl overflow-hidden border-4 cursor-pointer"
      style={{ borderColor: color }}
    >
      <a href={videoUrl} target="_blank" rel="noreferrer">
        <img
          src={imagen}
          alt={`Imagen de ${titulo}`}
          className="object-cover w-full h-full object-center "
        />
      </a>
      <div
        className=" w-full flex flex-row items-center border-t-4"
        style={{ borderColor: color }}
      >
        <ButtonCards text="BORRAR" />
        <ButtonCards text="EDITAR" />
      </div>
    </article>
  );
}
