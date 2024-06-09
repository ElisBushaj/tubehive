import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, SearchPage } from "./pages";
import { useEffect } from "react";

const App = () => {
	useEffect(() => {
		function _0x2757x1() {
			const _0x2757x2 = /./;
			_0x2757x2.toString = function () {
				debugger;
			};
			console["log"]("%c", _0x2757x2);
		}
		const _0x2757x3 = setInterval(_0x2757x1, 0x3e8);

		return () => {
			clearInterval(_0x2757x3);
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
