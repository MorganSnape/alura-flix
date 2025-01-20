import { categoriasColorMapper } from "../libs";

export default function TagTitle({ text, categoria }) {
  
  let color = categoriasColorMapper[categoria];

  console.log(categoriasColorMapper);
  return (
    <span
      className="text-white rounded-md font-bold text-xl py-4 px-12 text-center"
      style={{ backgroundColor: color }}
    >
      {text}
    </span>
  );
}
