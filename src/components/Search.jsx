import { useState } from "react";
import Logo from "./Logo";
import Loading from "./Loading";
import axios from "axios";

export default function Search({ setVideos, search, setSearch }) {
  const [loading, setLoading] = useState();

  const searchVideos = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:4000/search", {
        search_query: search,
      });
      setVideos(res.data);
    } catch (error) {
      console.error(error);
      throw new Error(error);
    }
    setLoading(false);
  };
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="w-3/4 sm:w-3/5 lg:w-2/5 flex space-y-3 flex-col justify-center items-center">
      <Logo />
      <form
        onSubmit={searchVideos}
        className="flex space-y-3 w-full flex-col text-white"
      >
        <input
          className="w-full h-9 placeholder:text-stone-400 bg-stone-800 p-2 outline-none"
          placeholder="Search or YouTube Url"
          type="text"
          required
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="bg-stone-800 p-2 rounded-sm transition-all duration-300 hover:text-primary"
        >
          Search
        </button>
      </form>
    </div>
  );
}
