import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage, SearchPage } from "./pages";

const App = () => {
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
