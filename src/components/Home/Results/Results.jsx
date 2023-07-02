import { useHome } from "../../../context/homeContext";
import DownloadButton from "./DownloadButton";

export default function Results() {
  const { videos, setVideos, setSearch } = useHome();

  const reset = () => {
    setVideos();
    setSearch("");
  };

  return (
    <div className="flex flex-col w-full h-full justify-center items-center space-y-5">
      {videos.map((video) => (
        <div
          key={video.videoId}
          className="flex rounded-r-lg rounded-l-2xl space-x-4 flex-row text-stone-400 overflow-hidden 3 w-4/5 h-48 cursor-default"
        >
          <div className="aspect-[16/9] h-full relative flex">
            <img
              src={video.thumbnail}
              className="w-full h-full object-contain rounded-2xl img-noselect"
              alt=""
            />
            <h5 className="bg-black/75 text-xs font-semibold text-white rounded py-0.5 absolute right-2 bottom-1.5 px-2">
              {video.duration}
            </h5>
          </div>
          <div className="flex flex-1 flex-col space-y-1">
            <h2 className="text-white mt-1 font-medium text-xl">
              {video.title}
            </h2>
            <div className="flex text-sm flex-row space-x-1">
              <h3>{video.viewCount}</h3>
              <h3>•</h3>
              <h3> {video.published}</h3>
            </div>

            <div className="flex flex-row items-center space-x-2">
              <img
                src={video.author.profile}
                className="h-7 aspect-square rounded-full img-noselect"
                alt=""
              />
              <h3>{video.author.name}</h3>
              <h3>{video.author.verified}</h3>
            </div>
            <p className="line-clamp-3">{video.description}</p>
          </div>
          <DownloadButton video={video} />
        </div>
      ))}
    </div>
  );
}
