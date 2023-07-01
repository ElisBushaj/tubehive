import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Progress from "./Progress";
import { BsDownload } from "react-icons/bs";
import download from "downloadjs";
import axios from "axios";

export default function Results({ videos, setVideos, setSearch }) {
  const [downloading, setDownloading] = useState();
  const [progress, setProgress] = useState();

  const downloadFile = async (videoId) => {
    setDownloading(true);
    try {
      const res = await axios.get(
        `http://localhost:4000/download/audio/${videoId}`,
        {
          responseType: "blob",
          onDownloadProgress: (event) => {
            const progress = Math.round((event.loaded / event.total) * 100);
            setProgress(progress);
          },
        }
      );
      download(res.data, videoId, res.headers["Content-Type"]);
      setProgress(0);
    } catch (error) {
      console.log(error);
    }
    setDownloading(false);
  };
  const reset = () => {
    setVideos();
    setSearch("");
  };

  if (downloading) {
    return <Progress progress={progress} />;
  }

  return (
    <div className="flex flex-col w-full h-full justify-center items-center space-y-5">
      {videos.map((video) => (
        <div
          key={video.videoId}
          className="flex rounded-r-lg rounded-l-2xl space-x-4 flex-row text-stone-400 overflow-hidden 3 w-4/5 h-48 cursor-default"
        >
          <div className="aspect-[16/9] h-full relative flex">
            <img
              src={video.thumbnails[video.thumbnails.length - 1].url}
              className="w-full h-full object-contain rounded-2xl img-noselect"
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col space-y-1">
            <h2 className="text-white font-medium text-xl">{video.title}</h2>
            <h3 className="text-sm">{video.viewCount}</h3>
            <div className="flex flex-row items-center space-x-2">
              <img
                src={
                  video.author.thumbnails[video.author.thumbnails.length - 1]
                    .url
                }
                className="h-7 aspect-square rounded-full img-noselect"
                alt=""
              />
              <h3>{video.author.name}</h3>
              <h3>{video.author.verified}</h3>
            </div>
            <p className="line-clamp-3">{video.description}</p>
          </div>
          <button
            onClick={() => downloadFile(video.videoId)}
            className="bg-stone-800 hover:bg-stone-800/90 w-10 transition-colors rounded-r-lg justify-center items-center flex hover:text-primary"
          >
            <BsDownload className="text-xl" />
          </button>
        </div>
      ))}
    </div>
  );
}
