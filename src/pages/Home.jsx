import Results from "../components/Home/Results/Results";
import Search from "../components/Home/Search";
import Loading from "../components/Loading";
import { useHome } from "../context/homeContext";

const RenderMain = () => {
  const { videos, loading } = useHome();

  if (loading) {
    return <Loading />;
  }

  return videos.length > 0 ? <Results /> : <Search />;
};

export default function Home() {
  return (
    <div className="flex w-full my-7 h-full justify-center items-center">
      <RenderMain />
    </div>
  );
}
