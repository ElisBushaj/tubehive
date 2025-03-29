import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, SearchPage } from "./pages";
import { useEffect } from "react";

const App = () => {
	useEffect(() => {
		function isDevToolsOpen() {
			const devTools = /./;
			devTools.toString = function () {
				// If this function is overridden, dev tools are likely open
				// eslint-disable-next-line no-debugger
				debugger;
			};
			console.log("%c", devTools);
		}

		// Set up an interval to continuously check if dev tools are open
		const interval = setInterval(isDevToolsOpen, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path="search" element={<SearchPage />} />
					<Route path="*" element={<h1>Not Found</h1>} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
