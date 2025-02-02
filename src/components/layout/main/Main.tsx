import { Outlet } from "react-router-dom";
import Navbar from "../../../pages/home/Navbar";
import Footer from "../../../pages/home/home-components/Footer";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Main;
