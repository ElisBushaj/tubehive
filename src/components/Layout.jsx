import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] w-full flex justify-center items-center">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
