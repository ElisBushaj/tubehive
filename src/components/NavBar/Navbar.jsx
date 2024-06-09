import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {
	const location = useLocation();

	return (
		<nav className="flex w-full px-5 sm:px-0 h-16 flex-row items-center justify-between fixed top-0 bg-black z-50">
			<div className="select-none w-40 relative hidden xs:flex">
				<Link to="/" className="cursor-pointer p-1 m-4">
					<img
						src="/nav.png"
						className="object-contain w-28 animate-animate absolute"
						alt=""
					/>
					<img
						src="/nav1.png"
						className="object-contain w-28"
						alt=""
					/>
				</Link>
			</div>
			{location.pathname === "/search" && <SearchBar />}
			<div className="w-[160px] hidden sm:flex" />
		</nav>
	);
}
