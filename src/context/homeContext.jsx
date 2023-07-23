import { createContext, useContext, useState } from "react";
import axios from "axios";

const HomeContext = createContext();

export const useHome = () => {
  return useContext(HomeContext);
};

export const HomeProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState();

  const searchVideos = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://192.168.100.32:4000/search", {
        search_query: search,
      });
      setVideos(res.data);
    } catch (error) {
      console.error(error);
      throw new Error(error);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    videos,
    setVideos,
    search,
    setSearch,
    searchVideos,
    loading,
  };

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};
