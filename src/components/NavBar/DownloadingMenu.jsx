import { HiOutlineDownload } from "react-icons/hi";
import { useDonwload } from "../../context/downloadContext";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DownloadingMenu = () => {
  const { downloadingFiles } = useDonwload();

  if (downloadingFiles.length > 0)
    return (
      <div className="group mx-8">
        <div className="group-hover:scale-100 space-y-3 max-h-96 group-hover:opacity-100 duration-300 p-3 transition-all text-stone-300 scale-0 opacity-0 absolute w-80 z-20 overflow-y-auto right-8 bg-slate-900 rounded-tr-3xl rounded-b-lg rounded-tl-lg">
          <h2 className="text-xl font-light">Downloading...</h2>
          {downloadingFiles.map((item) => (
            <div
              key={item.videoId}
              className="w-full flex flex-row space-x-1 justify-between items-center"
            >
              <div className="flex flex-row space-x-1">
                <img className="h-9 rounded-lg" src={item.thumbnail} alt="" />
                <p className="text-xs line-clamp-2">{item.title}</p>
              </div>
              <div className="h-8 aspect-square">
                <CircularProgressbar
                  minValue={0}
                  maxValue={100}
                  value={item.progress}
                  text={`${item.progress}%`}
                  styles={buildStyles({
                    textSize: 30,
                    strokeLinecap: "rounded",
                  })}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="relative flex cursor-pointer items-center justify-center">
          <div className="transition-colors z-40 absolute bg-slate-900/70 justify-center animate-animate items-center flex text-sky-300 border border-secondary aspect-square w-10 rounded-full">
            <HiOutlineDownload className="text-xl" />
          </div>
          <div className="bg-sky-800 flex z-30 justify-center items-center aspect-square w-10 text-secondary border border-sky-300 rounded-full">
            <HiOutlineDownload className="text-xl" />
          </div>
        </div>
      </div>
    );

  return <div className="mx-8 md:mx-0 md:w-40" />;
};

export default DownloadingMenu;
