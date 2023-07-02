import { useHome } from "../../context/homeContext";
import { CiSearch } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

const Search = () => {
  const { videos, search, setSearch, searchVideos } = useHome();

  const reset = () => {
    setSearch("");
  };

  return (
    videos.length > 0 && (
      <form
        onSubmit={searchVideos}
        className="w-1/2 flex flex-row h-9 text-white border overflow-hidden border-stone-700 bg-stone-950 rounded-full"
      >
        <input
          className="flex flex-1 h-full bg-stone-950 ml-4 mr-1 placeholder:text-stone-500 outline-none"
          placeholder="Search or YouTube Url"
          type="text"
          required
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={reset}
          type="button"
          className="hover:bg-stone-800 rounded-full transition-colors duration-300"
        >
          <TfiClose className="mx-2" />
        </button>
        <button
          type="submit"
          className="bg-stone-800 flex justify-center items-center border-l border-stone-700 p-2 transition-all duration-300 hover:text-primary"
        >
          <CiSearch className="text-xl mx-3" />
        </button>
      </form>
    )
  );
};

export default Search;
