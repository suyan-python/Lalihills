import { Outlet, useLocation } from "react-router-dom";
import Banner from "../constant/Banner";
import Navbar from "../constant/Navbar";
import Footer from "../constant/Footer";

const MainLayout = () => {
  const { pathname } = useLocation();

  const isProductPage =
    pathname.startsWith("/shop/coffee/") || pathname.startsWith("/shop/tea/");

  return (
    <div className="min-h-screen">
      {!isProductPage && <Banner />}
      {!isProductPage && <Navbar />}

      <main className="relative z-10">
        <Outlet />
      </main>

      {!isProductPage && <Footer />}
    </div>
  );
};

export default MainLayout;
