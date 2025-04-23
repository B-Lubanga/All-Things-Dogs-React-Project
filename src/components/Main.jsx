import Navbar from "./Navbar";
import Footer from "./Footer";

const Main = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen">{children}</main>{" "}
      {/* children = page content */}
      <Footer />
    </>
  );
};

export default Main;
