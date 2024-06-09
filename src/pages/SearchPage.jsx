import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { BsDownload } from "react-icons/bs";
import Loading from "../components/Loading";

export default function SearchPage() {
	const [searchParams] = useSearchParams();
	const search = searchParams.get("q");

	const [loading, setLoading] = useState(false);
	const [videos, setVideos] = useState([]);

	const downloadMp3 = async (video) => {
		try {
			const downloadUrl = `${import.meta.env.VITE_API}/download/audio/${
				video.videoId
			}`;

			const link = document.createElement("a");
			link.href = downloadUrl;
			link.setAttribute("download", `${video.title}.mp3`);
			document.body.appendChild(link);
			link.click();

			document.body.removeChild(link);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		const searchVideos = async () => {
			setLoading(true);
			try {
				const res = await axios.post(
					`${import.meta.env.VITE_API}/search`,
					{
						search_query: search,
					}
				);
				setVideos(res.data);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};

		searchVideos();
	}, [search]);

	if (loading) return <Loading />;

	return (
		<div className="flex flex-col w-full h-full justify-center items-center space-y-8 xs:space-y-5 px-6">
			{videos && videos.length > 0 ? (
				videos.map((video) => (
					<div
						key={video.videoId}
						className="flex rounded-r-lg max-w-6xl rounded-l-2xl space-y-2 xs:space-y-0 xs:space-x-4 flex-col xs:flex-row text-stone-400 w-full xs:h-48 cursor-default"
					>
						<div className="w-full xs:w-auto shrink-0 xs:h-[70%] sm:h-[80%] md:h-[90%] lg:h-full aspect-video rounded-2xl overflow-hidden relative flex">
							<img
								src={video.thumbnail}
								className="w-full h-full object-cover img-noselect"
								alt=""
							/>
							<h5 className="bg-black/75 text-xs font-semibold text-white rounded py-0.5 absolute right-2 bottom-1.5 px-2">
								{video.duration}
							</h5>
						</div>
						<div className="flex w-full flex-col space-y-1">
							<h2 className="text-white mt-1 font-medium text-base md:text-lg lg:text-xl">
								{video.title}
							</h2>
							<div className="items-center w-full xs:items-start justify-end space-x-1 xs:space-x-0 space-y-0 xs:space-y-1 flex flex-row-reverse xs:flex-col">
								<div className="flex text-sm flex-row space-x-1 w-auto xs:w-full">
									<h3>{video.viewCount}</h3>
									<h3>•</h3>
									<h3> {video.published}</h3>
								</div>

								<div className="flex flex-row items-center space-x-2 w-auto xs:w-full">
									<img
										src={video.author.profile}
										className="h-7 aspect-square rounded-full img-noselect"
										alt=""
									/>
									<h3>{video.author.name}</h3>
									<h3>{video.author.verified}</h3>
								</div>
							</div>
							<p className="hidden xs:block break-all text-sm line-clamp-2 lg:text-base">
								{video.description}
							</p>
						</div>
						<button
							onClick={() => downloadMp3(video)}
							className="bg-gray-800 hover:bg-gray-800/90 w-full xs:w-16 h-8 xs:h-auto transition-colors rounded-b xs:rounded-b-none xs:rounded-r-lg justify-center items-center flex hover:text-primary"
						>
							<BsDownload className="text-xl" />
						</button>
					</div>
				))
			) : (
				<h1 className="text-2xl text-white font-thin">
					No videos found
				</h1>
			)}
		</div>
	);
}
