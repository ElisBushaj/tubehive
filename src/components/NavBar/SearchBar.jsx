import { CiSearch } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import { useLocation, useSearchParams } from "react-router-dom";
import { useState } from "react";

const SearchBar = () => {
	const location = useLocation();
	const [searchParams, setSearchParams] = useSearchParams();
	const trimmedPreviousSearch = searchParams.get("q")?.trim();

	const [search, setSearch] = useState(trimmedPreviousSearch || "");

	const searchVideos = (e) => {
		e.preventDefault();
		const trimmedSearch = search.trim();
		if (trimmedSearch.length === 0) return;
		if (trimmedSearch === trimmedPreviousSearch) return;

		setSearchParams({ q: search });
	};

	const clearSearch = () => {
		setSearch("");
	};

	return (
		<form
			onSubmit={searchVideos}
			className="flex-1 sm:flex-none sm:w-1/2 flex flex-row h-9 text-white border overflow-hidden border-stone-700 bg-stone-950 rounded-full"
		>
			<input
				className="flex w-full h-full bg-stone-950 ml-4 mr-1 placeholder:text-stone-500 outline-none"
				placeholder="Search or YouTube Url"
				type="text"
				required
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			{search.trim().length > 0 && (
				<button
					onClick={clearSearch}
					type="button"
					className="hover:bg-stone-800 rounded-full transition-colors duration-300"
				>
					<TfiClose className="mx-2" />
				</button>
			)}
			<button
				type="submit"
				className="bg-stone-800 flex justify-center items-center border-l border-stone-700 p-2 transition-all duration-300 hover:text-primary"
			>
				<CiSearch className="text-xl mx-3" />
			</button>
		</form>
	);
};

export default SearchBar;
