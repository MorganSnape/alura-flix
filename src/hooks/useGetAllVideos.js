import { useEffect, useState } from "react";
import { VIDEO_CATEOGRIAS_LIST } from "../libs";

export default function useGetAllVideos() {
  const [videos, setVideos] = useState([]);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      const response = await fetch("http://localhost:3000/videos");
      const data = await response.json();

      const grupoVideos = {};

      const finalmente = () => {
        setVideos(grupoVideos);
        setIsPending(false);
      };

      if (!data) {
        finalmente();
        return;
      }

      for (let categoria of VIDEO_CATEOGRIAS_LIST) {
        grupoVideos[categoria] = data.filter(
          (video) => video.categoria === categoria
        );
      }

      finalmente();
    };
    fetchVideos();
  }, []);

  return { videos, isPending };
}
