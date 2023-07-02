import Layout from "./components/Layout";
import Home from "./pages/Home";
import { DownloadProvider } from "./context/downloadContext";
import { HomeProvider } from "./context/homeContext";

const App = () => {
  return (
    <DownloadProvider>
      <HomeProvider>
        <Layout>
          <Home />
        </Layout>
      </HomeProvider>
    </DownloadProvider>
  );
};

export default App;
