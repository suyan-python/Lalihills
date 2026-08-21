import { Outlet } from "react-router-dom";
import Banner from "../constant/Banner";
import Navbar from "../constant/Navbar";


const MainLayout = () =>
{
    return (
        <div className="min-h-screen">
            <Banner />
            <Navbar />

            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default MainLayout;