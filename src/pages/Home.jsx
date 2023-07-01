import { useState } from "react";
import Results from "../components/Results";
import Search from "../components/Search";

export default function Home() {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");

  return (
    <div className="flex w-full my-7 h-full justify-center items-center">
      {videos.length > 0 ? (
        <Results videos={videos} setVideos={setVideos} setSearch={setSearch} />
      ) : (
        <Search setVideos={setVideos} search={search} setSearch={setSearch} />
      )}
    </div>
  );
}
