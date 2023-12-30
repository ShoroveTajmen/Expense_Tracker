import { Outlet } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="max-w-[1600px] mx-auto bg-[#FFF4F4]">
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
