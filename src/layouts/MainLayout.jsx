import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import NavBar from "../shared/NavBar";
const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
