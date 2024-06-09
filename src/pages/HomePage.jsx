import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

export default function HomePage() {
	const [search, setSearch] = useState("");

	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate(`/search?q=${encodeURIComponent(search)}`);
	};

	return (
		<div className="flex w-full my-7 h-full justify-center items-center">
			<div className="w-[90%] xs:w-4/5 sm:w-3/5 lg:w-2/5 flex space-y-3 flex-col justify-center items-center">
				<Logo />
				<form
					onSubmit={handleSubmit}
					className="flex space-y-3 w-full flex-col text-white"
				>
					<input
						className="w-full h-9 placeholder:text-stone-500 rounded bg-stone-900 p-2 outline-none"
						placeholder="Search or YouTube Url"
						type="text"
						required
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<button
						type="submit"
						className="bg-stone-900 p-2 rounded transition-all duration-300 hover:text-primary"
					>
						Search
					</button>
				</form>
			</div>
		</div>
	);
}
