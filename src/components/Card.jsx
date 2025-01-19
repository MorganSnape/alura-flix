import { Link } from "react-router";
import ButtonCards from "./ButtonCards";

export default function Card() {
  return (
    <article className="flex flex-col items-center w-96 rounded-2xl overflow-hidden border-4 border-[#6BD1FF] cursor-pointer">
      <Link to="/">
        <img src="/images/img-card.png" alt="Imagen de perfil " className="object-cover w-full h-full object-center "/>
      </Link>
      <div className=" w-full flex flex-row items-center  border-t-4 border-[#6BD1FF]">
       <ButtonCards text="BORRAR" />
       <ButtonCards text="EDITAR" />
      </div>
    </article>
  );
}
