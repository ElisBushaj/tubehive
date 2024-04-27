import axios from "axios";
import { createContext, useContext, useState } from "react";

const DownloadContext = createContext();

export const useDownload = () => useContext(DownloadContext);

export const DownloadProvider = ({ children }) => {
	const [downloadingFiles, setDownloadingFiles] = useState([]);

	const downloadFile = async (video) => {
		const isFileDownloading = downloadingFiles.some(
			(file) => file.videoId === video.videoId
		);
		if (isFileDownloading) return;

		setDownloadingFiles((prev) => {
			const arrAfterRemove = prev.filter(
				(item) => item.videoId !== video.videoId
			);
			const merged = [...arrAfterRemove, { ...video }];
			return merged;
		});

		try {
			const response = await axios.get(
				`${import.meta.env.VITE_API}/download/audio/${video.videoId}`,
				{
					responseType: "blob",
					onDownloadProgress: (event) => {
						const progress = Math.round(
							(event.loaded / event.total) * 100
						);
						console.log(progress);
						setDownloadingFiles((prev) => {
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

			const downloadUrl = window.URL.createObjectURL(
				new Blob([response.data])
			);
			const link = document.createElement("a");
			link.href = downloadUrl;
			link.setAttribute("download", `${video.title}.mp3`);
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			window.URL.revokeObjectURL(downloadUrl);
		} catch (error) {
			console.log(error);
		} finally {
			setDownloadingFiles((prev) => {
				const removedVideo = prev.filter(
					(item) => item.videoId !== video.videoId
				);
				return removedVideo;
			});
		}
	};

	const value = {
		downloadingFiles,
		setdownloadingFiles: setDownloadingFiles,
		downloadFile,
	};
	return (
		<DownloadContext.Provider value={value}>
			{children}
		</DownloadContext.Provider>
	);
};
