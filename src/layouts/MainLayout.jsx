import { Outlet } from "react-router-dom";
import Banner from "../constant/Banner";
import Navbar from "../constant/Navbar";
import Footer from "../constant/Footer";


const MainLayout = () =>
{
    return (
        <div className="min-h-screen">
            <Banner />
            <Navbar />

            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;