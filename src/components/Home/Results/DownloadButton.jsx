import { useEffect, useState } from "react";
import { useDonwload } from "../../../context/downloadContext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { BsDownload } from "react-icons/bs";

const DownloadButton = ({ video }) => {
  const { downloadFile, downloadingFiles } = useDonwload();
  const [downloading, setdownloading] = useState();

  useEffect(() => {
    const isDownloading = downloadingFiles.find(
      (item) => item.videoId === video.videoId
    );
    setdownloading(isDownloading);
  }, [downloadingFiles]);

  if (downloading) {
    return (
      <div className="flex w-full xs:h-full xs:w-10 justify-center items-center">
        <div className="w-10 h-10 ">
          <CircularProgressbar
            minValue={0}
            maxValue={100}
            value={downloading.progress}
            text={`${downloading.progress}%`}
            styles={buildStyles({
              textSize: 30,
              strokeLinecap: "rounded",
            })}
          />
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={() =>
        downloadFile({
          thumbnail: video.thumbnail,
          videoId: video.videoId,
          title: video.title,
          progress: 0,
        })
      }
      className="bg-gray-800 hover:bg-gray-800/90 w-full xs:w-10 h-8 xs:h-auto transition-colors rounded-b xs:rounded-b-none xs:rounded-r-lg justify-center items-center flex hover:text-primary"
    >
      <BsDownload className="text-xl" />
    </button>
  );
};

export default DownloadButton;
