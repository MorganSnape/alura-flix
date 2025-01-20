import FirstSection from "../components/FirstSection";
import CardsContainer from "../components/CardsContainer";
import FormularioEditarCard from "../components/FormularioEditarCard";

import useGetAllVideos from "../hooks/useGetAllVideos";
import { VIDEO_CATEOGRIAS } from "../libs";

export default function MainPage() {
  const { videos, isPending } = useGetAllVideos();

  let videosFrontend = [];
  let videosBackend = [];
  let videosInnovacionGestion = [];

  if (!isPending) {
    videosFrontend = videos[VIDEO_CATEOGRIAS.Frontend];
    videosBackend = videos[VIDEO_CATEOGRIAS.Backend];
    videosInnovacionGestion = videos[VIDEO_CATEOGRIAS.InnovacionGestion];
  }

  return (
    <>
      <FirstSection />
      <div className="bg-black ">
        <div className="flex flex-col justify-center gap-28 pt-20">
          {videosFrontend.length > 0 && (
            <CardsContainer
              categoria={VIDEO_CATEOGRIAS.Frontend}
              videos={videosFrontend}
            />
          )}
          {videosBackend.length > 0 && (
            <CardsContainer
              categoria={VIDEO_CATEOGRIAS.Backend}
              videos={videosBackend}
            />
          )}
          {videosInnovacionGestion.length > 0 && (
            <CardsContainer
              categoria={VIDEO_CATEOGRIAS.InnovacionGestion}
              videos={videosInnovacionGestion}
            />
          )}
        </div>
        <FormularioEditarCard />
      </div>
    </>
  );
}
