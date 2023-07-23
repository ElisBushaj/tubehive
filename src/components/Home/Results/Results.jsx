import { useHome } from "../../../context/homeContext";
import DownloadButton from "./DownloadButton";

export default function Results() {
  const { videos, setVideos, setSearch } = useHome();

  const reset = () => {
    setVideos();
    setSearch("");
  };

  return (
    <div className="flex flex-col w-full h-full justify-center items-center space-y-8 xs:space-y-5">
      {videos.map((video) => (
        <div
          key={video.videoId}
          className="flex rounded-r-lg rounded-l-2xl space-y-2 xs:space-y-0 xs:space-x-4 flex-col xs:flex-row text-stone-400 overflow-hidden w-[93%] xs:w-[95%] lg:w-4/5 xs:h-48 cursor-default"
        >
          <div className="w-full xs:w-auto xs:h-[70%] sm:h-[80%] md:h-[90%] lg:h-full aspect-video rounded-2xl overflow-hidden relative flex">
            <img
              src={video.thumbnail}
              className="w-full object-contain img-noselect"
              alt=""
            />
            <h5 className="bg-black/75 text-xs font-semibold text-white rounded py-0.5 absolute right-2 bottom-1.5 px-2">
              {video.duration}
            </h5>
          </div>
          <div className="flex flex-1 flex-col space-y-1">
            <h2 className="text-white mt-1 line-clamp-2 font-medium text-base md:text-lg lg:text-xl">
              {video.title}
            </h2>
            <div className="items-center xs:items-start justify-end space-x-1 xs:space-x-0 space-y-0 xs:space-y-1 flex flex-row-reverse xs:flex-col">
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
            </div>
            <p className="line-clamp-2 hidden xs:block lg:line-clamp-3 text-sm lg:text-base">
              {video.description}
            </p>
          </div>
          <DownloadButton video={video} />
        </div>
      ))}
    </div>
  );
}
