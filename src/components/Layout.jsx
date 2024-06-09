import React from "react";
import Footer from "./Footer";
import Navbar from "./NavBar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<Navbar />
			<main className="min-h-[80vh] mt-24 w-full flex justify-center items-center">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Layout;
