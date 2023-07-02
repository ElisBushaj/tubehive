import axios from "axios";
import download from "js-file-download";

import { createContext, useContext, useState } from "react";

const DownloadContext = createContext();

export const useDonwload = () => {
  return useContext(DownloadContext);
};

export const DownloadProvider = ({ children }) => {
  const [downloadingFiles, setdownloadingFiles] = useState([]);

  const downloadFile = async (video) => {
    const isFileDownloading = downloadingFiles.some(
      (file) => file.videoId === video.videoId
    );
    if (isFileDownloading) return;

    setdownloadingFiles((prev) => {
      const arrAfterRemove = prev.filter(
        (item) => item.videoId !== video.videoId
      );
      const merged = [...arrAfterRemove, { ...video }];
      return merged;
    });
    try {
      const res = await axios.get(
        `http://localhost:4000/download/audio/${video.videoId}`,
        {
          responseType: "blob",
          onDownloadProgress: (event) => {
            const progress = Math.round((event.loaded / event.total) * 100);
            setdownloadingFiles((prev) => {
              const updatedFiles = prev.map((item) => {
                if (item.videoId === video.videoId) {
                  return { ...item, progress };
                }
                return item;
              });
              return updatedFiles;
            });
          },
        }
      );
      download(res.data, `${video.title}.mp3`);
    } catch (error) {
      console.log(error);
    } finally {
      setdownloadingFiles((prev) => {
        const removedVideo = prev.filter(
          (item) => item.videoId !== video.videoId
        );
        return removedVideo;
      });
    }
  };

  const value = {
    downloadingFiles,
    setdownloadingFiles,
    downloadFile,
  };
  return (
    <DownloadContext.Provider value={value}>
      {children}
    </DownloadContext.Provider>
  );
};
