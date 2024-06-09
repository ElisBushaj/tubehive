import React from "react";
import Footer from "./Footer";
import Navbar from "./NavBar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className="w-screen flex flex-col">
			<Navbar />
			<main className="min-h-[80vh] mt-24 w-full flex justify-center items-center">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
