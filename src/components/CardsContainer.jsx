import { categoriasTituloMapper } from "../libs";
import Card from "./Card";
import TagTitle from "./TagTitle";

export default function CardsContainer({ categoria, videos }) {
  const titulo = categoriasTituloMapper[categoria];

  return (
    <section className="flex flex-col  gap-x-4 justify-start gap-8 px-28 w-full">
      <div>
        <TagTitle text={titulo} categoria={categoria} />
      </div>
      <div className="flex flex-row items-center gap-8 flex-wrap">
        {videos.map((video) => (
          <Card key={video.id} video={video} />
          // <Card key={video.id} />
        ))}
      </div>
    </section>
  );
}
